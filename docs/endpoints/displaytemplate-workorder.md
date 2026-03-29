---
title: DisplayTemplate Workorder
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-Workorder/
---

# DisplayTemplate Workorder

#### Description

Uses a print template to print a work order.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Service → Workorders

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- Serialized
- Serialized.Item
- Discount
- WorkorderStatus
- WorkorderLines
- WorkorderLines.Item
- WorkorderLines.Employee
- WorkorderLines.Discount
- WorkorderLines.TaxClass
- WorkorderLines.SaleLine
- WorkorderItems
- WorkorderItems.Item
- WorkorderItems.Employee
- WorkorderItems.Discount
- WorkorderItems.Item
- WorkorderItems.SaleLine
- WorkorderItems.SaleLine.Serialized
- Customer
- Customer.Contact
- Customer.Note
- Shop
- Shop.Contact
- Shop.ReceiptSetup
- Employee

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### WorkOrder Fields

See the [WorkOrder endpoint](https://developers.lightspeedhq.com/retail/endpoints/Workorder).

#### Metadata Fields

Some DisplayTemplate endpoints each load specific metadata for use in the print template.

| labor | (float) The subtotal of labor charges on the work order before tax and discounts are applied. |
| --- | --- |
| parts | (float) The subtotal for parts on the work order before tax and discounts are applied. |
| discount | (float) The total discount on the work order. |
| tax | (float) The total tax charged on the work order |
| total | (float) The total of all charges on the work order after tax and discounts are applied. |

#### Sortable Fields

- workorderID

---

### GET All WorkOrders

Retrieve all workorder records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/WorkOrder.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/WorkOrder.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "Workorder": [
        {
            "workorderID": "1",
            "systemSku": "250000000001",
            "timeIn": "2021-06-26T17:21:37+00:00",
            "etaOut": "2021-06-27T17:21:00+00:00",
            "note": "Hem to 27\"",
            "warranty": "false",
            "tax": "false",
            "archived": "false",
            "hookIn": "",
            "hookOut": "",
            "saveParts": "false",
            "assignEmployeeToAll": "true",
            "timeStamp": "2021-06-27T14:39:31+00:00",
            "customerID": "1528",
            "discountID": "0",
            "employeeID": "1",
            "serializedID": "1",
            "shopID": "1",
            "saleID": "0",
            "saleLineID": "9",
            "workorderStatusID": "3",
            "Customer": {
                "customerID": "1528",
                "firstName": "Germana",
                "lastName": "Eslemont",
                "archived": "false",
                "title": "",
                "company": "",
                "companyRegistrationNumber": "",
                "vatNumber": "",
                "createTime": "2021-03-20T13:59:24+00:00",
                "timeStamp": "2021-05-18T18:52:24+00:00",
                "creditAccountID": "0",
                "customerTypeID": "0",
                "discountID": "0",
                "taxCategoryID": "0",
                "Contact": {
                    "custom": "est congue elementum",
                    "noEmail": "false",
                    "noPhone": "false",
                    "noMail": "false",
                    "timeStamp": "2021-05-18T18:52:24+00:00",
                    "Addresses": {
                        "ContactAddress": {
                            "address1": "Echevarría 383",
                            "city": "Pergamino",
                            "state": "Buenos Aires",
                            "stateCode": "",
                            "zip": "",
                            "country": "Argentina",
                            "countryCode": "AR"
                        }
                    },
                    "Phones": {
                        "ContactPhone": [
                            {
                                "number": "235-531-3445",
                                "useType": "Home"
                            },
                            {
                                "number": "351-839-3039",
                                "useType": "Work"
                            }
                        ]
                    },
                    "Emails": {
                        "ContactEmail": {
                            "address": "[email protected]",
                            "useType": "Primary"
                        }
                    },
                    "Websites": ""
                },
                "Note": {
                    "note": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
                    "isPublic": "false",
                    "timeStamp": "2021-03-20T16:59:24+00:00"
                }
            },
            "Employee": {
                "employeeID": "1",
                "firstName": "Jane",
                "lastName": "Doe",
                "lockOut": "false",
                "archived": "false",
                "timeStamp": "2021-06-26T17:18:17+00:00",
                "contactID": "1",
                "systemUserID": "508464",
                "clockInEmployeeHoursID": "0",
                "employeeRoleID": "4",
                "limitToShopID": "0",
                "lastShopID": "1",
                "lastSaleID": "11",
                "lastRegisterID": "1"
            },
            "Serialized": {
                "serializedID": "1",
                "colorName": "Blue",
                "sizeName": "26",
                "serial": "",
                "description": "Jeans",
                "timeStamp": "2021-06-26T17:21:56+00:00",
                "itemID": "0",
                "saleLineID": "0",
                "inventoryID": "0",
                "customerID": "1528"
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
                },
                "ReceiptSetup": {
                    "receiptSetupID": "1",
                    "generalMsg": "",
                    "workorderAgree": "I hereby authorize the repair work hereinafter set forth to be done along with the necessary material and agree that you are not responsible for loss or damage to vehicle or articles left in/on vehicle in case of fire, theft or any other cause beyond your control or for any delays caused by unavailability of parts or delays in parts shipments by supplier or transporter. I hereby grant you and/or your employees permission to operate the vehicle herein described on the streets or elsewhere for the purpose of testing and/or inspection. An express mechanic's lien is hereby acknowledged on above vehicle to secure the amount of the repair thereto.",
                    "creditcardAgree": "I agree to pay above total amount according to card issuer agreement.",
                    "hasLogo": "false",
                    "logo": "",
                    "logoHeight": "55",
                    "logoWidth": "225",
                    "header": ""
                }
            },
            "WorkorderStatus": {
                "workorderStatusID": "3",
                "name": "Waiting",
                "sortOrder": "2",
                "htmlColor": "",
                "systemValue": "waiting"
            },
            "WorkorderLines": {
                "WorkorderLine": [
                    {
                        "workorderLineID": "1",
                        "note": "Labor",
                        "timeStamp": "2021-06-27T14:39:04+00:00",
                        "approved": "false",
                        "warranty": "false",
                        "hours": "1",
                        "minutes": "0",
                        "unitPriceOverride": "5",
                        "done": "true",
                        "unitQuantity": "1",
                        "tax": "false",
                        "unitCost": "0",
                        "workorderID": "1",
                        "employeeID": "1",
                        "saleLineID": "10",
                        "saleID": "0",
                        "itemID": "0",
                        "discountID": "1",
                        "taxClassID": "2",
                        "Employee": {
                            "employeeID": "1",
                            "firstName": "Jane",
                            "lastName": "Doe",
                            "lockOut": "false",
                            "archived": "false",
                            "timeStamp": "2021-06-26T17:18:17+00:00",
                            "contactID": "1",
                            "systemUserID": "508464",
                            "clockInEmployeeHoursID": "0",
                            "employeeRoleID": "4",
                            "limitToShopID": "0",
                            "lastShopID": "1",
                            "lastSaleID": "11",
                            "lastRegisterID": "1"
                        },
                        "SaleLine": {
                            "saleLineID": "10",
                            "createTime": "2021-06-26T17:22:42+00:00",
                            "timeStamp": "2021-06-27T14:39:04+00:00",
                            "unitQuantity": "1",
                            "unitPrice": "5",
                            "normalUnitPrice": "0",
                            "discountAmount": "0",
                            "discountPercent": "0.05",
                            "avgCost": "0",
                            "fifoCost": "0",
                            "tax": "false",
                            "tax1Rate": "0.15",
                            "tax2Rate": "0",
                            "isLayaway": "false",
                            "isWorkorder": "true",
                            "isSpecialOrder": "false",
                            "displayableSubtotal": "4.75",
                            "displayableUnitPrice": "5",
                            "calcLineDiscount": "0.25",
                            "calcTransactionDiscount": "0",
                            "calcTotal": "4.75",
                            "calcSubtotal": "5",
                            "calcTax1": "0",
                            "calcTax2": "0",
                            "taxClassID": "2",
                            "customerID": "1528",
                            "discountID": "1",
                            "employeeID": "1",
                            "itemID": "0",
                            "noteID": "141",
                            "parentSaleLineID": "0",
                            "shopID": "1",
                            "taxCategoryID": "1",
                            "saleID": "0"
                        },
                        "Discount": {
                            "discountID": "1",
                            "name": "5 percentage",
                            "discountAmount": "0",
                            "discountPercent": "0.05",
                            "requireCustomer": "false",
                            "archived": "false",
                            "timeStamp": "2021-06-27T14:38:52+00:00"
                        },
                        "TaxClass": {
                            "taxClassID": "2",
                            "name": "Labor",
                            "timeStamp": "2021-01-30T17:33:37+00:00"
                        }
                    },
                    {
                        "workorderLineID": "2",
                        "note": "Thread",
                        "timeStamp": "2021-06-27T14:40:07+00:00",
                        "approved": "false",
                        "warranty": "false",
                        "hours": "0",
                        "minutes": "0",
                        "unitPriceOverride": "0.25",
                        "done": "false",
                        "unitQuantity": "1",
                        "tax": "true",
                        "unitCost": "0.1",
                        "workorderID": "1",
                        "employeeID": "1",
                        "saleLineID": "11",
                        "saleID": "0",
                        "itemID": "0",
                        "discountID": "0",
                        "taxClassID": "3",
                        "Employee": {
                            "employeeID": "1",
                            "firstName": "Jane",
                            "lastName": "Doe",
                            "lockOut": "false",
                            "archived": "false",
                            "timeStamp": "2021-06-26T17:18:17+00:00",
                            "contactID": "1",
                            "systemUserID": "508464",
                            "clockInEmployeeHoursID": "0",
                            "employeeRoleID": "4",
                            "limitToShopID": "0",
                            "lastShopID": "1",
                            "lastSaleID": "11",
                            "lastRegisterID": "1"
                        },
                        "SaleLine": {
                            "saleLineID": "11",
                            "createTime": "2021-06-27T14:39:53+00:00",
                            "timeStamp": "2021-06-27T14:40:07+00:00",
                            "unitQuantity": "1",
                            "unitPrice": "0.25",
                            "normalUnitPrice": "0",
                            "discountAmount": "0",
                            "discountPercent": "0",
                            "avgCost": "0.1",
                            "fifoCost": "0.1",
                            "tax": "true",
                            "tax1Rate": "0",
                            "tax2Rate": "0",
                            "isLayaway": "false",
                            "isWorkorder": "true",
                            "isSpecialOrder": "false",
                            "displayableSubtotal": "0.25",
                            "displayableUnitPrice": "0.25",
                            "calcLineDiscount": "0",
                            "calcTransactionDiscount": "0",
                            "calcTotal": "0.2874375",
                            "calcSubtotal": "0.25",
                            "calcTax1": "0.0125",
                            "calcTax2": "0.0249375",
                            "taxClassID": "3",
                            "customerID": "1528",
                            "discountID": "0",
                            "employeeID": "1",
                            "itemID": "0",
                            "noteID": "143",
                            "parentSaleLineID": "0",
                            "shopID": "1",
                            "taxCategoryID": "0",
                            "saleID": "0"
                        },
                        "TaxClass": {
                            "taxClassID": "3",
                            "name": "",
                            "timeStamp": "2021-06-27T14:39:53+00:00"
                        }
                    }
                ]
            },
            "m": {
                "labor": "5",
                "parts": "0.25",
                "discount": "0.25",
                "tax": "0.0374375",
                "total": "5.0374375"
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

### GET Single WorkOrder

Retrieve a single workorder record by its ID.

> Definition

```
GET /DisplayTemplate/WorkOrder/{workOrderID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/WorkOrder/{workOrderID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Workorder": {
        "workorderID": "1",
        "systemSku": "250000000001",
        "timeIn": "2021-06-26T17:21:37+00:00",
        "etaOut": "2021-06-27T17:21:00+00:00",
        "note": "Hem to 27\"",
        "warranty": "false",
        "tax": "false",
        "archived": "false",
        "hookIn": "",
        "hookOut": "",
        "saveParts": "false",
        "assignEmployeeToAll": "true",
        "timeStamp": "2021-06-27T14:39:31+00:00",
        "customerID": "1528",
        "discountID": "0",
        "employeeID": "1",
        "serializedID": "1",
        "shopID": "1",
        "saleID": "0",
        "saleLineID": "9",
        "workorderStatusID": "3",
        "Customer": {
            "customerID": "1528",
            "firstName": "Germana",
            "lastName": "Eslemont",
            "archived": "false",
            "title": "",
            "company": "",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "createTime": "2021-03-20T13:59:24+00:00",
            "timeStamp": "2021-05-18T18:52:24+00:00",
            "creditAccountID": "0",
            "customerTypeID": "0",
            "discountID": "0",
            "taxCategoryID": "0",
            "Contact": {
                "custom": "est congue elementum",
                "noEmail": "false",
                "noPhone": "false",
                "noMail": "false",
                "timeStamp": "2021-05-18T18:52:24+00:00",
                "Addresses": {
                    "ContactAddress": {
                        "address1": "Echevarría 383",
                        "city": "Pergamino",
                        "state": "Buenos Aires",
                        "stateCode": "",
                        "zip": "",
                        "country": "Argentina",
                        "countryCode": "AR"
                    }
                },
                "Phones": {
                    "ContactPhone": [
                        {
                            "number": "235-531-3445",
                            "useType": "Home"
                        },
                        {
                            "number": "351-839-3039",
                            "useType": "Work"
                        }
                    ]
                },
                "Emails": {
                    "ContactEmail": {
                        "address": "[email protected]",
                        "useType": "Primary"
                    }
                },
                "Websites": ""
            },
            "Note": {
                "note": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
                "isPublic": "false",
                "timeStamp": "2021-03-20T16:59:24+00:00"
            }
        },
        "Employee": {
            "employeeID": "1",
            "firstName": "Jane",
            "lastName": "Doe",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-06-26T17:18:17+00:00",
            "contactID": "1",
            "systemUserID": "508464",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "11",
            "lastRegisterID": "1"
        },
        "Serialized": {
            "serializedID": "1",
            "colorName": "Blue",
            "sizeName": "26",
            "serial": "",
            "description": "Jeans",
            "timeStamp": "2021-06-26T17:21:56+00:00",
            "itemID": "0",
            "saleLineID": "0",
            "inventoryID": "0",
            "customerID": "1528"
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
            },
            "ReceiptSetup": {
                "receiptSetupID": "1",
                "generalMsg": "",
                "workorderAgree": "I hereby authorize the repair work hereinafter set forth to be done along with the necessary material and agree that you are not responsible for loss or damage to vehicle or articles left in/on vehicle in case of fire, theft or any other cause beyond your control or for any delays caused by unavailability of parts or delays in parts shipments by supplier or transporter. I hereby grant you and/or your employees permission to operate the vehicle herein described on the streets or elsewhere for the purpose of testing and/or inspection. An express mechanic's lien is hereby acknowledged on above vehicle to secure the amount of the repair thereto.",
                "creditcardAgree": "I agree to pay above total amount according to card issuer agreement.",
                "hasLogo": "false",
                "logo": "",
                "logoHeight": "55",
                "logoWidth": "225",
                "header": ""
            }
        },
        "WorkorderStatus": {
            "workorderStatusID": "3",
            "name": "Waiting",
            "sortOrder": "2",
            "htmlColor": "",
            "systemValue": "waiting"
        },
        "WorkorderLines": {
            "WorkorderLine": [
                {
                    "workorderLineID": "1",
                    "note": "Labor",
                    "timeStamp": "2021-06-27T14:39:04+00:00",
                    "approved": "false",
                    "warranty": "false",
                    "hours": "1",
                    "minutes": "0",
                    "unitPriceOverride": "5",
                    "done": "true",
                    "unitQuantity": "1",
                    "tax": "false",
                    "unitCost": "0",
                    "workorderID": "1",
                    "employeeID": "1",
                    "saleLineID": "10",
                    "saleID": "0",
                    "itemID": "0",
                    "discountID": "1",
                    "taxClassID": "2",
                    "Employee": {
                        "employeeID": "1",
                        "firstName": "Jane",
                        "lastName": "Doe",
                        "lockOut": "false",
                        "archived": "false",
                        "timeStamp": "2021-06-26T17:18:17+00:00",
                        "contactID": "1",
                        "systemUserID": "508464",
                        "clockInEmployeeHoursID": "0",
                        "employeeRoleID": "4",
                        "limitToShopID": "0",
                        "lastShopID": "1",
                        "lastSaleID": "11",
                        "lastRegisterID": "1"
                    },
                    "SaleLine": {
                        "saleLineID": "10",
                        "createTime": "2021-06-26T17:22:42+00:00",
                        "timeStamp": "2021-06-27T14:39:04+00:00",
                        "unitQuantity": "1",
                        "unitPrice": "5",
                        "normalUnitPrice": "0",
                        "discountAmount": "0",
                        "discountPercent": "0.05",
                        "avgCost": "0",
                        "fifoCost": "0",
                        "tax": "false",
                        "tax1Rate": "0.15",
                        "tax2Rate": "0",
                        "isLayaway": "false",
                        "isWorkorder": "true",
                        "isSpecialOrder": "false",
                        "displayableSubtotal": "4.75",
                        "displayableUnitPrice": "5",
                        "calcLineDiscount": "0.25",
                        "calcTransactionDiscount": "0",
                        "calcTotal": "4.75",
                        "calcSubtotal": "5",
                        "calcTax1": "0",
                        "calcTax2": "0",
                        "taxClassID": "2",
                        "customerID": "1528",
                        "discountID": "1",
                        "employeeID": "1",
                        "itemID": "0",
                        "noteID": "141",
                        "parentSaleLineID": "0",
                        "shopID": "1",
                        "taxCategoryID": "1",
                        "saleID": "0"
                    },
                    "Discount": {
                        "discountID": "1",
                        "name": "5 percentage",
                        "discountAmount": "0",
                        "discountPercent": "0.05",
                        "requireCustomer": "false",
                        "archived": "false",
                        "timeStamp": "2021-06-27T14:38:52+00:00"
                    },
                    "TaxClass": {
                        "taxClassID": "2",
                        "name": "Labor",
                        "timeStamp": "2021-01-30T17:33:37+00:00"
                    }
                },
                {
                    "workorderLineID": "2",
                    "note": "Thread",
                    "timeStamp": "2021-06-27T14:40:07+00:00",
                    "approved": "false",
                    "warranty": "false",
                    "hours": "0",
                    "minutes": "0",
                    "unitPriceOverride": "0.25",
                    "done": "false",
                    "unitQuantity": "1",
                    "tax": "true",
                    "unitCost": "0.1",
                    "workorderID": "1",
                    "employeeID": "1",
                    "saleLineID": "11",
                    "saleID": "0",
                    "itemID": "0",
                    "discountID": "0",
                    "taxClassID": "3",
                    "Employee": {
                        "employeeID": "1",
                        "firstName": "Jane",
                        "lastName": "Doe",
                        "lockOut": "false",
                        "archived": "false",
                        "timeStamp": "2021-06-26T17:18:17+00:00",
                        "contactID": "1",
                        "systemUserID": "508464",
                        "clockInEmployeeHoursID": "0",
                        "employeeRoleID": "4",
                        "limitToShopID": "0",
                        "lastShopID": "1",
                        "lastSaleID": "11",
                        "lastRegisterID": "1"
                    },
                    "SaleLine": {
                        "saleLineID": "11",
                        "createTime": "2021-06-27T14:39:53+00:00",
                        "timeStamp": "2021-06-27T14:40:07+00:00",
                        "unitQuantity": "1",
                        "unitPrice": "0.25",
                        "normalUnitPrice": "0",
                        "discountAmount": "0",
                        "discountPercent": "0",
                        "avgCost": "0.1",
                        "fifoCost": "0.1",
                        "tax": "true",
                        "tax1Rate": "0",
                        "tax2Rate": "0",
                        "isLayaway": "false",
                        "isWorkorder": "true",
                        "isSpecialOrder": "false",
                        "displayableSubtotal": "0.25",
                        "displayableUnitPrice": "0.25",
                        "calcLineDiscount": "0",
                        "calcTransactionDiscount": "0",
                        "calcTotal": "0.2874375",
                        "calcSubtotal": "0.25",
                        "calcTax1": "0.0125",
                        "calcTax2": "0.0249375",
                        "taxClassID": "3",
                        "customerID": "1528",
                        "discountID": "0",
                        "employeeID": "1",
                        "itemID": "0",
                        "noteID": "143",
                        "parentSaleLineID": "0",
                        "shopID": "1",
                        "taxCategoryID": "0",
                        "saleID": "0"
                    },
                    "TaxClass": {
                        "taxClassID": "3",
                        "name": "",
                        "timeStamp": "2021-06-27T14:39:53+00:00"
                    }
                }
            ]
        },
        "m": {
            "labor": "5",
            "parts": "0.25",
            "discount": "0.25",
            "tax": "0.0374375",
            "total": "5.0374375"
        }
    }
}
```

#### Attributes

| workOrderID | (integer)  The unique numeric identifier for the workorder record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/WorkOrder/{workOrderID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/WorkOrder/{workOrderID}.html?template={template}"
```

#### Attributes

| workOrderID | (integer)  The unique numeric identifier for the workorder record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **WorkorderReceipt** template.
