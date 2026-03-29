---
title: Reports Accounting TaxesByDay
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Reports-Accounting-TaxesByDay/
---

# Reports Accounting TaxesByDay

#### Description

Use this report to get a daily total of taxes broken down by tax category (and shop), useful for exporting to an accounting package. Use startDate and endDate as search parameters on this report. This is a read only report.

#### User Interface

- Reports → QuickBooks Export has similar functionality but is specifically designed for generating a QuickBooks IIF file export.

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |

#### Scopes Required

| employee:reports | true |
| --- | --- |

#### TaxesByDay Fields

| date | (datetime) The date these taxes were collected. |
| --- | --- |
| shopID | (integer) The shopID where these taxes were collected. |
| taxCategoryID | (integer) The taxCategoryID for these taxes. |
| taxCategoryName | (string) The name of the TaxCategory this line is for. |
| tax | (float) The subtotal of taxes for this tax category on this day. |

#### Sortable Fields

- date

---

### GET Taxes by day

Retrieve a list of taxes by day

> Definition

```
GET /API/V3/Account/{accountID}/Reports/Accounting/TaxesByDay.json?startDate={startDate}&endDate={endDate}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Reports/Accounting/TaxesByDay.json?startDate={startDate}&endDate={endDate}"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Taxes": [
    {
      "date": "01/26/2021",
      "shopID": "1",
      "taxCategoryID": "1",
      "taxCategoryName": "Sales Tax",
      "tax": "65.00"
    },
    {...}
  ]
}
```

#### Attributes

| startDate | (date) From which date. Required Field |
| --- | --- |
| endDate | (date) To which date. Required Field |
