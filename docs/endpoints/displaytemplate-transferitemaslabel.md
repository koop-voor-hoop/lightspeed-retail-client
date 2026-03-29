---
title: DisplayTemplate TransferItemAsLabel
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-TransferItemAsLabel/
---

# DisplayTemplate TransferItemAsLabel

#### Description

Uses a print templates to print out one or more item labels based on inventory transfer lines. You can query the endpoint like the [TransferItem endpoint](https://developers.lightspeedhq.com/retail/endpoints/TransferItem) or request a single transfer item by transferItemID.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Inventory → Transfers → Transfer view → Print Labels

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### Label Fields

| copies | (integer) The number of copies of this label that should be printed. This will the first one of TransferItem.received, TransferItem.sent, or TransferItem.toSend that is non-zero (in that order). |
| --- | --- |
| itemID | (integer) The foreign ID for the item to print on this label. |

#### Metadata Fields

Some DisplayTemplate endpoints each load specific metadata for use in the print template.

| currency_symbol | (string) The currency symbol (‘$’, ‘£’, etc.) used on the account. |
| --- | --- |
| price | (float) The item’s default price for the shop printing the label. |

#### Sortable Fields

- transferItemID

#### See Also

- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)

---

### GET All TransferItems as Labels

Retrieve item labels labels for all TransferItems available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/TransferItemAsLabel.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/TransferItemAsLabel.json"
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
            "copies": "5",
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
                "timeStamp": "2021-06-27T14:11:17+00:00",
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

### GET Single TransferItem as a Label

Retrieve a single transfer item record as a label by its transferItemID.

> Definition

```
GET /DisplayTemplate/TransferItemAsLabel/{transferItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/TransferItemAsLabel/{transferItemID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Label": {
        "copies": "10",
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
            "timeStamp": "2021-06-27T14:11:17+00:00",
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

| transferItemID | (integer)  The unique numeric identifier for the transfer item record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/TransferItemAsLabel/{transferItemID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/TransferItemAsLabel/{transferItemID}.html?template={template}"
```

#### Attributes

| transferItemID | (integer)  The unique numeric identifier for the transfer item record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **ItemLabel** template.
