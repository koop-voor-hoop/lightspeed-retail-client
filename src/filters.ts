const FILTER_ESCAPES: Record<string, string> = {
  '%': '%25',
  '|': '%7C',
  ',': '%2C',
  '=': '%3D',
};

/**
 * Escapes characters the Lightspeed query parser treats as operators inside filter values.
 * The API decodes the query string once, then interprets `%` (wildcard), `,` (operator separator),
 * `|` (or-separator), and `=` (or-clause field separator) in the decoded value, so literal
 * occurrences need one nested escape level. Transport-level URL encoding is applied separately
 * by the URL builder. `_` (single-character wildcard) is intentionally not escaped — it cannot
 * be percent-escaped and at worst causes extra matches, never missing ones.
 */
export const escapeFilterValue = (value: string): string =>
  value.replace(/[%|,=]/g, (char) => FILTER_ESCAPES[char] ?? char);

const escapeIfString = (value: string | number): string | number =>
  typeof value === 'string' ? escapeFilterValue(value) : value;

/** Substring (LIKE) match, case-insensitive on the API side: `~,%value%`. */
export const like = (value: string): string => `~,%${escapeFilterValue(value)}%`;

/** Negated substring (NOT LIKE) match: `!~,%value%`. */
export const notLike = (value: string): string => `!~,%${escapeFilterValue(value)}%`;

/** Not-equal comparison: `!=,value`. */
export const notEqual = (value: string | number): string => `!=,${escapeIfString(value)}`;

/** Multi-value match: `IN,[a,b,c]`. The API accepts at most 100 values per field. */
export const inList = (values: ReadonlyArray<string | number>): string => {
  if (values.length === 0) throw new Error('inList requires at least one value');
  if (values.length > 100) throw new Error('Lightspeed IN accepts at most 100 values');
  return `IN,[${values.map(escapeIfString).join(',')}]`;
};

export type OrClause = readonly [field: string, expression: string];

/**
 * Builds the `or` query parameter value: `field=expression|field=expression`.
 * Expressions come from the filter helpers (`like`, `notEqual`, ...) or are raw values
 * for exact matches. Each operand beyond the first increases the request cost.
 */
export const or = (...clauses: OrClause[]): string => {
  if (clauses.length === 0) throw new Error('or requires at least one clause');
  return clauses.map(([field, expression]) => `${field}=${expression}`).join('|');
};
