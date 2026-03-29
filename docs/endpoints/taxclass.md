---
title: TaxClass
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/TaxClass/
---

# TaxClass

#### Description

Organizes items and is used to indicate items that have special tax rates. Use the [TaxCategoryClass](https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/) endpoint to set those rates.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### TaxClass Fields

| taxClassID | (integer) The unique numerical ID for the tax class. |
| --- | --- |
| name | (string) The name of the TaxClass. |
| SaleLines | (string) Sale lines that have this class. /API/V3/Account/{accountID}/SaleLine |
| Items | (string) Items that have this class. /API/V3/Account/{accountID}/Item |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- taxClassID
- timeStamp

---

### GET All tax classes

Retrieve a list of all tax classes in the account

> Definition

```
GET /API/V3/Account/{accountID}/TaxClass.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxClass.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "TaxClass": [
    {
      "taxClassID": "1",
      "name": "Item",
      "timeStamp": "2021-02-29T19:17:59+00:00"
    },
    {
      "taxClassID": "2",
      "name": "Labor",
      "timeStamp": "2021-06-03T15:12:02+00:00"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single tax class

Retrieve a single tax class in the account

> Definition

```
GET /API/V3/Account/{accountID}/TaxClass/{taxClassID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxClass/{taxClassID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxClass": {
    "taxClassID": "2",
    "name": "Labor",
    "timeStamp": "2021-06-03T15:12:02+00:00"
  }
}
```

#### Attributes

| taxClassID | (integer) The unique numerical ID for the tax class. Required Field |
| --- | --- |

---

### POST Create a tax class

Create a tax class based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/TaxClass.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Out of State Shipment"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxClass.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxClass": {
    "taxClassID": "3",
    "name": "Out of State Shipment",
    "timeStamp": "2021-04-21T19:06:30+00:00"
  }
}
```

#### Attributes

| name | (string) The name of the TaxClass. Required Field |
| --- | --- |

---

### PUT Update a tax class

Update an existing tax class based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/TaxClass/{taxClassID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Shipment"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxClass/{taxClassID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxClass": {
    "taxClassID": "3",
    "name": "Shipment",
    "timeStamp": "2021-04-21T19:11:20+00:00"
  }
}
```

#### Attributes

| name | (string) The name of the TaxClass. |
| --- | --- |

---

### DELETE Delete a tax class

Delete a tax class by its ID. You can’t delete a tax class if it’s used on any items, matrices or transactions, or if it has rates set in any tax category.

> Definition

```
DELETE /API/V3/Account/{accountID}/TaxClass/{taxClassID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxClass/{taxClassID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxClass": {
    "taxClassID": "3",
    "name": "Shipment",
    "timeStamp": "2021-04-21T19:11:20+00:00"
  }
}
```

#### Attributes

| taxClassID | (integer) The unique numerical ID for the tax class. Required Field |
| --- | --- |
