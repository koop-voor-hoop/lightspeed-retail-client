---
title: Reports Accounting DiscountsByDay
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Reports-Accounting-DiscountsByDay/
---

# Reports Accounting DiscountsByDay

#### Description

Use this report to get a daily total of sales broken down by discount (and shop), useful for exporting to an accounting package. Use startDate and endDate as search parameters on this report.

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

#### DiscountsByDay Fields

| date | (datetime) The date these discounts totals were given. |
| --- | --- |
| shopID | (integer) The shopID where these discounts were given. |
| discount | (float) The subtotal of sale discounts on this day. |

#### Sortable Fields

- date

---

### GET Discount by days

Retrieve a list of discount by days

> Definition

```
GET /API/V3/Account/{accountID}/Reports/Accounting/DiscountsByDay.json?startDate={startDate}&endDate={endDate}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Reports/Accounting/DiscountsByDay.json?startDate={startDate}&endDate={endDate}"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Discounts": [
    {
      "date": "01/26/2021",
      "shopID": "1",
      "discount": "0.00"
    },
    {...}
  ]
}
```

#### Attributes

| startDate | Value must follow the ISO 8601 standard. Required Field |
| --- | --- |
| endDate | Value must follow the ISO 8601 standard. Required Field |
