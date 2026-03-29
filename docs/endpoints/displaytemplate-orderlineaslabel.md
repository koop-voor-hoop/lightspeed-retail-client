---
title: DisplayTemplate OrderLineAsLabel
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-OrderLineAsLabel/
---

# DisplayTemplate OrderLineAsLabel

#### Description

Uses a print templates to print out one or more item labels based on purchase order lines. You can query the endpoint like the [OrderLine endpoint](https://developers.lightspeedhq.com/retail/endpoints/OrderLine) or request a single order line by orderLineID.

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

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- Item
- Item.ItemVendorNums
- Item.Note
- Item.Category
- Item.DefaultVendor
- Item.ItemMatrix
- Item.Manufacturer
- Order.Vendor

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### Label Fields

| copies | (integer) The number of copies of this label that should be printed. This comes from the OrderLine.checkedIn by default, but if you include the query parameter all_labels=true, it will be the OrderLine.quantity. |
| --- | --- |
| itemID | (integer) The foreign ID for the item to print on this label. |

#### Metadata Fields

Some DisplayTemplate endpoints each load specific metadata for use in the print template.

| currency_symbol | (string) The currency symbol (‘$’, ‘£’, etc.) used on the account. |
| --- | --- |
| price | (float) The item’s default price for the shop printing the label. |

#### Sortable Fields

- orderLineID

#### See Also

- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)

---

### GET All OrderLines as Labels

Retrieve item labels labels for all OrderLines available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/OrderLineAsLabel.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/OrderLineAsLabel.json"
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
            "itemID": "282",
            "Order": {
              "vendorID": "12",
              "Vendor": {
                "vendorID": "12",
                "name": "vendor name",
              }
            },
            "Item": {
                "itemID": "282",
                "systemSku": "210000000282",
                "defaultCost": "0",
                "avgCost": "0",
                "discountable": "true",
                "tax": "true",
                "archived": "false",
                "itemType": "default",
                "serialized": "false",
                "description": "2 -> S L",
                "modelYear": "0",
                "upc": "",
                "ean": "",
                "customSku": "",
                "manufacturerSku": "",
                "createTime": "2021-05-17T16:53:06+00:00",
                "timeStamp": "2021-06-19T13:47:54+00:00",
                "publishToEcom": "false",
                "categoryID": "0",
                "taxClassID": "0",
                "departmentID": "0",
                "itemMatrixID": "5",
                "itemAttributesID": "9",
                "manufacturerID": "0",
                "noteID": "0",
                "seasonID": "0",
                "defaultVendorID": "0",
                "ItemVendorNums": {
                    "ItemVendorNum": {
                        "itemVendorNumID": "13",
                        "value": "fluy",
                        "timeStamp": "2021-06-19T13:47:37+00:00",
                        "itemID": "282",
                        "catalogVendorItemID": "0",
                        "vendorID": "12"
                    }
                },
                "Prices": {
                    "ItemPrice": [
                        {
                            "amount": "10",
                            "useTypeID": "1",
                            "useType": "Default"
                        },
                        {
                            "amount": "0",
                            "useTypeID": "2",
                            "useType": "MSRP"
                        }
                    ]
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
                "price": "10",
                "title": "Lightspeed Shop"
            }
        },
        {
            "copies": "15",
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
    ]
}
```

By default, only order lines whose `checkedIn` quantity is non-zero are returned. Use the query parameter `all_labels=true` to return labels for all order lines.

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Single Order Line as a Label

Retrieve a single order line record as a label by its orderLineID.

> Definition

```
GET /DisplayTemplate/OrderLineAsLabel/{orderLineID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/OrderLineAsLabel/{orderLineID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Label": {
        "copies": "15",
        "itemID": "290",
        "Order": {
          "vendorID": "12",
          "Vendor": {
            "vendorID": "12",
            "name": "vendor name",
          }
        },
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

| orderLineID | (integer)  The unique numeric identifier for the order line record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/OrderLineAsLabel/{orderLineID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/OrderLineAsLabel/{orderLineID}.html?template={template}"
```

#### Attributes

| orderLineID | (integer)  The unique numeric identifier for the order line record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **ItemLabel** template.
