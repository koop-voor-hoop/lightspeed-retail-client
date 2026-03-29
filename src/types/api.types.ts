/** Access token object containing the bearer token string for authenticating API requests. */
export type AccessToken = { accessToken: string };

/** Unique integer identifier that represents a specific business account in the Lightspeed system. */
export type AccountId = { accountID: string | number };

type PaginationBaseParams<SortField extends string> = {
  /** Used to paginate forward to subsequent pages. Values come from response payloads and should not be set directly. */
  after?: string;
  /** Used to paginate backward to previous pages. Values come from response payloads and should not be set directly. */
  before?: string;
  /** true will return both archived and non-archived results, false will return only non-archived results, and only will return only archived results. */
  archived?: 'true' | 'false' | 'only';
  /** Restricts the maximum number of objects returned for each GET (query) request. Maximum limit is 100. */
  limit?: number;
  /**
   * Determine the sort order of the records in the response. Only certain fields are sortable for each endpoint.
   * Prefix with the - (minus) character to indicate that records should be returned in descending order.
   * If omitted, the default field depends on the endpoint, usually the primary ID field in ascending order.
   */
  sort?: SortField | `-${SortField}`;
  /**
   * Use in conjunction with Query Operators to search by a specific time. All times are stored in UTC.
   * Use an offset to search using local time. Example: To query in Eastern Standard Time (EST/UTC - 4),
   * enter the time with the adjustment to UTC time (minus 4 hours): ‘YYYY-MM-DDTHH:MM:SS-0400’
   */
  timeStamp?: string;
  /**
   * Specify that the count of all potential results should be returned instead of individual objects.
   * Will respect all search parameters. Cannot be combined with the after, before, limit, or sort pagination parameters.
   * The use of this operator will make the request cost 10 drips.
   */
  count?: never;
};

export type PaginationParams<
  Relation extends RelationKey | never = never,
  SortField extends string = string,
> = PaginationBaseParams<SortField> &
  ([Relation] extends [never]
    ? {
        /** Endpoints without supported relations cannot request related records. */
        load_relations?: never;
      }
    : {
        /** Used to request related records be returned as sub-records. The use of this parameter will increase the request cost for each relation loaded. */
        load_relations?: Relations<Relation>;
      });

export type CountParams = {
  /** Used to paginate forward to subsequent pages. Values come from response payloads and should not be set directly. */
  after?: never;
  /** Used to paginate backward to previous pages. Values come from response payloads and should not be set directly. */
  before?: never;
  /** true will return both archived and non-archived results, false will return only non-archived results, and only will return only archived results. */
  archived?: 'true' | 'false' | 'only';
  /** Restricts the maximum number of objects returned for each GET (query) request. Maximum limit is 100. */
  limit?: never;
  /**
   * Determine the sort order of the records in the response. Only certain fields are sortable for each endpoint.
   * Prefix with the - (minus) character to indicate that records should be returned in descending order.
   * If omitted, the default field depends on the endpoint, usually the primary ID field in ascending order.
   */
  sort?: never;
  /**
   * Use in conjunction with Query Operators to search by a specific time. All times are stored in UTC.
   * Use an offset to search using local time. Example: To query in Eastern Standard Time (EST/UTC - 4),
   * enter the time with the adjustment to UTC time (minus 4 hours): ‘YYYY-MM-DDTHH:MM:SS-0400’
   */
  timeStamp?: string;
  /**
   * Specify that the count of all potential results should be returned instead of individual objects.
   * Will respect all search parameters. Cannot be combined with the after, before, limit, or sort pagination parameters.
   * The use of this operator will make the request cost 10 drips.
   */
  count: '1';
};

/** Defines the valid query parameters that can be used for endpoints that support pagination and counting. */
export type QueryParams<Relation extends RelationKey | never = never, SortField extends string = string> =
  | PaginationParams<Relation, SortField>
  | CountParams;

export type RawQueryParams = Record<
  string,
  string | number | boolean | (string | number | boolean)[] | undefined
>;

export type RequestJsonInit = RequestInit & {
  /** Bearer token for Lightspeed API requests. Automatically adds Authorization and Accept headers. */
  accessToken?: string;
  /** Query string params appended to relative API paths. */
  params?: RawQueryParams;
  /** JSON payload to serialize and send as request body. Sets Content-Type to application/json. */
  payload?: unknown;
};

/**
 * Defines the valid relation keys that can be used in the `load_relations` query parameter for endpoints that support loading related records.
 */
export type RelationKey =
  | 'Contact'
  | 'Category'
  | 'TaxClass'
  | 'ItemAttributes'
  | 'ItemAttributes.ItemAttributeSet'
  | 'Manufacturer'
  | 'Note'
  | 'Images'
  | 'ItemShops'
  | 'ItemVendorNums'
  | 'ItemComponents'
  | 'ItemECommerce'
  | 'TagRelations'
  | 'TagRelations.Tag'
  | 'CustomFieldValues'
  | 'CustomFieldValues.value'
  | 'ItemPrices';

/**
 * Defines the type for the `load_relations` query parameter, which can be set to 'all' to load all related records,
 * an array of specific relation keys to load only those relations, or left undefined to not load any relations.
 */
export type Relations<T extends RelationKey> = 'all' | T[] | undefined;
