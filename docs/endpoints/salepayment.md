---
title: SalePayment
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/SalePayment/
---

# SalePayment

#### Description

The payments used to pay for a Sale. Can be of any PaymentType and may be positive or negative. Deposits to CreditAccounts will be represented as two payments: one with a positive amount that is the payment of the deposit, and a negative “Credit Account” PaymentType of the same amount.

#### User Interface

- Register → New Sale → Done / Pay → Payments box
- Reports → Point of Sale → Payments → Received

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |
| GET/Read (single) | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |

#### Additional Relations

- PaymentType
- CCCharge
- SaleAccounts
- Signatures
- ProcessingFees

#### SalePayment Fields

| salePaymentID | (integer) The unique numerical ID for the payment type. |
| --- | --- |
| amount | (float) The amount of the payment (including any tip); negative for a refund. |
| createTime | (datetime) The date/time the payment was made |
| archived | (boolean) Whether the payment is archived. Archived payments should not count towards totals, they are essentially voided. |
| remoteReference | (string) An optional client-generated unique identifier for the Sale Payment. |
| tipAmount | (float) The amount of the tip; negative for a refund. |
| paymentID | (string) A reference to the payment charge from the payment service. |
| saleID | (integer) The foreign key to the Sale the payment was made on. /API/V3/Account/{accountID}/Sale/{saleID} |
| paymentTypeID | (integer) The foreign key to the PaymentType of this payment / refund. /API/V3/Account/{accountID}/PaymentType/{paymentTypeID} |
| ccChargeID | (integer) The foreign key to the CCCharge (credit card gateway transaction) this payment is attached to (if it’s a CC payment or refund). /API/V3/Account/{accountID}/CCCharge/{ccChargeID} |
| refPaymentID | (integer) A reference salePaymentID (optional).  This is used to refer to an original SalePayment in certain cases, i.e. when refunding a previous credit card charge. |
| registerID | (integer) The foreign key to the Register this payment was received at. /API/V3/Account/{accountID}/Register/{registerID} |
| employeeID | (integer) The foreign key to the Employee this payment was received by. /API/V3/Account/{accountID}/Employee/{employeeID} |
| creditAccountID | (integer) (optional) the foreign key to the CreditAccount this deposit/withdraw applies to.  If PaymentType is Credit Account, a positive amount indicates a debit from the Credit Account and a negative amount indicates a deposit to the Credit Account.   If PaymentType is Cash, Check, or Credit Card, the amount should be positive and will be treated as a refund of the customer’s Credit Account deposit – to be paid to the customer using the specified PaymentType. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| PaymentType | (object) Type of payment. /API/V3/Account/{accountID}/PaymentType |
| CCCharge | (object) If this is a credit card charge, the gateway credit card transaction. /API/V3/Account/{accountID}/CCCharge |
| SaleAccounts | (object) If this SalePayment is used to create a new Gift Card or deposit funds to one (a negative amount in either case), the SaleAccount entry records the association between this SalePayment, the SaleLine, and the CreditAccount (Gift Card).  Since the relationship of SalePayment to SaleAccount is one-to-one, the collection will always have zero or one entries. /API/V3/Account/{accountID}/SaleAccount |
| ProcessingFees | (object) If this SalePayment incurred any processing fees (for example, credit card processing fees), those fees will be recorded here. /API/V3/Account/{accountID}/ProcessingFee/{ProcessingFeeID} |

#### SaleAccount Fields

| creditAccountID | (integer) The foreign key to the CreditAccount (Gift Card) used in the SalePayment. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| --- | --- |
| salePaymentID | (integer) The foreign key to the SalePayment that is linked to the SaleLine. /API/V3/Account/{accountID}/SalePayment/{salePaymentID} |
| saleLineID | (integer) The foreign key to the SaleLine that is linked to the SalePayment. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |

#### SalePaymentSignature Fields

| salePaymentSignatureID | (integer) The unique numerical ID for the sale payment signature ID. |
| --- | --- |
| filePath | (string) The signature’s file path in the image storage service |
| createTime | (datetime) The date/time the signature was created |
| salePaymentID | (integer) The foreign key to the Sale Payment the signature is created for. |

#### Sortable Fields

- salePaymentID
- timeStamp
- saleID

#### See Also

- [PaymentType](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/#paymenttype-fields)
- [CCCharge](https://developers.lightspeedhq.com/retail/endpoints/CCCharge/#cccharge-fields)
- [ProcessingFee](https://developers.lightspeedhq.com/retail/endpoints/ProcessingFee/#get-all-processing-fees)

---

### GET All sales payments

Retrieve a list of all sales payments

> Definition

```
GET /API/V3/Account/{accountID}/SalePayment.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SalePayment.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "SalePayment": [
    {
      "salePaymentID": "1",
      "amount": "317.1",
      "createTime": "2021-06-06T15:19:18+00:00",
      "archived": "false",
      "remoteReference": "",
      "tipAmount": "0",
      "paymentID": "",
      "saleID": "2",
      "paymentTypeID": "1",
      "ccChargeID": "0",
      "refPaymentID": "0",
      "registerID": "1",
      "employeeID": "1",
      "creditAccountID": "0"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single sale payment

Retrieve a single sale payment by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/SalePayment/{salePaymentID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SalePayment/{salePaymentID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SalePayment": {
    "salePaymentID": "58",
    "amount": "565",
    "createTime": "2021-03-03T15:58:24+00:00",
    "archived": "false",
    "remoteReference": "",
    "tipAmount": "0",
    "paymentID": "",
    "saleID": "141",
    "paymentTypeID": "3",
    "ccChargeID": "2",
    "refPaymentID": "0",
    "registerID": "1",
    "employeeID": "1",
    "creditAccountID": "0"
  }
}
```

#### Attributes

| salePaymentID | (integer) The unique numerical ID for the payment type. Required Field |
| --- | --- |
