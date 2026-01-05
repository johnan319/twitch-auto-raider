import WebSocket from 'ws';
import { prisma } from '../lib/prisma.js';
import { config } from '../lib/config.js';
import { loggers } from '../lib/logger.js';

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

    log.info({ url }, 'Connecting to EventSub WebSocket');

    this.ws = new WebSocket(url);

    this.ws.on('open', () => {
      log.info('WebSocket connection established');
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
      log.info('Scheduling reconnection in 5 seconds');
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
    const { message_type, message_id } = message.metadata;

    log.debug({ messageType: message_type, messageId: message_id }, 'Received EventSub message');

    switch (message_type) {
      case 'session_welcome':
        this.handleWelcome(message);
        break;

      case 'session_keepalive':
        this.resetKeepalive(message.payload.session?.keepalive_timeout_seconds || 10);
        break;

      case 'session_reconnect':
        this.reconnectUrl = message.payload.session?.reconnect_url || null;
        log.info({ reconnectUrl: this.reconnectUrl }, 'Reconnect requested by server');
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

    log.info({ sessionId: this.sessionId, keepaliveSeconds }, 'EventSub session established');

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
      log.info({
        from: event.from_broadcaster_user_name,
        fromId: event.from_broadcaster_user_id,
        to: event.to_broadcaster_user_name,
        toId: event.to_broadcaster_user_id,
        viewers: event.viewers,
      }, 'Raid event received');

      // Update raid history
      const updateResult = await prisma.raidHistory.updateMany({
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

      log.info({ updatedCount: updateResult.count, fromId: event.from_broadcaster_user_id, toId: event.to_broadcaster_user_id }, 'Raid history updated');
    }
  }

  private async subscribeAllUsers(): Promise<void> {
    if (!this.sessionId) {
      log.warn('No session ID, cannot subscribe users');
      return;
    }

    log.info('Subscribing all users to raid events');

    const users = await prisma.user.findMany({
      include: { oauthToken: true },
    });

    log.info({ userCount: users.length }, 'Found users to subscribe');

    let successCount = 0;
    let errorCount = 0;

    for (const user of users) {
      if (user.oauthToken) {
        try {
          await this.subscribeToRaids(user.twitchUserId, user.oauthToken.accessToken);
          successCount++;
        } catch (error) {
          errorCount++;
          log.error({ userId: user.id, twitchUserId: user.twitchUserId, error: error instanceof Error ? error.message : String(error) }, 'Failed to subscribe user');
        }
      }
    }

    log.info({ successCount, errorCount, total: users.length }, 'Completed user subscription batch');
  }

  async subscribeToRaids(broadcasterId: string, accessToken: string): Promise<void> {
    if (!this.sessionId) {
      log.debug({ broadcasterId }, 'No session ID, skipping subscription');
      return;
    }

    if (this.subscriptions.has(broadcasterId)) {
      log.debug({ broadcasterId }, 'Already subscribed to raids');
      return;
    }

    log.debug({ broadcasterId }, 'Creating raid subscription');

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
        log.info({ broadcasterId, subscriptionId }, 'Subscribed to channel.raid');
      }
    } catch (error) {
      log.error({ broadcasterId, error: error instanceof Error ? error.message : String(error) }, 'Subscription error');
    }
  }

  async unsubscribeFromRaids(broadcasterId: string, accessToken: string): Promise<void> {
    const subscriptionId = this.subscriptions.get(broadcasterId);
    if (!subscriptionId) {
      log.debug({ broadcasterId }, 'No subscription to remove');
      return;
    }

    log.debug({ broadcasterId, subscriptionId }, 'Removing raid subscription');

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
        log.info({ broadcasterId, subscriptionId }, 'Unsubscribed from channel.raid');
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
