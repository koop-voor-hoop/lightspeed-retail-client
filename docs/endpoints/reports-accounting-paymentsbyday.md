---
title: Reports Accounting PaymentsByDay
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Reports-Accounting-PaymentsByDay/
---

# Reports Accounting PaymentsByDay

#### Description

Use this report to get a daily total of sales broken down by tax category (and shop), useful for exporting to an accounting package. Use startDate and endDate as search parameters on this report.

#### User Interface

- Reports → QuickBooks Export has similar functionality but is specifically designed for generating a QuickBooks IIF file export.

#### Notes

- **This is a read only report.**

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |

#### Scopes Required

| employee:reports | true |
| --- | --- |

#### PaymentsByDay Fields

| date | (datetime) The date of these payments. |
| --- | --- |
| shopID | (integer) The shopID for these payments. |
| layaway | (boolean) Whether the payment was for a layaway. |
| amount | (float) The subtotal for the payment type on this day. |
| paymentTypeName | (string) The name of the payment type this total is for. |
| paymentTypeID | (integer) The ID of the payment type this total is for. |

#### Sortable Fields

- date

---

### GET Payments by Day

Retrieve list of payments by day

> Definition

```
GET /API/V3/Account/{accountID}/Reports/Accounting/PaymentsByDay.json?startDate=2021-01-01&endDate=2021-04-01
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Reports/Accounting/PaymentsByDay.json?startDate=2021-01-01&endDate=2021-04-01"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Payments": [
    {
      "date": "01/26/2021",
      "shopID": "1",
      "amount": "565.00",
      "paymentTypeName": "Cash",
      "paymentTypeID": "1"
    },
    {...}
  ]
}
```

#### Attributes

| startDate | (date) From which date. Required Field |
| --- | --- |
| endDate | (date) To which date. Required Field |
