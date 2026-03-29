---
title: Pagination
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/pagination/
---

# Pagination

## Page Limits

The Lightspeed API limits the number of returned objects to a maximum of 100. The number of objects to be returned by a request can be lowered by specifying the `limit` query parameter.

## Paging

> Sample Request (First Page)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json"
```

> Sample Response

```json
{
    "@attributes": {
        "next": "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?sort=itemID&limit=100&after=WzEwMF0%3D",
        "previous": ""
    },
    "Item": [
        "..."
    ]
}
```

> Sample Request (Last Page)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?
sort=itemID&limit=100&after=WzIwMF0%3D"
```

> Sample Response

```json
{
    "@attributes": {
        "next": "",
        "previous": "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?sort=itemID&limit=100&before=WzEwMV0%3D"
    },
    "Item": [
        "..."
    ]
}
```

When querying large data sets it may be necessary to send multiple requests to retrieve all of the data.

The response payload of every GET (query) endpoint includes two metadata attributes, `next` and `previous`, which contain the complete URLs to fetch the adjacent pages. The next URL will proceed forward in the data set, while the previous URL will go backward to the previously requested page. To paginate in a given direction, simply send another request to the provided URL.

If no adjacent page is available in a given direction, the next and/or previous keys will contain an empty string. On the first page of results, the previous key will always be empty. On the last page of results, the next key will be empty.

In addition to all of the query parameters of the initial request, the next/previous URLs always contain the `after`/`before` query parameters, respectively. These parameters contain encoded data necessary to resume querying from the position of the previous query. Sorting on different fields may result in encoded strings of different lengths. We strongly discourage crafting the values of these parameters yourself, or copying the values to a different request, as this may cause unexpected results. Always use the URLs as provided in the next/previous keys.

If omitted from the initial request, the default values of the `limit` and `sort` parameters will be appended to the subsequent URLs in order to ensure consistency of behavior.

## Sorting

By default, most endpoints will return records ordered by the primary ID of the entity in question in ascending order.

Each endpoint may offer one or more fields which can be used for sorting with the `sort` query parameter. This usually includes the primary ID and `timeStamp` fields. Some endpoints may allow other fields as well. Attempting to sort on an unsupported field will result in an error being returned. This error will list allowed sort parameters for the endpoint.

Descending order can be used by prepending a `-` (minus) character to the beginning of the field name.

> Sample Request (default - primary ID ascending)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json"
```

> Sample Request (primary ID descending)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?sort=-itemID"
```

> Sample Request (timeStamp ascending)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?sort=timeStamp"
```

> Sample Request (timeStamp descending)

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?sort=-timeStamp"
```

## Counting

It is possible to retrieve the total number of available results by sending a separate request with the `count=1` query parameter. This parameter will cause no records to be returned, but the response metadata will contain a `count` attribute with an integer value of the total number of records matching the search criteria across all pages.

Combining the `count=1` query param with any pagination or sorting query parameters will result in an error being returned. The list of incompatible parameters includes: `limit`, `next`, `previous`, `sort`.

Using the `count=1` query param will result in the request costing the same number of drips as a write operation (10). It is recommended to retrieve the counts sparingly, and cache the value as appropriate for your application. See [Rate Limiting](https://developers.lightspeedhq.com/retail/introduction/ratelimits) for more information.

## V2 Pagination

> Support for V2 of the API is scheduled to be discontinued May 1st, 2023. We strongly recommend upgrading your integrations before then.

Older versions of the API used the `offset` parameter to specify how many records should be skipped. For example, `?limit=100` would return the first page, `?limit=100&offset=100` would return the second page, `?limit=100&offset=200` would return the third page, and so on.

Offset pagination does not scale well to larger datasets compared to the cursor-based approach introduced in version 3 with the `after` and `before` query parameters, resulting in significantly slower response times, especially on larger data sets. As such, we strongly recommend using the latest version of the API instead.
