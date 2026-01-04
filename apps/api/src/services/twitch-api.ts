import { config } from '../lib/config.js';

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
    const response = await fetch(`${TWITCH_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Client-Id': config.twitch.clientId,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Twitch API error: ${response.status} - ${error}`);
    }

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

    return `${TWITCH_AUTH_BASE}/authorize?${params}`;
  }

  async exchangeCode(code: string): Promise<TwitchTokenResponse> {
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

    return response.json() as Promise<TwitchTokenResponse>;
  }

  async refreshToken(refreshToken: string): Promise<TwitchTokenResponse> {
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

    return response.json() as Promise<TwitchTokenResponse>;
  }

  async getUser(accessToken: string): Promise<TwitchUser> {
    const data = await this.fetch<{ data: TwitchUser[] }>('/users', accessToken);
    if (!data.data?.[0]) {
      throw new Error('No user data returned');
    }
    return data.data[0];
  }

  async getUserByLogin(accessToken: string, login: string): Promise<TwitchUser | null> {
    const data = await this.fetch<{ data: TwitchUser[] }>(`/users?login=${encodeURIComponent(login)}`, accessToken);
    return data.data?.[0] || null;
  }

  async getStreams(accessToken: string, userIds: string[]): Promise<TwitchStream[]> {
    if (userIds.length === 0) return [];

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

    return streams;
  }

  async getStreamsByCategory(
    accessToken: string,
    gameId: string,
    first: number = 50
  ): Promise<TwitchStream[]> {
    const params = new URLSearchParams({
      game_id: gameId,
      first: first.toString(),
    });

    const data = await this.fetch<{ data: TwitchStream[] }>(
      `/streams?${params}`,
      accessToken
    );

    return data.data;
  }

  async searchChannels(
    accessToken: string,
    query: string,
    liveOnly: boolean = true,
    first: number = 20
  ): Promise<TwitchChannel[]> {
    const params = new URLSearchParams({
      query,
      live_only: liveOnly.toString(),
      first: first.toString(),
    });

    const data = await this.fetch<{ data: TwitchChannel[] }>(
      `/search/channels?${params}`,
      accessToken
    );

    return data.data;
  }

  async startRaid(
    accessToken: string,
    fromBroadcasterId: string,
    toBroadcasterId: string
  ): Promise<{ created_at: string; is_mature: boolean }> {
    const params = new URLSearchParams({
      from_broadcaster_id: fromBroadcasterId,
      to_broadcaster_id: toBroadcasterId,
    });

    const data = await this.fetch<{ data: Array<{ created_at: string; is_mature: boolean }> }>(
      `/raids?${params}`,
      accessToken,
      { method: 'POST' }
    );

    return data.data[0];
  }

  async cancelRaid(accessToken: string, broadcasterId: string): Promise<void> {
    const params = new URLSearchParams({
      broadcaster_id: broadcasterId,
    });

    await fetch(`${TWITCH_API_BASE}/raids?${params}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Client-Id': config.twitch.clientId,
      },
    });
  }

  async sendChatMessage(
    accessToken: string,
    broadcasterId: string,
    senderId: string,
    message: string
  ): Promise<void> {
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
  }
}

export const twitchApi = new TwitchApiService();
