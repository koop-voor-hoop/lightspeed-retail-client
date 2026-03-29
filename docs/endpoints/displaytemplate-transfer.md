---
title: DisplayTemplate Transfer
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-Transfer/
---

# DisplayTemplate Transfer

#### Description

Uses a print template to print an inventory transfer between shop.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Inventory → Transfers

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- TransferItems
- TransferItems.Item

#### Scopes Required

| employee:transfers | true |
| --- | --- |

#### Transfer Fields

See the [Transfer endpoint](https://developers.lightspeedhq.com/retail/endpoints/Transfer).

#### Metadata Fields

No metadata on this endpoint.

#### Sortable Fields

- transferID

### GET All Orders

Retrieve all transfer records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/Transfer.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Transfer.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "Transfer": [
        {
            "transferID": "1",
            "sent": "false",
            "received": "false",
            "note": "",
            "archived": "false",
            "timeStamp": "2021-06-26T18:26:25+00:00",
            "TransferFrom": {
                "employeeID": "0",
                "shopID": "1",
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
                    "ccGatewayID": "0",
                    "gatewayConfigID": "",
                    "priceLevelID": "1",
                    "Contact": {
                        "custom": "",
                        "noEmail": "false",
                        "noPhone": "false",
                        "noMail": "false",
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
                        "Websites": "",
                        "timeStamp": "2021-06-13T14:32:41+00:00"
                    }
                }
            },
            "TransferTo": {
                "needBy": "2021-06-28T18:26:00+00:00",
                "employeeID": "0",
                "shopID": "2",
                "Shop": {
                    "shopID": "2",
                    "name": "Second Location",
                    "serviceRate": "0",
                    "timeZone": "America/New_York",
                    "taxLabor": "true",
                    "labelTitle": "Shop Name",
                    "labelMsrp": "false",
                    "archived": "false",
                    "timeStamp": "2021-06-26T18:23:32+00:00",
                    "companyRegistrationNumber": "",
                    "vatNumber": "",
                    "zebraBrowserPrint": "false",
                    "contactID": "1648",
                    "taxCategoryID": "1",
                    "receiptSetupID": "0",
                    "ccGatewayID": "0",
                    "gatewayConfigID": "",
                    "priceLevelID": "1",
                    "Contact": {
                        "custom": "",
                        "noEmail": "true",
                        "noPhone": "true",
                        "noMail": "true",
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
                                "number": "514-123-4567",
                                "useType": "Work"
                            }
                        },
                        "Emails": "",
                        "Websites": "",
                        "timeStamp": "2021-06-26T18:23:32+00:00"
                    }
                }
            },
            "TransferItems": {
                "TransferItem": {
                    "transferItemID": "1",
                    "toSend": "10",
                    "toReceive": "0",
                    "sent": "0",
                    "received": "0",
                    "sentValue": "0",
                    "receivedValue": "0",
                    "comment": "",
                    "timeStamp": "2021-06-26T18:26:30+00:00",
                    "transferID": "1",
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
                        "publishToEcom": "false",
                        "timeStamp": "2021-06-14T16:47:49+00:00",
                        "createTime": "2021-06-14T16:47:20+00:00",
                        "categoryID": "2",
                        "taxClassID": "1",
                        "departmentID": "0",
                        "itemMatrixID": "0",
                        "itemAttributesID": "0",
                        "manufacturerID": "181",
                        "seasonID": "0",
                        "defaultVendorID": "12",
                        "Prices": {
                            "ItemPrice": [
                                {
                                    "amount": "23",
                                    "useType": "Default",
                                    "useTypeID": "1"
                                },
                                {
                                    "amount": "25",
                                    "useType": "MSRP",
                                    "useTypeID": "2"
                                }
                            ]
                        }
                    }
                }
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

### GET Single Transfer

Retrieve a single transfer record by its ID.

> Definition

```
GET /DisplayTemplate/Transfer/{transferID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Transfer/{transferID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "sent": "false",
        "received": "false",
        "note": "",
        "archived": "false",
        "timeStamp": "2021-06-26T18:26:25+00:00",
        "TransferFrom": {
            "employeeID": "0",
            "shopID": "1",
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
                "ccGatewayID": "0",
                "gatewayConfigID": "",
                "priceLevelID": "1",
                "Contact": {
                    "custom": "",
                    "noEmail": "false",
                    "noPhone": "false",
                    "noMail": "false",
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
                    "Websites": "",
                    "timeStamp": "2021-06-13T14:32:41+00:00"
                }
            }
        },
        "TransferTo": {
            "needBy": "2021-06-28T18:26:00+00:00",
            "employeeID": "0",
            "shopID": "2",
            "Shop": {
                "shopID": "2",
                "name": "Second Location",
                "serviceRate": "0",
                "timeZone": "America/New_York",
                "taxLabor": "true",
                "labelTitle": "Shop Name",
                "labelMsrp": "false",
                "archived": "false",
                "timeStamp": "2021-06-26T18:23:32+00:00",
                "companyRegistrationNumber": "",
                "vatNumber": "",
                "zebraBrowserPrint": "false",
                "contactID": "1648",
                "taxCategoryID": "1",
                "receiptSetupID": "0",
                "ccGatewayID": "0",
                "gatewayConfigID": "",
                "priceLevelID": "1",
                "Contact": {
                    "custom": "",
                    "noEmail": "true",
                    "noPhone": "true",
                    "noMail": "true",
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
                            "number": "514-123-4567",
                            "useType": "Work"
                        }
                    },
                    "Emails": "",
                    "Websites": "",
                    "timeStamp": "2021-06-26T18:23:32+00:00"
                }
            }
        },
        "TransferItems": {
            "TransferItem": {
                "transferItemID": "1",
                "toSend": "10",
                "toReceive": "0",
                "sent": "0",
                "received": "0",
                "sentValue": "0",
                "receivedValue": "0",
                "comment": "",
                "timeStamp": "2021-06-26T18:26:30+00:00",
                "transferID": "1",
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
                    "publishToEcom": "false",
                    "timeStamp": "2021-06-14T16:47:49+00:00",
                    "createTime": "2021-06-14T16:47:20+00:00",
                    "categoryID": "2",
                    "taxClassID": "1",
                    "departmentID": "0",
                    "itemMatrixID": "0",
                    "itemAttributesID": "0",
                    "manufacturerID": "181",
                    "seasonID": "0",
                    "defaultVendorID": "12",
                    "Prices": {
                        "ItemPrice": [
                            {
                                "amount": "23",
                                "useType": "Default",
                                "useTypeID": "1"
                            },
                            {
                                "amount": "25",
                                "useType": "MSRP",
                                "useTypeID": "2"
                            }
                        ]
                    }
                }
            }
        }
    }
}
```

#### Attributes

| transferID | (integer)  The unique numeric identifier for the transfer record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/Transfer/{transferID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Transfer/{transferID}.html?template={template}"
```

#### Attributes

| transferID | (integer)  The unique numeric identifier for the transfer record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **TransferReceipt** template.
