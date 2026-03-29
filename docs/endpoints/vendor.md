---
title: Vendor
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Vendor/
---

# Vendor

#### Description

Suppliers, contains contact and account information. Orders have a Vendor that is the entity that will fulfill the order.

#### User Interface

- Admin → Inventory → Vendors
- Inventory → Items → edit Item → Default Vendor field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Additional Relations

- Contact

#### Vendor Fields

| vendorID | (integer) The unique numerical ID for the vendor. |
| --- | --- |
| name | (string) The name of the Vendor. |
| archived | (boolean) Should the Vendor be archived or not |
| accountNumber | (string) Account number with the vendor |
| priceLevel | (string) Name of the price level the business is on with the vendor. Usually 1,2,3 etc from highest price to lowest price. |
| updatePrice | (boolean) Should the price be updated from the catalog entry MSRP when the item is added to an Order. |
| updateCost | (boolean) Should the cost be updated from the catalog entry Cost when the item is added to an Order. |
| updateDescription | (boolean) Should the description be updated from the catalog entry Description when the item is added to an Order. |
| shareSellThrough | (boolean) Should the vendor be able to share sell-through data. |
| timeStamp | (datetime) Date/time the record was last modified. |
| b2bSellerUID | (string) The unique identifier of the vendor in NuORDER. |
| Contact | (reference) The contact information for the Vendor |
| Reps | (collection) Contains the name of the representative for vendor contacts. |
| purchasingCurrency | (object) The purchasing currency for the vendor, containing: currency code, symbol, and rate. |

#### Sortable Fields

- vendorID
- timeStamp
- name

---

### GET All vendors

Retrieve a list of all vendor in the account

> Definition

```
GET /API/V3/Account/{accountID}/Vendor.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Vendor.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Vendor": [
    {
      "vendorID": "1",
      "name": "Alliance Game Distributors",
      "archived": "false",
      "accountNumber": "",
      "priceLevel": "",
      "updatePrice": "false",
      "updateCost": "false",
      "updateDescription": "false",
      "shareSellThrough": "false",
      "timeStamp": "2021-02-29T19:20:48+00:00",
      "purchasingCurrency": {
        "code": "CAD",
        "symbol": "$",
        "rate": "2"
      },
      "b2bSellerUID": "123abc"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single vendor

Retrieve a single vendor by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Vendor/{vendorID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Vendor/{vendorID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Vendor": {
    "vendorID": "50",
    "name": "White Mountain Puzzle",
    "archived": "false",
    "accountNumber": "",
    "priceLevel": "",
    "updatePrice": "false",
    "updateCost": "false",
    "updateDescription": "false",
    "shareSellThrough": "false",
    "timeStamp": "2021-02-29T19:20:50+00:00",
    "purchasingCurrency": {
      "code": "CAD",
      "symbol": "$",
      "rate": "2"
    },
    "b2bSellerUID": "123abc"
  }
}
```

#### Attributes

| vendorID | (integer) The unique numerical ID for the vendor. Required Field |
| --- | --- |

---

### POST Create a vendor

Create a vendor based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Vendor.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Crunchy foods",
      "accountNumber": "9871234",
      "priceLevel": "",
      "updatePrice": "true",
      "updateCost": "true",
      "updateDescription": "true",
      "shareSellThrough": "false",
      "b2bSellerUID": "123abc"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Vendor.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Vendor": {
    "vendorID": "94",
    "name": "Crunchy foods",
    "archived": "false",
    "accountNumber": "9871234",
    "priceLevel": "",
    "updatePrice": "true",
    "updateCost": "true",
    "updateDescription": "true",
    "shareSellThrough": "false",
    "timeStamp": "2021-04-23T01:48:39+00:00",
    "b2bSellerUID": "123abc"
  }
}
```

#### Attributes

| name | (string) The name of the Vendor. |
| --- | --- |
| accountNumber | (string) Account number with the vendor |
| priceLevel | (string) Name of the price level the business is on with the vendor. Usually 1,2,3 etc from highest price to lowest price. |
| updatePrice | (boolean) Should the price be updated from the catalog entry MSRP when the item is added to an Order. |
| updateCost | (boolean) Should the cost be updated from the catalog entry Cost when the item is added to an Order. |
| updateDescription | (boolean) Should the description be updated from the catalog entry Description when the item is added to an Order. |
| shareSellThrough | (boolean) Should the vendor be able to share sell-through data. |
| b2bSellerUID | (string) The unique identifier of the vendor in NuORDER. |
| Contact | (reference) The contact information for the Vendor |
| Reps | (collection) Contains the name of the representative for vendor contacts. |

---

### PUT Update a vendor

Update an existing vendor based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Vendor/{vendorID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Crunchy Foods",
      "accountNumber": "CFINC12",
      "priceLevel": "",
      "updatePrice": "false",
      "updateCost": "false",
      "updateDescription": "false",
      "shareSellThrough": "false",
      "b2bSellerUID": "123abc",
      "Reps": "John Doe"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Vendor/{vendorID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Vendor": {
    "vendorID": "94",
    "name": "Crunchy Foods",
    "archived": "false",
    "accountNumber": "CFINC12",
    "priceLevel": "",
    "updatePrice": "false",
    "updateCost": "false",
    "updateDescription": "false",
    "shareSellThrough": "false",
    "timeStamp": "2021-04-23T01:48:39+00:00",
    "b2bSellerUID": "123abc"
  }
}
```

#### Attributes

| name | (string) The name of the Vendor. |
| --- | --- |
| accountNumber | (string) Account number with the vendor |
| priceLevel | (string) Name of the price level the business is on with the vendor. Usually 1,2,3 etc from highest price to lowest price. |
| updatePrice | (boolean) Should the price be updated from the catalog entry MSRP when the item is added to an Order. |
| updateCost | (boolean) Should the cost be updated from the catalog entry Cost when the item is added to an Order. |
| updateDescription | (boolean) Should the description be updated from the catalog entry Description when the item is added to an Order. |
| shareSellThrough | (boolean) Should the vendor be able to share sell-through data. |
| b2bSellerUID | (string) The unique identifier of the vendor in NuORDER. |
| Contact | (reference) The contact information for the Vendor |
| Reps | (collection) Contains the name of the representative for vendor contacts. |

---

### DELETE Delete a vendor

Archive a vendor by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Vendor/{vendorID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Vendor/{vendorID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Vendor": {
    "vendorID": "94",
    "name": "Crunchy Foods",
    "archived": "true",
    "accountNumber": "CFINC12",
    "priceLevel": "",
    "updatePrice": "false",
    "updateCost": "false",
    "updateDescription": "false",
    "shareSellThrough": "false",
    "timeStamp": "2021-04-23T01:58:04+00:00",
    "b2bSellerUID": "123abc"
  }
}
```

#### Attributes

| vendorID | (integer) The unique numerical ID for the vendor. Required Field |
| --- | --- |
