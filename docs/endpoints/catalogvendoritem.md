---
title: CatalogVendorItem
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/CatalogVendorItem/
---

# CatalogVendorItem

#### Description

Items available in [vendor catalogs](https://retail-support.lightspeedhq.com/hc/en-us/articles/228840427-About-catalogs).

Unless specified with `catalogVendorID`, queries are limited to the currently configured vendor catalogs for this account.

Performing a POST/Create causes the specified `catalogVendorItemID` to be imported and an Item created in the current account.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |

#### Scopes Required

| employee:product_cost | true |
| --- | --- |

#### Additional Relations

- CatalogVendor

#### CatalogVendorItem Fields

| catalogVendorItemID | (integer) The unique numerical ID for the catalog vendor item. /API/V3/Account/{accountID}/CatalogVendorItem/{catalogVendorItemID} |
| --- | --- |
| vendorNumber | (string) The part number or ID assigned to this item by the Vendor. |
| description | (string) The name or description of the item. |
| category | (string) The suggested category of the item. |
| model | (string) The item’s model, usually a year. |
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
| CatalogVendor | (object) Catalog containing the item. |
| CatalogVendorAvailability | (collection) List of VendorAvailability objects describing where the item is available. |

#### Sortable Fields

- catalogVendorItemID
- timeStamp

---

### GET All Catalog Vendor Items

> Definition

```
GET /API/V3/Account/{accountID}/CatalogVendorItem.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CatalogVendorItem.json'
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CatalogVendorItem": [
    {
      "catalogVendorItemID": "37958731",
      "vendorNumber": "13M 001",
      "description": "Traveller RPG: Spinward Marches Map",
      "category": "",
      "model": "",
      "retailUnit": "1",
      "unitOfMeasurement": "",
      "cost": "0",
      "costLevel2": "0",
      "costLevel3": "0",
      "costLevel4": "0",
      "msrp": "19.47",
      "breakQty": "0",
      "breakPrice": "0",
      "manufacturerNumber": "",
      "brand": "",
      "upc": "9783941420533",
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
      "timeStamp": "2021-11-10T03:09:01+00:00",
      "catalogVendorID": "1222",
      "catalogMasterID": "0",
      "CatalogVendor": {
        "catalogVendorID": "1222",
        "name": "Alliance Game Distributors",
        "lastUpdate": "2021-04-30T15:22:00+00:00"
      }
    },
    {...}
  ]}
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Retrieve a Catalog Vendor Item

Retrieve a single Catalog Vendor Item by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/CatalogVendorItem/{catalogVendorItemID}.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CatalogVendorItem/{catalogVendorItemID}.json'
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CatalogVendorItem": {
    "catalogVendorItemID": "37958733",
    "vendorNumber": "1AG CH01",
    "description": "Cross Hares: Testing Ground",
    "category": "",
    "model": "",
    "retailUnit": "1",
    "unitOfMeasurement": "",
    "cost": "0",
    "costLevel2": "0",
    "costLevel3": "0",
    "costLevel4": "0",
    "msrp": "49.95",
    "breakQty": "0",
    "breakPrice": "0",
    "manufacturerNumber": "",
    "brand": "",
    "upc": "8500520050162",
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
    "timeStamp": "2021-11-10T03:09:01+00:00",
    "catalogVendorID": "1222"
  }
}
```

#### Attributes

| catalogVendorItemID | (integer) The primary ID. /API/V3/Account/{accountID}/CatalogVendorItem/{catalogVendorItemID} |
| --- | --- |
