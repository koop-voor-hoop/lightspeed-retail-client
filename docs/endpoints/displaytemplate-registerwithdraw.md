---
title: DisplayTemplate RegisterWithdraw
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-RegisterWithdraw/
---

# DisplayTemplate RegisterWithdraw

#### Description

Uses a print template to print out cash register withdrawal (payout/drop) slips from register withdraw records.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Register → Payout / Drop or Add Amount → Submit amount → Print Receipt

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- PaymentType
- Employee
- Register
- Register.Shop

#### Scopes Required

| employee:register | true |
| --- | --- |

#### RegisterWithdraw Fields

See the [RegisterWithdraw endpoint](https://developers.lightspeedhq.com/retail/endpoints/RegisterWithdraw).

#### Metadata Fields

No metadata on this endpoint.

#### Sortable Fields

- registerWithdrawID

### GET All RegisterWithdraws

Retrieve all register withdraw records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/RegisterWithdraw.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterWithdraw.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "RegisterWithdraw": [
        {
            "registerWithdrawID": "1",
            "amount": "20",
            "createTime": "2021-06-04T13:13:09+00:00",
            "notes": "",
            "employeeID": "1",
            "paymentTypeID": "1",
            "registerID": "1",
            "Employee": {
                "employeeID": "1",
                "firstName": "Jane",
                "lastName": "Doe",
                "lockOut": "false",
                "archived": "false",
                "timeStamp": "2021-06-21T15:43:55+00:00",
                "contactID": "1",
                "systemUserID": "508464",
                "clockInEmployeeHoursID": "0",
                "employeeRoleID": "4",
                "limitToShopID": "0",
                "lastShopID": "1",
                "lastSaleID": "9",
                "lastRegisterID": "1"
            },
            "PaymentType": {
                "paymentTypeID": "1",
                "code": "Cash",
                "name": "Cash",
                "requireCustomer": "false",
                "archived": "false",
                "internalReserved": "true",
                "type": "cash",
                "refundAsPaymentTypeID": "0"
            },
            "Register": {
                "registerID": "1",
                "name": "Register 1",
                "open": "true",
                "openTime": "2021-06-21T15:43:49+00:00",
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

### GET Single RegisterWithdraw

Retrieve a single register withdraw record by its ID.

> Definition

```
GET /DisplayTemplate/RegisterWithdraw/{registerWithdrawID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterWithdraw/{registerWithdrawID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "RegisterWithdraw": {
        "registerWithdrawID": "1",
        "amount": "0.01",
        "createTime": "2021-06-04T13:13:09+00:00",
        "notes": "",
        "employeeID": "1",
        "paymentTypeID": "1",
        "registerID": "1",
        "Employee": {
            "employeeID": "1",
            "firstName": "Jane",
            "lastName": "Doe",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-06-21T15:43:55+00:00",
            "contactID": "1",
            "systemUserID": "508464",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "9",
            "lastRegisterID": "1"
        },
        "PaymentType": {
            "paymentTypeID": "1",
            "code": "Cash",
            "name": "Cash",
            "requireCustomer": "false",
            "archived": "false",
            "internalReserved": "true",
            "type": "cash",
            "refundAsPaymentTypeID": "0"
        },
        "Register": {
            "registerID": "1",
            "name": "Register 1",
            "open": "true",
            "openTime": "2021-06-21T15:43:49+00:00",
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
        }
    }
}
```

#### Attributes

| registerWithdrawID | (integer)  The unique numeric identifier for the register withdraw record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/RegisterWithdraw/{registerWithdrawID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/RegisterWithdraw/{registerWithdrawID}.html?template={template}"
```

#### Attributes

| registerWithdrawID | (integer)  The unique numeric identifier for the register withdraw record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **RegisterWithdraw** template.
