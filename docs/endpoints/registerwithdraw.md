---
title: RegisterWithdraw
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/RegisterWithdraw/
---

# RegisterWithdraw

#### Description

Represents a withdraw or addition of cash (of a specific payment type) to a Register. The opening count for a register is a positive RegisterWithdraw. This will be included in the calculated amounts for the register when the RegisterCount is generated.

#### User Interface

- Register → Payout / Drop or Add Amount

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |

#### Scopes Required

| employee:reports | true |
| --- | --- |
| employee:register | true |
| employee:register_withdraw | true |

#### Additional Relations

- PaymentType

#### RegisterWithdraw Fields

| registerWithdrawID | (integer) The unique numerical ID for the register withdraw. /API/V3/Account/{accountID}/RegisterWithdraw/{registerWithdrawID} |
| --- | --- |
| amount | (float) The amount the add/payout is for. Negative amounts are for payout/withdrawals. Positive for adds/opening counts. |
| createTime | (datetime) The date/time this add/payout was made at. |
| notes | (string) A note for this payout. |
| employeeID | (integer) The foreign key for the employee that made the add/payout. /API/V3/Account/{accountID}/Employee/{employeeID} |
| paymentTypeID | (integer) The foreign key for the payment type for the add/payout. /API/V3/Account/{accountID}/PaymentType/{paymentTypeID} |
| registerID | (integer) The foreign key for the register the add/payout was made at. /API/V3/Account/{accountID}/Register/{registerID} |
| PaymentType | (object) The payment type for the add/payout. /API/V3/Account/{accountID}/PaymentType |

#### Sortable Fields

- registerWithdrawID

#### See Also

- [PaymentType](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/#paymenttype-fields)

---

### GET All registers withdraws

Retrieve a list of all registers withdraws

> Definition

```
GET /API/V3/Account/{accountID}/RegisterWithdraw.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterWithdraw.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "RegisterWithdraw": [
    {
      "registerWithdrawID": "1",
      "amount": "188.41",
      "createTime": "2021-06-06T15:18:52+00:00",
      "notes": "",
      "employeeID": "1",
      "paymentTypeID": "1",
      "registerID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single register withdraw

Retrieve an exising register withdraw by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/RegisterWithdraw/{registerWithdrawID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterWithdraw/{registerWithdrawID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterWithdraw": {
    "registerWithdrawID": "3",
    "amount": "189",
    "createTime": "2021-12-09T15:39:20+00:00",
    "notes": "",
    "employeeID": "1",
    "paymentTypeID": "1",
    "registerID": "1"
  }
}
```

#### Attributes

| registerWithdrawID | (integer) The unique numerical ID for the register withdraw. Required Field |
| --- | --- |

---

### POST Create a register withdraw

Create a register withdraw based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/RegisterWithdraw.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "amount": "321",
      "notes": "Pay Supplier",
      "employeeID": "1",
      "paymentTypeID": "1",
      "registerID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterWithdraw.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterWithdraw": {
    "registerWithdrawID": "6",
    "amount": "321",
    "createTime": "2021-04-17T15:19:07+00:00",
    "notes": "Pay Supplier",
    "employeeID": "1",
    "paymentTypeID": "1",
    "registerID": "1"
  }
}
```

#### Attributes

| amount | (float) The amount the add/payout is for. Negative amounts are for payout/withdrawals. Positive for adds/opening counts. |
| --- | --- |
| createTime | (datetime) The date/time this add/payout was made at. |
| notes | (string) A note for this payout. |
| employeeID | (integer) The foreign key for the employee that made the add/payout. |
| paymentTypeID | (integer) The foreign key for the payment type for the add/payout. |
| registerID | (integer) The foreign key for the register the add/payout was made at. |
| PaymentType | (object) The payment type for the add/payout. |
