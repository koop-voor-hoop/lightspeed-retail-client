---
title: DisplayTemplate Sale
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-Sale/
---

# DisplayTemplate Sale

#### Description

Uses a print template to print out sales receipts/invoices.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Register → New Sale → Complete → Print Receipt

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- SaleLines
- SaleLines.Item
- SaleLines.Item.Category
- SaleLines.Item.TagRelations
- SaleLines.Item.TagRelations.Tag
- SaleLines.Discount
- SaleLines.TaxClass
- SaleLines.TaxCategory
- SaleLines.Note
- SaleLines.Employee
- SaleLines.Serialized
- SalePayments
- SalePayments.PaymentType
- SalePayments.CCCharge
- SalePayments.CreditAccount
- ShipTo
- ShipTo.Contact
- Discount
- Quote
- TaxCategory
- Customer
- Customer.Contact
- Customer.CreditAccount
- Customer.Note
- Customer.Layaways
- Customer.Layaways.Item
- Customer.Layaways.Note
- Customer.Layaways.Discount
- Customer.Layaways.Shop
- Customer.Layaways.Serialized
- Customer.SpecialOrders
- Customer.SpecialOrders.Item
- Customer.SpecialOrders.Note
- Customer.SpecialOrders.Discount
- Customer.SpecialOrders.Shop
- Customer.SpecialOrders.Serialized
- Customer.Workorders
- Customer.Workorders.Item
- Customer.Workorders.Note
- Customer.Workorders.Discount
- Customer.Workorders.Employee
- Customer.Workorders.Shop
- Customer.Workorders.Serialized
- Shop
- Shop.Contact
- Shop.ReceiptSetup
- Employee
- Register

*Customer.Layaways*, *Customer.SpecialOrders* and *Customer.Workorders* load each type of open document connected to the customer. *Shop.ReceiptSetup* loads the receipt printing options for the shop.

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Sale Fields

