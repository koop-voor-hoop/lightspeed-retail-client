---
title: DisplayTemplate Order
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-Order/
---

# DisplayTemplate Order

#### Description

Uses a print template to print a purchase order.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Inventory → Purchase Orders

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- OrderLines
- OrderLines.Item
- OrderLines.Item.ItemVendorNums
- OrderLines.SpecialOrders
- Note
- Vendor
- Vendor.Contact
- Shop
- Shop.Contact

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### Order Fields

See the [Order endpoint](https://developers.lightspeedhq.com/retail/endpoints/Order).

#### Metadata Fields

Some DisplayTemplate endpoints each load specific metadata for use in the print template.

| subtotal | (float) The subtotal of the purchase before that discount is applied. |
| --- | --- |
| totalDiscount | (float) The total of all the discounts added to the order. |
| total | (float) The total of the purchase order after the discount is applied. |
| shipping | (float) The shipping costs the vendor adds to the order. |
| other | (float) The other costs the vendor adds to the order. |
| cost | (float) The original cost of the order line (before discount if there is a discount). |
| total | (float) The order line total. |

#### Sortable Fields

- orderID

---

### GET All Orders

Retrieve all purchase order records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/Order.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Order.json"
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
            "orderID": "1",
            "orderedDate": "2021-06-14T04:00:00+00:00",
            "receivedDate": "2021-06-14T04:00:00+00:00",
            "shipInstructions": "Priority Shipping",
            "stockInstructions": "",
            "shipCost": "0",
            "otherCost": "0",
            "complete": "true",
            "archived": "false",
            "discount": "0",
            "totalDiscount": "0",
            "totalQuantity": "15",
            "arrivalDate": "2021-06-30T04:00:00+00:00",
            "timeStamp": "2021-06-14T19:36:54+00:00",
            "refNum": "123456789",
            "vendorID": "12",
            "noteID": "134",
            "shopID": "1",
            "Vendor": {
                "vendorID": "12",
                "name": "Smith & Smith",
                "archived": "false",
                "accountNumber": "",
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
                "timeStamp": "2021-06-19T13:47:27+00:00",
                "contactID": "1646",
                "noteID": "132",
                "Contact": {
                    "contactID": "1646",
                    "custom": "",
                    "noEmail": "true",
                    "noPhone": "true",
                    "noMail": "true",
                    "timeStamp": "2021-06-19T13:47:27+00:00",
                    "Addresses": "",
                    "Phones": "",
                    "Emails": "",
                    "Websites": ""
                }
            },
            "Note": {
                "noteID": "134",
                "note": "General Notes for this purchase order",
                "isPublic": "false",
                "timeStamp": "2021-06-14T19:15:33+00:00"
            },
            "Shop": {
                "shopID": "1",
                "name": "Lightspeed Shop",
                "serviceRate": "0",
                "timeZone": "America/New_York",
                "taxLabor": "false",
                "labelTitle": "Shop Name",
                "labelMsrp": "false",
                "archived": "false",
                "timeStamp": "2021-06-13T14:32:41+00:00",
                "companyRegistrationNumber": "",
                "vatNumber": "",
                "zebraBrowserPrint": "true",
                "contactID": "2",
                "taxCategoryID": "1",
                "receiptSetupID": "1",
                "gatewayConfigID": "",
                "priceLevelID": "1",
                "Contact": {
                    "contactID": "2",
                    "custom": "",
                    "noEmail": "false",
                    "noPhone": "false",
                    "noMail": "false",
                    "timeStamp": "2021-06-13T14:32:41+00:00",
                    "Addresses": {
                        "ContactAddress": {
                            "address1": "700 St-Antoine E",
                            "city": "Montreal",
                            "state": "Quebec",
                            "stateCode": "QC",
                            "zip": "H2Y 1A6",
                            "country": "Canada",
                            "countryCode": "CA"
                        }
                    },
                    "Phones": {
                        "ContactPhone": {
                            "number": "8669321801",
                            "useType": "Work"
                        }
                    },
                    "Emails": {
                        "ContactEmail": {
                            "address": "[email protected]",
                            "useType": "Primary"
                        }
                    },
                    "Websites": ""
                }
            },
            "OrderLines": {
                "OrderLine": {
                    "orderLineID": "1",
                    "quantity": "15",
                    "price": "17",
                    "originalPrice": "17",
                    "checkedIn": "15",
                    "numReceived": "0",
                    "timeStamp": "2021-06-14T19:36:53+00:00",
                    "total": "255",
                    "orderID": "1",
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
                        }
                    },
                    "m": {
                        "cost": "17",
                        "total": "17"
                    }
                }
            },
            "m": {
                "subtotal": "255",
                "totalDiscount": "0",
                "total": "255",
                "shipping": "0",
                "other": "0"
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

### GET Single Order

Retrieve a single purchase order record by its ID.

> Definition

```
GET /DisplayTemplate/Order/{orderID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Order/{orderID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Order": {
        "orderID": "1",
        "orderedDate": "2021-06-14T04:00:00+00:00",
        "receivedDate": "2021-06-14T04:00:00+00:00",
        "shipInstructions": "Priority Shipping",
        "stockInstructions": "",
        "shipCost": "0",
        "otherCost": "0",
        "complete": "true",
        "archived": "false",
        "discount": "0",
        "totalDiscount": "0",
        "totalQuantity": "15",
        "arrivalDate": "2021-06-30T04:00:00+00:00",
        "timeStamp": "2021-06-14T19:36:54+00:00",
        "refNum": "123456789",
        "vendorID": "12",
        "noteID": "134",
        "shopID": "1",
        "Vendor": {
            "vendorID": "12",
            "name": "Smith & Smith",
            "archived": "false",
            "accountNumber": "",
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
            "timeStamp": "2021-06-19T15:01:40+00:00",
            "contactID": "1646",
            "noteID": "132",
            "Contact": {
                "contactID": "1646",
                "custom": "",
                "noEmail": "true",
                "noPhone": "true",
                "noMail": "true",
                "timeStamp": "2021-06-19T15:01:40+00:00",
                "Addresses": "",
                "Phones": "",
                "Emails": "",
                "Websites": ""
            }
        },
        "Note": {
            "noteID": "134",
            "note": "General Notes for this purchase order",
            "isPublic": "false",
            "timeStamp": "2021-06-14T19:15:33+00:00"
        },
        "Shop": {
            "shopID": "1",
            "name": "Lightspeed Shop",
            "serviceRate": "0",
            "timeZone": "America/New_York",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-06-13T14:32:41+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "true",
            "contactID": "2",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "gatewayConfigID": "",
            "priceLevelID": "1",
            "Contact": {
                "contactID": "2",
                "custom": "",
                "noEmail": "false",
                "noPhone": "false",
                "noMail": "false",
                "timeStamp": "2021-06-13T14:32:41+00:00",
                "Addresses": {
                    "ContactAddress": {
                        "address1": "700 St-Antoine E",
                        "city": "Montreal",
                        "state": "Quebec",
                        "stateCode": "QC",
                        "zip": "H2Y 1A6",
                        "country": "Canada",
                        "countryCode": "CA"
                    }
                },
                "Phones": {
                    "ContactPhone": {
                        "number": "8669321801",
                        "useType": "Work"
                    }
                },
                "Emails": {
                    "ContactEmail": {
                        "address": "[email protected]",
                        "useType": "Primary"
                    }
                },
                "Websites": ""
            }
        },
        "OrderLines": {
            "OrderLine": {
                "orderLineID": "1",
                "quantity": "15",
                "price": "17",
                "originalPrice": "17",
                "checkedIn": "15",
                "numReceived": "0",
                "timeStamp": "2021-06-14T19:36:53+00:00",
                "total": "255",
                "orderID": "1",
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
                    }
                },
                "m": {
                    "cost": "17",
                    "total": "17"
                }
            }
        },
        "m": {
            "subtotal": "255",
            "totalDiscount": "0",
            "total": "255",
            "shipping": "0",
            "other": "0"
        }
    }
}
```

#### Attributes

| orderID | (integer)  The unique numeric identifier for the order record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/Order/{orderID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Order/{orderID}.html?template={template}"
```

#### Attributes

| orderID | (integer)  The unique numeric identifier for the order record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **Order** template.
