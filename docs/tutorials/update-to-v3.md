---
title: Update to V3
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/v2v3migration/
---

# V2 to V3 API Migration

## Introduction

A new API version is available for Lightspeed Retail R-Series. We recommend that you migrate to V3 as soon as possible, since it will improve the efficiency and speed with which you are able to retrieve large numbers of records.

## Updating Request URLs

For `POST`, `PUT` and `DELETE` requests, the change means simply adding `V3` to the request URL.

#### Creating a new item in V2

```code
POST https://api.lightspeedapp.com/API/Account/{accountID}/Item
```

#### Creating a new item in V3

```code
POST https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item
```

---

Similarly, a `GET` request for a single record only needs `V3` added to the URL.

#### Requesting a sale by ID in V2

```code
GET https://api.lightspeedapp.com/API/Account/{accountID}/Sale/{SaleID}
```

#### Requesting a sale by ID in V3

```code
GET https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{SaleID}
```

---

The entities themselves (i.e. the attributes in the records) will not change, and no breaking changes have been introduced.

For example, `load relations` can still be used in the same manner.

#### Loading Relations in V3

```code
GET https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/{ItemID}?load_relations=["ItemShops"]
```

## V2 Pagination

The biggest change between the V2 and V3 APIs is the pagination method. The maximum number of records that can be returned in a single request is 100. If the request returns more than 100 results, a pagination mechanism is required.

The V2 API provides `count`, `limit`, and `offset` attributes and requires the `limit` and `offset` parameters to be used after the initial request in order to query subsequent pages.

#### V2 Pagination - Initial Request

```code
GET https://api.lightspeedapp.com/API/Account/{accountID}/Sale.json
```

#### V2 Pagination - First 100 Results

```code
{
    "@attributes": {
        "count": "764",
        "offset": "0",
        "limit": "100"
    },
    "Sale": [
        {
            "saleID": "1",
            "timeStamp": "2018-12-10T20:14:55+00:00",
            "discountPercent": "0",
            "completed": "false",
            "archived": "false",
```

---

In V2, if you need to make an initial sync of all sales within an account, you would start with an offset of 0, then increment by 100 until you reach the end of the results.

#### V2 Pagination Request for records 101-200

```code
GET https://api.lightspeedapp.com/API/Account/{accountID}/Sale.json?limit=100&offset=100
```

#### V2 Pagination Request for records 201-300

```code
GET https://api.lightspeedapp.com/API/Account/{accountID}/Sale.json?limit=100&offset=200
```

And so on…

---

This style of pagination can become very slow for large data sets. For example, if you need to request `offset=100000`, all previous records up to that page must first be read from the database before returning the results beginning at record 100000. As the data being read becomes larger, queries run slower.

---

## V3 Pagination

The V3 API introduces cursor based pagination, which serves up the next page without having to read previous results.

#### V3 Initial Request

```code
GET https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale.json
```

#### Results

```code
{
    "@attributes": {
        "next": "https://api.lightspeedapp.com/API/V3/Account/182255/Sale.json?sort=saleID&limit=100&after=WzEwNV0%3D",
        "previous": ""
    },
    "Sale": [
        {
            "saleID": "1",
            "timeStamp": "2018-12-10T20:14:55+00:00",
            "discountPercent": "0",
            "completed": "false",
            "archived": "false",
            "voided": "false",
```

---

The new `next` attribute shows the URL needed for the next page. You can use the entire URL as is, or parse the value in the `after` parameter and append it to your request URL for the next request.

#### Subsequent Request

```code
GET https://api.lightspeedapp.com/API/V3/Account/182255/Sale.json?sort=saleID&limit=100&after=WzEwNV0%3D
```

#### Results

```code
{
    "@attributes": {
        "next": "https://api.lightspeedapp.com/API/V3/Account/182255/Sale.json?sort=saleID&limit=100&after=WzIwNl0%3D",
        "previous": "https://api.lightspeedapp.com/API/V3/Account/182255/Sale.json?sort=saleID&limit=100&before=WzEwNl0%3D"
    },
    "Sale": [
        {
            "saleID": "106",
            "timeStamp": "2019-02-15T19:27:52+00:00",
            "discountPercent": "0",
            "completed": "false",
            "archived": "false",
            "voided": "false",
```