See the [Sale endpoint](https://developers.lightspeedhq.com/retail/endpoints/Sale).

#### Metadata Fields

No metadata on this endpoint.

#### Sortable Fields

- saleID

---

### GET All Sales

Retrieve all sale records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/Sale.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Sale.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "Sale": [
        {
            "saleID": "1",
            "timeStamp": "2021-06-04T13:13:12+00:00",
            "discountPercent": "0",
            "completed": "false",
            "archived": "false",
            "voided": "false",
            "enablePromotions": "true",
            "isTaxInclusive": "false",
            "createTime": "2021-06-04T13:13:12+00:00",
            "updatetime": "2021-06-04T13:13:12+00:00",
            "referenceNumber": "",
            "referenceNumberSource": "",
            "tax1Rate": "0.05",
            "tax2Rate": "0.09975",
            "change": "0",
            "tipEnabled": "true",
            "receiptPreference": "printed",
            "displayableSubtotal": "0",
            "ticketNumber": "220000000001",
            "calcDiscount": "0",
            "calcTotal": "0",
            "calcSubtotal": "0",
            "calcTaxable": "0",
            "calcNonTaxable": "0",
            "calcAvgCost": "0",
            "calcFIFOCost": "0",
            "calcTax1": "0",
            "calcTax2": "0",
            "calcPayments": "0",
            "calcTips": "0",
            "total": "0",
            "totalDue": "0",
            "displayableTotal": "0",
            "balance": "0",
            "customerID": "0",
            "discountID": "0",
            "employeeID": "1",
            "tipEmployeeID": "1",
            "quoteID": "0",
            "registerID": "1",
            "shipToID": "0",
            "shopID": "1",
            "taxCategoryID": "1",
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
            "Register": {
                "registerID": "1",
                "name": "Register 1",
                "open": "true",
                "openTime": "2021-06-21T15:43:49+00:00",
                "archived": "false",
                "openEmployeeID": "1",
                "shopID": "1",
                "ccTerminalID": ""
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
            "TaxCategory": {
                "taxCategoryID": "1",
                "isTaxInclusive": "false",
                "tax1Name": "Sales Tax",
                "tax2Name": "",
                "tax1Rate": "0.05",
                "tax2Rate": "0.09975",
                "timeStamp": "2021-01-30T17:33:37+00:00"
            },
            "taxTotal": "0"
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
GET /DisplayTemplate/Sale/{saleID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Sale/{saleID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Sale": {
        "saleID": "10",
        "timeStamp": "2021-06-21T16:10:18+00:00",
        "discountPercent": "0",
        "completed": "true",
        "archived": "false",
        "voided": "false",
        "enablePromotions": "true",
        "isTaxInclusive": "false",
        "createTime": "2021-06-21T16:04:52+00:00",
        "updatetime": "2021-06-21T16:10:19+00:00",
        "completeTime": "2021-06-21T16:10:18+00:00",
        "referenceNumber": "",
        "referenceNumberSource": "",
        "tax1Rate": "0.05",
        "tax2Rate": "0.09975",
        "change": "0",
        "tipEnabled": "true",
        "receiptPreference": "printed",
        "displayableSubtotal": "23",
        "ticketNumber": "220000000010",
        "calcDiscount": "0",
        "calcTotal": "26.44",
        "calcSubtotal": "23",
        "calcTaxable": "23",
        "calcNonTaxable": "0",
        "calcAvgCost": "17",
        "calcFIFOCost": "17",
        "calcTax1": "1.15",
        "calcTax2": "2.29",
        "calcPayments": "26.44",
        "calcTips": "0",
        "total": "26.44",
        "totalDue": "26.44",
        "displayableTotal": "26.44",
        "balance": "0",
        "customerID": "1528",
        "discountID": "0",
        "employeeID": "1",
        "tipEmployeeID": "1",
        "quoteID": "0",
        "registerID": "1",
        "shipToID": "1",
        "shopID": "1",
        "taxCategoryID": "1",
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
            },
            "Layaways": {
                "SaleLine": {
                    "saleLineID": "8",
                    "createTime": "2021-06-26T17:21:10+00:00",
                    "timeStamp": "2021-06-26T17:21:13+00:00",
                    "unitQuantity": "1",
                    "unitPrice": "23",
                    "normalUnitPrice": "0",
                    "discountAmount": "0",
                    "discountPercent": "0",
                    "avgCost": "17",
                    "fifoCost": "17",
                    "tax": "true",
                    "tax1Rate": "0",
                    "tax2Rate": "0",
                    "isLayaway": "true",
                    "isWorkorder": "false",
                    "isSpecialOrder": "false",
                    "displayableSubtotal": "23",
                    "displayableUnitPrice": "23",
                    "calcLineDiscount": "0",
                    "calcTransactionDiscount": "0",
                    "calcTotal": "26.44425",
                    "calcSubtotal": "23",
                    "calcTax1": "1.15",
                    "calcTax2": "2.29425",
                    "taxClassID": "1",
                    "customerID": "1528",
                    "discountID": "0",
                    "employeeID": "1",
                    "itemID": "290",
                    "noteID": "0",
                    "parentSaleLineID": "0",
                    "shopID": "1",
                    "taxCategoryID": "0",
                    "saleID": "0",
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
                        "itemECommerceID": "0",
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
                        "vendorID": "0",
                        "ccGatewayID": "0",
                        "gatewayConfigID": "",
                        "priceLevelID": "1"
                    }
                }
            },
            "SpecialOrders": {
                "SaleLine": {
                    "saleLineID": "6",
                    "createTime": "2021-06-26T17:18:31+00:00",
                    "timeStamp": "2021-06-26T17:18:44+00:00",
                    "unitQuantity": "5",
                    "unitPrice": "34",
                    "normalUnitPrice": "0",
                    "discountAmount": "0",
                    "discountPercent": "0",
                    "avgCost": "0",
                    "fifoCost": "162.5",
                    "tax": "true",
                    "tax1Rate": "0",
                    "tax2Rate": "0",
                    "isLayaway": "false",
                    "isWorkorder": "false",
                    "isSpecialOrder": "true",
                    "displayableSubtotal": "170",
                    "displayableUnitPrice": "34",
                    "calcLineDiscount": "0",
                    "calcTransactionDiscount": "0",
                    "calcTotal": "195.4575",
                    "calcSubtotal": "170",
                    "calcTax1": "8.5",
                    "calcTax2": "16.9575",
                    "taxClassID": "1",
                    "customerID": "1528",
                    "discountID": "0",
                    "employeeID": "1",
                    "itemID": "265",
                    "noteID": "0",
                    "parentSaleLineID": "0",
                    "shopID": "1",
                    "taxCategoryID": "0",
                    "saleID": "0",
                    "Item": {
                        "itemID": "265",
                        "systemSku": "210000000265",
                        "defaultCost": "162.5",
                        "avgCost": "0",
                        "discountable": "true",
                        "tax": "true",
                        "archived": "false",
                        "itemType": "default",
                        "serialized": "false",
                        "description": "Blazer",
                        "modelYear": "0",
                        "upc": "376790041180",
                        "ean": "0376790041180",
                        "customSku": "OEM5XZ-748",
                        "manufacturerSku": "KDAT294XZ-56",
                        "createTime": "2021-02-27T14:50:06+00:00",
                        "timeStamp": "2021-05-01T14:34:38+00:00",
                        "publishToEcom": "false",
                        "categoryID": "0",
                        "taxClassID": "1",
                        "departmentID": "0",
                        "itemMatrixID": "0",
                        "itemAttributesID": "0",
                        "manufacturerID": "0",
                        "noteID": "124",
                        "seasonID": "0",
                        "defaultVendorID": "0",
                        "Prices": {
                            "ItemPrice": [
                                {
                                    "amount": "34",
                                    "useTypeID": "1",
                                    "useType": "Default"
                                },
                                {
                                    "amount": "0",
                                    "useTypeID": "2",
                                    "useType": "MSRP"
                                }
                            ]
                        }
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
                        "vendorID": "0",
                        "ccGatewayID": "0",
                        "gatewayConfigID": "",
                        "priceLevelID": "1"
                    }
                }
            },
            "Workorders": {
                "SaleLine": [
                    {
                        "saleLineID": "9",
                        "createTime": "2021-06-26T17:21:37+00:00",
                        "timeStamp": "2021-06-26T17:23:37+00:00",
                        "unitQuantity": "1",
                        "unitPrice": "0",
                        "normalUnitPrice": "0",
                        "discountAmount": "0",
                        "discountPercent": "0",
                        "avgCost": "0",
                        "fifoCost": "0",
                        "tax": "false",
                        "tax1Rate": "0",
                        "tax2Rate": "0",
                        "isLayaway": "false",
                        "isWorkorder": "true",
                        "isSpecialOrder": "false",
                        "displayableSubtotal": "0",
                        "displayableUnitPrice": "0",
                        "calcLineDiscount": "0",
                        "calcTransactionDiscount": "0",
                        "calcTotal": "0",
                        "calcSubtotal": "0",
                        "calcTax1": "0",
                        "calcTax2": "0",
                        "taxClassID": "2",
                        "customerID": "1528",
                        "discountID": "0",
                        "employeeID": "1",
                        "itemID": "0",
                        "noteID": "140",
                        "parentSaleLineID": "0",
                        "shopID": "1",
                        "taxCategoryID": "0",
                        "saleID": "0",
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
                        "Note": {
                            "noteID": "140",
                            "note": "Work order #1, Item: Jeans Blue / 26\nReady on 27/06 at 1:21 pm\nHem to 27\"",
                            "isPublic": "false",
                            "timeStamp": "2021-06-26T17:23:37+00:00"
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
                            "vendorID": "0",
                            "ccGatewayID": "0",
                            "gatewayConfigID": "",
                            "priceLevelID": "1"
                        },
                        "m": {
                            "workorderTax": "0",
                            "workorderLineDiscount": "0",
                            "workorderTransactionDiscount": "0",
                            "workorderAllDiscounts": "0",
                            "workorderSubtotal": "0",
                            "workorderTotal": "0",
                            "workorderSystemSku": "250000000001"
                        }
                    },
                    {
                        "saleLineID": "10",
                        "createTime": "2021-06-26T17:22:42+00:00",
                        "timeStamp": "2021-06-26T17:23:37+00:00",
                        "unitQuantity": "1",
                        "unitPrice": "0",
                        "normalUnitPrice": "0",
                        "discountAmount": "0",
                        "discountPercent": "0",
                        "avgCost": "0",
                        "fifoCost": "0",
                        "tax": "false",
                        "tax1Rate": "0.15",
                        "tax2Rate": "0",
                        "isLayaway": "false",
                        "isWorkorder": "true",
                        "isSpecialOrder": "false",
                        "displayableSubtotal": "0",
                        "displayableUnitPrice": "0",
                        "calcLineDiscount": "0",
                        "calcTransactionDiscount": "0",
                        "calcTotal": "0",
                        "calcSubtotal": "0",
                        "calcTax1": "0",
                        "calcTax2": "0",
                        "taxClassID": "2",
                        "customerID": "1528",
                        "discountID": "0",
                        "employeeID": "1",
                        "itemID": "0",
                        "noteID": "141",
                        "parentSaleLineID": "0",
                        "shopID": "1",
                        "taxCategoryID": "1",
                        "saleID": "0",
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
                        "Note": {
                            "noteID": "141",
                            "note": "Labor",
                            "isPublic": "false",
                            "timeStamp": "2021-06-26T17:23:37+00:00"
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
                            "vendorID": "0",
                            "ccGatewayID": "0",
                            "gatewayConfigID": "",
                            "priceLevelID": "1"
                        }
                    }
                ]
            },
            "m": {
                "subtotal": "193",
                "subtotalNoDiscount": "193",
                "tax": "9.65",
                "tax1": "19.25175",
                "tax2": "0",
                "tax3": "0",
                "tax4": "0",
                "tax5": "0",
                "lineDiscount": "0",
                "allDiscounts": "0",
                "taxTotal": "28.9",
                "total": "221.9",
                "layawaysSubtotal": "23",
                "layawaysSubtotalNoDiscount": "23",
                "layawaysTax": "1.15",
                "layawaysTax1": "2.29425",
                "layawaysTax2": "0",
                "layawaysTax3": "0",
                "layawaysTax4": "0",
                "layawaysTax5": "0",
                "layawaysLineDiscount": "0",
                "layawaysAllDiscounts": "0",
                "layawaysTaxTotal": "3.44",
                "layawaysTotal": "26.44",
                "specialOrdersSubtotal": "170",
                "specialOrdersSubtotalNoDiscount": "170",
                "specialOrdersTax": "8.5",
                "specialOrdersTax1": "16.9575",
                "specialOrdersTax2": "0",
                "specialOrdersTax3": "0",
                "specialOrdersTax4": "0",
                "specialOrdersTax5": "0",
                "specialOrdersLineDiscount": "0",
                "specialOrdersAllDiscounts": "0",
                "specialOrdersTaxTotal": "25.46",
                "specialOrdersTotal": "195.46",
                "workordersSubtotal": "0",
                "workordersSubtotalNoDiscount": "0",
                "workordersTax": "0",
                "workordersTax1": "0",
                "workordersTax2": "0",
                "workordersTax3": "0",
                "workordersTax4": "0",
                "workordersTax5": "0",
                "workordersLineDiscount": "0",
                "workordersAllDiscounts": "0",
                "workordersTaxTotal": "0",
                "workordersTotal": "0",
                "getAmountToCompleteAll": "221.9"
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
        "Register": {
            "registerID": "1",
            "name": "Register 1",
            "open": "true",
            "openTime": "2021-06-21T15:43:49+00:00",
            "archived": "false",
            "openEmployeeID": "1",
            "shopID": "1",
            "ccTerminalID": ""
        },
        "ShipTo": {
            "shipToID": "1",
            "shipped": "false",
            "timeStamp": "2021-06-21T16:10:06+00:00",
            "shipNote": "",
            "firstName": "Germana",
            "lastName": "Eslemont",
            "company": "",
            "customerID": "1528",
            "contactID": "1647",
            "saleID": "10",
            "Contact": {
                "contactID": "1647",
                "custom": "",
                "noEmail": "true",
                "noPhone": "true",
                "noMail": "true",
                "timeStamp": "2021-06-21T16:10:06+00:00",
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
                        "number": "235-531-3445",
                        "useType": "Home"
                    }
                },
                "Emails": "",
                "Websites": ""
            }
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
        "TaxCategory": {
            "taxCategoryID": "1",
            "isTaxInclusive": "false",
            "tax1Name": "Sales Tax",
            "tax2Name": "",
            "tax1Rate": "0.05",
            "tax2Rate": "0.09975",
            "timeStamp": "2021-01-30T17:33:37+00:00"
        },
        "SaleLines": {
            "SaleLine": {
                "saleLineID": "5",
                "createTime": "2021-06-21T16:04:57+00:00",
                "timeStamp": "2021-06-21T16:10:19+00:00",
                "unitQuantity": "1",
                "unitPrice": "23",
                "normalUnitPrice": "0",
                "discountAmount": "0",
                "discountPercent": "0",
                "avgCost": "17",
                "fifoCost": "17",
                "tax": "true",
                "tax1Rate": "0.05",
                "tax2Rate": "0.09975",
                "isLayaway": "false",
                "isWorkorder": "false",
                "isSpecialOrder": "false",
                "displayableSubtotal": "23",
                "displayableUnitPrice": "23",
                "calcLineDiscount": "0",
                "calcTransactionDiscount": "0",
                "calcTotal": "26.44425",
                "calcSubtotal": "23",
                "calcTax1": "1.15",
                "calcTax2": "2.29425",
                "taxClassID": "1",
                "customerID": "0",
                "discountID": "0",
                "employeeID": "1",
                "itemID": "290",
                "noteID": "0",
                "parentSaleLineID": "0",
                "shopID": "1",
                "taxCategoryID": "1",
                "saleID": "10",
                "TaxClass": {
                    "taxClassID": "1",
                    "name": "Item",
                    "timeStamp": "2021-01-30T17:31:36+00:00"
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
                    "Category": {
                        "categoryID": "2",
                        "name": "Unisex",
                        "nodeDepth": "1",
                        "fullPathName": "Clothing/Unisex",
                        "leftNode": "2",
                        "rightNode": "3",
                        "createTime": "2021-06-14T16:45:40+00:00",
                        "timeStamp": "2021-06-14T16:45:40+00:00",
                        "parentID": "1"
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
                "TaxCategory": {
                    "taxCategoryID": "1",
                    "isTaxInclusive": "false",
                    "tax1Name": "Sales Tax",
                    "tax2Name": "",
                    "tax1Rate": "0.05",
                    "tax2Rate": "0.09975",
                    "timeStamp": "2021-01-30T17:33:37+00:00"
                }
            }
        },
        "SalePayments": {
            "SalePayment": {
                "salePaymentID": "4",
                "amount": "26.44",
                "tipAmount": "0",
                "createTime": "2021-06-21T16:10:19+00:00",
                "archived": "false",
                "remoteReference": "dcaae5f6-758e-4cc7-be3b-d6779901fb56",
                "paymentID": "",
                "saleID": "10",
                "paymentTypeID": "1",
                "ccChargeID": "0",
                "refPaymentID": "0",
                "registerID": "1",
                "employeeID": "1",
                "creditAccountID": "0",
                "PaymentType": {
                    "paymentTypeID": "1",
                    "code": "Cash",
                    "name": "Cash",
                    "requireCustomer": "false",
                    "archived": "false",
                    "internalReserved": "true",
                    "type": "cash",
                    "refundAsPaymentTypeID": "0"
                }
            }
        },
        "TaxClassTotals": {
            "Tax": {
                "ID": "1",
                "name": "Item",
                "taxable": "23",
                "rate": "5",
                "amount": "1.15",
                "taxname": "GST",
                "subtotal": "23",
                "rate2": "9.975",
                "amount2": "2.29425",
                "taxname2": "PST",
                "subtotal2": "23"
            }
        },
        "taxTotal": "3.44"
    }
}
```

#### Attributes

| saleID | (integer)  The unique numeric identifier for the sale record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/Sale/{saleID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Sale/{saleID}.html?template={template}"
```

#### Attributes

| saleID | (integer)  The unique numeric identifier for the sale record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **SaleReceipt** template.
