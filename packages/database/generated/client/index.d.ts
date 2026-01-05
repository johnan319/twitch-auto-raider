
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OAuthToken
 * 
 */
export type OAuthToken = $Result.DefaultSelection<Prisma.$OAuthTokenPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model WarmListEntry
 * 
 */
export type WarmListEntry = $Result.DefaultSelection<Prisma.$WarmListEntryPayload>
/**
 * Model RaidExclude
 * 
 */
export type RaidExclude = $Result.DefaultSelection<Prisma.$RaidExcludePayload>
/**
 * Model RaidHistory
 * 
 */
export type RaidHistory = $Result.DefaultSelection<Prisma.$RaidHistoryPayload>
/**
 * Model CategoryBlocklist
 * 
 */
export type CategoryBlocklist = $Result.DefaultSelection<Prisma.$CategoryBlocklistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MatureFilter: {
  INCLUDE: 'INCLUDE',
  EXCLUDE: 'EXCLUDE',
  ONLY: 'ONLY'
};

export type MatureFilter = (typeof MatureFilter)[keyof typeof MatureFilter]


export const BroadcasterTypeFilter: {
  ALL: 'ALL',
  AFFILIATE: 'AFFILIATE',
  PARTNER: 'PARTNER'
};

export type BroadcasterTypeFilter = (typeof BroadcasterTypeFilter)[keyof typeof BroadcasterTypeFilter]


export const ViewerPreference: {
  SMALLER: 'SMALLER',
  SIMILAR: 'SIMILAR',
  LARGER: 'LARGER',
  ANY: 'ANY'
};

export type ViewerPreference = (typeof ViewerPreference)[keyof typeof ViewerPreference]


export const DurationPreference: {
  NEW: 'NEW',
  ESTABLISHED: 'ESTABLISHED',
  ANY: 'ANY'
};

export type DurationPreference = (typeof DurationPreference)[keyof typeof DurationPreference]


export const RaidStatus: {
  QUEUED: 'QUEUED',
  CANCELED: 'CANCELED',
  EXECUTED: 'EXECUTED',
  FAILED: 'FAILED'
};

export type RaidStatus = (typeof RaidStatus)[keyof typeof RaidStatus]

}

export type MatureFilter = $Enums.MatureFilter

export const MatureFilter: typeof $Enums.MatureFilter

export type BroadcasterTypeFilter = $Enums.BroadcasterTypeFilter

export const BroadcasterTypeFilter: typeof $Enums.BroadcasterTypeFilter

export type ViewerPreference = $Enums.ViewerPreference

export const ViewerPreference: typeof $Enums.ViewerPreference

export type DurationPreference = $Enums.DurationPreference

export const DurationPreference: typeof $Enums.DurationPreference

export type RaidStatus = $Enums.RaidStatus

