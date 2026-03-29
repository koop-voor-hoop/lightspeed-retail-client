---
title: CCCharge
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/CCCharge/
---

# CCCharge

#### Description

Holds information returned from a credit card processing gateway for a credit card payment.

#### User Interface

- Reports → Payments → Received → Payment ID details → Credit Card tab of Payment view

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Additional Relations

- SalePayments

#### CCCharge Fields

| ccChargeID | (integer) The unique numerical ID for the CC Charge. /API/V3/Account/{accountID}/CCCharge/{ccChargeID} |
| --- | --- |
| gatewayTransID | (string) The ID assigned to the credit card charge from the processing gateway. |
| xnum | (string) The last four digits of the customer’s credit card number. |
| response | (string) The raw response that was received from the gateway, may be XML, a URL, or other format. |
| voided | (boolean) Whether the charge has been voided within the gateway. |
| refunded | (float) The amount that has been refunded. |
| amount | (float) The original amount of the charge. The current remaining balance of the charge is amount - refunded. |
| exp | (string) The expiration date of the credit card. |
| authOnly | (boolean) A flag to specify if the charge was only authorized and not captured. |
| authCode | (string) The authorization code from the gateway. |
| timeStamp | (datetime) Date/time the record was last modified. |
| declined | (boolean) A flag which indicates whether the charge was declined by the gateway. |
| saleID | (integer) The foreign key for the sale this credit card payment is from. /API/V3/Account/{accountID}/Sale/{saleID} |
| SalePayments | (object) The payment record attached to this credit card charge. /API/V3/Account/{accountID}/SalePayment |
| entryMethod | (string)  The card type: Visa, Mastercard, etc. |
| cardholderName | (string) Name appearing on card. |
| communicationKey | (string) |

#### Sortable Fields

- ccChargeID
- timeStamp
- saleID

#### See Also

- [SalePayment Fields](https://developers.lightspeedhq.com/retail/endpoints/SalePayment/#salepayment-fields)

---

### GET All Credit Card Charges

> Definition

```
GET /API/V3/Account/{accountID}/CCCharge.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CCCharge.json'
```

> Sample JSON response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CCCharge": [
    {
      "ccChargeID": "1",
      "gatewayTransID": "",
      "xnum": "",
      "voided": "false",
      "refunded": "0",
      "amount": "0",
      "exp": "",
      "authOnly": "false",
      "authCode": "",
      "cardType": "",
      "entryMethod": "",
      "cardholderName": "",
      "isDebit": "false",
      "communicationKey": "{string}",
      "timeStamp": "2021-03-03T15:56:34+00:00",
      "declined": "false",
      "rawResponse": "{response}",
      "rawVoidResponse": {
        "@attributes": {
          "readonly": "true"
        }
      },
      "saleID": "141"
    },
    {...}
  ]
}
```

#### Attributes

|  | No Attributes. |
| --- | --- |

---

### GET Retrieve a single Credit Card Charge

Returns a single Credit Card Charge by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/CCCharge/{ccChargeID}.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CCCharge/{ccChargeID}.json'
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CCCharge": {
    "ccChargeID": "2",
    "gatewayTransID": "655388103",
    "xnum": "1009",
    "voided": "false",
    "refunded": "0",
    "amount": "565",
    "exp": "",
    "authOnly": "false",
    "authCode": "OK9999",
    "cardType": "AMEX",
    "entryMethod": "SWIPE",
    "cardholderName": "",
    "isDebit": "false",
    "communicationKey": "{string}",
    "timeStamp": "2021-03-03T15:57:12+00:00",
    "declined": "false",
    "rawResponse": "{string}",
    "rawVoidResponse": {
      "@attributes": {
        "readonly": "true"
      }
    },
    "saleID": "141"
  }
}
```

#### Attributes

| ccChargeID | (integer) The primary ID. /API/V3/Account/{accountID}/CCCharge/{ccChargeID} |
| --- | --- |
