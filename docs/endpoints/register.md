---
title: Register
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Register/
---

# Register

#### Description

A Register represents a single point of sale, a place where money is received. Each register has a separate cash count for each payment type.

#### User Interface

- Admin → General → Edit Shop (Shops → Edit Shop) → Registers tab of Shop view.
- Register → Open Register / Close Register / Switch Registers

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| PUT/Update | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Register Fields

| registerID | (integer) The unique numerical ID for the register. |
| --- | --- |
| name | (string) The name/description of the register. Example ‘Front Register’ |
| open | (boolean) Whether the register is currently open. |
| openTime | (datetime) The date/time this register was opened at. |
| tipEnabled | (boolean) Whether the Tipping feature is allowed on this Register. |
| openEmployeeID | (integer) The foreign key for the employee who opened the register. /API/V3/Account/{accountID}/Employee/{openEmployeeID} |
| shopID | (integer) The foreign key for the shop this register is at. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- registerID

---

### GET All registers

Retrieve a list of all registers in the account

> Definition

```
GET /API/V3/Account/{accountID}/Register.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Register.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Register": [
    {
      "registerID": "1",
      "name": "Register 1",
      "open": "true",
      "openTime": "2021-04-06T14:34:28+00:00",
      "archived": "false",
      "tipEnabled": "true",
      "openEmployeeID": "1",
      "shopID": "1",
      "ccTerminalID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single register

Retrieve a single register by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Register/{registerID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Register/{registerID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Register": {
    "registerID": "1",
    "name": "Register 1",
    "open": "true",
    "openTime": "2021-04-06T14:34:28+00:00",
    "archived": "false",
    "tipEnabled": "true",
    "openEmployeeID": "1",
    "shopID": "1",
    "ccTerminalID": "1"
  }
}
```

#### Attributes

| registerID | (integer) The unique numerical ID for the register. Required Field |
| --- | --- |

---
