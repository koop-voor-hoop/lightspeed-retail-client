---
title: RegisterCount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/RegisterCount/
---

# RegisterCount

#### Description

A Register Count is the end of day (or shift) count of the cash in a specific Register (point of sale). It has a separate calculated ‘should have’ and actual physical count amounts for each payment type (these count amounts are listed inside the RegisterCountAmount child).

#### User Interface

- Reports → Registers → Closing Counts
- Register → Close Register

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Additional Relations

- RegisterCountAmounts
- RegisterCountAmounts.PaymentType

#### RegisterCount Fields

| registerCountID | (integer) The unique numerical ID for the register count. /API/V3/Account/{accountID}/RegisterCount/{registerCountID} |
| --- | --- |
| createTime | (datetime) The date/time the register was closed (this is when the count is submitted). |
| openTime | (datetime) The date/time the reigster was opened at. |
| notes | (string) Notes for the count. |
| registerID | (integer) The foreign key for the register this count is for. /API/V3/Account/{accountID}/Register/{registerID} |
| openEmployeeID | (integer) The foreign key for the employee who opened the register. /API/V3/Account/{accountID}/Register/{openEmployeeID} |
| closeEmployeeID | (integer) The foreign key for the the foreign key for the employee who submitted this count, closed the reigster. /API/V3/Account/{accountID}/Register/{closeEmployeeID} |
| RegisterCountAmounts | (object) The individual counts of the amounts in the register and what the system calculated they should be. /API/V3/Account/{accountID}/RegisterCountAmount |

#### Sortable Fields

- registerCountID

#### See Also

- [RegisterCountAmount](https://developers.lightspeedhq.com/retail/endpoints/RegisterCountAmount/#registercountamount-fields)
- [PaymentType](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/#paymenttype-fields)

---

### GET All registers counts

Retrieve a list of all registers counts

> Definition

```
GET /API/V3/Account/{accountID}/RegisterCount.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterCount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "RegisterCount": [
    {
      "registerCountID": "1",
      "createTime": "2021-12-09T15:38:53+00:00",
      "openTime": "2021-06-06T15:18:52+00:00",
      "notes": "",
      "registerID": "1",
      "openEmployeeID": "1",
      "closeEmployeeID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single register count

Retrieve a single register’s count by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/RegisterCount/{registerCountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterCount/{registerCountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterCount": {
    "registerCountID": "1",
    "createTime": "2021-12-09T15:38:53+00:00",
    "openTime": "2021-06-06T15:18:52+00:00",
    "notes": "",
    "registerID": "1",
    "openEmployeeID": "1",
    "closeEmployeeID": "1"
  }
}
```

#### Attributes

| registerCountID | (integer) The unique numerical ID for the register count. Required Field |
| --- | --- |
