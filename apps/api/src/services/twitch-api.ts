import { config } from '../lib/config.js';
import { loggers, loggedApiCall } from '../lib/logger.js';

const log = loggers.twitch;
const TWITCH_API_BASE = 'https://api.twitch.tv/helix';
const TWITCH_AUTH_BASE = 'https://id.twitch.tv/oauth2';

interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  profile_image_url: string;
  email?: string;
}

interface TwitchStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  title: string;
  viewer_count: number;
  started_at: string;
  thumbnail_url: string;
  language: string;
  is_mature: boolean;
}

interface TwitchTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string[];
  token_type: string;
}

interface TwitchChannel {
  id: string;
  broadcaster_login: string;
  display_name: string;
  broadcaster_language: string;
  game_id: string;
  game_name: string;
  title: string;
  is_live: boolean;
}

export class TwitchApiService {
  private async fetch<T>(
    endpoint: string,
    accessToken: string,
    options: RequestInit = {}
  ): Promise<T> {
    const start = Date.now();
    const method = options.method || 'GET';

    log.debug({ endpoint, method }, 'Making Twitch API request');

    const response = await fetch(`${TWITCH_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Client-Id': config.twitch.clientId,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const duration = Date.now() - start;

    if (!response.ok) {
      const error = await response.text();
      log.error({ endpoint, method, status: response.status, error, duration }, 'Twitch API error');
      throw new Error(`Twitch API error: ${response.status} - ${error}`);
    }

    log.debug({ endpoint, method, status: response.status, duration }, 'Twitch API response received');
    return response.json() as Promise<T>;
  }

  getAuthorizationUrl(state: string): string {
    const params = new URLSearchParams({
      client_id: config.twitch.clientId,
      redirect_uri: config.twitch.redirectUri,
      response_type: 'code',
      scope: config.twitch.scopes.join(' '),
      state,
    });

    const url = `${TWITCH_AUTH_BASE}/authorize?${params}`;
    log.debug({ scopes: config.twitch.scopes }, 'Generated authorization URL');
    return url;
  }

  async exchangeCode(code: string): Promise<TwitchTokenResponse> {
    return loggedApiCall(log, 'exchangeCode', {}, async () => {
      const response = await fetch(`${TWITCH_AUTH_BASE}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: config.twitch.clientId,
          client_secret: config.twitch.clientSecret,
          code,
          grant_type: 'authorization_code',
          redirect_uri: config.twitch.redirectUri,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Token exchange failed: ${error}`);
      }

      const tokens = await response.json() as TwitchTokenResponse;
      log.info({ scopes: tokens.scope, expiresIn: tokens.expires_in }, 'Token exchange successful');
      return tokens;
    });
  }

  async refreshToken(refreshToken: string): Promise<TwitchTokenResponse> {
    return loggedApiCall(log, 'refreshToken', {}, async () => {
      const response = await fetch(`${TWITCH_AUTH_BASE}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: config.twitch.clientId,
          client_secret: config.twitch.clientSecret,
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Token refresh failed: ${error}`);
      }

      const tokens = await response.json() as TwitchTokenResponse;
      log.info({ expiresIn: tokens.expires_in }, 'Token refresh successful');
      return tokens;
    });
  }

  async getUser(accessToken: string): Promise<TwitchUser> {
    return loggedApiCall(log, 'getUser', {}, async () => {
      const data = await this.fetch<{ data: TwitchUser[] }>('/users', accessToken);
      if (!data.data?.[0]) {
        throw new Error('No user data returned');
      }
      const user = data.data[0];
      log.info({ userId: user.id, login: user.login }, 'Fetched user profile');
      return user;
    });
  }

  async getUserByLogin(accessToken: string, login: string): Promise<TwitchUser | null> {
    return loggedApiCall(log, 'getUserByLogin', { login }, async () => {
      const data = await this.fetch<{ data: TwitchUser[] }>(`/users?login=${encodeURIComponent(login)}`, accessToken);
      const user = data.data?.[0] || null;
      log.debug({ login, found: !!user }, 'User lookup by login');
      return user;
    });
  }

  async getStreams(accessToken: string, userIds: string[]): Promise<TwitchStream[]> {
    if (userIds.length === 0) {
      log.debug('getStreams called with empty userIds');
      return [];
    }

    return loggedApiCall(log, 'getStreams', { userCount: userIds.length }, async () => {
      // API allows max 100 user_ids per request
      const chunks: string[][] = [];
      for (let i = 0; i < userIds.length; i += 100) {
        chunks.push(userIds.slice(i, i + 100));
      }

      const streams: TwitchStream[] = [];
      for (const chunk of chunks) {
        const params = new URLSearchParams();
        chunk.forEach((id) => params.append('user_id', id));

        const data = await this.fetch<{ data: TwitchStream[] }>(
          `/streams?${params}`,
          accessToken
        );
        streams.push(...data.data);
      }

      log.info({ requested: userIds.length, live: streams.length }, 'Fetched stream statuses');
      return streams;
    });
  }

  async getStreamsByCategory(
    accessToken: string,
    gameId: string,
    first: number = 50
  ): Promise<TwitchStream[]> {
    return loggedApiCall(log, 'getStreamsByCategory', { gameId, limit: first }, async () => {
      const params = new URLSearchParams({
        game_id: gameId,
        first: first.toString(),
      });

      const data = await this.fetch<{ data: TwitchStream[] }>(
        `/streams?${params}`,
        accessToken
      );

      log.info({ gameId, streamCount: data.data.length }, 'Fetched category streams');
      return data.data;
    });
  }

  async searchChannels(
    accessToken: string,
    query: string,
    liveOnly: boolean = true,
    first: number = 20
  ): Promise<TwitchChannel[]> {
    return loggedApiCall(log, 'searchChannels', { query, liveOnly, limit: first }, async () => {
      const params = new URLSearchParams({
        query,
        live_only: liveOnly.toString(),
        first: first.toString(),
      });

      const data = await this.fetch<{ data: TwitchChannel[] }>(
        `/search/channels?${params}`,
        accessToken
      );

      log.info({ query, results: data.data.length }, 'Channel search completed');
      return data.data;
    });
  }

  async startRaid(
    accessToken: string,
    fromBroadcasterId: string,
    toBroadcasterId: string
  ): Promise<{ created_at: string; is_mature: boolean }> {
    return loggedApiCall(log, 'startRaid', { fromBroadcasterId, toBroadcasterId }, async () => {
      const params = new URLSearchParams({
        from_broadcaster_id: fromBroadcasterId,
        to_broadcaster_id: toBroadcasterId,
      });

      const data = await this.fetch<{ data: Array<{ created_at: string; is_mature: boolean }> }>(
        `/raids?${params}`,
        accessToken,
        { method: 'POST' }
      );

      log.info({ fromBroadcasterId, toBroadcasterId, isMature: data.data[0].is_mature }, 'Raid started');
      return data.data[0];
    });
  }

  async cancelRaid(accessToken: string, broadcasterId: string): Promise<void> {
    return loggedApiCall(log, 'cancelRaid', { broadcasterId }, async () => {
      const params = new URLSearchParams({
        broadcaster_id: broadcasterId,
      });

      const response = await fetch(`${TWITCH_API_BASE}/raids?${params}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Client-Id': config.twitch.clientId,
        },
      });

      if (!response.ok) {
        const error = await response.text();
        log.error({ broadcasterId, status: response.status, error }, 'Failed to cancel raid');
        throw new Error(`Cancel raid failed: ${error}`);
      }

      log.info({ broadcasterId }, 'Raid cancelled');
    });
  }

  async sendChatMessage(
    accessToken: string,
    broadcasterId: string,
    senderId: string,
    message: string
  ): Promise<void> {
    return loggedApiCall(log, 'sendChatMessage', { broadcasterId, senderId, messageLength: message.length }, async () => {
      await this.fetch(
        '/chat/messages',
        accessToken,
        {
          method: 'POST',
          body: JSON.stringify({
            broadcaster_id: broadcasterId,
            sender_id: senderId,
            message,
          }),
        }
      );

      log.info({ broadcasterId, senderId }, 'Chat message sent');
    });
  }
}

export const twitchApi = new TwitchApiService();
