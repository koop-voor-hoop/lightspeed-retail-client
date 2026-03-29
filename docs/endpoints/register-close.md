---
title: Register Close
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Register-close/
---

# Register Close

#### Description

A Register represents a single point of sale, a place where money is received. Each register has a separate cash count for each payment type.
This control process Register close request.

#### User Interface

- Admin → General → Edit Shop (Shops → Edit Shop) → Registers tab of Shop view.
- Register → Open Register / Close Register

#### Actions Allowed

| POST/Create | True |
| --- | --- |

#### Scopes Required

| employee:register_close | true |
| --- | --- |

#### RegisterCount Fields

| registerCountID | (integer) The primary key.. /API/V3/Account/{accountID}/RegisterCount/{registerCountID} |
| --- | --- |
| createTime | (datetime) The date/time the register was closed (this is when the count is submitted). |
| openTime | (datetime) The date/time the reigster was opened at. |
| notes | (string) Notes for the count. |
| registerID | (integer) The foreign key for the register this count is for. /API/V3/Account/{accountID}/Register/{registerID} |
| openEmployeeID | (integer) The foreign key for the employee who opened the register. /API/V3/Account/{accountID}/Register/{openEmployeeID} |
| closeEmployeeID | (integer) The foreign key for the the foreign key for the employee who submitted this count, closed the reigster. /API/V3/Account/{accountID}/Register/{closeEmployeeID} |

#### Sortable Fields

- registerCountID

---

### POST Close register

Close a register based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Register/{registerID}/close.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "notes": "Closed Register via the API",
        "openTime": "2021-04-06",
        "closeEmployeeID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Register/{registerID}/close.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterCount": {
    "registerCountID": "4",
    "createTime": "2021-04-06T13:28:59+00:00",
    "openTime": "2021-12-09T15:39:20+00:00",
    "notes": "Closed Register via the API",
    "registerID": "1",
    "openEmployeeID": "1",
    "closeEmployeeID": "1",
    "RegisterCountAmounts": {
      "RegisterCountAmount": [
        {
          "registerCountAmountID": "34",
          "calculated": "2867.01",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "1"
        },
        {
          "registerCountAmountID": "35",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "2"
        },
        {
          "registerCountAmountID": "36",
          "calculated": "1130",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "3"
        },
        {
          "registerCountAmountID": "37",
          "calculated": "-13000",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "4"
        },
        {
          "registerCountAmountID": "38",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "5"
        },
        {
          "registerCountAmountID": "39",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "6"
        },
        {
          "registerCountAmountID": "40",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "7"
        },
        {
          "registerCountAmountID": "41",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "8"
        },
        {
          "registerCountAmountID": "42",
          "calculated": "6002",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "9"
        },
        {
          "registerCountAmountID": "43",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "10"
        },
        {
          "registerCountAmountID": "44",
          "calculated": "0",
          "actual": "0",
          "registerCountID": "4",
          "paymentTypeID": "11"
        }
      ]
    }
  }
}
```

#### Attributes

| openTime | (datetime) The date/time the reigster was opened at. |
| --- | --- |
| notes | (string) Notes for the count. |
| registerID | (integer) The foreign key for the register this count is for. Required Field |
| openEmployeeID | (integer) The foreign key for the employee who opened the register. |
