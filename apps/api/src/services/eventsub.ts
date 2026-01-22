import WebSocket from 'ws';
import { prisma } from '../lib/prisma.js';
import { config } from '../lib/config.js';
import { loggers } from '../lib/logger.js';
import { twitchApi } from './twitch-api.js';
import { getAccessToken } from '../routes/auth.js';

const log = loggers.eventsub;
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

    this.ws = new WebSocket(url);

    this.ws.on('open', () => {
      // Connection established
    });

    this.ws.on('message', (data: WebSocket.Data) => {
      try {
        const message: EventSubMessage = JSON.parse(data.toString());
        this.handleMessage(message);
      } catch (error) {
        log.error({ error: error instanceof Error ? error.message : String(error) }, 'Failed to parse WebSocket message');
      }
    });

    this.ws.on('close', (code, reason) => {
      log.warn({ code, reason: reason.toString() }, 'WebSocket connection closed');
      this.cleanup();

      // Reconnect after a delay
      setTimeout(() => this.connect(), 5000);
    });

    this.ws.on('error', (error) => {
      log.error({ error: error.message }, 'WebSocket error');
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
        break;

      case 'notification':
        this.handleNotification(message);
        break;

      case 'revocation':
        log.warn({ subscriptionId: message.payload.subscription?.id, type: message.payload.subscription?.type }, 'Subscription revoked');
        break;
    }
  }

  private async handleWelcome(message: EventSubMessage): Promise<void> {
    this.sessionId = message.payload.session?.id || null;
    const keepaliveSeconds = message.payload.session?.keepalive_timeout_seconds || 10;

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
      log.warn({ timeoutSeconds }, 'Keepalive timeout exceeded, reconnecting');
      this.ws?.close();
    }, (timeoutSeconds + 10) * 1000);
  }

  private async handleNotification(message: EventSubMessage): Promise<void> {
    const subscriptionType = message.metadata.subscription_type;
    const event = message.payload.event;

    if (subscriptionType === 'channel.raid' && event) {
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

      // Send arrival message to target's chat if configured
      await this.sendArrivalMessage(event);
    }
  }

  private async sendArrivalMessage(event: NonNullable<EventSubMessage['payload']['event']>): Promise<void> {
    try {
      // Find user by their Twitch ID
      const user = await prisma.user.findUnique({
        where: { twitchUserId: event.from_broadcaster_user_id },
        include: { settings: true },
      });

      if (!user?.settings?.raidArrivalMessage) {
        return; // No arrival message configured
      }

      const arrivalMessage = user.settings.raidArrivalMessage
        .replace('{target}', event.to_broadcaster_user_name)
        .replace('{source}', event.from_broadcaster_user_name)
        .replace('{viewers}', event.viewers.toString());

      if (!arrivalMessage.trim()) {
        return; // Empty message after replacements
      }

      const accessToken = await getAccessToken(user.id);

      await twitchApi.sendChatMessage(
        accessToken,
        event.to_broadcaster_user_id, // Target's channel
        user.twitchUserId,             // Sender (raider)
        arrivalMessage
      );
    } catch (error) {
      log.warn({
        fromBroadcasterId: event.from_broadcaster_user_id,
        toBroadcasterId: event.to_broadcaster_user_id,
        error: error instanceof Error ? error.message : String(error),
      }, 'Failed to send arrival message (non-fatal)');
    }
  }

  private async subscribeAllUsers(): Promise<void> {
    if (!this.sessionId) {
      log.warn('No session ID, cannot subscribe users');
      return;
    }

    const users = await prisma.user.findMany({
      include: { oauthToken: true },
    });

    for (const user of users) {
      if (user.oauthToken) {
        try {
          await this.subscribeToRaids(user.twitchUserId, user.oauthToken.accessToken);
        } catch (error) {
          log.error({ userId: user.id, twitchUserId: user.twitchUserId, error: error instanceof Error ? error.message : String(error) }, 'Failed to subscribe user');
        }
      }
    }
  }

  async subscribeToRaids(broadcasterId: string, accessToken: string): Promise<void> {
    if (!this.sessionId) {
      return;
    }

    if (this.subscriptions.has(broadcasterId)) {
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
        log.error({ broadcasterId, status: response.status, error }, 'Failed to create subscription');
        return;
      }

      const data = await response.json() as { data: Array<{ id: string }> };
      const subscriptionId = data.data?.[0]?.id;

      if (subscriptionId) {
        this.subscriptions.set(broadcasterId, subscriptionId);
      }
    } catch (error) {
      log.error({ broadcasterId, error: error instanceof Error ? error.message : String(error) }, 'Subscription error');
    }
  }

  async unsubscribeFromRaids(broadcasterId: string, accessToken: string): Promise<void> {
    const subscriptionId = this.subscriptions.get(broadcasterId);
    if (!subscriptionId) {
      return;
    }

    try {
      const response = await fetch(`${TWITCH_API_BASE}/eventsub/subscriptions?id=${subscriptionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Client-Id': config.twitch.clientId,
        },
      });

      if (response.ok) {
        this.subscriptions.delete(broadcasterId);
      } else {
        const error = await response.text();
        log.error({ broadcasterId, subscriptionId, status: response.status, error }, 'Failed to unsubscribe');
      }
    } catch (error) {
      log.error({ broadcasterId, subscriptionId, error: error instanceof Error ? error.message : String(error) }, 'Unsubscribe error');
    }
  }
}

export const eventSubService = new EventSubService();
