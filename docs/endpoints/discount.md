---
title: Discount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Discount/
---

# Discount

#### Description

Percent or dollar amount discounts. Percent discounts can be applied to SaleLines, Sales, Customers, and CustomerTypes. Dollar amount discounts can be applied to SaleLines.

#### User Interface

- Admin → Sales → Discounts & Price Rules.
- Customers → Customers → edit Customer → Discount field.
- Customers → Customer Types → edit Customer Type → Discount field.
- Register → New Sale → Discount in totals section, and within edit line → Discount field.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Discount Fields

| discountID | (integer) The unique numeric identifier for the discount. |
| --- | --- |
| name | (string) The description/name of the discount. |
| discountAmount | (float) The dollar amount of the discount. Discounts can be either dollar amounts or percentages (but not both). Must be > 0.00. |
| discountPercent | (float) The percentage discount amount. Discounts can be either dollar amounts or percentages (but not both). Must be <=1.00 (100%). Sales can only have percentage discounts. Sale lines can have either. |
| requireCustomer | (boolean) Whether this discount requires a customer to be attached to the sale before it can be applied. |
| archived | (boolean) Whether this discount is archived. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- discountID
- timeStamp

---

### GET All discounts

Retrieve a list of all discounts in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Discount.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Discount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Discount": [
    {
      "discountID": "1",
      "name": "Whole Sale",
      "discountAmount": "0",
      "discountPercent": "0.5",
      "requireCustomer": "false",
      "archived": "false",
      "timeStamp": "2021-06-13T14:22:24+00:00"
    },
    {
      "discountID": "2",
      "name": "Dollar Discount",
      "discountAmount": "100",
      "discountPercent": "0",
      "requireCustomer": "false",
      "archived": "false",
      "timeStamp": "2021-06-13T14:24:54+00:00"
    },
    {
      "discountID": "3",
      "name": "5 Percent",
      "discountAmount": "0",
      "discountPercent": "0.05",
      "requireCustomer": "false",
      "archived": "false",
      "timeStamp": "2021-12-01T14:08:49+00:00"
    }
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Retrieve a Discount

Returns a single discount by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Discount/{discountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Discount/{discountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Discount": {
    "discountID": "3",
    "name": "5 Percent",
    "discountAmount": "0",
    "discountPercent": "0.05",
    "requireCustomer": "false",
    "archived": "false",
    "timeStamp": "2021-12-01T14:08:49+00:00"
  }
}
```

#### Attributes

| discountID | (integer) The unique numeric identifier for the discount. Required Field |
| --- | --- |

---

### POST Create a discount

Create a new discount based on the given parameters.

`Discount cannot have discountAmount and discountPercent set at the same time.`

> Definition

```
POST /API/V3/Account/{accountID}/Discount.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "10 Percent",
    "discountAmount": "50"
  }' "https://api.lightspeedapp.comPOST /API/V3/Account/{accountID}/Discount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Discount": {
    "discountID": "5",
    "name": "10 Percent",
    "discountAmount": "50",
    "discountPercent": "0",
    "requireCustomer": "false",
    "archived": "false",
    "timeStamp": "2021-03-22T20:04:15+00:00"
  }
}
```

#### Attributes

| name | (string) The description/name of the discount. |
| --- | --- |
| discountAmount | (float) The dollar amount of the discount. Discounts can be either dollar amounts or percentages (but not both). Must be > 0.00. |
| discountPercent | (float) The percentage discount amount. Discounts can be either dollar amounts or percentages (but not both). Must be <= 1.00 (100%). Sales can only have percentage discounts. Sale lines can have either. |
| requireCustomer | (boolean) Whether this discount requires a customer to be attached to the sale before it can be applied. |

---

### PUT Update a Discount

Update an existing discount based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Discount/{discountID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "15 Percent",
    "discountAmount": "0",
    "discountPercent": "0.15",
    "requireCustomer": false
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Discount/{discountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Discount": {
    "discountID": "5",
    "name": "15 Percent",
    "discountAmount": "0",
    "discountPercent": "0.15",
    "requireCustomer": "false",
    "archived": "false",
    "timeStamp": "2021-03-22T20:08:14+00:00"
  }
}
```

#### Attributes

| discountID | (integer) The unique numeric identifier for the discount. Required Field |
| --- | --- |
| name | (string) The description/name of the discount. |
| discountAmount | (float) The dollar amount of the discount. Discounts can be either dollar amounts or percentages (but not both). Must be > 0.00. |
| discountPercent | (float) The percentage discount amount. Discounts can be either dollar amounts or percentages (but not both). Must be <=1.00 (100%). Sales can only have percentage discounts. Sale lines can have either. |
| requireCustomer | (boolean) Whether this discount requires a customer to be attached to the sale before it can be applied. |

---

### DELETE Archive a discount

Archive an existing discount by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Discount/{discountID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Discount/{discountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Discount": {
    "discountID": "5",
    "name": "15 Percent",
    "discountAmount": "0",
    "discountPercent": "0",
    "requireCustomer": "false",
    "archived": "true",
    "timeStamp": "2021-03-22T20:08:14+00:00"
  }
}
```

#### Attributes

| discountID | (integer) The unique numeric identifier for the discount. Required Field |
| --- | --- |

---
