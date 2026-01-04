import WebSocket from 'ws';
import { prisma } from '../lib/prisma.js';
import { config } from '../lib/config.js';
import { decrypt } from '../lib/encryption.js';

const EVENTSUB_WS_URL = 'wss://eventsub.wss.twitch.tv/ws';
const TWITCH_API_BASE = 'https://api.twitch.tv/helix';

interface EventSubMessage {
  metadata: {
    message_id: string;
    message_type: string;
    message_timestamp: string;
    subscription_type?: string;
    subscription_version?: string;
  };
  payload: {
    session?: {
      id: string;
      status: string;
      keepalive_timeout_seconds: number;
      reconnect_url?: string;
    };
    subscription?: {
      id: string;
      type: string;
      condition: Record<string, string>;
    };
    event?: {
      from_broadcaster_user_id: string;
      from_broadcaster_user_login: string;
      from_broadcaster_user_name: string;
      to_broadcaster_user_id: string;
      to_broadcaster_user_login: string;
      to_broadcaster_user_name: string;
      viewers: number;
    };
  };
}

export class EventSubService {
  private ws: WebSocket | null = null;
  private sessionId: string | null = null;
  private reconnectUrl: string | null = null;
  private keepaliveTimeout: NodeJS.Timeout | null = null;
  private subscriptions: Map<string, string> = new Map(); // broadcasterId -> subscriptionId

  async connect(): Promise<void> {
    const url = this.reconnectUrl || EVENTSUB_WS_URL;
    this.reconnectUrl = null;

    console.log(`[EventSub] Connecting to ${url}`);

    this.ws = new WebSocket(url);

    this.ws.on('open', () => {
      console.log('[EventSub] WebSocket connected');
    });

    this.ws.on('message', (data: WebSocket.Data) => {
      try {
        const message: EventSubMessage = JSON.parse(data.toString());
        this.handleMessage(message);
      } catch (error) {
        console.error('[EventSub] Failed to parse message:', error);
      }
    });

    this.ws.on('close', (code, reason) => {
      console.log(`[EventSub] WebSocket closed: ${code} - ${reason}`);
      this.cleanup();

      // Reconnect after a delay
      setTimeout(() => this.connect(), 5000);
    });

    this.ws.on('error', (error) => {
      console.error('[EventSub] WebSocket error:', error);
    });
  }

  private cleanup(): void {
    if (this.keepaliveTimeout) {
      clearTimeout(this.keepaliveTimeout);
      this.keepaliveTimeout = null;
    }
    this.sessionId = null;
  }

  private handleMessage(message: EventSubMessage): void {
    const { message_type } = message.metadata;

    switch (message_type) {
      case 'session_welcome':
        this.handleWelcome(message);
        break;

      case 'session_keepalive':
        this.resetKeepalive(message.payload.session?.keepalive_timeout_seconds || 10);
        break;

      case 'session_reconnect':
        this.reconnectUrl = message.payload.session?.reconnect_url || null;
        console.log('[EventSub] Reconnect requested');
        break;

      case 'notification':
        this.handleNotification(message);
        break;

      case 'revocation':
        console.log('[EventSub] Subscription revoked:', message.payload.subscription?.id);
        break;
    }
  }

  private async handleWelcome(message: EventSubMessage): Promise<void> {
    this.sessionId = message.payload.session?.id || null;
    const keepaliveSeconds = message.payload.session?.keepalive_timeout_seconds || 10;

    console.log(`[EventSub] Session established: ${this.sessionId}`);

    this.resetKeepalive(keepaliveSeconds);

    // Subscribe to channel.raid for all authenticated users
    await this.subscribeAllUsers();
  }

  private resetKeepalive(timeoutSeconds: number): void {
    if (this.keepaliveTimeout) {
      clearTimeout(this.keepaliveTimeout);
    }

    // If we don't receive a keepalive within the timeout, reconnect
    this.keepaliveTimeout = setTimeout(() => {
      console.log('[EventSub] Keepalive timeout, reconnecting...');
      this.ws?.close();
    }, (timeoutSeconds + 10) * 1000);
  }

  private async handleNotification(message: EventSubMessage): Promise<void> {
    const subscriptionType = message.metadata.subscription_type;
    const event = message.payload.event;

    if (subscriptionType === 'channel.raid' && event) {
      console.log(`[EventSub] Raid event: ${event.from_broadcaster_user_name} -> ${event.to_broadcaster_user_name} (${event.viewers} viewers)`);

      // Update raid history
      await prisma.raidHistory.updateMany({
        where: {
          fromBroadcasterId: event.from_broadcaster_user_id,
          toBroadcasterId: event.to_broadcaster_user_id,
          status: 'QUEUED',
        },
        data: {
          status: 'EXECUTED',
          executedAt: new Date(),
          viewerCountAtRaid: event.viewers,
        },
      });
    }
  }

  private async subscribeAllUsers(): Promise<void> {
    if (!this.sessionId) return;

    const users = await prisma.user.findMany({
      include: { oauthToken: true },
    });

    for (const user of users) {
      if (user.oauthToken) {
        await this.subscribeToRaids(user.twitchUserId, user.oauthToken.accessToken);
      }
    }
  }

  async subscribeToRaids(broadcasterId: string, accessToken: string): Promise<void> {
    if (!this.sessionId) {
      console.log('[EventSub] No session, skipping subscription');
      return;
    }

    if (this.subscriptions.has(broadcasterId)) {
      console.log(`[EventSub] Already subscribed to raids for ${broadcasterId}`);
      return;
    }

    try {
      const response = await fetch(`${TWITCH_API_BASE}/eventsub/subscriptions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Client-Id': config.twitch.clientId,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'channel.raid',
          version: '1',
          condition: {
            from_broadcaster_user_id: broadcasterId,
          },
          transport: {
            method: 'websocket',
            session_id: this.sessionId,
          },
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`[EventSub] Failed to subscribe: ${error}`);
        return;
      }

      const data = await response.json() as { data: Array<{ id: string }> };
      const subscriptionId = data.data?.[0]?.id;

      if (subscriptionId) {
        this.subscriptions.set(broadcasterId, subscriptionId);
        console.log(`[EventSub] Subscribed to channel.raid for ${broadcasterId}`);
      }
    } catch (error) {
      console.error('[EventSub] Subscription error:', error);
    }
  }

  async unsubscribeFromRaids(broadcasterId: string, accessToken: string): Promise<void> {
    const subscriptionId = this.subscriptions.get(broadcasterId);
    if (!subscriptionId) return;

    try {
      await fetch(`${TWITCH_API_BASE}/eventsub/subscriptions?id=${subscriptionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Client-Id': config.twitch.clientId,
        },
      });

      this.subscriptions.delete(broadcasterId);
      console.log(`[EventSub] Unsubscribed from channel.raid for ${broadcasterId}`);
    } catch (error) {
      console.error('[EventSub] Unsubscribe error:', error);
    }
  }
}

export const eventSubService = new EventSubService();
