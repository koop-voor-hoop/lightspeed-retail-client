---
title: Query Parameters
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/parameters/
---

# Query Parameters

## Parameters

| Parameter | Default | Options | Description |
| --- | --- | --- | --- |
| after | Not set | encoded string | Since V3Used to paginate forward to subsequent pages. Values come from response payloads and should not be set directly. See Pagination for more information. |
| archived | false | true, false, only | true will return both archived and non-archived results, false will return only non-archived results, and only will return only archived results. |
| before | Not set | encoded string | Since V3Used to paginate backward to previous pages. Values come from response payloads and should not be set directly. See Pagination for more information. |
| count | Not set | 1 | Since V3Specify that the count of all potential results should be returned instead of individual objects. Will respect all search parameters. Cannot be combined with the after, before, limit, or sort pagination parameters. The use of this operator will make the request cost 10 drips (see Rate Limits). |
| limit | 100 | 0 to 100 | Restricts the maximum number of objects returned for each GET (query) request. Maximum limit is 100. |
| load_relations | Not set | [“object”] | See the Relations page for more detailsThe use of this parameter will increase the request cost for each relation loaded. |
| offset | 0 | 0 to inf. | Removed in V3, see Pagination for alternatives.Use this to skip a specified number of objects.The use of this parameter will increase the request cost by 0.005 for each record skipped. |
| orderby | Not set | field name | Removed in V3, use sort insteadSpecify a field to sort the records in the response. When this isn’t set, the records will be ordered by the primary ID (e.g. itemID).The user of this parameter will increase the request cost by 4 if a field which is not specified as sortable for the endpoint is used. |
| orderby_desc | 0 | 0,1 | Removed in V3, use sort insteadUsed to sort results according to the orderby parameter in reverse order. Must be used with the orderby parameter |
| sort | varies | field name | Since V3Determine the sort order of the records in the response. Only certain fields are sortable for each endpoint. Prefix with the - (minus) character to indicate that records should be returned in descending order. If omitted, the default field depends on the endpoint, usually the primary ID field in ascending order. |
| timeStamp | Not set | ‘YYYY-MM-DDTHH:MM:SS-00:00’ | Use in conjunction with Query Operators to search by a specific time. All times are stored in UTC. Use an offset to search using local time. Example: To query in Eastern Standard Time (EST/UTC - 4), enter the time with the adjustment to UTC time (minus 4 hours): ‘YYYY-MM-DDTHH:MM:SS-0400’ |

## Query Operators

The default operator is ‘=’. To specify a different operator from the list below, you embed the operator in the value of the query parameter in the format [parameter name]=[operator],[search value]. The operator and following comma must be URL encoded. An example would be “amount=>=,5”, url encoded this would be: “amount=%3E%3D%2C5”. Here’s a quick URL encoder if you need help encoding things: [http://www.url-encode-decode.com/](http://www.url-encode-decode.com/).

You can use a variety of operators to make your searches more powerful. Here’s a list of supported operators:

| Operator | URL encoded | Description |
| --- | --- | --- |
| = | no encoding necessary | Equals operator |
| > | %3E | Greater-than |
| >= | %3E%3D | Greater-than or equal to |
| < | %3C | Less-than |
| <= | %3C%3D | Less-than or equal to |
| >< | %3E%3C | Between operator. Search values that are within a range. (Example: itemID=><,1,10 would return all itemIDs greater than or equal to 1 and less than or equal to 10) |
| != | !%3D | Not-equal to |
| ~ | ~ | A ‘like’ operator, used for string comparisons. You can use the % (%3D) character as a wild card |
| !~ | !~ | A ‘not like’ operator, used for string comparisons. You can use the % (%3D) character as a wild card |
| IN | N/A | Allows you to search for multiple IDs at once, the IDs list can be commas separated or a JSON encoded array. A maximum of 100 values may be passed in per field. (Example: itemID=IN,[1,2,3]) |
| or | N/A | an ‘or’ operator, used to search for several alternate values. ‘Or’ queries are formatted like this: or=description%3Dfoo|description%3Dbar (this query will search for a description of foo or bar). As stated earlier, all ‘=’ in the ‘or’ query must be percent encoded (%3D) or the query will fail. Similarly, to search for a literal pipe ‘|’ in a value you would percent encode it as %7C. You can use all of the above search operators in your ‘or’ query. For example, or=description%3D~,foo|description%3D~,bar will search for a description starting with foo or bar.The use of this parameter will increase the cost of the request. If all operands reference the same field, no additional costs are applied. If all operands reference fields of the same entity and no more than one range operator is used, the request will cost an additional 1 drip per operand. If operands reference multiple entities or multiple range operators are used, the request will cost an additional 10 drips per entity and an additional 1 drip per additional operand referencing that entity. |

Important: To avoid data values interfering with the operators or special characters not searching properly, use percent-encoding (URL-encoding) throughout the query for sanitizing values and nested operators. See the Query Parameter Syntax section to view how query parameters must be encoded. For values containing other characters and for nested operators (comparisons under an OR clause) there are extra levels of percent escaping that must also be performed.
