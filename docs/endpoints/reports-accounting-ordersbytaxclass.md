---
title: Reports Accounting OrdersByTaxClass
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Reports-Accounting-OrdersByTaxClass/
---

# Reports Accounting OrdersByTaxClass

#### Description

Use this report to get a daily daily accounting report of orders (from vendors for restocking) broken down by order, and subtotaled by tax class, useful for exporting to an accounting package. Use startDate and endDate as search parameters on this report.

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

#### Orders Fields

| date | (datetime) The date order was received. |
| --- | --- |
| shopID | (integer) The shopID for this order. |
| vendorID | (integer) The ID of the vendor this line is for. |
| vendorName | (string) The name of the vendor this line is for. |
| taxClassID | (integer) The ID of the tax class this line is for. |
| taxClassName | (string) The name of the tax class this line is for. |
| cost | (float) The subotal cost for items in this tax class on this order. |
| orderID | (integer) The ID of the order this line is a part of. |
| totalShipCost | (float) The entire ship cost of this order (Not just the cost for this line, so do not sum this). |
| totalOtherCost | (float) The entire other cost of this order (Not just the cost for this line, so do not sum this). |

#### Sortable Fields

- orderID

---

### GET Orders by tax class

Retrieve orders by tax class

> Definition

```
GET /API/V3/Account/{accountID}/Reports/Accounting/OrdersByTaxClass.json?startDate={startDate}&endDate={endDate}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Reports/Accounting/OrdersByTaxClass.json?startDate={startDate}&endDate={endDate}"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Order": [
    {
      "date": "03/31/2021",
      "shopID": "2",
      "taxClassID": "1",
      "taxClassName": "Item",
      "vendorID": "57",
      "vendorName": "ACD Distribution, LLC",
      "cost": "0.000000000",
      "orderID": "7",
      "totalShipCost": "0.00",
      "totalOtherCost": "0.00"
    },
    {
      "date": "03/31/2021",
      "shopID": "2",
      "taxClassID": "1",
      "taxClassName": "Item",
      "vendorID": "57",
      "vendorName": "ACD Distribution, LLC",
      "cost": "0.000000000",
      "orderID": "8",
      "totalShipCost": "0.00",
      "totalOtherCost": "0.00"
    }
  ]
}
```

#### Attributes

| startDate | Value must follow the ISO 8601 standard. Required Field |
| --- | --- |
| endDate | Value must follow the ISO 8601 standard. Required Field |
