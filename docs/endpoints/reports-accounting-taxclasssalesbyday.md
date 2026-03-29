---
title: Reports Accounting TaxClassSalesByDay
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Reports-Accounting-TaxClassSalesByDay/
---

# Reports Accounting TaxClassSalesByDay

#### Description

Use this report to get a daily total of sales broken down by tax class (and shop), useful for exporting to an accounting package. Use startDate and endDate as search parameters on this report.

#### User Interface

Reports → QuickBooks Export has similar functionality but is specifically designed for generating a QuickBooks IIF file export.Notes
This is a read only report.

#### Notes

- **This is a read only report.**

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |

#### Scopes Required

| employee:reports | true |
| --- | --- |

#### SalesByTaxClassAndDay Fields

| date | (datetime) The date of these sale totals. |
| --- | --- |
| shopID | (integer) The shopID for these sales. |
| taxClassID | (integer) The ID of the tax class this line is for. |
| taxClassName | (string) The name of the tax class this line is for. |
| subtotal | (float) The subtotal of sales for this tax class on this day for this shop. |
| fifoCost | (float) First In First Out cost for the sales grouped in this tax class, day, and shop. |
| avgCost | (float) Average cost for the sales grouped in this tax class, day, and shop. |

#### Sortable Fields

- date

---

### GET tax class sales by day

Retrieve a list of tax class sales by day

> Definition

```
GET /API/V3/Account/{accountID}/Reports/Accounting/TaxClassSalesByDay.json?startDate={startDate}&endDate={endDate}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Reports/Accounting/TaxClassSalesByDay.json?startDate={startDate}&endDate={endDate}"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "SalesDay": [
    {
      "date": "01/26/2021",
      "taxClassID": "1",
      "taxClassName": "Item",
      "shopID": "1",
      "subtotal": "2500.00",
      "fifoCost": "0.000000000",
      "avgCost": "0.000000000"
    },
    {...}
  ]
}
```

#### Attributes

| startDate | (date) From which date. Required Field |
| --- | --- |
| endDate | (date) To which date. Required Field |
