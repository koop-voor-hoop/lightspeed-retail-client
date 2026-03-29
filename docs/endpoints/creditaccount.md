---
title: CreditAccount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/
---

# CreditAccount

#### Description

This endpoint has two distinct uses. One is for account credit linked to a customer account, and the other is for gift card management. Not all actions are possible for each use, and they require different payloads.

*Credit account:* allows a customer to have an in-store account balance. If the balance is negative, it represents a deposit made to the account. A positive credit account balance represents an amount owed.

Use the [Customer](https://developers.lightspeedhq.com/retail/endpoints/Customer/) endpoint to create credit accounts for customers.

*Gift card:* a unique code attached to some monetary value. Not linked to a customer.

**Notes:**

- The [(POST/Create)](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/#post-create-a-credit-account) method at this endpoint should only be used to create Gift Cards.
- When [creating Gift Cards](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/#post-create-a-credit-account), they must have a `code` value between 8 and 32 characters in length.
- Gift cards must have had a balance added to them with a completed [Sale](https://developers.lightspeedhq.com/retail/endpoints/Sale/) in order to appear in the Retail POS (R-Series) User Interface
- See the [Gift Card](https://developers.lightspeedhq.com/retail/tutorials/gift-cards/) and [Credit Account](https://developers.lightspeedhq.com/retail/tutorials/creditacounts/) tutorials for further details.
- Only the equals operator **=** query parameter can be used for lookup.

#### User Interface

- Customers → Credit Accounts

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |
| GET/Read (single) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:customers | True |
| --- | --- |
| employee:customers_view_gift_card_numbers | Optional If granted, will unmask gift card codes. |

#### Additional Relations

- Contact
- WithdrawalPayments

#### CreditAccount Fields

| creditAccountID | (integer) The unique numerical ID for the credit account. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| --- | --- |
| name | (string) The name of the credit account. |
| code | (string) For gift cards this stores the gift card barcode or other numerical ID that can be scanned at the point of sale. |
| description | (string) A description for the credit account. |
| giftCard | (boolean) Whether this is a gift card account. |
| archived | (boolean) Whether this account is archived. |
| customerID | (integer) The foreign key for the Customer record. /API/V3/Account/{accountID}/Customer/{customerID} |
| Contact | (object) The contact information for this account. Not returned by default, Relation must be requested. |
| WithdrawalPayments | (object) Deposits or withdrawal payments against this account. Not returned by default, Relation must be requested. /API/V3/Account/{accountID}/SalePayment |
| timeStamp | (datetime) Date/time the record was last modified. |
| balance | (float) Balance of the credit account. |

#### Sortable Fields

- creditAccountID
- timeStamp
- customerID

#### See also

- [Contact](https://developers.lightspeedhq.com/retail/endpoints/Customer/#contact-fields)
- [SalePayment](https://developers.lightspeedhq.com/retail/endpoints/SalePayment/#salepayment-fields)
- [Customer](https://developers.lightspeedhq.com/retail/endpoints/Customer/)

---

### GET All credit accounts

Retrieve a list of all credit accounts in the account. The query `giftCard=true` must be passed for the results to include credit accounts of type giftCard.

> Description

```
GET /API/V3/Account/{accountID}/CreditAccount.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CreditAccount.json'
```

> Sample JSON response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CreditAccount": {
    "creditAccountID": "1",
    "name": "Customer Credit Account",
    "code": "",
    "creditLimit": "0",
    "description": "",
    "giftCard": "false",
    "archived": "false",
    "timeStamp": "2021-03-16T03:21:18+00:00",
    "customerID": "2",
    "balance": "0"
  }
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Retrieve a Credit Account

Retrieve a single credit account by its ID.

> Description

```
GET /API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json'
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "2",
    "name": "Customer Credit Account",
    "code": "",
    "creditLimit": "0",
    "description": "",
    "giftCard": "false",
    "archived": "false",
    "timeStamp": "2021-03-16T04:10:29+00:00",
    "customerID": "7",
    "balance": "0"
  }
}
```

#### Attributes

| creditAccountID | (integer) The primary key. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| --- | --- |

---

### POST Create a Credit Account

Create a credit account based on the given parameters.

> Description

```
POST /API/V3/Account/{accountID}/CreditAccount.json
```

> Sample Request

```shell
$ curl -X POST "Authorization: Bearer {Access Token}" \
- d ' {
    "name": "Customer Credit Account",
    "code": "123123123123",
    "customerID": "8"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CreditAccount.json"
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "3",
    "name": "Customer Credit Account",
    "code": "********3123",
    "creditLimit": "0",
    "description": "",
    "giftCard": "true",
    "archived": "false",
    "timeStamp": "2021-03-16T04:15:44+00:00",
    "customerID": "8",
    "balance": "0"
  }
}
```

#### Attributes

| name | (string) The name of the credit account. |
| --- | --- |
| code | (string) For gift cards this stores the gift card barcode or other numerical ID that can be scanned at the point of sale. |
| customerID | (integer) The foreign key for the Customer record. |

---

### PUT Update a Credit Account

Update a credit account based on the given parameters. Can be used on a gift card or a credit account.

> description

```
PUT /API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json
```

> Sample Request

```shell
$ curl "Authorization: Bearer {Access Token}" \
-d ' {
  "description": "New Description"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json"
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "4",
    "name": "Customer Credit Account",
    "code": "********3123",
    "creditLimit": "0",
    "description": "New Description",
    "giftCard": "true",
    "archived": "false",
    "timeStamp": "2021-03-16T16:29:25+00:00",
    "customerID": "8",
    "balance": "0"
  }
}
```

#### Attributes

| name | (string) The name of the credit account. |
| --- | --- |
| description | (string) A description for the credit account. |

---

### DELETE Archive a Credit Account

Archive an existing credit account by its ID. This will not remove the balance. Works on both credit accounts and gift cards.

> Description

```
DELETE /API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json
```

> Sample Request

```shell
$ curl -X DELETE "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/CreditAccount/{creditAccountID}.json"
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "4",
    "name": "Customer Credit Account",
    "code": "********3123",
    "creditLimit": "0",
    "description": "",
    "giftCard": "true",
    "archived": "true",
    "timeStamp": "2021-03-16T16:29:25+00:00",
    "customerID": "8",
    "balance": "0"
  }
}
```

#### Attributes

| creditAccountID | (integer) The primary key. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| --- | --- |
