---
title: DisplayTemplate ItemAsLabel
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-ItemAsLabel/
---

# DisplayTemplate ItemAsLabel

#### Description

Uses a print templates to print out one or more item labels. You can query the endpoint like the [Item endpoint](https://developers.lightspeedhq.com/retail/endpoints/Item) or request a single item by itemID.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Inventory → Purchase Orders → Purchase Order view → Print Labels

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | False |
| PUT/Update | False |
| DELETE/Delete | False |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- Item
- Item.ItemVendorNums
- Item.Note
- Item.Category
- Item.DefaultVendor
- Item.ItemMatrix
- Item.Manufacturer

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### Label Fields

| copies | (integer) The number of copies of this label that should be printed. You can set this with the copies URL parameter. |
| --- | --- |
| itemID | (integer) The foreign ID for the item to print on this label. |

#### Sortable Fields

- itemID

#### Metadata Fields

Some DisplayTemplate endpoints each load specific metadata for use in the print template.

| currency_symbol | (string) The currency symbol (‘$’, ‘£’, etc.) used on the account. |
| --- | --- |
| price | (float) The item’s default price for the shop printing the label. |

#### See Also

- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)

---

### GET All Items as Labels

Retrieve all item records available in the account as labels.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/ItemAsLabel.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/ItemAsLabel.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "Label": [
        {
            "copies": "1",
            "itemID": "290",
            "Item": {
                "itemID": "290",
                "systemSku": "210000000290",
                "defaultCost": "17",
                "avgCost": "17",
                "discountable": "true",
                "tax": "true",
                "archived": "false",
                "itemType": "default",
                "serialized": "false",
                "description": "T-shirt",
                "modelYear": "0",
                "upc": "725272730706",
                "ean": "",
                "customSku": "TSHRT-45",
                "manufacturerSku": "7645-LS-TS",
                "createTime": "2021-06-14T16:47:20+00:00",
                "timeStamp": "2021-06-14T16:47:49+00:00",
                "publishToEcom": "false",
                "categoryID": "2",
                "taxClassID": "1",
                "departmentID": "0",
                "itemMatrixID": "0",
                "itemAttributesID": "0",
                "manufacturerID": "181",
                "noteID": "133",
                "seasonID": "0",
                "defaultVendorID": "12",
                "ItemVendorNums": {
                    "ItemVendorNum": {
                        "itemVendorNumID": "12",
                        "value": "7645-LS-TS-123",
                        "timeStamp": "2021-06-14T16:47:49+00:00",
                        "itemID": "290",
                        "catalogVendorItemID": "0",
                        "vendorID": "12"
                    }
                },
                "ItemMatrix": {
                    "itemMatrixID": "1",
                    "description": "red",
                    "tax": "true",
                    "defaultCost": "81.38",
                    "itemType": "default",
                    "serialized": "false",
                    "modelYear": "0",
                    "archived": "false",
                    "timeStamp": "2021-08-17T15:23:09+00:00",
                    "itemAttributeSetID": "3",
                    "manufacturerID": "0",
                    "categoryID": "0",
                    "defaultVendorID": "0",
                    "taxClassID": "1",
                    "seasonID": "0",
                    "departmentID": "0",
                    "itemECommerceID": "0",
                    "Prices": {
                        "ItemPrice": [
                            {
                                "amount": "999",
                                "useTypeID": "1",
                                "useType": "Default"
                            },
                            {
                                "amount": "5",
                                "useTypeID": "2",
                                "useType": "MSRP"
                            }
                        ]
                    },
                    "attribute1Values": ""
                },
                "Vendor": {
                    "vendorID": "3",
                    "name": "Bike Mine",
                    "archived": "false",
                    "accountNumber": "0",
                    "integrationName": "",
                    "integrationLogin": "",
                    "integrationPassword": "",
                    "integrationAccount": "",
                    "integrationEnabled": "0",
                    "priceLevel": "",
                    "updatePrice": "false",
                    "updateCost": "false",
                    "updateDescription": "false",
                    "shareSellThrough": "false",
                    "contactID": "0",
                    "noteID": "0",
                    "currencyRateID": "0"
                },
                "Note": {
                    "noteID": "2",
                    "note": "",
                    "isPublic": "false",
                    "timeStamp": "2021-08-16T19:37:57+00:00"
                },
                "Category": {
                    "categoryID": "47",
                    "name": "CHEMICALS",
                    "nodeDepth": "1",
                    "fullPathName": "OIL & CHEM/CHEMICALS",
                    "leftNode": "62",
                    "rightNode": "63",
                    "createTime": "2021-01-17T01:31:37+00:00",
                    "timeStamp": "2021-12-06T01:59:04+00:00",
                    "parentID": "46"
                },
                "Manufacturer": {
                    "manufacturerID": "32",
                    "name": "BIKEMASTER",
                    "createTime": "2021-12-06T01:59:04+00:00",
                    "timeStamp": "2021-01-17T01:31:37+00:00"
                },
                "Prices": {
                    "ItemPrice": [
                        {
                            "amount": "23",
                            "useTypeID": "1",
                            "useType": "Default"
                        },
                        {
                            "amount": "25",
                            "useTypeID": "2",
                            "useType": "MSRP"
                        }
                    ]
                }
            },
            "m": {
                "currency_symbol": "$",
                "price": "23",
                "title": "Lightspeed Shop"
            }
        },
        ...
    ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Single Item as a Label

Retrieve a single item record as a label by its itemID.

> Definition

```
GET /DisplayTemplate/ItemAsLabel/{itemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/ItemAsLabel/{itemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Label": {
    "copies": "1",
    "itemID": "290",
    "Item": {
      "itemID": "290",
      "systemSku": "210000000290",
      "defaultCost": "17",
      "avgCost": "17",
      "discountable": "true",
      "tax": "true",
      "archived": "false",
      "itemType": "default",
      "serialized": "false",
      "description": "T-shirt",
      "modelYear": "0",
      "upc": "725272730706",
      "ean": "",
      "customSku": "TSHRT-45",
      "manufacturerSku": "7645-LS-TS",
      "createTime": "2021-06-14T16:47:20+00:00",
      "timeStamp": "2021-06-14T16:47:49+00:00",
      "publishToEcom": "false",
      "categoryID": "2",
      "taxClassID": "1",
      "departmentID": "0",
      "itemMatrixID": "0",
      "itemAttributesID": "0",
      "manufacturerID": "181",
      "noteID": "133",
      "seasonID": "0",
      "defaultVendorID": "12",
      "ItemVendorNums": {
        "ItemVendorNum": {
          "itemVendorNumID": "12",
          "value": "7645-LS-TS-123",
          "timeStamp": "2021-06-14T16:47:49+00:00",
          "itemID": "290",
          "catalogVendorItemID": "0",
          "vendorID": "12"
        }
      },
      "Prices": {
        "ItemPrice": [
          {
            "amount": "23",
            "useTypeID": "1",
            "useType": "Default"
          },
          {
            "amount": "25",
            "useTypeID": "2",
            "useType": "MSRP"
          }
        ]
      },
      "ItemMatrix": {
        "itemMatrixID": "1",
        "description": "red",
        "tax": "true",
        "defaultCost": "81.38",
        "itemType": "default",
        "serialized": "false",
        "modelYear": "0",
        "archived": "false",
        "timeStamp": "2021-08-17T15:23:09+00:00",
        "itemAttributeSetID": "3",
        "manufacturerID": "0",
        "categoryID": "0",
        "defaultVendorID": "0",
        "taxClassID": "1",
        "seasonID": "0",
        "departmentID": "0",
        "itemECommerceID": "0",
        "Prices": {
          "ItemPrice": [
            {
              "amount": "999",
              "useTypeID": "1",
              "useType": "Default"
            },
            {
              "amount": "5",
              "useTypeID": "2",
              "useType": "MSRP"
            }
          ]
        },
        "attribute1Values": ""
      },
      "Vendor": {
        "vendorID": "3",
        "name": "Bike Mine",
        "archived": "false",
        "accountNumber": "0",
        "integrationName": "",
        "integrationLogin": "",
        "integrationPassword": "",
        "integrationAccount": "",
        "integrationEnabled": "0",
        "priceLevel": "",
        "updatePrice": "false",
        "updateCost": "false",
        "updateDescription": "false",
        "shareSellThrough": "false",
        "contactID": "0",
        "noteID": "0",
        "currencyRateID": "0"
      },
      "Note": {
        "noteID": "2",
        "note": "",
        "isPublic": "false",
        "timeStamp": "2021-08-16T19:37:57+00:00"
      },
      "Category": {
        "categoryID": "47",
        "name": "CHEMICALS",
        "nodeDepth": "1",
        "fullPathName": "OIL & CHEM/CHEMICALS",
        "leftNode": "62",
        "rightNode": "63",
        "createTime": "2021-01-17T01:31:37+00:00",
        "timeStamp": "2021-12-06T01:59:04+00:00",
        "parentID": "46"
      },
      "Manufacturer": {
        "manufacturerID": "32",
        "name": "BIKEMASTER",
        "createTime": "2021-12-06T01:59:04+00:00",
        "timeStamp": "2021-01-17T01:31:37+00:00"
      }
    },
    "m": {
      "currency_symbol": "$",
      "price": "23",
      "title": "Lightspeed Shop"
    }
  }
}
```

#### Attributes

| itemID | (integer)  The unique numeric identifier for the item record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/ItemAsLabel/{itemID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/ItemAsLabel/{itemID}.html?template={template}&copies={copies}"
```

#### Attributes

| itemID | (integer)  The unique numeric identifier for the item record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |
| copies | (integer) The number of copies to print. The default value is 1. |

The user interface uses the **ItemLabel** template.