This will return the second page of results, now with a value for `previous` to retrieve the previous page of results. Notice the `before` parameter in the `previous` attribute’s URL. This value is needed to request the previous page.

---

This type of pagination can be managed by a loop that continues fetching records until the `next` attribute returns an empty string.

More details on pagination can be found in the [Pagination](https://developers.lightspeedhq.com/retail/introduction/pagination/) article.

---

## Count

Unlike in V2, the `count` attribute is absent from the response. To query the number of results that match the request, `count=1` is appended to the request URL as a parameter.

#### Example

```code
GET https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json?count=1
```

#### Result

```code
{
    "@attributes": {
        "count": "764"
    }
}
```

In this example, there are 764 records that match the request.

---

## V2 Sorting

In V2, if you want to retrieve all items that were updated after a specific date and order them from most recent to oldest, you use the `orderby` parameter for the `timeStamp` field. You would also specify that you wanted the results in descending order by using the `orderby_desc` parameter.

#### V2 Sort Example

```code
GET https://api.lightspeedapp.com/API/Account/{AccountID}/Item.json?timeStamp=>=,2021-10-05T14:18:46+00:00&orderby=timeStamp&orderby_desc=1
```

#### Result

```code
{
    "@attributes": {
        "count": "164",
        "offset": "0",
        "limit": "100"
    },
    "Item": [
        {
            "itemID": "5",
            "systemSku": "210000000005",
            "defaultCost": "749.99",
            "avgCost": "749.99",
            "discountable": "true",
            "tax": "true",
            "archived": "false",
            "itemType": "serialized",
            "serialized": "true",
            "description": "Yamaha MX Synth Black 88-key",
            "modelYear": "0",
            "upc": "",
            "ean": "",
            "customSku": "",
            "manufacturerSku": "09608",
            "createTime": "2018-12-12T19:51:35+00:00",
            "timeStamp": "2023-04-26T14:33:46+00:00",
            "publishToEcom": "true",
            "categoryID": "2",
            "taxClassID": "1",
            "departmentID": "0",
```

---

## V3 Sorting

The `orderby` and `orderby_desc` parameters are no longer valid in V3. They have been replaced by `sort`. If you want to retrieve all items that were updated after a specific date and order them from most recent to oldest, you would include the `timeStamp` parameter in the `sort` field. You would also use a minus symbol (`-`) before the value of the parameter to specify that you want the results returned in descending order.

#### V3 Sort Example

```code
GET https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item.json?timeStamp=>=,2021-10-05T14:18:46+00:00&sort=-timeStamp
```

#### Result

```code
{
    "@attributes": {
        "next": "https://api.lightspeedapp.com/API/V3/Account/182255/Item.json?sort=-timeStamp&timeStamp=%3E%3D%2C2021-10-05T14%3A18%3A46%2B00%3A00&limit=100&after=WyIyMDIxLTExLTAxVDE0OjU1OjUxKzAwOjAwIiw1NDRd",
        "previous": ""
    },
    "Item": [
        {
            "itemID": "5",
            "systemSku": "210000000005",
            "defaultCost": "749.99",
            "avgCost": "749.99",
            "discountable": "true",
            "tax": "true",
            "archived": "false",
            "itemType": "serialized",
            "serialized": "true",
            "description": "Yamaha MX Synth Black 88-key",
            "modelYear": "0",
            "upc": "",
            "ean": "",
            "customSku": "",
            "manufacturerSku": "09608",
            "createTime": "2018-12-12T19:51:35+00:00",
            "timeStamp": "2023-04-26T14:33:46+00:00",
```

Most entities are sortable by the primary key field and the `timeStamp` field, if appropriate. Some endpoints offer additional fields. See the individual endpoint documentation for more details.
