---
title: DisplayTemplate Employee
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-Employee/
---

# DisplayTemplate Employee

#### Description

Uses a print template to print out an Employee record for opening the cash drawer.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Register → Close → Open Drawer button

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- LastRegister
- LastRegister.Shop

“LastRegister” loads the last register used by the employee, displayed as “Register” in the response.

#### Employee Fields

See the [Employee endpoint](https://developers.lightspeedhq.com/retail/endpoints/Employee).

#### Sortable Fields

- employeeID

---

### GET All Employees

Retrieve all employee records available in the account.

> Definition

```
GET /API/V3/Account/{accountID}/DisplayTemplate/Employee.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Employee.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "Employee": [
        {
            "employeeID": "1",
            "firstName": "Jane",
            "lastName": "Doe",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-06-13T14:09:39+00:00",
            "contactID": "1",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "2",
            "lastRegisterID": "1",
            "Register": {
                "registerID": "1",
                "name": "Register 1",
                "open": "true",
                "openTime": "2021-06-04T13:13:09+00:00",
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
                    "timeStamp": "2021-06-13T14:23:33+00:00",
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

### GET Single Employee

Retrieve a single employee record by its ID.

> Definition

```
GET /DisplayTemplate/Employee/{employeeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Employee/{employeeID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Employee": {
        "employeeID": "1",
        "firstName": "Jane",
        "lastName": "Doe",
        "lockOut": "false",
        "archived": "false",
        "timeStamp": "2021-06-13T14:09:39+00:00",
        "contactID": "1",
        "clockInEmployeeHoursID": "0",
        "employeeRoleID": "4",
        "limitToShopID": "0",
        "lastShopID": "1",
        "lastSaleID": "2",
        "lastRegisterID": "1",
        "Register": {
            "registerID": "1",
            "name": "Register 1",
            "open": "true",
            "openTime": "2021-06-04T13:13:09+00:00",
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
                "timeStamp": "2021-06-13T14:23:33+00:00",
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

| employeeID | (integer)  The unique numeric identifier for the employee record. Required Field |
| --- | --- |

---

### GET Single Record Rendered in HTML

> Definition

```
GET /DisplayTemplate/Employee/{employeeID}.html?template={template}
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/DisplayTemplate/Employee/{employeeID}.html?template={template}"
```

#### Attributes

| employeeID | (integer)  The unique numeric identifier for the employee record. Required Field |
| --- | --- |
| template | (string) The name of the template to use for rendering HTML. Required Field |

The user interface uses the **RegisterOpen** template.
