---
title: DisplayTemplate RegisterCount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-RegisterCount/
---

# DisplayTemplate RegisterCount

#### Description

Uses a print template to print out cash register closing count slips from register count records.

Use the `.html` emitter or `Content-Type: text/html` header  to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Register → Close → Verify → Print Receipt

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- RegisterCountAmounts
- RegisterCountAmounts.PaymentType
- OpenEmployee
- CloseEmployee
- Register
- Register.Shop

#### Scopes Required

| employee:register | true |
| --- | --- |

#### RegisterCount Fields

See the [RegisterCount endpoint](https://developers.lightspeedhq.com/retail/endpoints/RegisterCount).

#### Metadata Fields

No metadata on this endpoint.

#### Sortable Fields

- registerCountID

---

### GET All RegisterCounts

Retrieve all register count records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/RegisterCount.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterCount.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "RegisterCount": [
        {
            "registerCountID": "1",
            "createTime": "2021-06-20T20:25:23+00:00",
            "openTime": "2021-06-20T20:22:39+00:00",
            "notes": "Morning",
            "registerID": "1",
            "openEmployeeID": "1",
            "closeEmployeeID": "1",
            "Register": {
                "registerID": "1",
                "name": "Register 1",
                "open": "false",
                "openTime": "2021-06-20T20:22:39+00:00",
                "archived": "false",
                "tipEnabled": "true",
                "openEmployeeID": "1",
                "shopID": "1",
                "ccTerminalID": "",
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
                    "priceLevelID": "1"
                }
            },
            "Employee": [
                {
                    "employeeID": "1",
                    "firstName": "Jane",
                    "lastName": "Doe",
                    "lockOut": "false",
                    "archived": "false",
                    "timeStamp": "2021-06-20T20:25:24+00:00",
                    "contactID": "1",
                    "systemUserID": "508464",
                    "clockInEmployeeHoursID": "0",
                    "employeeRoleID": "4",
                    "limitToShopID": "0",
                    "lastShopID": "1",
                    "lastSaleID": "0",
                    "lastRegisterID": "0"
                },
                {
                    "employeeID": "1",
                    "firstName": "Jane",
                    "lastName": "Doe",
                    "lockOut": "false",
                    "archived": "false",
                    "timeStamp": "2021-06-20T20:25:24+00:00",
                    "contactID": "1",
                    "systemUserID": "508464",
                    "clockInEmployeeHoursID": "0",
                    "employeeRoleID": "4",
                    "limitToShopID": "0",
                    "lastShopID": "1",
                    "lastSaleID": "0",
                    "lastRegisterID": "0"
                }
            ],
            "RegisterCountAmounts": {
                "RegisterCountAmount": [
                    {
                        "registerCountAmountID": "7",
                        "calculated": "2022.27",
                        "actual": "500",
                        "registerCountID": "2",
                        "paymentTypeID": "1",
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
                    },
                    {
                        "registerCountAmountID": "8",
                        "calculated": "0",
                        "actual": "0",
                        "registerCountID": "2",
                        "paymentTypeID": "2",
                        "PaymentType": {
                            "paymentTypeID": "2",
                            "code": "Check",
                            "name": "Check",
                            "requireCustomer": "false",
                            "archived": "false",
                            "internalReserved": "false",
                            "type": "user defined",
                            "refundAsPaymentTypeID": "0"
                        }
                    },
                    {
                        "registerCountAmountID": "9",
                        "calculated": "6523.68",
                        "actual": "6523.68",
                        "registerCountID": "2",
                        "paymentTypeID": "3",
                        "PaymentType": {
                            "paymentTypeID": "3",
                            "code": "Credit Card",
                            "name": "Credit Card",
                            "requireCustomer": "false",
                            "archived": "false",
                            "internalReserved": "false",
                            "type": "user defined",
                            "refundAsPaymentTypeID": "0"
                        }
                    },
                    {
                        "registerCountAmountID": "10",
                        "calculated": "0",
                        "actual": "0",
                        "registerCountID": "2",
                        "paymentTypeID": "4",
                        "PaymentType": {
                            "paymentTypeID": "4",
                            "code": "SCA",
                            "name": "Credit Account",
                            "requireCustomer": "false",
                            "archived": "false",
                            "internalReserved": "true",
                            "type": "credit account",
                            "refundAsPaymentTypeID": "4"
                        }
                    },
                    {
                        "registerCountAmountID": "11",
                        "calculated": "0",
                        "actual": "0",
                        "registerCountID": "2",
                        "paymentTypeID": "5",
                        "PaymentType": {
                            "paymentTypeID": "5",
                            "code": "SGC",
                            "name": "Gift Card",
                            "requireCustomer": "false",
                            "archived": "false",
                            "internalReserved": "true",
                            "type": "gift card",
                            "refundAsPaymentTypeID": "5"
                        }
                    },
                    {
                        "registerCountAmountID": "12",
                        "calculated": "2644.43",
                        "actual": "2644.43",
                        "registerCountID": "2",
                        "paymentTypeID": "6",
                        "PaymentType": {
                            "paymentTypeID": "6",
                            "code": "Debit Card",
                            "name": "Debit Card",
                            "requireCustomer": "false",
                            "archived": "false",
                            "internalReserved": "false",
                            "type": "user defined",
                            "refundAsPaymentTypeID": "0"
                        }
                    }
                ]
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

### GET Single RegisterCount

Retrieve a single register count record by its ID.

> Definition

```
GET /DisplayTemplate/RegisterCount/{registerCountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterCount/{registerCountID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "RegisterCount": {
        "registerCountID": "2",
        "createTime": "2021-06-20T20:25:23+00:00",
        "openTime": "2021-06-20T20:22:39+00:00",
        "notes": "Morning",
        "registerID": "1",
        "openEmployeeID": "1",
        "closeEmployeeID": "1",
        "Register": {
            "registerID": "1",
            "name": "Register 1",
            "open": "false",
            "openTime": "2021-06-20T20:22:39+00:00",
            "archived": "false",
            "tipEnabled": "true",
            "openEmployeeID": "1",
            "shopID": "1",
            "ccTerminalID": "",
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
                "priceLevelID": "1"
            }
        },
        "Employee": [
            {
                "employeeID": "1",
                "firstName": "Jane",
                "lastName": "Doe",
                "lockOut": "false",
                "archived": "false",
                "timeStamp": "2021-06-20T20:25:24+00:00",
                "contactID": "1",
                "systemUserID": "508464",
                "clockInEmployeeHoursID": "0",
                "employeeRoleID": "4",
                "limitToShopID": "0",
                "lastShopID": "1",
                "lastSaleID": "0",
                "lastRegisterID": "0"
            },
            {
                "employeeID": "1",
                "firstName": "Jane",
                "lastName": "Doe",
                "lockOut": "false",
                "archived": "false",
                "timeStamp": "2021-06-20T20:25:24+00:00",
                "contactID": "1",
                "systemUserID": "508464",
                "clockInEmployeeHoursID": "0",
                "employeeRoleID": "4",
                "limitToShopID": "0",
                "lastShopID": "1",
                "lastSaleID": "0",
                "lastRegisterID": "0"
            }
        ],
        "RegisterCountAmounts": {
            "RegisterCountAmount": [
                {
                    "registerCountAmountID": "7",
                    "calculated": "2022.27",
                    "actual": "500",
                    "registerCountID": "2",
                    "paymentTypeID": "1",
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
                },
                {
                    "registerCountAmountID": "8",
                    "calculated": "0",
                    "actual": "0",
                    "registerCountID": "2",
                    "paymentTypeID": "2",
                    "PaymentType": {
                        "paymentTypeID": "2",
                        "code": "Check",
                        "name": "Check",
                        "requireCustomer": "false",
                        "archived": "false",
                        "internalReserved": "false",
                        "type": "user defined",
                        "refundAsPaymentTypeID": "0"
                    }
                },
                {
                    "registerCountAmountID": "9",
                    "calculated": "6523.68",
                    "actual": "6523.68",
                    "registerCountID": "2",
                    "paymentTypeID": "3",
                    "PaymentType": {
                        "paymentTypeID": "3",
                        "code": "Credit Card",
                        "name": "Credit Card",
                        "requireCustomer": "false",
                        "archived": "false",
                        "internalReserved": "false",
                        "type": "user defined",
                        "refundAsPaymentTypeID": "0"
                    }
                },
                {
                    "registerCountAmountID": "10",
                    "calculated": "0",
                    "actual": "0",
                    "registerCountID": "2",
                    "paymentTypeID": "4",
                    "PaymentType": {
                        "paymentTypeID": "4",
                        "code": "SCA",
                        "name": "Credit Account",
                        "requireCustomer": "false",
                        "archived": "false",
                        "internalReserved": "true",
                        "type": "credit account",
                        "refundAsPaymentTypeID": "4"
                    }
                },
                {
                    "registerCountAmountID": "11",
                    "calculated": "0",
                    "actual": "0",
                    "registerCountID": "2",
                    "paymentTypeID": "5",
                    "PaymentType": {
                        "paymentTypeID": "5",
                        "code": "SGC",
                        "name": "Gift Card",
                        "requireCustomer": "false",
                        "archived": "false",
                        "internalReserved": "true",
                        "type": "gift card",
                        "refundAsPaymentTypeID": "5"
                    }
                },
                {
                    "registerCountAmountID": "12",
                    "calculated": "2644.43",
                    "actual": "2644.43",
                    "registerCountID": "2",
                    "paymentTypeID": "6",
                    "PaymentType": {
                        "paymentTypeID": "6",
                        "code": "Debit Card",
                        "name": "Debit Card",
                        "requireCustomer": "false",
                        "archived": "false",
                        "internalReserved": "false",
                        "type": "user defined",
                        "refundAsPaymentTypeID": "0"
                    }
                }
            ]
        }
    }
}
```

#### Attributes

| registerCountID | (integer)  The unique numeric identifier for the register count record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/RegisterCount/{registerCountID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterCount/{registerCountID}.html?template={template}"
```

#### Attributes

| registerCountID | (integer)  The unique numeric identifier for the register count record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **RegisterCount** template.