export const RaidStatus: typeof $Enums.RaidStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.oAuthToken`: Exposes CRUD operations for the **OAuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthTokens
    * const oAuthTokens = await prisma.oAuthToken.findMany()
    * ```
    */
  get oAuthToken(): Prisma.OAuthTokenDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;

  /**
   * `prisma.warmListEntry`: Exposes CRUD operations for the **WarmListEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarmListEntries
    * const warmListEntries = await prisma.warmListEntry.findMany()
    * ```
    */
  get warmListEntry(): Prisma.WarmListEntryDelegate<ExtArgs>;

  /**
   * `prisma.raidExclude`: Exposes CRUD operations for the **RaidExclude** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaidExcludes
    * const raidExcludes = await prisma.raidExclude.findMany()
    * ```
    */
  get raidExclude(): Prisma.RaidExcludeDelegate<ExtArgs>;

  /**
   * `prisma.raidHistory`: Exposes CRUD operations for the **RaidHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaidHistories
    * const raidHistories = await prisma.raidHistory.findMany()
    * ```
    */
  get raidHistory(): Prisma.RaidHistoryDelegate<ExtArgs>;

  /**
   * `prisma.categoryBlocklist`: Exposes CRUD operations for the **CategoryBlocklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryBlocklists
    * const categoryBlocklists = await prisma.categoryBlocklist.findMany()
    * ```
    */
  get categoryBlocklist(): Prisma.CategoryBlocklistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OAuthToken: 'OAuthToken',
    Settings: 'Settings',
    WarmListEntry: 'WarmListEntry',
    RaidExclude: 'RaidExclude',
    RaidHistory: 'RaidHistory',
    CategoryBlocklist: 'CategoryBlocklist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "oAuthToken" | "settings" | "warmListEntry" | "raidExclude" | "raidHistory" | "categoryBlocklist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OAuthToken: {
        payload: Prisma.$OAuthTokenPayload<ExtArgs>
        fields: Prisma.OAuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findFirst: {
            args: Prisma.OAuthTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findMany: {
            args: Prisma.OAuthTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          create: {
            args: Prisma.OAuthTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          createMany: {
            args: Prisma.OAuthTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          delete: {
            args: Prisma.OAuthTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          update: {
            args: Prisma.OAuthTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.OAuthTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          aggregate: {
            args: Prisma.OAuthTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthToken>
          }
          groupBy: {
            args: Prisma.OAuthTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      WarmListEntry: {
        payload: Prisma.$WarmListEntryPayload<ExtArgs>
        fields: Prisma.WarmListEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarmListEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarmListEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          findFirst: {
            args: Prisma.WarmListEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarmListEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          findMany: {
            args: Prisma.WarmListEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>[]
          }
          create: {
            args: Prisma.WarmListEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          createMany: {
            args: Prisma.WarmListEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarmListEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>[]
          }
          delete: {
            args: Prisma.WarmListEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          update: {
            args: Prisma.WarmListEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          deleteMany: {
            args: Prisma.WarmListEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarmListEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarmListEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarmListEntryPayload>
          }
          aggregate: {
            args: Prisma.WarmListEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarmListEntry>
          }
          groupBy: {
            args: Prisma.WarmListEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarmListEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarmListEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WarmListEntryCountAggregateOutputType> | number
          }
        }
      }
      RaidExclude: {
        payload: Prisma.$RaidExcludePayload<ExtArgs>
        fields: Prisma.RaidExcludeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidExcludeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidExcludeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          findFirst: {
            args: Prisma.RaidExcludeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidExcludeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          findMany: {
            args: Prisma.RaidExcludeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>[]
          }
          create: {
            args: Prisma.RaidExcludeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          createMany: {
            args: Prisma.RaidExcludeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidExcludeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>[]
          }
          delete: {
            args: Prisma.RaidExcludeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          update: {
            args: Prisma.RaidExcludeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          deleteMany: {
            args: Prisma.RaidExcludeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidExcludeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RaidExcludeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidExcludePayload>
          }
          aggregate: {
            args: Prisma.RaidExcludeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaidExclude>
          }
          groupBy: {
            args: Prisma.RaidExcludeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidExcludeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidExcludeCountArgs<ExtArgs>
            result: $Utils.Optional<RaidExcludeCountAggregateOutputType> | number
          }
        }
      }
      RaidHistory: {
        payload: Prisma.$RaidHistoryPayload<ExtArgs>
        fields: Prisma.RaidHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaidHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaidHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          findFirst: {
            args: Prisma.RaidHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaidHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          findMany: {
            args: Prisma.RaidHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>[]
          }
          create: {
            args: Prisma.RaidHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          createMany: {
            args: Prisma.RaidHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaidHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>[]
          }
          delete: {
            args: Prisma.RaidHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          update: {
            args: Prisma.RaidHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RaidHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaidHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RaidHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaidHistoryPayload>
          }
          aggregate: {
            args: Prisma.RaidHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaidHistory>
          }
          groupBy: {
            args: Prisma.RaidHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaidHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaidHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RaidHistoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryBlocklist: {
        payload: Prisma.$CategoryBlocklistPayload<ExtArgs>
        fields: Prisma.CategoryBlocklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryBlocklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryBlocklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          findFirst: {
            args: Prisma.CategoryBlocklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryBlocklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          findMany: {
            args: Prisma.CategoryBlocklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>[]
          }
          create: {
            args: Prisma.CategoryBlocklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          createMany: {
            args: Prisma.CategoryBlocklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryBlocklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>[]
          }
          delete: {
            args: Prisma.CategoryBlocklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          update: {
            args: Prisma.CategoryBlocklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          deleteMany: {
            args: Prisma.CategoryBlocklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryBlocklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryBlocklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBlocklistPayload>
          }
          aggregate: {
            args: Prisma.CategoryBlocklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryBlocklist>
          }
          groupBy: {
            args: Prisma.CategoryBlocklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryBlocklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryBlocklistCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryBlocklistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    warmList: number
    raidExcludes: number
    raidHistory: number
    categoryBlocklist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warmList?: boolean | UserCountOutputTypeCountWarmListArgs
    raidExcludes?: boolean | UserCountOutputTypeCountRaidExcludesArgs
    raidHistory?: boolean | UserCountOutputTypeCountRaidHistoryArgs
    categoryBlocklist?: boolean | UserCountOutputTypeCountCategoryBlocklistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarmListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarmListEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRaidExcludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidExcludeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRaidHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoryBlocklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryBlocklistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    twitchUserId: string | null
    login: string | null
    displayName: string | null
    profileImageUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    twitchUserId: string | null
    login: string | null
    displayName: string | null
    profileImageUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    twitchUserId: number
    login: number
    displayName: number
    profileImageUrl: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    twitchUserId?: true
    login?: true
    displayName?: true
    profileImageUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    twitchUserId?: true
    login?: true
    displayName?: true
    profileImageUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    twitchUserId?: true
    login?: true
    displayName?: true
    profileImageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    twitchUserId?: boolean
    login?: boolean
    displayName?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    oauthToken?: boolean | User$oauthTokenArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    warmList?: boolean | User$warmListArgs<ExtArgs>
    raidExcludes?: boolean | User$raidExcludesArgs<ExtArgs>
    raidHistory?: boolean | User$raidHistoryArgs<ExtArgs>
    categoryBlocklist?: boolean | User$categoryBlocklistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    twitchUserId?: boolean
    login?: boolean
    displayName?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    twitchUserId?: boolean
    login?: boolean
    displayName?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthToken?: boolean | User$oauthTokenArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    warmList?: boolean | User$warmListArgs<ExtArgs>
    raidExcludes?: boolean | User$raidExcludesArgs<ExtArgs>
    raidHistory?: boolean | User$raidHistoryArgs<ExtArgs>
    categoryBlocklist?: boolean | User$categoryBlocklistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      oauthToken: Prisma.$OAuthTokenPayload<ExtArgs> | null
      settings: Prisma.$SettingsPayload<ExtArgs> | null
      warmList: Prisma.$WarmListEntryPayload<ExtArgs>[]
      raidExcludes: Prisma.$RaidExcludePayload<ExtArgs>[]
      raidHistory: Prisma.$RaidHistoryPayload<ExtArgs>[]
      categoryBlocklist: Prisma.$CategoryBlocklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      twitchUserId: string
      login: string
      displayName: string
      profileImageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oauthToken<T extends User$oauthTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthTokenArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    warmList<T extends User$warmListArgs<ExtArgs> = {}>(args?: Subset<T, User$warmListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findMany"> | Null>
    raidExcludes<T extends User$raidExcludesArgs<ExtArgs> = {}>(args?: Subset<T, User$raidExcludesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findMany"> | Null>
    raidHistory<T extends User$raidHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$raidHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    categoryBlocklist<T extends User$categoryBlocklistArgs<ExtArgs> = {}>(args?: Subset<T, User$categoryBlocklistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly twitchUserId: FieldRef<"User", 'String'>
    readonly login: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.oauthToken
   */
  export type User$oauthTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    where?: OAuthTokenWhereInput
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * User.warmList
   */
  export type User$warmListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    where?: WarmListEntryWhereInput
    orderBy?: WarmListEntryOrderByWithRelationInput | WarmListEntryOrderByWithRelationInput[]
    cursor?: WarmListEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarmListEntryScalarFieldEnum | WarmListEntryScalarFieldEnum[]
  }

  /**
   * User.raidExcludes
   */
  export type User$raidExcludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    where?: RaidExcludeWhereInput
    orderBy?: RaidExcludeOrderByWithRelationInput | RaidExcludeOrderByWithRelationInput[]
    cursor?: RaidExcludeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidExcludeScalarFieldEnum | RaidExcludeScalarFieldEnum[]
  }

  /**
   * User.raidHistory
   */
  export type User$raidHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    where?: RaidHistoryWhereInput
    orderBy?: RaidHistoryOrderByWithRelationInput | RaidHistoryOrderByWithRelationInput[]
    cursor?: RaidHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaidHistoryScalarFieldEnum | RaidHistoryScalarFieldEnum[]
  }

  /**
   * User.categoryBlocklist
   */
  export type User$categoryBlocklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    where?: CategoryBlocklistWhereInput
    orderBy?: CategoryBlocklistOrderByWithRelationInput | CategoryBlocklistOrderByWithRelationInput[]
    cursor?: CategoryBlocklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryBlocklistScalarFieldEnum | CategoryBlocklistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OAuthToken
   */

  export type AggregateOAuthToken = {
    _count: OAuthTokenCountAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  export type OAuthTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type OAuthTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type OAuthTokenCountAggregateOutputType = {
    id: number
    userId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    scopes: number
    updatedAt: number
    _all: number
  }


  export type OAuthTokenMinAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type OAuthTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type OAuthTokenCountAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scopes?: true
    updatedAt?: true
    _all?: true
  }

  export type OAuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthToken to aggregate.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthTokens
    **/
    _count?: true | OAuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type GetOAuthTokenAggregateType<T extends OAuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthToken[P]>
      : GetScalarType<T[P], AggregateOAuthToken[P]>
  }




  export type OAuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthTokenWhereInput
    orderBy?: OAuthTokenOrderByWithAggregationInput | OAuthTokenOrderByWithAggregationInput[]
    by: OAuthTokenScalarFieldEnum[] | OAuthTokenScalarFieldEnum
    having?: OAuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthTokenCountAggregateInputType | true
    _min?: OAuthTokenMinAggregateInputType
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type OAuthTokenGroupByOutputType = {
    id: string
    userId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date
    scopes: string[]
    updatedAt: Date
    _count: OAuthTokenCountAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  type GetOAuthTokenGroupByPayload<T extends OAuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type OAuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scopes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthToken"]>

  export type OAuthTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scopes?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthToken"]>

  export type OAuthTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scopes?: boolean
    updatedAt?: boolean
  }

  export type OAuthTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accessToken: string
      refreshToken: string
      expiresAt: Date
      scopes: string[]
      updatedAt: Date
    }, ExtArgs["result"]["oAuthToken"]>
    composites: {}
  }

  type OAuthTokenGetPayload<S extends boolean | null | undefined | OAuthTokenDefaultArgs> = $Result.GetResult<Prisma.$OAuthTokenPayload, S>

  type OAuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OAuthTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OAuthTokenCountAggregateInputType | true
    }

  export interface OAuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthToken'], meta: { name: 'OAuthToken' } }
    /**
     * Find zero or one OAuthToken that matches the filter.
     * @param {OAuthTokenFindUniqueArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthTokenFindUniqueArgs>(args: SelectSubset<T, OAuthTokenFindUniqueArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OAuthToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OAuthTokenFindUniqueOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OAuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthTokenFindFirstArgs>(args?: SelectSubset<T, OAuthTokenFindFirstArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OAuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OAuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany()
     * 
     * // Get first 10 OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthTokenFindManyArgs>(args?: SelectSubset<T, OAuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OAuthToken.
     * @param {OAuthTokenCreateArgs} args - Arguments to create a OAuthToken.
     * @example
     * // Create one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.create({
     *   data: {
     *     // ... data to create a OAuthToken
     *   }
     * })
     * 
     */
    create<T extends OAuthTokenCreateArgs>(args: SelectSubset<T, OAuthTokenCreateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OAuthTokens.
     * @param {OAuthTokenCreateManyArgs} args - Arguments to create many OAuthTokens.
     * @example
     * // Create many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthTokenCreateManyArgs>(args?: SelectSubset<T, OAuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthTokens and returns the data saved in the database.
     * @param {OAuthTokenCreateManyAndReturnArgs} args - Arguments to create many OAuthTokens.
     * @example
     * // Create many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthTokens and only return the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OAuthToken.
     * @param {OAuthTokenDeleteArgs} args - Arguments to delete one OAuthToken.
     * @example
     * // Delete one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.delete({
     *   where: {
     *     // ... filter to delete one OAuthToken
     *   }
     * })
     * 
     */
    delete<T extends OAuthTokenDeleteArgs>(args: SelectSubset<T, OAuthTokenDeleteArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OAuthToken.
     * @param {OAuthTokenUpdateArgs} args - Arguments to update one OAuthToken.
     * @example
     * // Update one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthTokenUpdateArgs>(args: SelectSubset<T, OAuthTokenUpdateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OAuthTokens.
     * @param {OAuthTokenDeleteManyArgs} args - Arguments to filter OAuthTokens to delete.
     * @example
     * // Delete a few OAuthTokens
     * const { count } = await prisma.oAuthToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthTokenDeleteManyArgs>(args?: SelectSubset<T, OAuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthTokenUpdateManyArgs>(args: SelectSubset<T, OAuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthToken.
     * @param {OAuthTokenUpsertArgs} args - Arguments to update or create a OAuthToken.
     * @example
     * // Update or create a OAuthToken
     * const oAuthToken = await prisma.oAuthToken.upsert({
     *   create: {
     *     // ... data to create a OAuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthToken we want to update
     *   }
     * })
     */
    upsert<T extends OAuthTokenUpsertArgs>(args: SelectSubset<T, OAuthTokenUpsertArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenCountArgs} args - Arguments to filter OAuthTokens to count.
     * @example
     * // Count the number of OAuthTokens
     * const count = await prisma.oAuthToken.count({
     *   where: {
     *     // ... the filter for the OAuthTokens we want to count
     *   }
     * })
    **/
    count<T extends OAuthTokenCountArgs>(
      args?: Subset<T, OAuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OAuthTokenAggregateArgs>(args: Subset<T, OAuthTokenAggregateArgs>): Prisma.PrismaPromise<GetOAuthTokenAggregateType<T>>

    /**
     * Group by OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OAuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: OAuthTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthToken model
   */
  readonly fields: OAuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthToken model
   */ 
  interface OAuthTokenFieldRefs {
    readonly id: FieldRef<"OAuthToken", 'String'>
    readonly userId: FieldRef<"OAuthToken", 'String'>
    readonly accessToken: FieldRef<"OAuthToken", 'String'>
    readonly refreshToken: FieldRef<"OAuthToken", 'String'>
    readonly expiresAt: FieldRef<"OAuthToken", 'DateTime'>
    readonly scopes: FieldRef<"OAuthToken", 'String[]'>
    readonly updatedAt: FieldRef<"OAuthToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthToken findUnique
   */
  export type OAuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findUniqueOrThrow
   */
  export type OAuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findFirst
   */
  export type OAuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findFirstOrThrow
   */
  export type OAuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findMany
   */
  export type OAuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthTokens to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken create
   */
  export type OAuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthToken.
     */
    data: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
  }

  /**
   * OAuthToken createMany
   */
  export type OAuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthTokens.
     */
    data: OAuthTokenCreateManyInput | OAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthToken createManyAndReturn
   */
  export type OAuthTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OAuthTokens.
     */
    data: OAuthTokenCreateManyInput | OAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthToken update
   */
  export type OAuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthToken.
     */
    data: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
    /**
     * Choose, which OAuthToken to update.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken updateMany
   */
  export type OAuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthTokens.
     */
    data: XOR<OAuthTokenUpdateManyMutationInput, OAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthTokens to update
     */
    where?: OAuthTokenWhereInput
  }

  /**
   * OAuthToken upsert
   */
  export type OAuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthToken to update in case it exists.
     */
    where: OAuthTokenWhereUniqueInput
    /**
     * In case the OAuthToken found by the `where` argument doesn't exist, create a new OAuthToken with this data.
     */
    create: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
    /**
     * In case the OAuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
  }

  /**
   * OAuthToken delete
   */
  export type OAuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter which OAuthToken to delete.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken deleteMany
   */
  export type OAuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthTokens to delete
     */
    where?: OAuthTokenWhereInput
  }

  /**
   * OAuthToken without action
   */
  export type OAuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    minTargetViewers: number | null
    maxTargetViewers: number | null
  }

  export type SettingsSumAggregateOutputType = {
    minTargetViewers: number | null
    maxTargetViewers: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matureContentFilter: $Enums.MatureFilter | null
    broadcasterTypeFilter: $Enums.BroadcasterTypeFilter | null
    minTargetViewers: number | null
    maxTargetViewers: number | null
    viewerCountPreference: $Enums.ViewerPreference | null
    sameCategoryOnly: boolean | null
    streamDurationPreference: $Enums.DurationPreference | null
    raidMessage: string | null
    raidRunMessage: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matureContentFilter: $Enums.MatureFilter | null
    broadcasterTypeFilter: $Enums.BroadcasterTypeFilter | null
    minTargetViewers: number | null
    maxTargetViewers: number | null
    viewerCountPreference: $Enums.ViewerPreference | null
    sameCategoryOnly: boolean | null
    streamDurationPreference: $Enums.DurationPreference | null
    raidMessage: string | null
    raidRunMessage: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userId: number
    allowedLanguages: number
    matureContentFilter: number
    broadcasterTypeFilter: number
    minTargetViewers: number
    maxTargetViewers: number
    viewerCountPreference: number
    sameCategoryOnly: number
    streamDurationPreference: number
    raidMessage: number
    raidRunMessage: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    minTargetViewers?: true
    maxTargetViewers?: true
  }

  export type SettingsSumAggregateInputType = {
    minTargetViewers?: true
    maxTargetViewers?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    userId?: true
    matureContentFilter?: true
    broadcasterTypeFilter?: true
    minTargetViewers?: true
    maxTargetViewers?: true
    viewerCountPreference?: true
    sameCategoryOnly?: true
    streamDurationPreference?: true
    raidMessage?: true
    raidRunMessage?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    matureContentFilter?: true
    broadcasterTypeFilter?: true
    minTargetViewers?: true
    maxTargetViewers?: true
    viewerCountPreference?: true
    sameCategoryOnly?: true
    streamDurationPreference?: true
    raidMessage?: true
    raidRunMessage?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userId?: true
    allowedLanguages?: true
    matureContentFilter?: true
    broadcasterTypeFilter?: true
    minTargetViewers?: true
    maxTargetViewers?: true
    viewerCountPreference?: true
    sameCategoryOnly?: true
    streamDurationPreference?: true
    raidMessage?: true
    raidRunMessage?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    userId: string
    allowedLanguages: string[]
    matureContentFilter: $Enums.MatureFilter
    broadcasterTypeFilter: $Enums.BroadcasterTypeFilter
    minTargetViewers: number
    maxTargetViewers: number
    viewerCountPreference: $Enums.ViewerPreference
    sameCategoryOnly: boolean
    streamDurationPreference: $Enums.DurationPreference
    raidMessage: string
    raidRunMessage: string
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowedLanguages?: boolean
    matureContentFilter?: boolean
    broadcasterTypeFilter?: boolean
    minTargetViewers?: boolean
    maxTargetViewers?: boolean
    viewerCountPreference?: boolean
    sameCategoryOnly?: boolean
    streamDurationPreference?: boolean
    raidMessage?: boolean
    raidRunMessage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowedLanguages?: boolean
    matureContentFilter?: boolean
    broadcasterTypeFilter?: boolean
    minTargetViewers?: boolean
    maxTargetViewers?: boolean
    viewerCountPreference?: boolean
    sameCategoryOnly?: boolean
    streamDurationPreference?: boolean
    raidMessage?: boolean
    raidRunMessage?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    allowedLanguages?: boolean
    matureContentFilter?: boolean
    broadcasterTypeFilter?: boolean
    minTargetViewers?: boolean
    maxTargetViewers?: boolean
    viewerCountPreference?: boolean
    sameCategoryOnly?: boolean
    streamDurationPreference?: boolean
    raidMessage?: boolean
    raidRunMessage?: boolean
  }

  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      allowedLanguages: string[]
      matureContentFilter: $Enums.MatureFilter
      broadcasterTypeFilter: $Enums.BroadcasterTypeFilter
      minTargetViewers: number
      maxTargetViewers: number
      viewerCountPreference: $Enums.ViewerPreference
      sameCategoryOnly: boolean
      streamDurationPreference: $Enums.DurationPreference
      raidMessage: string
      raidRunMessage: string
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly userId: FieldRef<"Settings", 'String'>
    readonly allowedLanguages: FieldRef<"Settings", 'String[]'>
    readonly matureContentFilter: FieldRef<"Settings", 'MatureFilter'>
    readonly broadcasterTypeFilter: FieldRef<"Settings", 'BroadcasterTypeFilter'>
    readonly minTargetViewers: FieldRef<"Settings", 'Int'>
    readonly maxTargetViewers: FieldRef<"Settings", 'Int'>
    readonly viewerCountPreference: FieldRef<"Settings", 'ViewerPreference'>
    readonly sameCategoryOnly: FieldRef<"Settings", 'Boolean'>
    readonly streamDurationPreference: FieldRef<"Settings", 'DurationPreference'>
    readonly raidMessage: FieldRef<"Settings", 'String'>
    readonly raidRunMessage: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model WarmListEntry
   */

  export type AggregateWarmListEntry = {
    _count: WarmListEntryCountAggregateOutputType | null
    _avg: WarmListEntryAvgAggregateOutputType | null
    _sum: WarmListEntrySumAggregateOutputType | null
    _min: WarmListEntryMinAggregateOutputType | null
    _max: WarmListEntryMaxAggregateOutputType | null
  }

  export type WarmListEntryAvgAggregateOutputType = {
    priority: number | null
  }

  export type WarmListEntrySumAggregateOutputType = {
    priority: number | null
  }

  export type WarmListEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    broadcasterId: string | null
    broadcasterLogin: string | null
    broadcasterName: string | null
    profileImageUrl: string | null
    notes: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type WarmListEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    broadcasterId: string | null
    broadcasterLogin: string | null
    broadcasterName: string | null
    profileImageUrl: string | null
    notes: string | null
    priority: number | null
    createdAt: Date | null
  }

  export type WarmListEntryCountAggregateOutputType = {
    id: number
    userId: number
    broadcasterId: number
    broadcasterLogin: number
    broadcasterName: number
    profileImageUrl: number
    notes: number
    priority: number
    createdAt: number
    _all: number
  }


  export type WarmListEntryAvgAggregateInputType = {
    priority?: true
  }

  export type WarmListEntrySumAggregateInputType = {
    priority?: true
  }

  export type WarmListEntryMinAggregateInputType = {
    id?: true
    userId?: true
    broadcasterId?: true
    broadcasterLogin?: true
    broadcasterName?: true
    profileImageUrl?: true
    notes?: true
    priority?: true
    createdAt?: true
  }

  export type WarmListEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    broadcasterId?: true
    broadcasterLogin?: true
    broadcasterName?: true
    profileImageUrl?: true
    notes?: true
    priority?: true
    createdAt?: true
  }

  export type WarmListEntryCountAggregateInputType = {
    id?: true
    userId?: true
    broadcasterId?: true
    broadcasterLogin?: true
    broadcasterName?: true
    profileImageUrl?: true
    notes?: true
    priority?: true
    createdAt?: true
    _all?: true
  }

  export type WarmListEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarmListEntry to aggregate.
     */
    where?: WarmListEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmListEntries to fetch.
     */
    orderBy?: WarmListEntryOrderByWithRelationInput | WarmListEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarmListEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmListEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmListEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarmListEntries
    **/
    _count?: true | WarmListEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarmListEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarmListEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarmListEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarmListEntryMaxAggregateInputType
  }

  export type GetWarmListEntryAggregateType<T extends WarmListEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWarmListEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarmListEntry[P]>
      : GetScalarType<T[P], AggregateWarmListEntry[P]>
  }




  export type WarmListEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarmListEntryWhereInput
    orderBy?: WarmListEntryOrderByWithAggregationInput | WarmListEntryOrderByWithAggregationInput[]
    by: WarmListEntryScalarFieldEnum[] | WarmListEntryScalarFieldEnum
    having?: WarmListEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarmListEntryCountAggregateInputType | true
    _avg?: WarmListEntryAvgAggregateInputType
    _sum?: WarmListEntrySumAggregateInputType
    _min?: WarmListEntryMinAggregateInputType
    _max?: WarmListEntryMaxAggregateInputType
  }

  export type WarmListEntryGroupByOutputType = {
    id: string
    userId: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl: string | null
    notes: string | null
    priority: number
    createdAt: Date
    _count: WarmListEntryCountAggregateOutputType | null
    _avg: WarmListEntryAvgAggregateOutputType | null
    _sum: WarmListEntrySumAggregateOutputType | null
    _min: WarmListEntryMinAggregateOutputType | null
    _max: WarmListEntryMaxAggregateOutputType | null
  }

  type GetWarmListEntryGroupByPayload<T extends WarmListEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarmListEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarmListEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarmListEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WarmListEntryGroupByOutputType[P]>
        }
      >
    >


  export type WarmListEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    broadcasterId?: boolean
    broadcasterLogin?: boolean
    broadcasterName?: boolean
    profileImageUrl?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warmListEntry"]>

  export type WarmListEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    broadcasterId?: boolean
    broadcasterLogin?: boolean
    broadcasterName?: boolean
    profileImageUrl?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warmListEntry"]>

  export type WarmListEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    broadcasterId?: boolean
    broadcasterLogin?: boolean
    broadcasterName?: boolean
    profileImageUrl?: boolean
    notes?: boolean
    priority?: boolean
    createdAt?: boolean
  }

  export type WarmListEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarmListEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarmListEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarmListEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      broadcasterId: string
      broadcasterLogin: string
      broadcasterName: string
      profileImageUrl: string | null
      notes: string | null
      priority: number
      createdAt: Date
    }, ExtArgs["result"]["warmListEntry"]>
    composites: {}
  }

  type WarmListEntryGetPayload<S extends boolean | null | undefined | WarmListEntryDefaultArgs> = $Result.GetResult<Prisma.$WarmListEntryPayload, S>

  type WarmListEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarmListEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarmListEntryCountAggregateInputType | true
    }

  export interface WarmListEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarmListEntry'], meta: { name: 'WarmListEntry' } }
    /**
     * Find zero or one WarmListEntry that matches the filter.
     * @param {WarmListEntryFindUniqueArgs} args - Arguments to find a WarmListEntry
     * @example
     * // Get one WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarmListEntryFindUniqueArgs>(args: SelectSubset<T, WarmListEntryFindUniqueArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WarmListEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarmListEntryFindUniqueOrThrowArgs} args - Arguments to find a WarmListEntry
     * @example
     * // Get one WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarmListEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, WarmListEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WarmListEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryFindFirstArgs} args - Arguments to find a WarmListEntry
     * @example
     * // Get one WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarmListEntryFindFirstArgs>(args?: SelectSubset<T, WarmListEntryFindFirstArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WarmListEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryFindFirstOrThrowArgs} args - Arguments to find a WarmListEntry
     * @example
     * // Get one WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarmListEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, WarmListEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WarmListEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarmListEntries
     * const warmListEntries = await prisma.warmListEntry.findMany()
     * 
     * // Get first 10 WarmListEntries
     * const warmListEntries = await prisma.warmListEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warmListEntryWithIdOnly = await prisma.warmListEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarmListEntryFindManyArgs>(args?: SelectSubset<T, WarmListEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WarmListEntry.
     * @param {WarmListEntryCreateArgs} args - Arguments to create a WarmListEntry.
     * @example
     * // Create one WarmListEntry
     * const WarmListEntry = await prisma.warmListEntry.create({
     *   data: {
     *     // ... data to create a WarmListEntry
     *   }
     * })
     * 
     */
    create<T extends WarmListEntryCreateArgs>(args: SelectSubset<T, WarmListEntryCreateArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WarmListEntries.
     * @param {WarmListEntryCreateManyArgs} args - Arguments to create many WarmListEntries.
     * @example
     * // Create many WarmListEntries
     * const warmListEntry = await prisma.warmListEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarmListEntryCreateManyArgs>(args?: SelectSubset<T, WarmListEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarmListEntries and returns the data saved in the database.
     * @param {WarmListEntryCreateManyAndReturnArgs} args - Arguments to create many WarmListEntries.
     * @example
     * // Create many WarmListEntries
     * const warmListEntry = await prisma.warmListEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarmListEntries and only return the `id`
     * const warmListEntryWithIdOnly = await prisma.warmListEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarmListEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, WarmListEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WarmListEntry.
     * @param {WarmListEntryDeleteArgs} args - Arguments to delete one WarmListEntry.
     * @example
     * // Delete one WarmListEntry
     * const WarmListEntry = await prisma.warmListEntry.delete({
     *   where: {
     *     // ... filter to delete one WarmListEntry
     *   }
     * })
     * 
     */
    delete<T extends WarmListEntryDeleteArgs>(args: SelectSubset<T, WarmListEntryDeleteArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WarmListEntry.
     * @param {WarmListEntryUpdateArgs} args - Arguments to update one WarmListEntry.
     * @example
     * // Update one WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarmListEntryUpdateArgs>(args: SelectSubset<T, WarmListEntryUpdateArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WarmListEntries.
     * @param {WarmListEntryDeleteManyArgs} args - Arguments to filter WarmListEntries to delete.
     * @example
     * // Delete a few WarmListEntries
     * const { count } = await prisma.warmListEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarmListEntryDeleteManyArgs>(args?: SelectSubset<T, WarmListEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarmListEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarmListEntries
     * const warmListEntry = await prisma.warmListEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarmListEntryUpdateManyArgs>(args: SelectSubset<T, WarmListEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WarmListEntry.
     * @param {WarmListEntryUpsertArgs} args - Arguments to update or create a WarmListEntry.
     * @example
     * // Update or create a WarmListEntry
     * const warmListEntry = await prisma.warmListEntry.upsert({
     *   create: {
     *     // ... data to create a WarmListEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarmListEntry we want to update
     *   }
     * })
     */
    upsert<T extends WarmListEntryUpsertArgs>(args: SelectSubset<T, WarmListEntryUpsertArgs<ExtArgs>>): Prisma__WarmListEntryClient<$Result.GetResult<Prisma.$WarmListEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WarmListEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryCountArgs} args - Arguments to filter WarmListEntries to count.
     * @example
     * // Count the number of WarmListEntries
     * const count = await prisma.warmListEntry.count({
     *   where: {
     *     // ... the filter for the WarmListEntries we want to count
     *   }
     * })
    **/
    count<T extends WarmListEntryCountArgs>(
      args?: Subset<T, WarmListEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarmListEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarmListEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarmListEntryAggregateArgs>(args: Subset<T, WarmListEntryAggregateArgs>): Prisma.PrismaPromise<GetWarmListEntryAggregateType<T>>

    /**
     * Group by WarmListEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarmListEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarmListEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarmListEntryGroupByArgs['orderBy'] }
        : { orderBy?: WarmListEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarmListEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarmListEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarmListEntry model
   */
  readonly fields: WarmListEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarmListEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarmListEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WarmListEntry model
   */ 
  interface WarmListEntryFieldRefs {
    readonly id: FieldRef<"WarmListEntry", 'String'>
    readonly userId: FieldRef<"WarmListEntry", 'String'>
    readonly broadcasterId: FieldRef<"WarmListEntry", 'String'>
    readonly broadcasterLogin: FieldRef<"WarmListEntry", 'String'>
    readonly broadcasterName: FieldRef<"WarmListEntry", 'String'>
    readonly profileImageUrl: FieldRef<"WarmListEntry", 'String'>
    readonly notes: FieldRef<"WarmListEntry", 'String'>
    readonly priority: FieldRef<"WarmListEntry", 'Int'>
    readonly createdAt: FieldRef<"WarmListEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WarmListEntry findUnique
   */
  export type WarmListEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter, which WarmListEntry to fetch.
     */
    where: WarmListEntryWhereUniqueInput
  }

  /**
   * WarmListEntry findUniqueOrThrow
   */
  export type WarmListEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter, which WarmListEntry to fetch.
     */
    where: WarmListEntryWhereUniqueInput
  }

  /**
   * WarmListEntry findFirst
   */
  export type WarmListEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter, which WarmListEntry to fetch.
     */
    where?: WarmListEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmListEntries to fetch.
     */
    orderBy?: WarmListEntryOrderByWithRelationInput | WarmListEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarmListEntries.
     */
    cursor?: WarmListEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmListEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmListEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarmListEntries.
     */
    distinct?: WarmListEntryScalarFieldEnum | WarmListEntryScalarFieldEnum[]
  }

  /**
   * WarmListEntry findFirstOrThrow
   */
  export type WarmListEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter, which WarmListEntry to fetch.
     */
    where?: WarmListEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmListEntries to fetch.
     */
    orderBy?: WarmListEntryOrderByWithRelationInput | WarmListEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarmListEntries.
     */
    cursor?: WarmListEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmListEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmListEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarmListEntries.
     */
    distinct?: WarmListEntryScalarFieldEnum | WarmListEntryScalarFieldEnum[]
  }

  /**
   * WarmListEntry findMany
   */
  export type WarmListEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter, which WarmListEntries to fetch.
     */
    where?: WarmListEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarmListEntries to fetch.
     */
    orderBy?: WarmListEntryOrderByWithRelationInput | WarmListEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarmListEntries.
     */
    cursor?: WarmListEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarmListEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarmListEntries.
     */
    skip?: number
    distinct?: WarmListEntryScalarFieldEnum | WarmListEntryScalarFieldEnum[]
  }

  /**
   * WarmListEntry create
   */
  export type WarmListEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a WarmListEntry.
     */
    data: XOR<WarmListEntryCreateInput, WarmListEntryUncheckedCreateInput>
  }

  /**
   * WarmListEntry createMany
   */
  export type WarmListEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarmListEntries.
     */
    data: WarmListEntryCreateManyInput | WarmListEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarmListEntry createManyAndReturn
   */
  export type WarmListEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WarmListEntries.
     */
    data: WarmListEntryCreateManyInput | WarmListEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarmListEntry update
   */
  export type WarmListEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a WarmListEntry.
     */
    data: XOR<WarmListEntryUpdateInput, WarmListEntryUncheckedUpdateInput>
    /**
     * Choose, which WarmListEntry to update.
     */
    where: WarmListEntryWhereUniqueInput
  }

  /**
   * WarmListEntry updateMany
   */
  export type WarmListEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarmListEntries.
     */
    data: XOR<WarmListEntryUpdateManyMutationInput, WarmListEntryUncheckedUpdateManyInput>
    /**
     * Filter which WarmListEntries to update
     */
    where?: WarmListEntryWhereInput
  }

  /**
   * WarmListEntry upsert
   */
  export type WarmListEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the WarmListEntry to update in case it exists.
     */
    where: WarmListEntryWhereUniqueInput
    /**
     * In case the WarmListEntry found by the `where` argument doesn't exist, create a new WarmListEntry with this data.
     */
    create: XOR<WarmListEntryCreateInput, WarmListEntryUncheckedCreateInput>
    /**
     * In case the WarmListEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarmListEntryUpdateInput, WarmListEntryUncheckedUpdateInput>
  }

  /**
   * WarmListEntry delete
   */
  export type WarmListEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
    /**
     * Filter which WarmListEntry to delete.
     */
    where: WarmListEntryWhereUniqueInput
  }

  /**
   * WarmListEntry deleteMany
   */
  export type WarmListEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarmListEntries to delete
     */
    where?: WarmListEntryWhereInput
  }

  /**
   * WarmListEntry without action
   */
  export type WarmListEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarmListEntry
     */
    select?: WarmListEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarmListEntryInclude<ExtArgs> | null
  }


  /**
   * Model RaidExclude
   */

  export type AggregateRaidExclude = {
    _count: RaidExcludeCountAggregateOutputType | null
    _min: RaidExcludeMinAggregateOutputType | null
    _max: RaidExcludeMaxAggregateOutputType | null
  }

  export type RaidExcludeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    excludedBroadcasterId: string | null
    reason: string | null
  }

  export type RaidExcludeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    excludedBroadcasterId: string | null
    reason: string | null
  }

  export type RaidExcludeCountAggregateOutputType = {
    id: number
    userId: number
    excludedBroadcasterId: number
    reason: number
    _all: number
  }


  export type RaidExcludeMinAggregateInputType = {
    id?: true
    userId?: true
    excludedBroadcasterId?: true
    reason?: true
  }

  export type RaidExcludeMaxAggregateInputType = {
    id?: true
    userId?: true
    excludedBroadcasterId?: true
    reason?: true
  }

  export type RaidExcludeCountAggregateInputType = {
    id?: true
    userId?: true
    excludedBroadcasterId?: true
    reason?: true
    _all?: true
  }

  export type RaidExcludeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidExclude to aggregate.
     */
    where?: RaidExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidExcludes to fetch.
     */
    orderBy?: RaidExcludeOrderByWithRelationInput | RaidExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaidExcludes
    **/
    _count?: true | RaidExcludeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidExcludeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidExcludeMaxAggregateInputType
  }

  export type GetRaidExcludeAggregateType<T extends RaidExcludeAggregateArgs> = {
        [P in keyof T & keyof AggregateRaidExclude]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaidExclude[P]>
      : GetScalarType<T[P], AggregateRaidExclude[P]>
  }




  export type RaidExcludeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidExcludeWhereInput
    orderBy?: RaidExcludeOrderByWithAggregationInput | RaidExcludeOrderByWithAggregationInput[]
    by: RaidExcludeScalarFieldEnum[] | RaidExcludeScalarFieldEnum
    having?: RaidExcludeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidExcludeCountAggregateInputType | true
    _min?: RaidExcludeMinAggregateInputType
    _max?: RaidExcludeMaxAggregateInputType
  }

  export type RaidExcludeGroupByOutputType = {
    id: string
    userId: string
    excludedBroadcasterId: string
    reason: string | null
    _count: RaidExcludeCountAggregateOutputType | null
    _min: RaidExcludeMinAggregateOutputType | null
    _max: RaidExcludeMaxAggregateOutputType | null
  }

  type GetRaidExcludeGroupByPayload<T extends RaidExcludeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidExcludeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidExcludeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidExcludeGroupByOutputType[P]>
            : GetScalarType<T[P], RaidExcludeGroupByOutputType[P]>
        }
      >
    >


  export type RaidExcludeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    excludedBroadcasterId?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidExclude"]>

  export type RaidExcludeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    excludedBroadcasterId?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidExclude"]>

  export type RaidExcludeSelectScalar = {
    id?: boolean
    userId?: boolean
    excludedBroadcasterId?: boolean
    reason?: boolean
  }

  export type RaidExcludeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RaidExcludeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RaidExcludePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaidExclude"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      excludedBroadcasterId: string
      reason: string | null
    }, ExtArgs["result"]["raidExclude"]>
    composites: {}
  }

  type RaidExcludeGetPayload<S extends boolean | null | undefined | RaidExcludeDefaultArgs> = $Result.GetResult<Prisma.$RaidExcludePayload, S>

  type RaidExcludeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RaidExcludeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RaidExcludeCountAggregateInputType | true
    }

  export interface RaidExcludeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaidExclude'], meta: { name: 'RaidExclude' } }
    /**
     * Find zero or one RaidExclude that matches the filter.
     * @param {RaidExcludeFindUniqueArgs} args - Arguments to find a RaidExclude
     * @example
     * // Get one RaidExclude
     * const raidExclude = await prisma.raidExclude.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidExcludeFindUniqueArgs>(args: SelectSubset<T, RaidExcludeFindUniqueArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RaidExclude that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RaidExcludeFindUniqueOrThrowArgs} args - Arguments to find a RaidExclude
     * @example
     * // Get one RaidExclude
     * const raidExclude = await prisma.raidExclude.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidExcludeFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidExcludeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RaidExclude that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeFindFirstArgs} args - Arguments to find a RaidExclude
     * @example
     * // Get one RaidExclude
     * const raidExclude = await prisma.raidExclude.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidExcludeFindFirstArgs>(args?: SelectSubset<T, RaidExcludeFindFirstArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RaidExclude that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeFindFirstOrThrowArgs} args - Arguments to find a RaidExclude
     * @example
     * // Get one RaidExclude
     * const raidExclude = await prisma.raidExclude.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidExcludeFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidExcludeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RaidExcludes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaidExcludes
     * const raidExcludes = await prisma.raidExclude.findMany()
     * 
     * // Get first 10 RaidExcludes
     * const raidExcludes = await prisma.raidExclude.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidExcludeWithIdOnly = await prisma.raidExclude.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidExcludeFindManyArgs>(args?: SelectSubset<T, RaidExcludeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RaidExclude.
     * @param {RaidExcludeCreateArgs} args - Arguments to create a RaidExclude.
     * @example
     * // Create one RaidExclude
     * const RaidExclude = await prisma.raidExclude.create({
     *   data: {
     *     // ... data to create a RaidExclude
     *   }
     * })
     * 
     */
    create<T extends RaidExcludeCreateArgs>(args: SelectSubset<T, RaidExcludeCreateArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RaidExcludes.
     * @param {RaidExcludeCreateManyArgs} args - Arguments to create many RaidExcludes.
     * @example
     * // Create many RaidExcludes
     * const raidExclude = await prisma.raidExclude.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidExcludeCreateManyArgs>(args?: SelectSubset<T, RaidExcludeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaidExcludes and returns the data saved in the database.
     * @param {RaidExcludeCreateManyAndReturnArgs} args - Arguments to create many RaidExcludes.
     * @example
     * // Create many RaidExcludes
     * const raidExclude = await prisma.raidExclude.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaidExcludes and only return the `id`
     * const raidExcludeWithIdOnly = await prisma.raidExclude.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidExcludeCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidExcludeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RaidExclude.
     * @param {RaidExcludeDeleteArgs} args - Arguments to delete one RaidExclude.
     * @example
     * // Delete one RaidExclude
     * const RaidExclude = await prisma.raidExclude.delete({
     *   where: {
     *     // ... filter to delete one RaidExclude
     *   }
     * })
     * 
     */
    delete<T extends RaidExcludeDeleteArgs>(args: SelectSubset<T, RaidExcludeDeleteArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RaidExclude.
     * @param {RaidExcludeUpdateArgs} args - Arguments to update one RaidExclude.
     * @example
     * // Update one RaidExclude
     * const raidExclude = await prisma.raidExclude.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidExcludeUpdateArgs>(args: SelectSubset<T, RaidExcludeUpdateArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RaidExcludes.
     * @param {RaidExcludeDeleteManyArgs} args - Arguments to filter RaidExcludes to delete.
     * @example
     * // Delete a few RaidExcludes
     * const { count } = await prisma.raidExclude.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidExcludeDeleteManyArgs>(args?: SelectSubset<T, RaidExcludeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidExcludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaidExcludes
     * const raidExclude = await prisma.raidExclude.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidExcludeUpdateManyArgs>(args: SelectSubset<T, RaidExcludeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RaidExclude.
     * @param {RaidExcludeUpsertArgs} args - Arguments to update or create a RaidExclude.
     * @example
     * // Update or create a RaidExclude
     * const raidExclude = await prisma.raidExclude.upsert({
     *   create: {
     *     // ... data to create a RaidExclude
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaidExclude we want to update
     *   }
     * })
     */
    upsert<T extends RaidExcludeUpsertArgs>(args: SelectSubset<T, RaidExcludeUpsertArgs<ExtArgs>>): Prisma__RaidExcludeClient<$Result.GetResult<Prisma.$RaidExcludePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RaidExcludes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeCountArgs} args - Arguments to filter RaidExcludes to count.
     * @example
     * // Count the number of RaidExcludes
     * const count = await prisma.raidExclude.count({
     *   where: {
     *     // ... the filter for the RaidExcludes we want to count
     *   }
     * })
    **/
    count<T extends RaidExcludeCountArgs>(
      args?: Subset<T, RaidExcludeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidExcludeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaidExclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidExcludeAggregateArgs>(args: Subset<T, RaidExcludeAggregateArgs>): Prisma.PrismaPromise<GetRaidExcludeAggregateType<T>>

    /**
     * Group by RaidExclude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidExcludeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidExcludeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidExcludeGroupByArgs['orderBy'] }
        : { orderBy?: RaidExcludeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidExcludeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidExcludeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaidExclude model
   */
  readonly fields: RaidExcludeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaidExclude.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidExcludeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaidExclude model
   */ 
  interface RaidExcludeFieldRefs {
    readonly id: FieldRef<"RaidExclude", 'String'>
    readonly userId: FieldRef<"RaidExclude", 'String'>
    readonly excludedBroadcasterId: FieldRef<"RaidExclude", 'String'>
    readonly reason: FieldRef<"RaidExclude", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaidExclude findUnique
   */
  export type RaidExcludeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter, which RaidExclude to fetch.
     */
    where: RaidExcludeWhereUniqueInput
  }

  /**
   * RaidExclude findUniqueOrThrow
   */
  export type RaidExcludeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter, which RaidExclude to fetch.
     */
    where: RaidExcludeWhereUniqueInput
  }

  /**
   * RaidExclude findFirst
   */
  export type RaidExcludeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter, which RaidExclude to fetch.
     */
    where?: RaidExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidExcludes to fetch.
     */
    orderBy?: RaidExcludeOrderByWithRelationInput | RaidExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidExcludes.
     */
    cursor?: RaidExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidExcludes.
     */
    distinct?: RaidExcludeScalarFieldEnum | RaidExcludeScalarFieldEnum[]
  }

  /**
   * RaidExclude findFirstOrThrow
   */
  export type RaidExcludeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter, which RaidExclude to fetch.
     */
    where?: RaidExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidExcludes to fetch.
     */
    orderBy?: RaidExcludeOrderByWithRelationInput | RaidExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidExcludes.
     */
    cursor?: RaidExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidExcludes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidExcludes.
     */
    distinct?: RaidExcludeScalarFieldEnum | RaidExcludeScalarFieldEnum[]
  }

  /**
   * RaidExclude findMany
   */
  export type RaidExcludeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter, which RaidExcludes to fetch.
     */
    where?: RaidExcludeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidExcludes to fetch.
     */
    orderBy?: RaidExcludeOrderByWithRelationInput | RaidExcludeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaidExcludes.
     */
    cursor?: RaidExcludeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidExcludes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidExcludes.
     */
    skip?: number
    distinct?: RaidExcludeScalarFieldEnum | RaidExcludeScalarFieldEnum[]
  }

  /**
   * RaidExclude create
   */
  export type RaidExcludeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * The data needed to create a RaidExclude.
     */
    data: XOR<RaidExcludeCreateInput, RaidExcludeUncheckedCreateInput>
  }

  /**
   * RaidExclude createMany
   */
  export type RaidExcludeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaidExcludes.
     */
    data: RaidExcludeCreateManyInput | RaidExcludeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaidExclude createManyAndReturn
   */
  export type RaidExcludeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RaidExcludes.
     */
    data: RaidExcludeCreateManyInput | RaidExcludeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidExclude update
   */
  export type RaidExcludeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * The data needed to update a RaidExclude.
     */
    data: XOR<RaidExcludeUpdateInput, RaidExcludeUncheckedUpdateInput>
    /**
     * Choose, which RaidExclude to update.
     */
    where: RaidExcludeWhereUniqueInput
  }

  /**
   * RaidExclude updateMany
   */
  export type RaidExcludeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaidExcludes.
     */
    data: XOR<RaidExcludeUpdateManyMutationInput, RaidExcludeUncheckedUpdateManyInput>
    /**
     * Filter which RaidExcludes to update
     */
    where?: RaidExcludeWhereInput
  }

  /**
   * RaidExclude upsert
   */
  export type RaidExcludeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * The filter to search for the RaidExclude to update in case it exists.
     */
    where: RaidExcludeWhereUniqueInput
    /**
     * In case the RaidExclude found by the `where` argument doesn't exist, create a new RaidExclude with this data.
     */
    create: XOR<RaidExcludeCreateInput, RaidExcludeUncheckedCreateInput>
    /**
     * In case the RaidExclude was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidExcludeUpdateInput, RaidExcludeUncheckedUpdateInput>
  }

  /**
   * RaidExclude delete
   */
  export type RaidExcludeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
    /**
     * Filter which RaidExclude to delete.
     */
    where: RaidExcludeWhereUniqueInput
  }

  /**
   * RaidExclude deleteMany
   */
  export type RaidExcludeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidExcludes to delete
     */
    where?: RaidExcludeWhereInput
  }

  /**
   * RaidExclude without action
   */
  export type RaidExcludeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidExclude
     */
    select?: RaidExcludeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidExcludeInclude<ExtArgs> | null
  }


  /**
   * Model RaidHistory
   */

  export type AggregateRaidHistory = {
    _count: RaidHistoryCountAggregateOutputType | null
    _avg: RaidHistoryAvgAggregateOutputType | null
    _sum: RaidHistorySumAggregateOutputType | null
    _min: RaidHistoryMinAggregateOutputType | null
    _max: RaidHistoryMaxAggregateOutputType | null
  }

  export type RaidHistoryAvgAggregateOutputType = {
    viewerCountAtRaid: number | null
    manualRating: number | null
  }

  export type RaidHistorySumAggregateOutputType = {
    viewerCountAtRaid: number | null
    manualRating: number | null
  }

  export type RaidHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fromBroadcasterId: string | null
    toBroadcasterId: string | null
    toBroadcasterLogin: string | null
    toBroadcasterName: string | null
    categoryId: string | null
    categoryName: string | null
    startedAt: Date | null
    executedAt: Date | null
    status: $Enums.RaidStatus | null
    viewerCountAtRaid: number | null
    manualRating: number | null
    notes: string | null
  }

  export type RaidHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fromBroadcasterId: string | null
    toBroadcasterId: string | null
    toBroadcasterLogin: string | null
    toBroadcasterName: string | null
    categoryId: string | null
    categoryName: string | null
    startedAt: Date | null
    executedAt: Date | null
    status: $Enums.RaidStatus | null
    viewerCountAtRaid: number | null
    manualRating: number | null
    notes: string | null
  }

  export type RaidHistoryCountAggregateOutputType = {
    id: number
    userId: number
    fromBroadcasterId: number
    toBroadcasterId: number
    toBroadcasterLogin: number
    toBroadcasterName: number
    categoryId: number
    categoryName: number
    startedAt: number
    executedAt: number
    status: number
    viewerCountAtRaid: number
    manualRating: number
    notes: number
    _all: number
  }


  export type RaidHistoryAvgAggregateInputType = {
    viewerCountAtRaid?: true
    manualRating?: true
  }

  export type RaidHistorySumAggregateInputType = {
    viewerCountAtRaid?: true
    manualRating?: true
  }

  export type RaidHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    fromBroadcasterId?: true
    toBroadcasterId?: true
    toBroadcasterLogin?: true
    toBroadcasterName?: true
    categoryId?: true
    categoryName?: true
    startedAt?: true
    executedAt?: true
    status?: true
    viewerCountAtRaid?: true
    manualRating?: true
    notes?: true
  }

  export type RaidHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    fromBroadcasterId?: true
    toBroadcasterId?: true
    toBroadcasterLogin?: true
    toBroadcasterName?: true
    categoryId?: true
    categoryName?: true
    startedAt?: true
    executedAt?: true
    status?: true
    viewerCountAtRaid?: true
    manualRating?: true
    notes?: true
  }

  export type RaidHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    fromBroadcasterId?: true
    toBroadcasterId?: true
    toBroadcasterLogin?: true
    toBroadcasterName?: true
    categoryId?: true
    categoryName?: true
    startedAt?: true
    executedAt?: true
    status?: true
    viewerCountAtRaid?: true
    manualRating?: true
    notes?: true
    _all?: true
  }

  export type RaidHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidHistory to aggregate.
     */
    where?: RaidHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidHistories to fetch.
     */
    orderBy?: RaidHistoryOrderByWithRelationInput | RaidHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaidHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaidHistories
    **/
    _count?: true | RaidHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaidHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaidHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaidHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaidHistoryMaxAggregateInputType
  }

  export type GetRaidHistoryAggregateType<T extends RaidHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRaidHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaidHistory[P]>
      : GetScalarType<T[P], AggregateRaidHistory[P]>
  }




  export type RaidHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaidHistoryWhereInput
    orderBy?: RaidHistoryOrderByWithAggregationInput | RaidHistoryOrderByWithAggregationInput[]
    by: RaidHistoryScalarFieldEnum[] | RaidHistoryScalarFieldEnum
    having?: RaidHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaidHistoryCountAggregateInputType | true
    _avg?: RaidHistoryAvgAggregateInputType
    _sum?: RaidHistorySumAggregateInputType
    _min?: RaidHistoryMinAggregateInputType
    _max?: RaidHistoryMaxAggregateInputType
  }

  export type RaidHistoryGroupByOutputType = {
    id: string
    userId: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId: string | null
    categoryName: string | null
    startedAt: Date
    executedAt: Date | null
    status: $Enums.RaidStatus
    viewerCountAtRaid: number | null
    manualRating: number | null
    notes: string | null
    _count: RaidHistoryCountAggregateOutputType | null
    _avg: RaidHistoryAvgAggregateOutputType | null
    _sum: RaidHistorySumAggregateOutputType | null
    _min: RaidHistoryMinAggregateOutputType | null
    _max: RaidHistoryMaxAggregateOutputType | null
  }

  type GetRaidHistoryGroupByPayload<T extends RaidHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaidHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaidHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaidHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RaidHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RaidHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromBroadcasterId?: boolean
    toBroadcasterId?: boolean
    toBroadcasterLogin?: boolean
    toBroadcasterName?: boolean
    categoryId?: boolean
    categoryName?: boolean
    startedAt?: boolean
    executedAt?: boolean
    status?: boolean
    viewerCountAtRaid?: boolean
    manualRating?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidHistory"]>

  export type RaidHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromBroadcasterId?: boolean
    toBroadcasterId?: boolean
    toBroadcasterLogin?: boolean
    toBroadcasterName?: boolean
    categoryId?: boolean
    categoryName?: boolean
    startedAt?: boolean
    executedAt?: boolean
    status?: boolean
    viewerCountAtRaid?: boolean
    manualRating?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raidHistory"]>

  export type RaidHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    fromBroadcasterId?: boolean
    toBroadcasterId?: boolean
    toBroadcasterLogin?: boolean
    toBroadcasterName?: boolean
    categoryId?: boolean
    categoryName?: boolean
    startedAt?: boolean
    executedAt?: boolean
    status?: boolean
    viewerCountAtRaid?: boolean
    manualRating?: boolean
    notes?: boolean
  }

  export type RaidHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RaidHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RaidHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaidHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fromBroadcasterId: string
      toBroadcasterId: string
      toBroadcasterLogin: string
      toBroadcasterName: string
      categoryId: string | null
      categoryName: string | null
      startedAt: Date
      executedAt: Date | null
      status: $Enums.RaidStatus
      viewerCountAtRaid: number | null
      manualRating: number | null
      notes: string | null
    }, ExtArgs["result"]["raidHistory"]>
    composites: {}
  }

  type RaidHistoryGetPayload<S extends boolean | null | undefined | RaidHistoryDefaultArgs> = $Result.GetResult<Prisma.$RaidHistoryPayload, S>

  type RaidHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RaidHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RaidHistoryCountAggregateInputType | true
    }

  export interface RaidHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaidHistory'], meta: { name: 'RaidHistory' } }
    /**
     * Find zero or one RaidHistory that matches the filter.
     * @param {RaidHistoryFindUniqueArgs} args - Arguments to find a RaidHistory
     * @example
     * // Get one RaidHistory
     * const raidHistory = await prisma.raidHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaidHistoryFindUniqueArgs>(args: SelectSubset<T, RaidHistoryFindUniqueArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RaidHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RaidHistoryFindUniqueOrThrowArgs} args - Arguments to find a RaidHistory
     * @example
     * // Get one RaidHistory
     * const raidHistory = await prisma.raidHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaidHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RaidHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RaidHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryFindFirstArgs} args - Arguments to find a RaidHistory
     * @example
     * // Get one RaidHistory
     * const raidHistory = await prisma.raidHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaidHistoryFindFirstArgs>(args?: SelectSubset<T, RaidHistoryFindFirstArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RaidHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryFindFirstOrThrowArgs} args - Arguments to find a RaidHistory
     * @example
     * // Get one RaidHistory
     * const raidHistory = await prisma.raidHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaidHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RaidHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RaidHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaidHistories
     * const raidHistories = await prisma.raidHistory.findMany()
     * 
     * // Get first 10 RaidHistories
     * const raidHistories = await prisma.raidHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raidHistoryWithIdOnly = await prisma.raidHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaidHistoryFindManyArgs>(args?: SelectSubset<T, RaidHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RaidHistory.
     * @param {RaidHistoryCreateArgs} args - Arguments to create a RaidHistory.
     * @example
     * // Create one RaidHistory
     * const RaidHistory = await prisma.raidHistory.create({
     *   data: {
     *     // ... data to create a RaidHistory
     *   }
     * })
     * 
     */
    create<T extends RaidHistoryCreateArgs>(args: SelectSubset<T, RaidHistoryCreateArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RaidHistories.
     * @param {RaidHistoryCreateManyArgs} args - Arguments to create many RaidHistories.
     * @example
     * // Create many RaidHistories
     * const raidHistory = await prisma.raidHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaidHistoryCreateManyArgs>(args?: SelectSubset<T, RaidHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaidHistories and returns the data saved in the database.
     * @param {RaidHistoryCreateManyAndReturnArgs} args - Arguments to create many RaidHistories.
     * @example
     * // Create many RaidHistories
     * const raidHistory = await prisma.raidHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaidHistories and only return the `id`
     * const raidHistoryWithIdOnly = await prisma.raidHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaidHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RaidHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RaidHistory.
     * @param {RaidHistoryDeleteArgs} args - Arguments to delete one RaidHistory.
     * @example
     * // Delete one RaidHistory
     * const RaidHistory = await prisma.raidHistory.delete({
     *   where: {
     *     // ... filter to delete one RaidHistory
     *   }
     * })
     * 
     */
    delete<T extends RaidHistoryDeleteArgs>(args: SelectSubset<T, RaidHistoryDeleteArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RaidHistory.
     * @param {RaidHistoryUpdateArgs} args - Arguments to update one RaidHistory.
     * @example
     * // Update one RaidHistory
     * const raidHistory = await prisma.raidHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaidHistoryUpdateArgs>(args: SelectSubset<T, RaidHistoryUpdateArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RaidHistories.
     * @param {RaidHistoryDeleteManyArgs} args - Arguments to filter RaidHistories to delete.
     * @example
     * // Delete a few RaidHistories
     * const { count } = await prisma.raidHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaidHistoryDeleteManyArgs>(args?: SelectSubset<T, RaidHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaidHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaidHistories
     * const raidHistory = await prisma.raidHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaidHistoryUpdateManyArgs>(args: SelectSubset<T, RaidHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RaidHistory.
     * @param {RaidHistoryUpsertArgs} args - Arguments to update or create a RaidHistory.
     * @example
     * // Update or create a RaidHistory
     * const raidHistory = await prisma.raidHistory.upsert({
     *   create: {
     *     // ... data to create a RaidHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaidHistory we want to update
     *   }
     * })
     */
    upsert<T extends RaidHistoryUpsertArgs>(args: SelectSubset<T, RaidHistoryUpsertArgs<ExtArgs>>): Prisma__RaidHistoryClient<$Result.GetResult<Prisma.$RaidHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RaidHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryCountArgs} args - Arguments to filter RaidHistories to count.
     * @example
     * // Count the number of RaidHistories
     * const count = await prisma.raidHistory.count({
     *   where: {
     *     // ... the filter for the RaidHistories we want to count
     *   }
     * })
    **/
    count<T extends RaidHistoryCountArgs>(
      args?: Subset<T, RaidHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaidHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaidHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaidHistoryAggregateArgs>(args: Subset<T, RaidHistoryAggregateArgs>): Prisma.PrismaPromise<GetRaidHistoryAggregateType<T>>

    /**
     * Group by RaidHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaidHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaidHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaidHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RaidHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaidHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaidHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaidHistory model
   */
  readonly fields: RaidHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaidHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaidHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaidHistory model
   */ 
  interface RaidHistoryFieldRefs {
    readonly id: FieldRef<"RaidHistory", 'String'>
    readonly userId: FieldRef<"RaidHistory", 'String'>
    readonly fromBroadcasterId: FieldRef<"RaidHistory", 'String'>
    readonly toBroadcasterId: FieldRef<"RaidHistory", 'String'>
    readonly toBroadcasterLogin: FieldRef<"RaidHistory", 'String'>
    readonly toBroadcasterName: FieldRef<"RaidHistory", 'String'>
    readonly categoryId: FieldRef<"RaidHistory", 'String'>
    readonly categoryName: FieldRef<"RaidHistory", 'String'>
    readonly startedAt: FieldRef<"RaidHistory", 'DateTime'>
    readonly executedAt: FieldRef<"RaidHistory", 'DateTime'>
    readonly status: FieldRef<"RaidHistory", 'RaidStatus'>
    readonly viewerCountAtRaid: FieldRef<"RaidHistory", 'Int'>
    readonly manualRating: FieldRef<"RaidHistory", 'Int'>
    readonly notes: FieldRef<"RaidHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaidHistory findUnique
   */
  export type RaidHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaidHistory to fetch.
     */
    where: RaidHistoryWhereUniqueInput
  }

  /**
   * RaidHistory findUniqueOrThrow
   */
  export type RaidHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaidHistory to fetch.
     */
    where: RaidHistoryWhereUniqueInput
  }

  /**
   * RaidHistory findFirst
   */
  export type RaidHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaidHistory to fetch.
     */
    where?: RaidHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidHistories to fetch.
     */
    orderBy?: RaidHistoryOrderByWithRelationInput | RaidHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidHistories.
     */
    cursor?: RaidHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidHistories.
     */
    distinct?: RaidHistoryScalarFieldEnum | RaidHistoryScalarFieldEnum[]
  }

  /**
   * RaidHistory findFirstOrThrow
   */
  export type RaidHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaidHistory to fetch.
     */
    where?: RaidHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidHistories to fetch.
     */
    orderBy?: RaidHistoryOrderByWithRelationInput | RaidHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaidHistories.
     */
    cursor?: RaidHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaidHistories.
     */
    distinct?: RaidHistoryScalarFieldEnum | RaidHistoryScalarFieldEnum[]
  }

  /**
   * RaidHistory findMany
   */
  export type RaidHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaidHistories to fetch.
     */
    where?: RaidHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaidHistories to fetch.
     */
    orderBy?: RaidHistoryOrderByWithRelationInput | RaidHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaidHistories.
     */
    cursor?: RaidHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaidHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaidHistories.
     */
    skip?: number
    distinct?: RaidHistoryScalarFieldEnum | RaidHistoryScalarFieldEnum[]
  }

  /**
   * RaidHistory create
   */
  export type RaidHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RaidHistory.
     */
    data: XOR<RaidHistoryCreateInput, RaidHistoryUncheckedCreateInput>
  }

  /**
   * RaidHistory createMany
   */
  export type RaidHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaidHistories.
     */
    data: RaidHistoryCreateManyInput | RaidHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaidHistory createManyAndReturn
   */
  export type RaidHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RaidHistories.
     */
    data: RaidHistoryCreateManyInput | RaidHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaidHistory update
   */
  export type RaidHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RaidHistory.
     */
    data: XOR<RaidHistoryUpdateInput, RaidHistoryUncheckedUpdateInput>
    /**
     * Choose, which RaidHistory to update.
     */
    where: RaidHistoryWhereUniqueInput
  }

  /**
   * RaidHistory updateMany
   */
  export type RaidHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaidHistories.
     */
    data: XOR<RaidHistoryUpdateManyMutationInput, RaidHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RaidHistories to update
     */
    where?: RaidHistoryWhereInput
  }

  /**
   * RaidHistory upsert
   */
  export type RaidHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RaidHistory to update in case it exists.
     */
    where: RaidHistoryWhereUniqueInput
    /**
     * In case the RaidHistory found by the `where` argument doesn't exist, create a new RaidHistory with this data.
     */
    create: XOR<RaidHistoryCreateInput, RaidHistoryUncheckedCreateInput>
    /**
     * In case the RaidHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaidHistoryUpdateInput, RaidHistoryUncheckedUpdateInput>
  }

  /**
   * RaidHistory delete
   */
  export type RaidHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
    /**
     * Filter which RaidHistory to delete.
     */
    where: RaidHistoryWhereUniqueInput
  }

  /**
   * RaidHistory deleteMany
   */
  export type RaidHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaidHistories to delete
     */
    where?: RaidHistoryWhereInput
  }

  /**
   * RaidHistory without action
   */
  export type RaidHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaidHistory
     */
    select?: RaidHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaidHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoryBlocklist
   */

  export type AggregateCategoryBlocklist = {
    _count: CategoryBlocklistCountAggregateOutputType | null
    _min: CategoryBlocklistMinAggregateOutputType | null
    _max: CategoryBlocklistMaxAggregateOutputType | null
  }

  export type CategoryBlocklistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    categoryName: string | null
  }

  export type CategoryBlocklistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    categoryName: string | null
  }

  export type CategoryBlocklistCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    categoryName: number
    _all: number
  }


  export type CategoryBlocklistMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    categoryName?: true
  }

  export type CategoryBlocklistMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    categoryName?: true
  }

  export type CategoryBlocklistCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    categoryName?: true
    _all?: true
  }

  export type CategoryBlocklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryBlocklist to aggregate.
     */
    where?: CategoryBlocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBlocklists to fetch.
     */
    orderBy?: CategoryBlocklistOrderByWithRelationInput | CategoryBlocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryBlocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBlocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBlocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryBlocklists
    **/
    _count?: true | CategoryBlocklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryBlocklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryBlocklistMaxAggregateInputType
  }

  export type GetCategoryBlocklistAggregateType<T extends CategoryBlocklistAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryBlocklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryBlocklist[P]>
      : GetScalarType<T[P], AggregateCategoryBlocklist[P]>
  }




  export type CategoryBlocklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryBlocklistWhereInput
    orderBy?: CategoryBlocklistOrderByWithAggregationInput | CategoryBlocklistOrderByWithAggregationInput[]
    by: CategoryBlocklistScalarFieldEnum[] | CategoryBlocklistScalarFieldEnum
    having?: CategoryBlocklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryBlocklistCountAggregateInputType | true
    _min?: CategoryBlocklistMinAggregateInputType
    _max?: CategoryBlocklistMaxAggregateInputType
  }

  export type CategoryBlocklistGroupByOutputType = {
    id: string
    userId: string
    categoryId: string
    categoryName: string
    _count: CategoryBlocklistCountAggregateOutputType | null
    _min: CategoryBlocklistMinAggregateOutputType | null
    _max: CategoryBlocklistMaxAggregateOutputType | null
  }

  type GetCategoryBlocklistGroupByPayload<T extends CategoryBlocklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryBlocklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryBlocklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryBlocklistGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryBlocklistGroupByOutputType[P]>
        }
      >
    >


  export type CategoryBlocklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    categoryName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryBlocklist"]>

  export type CategoryBlocklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    categoryName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryBlocklist"]>

  export type CategoryBlocklistSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    categoryName?: boolean
  }

  export type CategoryBlocklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryBlocklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryBlocklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryBlocklist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      categoryId: string
      categoryName: string
    }, ExtArgs["result"]["categoryBlocklist"]>
    composites: {}
  }

  type CategoryBlocklistGetPayload<S extends boolean | null | undefined | CategoryBlocklistDefaultArgs> = $Result.GetResult<Prisma.$CategoryBlocklistPayload, S>

  type CategoryBlocklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryBlocklistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryBlocklistCountAggregateInputType | true
    }

  export interface CategoryBlocklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryBlocklist'], meta: { name: 'CategoryBlocklist' } }
    /**
     * Find zero or one CategoryBlocklist that matches the filter.
     * @param {CategoryBlocklistFindUniqueArgs} args - Arguments to find a CategoryBlocklist
     * @example
     * // Get one CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryBlocklistFindUniqueArgs>(args: SelectSubset<T, CategoryBlocklistFindUniqueArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CategoryBlocklist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryBlocklistFindUniqueOrThrowArgs} args - Arguments to find a CategoryBlocklist
     * @example
     * // Get one CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryBlocklistFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryBlocklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CategoryBlocklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistFindFirstArgs} args - Arguments to find a CategoryBlocklist
     * @example
     * // Get one CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryBlocklistFindFirstArgs>(args?: SelectSubset<T, CategoryBlocklistFindFirstArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CategoryBlocklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistFindFirstOrThrowArgs} args - Arguments to find a CategoryBlocklist
     * @example
     * // Get one CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryBlocklistFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryBlocklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CategoryBlocklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryBlocklists
     * const categoryBlocklists = await prisma.categoryBlocklist.findMany()
     * 
     * // Get first 10 CategoryBlocklists
     * const categoryBlocklists = await prisma.categoryBlocklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryBlocklistWithIdOnly = await prisma.categoryBlocklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryBlocklistFindManyArgs>(args?: SelectSubset<T, CategoryBlocklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CategoryBlocklist.
     * @param {CategoryBlocklistCreateArgs} args - Arguments to create a CategoryBlocklist.
     * @example
     * // Create one CategoryBlocklist
     * const CategoryBlocklist = await prisma.categoryBlocklist.create({
     *   data: {
     *     // ... data to create a CategoryBlocklist
     *   }
     * })
     * 
     */
    create<T extends CategoryBlocklistCreateArgs>(args: SelectSubset<T, CategoryBlocklistCreateArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CategoryBlocklists.
     * @param {CategoryBlocklistCreateManyArgs} args - Arguments to create many CategoryBlocklists.
     * @example
     * // Create many CategoryBlocklists
     * const categoryBlocklist = await prisma.categoryBlocklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryBlocklistCreateManyArgs>(args?: SelectSubset<T, CategoryBlocklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryBlocklists and returns the data saved in the database.
     * @param {CategoryBlocklistCreateManyAndReturnArgs} args - Arguments to create many CategoryBlocklists.
     * @example
     * // Create many CategoryBlocklists
     * const categoryBlocklist = await prisma.categoryBlocklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryBlocklists and only return the `id`
     * const categoryBlocklistWithIdOnly = await prisma.categoryBlocklist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryBlocklistCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryBlocklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CategoryBlocklist.
     * @param {CategoryBlocklistDeleteArgs} args - Arguments to delete one CategoryBlocklist.
     * @example
     * // Delete one CategoryBlocklist
     * const CategoryBlocklist = await prisma.categoryBlocklist.delete({
     *   where: {
     *     // ... filter to delete one CategoryBlocklist
     *   }
     * })
     * 
     */
    delete<T extends CategoryBlocklistDeleteArgs>(args: SelectSubset<T, CategoryBlocklistDeleteArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CategoryBlocklist.
     * @param {CategoryBlocklistUpdateArgs} args - Arguments to update one CategoryBlocklist.
     * @example
     * // Update one CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryBlocklistUpdateArgs>(args: SelectSubset<T, CategoryBlocklistUpdateArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CategoryBlocklists.
     * @param {CategoryBlocklistDeleteManyArgs} args - Arguments to filter CategoryBlocklists to delete.
     * @example
     * // Delete a few CategoryBlocklists
     * const { count } = await prisma.categoryBlocklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryBlocklistDeleteManyArgs>(args?: SelectSubset<T, CategoryBlocklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryBlocklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryBlocklists
     * const categoryBlocklist = await prisma.categoryBlocklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryBlocklistUpdateManyArgs>(args: SelectSubset<T, CategoryBlocklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryBlocklist.
     * @param {CategoryBlocklistUpsertArgs} args - Arguments to update or create a CategoryBlocklist.
     * @example
     * // Update or create a CategoryBlocklist
     * const categoryBlocklist = await prisma.categoryBlocklist.upsert({
     *   create: {
     *     // ... data to create a CategoryBlocklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryBlocklist we want to update
     *   }
     * })
     */
    upsert<T extends CategoryBlocklistUpsertArgs>(args: SelectSubset<T, CategoryBlocklistUpsertArgs<ExtArgs>>): Prisma__CategoryBlocklistClient<$Result.GetResult<Prisma.$CategoryBlocklistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CategoryBlocklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistCountArgs} args - Arguments to filter CategoryBlocklists to count.
     * @example
     * // Count the number of CategoryBlocklists
     * const count = await prisma.categoryBlocklist.count({
     *   where: {
     *     // ... the filter for the CategoryBlocklists we want to count
     *   }
     * })
    **/
    count<T extends CategoryBlocklistCountArgs>(
      args?: Subset<T, CategoryBlocklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryBlocklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryBlocklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryBlocklistAggregateArgs>(args: Subset<T, CategoryBlocklistAggregateArgs>): Prisma.PrismaPromise<GetCategoryBlocklistAggregateType<T>>

    /**
     * Group by CategoryBlocklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBlocklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryBlocklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryBlocklistGroupByArgs['orderBy'] }
        : { orderBy?: CategoryBlocklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryBlocklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryBlocklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryBlocklist model
   */
  readonly fields: CategoryBlocklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryBlocklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryBlocklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryBlocklist model
   */ 
  interface CategoryBlocklistFieldRefs {
    readonly id: FieldRef<"CategoryBlocklist", 'String'>
    readonly userId: FieldRef<"CategoryBlocklist", 'String'>
    readonly categoryId: FieldRef<"CategoryBlocklist", 'String'>
    readonly categoryName: FieldRef<"CategoryBlocklist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryBlocklist findUnique
   */
  export type CategoryBlocklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBlocklist to fetch.
     */
    where: CategoryBlocklistWhereUniqueInput
  }

  /**
   * CategoryBlocklist findUniqueOrThrow
   */
  export type CategoryBlocklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBlocklist to fetch.
     */
    where: CategoryBlocklistWhereUniqueInput
  }

  /**
   * CategoryBlocklist findFirst
   */
  export type CategoryBlocklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBlocklist to fetch.
     */
    where?: CategoryBlocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBlocklists to fetch.
     */
    orderBy?: CategoryBlocklistOrderByWithRelationInput | CategoryBlocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryBlocklists.
     */
    cursor?: CategoryBlocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBlocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBlocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryBlocklists.
     */
    distinct?: CategoryBlocklistScalarFieldEnum | CategoryBlocklistScalarFieldEnum[]
  }

  /**
   * CategoryBlocklist findFirstOrThrow
   */
  export type CategoryBlocklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBlocklist to fetch.
     */
    where?: CategoryBlocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBlocklists to fetch.
     */
    orderBy?: CategoryBlocklistOrderByWithRelationInput | CategoryBlocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryBlocklists.
     */
    cursor?: CategoryBlocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBlocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBlocklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryBlocklists.
     */
    distinct?: CategoryBlocklistScalarFieldEnum | CategoryBlocklistScalarFieldEnum[]
  }

  /**
   * CategoryBlocklist findMany
   */
  export type CategoryBlocklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBlocklists to fetch.
     */
    where?: CategoryBlocklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBlocklists to fetch.
     */
    orderBy?: CategoryBlocklistOrderByWithRelationInput | CategoryBlocklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryBlocklists.
     */
    cursor?: CategoryBlocklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBlocklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBlocklists.
     */
    skip?: number
    distinct?: CategoryBlocklistScalarFieldEnum | CategoryBlocklistScalarFieldEnum[]
  }

  /**
   * CategoryBlocklist create
   */
  export type CategoryBlocklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryBlocklist.
     */
    data: XOR<CategoryBlocklistCreateInput, CategoryBlocklistUncheckedCreateInput>
  }

  /**
   * CategoryBlocklist createMany
   */
  export type CategoryBlocklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryBlocklists.
     */
    data: CategoryBlocklistCreateManyInput | CategoryBlocklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryBlocklist createManyAndReturn
   */
  export type CategoryBlocklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CategoryBlocklists.
     */
    data: CategoryBlocklistCreateManyInput | CategoryBlocklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryBlocklist update
   */
  export type CategoryBlocklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryBlocklist.
     */
    data: XOR<CategoryBlocklistUpdateInput, CategoryBlocklistUncheckedUpdateInput>
    /**
     * Choose, which CategoryBlocklist to update.
     */
    where: CategoryBlocklistWhereUniqueInput
  }

  /**
   * CategoryBlocklist updateMany
   */
  export type CategoryBlocklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryBlocklists.
     */
    data: XOR<CategoryBlocklistUpdateManyMutationInput, CategoryBlocklistUncheckedUpdateManyInput>
    /**
     * Filter which CategoryBlocklists to update
     */
    where?: CategoryBlocklistWhereInput
  }

  /**
   * CategoryBlocklist upsert
   */
  export type CategoryBlocklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryBlocklist to update in case it exists.
     */
    where: CategoryBlocklistWhereUniqueInput
    /**
     * In case the CategoryBlocklist found by the `where` argument doesn't exist, create a new CategoryBlocklist with this data.
     */
    create: XOR<CategoryBlocklistCreateInput, CategoryBlocklistUncheckedCreateInput>
    /**
     * In case the CategoryBlocklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryBlocklistUpdateInput, CategoryBlocklistUncheckedUpdateInput>
  }

  /**
   * CategoryBlocklist delete
   */
  export type CategoryBlocklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
    /**
     * Filter which CategoryBlocklist to delete.
     */
    where: CategoryBlocklistWhereUniqueInput
  }

  /**
   * CategoryBlocklist deleteMany
   */
  export type CategoryBlocklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryBlocklists to delete
     */
    where?: CategoryBlocklistWhereInput
  }

  /**
   * CategoryBlocklist without action
   */
  export type CategoryBlocklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBlocklist
     */
    select?: CategoryBlocklistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBlocklistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    twitchUserId: 'twitchUserId',
    login: 'login',
    displayName: 'displayName',
    profileImageUrl: 'profileImageUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OAuthTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    scopes: 'scopes',
    updatedAt: 'updatedAt'
  };

  export type OAuthTokenScalarFieldEnum = (typeof OAuthTokenScalarFieldEnum)[keyof typeof OAuthTokenScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
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

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const WarmListEntryScalarFieldEnum: {
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

  export type WarmListEntryScalarFieldEnum = (typeof WarmListEntryScalarFieldEnum)[keyof typeof WarmListEntryScalarFieldEnum]


  export const RaidExcludeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    excludedBroadcasterId: 'excludedBroadcasterId',
    reason: 'reason'
  };

  export type RaidExcludeScalarFieldEnum = (typeof RaidExcludeScalarFieldEnum)[keyof typeof RaidExcludeScalarFieldEnum]


  export const RaidHistoryScalarFieldEnum: {
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

  export type RaidHistoryScalarFieldEnum = (typeof RaidHistoryScalarFieldEnum)[keyof typeof RaidHistoryScalarFieldEnum]


  export const CategoryBlocklistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    categoryName: 'categoryName'
  };

  export type CategoryBlocklistScalarFieldEnum = (typeof CategoryBlocklistScalarFieldEnum)[keyof typeof CategoryBlocklistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MatureFilter'
   */
  export type EnumMatureFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatureFilter'>
    


  /**
   * Reference to a field of type 'MatureFilter[]'
   */
  export type ListEnumMatureFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatureFilter[]'>
    


  /**
   * Reference to a field of type 'BroadcasterTypeFilter'
   */
  export type EnumBroadcasterTypeFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BroadcasterTypeFilter'>
    


  /**
   * Reference to a field of type 'BroadcasterTypeFilter[]'
   */
  export type ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BroadcasterTypeFilter[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ViewerPreference'
   */
  export type EnumViewerPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewerPreference'>
    


  /**
   * Reference to a field of type 'ViewerPreference[]'
   */
  export type ListEnumViewerPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewerPreference[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DurationPreference'
   */
  export type EnumDurationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DurationPreference'>
    


  /**
   * Reference to a field of type 'DurationPreference[]'
   */
  export type ListEnumDurationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DurationPreference[]'>
    


  /**
   * Reference to a field of type 'RaidStatus'
   */
  export type EnumRaidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaidStatus'>
    


  /**
   * Reference to a field of type 'RaidStatus[]'
   */
  export type ListEnumRaidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaidStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    twitchUserId?: StringFilter<"User"> | string
    login?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    oauthToken?: XOR<OAuthTokenNullableRelationFilter, OAuthTokenWhereInput> | null
    settings?: XOR<SettingsNullableRelationFilter, SettingsWhereInput> | null
    warmList?: WarmListEntryListRelationFilter
    raidExcludes?: RaidExcludeListRelationFilter
    raidHistory?: RaidHistoryListRelationFilter
    categoryBlocklist?: CategoryBlocklistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    twitchUserId?: SortOrder
    login?: SortOrder
    displayName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    oauthToken?: OAuthTokenOrderByWithRelationInput
    settings?: SettingsOrderByWithRelationInput
    warmList?: WarmListEntryOrderByRelationAggregateInput
    raidExcludes?: RaidExcludeOrderByRelationAggregateInput
    raidHistory?: RaidHistoryOrderByRelationAggregateInput
    categoryBlocklist?: CategoryBlocklistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    twitchUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    login?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    oauthToken?: XOR<OAuthTokenNullableRelationFilter, OAuthTokenWhereInput> | null
    settings?: XOR<SettingsNullableRelationFilter, SettingsWhereInput> | null
    warmList?: WarmListEntryListRelationFilter
    raidExcludes?: RaidExcludeListRelationFilter
    raidHistory?: RaidHistoryListRelationFilter
    categoryBlocklist?: CategoryBlocklistListRelationFilter
  }, "id" | "twitchUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    twitchUserId?: SortOrder
    login?: SortOrder
    displayName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    twitchUserId?: StringWithAggregatesFilter<"User"> | string
    login?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OAuthTokenWhereInput = {
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    id?: StringFilter<"OAuthToken"> | string
    userId?: StringFilter<"OAuthToken"> | string
    accessToken?: StringFilter<"OAuthToken"> | string
    refreshToken?: StringFilter<"OAuthToken"> | string
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    scopes?: StringNullableListFilter<"OAuthToken">
    updatedAt?: DateTimeFilter<"OAuthToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OAuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scopes?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    accessToken?: StringFilter<"OAuthToken"> | string
    refreshToken?: StringFilter<"OAuthToken"> | string
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    scopes?: StringNullableListFilter<"OAuthToken">
    updatedAt?: DateTimeFilter<"OAuthToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OAuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scopes?: SortOrder
    updatedAt?: SortOrder
    _count?: OAuthTokenCountOrderByAggregateInput
    _max?: OAuthTokenMaxOrderByAggregateInput
    _min?: OAuthTokenMinOrderByAggregateInput
  }

  export type OAuthTokenScalarWhereWithAggregatesInput = {
    AND?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    OR?: OAuthTokenScalarWhereWithAggregatesInput[]
    NOT?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthToken"> | string
    userId?: StringWithAggregatesFilter<"OAuthToken"> | string
    accessToken?: StringWithAggregatesFilter<"OAuthToken"> | string
    refreshToken?: StringWithAggregatesFilter<"OAuthToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
    scopes?: StringNullableListFilter<"OAuthToken">
    updatedAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    userId?: StringFilter<"Settings"> | string
    allowedLanguages?: StringNullableListFilter<"Settings">
    matureContentFilter?: EnumMatureFilterFilter<"Settings"> | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFilter<"Settings"> | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFilter<"Settings"> | number
    maxTargetViewers?: IntFilter<"Settings"> | number
    viewerCountPreference?: EnumViewerPreferenceFilter<"Settings"> | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFilter<"Settings"> | boolean
    streamDurationPreference?: EnumDurationPreferenceFilter<"Settings"> | $Enums.DurationPreference
    raidMessage?: StringFilter<"Settings"> | string
    raidRunMessage?: StringFilter<"Settings"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedLanguages?: SortOrder
    matureContentFilter?: SortOrder
    broadcasterTypeFilter?: SortOrder
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
    viewerCountPreference?: SortOrder
    sameCategoryOnly?: SortOrder
    streamDurationPreference?: SortOrder
    raidMessage?: SortOrder
    raidRunMessage?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    allowedLanguages?: StringNullableListFilter<"Settings">
    matureContentFilter?: EnumMatureFilterFilter<"Settings"> | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFilter<"Settings"> | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFilter<"Settings"> | number
    maxTargetViewers?: IntFilter<"Settings"> | number
    viewerCountPreference?: EnumViewerPreferenceFilter<"Settings"> | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFilter<"Settings"> | boolean
    streamDurationPreference?: EnumDurationPreferenceFilter<"Settings"> | $Enums.DurationPreference
    raidMessage?: StringFilter<"Settings"> | string
    raidRunMessage?: StringFilter<"Settings"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedLanguages?: SortOrder
    matureContentFilter?: SortOrder
    broadcasterTypeFilter?: SortOrder
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
    viewerCountPreference?: SortOrder
    sameCategoryOnly?: SortOrder
    streamDurationPreference?: SortOrder
    raidMessage?: SortOrder
    raidRunMessage?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    userId?: StringWithAggregatesFilter<"Settings"> | string
    allowedLanguages?: StringNullableListFilter<"Settings">
    matureContentFilter?: EnumMatureFilterWithAggregatesFilter<"Settings"> | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterWithAggregatesFilter<"Settings"> | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntWithAggregatesFilter<"Settings"> | number
    maxTargetViewers?: IntWithAggregatesFilter<"Settings"> | number
    viewerCountPreference?: EnumViewerPreferenceWithAggregatesFilter<"Settings"> | $Enums.ViewerPreference
    sameCategoryOnly?: BoolWithAggregatesFilter<"Settings"> | boolean
    streamDurationPreference?: EnumDurationPreferenceWithAggregatesFilter<"Settings"> | $Enums.DurationPreference
    raidMessage?: StringWithAggregatesFilter<"Settings"> | string
    raidRunMessage?: StringWithAggregatesFilter<"Settings"> | string
  }

  export type WarmListEntryWhereInput = {
    AND?: WarmListEntryWhereInput | WarmListEntryWhereInput[]
    OR?: WarmListEntryWhereInput[]
    NOT?: WarmListEntryWhereInput | WarmListEntryWhereInput[]
    id?: StringFilter<"WarmListEntry"> | string
    userId?: StringFilter<"WarmListEntry"> | string
    broadcasterId?: StringFilter<"WarmListEntry"> | string
    broadcasterLogin?: StringFilter<"WarmListEntry"> | string
    broadcasterName?: StringFilter<"WarmListEntry"> | string
    profileImageUrl?: StringNullableFilter<"WarmListEntry"> | string | null
    notes?: StringNullableFilter<"WarmListEntry"> | string | null
    priority?: IntFilter<"WarmListEntry"> | number
    createdAt?: DateTimeFilter<"WarmListEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WarmListEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    broadcasterId?: SortOrder
    broadcasterLogin?: SortOrder
    broadcasterName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WarmListEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_broadcasterId?: WarmListEntryUserIdBroadcasterIdCompoundUniqueInput
    AND?: WarmListEntryWhereInput | WarmListEntryWhereInput[]
    OR?: WarmListEntryWhereInput[]
    NOT?: WarmListEntryWhereInput | WarmListEntryWhereInput[]
    userId?: StringFilter<"WarmListEntry"> | string
    broadcasterId?: StringFilter<"WarmListEntry"> | string
    broadcasterLogin?: StringFilter<"WarmListEntry"> | string
    broadcasterName?: StringFilter<"WarmListEntry"> | string
    profileImageUrl?: StringNullableFilter<"WarmListEntry"> | string | null
    notes?: StringNullableFilter<"WarmListEntry"> | string | null
    priority?: IntFilter<"WarmListEntry"> | number
    createdAt?: DateTimeFilter<"WarmListEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_broadcasterId">

  export type WarmListEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    broadcasterId?: SortOrder
    broadcasterLogin?: SortOrder
    broadcasterName?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    _count?: WarmListEntryCountOrderByAggregateInput
    _avg?: WarmListEntryAvgOrderByAggregateInput
    _max?: WarmListEntryMaxOrderByAggregateInput
    _min?: WarmListEntryMinOrderByAggregateInput
    _sum?: WarmListEntrySumOrderByAggregateInput
  }

  export type WarmListEntryScalarWhereWithAggregatesInput = {
    AND?: WarmListEntryScalarWhereWithAggregatesInput | WarmListEntryScalarWhereWithAggregatesInput[]
    OR?: WarmListEntryScalarWhereWithAggregatesInput[]
    NOT?: WarmListEntryScalarWhereWithAggregatesInput | WarmListEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WarmListEntry"> | string
    userId?: StringWithAggregatesFilter<"WarmListEntry"> | string
    broadcasterId?: StringWithAggregatesFilter<"WarmListEntry"> | string
    broadcasterLogin?: StringWithAggregatesFilter<"WarmListEntry"> | string
    broadcasterName?: StringWithAggregatesFilter<"WarmListEntry"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"WarmListEntry"> | string | null
    notes?: StringNullableWithAggregatesFilter<"WarmListEntry"> | string | null
    priority?: IntWithAggregatesFilter<"WarmListEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WarmListEntry"> | Date | string
  }

  export type RaidExcludeWhereInput = {
    AND?: RaidExcludeWhereInput | RaidExcludeWhereInput[]
    OR?: RaidExcludeWhereInput[]
    NOT?: RaidExcludeWhereInput | RaidExcludeWhereInput[]
    id?: StringFilter<"RaidExclude"> | string
    userId?: StringFilter<"RaidExclude"> | string
    excludedBroadcasterId?: StringFilter<"RaidExclude"> | string
    reason?: StringNullableFilter<"RaidExclude"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RaidExcludeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    excludedBroadcasterId?: SortOrder
    reason?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RaidExcludeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_excludedBroadcasterId?: RaidExcludeUserIdExcludedBroadcasterIdCompoundUniqueInput
    AND?: RaidExcludeWhereInput | RaidExcludeWhereInput[]
    OR?: RaidExcludeWhereInput[]
    NOT?: RaidExcludeWhereInput | RaidExcludeWhereInput[]
    userId?: StringFilter<"RaidExclude"> | string
    excludedBroadcasterId?: StringFilter<"RaidExclude"> | string
    reason?: StringNullableFilter<"RaidExclude"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_excludedBroadcasterId">

  export type RaidExcludeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    excludedBroadcasterId?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: RaidExcludeCountOrderByAggregateInput
    _max?: RaidExcludeMaxOrderByAggregateInput
    _min?: RaidExcludeMinOrderByAggregateInput
  }

  export type RaidExcludeScalarWhereWithAggregatesInput = {
    AND?: RaidExcludeScalarWhereWithAggregatesInput | RaidExcludeScalarWhereWithAggregatesInput[]
    OR?: RaidExcludeScalarWhereWithAggregatesInput[]
    NOT?: RaidExcludeScalarWhereWithAggregatesInput | RaidExcludeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaidExclude"> | string
    userId?: StringWithAggregatesFilter<"RaidExclude"> | string
    excludedBroadcasterId?: StringWithAggregatesFilter<"RaidExclude"> | string
    reason?: StringNullableWithAggregatesFilter<"RaidExclude"> | string | null
  }

  export type RaidHistoryWhereInput = {
    AND?: RaidHistoryWhereInput | RaidHistoryWhereInput[]
    OR?: RaidHistoryWhereInput[]
    NOT?: RaidHistoryWhereInput | RaidHistoryWhereInput[]
    id?: StringFilter<"RaidHistory"> | string
    userId?: StringFilter<"RaidHistory"> | string
    fromBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterLogin?: StringFilter<"RaidHistory"> | string
    toBroadcasterName?: StringFilter<"RaidHistory"> | string
    categoryId?: StringNullableFilter<"RaidHistory"> | string | null
    categoryName?: StringNullableFilter<"RaidHistory"> | string | null
    startedAt?: DateTimeFilter<"RaidHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"RaidHistory"> | Date | string | null
    status?: EnumRaidStatusFilter<"RaidHistory"> | $Enums.RaidStatus
    viewerCountAtRaid?: IntNullableFilter<"RaidHistory"> | number | null
    manualRating?: IntNullableFilter<"RaidHistory"> | number | null
    notes?: StringNullableFilter<"RaidHistory"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RaidHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromBroadcasterId?: SortOrder
    toBroadcasterId?: SortOrder
    toBroadcasterLogin?: SortOrder
    toBroadcasterName?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    categoryName?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    viewerCountAtRaid?: SortOrderInput | SortOrder
    manualRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RaidHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaidHistoryWhereInput | RaidHistoryWhereInput[]
    OR?: RaidHistoryWhereInput[]
    NOT?: RaidHistoryWhereInput | RaidHistoryWhereInput[]
    userId?: StringFilter<"RaidHistory"> | string
    fromBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterLogin?: StringFilter<"RaidHistory"> | string
    toBroadcasterName?: StringFilter<"RaidHistory"> | string
    categoryId?: StringNullableFilter<"RaidHistory"> | string | null
    categoryName?: StringNullableFilter<"RaidHistory"> | string | null
    startedAt?: DateTimeFilter<"RaidHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"RaidHistory"> | Date | string | null
    status?: EnumRaidStatusFilter<"RaidHistory"> | $Enums.RaidStatus
    viewerCountAtRaid?: IntNullableFilter<"RaidHistory"> | number | null
    manualRating?: IntNullableFilter<"RaidHistory"> | number | null
    notes?: StringNullableFilter<"RaidHistory"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RaidHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromBroadcasterId?: SortOrder
    toBroadcasterId?: SortOrder
    toBroadcasterLogin?: SortOrder
    toBroadcasterName?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    categoryName?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    executedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    viewerCountAtRaid?: SortOrderInput | SortOrder
    manualRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: RaidHistoryCountOrderByAggregateInput
    _avg?: RaidHistoryAvgOrderByAggregateInput
    _max?: RaidHistoryMaxOrderByAggregateInput
    _min?: RaidHistoryMinOrderByAggregateInput
    _sum?: RaidHistorySumOrderByAggregateInput
  }

  export type RaidHistoryScalarWhereWithAggregatesInput = {
    AND?: RaidHistoryScalarWhereWithAggregatesInput | RaidHistoryScalarWhereWithAggregatesInput[]
    OR?: RaidHistoryScalarWhereWithAggregatesInput[]
    NOT?: RaidHistoryScalarWhereWithAggregatesInput | RaidHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaidHistory"> | string
    userId?: StringWithAggregatesFilter<"RaidHistory"> | string
    fromBroadcasterId?: StringWithAggregatesFilter<"RaidHistory"> | string
    toBroadcasterId?: StringWithAggregatesFilter<"RaidHistory"> | string
    toBroadcasterLogin?: StringWithAggregatesFilter<"RaidHistory"> | string
    toBroadcasterName?: StringWithAggregatesFilter<"RaidHistory"> | string
    categoryId?: StringNullableWithAggregatesFilter<"RaidHistory"> | string | null
    categoryName?: StringNullableWithAggregatesFilter<"RaidHistory"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"RaidHistory"> | Date | string
    executedAt?: DateTimeNullableWithAggregatesFilter<"RaidHistory"> | Date | string | null
    status?: EnumRaidStatusWithAggregatesFilter<"RaidHistory"> | $Enums.RaidStatus
    viewerCountAtRaid?: IntNullableWithAggregatesFilter<"RaidHistory"> | number | null
    manualRating?: IntNullableWithAggregatesFilter<"RaidHistory"> | number | null
    notes?: StringNullableWithAggregatesFilter<"RaidHistory"> | string | null
  }

  export type CategoryBlocklistWhereInput = {
    AND?: CategoryBlocklistWhereInput | CategoryBlocklistWhereInput[]
    OR?: CategoryBlocklistWhereInput[]
    NOT?: CategoryBlocklistWhereInput | CategoryBlocklistWhereInput[]
    id?: StringFilter<"CategoryBlocklist"> | string
    userId?: StringFilter<"CategoryBlocklist"> | string
    categoryId?: StringFilter<"CategoryBlocklist"> | string
    categoryName?: StringFilter<"CategoryBlocklist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CategoryBlocklistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CategoryBlocklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_categoryId?: CategoryBlocklistUserIdCategoryIdCompoundUniqueInput
    AND?: CategoryBlocklistWhereInput | CategoryBlocklistWhereInput[]
    OR?: CategoryBlocklistWhereInput[]
    NOT?: CategoryBlocklistWhereInput | CategoryBlocklistWhereInput[]
    userId?: StringFilter<"CategoryBlocklist"> | string
    categoryId?: StringFilter<"CategoryBlocklist"> | string
    categoryName?: StringFilter<"CategoryBlocklist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_categoryId">

  export type CategoryBlocklistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    _count?: CategoryBlocklistCountOrderByAggregateInput
    _max?: CategoryBlocklistMaxOrderByAggregateInput
    _min?: CategoryBlocklistMinOrderByAggregateInput
  }

  export type CategoryBlocklistScalarWhereWithAggregatesInput = {
    AND?: CategoryBlocklistScalarWhereWithAggregatesInput | CategoryBlocklistScalarWhereWithAggregatesInput[]
    OR?: CategoryBlocklistScalarWhereWithAggregatesInput[]
    NOT?: CategoryBlocklistScalarWhereWithAggregatesInput | CategoryBlocklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryBlocklist"> | string
    userId?: StringWithAggregatesFilter<"CategoryBlocklist"> | string
    categoryId?: StringWithAggregatesFilter<"CategoryBlocklist"> | string
    categoryName?: StringWithAggregatesFilter<"CategoryBlocklist"> | string
  }

  export type UserCreateInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scopes?: OAuthTokenCreatescopesInput | string[]
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOauthTokenInput
  }

  export type OAuthTokenUncheckedCreateInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scopes?: OAuthTokenCreatescopesInput | string[]
    updatedAt?: Date | string
  }

  export type OAuthTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthTokenNestedInput
  }

  export type OAuthTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateManyInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scopes?: OAuthTokenCreatescopesInput | string[]
    updatedAt?: Date | string
  }

  export type OAuthTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    allowedLanguages?: SettingsCreateallowedLanguagesInput | string[]
    matureContentFilter?: $Enums.MatureFilter
    broadcasterTypeFilter?: $Enums.BroadcasterTypeFilter
    minTargetViewers?: number
    maxTargetViewers?: number
    viewerCountPreference?: $Enums.ViewerPreference
    sameCategoryOnly?: boolean
    streamDurationPreference?: $Enums.DurationPreference
    raidMessage?: string
    raidRunMessage?: string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    userId: string
    allowedLanguages?: SettingsCreateallowedLanguagesInput | string[]
    matureContentFilter?: $Enums.MatureFilter
    broadcasterTypeFilter?: $Enums.BroadcasterTypeFilter
    minTargetViewers?: number
    maxTargetViewers?: number
    viewerCountPreference?: $Enums.ViewerPreference
    sameCategoryOnly?: boolean
    streamDurationPreference?: $Enums.DurationPreference
    raidMessage?: string
    raidRunMessage?: string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    userId: string
    allowedLanguages?: SettingsCreateallowedLanguagesInput | string[]
    matureContentFilter?: $Enums.MatureFilter
    broadcasterTypeFilter?: $Enums.BroadcasterTypeFilter
    minTargetViewers?: number
    maxTargetViewers?: number
    viewerCountPreference?: $Enums.ViewerPreference
    sameCategoryOnly?: boolean
    streamDurationPreference?: $Enums.DurationPreference
    raidMessage?: string
    raidRunMessage?: string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
  }

  export type WarmListEntryCreateInput = {
    id?: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWarmListInput
  }

  export type WarmListEntryUncheckedCreateInput = {
    id?: string
    userId: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
  }

  export type WarmListEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWarmListNestedInput
  }

  export type WarmListEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarmListEntryCreateManyInput = {
    id?: string
    userId: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
  }

  export type WarmListEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarmListEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidExcludeCreateInput = {
    id?: string
    excludedBroadcasterId: string
    reason?: string | null
    user: UserCreateNestedOneWithoutRaidExcludesInput
  }

  export type RaidExcludeUncheckedCreateInput = {
    id?: string
    userId: string
    excludedBroadcasterId: string
    reason?: string | null
  }

  export type RaidExcludeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRaidExcludesNestedInput
  }

  export type RaidExcludeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidExcludeCreateManyInput = {
    id?: string
    userId: string
    excludedBroadcasterId: string
    reason?: string | null
  }

  export type RaidExcludeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidExcludeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryCreateInput = {
    id?: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
    user: UserCreateNestedOneWithoutRaidHistoryInput
  }

  export type RaidHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
  }

  export type RaidHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRaidHistoryNestedInput
  }

  export type RaidHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryCreateManyInput = {
    id?: string
    userId: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
  }

  export type RaidHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryBlocklistCreateInput = {
    id?: string
    categoryId: string
    categoryName: string
    user: UserCreateNestedOneWithoutCategoryBlocklistInput
  }

  export type CategoryBlocklistUncheckedCreateInput = {
    id?: string
    userId: string
    categoryId: string
    categoryName: string
  }

  export type CategoryBlocklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoryBlocklistNestedInput
  }

  export type CategoryBlocklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryBlocklistCreateManyInput = {
    id?: string
    userId: string
    categoryId: string
    categoryName: string
  }

  export type CategoryBlocklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryBlocklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OAuthTokenNullableRelationFilter = {
    is?: OAuthTokenWhereInput | null
    isNot?: OAuthTokenWhereInput | null
  }

  export type SettingsNullableRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type WarmListEntryListRelationFilter = {
    every?: WarmListEntryWhereInput
    some?: WarmListEntryWhereInput
    none?: WarmListEntryWhereInput
  }

  export type RaidExcludeListRelationFilter = {
    every?: RaidExcludeWhereInput
    some?: RaidExcludeWhereInput
    none?: RaidExcludeWhereInput
  }

  export type RaidHistoryListRelationFilter = {
    every?: RaidHistoryWhereInput
    some?: RaidHistoryWhereInput
    none?: RaidHistoryWhereInput
  }

  export type CategoryBlocklistListRelationFilter = {
    every?: CategoryBlocklistWhereInput
    some?: CategoryBlocklistWhereInput
    none?: CategoryBlocklistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WarmListEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaidExcludeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaidHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryBlocklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    twitchUserId?: SortOrder
    login?: SortOrder
    displayName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    twitchUserId?: SortOrder
    login?: SortOrder
    displayName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    twitchUserId?: SortOrder
    login?: SortOrder
    displayName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OAuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scopes?: SortOrder
    updatedAt?: SortOrder
  }

  export type OAuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OAuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMatureFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.MatureFilter | EnumMatureFilterFieldRefInput<$PrismaModel>
    in?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumMatureFilterFilter<$PrismaModel> | $Enums.MatureFilter
  }

  export type EnumBroadcasterTypeFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.BroadcasterTypeFilter | EnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    in?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel> | $Enums.BroadcasterTypeFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumViewerPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewerPreference | EnumViewerPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumViewerPreferenceFilter<$PrismaModel> | $Enums.ViewerPreference
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumDurationPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationPreference | EnumDurationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationPreferenceFilter<$PrismaModel> | $Enums.DurationPreference
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedLanguages?: SortOrder
    matureContentFilter?: SortOrder
    broadcasterTypeFilter?: SortOrder
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
    viewerCountPreference?: SortOrder
    sameCategoryOnly?: SortOrder
    streamDurationPreference?: SortOrder
    raidMessage?: SortOrder
    raidRunMessage?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matureContentFilter?: SortOrder
    broadcasterTypeFilter?: SortOrder
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
    viewerCountPreference?: SortOrder
    sameCategoryOnly?: SortOrder
    streamDurationPreference?: SortOrder
    raidMessage?: SortOrder
    raidRunMessage?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matureContentFilter?: SortOrder
    broadcasterTypeFilter?: SortOrder
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
    viewerCountPreference?: SortOrder
    sameCategoryOnly?: SortOrder
    streamDurationPreference?: SortOrder
    raidMessage?: SortOrder
    raidRunMessage?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    minTargetViewers?: SortOrder
    maxTargetViewers?: SortOrder
  }

  export type EnumMatureFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatureFilter | EnumMatureFilterFieldRefInput<$PrismaModel>
    in?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumMatureFilterWithAggregatesFilter<$PrismaModel> | $Enums.MatureFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatureFilterFilter<$PrismaModel>
    _max?: NestedEnumMatureFilterFilter<$PrismaModel>
  }

  export type EnumBroadcasterTypeFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BroadcasterTypeFilter | EnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    in?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumBroadcasterTypeFilterWithAggregatesFilter<$PrismaModel> | $Enums.BroadcasterTypeFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel>
    _max?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumViewerPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewerPreference | EnumViewerPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumViewerPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ViewerPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewerPreferenceFilter<$PrismaModel>
    _max?: NestedEnumViewerPreferenceFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDurationPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationPreference | EnumDurationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.DurationPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDurationPreferenceFilter<$PrismaModel>
    _max?: NestedEnumDurationPreferenceFilter<$PrismaModel>
  }

  export type WarmListEntryUserIdBroadcasterIdCompoundUniqueInput = {
    userId: string
    broadcasterId: string
  }

  export type WarmListEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    broadcasterId?: SortOrder
    broadcasterLogin?: SortOrder
    broadcasterName?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WarmListEntryAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type WarmListEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    broadcasterId?: SortOrder
    broadcasterLogin?: SortOrder
    broadcasterName?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WarmListEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    broadcasterId?: SortOrder
    broadcasterLogin?: SortOrder
    broadcasterName?: SortOrder
    profileImageUrl?: SortOrder
    notes?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
  }

  export type WarmListEntrySumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type RaidExcludeUserIdExcludedBroadcasterIdCompoundUniqueInput = {
    userId: string
    excludedBroadcasterId: string
  }

  export type RaidExcludeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    excludedBroadcasterId?: SortOrder
    reason?: SortOrder
  }

  export type RaidExcludeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    excludedBroadcasterId?: SortOrder
    reason?: SortOrder
  }

  export type RaidExcludeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    excludedBroadcasterId?: SortOrder
    reason?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRaidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaidStatus | EnumRaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaidStatusFilter<$PrismaModel> | $Enums.RaidStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RaidHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromBroadcasterId?: SortOrder
    toBroadcasterId?: SortOrder
    toBroadcasterLogin?: SortOrder
    toBroadcasterName?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    startedAt?: SortOrder
    executedAt?: SortOrder
    status?: SortOrder
    viewerCountAtRaid?: SortOrder
    manualRating?: SortOrder
    notes?: SortOrder
  }

  export type RaidHistoryAvgOrderByAggregateInput = {
    viewerCountAtRaid?: SortOrder
    manualRating?: SortOrder
  }

  export type RaidHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromBroadcasterId?: SortOrder
    toBroadcasterId?: SortOrder
    toBroadcasterLogin?: SortOrder
    toBroadcasterName?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    startedAt?: SortOrder
    executedAt?: SortOrder
    status?: SortOrder
    viewerCountAtRaid?: SortOrder
    manualRating?: SortOrder
    notes?: SortOrder
  }

  export type RaidHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromBroadcasterId?: SortOrder
    toBroadcasterId?: SortOrder
    toBroadcasterLogin?: SortOrder
    toBroadcasterName?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    startedAt?: SortOrder
    executedAt?: SortOrder
    status?: SortOrder
    viewerCountAtRaid?: SortOrder
    manualRating?: SortOrder
    notes?: SortOrder
  }

  export type RaidHistorySumOrderByAggregateInput = {
    viewerCountAtRaid?: SortOrder
    manualRating?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRaidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaidStatus | EnumRaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaidStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaidStatusFilter<$PrismaModel>
    _max?: NestedEnumRaidStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CategoryBlocklistUserIdCategoryIdCompoundUniqueInput = {
    userId: string
    categoryId: string
  }

  export type CategoryBlocklistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryBlocklistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryBlocklistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
  }

  export type OAuthTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput
    connect?: OAuthTokenWhereUniqueInput
  }

  export type SettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type WarmListEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput> | WarmListEntryCreateWithoutUserInput[] | WarmListEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarmListEntryCreateOrConnectWithoutUserInput | WarmListEntryCreateOrConnectWithoutUserInput[]
    createMany?: WarmListEntryCreateManyUserInputEnvelope
    connect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
  }

  export type RaidExcludeCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput> | RaidExcludeCreateWithoutUserInput[] | RaidExcludeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidExcludeCreateOrConnectWithoutUserInput | RaidExcludeCreateOrConnectWithoutUserInput[]
    createMany?: RaidExcludeCreateManyUserInputEnvelope
    connect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
  }

  export type RaidHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput> | RaidHistoryCreateWithoutUserInput[] | RaidHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidHistoryCreateOrConnectWithoutUserInput | RaidHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RaidHistoryCreateManyUserInputEnvelope
    connect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
  }

  export type CategoryBlocklistCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput> | CategoryBlocklistCreateWithoutUserInput[] | CategoryBlocklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryBlocklistCreateOrConnectWithoutUserInput | CategoryBlocklistCreateOrConnectWithoutUserInput[]
    createMany?: CategoryBlocklistCreateManyUserInputEnvelope
    connect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
  }

  export type OAuthTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput
    connect?: OAuthTokenWhereUniqueInput
  }

  export type SettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type WarmListEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput> | WarmListEntryCreateWithoutUserInput[] | WarmListEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarmListEntryCreateOrConnectWithoutUserInput | WarmListEntryCreateOrConnectWithoutUserInput[]
    createMany?: WarmListEntryCreateManyUserInputEnvelope
    connect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
  }

  export type RaidExcludeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput> | RaidExcludeCreateWithoutUserInput[] | RaidExcludeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidExcludeCreateOrConnectWithoutUserInput | RaidExcludeCreateOrConnectWithoutUserInput[]
    createMany?: RaidExcludeCreateManyUserInputEnvelope
    connect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
  }

  export type RaidHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput> | RaidHistoryCreateWithoutUserInput[] | RaidHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidHistoryCreateOrConnectWithoutUserInput | RaidHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RaidHistoryCreateManyUserInputEnvelope
    connect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
  }

  export type CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput> | CategoryBlocklistCreateWithoutUserInput[] | CategoryBlocklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryBlocklistCreateOrConnectWithoutUserInput | CategoryBlocklistCreateOrConnectWithoutUserInput[]
    createMany?: CategoryBlocklistCreateManyUserInputEnvelope
    connect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OAuthTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput
    upsert?: OAuthTokenUpsertWithoutUserInput
    disconnect?: OAuthTokenWhereInput | boolean
    delete?: OAuthTokenWhereInput | boolean
    connect?: OAuthTokenWhereUniqueInput
    update?: XOR<XOR<OAuthTokenUpdateToOneWithWhereWithoutUserInput, OAuthTokenUpdateWithoutUserInput>, OAuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type WarmListEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput> | WarmListEntryCreateWithoutUserInput[] | WarmListEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarmListEntryCreateOrConnectWithoutUserInput | WarmListEntryCreateOrConnectWithoutUserInput[]
    upsert?: WarmListEntryUpsertWithWhereUniqueWithoutUserInput | WarmListEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarmListEntryCreateManyUserInputEnvelope
    set?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    disconnect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    delete?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    connect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    update?: WarmListEntryUpdateWithWhereUniqueWithoutUserInput | WarmListEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarmListEntryUpdateManyWithWhereWithoutUserInput | WarmListEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarmListEntryScalarWhereInput | WarmListEntryScalarWhereInput[]
  }

  export type RaidExcludeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput> | RaidExcludeCreateWithoutUserInput[] | RaidExcludeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidExcludeCreateOrConnectWithoutUserInput | RaidExcludeCreateOrConnectWithoutUserInput[]
    upsert?: RaidExcludeUpsertWithWhereUniqueWithoutUserInput | RaidExcludeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidExcludeCreateManyUserInputEnvelope
    set?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    disconnect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    delete?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    connect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    update?: RaidExcludeUpdateWithWhereUniqueWithoutUserInput | RaidExcludeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidExcludeUpdateManyWithWhereWithoutUserInput | RaidExcludeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidExcludeScalarWhereInput | RaidExcludeScalarWhereInput[]
  }

  export type RaidHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput> | RaidHistoryCreateWithoutUserInput[] | RaidHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidHistoryCreateOrConnectWithoutUserInput | RaidHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RaidHistoryUpsertWithWhereUniqueWithoutUserInput | RaidHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidHistoryCreateManyUserInputEnvelope
    set?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    disconnect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    delete?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    connect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    update?: RaidHistoryUpdateWithWhereUniqueWithoutUserInput | RaidHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidHistoryUpdateManyWithWhereWithoutUserInput | RaidHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidHistoryScalarWhereInput | RaidHistoryScalarWhereInput[]
  }

  export type CategoryBlocklistUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput> | CategoryBlocklistCreateWithoutUserInput[] | CategoryBlocklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryBlocklistCreateOrConnectWithoutUserInput | CategoryBlocklistCreateOrConnectWithoutUserInput[]
    upsert?: CategoryBlocklistUpsertWithWhereUniqueWithoutUserInput | CategoryBlocklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryBlocklistCreateManyUserInputEnvelope
    set?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    disconnect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    delete?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    connect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    update?: CategoryBlocklistUpdateWithWhereUniqueWithoutUserInput | CategoryBlocklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryBlocklistUpdateManyWithWhereWithoutUserInput | CategoryBlocklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryBlocklistScalarWhereInput | CategoryBlocklistScalarWhereInput[]
  }

  export type OAuthTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput
    upsert?: OAuthTokenUpsertWithoutUserInput
    disconnect?: OAuthTokenWhereInput | boolean
    delete?: OAuthTokenWhereInput | boolean
    connect?: OAuthTokenWhereUniqueInput
    update?: XOR<XOR<OAuthTokenUpdateToOneWithWhereWithoutUserInput, OAuthTokenUpdateWithoutUserInput>, OAuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type WarmListEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput> | WarmListEntryCreateWithoutUserInput[] | WarmListEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarmListEntryCreateOrConnectWithoutUserInput | WarmListEntryCreateOrConnectWithoutUserInput[]
    upsert?: WarmListEntryUpsertWithWhereUniqueWithoutUserInput | WarmListEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarmListEntryCreateManyUserInputEnvelope
    set?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    disconnect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    delete?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    connect?: WarmListEntryWhereUniqueInput | WarmListEntryWhereUniqueInput[]
    update?: WarmListEntryUpdateWithWhereUniqueWithoutUserInput | WarmListEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarmListEntryUpdateManyWithWhereWithoutUserInput | WarmListEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarmListEntryScalarWhereInput | WarmListEntryScalarWhereInput[]
  }

  export type RaidExcludeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput> | RaidExcludeCreateWithoutUserInput[] | RaidExcludeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidExcludeCreateOrConnectWithoutUserInput | RaidExcludeCreateOrConnectWithoutUserInput[]
    upsert?: RaidExcludeUpsertWithWhereUniqueWithoutUserInput | RaidExcludeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidExcludeCreateManyUserInputEnvelope
    set?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    disconnect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    delete?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    connect?: RaidExcludeWhereUniqueInput | RaidExcludeWhereUniqueInput[]
    update?: RaidExcludeUpdateWithWhereUniqueWithoutUserInput | RaidExcludeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidExcludeUpdateManyWithWhereWithoutUserInput | RaidExcludeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidExcludeScalarWhereInput | RaidExcludeScalarWhereInput[]
  }

  export type RaidHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput> | RaidHistoryCreateWithoutUserInput[] | RaidHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RaidHistoryCreateOrConnectWithoutUserInput | RaidHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RaidHistoryUpsertWithWhereUniqueWithoutUserInput | RaidHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RaidHistoryCreateManyUserInputEnvelope
    set?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    disconnect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    delete?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    connect?: RaidHistoryWhereUniqueInput | RaidHistoryWhereUniqueInput[]
    update?: RaidHistoryUpdateWithWhereUniqueWithoutUserInput | RaidHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RaidHistoryUpdateManyWithWhereWithoutUserInput | RaidHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RaidHistoryScalarWhereInput | RaidHistoryScalarWhereInput[]
  }

  export type CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput> | CategoryBlocklistCreateWithoutUserInput[] | CategoryBlocklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryBlocklistCreateOrConnectWithoutUserInput | CategoryBlocklistCreateOrConnectWithoutUserInput[]
    upsert?: CategoryBlocklistUpsertWithWhereUniqueWithoutUserInput | CategoryBlocklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryBlocklistCreateManyUserInputEnvelope
    set?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    disconnect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    delete?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    connect?: CategoryBlocklistWhereUniqueInput | CategoryBlocklistWhereUniqueInput[]
    update?: CategoryBlocklistUpdateWithWhereUniqueWithoutUserInput | CategoryBlocklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryBlocklistUpdateManyWithWhereWithoutUserInput | CategoryBlocklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryBlocklistScalarWhereInput | CategoryBlocklistScalarWhereInput[]
  }

  export type OAuthTokenCreatescopesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOauthTokenInput = {
    create?: XOR<UserCreateWithoutOauthTokenInput, UserUncheckedCreateWithoutOauthTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthTokenInput
    connect?: UserWhereUniqueInput
  }

  export type OAuthTokenUpdatescopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutOauthTokenNestedInput = {
    create?: XOR<UserCreateWithoutOauthTokenInput, UserUncheckedCreateWithoutOauthTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthTokenInput
    upsert?: UserUpsertWithoutOauthTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthTokenInput, UserUpdateWithoutOauthTokenInput>, UserUncheckedUpdateWithoutOauthTokenInput>
  }

  export type SettingsCreateallowedLanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type SettingsUpdateallowedLanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumMatureFilterFieldUpdateOperationsInput = {
    set?: $Enums.MatureFilter
  }

  export type EnumBroadcasterTypeFilterFieldUpdateOperationsInput = {
    set?: $Enums.BroadcasterTypeFilter
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumViewerPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.ViewerPreference
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDurationPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.DurationPreference
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutWarmListInput = {
    create?: XOR<UserCreateWithoutWarmListInput, UserUncheckedCreateWithoutWarmListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarmListInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWarmListNestedInput = {
    create?: XOR<UserCreateWithoutWarmListInput, UserUncheckedCreateWithoutWarmListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarmListInput
    upsert?: UserUpsertWithoutWarmListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarmListInput, UserUpdateWithoutWarmListInput>, UserUncheckedUpdateWithoutWarmListInput>
  }

  export type UserCreateNestedOneWithoutRaidExcludesInput = {
    create?: XOR<UserCreateWithoutRaidExcludesInput, UserUncheckedCreateWithoutRaidExcludesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidExcludesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRaidExcludesNestedInput = {
    create?: XOR<UserCreateWithoutRaidExcludesInput, UserUncheckedCreateWithoutRaidExcludesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidExcludesInput
    upsert?: UserUpsertWithoutRaidExcludesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaidExcludesInput, UserUpdateWithoutRaidExcludesInput>, UserUncheckedUpdateWithoutRaidExcludesInput>
  }

  export type UserCreateNestedOneWithoutRaidHistoryInput = {
    create?: XOR<UserCreateWithoutRaidHistoryInput, UserUncheckedCreateWithoutRaidHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRaidStatusFieldUpdateOperationsInput = {
    set?: $Enums.RaidStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRaidHistoryNestedInput = {
    create?: XOR<UserCreateWithoutRaidHistoryInput, UserUncheckedCreateWithoutRaidHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaidHistoryInput
    upsert?: UserUpsertWithoutRaidHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaidHistoryInput, UserUpdateWithoutRaidHistoryInput>, UserUncheckedUpdateWithoutRaidHistoryInput>
  }

  export type UserCreateNestedOneWithoutCategoryBlocklistInput = {
    create?: XOR<UserCreateWithoutCategoryBlocklistInput, UserUncheckedCreateWithoutCategoryBlocklistInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryBlocklistInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCategoryBlocklistNestedInput = {
    create?: XOR<UserCreateWithoutCategoryBlocklistInput, UserUncheckedCreateWithoutCategoryBlocklistInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryBlocklistInput
    upsert?: UserUpsertWithoutCategoryBlocklistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoryBlocklistInput, UserUpdateWithoutCategoryBlocklistInput>, UserUncheckedUpdateWithoutCategoryBlocklistInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMatureFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.MatureFilter | EnumMatureFilterFieldRefInput<$PrismaModel>
    in?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumMatureFilterFilter<$PrismaModel> | $Enums.MatureFilter
  }

  export type NestedEnumBroadcasterTypeFilterFilter<$PrismaModel = never> = {
    equals?: $Enums.BroadcasterTypeFilter | EnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    in?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel> | $Enums.BroadcasterTypeFilter
  }

  export type NestedEnumViewerPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewerPreference | EnumViewerPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumViewerPreferenceFilter<$PrismaModel> | $Enums.ViewerPreference
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDurationPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationPreference | EnumDurationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationPreferenceFilter<$PrismaModel> | $Enums.DurationPreference
  }

  export type NestedEnumMatureFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatureFilter | EnumMatureFilterFieldRefInput<$PrismaModel>
    in?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatureFilter[] | ListEnumMatureFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumMatureFilterWithAggregatesFilter<$PrismaModel> | $Enums.MatureFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatureFilterFilter<$PrismaModel>
    _max?: NestedEnumMatureFilterFilter<$PrismaModel>
  }

  export type NestedEnumBroadcasterTypeFilterWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BroadcasterTypeFilter | EnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    in?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    notIn?: $Enums.BroadcasterTypeFilter[] | ListEnumBroadcasterTypeFilterFieldRefInput<$PrismaModel>
    not?: NestedEnumBroadcasterTypeFilterWithAggregatesFilter<$PrismaModel> | $Enums.BroadcasterTypeFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel>
    _max?: NestedEnumBroadcasterTypeFilterFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumViewerPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewerPreference | EnumViewerPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewerPreference[] | ListEnumViewerPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumViewerPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ViewerPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewerPreferenceFilter<$PrismaModel>
    _max?: NestedEnumViewerPreferenceFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDurationPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DurationPreference | EnumDurationPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DurationPreference[] | ListEnumDurationPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDurationPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.DurationPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDurationPreferenceFilter<$PrismaModel>
    _max?: NestedEnumDurationPreferenceFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRaidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaidStatus | EnumRaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaidStatusFilter<$PrismaModel> | $Enums.RaidStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRaidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaidStatus | EnumRaidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaidStatus[] | ListEnumRaidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaidStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaidStatusFilter<$PrismaModel>
    _max?: NestedEnumRaidStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OAuthTokenCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scopes?: OAuthTokenCreatescopesInput | string[]
    updatedAt?: Date | string
  }

  export type OAuthTokenUncheckedCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    scopes?: OAuthTokenCreatescopesInput | string[]
    updatedAt?: Date | string
  }

  export type OAuthTokenCreateOrConnectWithoutUserInput = {
    where: OAuthTokenWhereUniqueInput
    create: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
  }

  export type SettingsCreateWithoutUserInput = {
    id?: string
    allowedLanguages?: SettingsCreateallowedLanguagesInput | string[]
    matureContentFilter?: $Enums.MatureFilter
    broadcasterTypeFilter?: $Enums.BroadcasterTypeFilter
    minTargetViewers?: number
    maxTargetViewers?: number
    viewerCountPreference?: $Enums.ViewerPreference
    sameCategoryOnly?: boolean
    streamDurationPreference?: $Enums.DurationPreference
    raidMessage?: string
    raidRunMessage?: string
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: string
    allowedLanguages?: SettingsCreateallowedLanguagesInput | string[]
    matureContentFilter?: $Enums.MatureFilter
    broadcasterTypeFilter?: $Enums.BroadcasterTypeFilter
    minTargetViewers?: number
    maxTargetViewers?: number
    viewerCountPreference?: $Enums.ViewerPreference
    sameCategoryOnly?: boolean
    streamDurationPreference?: $Enums.DurationPreference
    raidMessage?: string
    raidRunMessage?: string
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type WarmListEntryCreateWithoutUserInput = {
    id?: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
  }

  export type WarmListEntryUncheckedCreateWithoutUserInput = {
    id?: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
  }

  export type WarmListEntryCreateOrConnectWithoutUserInput = {
    where: WarmListEntryWhereUniqueInput
    create: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput>
  }

  export type WarmListEntryCreateManyUserInputEnvelope = {
    data: WarmListEntryCreateManyUserInput | WarmListEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RaidExcludeCreateWithoutUserInput = {
    id?: string
    excludedBroadcasterId: string
    reason?: string | null
  }

  export type RaidExcludeUncheckedCreateWithoutUserInput = {
    id?: string
    excludedBroadcasterId: string
    reason?: string | null
  }

  export type RaidExcludeCreateOrConnectWithoutUserInput = {
    where: RaidExcludeWhereUniqueInput
    create: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput>
  }

  export type RaidExcludeCreateManyUserInputEnvelope = {
    data: RaidExcludeCreateManyUserInput | RaidExcludeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RaidHistoryCreateWithoutUserInput = {
    id?: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
  }

  export type RaidHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
  }

  export type RaidHistoryCreateOrConnectWithoutUserInput = {
    where: RaidHistoryWhereUniqueInput
    create: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput>
  }

  export type RaidHistoryCreateManyUserInputEnvelope = {
    data: RaidHistoryCreateManyUserInput | RaidHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryBlocklistCreateWithoutUserInput = {
    id?: string
    categoryId: string
    categoryName: string
  }

  export type CategoryBlocklistUncheckedCreateWithoutUserInput = {
    id?: string
    categoryId: string
    categoryName: string
  }

  export type CategoryBlocklistCreateOrConnectWithoutUserInput = {
    where: CategoryBlocklistWhereUniqueInput
    create: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput>
  }

  export type CategoryBlocklistCreateManyUserInputEnvelope = {
    data: CategoryBlocklistCreateManyUserInput | CategoryBlocklistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthTokenUpsertWithoutUserInput = {
    update: XOR<OAuthTokenUpdateWithoutUserInput, OAuthTokenUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
    where?: OAuthTokenWhereInput
  }

  export type OAuthTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: OAuthTokenWhereInput
    data: XOR<OAuthTokenUpdateWithoutUserInput, OAuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type OAuthTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: OAuthTokenUpdatescopesInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUpsertWithoutUserInput = {
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedLanguages?: SettingsUpdateallowedLanguagesInput | string[]
    matureContentFilter?: EnumMatureFilterFieldUpdateOperationsInput | $Enums.MatureFilter
    broadcasterTypeFilter?: EnumBroadcasterTypeFilterFieldUpdateOperationsInput | $Enums.BroadcasterTypeFilter
    minTargetViewers?: IntFieldUpdateOperationsInput | number
    maxTargetViewers?: IntFieldUpdateOperationsInput | number
    viewerCountPreference?: EnumViewerPreferenceFieldUpdateOperationsInput | $Enums.ViewerPreference
    sameCategoryOnly?: BoolFieldUpdateOperationsInput | boolean
    streamDurationPreference?: EnumDurationPreferenceFieldUpdateOperationsInput | $Enums.DurationPreference
    raidMessage?: StringFieldUpdateOperationsInput | string
    raidRunMessage?: StringFieldUpdateOperationsInput | string
  }

  export type WarmListEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: WarmListEntryWhereUniqueInput
    update: XOR<WarmListEntryUpdateWithoutUserInput, WarmListEntryUncheckedUpdateWithoutUserInput>
    create: XOR<WarmListEntryCreateWithoutUserInput, WarmListEntryUncheckedCreateWithoutUserInput>
  }

  export type WarmListEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: WarmListEntryWhereUniqueInput
    data: XOR<WarmListEntryUpdateWithoutUserInput, WarmListEntryUncheckedUpdateWithoutUserInput>
  }

  export type WarmListEntryUpdateManyWithWhereWithoutUserInput = {
    where: WarmListEntryScalarWhereInput
    data: XOR<WarmListEntryUpdateManyMutationInput, WarmListEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type WarmListEntryScalarWhereInput = {
    AND?: WarmListEntryScalarWhereInput | WarmListEntryScalarWhereInput[]
    OR?: WarmListEntryScalarWhereInput[]
    NOT?: WarmListEntryScalarWhereInput | WarmListEntryScalarWhereInput[]
    id?: StringFilter<"WarmListEntry"> | string
    userId?: StringFilter<"WarmListEntry"> | string
    broadcasterId?: StringFilter<"WarmListEntry"> | string
    broadcasterLogin?: StringFilter<"WarmListEntry"> | string
    broadcasterName?: StringFilter<"WarmListEntry"> | string
    profileImageUrl?: StringNullableFilter<"WarmListEntry"> | string | null
    notes?: StringNullableFilter<"WarmListEntry"> | string | null
    priority?: IntFilter<"WarmListEntry"> | number
    createdAt?: DateTimeFilter<"WarmListEntry"> | Date | string
  }

  export type RaidExcludeUpsertWithWhereUniqueWithoutUserInput = {
    where: RaidExcludeWhereUniqueInput
    update: XOR<RaidExcludeUpdateWithoutUserInput, RaidExcludeUncheckedUpdateWithoutUserInput>
    create: XOR<RaidExcludeCreateWithoutUserInput, RaidExcludeUncheckedCreateWithoutUserInput>
  }

  export type RaidExcludeUpdateWithWhereUniqueWithoutUserInput = {
    where: RaidExcludeWhereUniqueInput
    data: XOR<RaidExcludeUpdateWithoutUserInput, RaidExcludeUncheckedUpdateWithoutUserInput>
  }

  export type RaidExcludeUpdateManyWithWhereWithoutUserInput = {
    where: RaidExcludeScalarWhereInput
    data: XOR<RaidExcludeUpdateManyMutationInput, RaidExcludeUncheckedUpdateManyWithoutUserInput>
  }

  export type RaidExcludeScalarWhereInput = {
    AND?: RaidExcludeScalarWhereInput | RaidExcludeScalarWhereInput[]
    OR?: RaidExcludeScalarWhereInput[]
    NOT?: RaidExcludeScalarWhereInput | RaidExcludeScalarWhereInput[]
    id?: StringFilter<"RaidExclude"> | string
    userId?: StringFilter<"RaidExclude"> | string
    excludedBroadcasterId?: StringFilter<"RaidExclude"> | string
    reason?: StringNullableFilter<"RaidExclude"> | string | null
  }

  export type RaidHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: RaidHistoryWhereUniqueInput
    update: XOR<RaidHistoryUpdateWithoutUserInput, RaidHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<RaidHistoryCreateWithoutUserInput, RaidHistoryUncheckedCreateWithoutUserInput>
  }

  export type RaidHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: RaidHistoryWhereUniqueInput
    data: XOR<RaidHistoryUpdateWithoutUserInput, RaidHistoryUncheckedUpdateWithoutUserInput>
  }

  export type RaidHistoryUpdateManyWithWhereWithoutUserInput = {
    where: RaidHistoryScalarWhereInput
    data: XOR<RaidHistoryUpdateManyMutationInput, RaidHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type RaidHistoryScalarWhereInput = {
    AND?: RaidHistoryScalarWhereInput | RaidHistoryScalarWhereInput[]
    OR?: RaidHistoryScalarWhereInput[]
    NOT?: RaidHistoryScalarWhereInput | RaidHistoryScalarWhereInput[]
    id?: StringFilter<"RaidHistory"> | string
    userId?: StringFilter<"RaidHistory"> | string
    fromBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterId?: StringFilter<"RaidHistory"> | string
    toBroadcasterLogin?: StringFilter<"RaidHistory"> | string
    toBroadcasterName?: StringFilter<"RaidHistory"> | string
    categoryId?: StringNullableFilter<"RaidHistory"> | string | null
    categoryName?: StringNullableFilter<"RaidHistory"> | string | null
    startedAt?: DateTimeFilter<"RaidHistory"> | Date | string
    executedAt?: DateTimeNullableFilter<"RaidHistory"> | Date | string | null
    status?: EnumRaidStatusFilter<"RaidHistory"> | $Enums.RaidStatus
    viewerCountAtRaid?: IntNullableFilter<"RaidHistory"> | number | null
    manualRating?: IntNullableFilter<"RaidHistory"> | number | null
    notes?: StringNullableFilter<"RaidHistory"> | string | null
  }

  export type CategoryBlocklistUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryBlocklistWhereUniqueInput
    update: XOR<CategoryBlocklistUpdateWithoutUserInput, CategoryBlocklistUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryBlocklistCreateWithoutUserInput, CategoryBlocklistUncheckedCreateWithoutUserInput>
  }

  export type CategoryBlocklistUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryBlocklistWhereUniqueInput
    data: XOR<CategoryBlocklistUpdateWithoutUserInput, CategoryBlocklistUncheckedUpdateWithoutUserInput>
  }

  export type CategoryBlocklistUpdateManyWithWhereWithoutUserInput = {
    where: CategoryBlocklistScalarWhereInput
    data: XOR<CategoryBlocklistUpdateManyMutationInput, CategoryBlocklistUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryBlocklistScalarWhereInput = {
    AND?: CategoryBlocklistScalarWhereInput | CategoryBlocklistScalarWhereInput[]
    OR?: CategoryBlocklistScalarWhereInput[]
    NOT?: CategoryBlocklistScalarWhereInput | CategoryBlocklistScalarWhereInput[]
    id?: StringFilter<"CategoryBlocklist"> | string
    userId?: StringFilter<"CategoryBlocklist"> | string
    categoryId?: StringFilter<"CategoryBlocklist"> | string
    categoryName?: StringFilter<"CategoryBlocklist"> | string
  }

  export type UserCreateWithoutOauthTokenInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    settings?: SettingsCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthTokenInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthTokenInput, UserUncheckedCreateWithoutOauthTokenInput>
  }

  export type UserUpsertWithoutOauthTokenInput = {
    update: XOR<UserUpdateWithoutOauthTokenInput, UserUncheckedUpdateWithoutOauthTokenInput>
    create: XOR<UserCreateWithoutOauthTokenInput, UserUncheckedCreateWithoutOauthTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthTokenInput, UserUncheckedUpdateWithoutOauthTokenInput>
  }

  export type UserUpdateWithoutOauthTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: SettingsUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWarmListInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarmListInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarmListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarmListInput, UserUncheckedCreateWithoutWarmListInput>
  }

  export type UserUpsertWithoutWarmListInput = {
    update: XOR<UserUpdateWithoutWarmListInput, UserUncheckedUpdateWithoutWarmListInput>
    create: XOR<UserCreateWithoutWarmListInput, UserUncheckedCreateWithoutWarmListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarmListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarmListInput, UserUncheckedUpdateWithoutWarmListInput>
  }

  export type UserUpdateWithoutWarmListInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarmListInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRaidExcludesInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRaidExcludesInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRaidExcludesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaidExcludesInput, UserUncheckedCreateWithoutRaidExcludesInput>
  }

  export type UserUpsertWithoutRaidExcludesInput = {
    update: XOR<UserUpdateWithoutRaidExcludesInput, UserUncheckedUpdateWithoutRaidExcludesInput>
    create: XOR<UserCreateWithoutRaidExcludesInput, UserUncheckedCreateWithoutRaidExcludesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaidExcludesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaidExcludesInput, UserUncheckedUpdateWithoutRaidExcludesInput>
  }

  export type UserUpdateWithoutRaidExcludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRaidExcludesInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRaidHistoryInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRaidHistoryInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    categoryBlocklist?: CategoryBlocklistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRaidHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaidHistoryInput, UserUncheckedCreateWithoutRaidHistoryInput>
  }

  export type UserUpsertWithoutRaidHistoryInput = {
    update: XOR<UserUpdateWithoutRaidHistoryInput, UserUncheckedUpdateWithoutRaidHistoryInput>
    create: XOR<UserCreateWithoutRaidHistoryInput, UserUncheckedCreateWithoutRaidHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaidHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaidHistoryInput, UserUncheckedUpdateWithoutRaidHistoryInput>
  }

  export type UserUpdateWithoutRaidHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRaidHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    categoryBlocklist?: CategoryBlocklistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCategoryBlocklistInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenCreateNestedOneWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoryBlocklistInput = {
    id?: string
    twitchUserId: string
    login: string
    displayName: string
    profileImageUrl?: string | null
    createdAt?: Date | string
    oauthToken?: OAuthTokenUncheckedCreateNestedOneWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    warmList?: WarmListEntryUncheckedCreateNestedManyWithoutUserInput
    raidExcludes?: RaidExcludeUncheckedCreateNestedManyWithoutUserInput
    raidHistory?: RaidHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoryBlocklistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoryBlocklistInput, UserUncheckedCreateWithoutCategoryBlocklistInput>
  }

  export type UserUpsertWithoutCategoryBlocklistInput = {
    update: XOR<UserUpdateWithoutCategoryBlocklistInput, UserUncheckedUpdateWithoutCategoryBlocklistInput>
    create: XOR<UserCreateWithoutCategoryBlocklistInput, UserUncheckedCreateWithoutCategoryBlocklistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoryBlocklistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoryBlocklistInput, UserUncheckedUpdateWithoutCategoryBlocklistInput>
  }

  export type UserUpdateWithoutCategoryBlocklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUpdateOneWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoryBlocklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    twitchUserId?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: OAuthTokenUncheckedUpdateOneWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    warmList?: WarmListEntryUncheckedUpdateManyWithoutUserNestedInput
    raidExcludes?: RaidExcludeUncheckedUpdateManyWithoutUserNestedInput
    raidHistory?: RaidHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarmListEntryCreateManyUserInput = {
    id?: string
    broadcasterId: string
    broadcasterLogin: string
    broadcasterName: string
    profileImageUrl?: string | null
    notes?: string | null
    priority?: number
    createdAt?: Date | string
  }

  export type RaidExcludeCreateManyUserInput = {
    id?: string
    excludedBroadcasterId: string
    reason?: string | null
  }

  export type RaidHistoryCreateManyUserInput = {
    id?: string
    fromBroadcasterId: string
    toBroadcasterId: string
    toBroadcasterLogin: string
    toBroadcasterName: string
    categoryId?: string | null
    categoryName?: string | null
    startedAt?: Date | string
    executedAt?: Date | string | null
    status?: $Enums.RaidStatus
    viewerCountAtRaid?: number | null
    manualRating?: number | null
    notes?: string | null
  }

  export type CategoryBlocklistCreateManyUserInput = {
    id?: string
    categoryId: string
    categoryName: string
  }

  export type WarmListEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarmListEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarmListEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcasterId?: StringFieldUpdateOperationsInput | string
    broadcasterLogin?: StringFieldUpdateOperationsInput | string
    broadcasterName?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaidExcludeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidExcludeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidExcludeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    excludedBroadcasterId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaidHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterId?: StringFieldUpdateOperationsInput | string
    toBroadcasterLogin?: StringFieldUpdateOperationsInput | string
    toBroadcasterName?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaidStatusFieldUpdateOperationsInput | $Enums.RaidStatus
    viewerCountAtRaid?: NullableIntFieldUpdateOperationsInput | number | null
    manualRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryBlocklistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryBlocklistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryBlocklistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OAuthTokenDefaultArgs instead
     */
    export type OAuthTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OAuthTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarmListEntryDefaultArgs instead
     */
    export type WarmListEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarmListEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RaidExcludeDefaultArgs instead
     */
    export type RaidExcludeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RaidExcludeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RaidHistoryDefaultArgs instead
     */
    export type RaidHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RaidHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryBlocklistDefaultArgs instead
     */
    export type CategoryBlocklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryBlocklistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}