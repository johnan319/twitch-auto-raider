
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  twitchUserId: 'twitchUserId',
  login: 'login',
  displayName: 'displayName',
  profileImageUrl: 'profileImageUrl',
  createdAt: 'createdAt'
};

exports.Prisma.OAuthTokenScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  expiresAt: 'expiresAt',
  scopes: 'scopes',
  updatedAt: 'updatedAt'
};

exports.Prisma.SettingsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  allowedLanguages: 'allowedLanguages',
  matureContentFilter: 'matureContentFilter',
  broadcasterTypeFilter: 'broadcasterTypeFilter',
  minTargetViewers: 'minTargetViewers',
  maxTargetViewers: 'maxTargetViewers',
  viewerCountPreference: 'viewerCountPreference',
  sameCategoryOnly: 'sameCategoryOnly',
  streamDurationPreference: 'streamDurationPreference',
  raidMessage: 'raidMessage',
  raidRunMessage: 'raidRunMessage'
};

exports.Prisma.WarmListEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  broadcasterId: 'broadcasterId',
  broadcasterLogin: 'broadcasterLogin',
  broadcasterName: 'broadcasterName',
  profileImageUrl: 'profileImageUrl',
  notes: 'notes',
  priority: 'priority',
  createdAt: 'createdAt'
};

exports.Prisma.RaidExcludeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  excludedBroadcasterId: 'excludedBroadcasterId',
  reason: 'reason'
};

exports.Prisma.RaidHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fromBroadcasterId: 'fromBroadcasterId',
  toBroadcasterId: 'toBroadcasterId',
  toBroadcasterLogin: 'toBroadcasterLogin',
  toBroadcasterName: 'toBroadcasterName',
  categoryId: 'categoryId',
  categoryName: 'categoryName',
  startedAt: 'startedAt',
  executedAt: 'executedAt',
  status: 'status',
  viewerCountAtRaid: 'viewerCountAtRaid',
  manualRating: 'manualRating',
  notes: 'notes'
};

exports.Prisma.CategoryBlocklistScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  categoryId: 'categoryId',
  categoryName: 'categoryName'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  data: 'data',
  expiresAt: 'expiresAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.MatureFilter = exports.$Enums.MatureFilter = {
  INCLUDE: 'INCLUDE',
  EXCLUDE: 'EXCLUDE',
  ONLY: 'ONLY'
};

exports.BroadcasterTypeFilter = exports.$Enums.BroadcasterTypeFilter = {
  ALL: 'ALL',
  AFFILIATE: 'AFFILIATE',
  PARTNER: 'PARTNER'
};

exports.ViewerPreference = exports.$Enums.ViewerPreference = {
  SMALLER: 'SMALLER',
  SIMILAR: 'SIMILAR',
  LARGER: 'LARGER',
  ANY: 'ANY'
};

exports.DurationPreference = exports.$Enums.DurationPreference = {
  NEW: 'NEW',
  ESTABLISHED: 'ESTABLISHED',
  ANY: 'ANY'
};

exports.RaidStatus = exports.$Enums.RaidStatus = {
  QUEUED: 'QUEUED',
  CANCELED: 'CANCELED',
  EXECUTED: 'EXECUTED',
  FAILED: 'FAILED'
};

exports.Prisma.ModelName = {
  User: 'User',
  OAuthToken: 'OAuthToken',
  Settings: 'Settings',
  WarmListEntry: 'WarmListEntry',
  RaidExclude: 'RaidExclude',
  RaidHistory: 'RaidHistory',
  CategoryBlocklist: 'CategoryBlocklist',
  Session: 'Session'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
