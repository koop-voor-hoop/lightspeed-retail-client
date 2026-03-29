---
title: PaymentType
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/PaymentType/
---

# PaymentType

#### Description

Each SalePayment, RegisterWithdraw and RegisterCount has a PaymentType
describing the method of payment (Cash, Credit Card, Check, Gift Card,
Credit Account, etc). PaymentTypes can define a refund type and whether the
payment type requires a customer to be attached to the Sale.

#### User Interface

- Admin → Sales → Payment Types
- Register → New Sale → Done / Pay → Payments box

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### PaymentType Fields

| paymentTypeID | (integer) The unique numerical ID for the payment type. |
| --- | --- |
| name | (string) The description/name of the payment type. |
| requireCustomer | (boolean) Does this payment type require a customer on the sale before it can be used |
| archived | (boolean) Whether this payment type is archived. |
| internalReserved | (boolean) Is this a predefined system/internal type that can not be changed. A list of predefined payment types is available in the Defined Values section of the API documentation. |
| type | (string) One of five types: cash, gift card, credit account, credit card or user defined. |
| refundAsPaymentTypeID | (integer) Foreign key for the payment type that this payment refunds as. Zero means any payment type can be used as a refund for this one. |

#### Sortable Fields

- paymentTypeID

---

### GET All payment types

Retrieve a list of all payment types in the account

> Definition

```
GET /API/V3/Account/{accountID}/PaymentType.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/PaymentType.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "PaymentType": [
    {
      "paymentTypeID": "1",
      "name": "Cash",
      "requireCustomer": "false",
      "archived": "false",
      "internalReserved": "true",
      "type": "cash",
      "refundAsPaymentTypeID": "0"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single payment type

Retrieve a single payment type

> Definition

```
GET /API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PaymentType": {
    "paymentTypeID": "4",
    "name": "Credit Account",
    "requireCustomer": "false",
    "archived": "false",
    "internalReserved": "true",
    "type": "credit account",
    "refundAsPaymentTypeID": "4"
  }
}
```

#### Attributes

| paymentTypeID | (integer) The unique numerical ID for the payment type. Required Field |
| --- | --- |

---

### POST Create a payment type

Create a payment type based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/PaymentType.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Payment Name",
        "requireCustomer": "true",
        "internalReserved": "false",
        "type": "credit card",
        "refundAsPaymentTypeID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/PaymentType.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PaymentType": {
    "paymentTypeID": "12",
    "name": "Payment Name",
    "requireCustomer": "true",
    "archived": "false",
    "internalReserved": "false",
    "type": "user defined",
    "refundAsPaymentTypeID": "1"
  }
}
```

#### Attributes

| name | (string) The description/name of the payment type. |
| --- | --- |
| requireCustomer | (boolean) Does this payment type require a customer on the sale before it can be used |
| internalReserved | (boolean) Is this a predefined system/internal type that can not be changed. See our list of payment types in the ‘Defined Values’ section of the API documentation. |
| type | (string) One of five types: cash, gift card, credit account, credit card or user defined. |
| refundAsPaymentTypeID | (integer) Foreign key for the payment type that this payment refunds as. Zero means any payment type can be used as a refund for this one. |

---

### PUT Update a payment type

Update an existing payment type based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "External Payment",
        "requireCustomer": "false"
        "type": "cash",
        "refundAsPaymentTypeID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PaymentType": {
    "paymentTypeID": "12",
    "name": "External Payment",
    "requireCustomer": "false",
    "archived": "false",
    "internalReserved": "false",
    "type": "user defined",
    "refundAsPaymentTypeID": "2"
  }
}
```

#### Attributes

| paymentTypeID | (integer) The unique numerical ID for the payment type. Required Field |
| --- | --- |
| name | (string) The description/name of the payment type. |
| requireCustomer | (boolean) Does this payment type require a customer on the sale before it can be used |
| type | (string) One of five types: cash, gift card, credit account, credit card or user defined. |
| refundAsPaymentTypeID | (integer) Foreign key for the payment type that this payment refunds as. Zero means any payment type can be used as a refund for this one. |

---

### DELETE Delete a payment type

Archive an existing payment type by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/PaymentType/{paymentTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PaymentType": {
    "paymentTypeID": "12",
    "name": "External Payment",
    "requireCustomer": "false",
    "archived": "true",
    "internalReserved": "false",
    "type": "user defined",
    "refundAsPaymentTypeID": "2"
  }
}
```

#### Attributes

| paymentTypeID | (integer) The unique numerical ID for the payment type. Required Field |
| --- | --- |
