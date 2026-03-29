---
title: SaleVoid
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/SaleVoid/
---

# SaleVoid

#### Description

Records that a sale has been voided along with a note for the void reason.

#### User Interface

- Reports → Point of Sale → Totals → Sale ID details → Void tab of Transaction/Sale view.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:admin_void_sale | true |
| --- | --- |

#### SaleVoid Fields

| saleVoidID | (integer) The unique numerical ID for the sale void. /API/V3/Account/{accountID}/SaleVoid/{saleVoidID} |
| --- | --- |
| createTime | (datetime) The date/time the void happened at. |
| reason | (string) A note about the void. |
| saleID | (integer) The foreign ID for the sale that was voided. /API/V3/Account/{accountID}/Sale/{saleID} |
| employeeID | (integer) The foreign ID for the employee that did the void. /API/V3/Account/{accountID}/Employee/{employeeID} |
| shopID | (integer) The foreign ID for the shop where the sale was voided. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- saleVoidID
- saleID

---

### GET All sales void

Retrieve a list of all sales void in the account

> Definition

```
GET /API/V3/Account/{accountID}/SaleVoid.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleVoid.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "SaleVoid": [
    {
      "saleVoidID": "1",
      "createTime": "2021-06-07T13:23:55+00:00",
      "reason": "Lightspeed Retail System Administrator Void: ",
      "saleID": "22",
      "employeeID": "1",
      "shopID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single sale void

Retrieve a single sale void by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/SaleVoid/{saleVoidID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleVoid/{saleVoidID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleVoid": {
    "saleVoidID": "2",
    "createTime": "2021-09-02T13:20:35+00:00",
    "reason": "Lightspeed Retail System Administrator Void: ",
    "saleID": "69",
    "employeeID": "1",
    "shopID": "1"
  }
}
```

#### Attributes

| saleVoidID | (integer) The unique numerical ID for the sale void. Required Field |
| --- | --- |
