---
title: Register Open
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Register-open/
---

# Register Open

#### Description

A Register represents a single point of sale, a place where money is received. Each register has a separate cash count for each payment type.
This control processes Register open request.

#### User Interface

- Admin → General → Edit Shop (Shops → Edit Shop) → Registers tab of Shop view.
- Register → Open Register / Close Register

#### Actions Allowed

| POST/Create | True |
| --- | --- |

#### Scopes Required

| employee:register_open | true |
| --- | --- |

#### RegisterWithdraw Fields

| registerWithdrawID | (integer) The primary key.. /API/V3/Account/{accountID}/RegisterWithdraw/{registerWithdrawID} |
| --- | --- |
| amount | (float) The amount the add/payout is for. Negative amounts are for payout/withdrawals. Positive for adds/opening counts. |
| createTime | (datetime) The date/time this add/payout was made at. |
| notes | (string) A note for this payout. |
| employeeID | (integer) The foreign key for the employee that made the add/payout. /API/V3/Account/{accountID}/Employee/{employeeID} |
| paymentTypeID | (integer) The foreign key for the payment type for the add/payout. /API/V3/Account/{accountID}/PaymentType/{paymentTypeID} |
| registerID | (integer) The foreign key for the register the add/payout was made at. /API/V3/Account/{accountID}/Register/{registerID} |

#### Sortable Fields

- registerWithdrawID

---

### POST Open a register

Open a register based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Register/{registerID}/open.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "amount": "1000",
    	"notes": "Register opened via API",
    	"employeeID": "1",
    	"paymentTypeID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Register/{registerID}/open.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterWithdraw": {
    "registerWithdrawID": "5",
    "amount": "1000",
    "createTime": "2021-04-06T14:34:28+00:00",
    "notes": "Register opened via API",
    "employeeID": "1",
    "paymentTypeID": "1",
    "registerID": "1"
  }
}
```

#### Attributes

| amount | (float) The amount the add/payout is for. Negative amounts are for payout/withdrawals. Positive for adds/opening counts. |
| --- | --- |
| notes | (string) A note for this payout. |
| employeeID | (integer) The foreign key for the employee that made the add/payout. |
| paymentTypeID | (integer) The foreign key for the payment type for the add/payout. Required Field |
