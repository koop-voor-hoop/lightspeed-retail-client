---
title: RegisterCountAmount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/RegisterCountAmount/
---

# RegisterCountAmount

#### Description

Individual count for a certain payment type and a certain closing count.

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

- PaymentType

#### RegisterCountAmount Fields

| registerCountAmountID | (integer) The unique numerical ID for the register count amount. /API/V3/Account/{accountID}/RegisterCountAmount/{registerCountAmountID} |
| --- | --- |
| calculated | (float) The amount the system calculated from payments that the register should have of this payment type. |
| actual | (float) The physical amount counted. |
| registerCountID | (integer) The foreign ID for the count this individual payment type count belongs to. /API/V3/Account/{accountID}/RegisterCount/{registerCountID} |
| paymentTypeID | (integer) The this count is for. /API/V3/Account/{accountID}/PaymentType/{paymentTypeID} |
| PaymentType | (object) The payment type this count is for. /API/V3/Account/{accountID}/PaymentType |

#### Sortable Fields

- registerCountAmountID
- registerCountID

#### See Also

- [PaymentType](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/#paymenttype-fields)

### GET All Registers Counts Amounts

Retrieve a list of all register count amounts

> Definition

```
GET /API/V3/Account/{accountID}/RegisterCountAmount.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterCountAmount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "RegisterCountAmount": [
    {
      "registerCountAmountID": "1",
      "calculated": "3093.7",
      "actual": "0",
      "registerCountID": "1",
      "paymentTypeID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single register count amount

Retrieve an existing register count amount by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/RegisterCountAmount/{registerCountAmountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/RegisterCountAmount/{registerCountAmountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "RegisterCountAmount": {
    "registerCountAmountID": "40",
    "calculated": "0",
    "actual": "0",
    "registerCountID": "4",
    "paymentTypeID": "7"
  }
}
```

#### Attributes

| registerCountAmountID | (integer) The unique numerical ID for the register count amount. Required Field |
| --- | --- |
