---
title: TaxCategoryClass
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/
---

# TaxCategoryClass

#### Description

Used to delete a TaxCategoryClass from a TaxCategory

#### User Interface

- Admin → Sales → Sales Taxes

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| DELETE/Delete | True |

#### Additional Relations

- TaxClass

#### TaxCategoryClass Fields

| timeStamp | (datetime) Date/time the record was last modified. |
| --- | --- |

#### TaxClass Fields

| taxClassID | (integer) The unique numerical ID for the tax class. |
| --- | --- |
| name | (string) The name of the TaxClass. |
| SaleLines | (string) Sale lines that have this class. /API/V3/Account/{accountID}/SaleLine |
| Items | (string) Items that have this class. /API/V3/Account/{accountID}/Item |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- taxClassID
- timeStamp
