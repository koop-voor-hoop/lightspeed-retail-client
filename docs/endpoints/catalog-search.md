---
title: Catalog Search
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Catalog-Search/
---

# CatalogSearch

#### Description

Search items available in [vendor catalogs](https://retail-support.lightspeedhq.com/hc/en-us/articles/228840427-About-catalogs). This endpoint return CatalogVendorItem records. A search query must be provided with the `description` query parameter.

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |

#### Additional Relations

- CatalogVendor

#### CatalogVendorItem Fields

| catalogVendorItemID | (integer) The primary ID. /API/V3/Account/{accountID}/CatalogVendorItem/{catalogVendorItemID} |
| --- | --- |
| vendorNumber | (string) The part number or ID assigned to this item by the Vendor. |
| description | (string) The name or description of the item. |
| category | (string) The suggested category of the item. |
| model | (string) The item’s model.  Usually a year. |
| retailUnit | (integer) Number of items per order unit. |
| unitOfMeasurement | (string) How multiple quantities are grouped eg. box, pair. |
| cost | (float) Basic cost of item from Vendor. |
| costLevel2 | (float) First level of discount cost. |
| costLevel3 | (float) Second level of discount cost. |
| costLevel4 | (float) Final level of discount cost. |
| msrp | (float) Manufacturer’s Suggested Retail Price. |
| breakQty | (integer) Quantity at which bulk price break is applied. |
| breakPrice | (float) Price for items above breakQty. |
| manufacturerNumber | (string) The part number or ID assigned to this item by the manufacturer. |
| brand | (string) The brand of the item. |
| lastPriceChange | (date) Date of last price change. |
| upc | (string) Universal Product Code. |
| ean | (string) International Article Number. |
| ean2 | (string) Alternate International Article Number. |
| status | (string) Status of the item. |
| year | (string) Item model year. |
| replacement | (string) Suggested replacement item. |
| replacementDescription | (string) Description of suggested replacement item. |
| breakQty2 | (integer) Second level of bulk order quantity. |
| breakPrice2 | (float) Cost of breakQty2. |
| breakQty3 | (integer) Third level of bulk order quantity. |
| breakPrice3 | (float) Cost of breakQty3. |
| colorName | (string) Color of the item. |
| sizeName | (string) Size of the item. |
| archived | (boolean) Is the item archived. |
| lastQoh | (integer) Last Quantity On Hand at vendor. |
| catalogVendorID | (integer) Foreign key for CatalogVendor containing item. /API/Catalog/Vendor/{catalogVendorID} |
| CatalogVendor | (object) Catalogcontaining the item. |

#### Sortable Fields

- catalogVendorItemID

---

### GET Catalog Search

Search for catalogs based on the given parameter.

> description

```
GET /API/V3/Account/{accountID}/Catalog/Search.json?description={String}
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/Catalog/Search.json?description={String}'
```

> Sample json response

```json
{
  "@attributes": {
    "count": "209"
  },
  "CatalogVendorItem": [
    {
      "catalogVendorItemID": "12374639",
      "vendorNumber": "MGP 3876",
      "description": "Traveller RPG Aramis: The Traveller",
      "category": "",
      "model": "",
      "retailUnit": "1",
      "unitOfMeasurement": "",
      "cost": "0",
      "costLevel2": "0",
      "costLevel3": "0",
      "costLevel4": "0",
      "msrp": "39.99",
      "breakQty": "0",
      "breakPrice": "0",
      "manufacturerNumber": "",
      "brand": "Traveller RPG",
      "upc": "",
      "ean": "",
      "ean2": "",
      "status": "",
      "year": "",
      "replacement": "",
      "replacementDescription": "",
      "breakQty2": "0",
      "breakPrice2": "0",
      "breakQty3": "0",
      "breakPrice3": "0",
      "colorName": "",
      "sizeName": "",
      "archived": "false",
      "lastQoh": "0",
      "catalogVendorID": "1222",
      "CatalogVendor": {
        "catalogVendorID": "1222",
        "name": "Alliance Game Distributors",
        "lastUpdate": "2021-04-30T15:22:00+00:00"
      }
    },
    ...
  ]
}
```

#### Attributes

| description | (string) The name or description of the item. |
| --- | --- |
