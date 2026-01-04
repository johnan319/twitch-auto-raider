# Raid Autopilot

A Twitch SaaS app that helps broadcasters quickly choose and start raids at end-of-stream with minimal friction.

## Features

- **Smart Recommendations**: Hybrid approach combining your favorite streamers with same-category discovery
- **One-Click Raids**: Start a raid and send chat messages with a single click
- **Raid History**: Track all your raids with optional ratings to improve future recommendations
- **Warm List**: Maintain a list of favorite streamers you like to raid
- **Auto Chat Messages**: Customizable raid announcement and "raid & run" messages
- **EventSub Integration**: Confirms when raids actually execute and captures viewer counts

## Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Backend**: Fastify + TypeScript
- **Database**: PostgreSQL + Prisma
- **Monorepo**: pnpm + Turborepo
- **EventSub**: WebSocket transport for real-time raid confirmations

## Prerequisites

- Node.js 20+
- pnpm 9+
- Docker (for PostgreSQL)
- Twitch Developer Application

## Setup

### 1. Clone and install dependencies

```bash
pnpm install
```

### 2. Start the database

```bash
docker-compose up -d postgres
```

### 3. Configure environment

Copy `.env.example` to `.env` in the root and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:

| Variable | Description |
|----------|-------------|
| `TWITCH_CLIENT_ID` | Your Twitch application client ID |
| `TWITCH_CLIENT_SECRET` | Your Twitch application client secret |
| `TWITCH_REDIRECT_URI` | OAuth callback URL (e.g., `http://localhost:3000/api/auth/callback/twitch`) |
| `DATABASE_URL` | PostgreSQL connection string |
| `ENCRYPTION_KEY` | 64-character hex string for token encryption |
| `SESSION_SECRET` | Random string for session signing |

Generate an encryption key:
```bash
openssl rand -hex 32
```

### 4. Create Twitch Application

1. Go to [Twitch Developer Console](https://dev.twitch.tv/console/apps)
2. Create a new application
3. Set OAuth Redirect URL to: `http://localhost:3000/api/auth/callback/twitch`
4. Copy the Client ID and generate a Client Secret

### 5. Initialize the database

```bash
pnpm db:generate
pnpm db:push
```

### 6. Start the development servers

```bash
pnpm dev
```

This starts:
- Frontend: http://localhost:3000
- API: http://localhost:3001

## Project Structure

```
raid-autopilot/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   └── src/
│   │       ├── app/         # Pages (App Router)
│   │       ├── components/  # React components
│   │       └── lib/         # API client & hooks
│   └── api/                 # Fastify backend
│       └── src/
│           ├── routes/      # API endpoints
│           ├── services/    # Business logic
│           └── lib/         # Utilities
├── packages/
│   └── database/            # Prisma schema & client
├── docker-compose.yml
└── turbo.json
```

## API Endpoints

### Authentication
- `GET /auth/twitch/start` - Start OAuth flow
- `GET /auth/twitch/callback` - OAuth callback
- `POST /auth/logout` - Logout
- `GET /api/me` - Get current user

### Raids
- `GET /api/status` - Get stream status (live/offline)
- `POST /api/recommendations` - Get raid recommendations
- `POST /api/raid/start` - Start a raid
- `POST /api/raid/cancel` - Cancel pending raid
- `POST /api/raid/rate` - Rate a past raid
- `GET /api/history` - Get raid history

### Warm List
- `GET /api/warmlist` - Get favorites
- `POST /api/warmlist` - Add to favorites
- `DELETE /api/warmlist/:id` - Remove from favorites

### Settings
- `GET /api/settings` - Get user settings
- `PUT /api/settings` - Update settings
- `POST /api/excludes` - Add to exclude list
- `DELETE /api/excludes/:id` - Remove from exclude list

## Twitch Scopes Required

- `channel:manage:raids` - Start and cancel raids
- `user:write:chat` - Send chat messages
- `user:read:email` - Get user profile (optional)

## How It Works

1. **Authentication**: Users connect their Twitch account via OAuth
2. **Recommendations**: The app fetches:
   - Live streamers from your Favorites list
   - Live streamers in the same category (discovery)
3. **Filtering**: Recommendations are filtered by viewer count range and exclude list
4. **Scoring**: Candidates are ranked by priority, past ratings, and recency
5. **Raiding**: One click starts the raid and sends customizable chat messages
6. **Confirmation**: EventSub WebSocket confirms when the raid actually executes

## License

MIT
