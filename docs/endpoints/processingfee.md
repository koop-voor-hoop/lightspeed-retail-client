---
title: ProcessingFee
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ProcessingFee/
---

# ProcessingFee

#### Description

The sale payment processing fees incurred by a SalePayment (for example, credit card processing fees).  These fees are typically deducted from the total amount paid to the merchant by the payment processor.

#### User Interface

- Financial services → Payments → Payment details → Fee

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |
| GET/Read (single) | True |

#### ProcessingFee Fields

| salePaymentProcessingFeeID | (integer) The unique identifier of the processing fee. |
| --- | --- |
| salePaymentID | (integer) The ID of the sale payment associated with the processing fee. |
| processingFeeRef | (string) The external reference ID provided by the payment processor for the processing fee. |
| processor | (string) Name of the payment processor handling the transaction. |
| amount | (float) The total payment amount linked to the processing fee. |
| fixedFee | (float) The value of the fixed fee applied to the payment. |
| variableFee | (float) The value of the variable fee applied to the payment. |
| variablePct | (float) The percentage rate used to calculate the variable portion of the processing fee. |
| interchangeFeesFixedFee | (float) The value of the fixed fee applied to the interchange fees. |
| interchangeFeesVariableFee | (float) The value of the variable fee applied to the interchange fees. |
| interchangeFeesVariablePct | (float) The percentage rate used to calculate the variable portion of interchange fees. |
| schemeFeesFixedFee | (float) The value of the fixed fee applied to the scheme fees. |
| schemeFeesVariableFee | (float) The value of the variable fee applied to the scheme fees. |
| schemeFeesVariablePct | (float) The percentage rate used to calculate the variable portion of scheme fees. |
| processingTime | (datetime) The date/time the processingFee has been proceeded remotely. |
| createTime | (datetime) Date/time when the processing fee record was created. |
| updateTime | (datetime) Date/time when the processing fee record was last updated. |

#### Sortable Fields

- salePaymentProcessingFeeID

---

### GET All processing fees

Retrieve a list of all processing fees

> Definition

```
GET /API/V3/Account/{accountID}/ProcessingFee.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ProcessingFee.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ProcessingFee": [
    {
      "salePaymentProcessingFeeID": "6",
      "salePaymentID": "1",
      "processingFeeRef": "st-ch_3SYDBSC6UFOBDM7x2QB8mKVw",
      "processor": "STRIPE",
      "amount": "151.89",
      "fixedFee": "0.01",
      "variableFee": "0.39",
      "variablePercent": "0.26",
      "interchangeFeesFixedFee": "0.2",
      "interchangeFeesVariableFee": "0.12",
      "interchangeFeesVariablePercent": "0.36",
      "schemeFeesFixedFee": "0.33",
      "schemeFeesVariableFee": "0.56",
      "schemeFeesVariablePercent": "0.66",
      "processingTime": "2025-11-27T21:57:02+00:00",
      "createTime": "2025-11-28T18:31:53+00:00",
      "updateTime": "2025-11-28T18:31:53+00:00"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single processing fee

Retrieve a single processing fee by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/ProcessingFee/{processingFeeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ProcessingFee/{processingFeeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ProcessingFee": {
    "salePaymentProcessingFeeID": "8",
    "salePaymentID": "1",
    "processingFeeRef": "st-ch_3SYDBSC6UFOBDM7x2QB8mKVw",
    "processor": "STRIPE",
    "amount": "151.89",
    "fixedFee": "0.01",
    "variableFee": "0.39",
    "variablePercent": "0.26",
    "interchangeFeesFixedFee": "0.2",
    "interchangeFeesVariableFee": "0.12",
    "interchangeFeesVariablePercent": "0.36",
    "schemeFeesFixedFee": "0.33",
    "schemeFeesVariableFee": "0.56",
    "schemeFeesVariablePercent": "0.66",
    "processingTime": "2025-11-27T21:57:02+00:00",
    "createTime": "2025-12-08T15:30:50+00:00",
    "updateTime": "2025-12-08T15:30:50+00:00"
  }
}
```

#### Attributes

| processingFeeID | (integer) The unique numerical ID for the processing fee. Required Field |
| --- | --- |

---

### GET Single processing fee by Sale Payment ID

Retrieve a list of fields related to the processing fee by sale payment ID

> Definition

```
GET /API/V3/Account/{accountID}/ProcessingFee.json?salePaymentID={salePaymentID}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ProcessingFee.json?salePaymentID={salePaymentID}"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ProcessingFee": {
    "salePaymentProcessingFeeID": "8",
    "salePaymentID": "1",
    "processingFeeRef": "st-ch_3SYDBSC6UFOBDM7x2QB8mKVw",
    "processor": "STRIPE",
    "amount": "151.89",
    "fixedFee": "0.01",
    "variableFee": "0.39",
    "variablePercent": "0.26",
    "interchangeFeesFixedFee": "0.2",
    "interchangeFeesVariableFee": "0.12",
    "interchangeFeesVariablePercent": "0.36",
    "schemeFeesFixedFee": "0.33",
    "schemeFeesVariableFee": "0.56",
    "schemeFeesVariablePercent": "0.66",
    "processingTime": "2025-11-27T21:57:02+00:00",
    "createTime": "2025-12-08T15:30:50+00:00",
    "updateTime": "2025-12-08T15:30:50+00:00"
  }
}
```

#### Attributes

| salePaymentID | (integer) The unique numerical ID for the sale payment. Required Field |
| --- | --- |
