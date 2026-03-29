---
title: Workorder Clone
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder-Clone/
---

# Workorder Clone

#### Description

Clone a Workorder. This action will also duplicate all associated WorkorderItems and WorkorderLines.

#### User Interface

- Service → Workorders → edit Workorder → Duplicate

#### Actions Allowed

| POST/Create | True |
| --- | --- |

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### Additional Relations

- WorkorderLine
- WorkorderItem

#### Checkout Fields

| workorderID | (integer) The unique numerical ID for the workorder. /API/V3/Account/{accountID}/Workorder/{workorderID} |
| --- | --- |

---

### POST Clone a workorder

Clone a workorder.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder/{workorderID}/Clone.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/Clone.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Workorder": {
    "workorderID": "84",
    "systemSku": "250000000084",
    "timeIn": "2025-04-02T19:03:07+00:00",
    "etaOut": "2025-04-02T19:03:07+00:00",
    "note": "Workorder for John Hamm",
    "internalNote": "",
    "warranty": "false",
    "tax": "false",
    "archived": "false",
    "hookIn": "",
    "hookOut": "",
    "saveParts": "false",
    "assignEmployeeToAll": "false",
    "timeStamp": "2025-04-02T19:03:07+00:00",
    "customerID": "12",
    "discountID": "0",
    "employeeID": "1",
    "serializedID": "0",
    "shopID": "1",
    "saleID": "0",
    "saleLineID": "499",
    "workorderStatusID": "2"
  }
}
```

### POST Clone a workorder with optional JSON body

Clone a workorder.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder/{workorderID}/Clone.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "shopID" : 124,
    "employeeID": 56
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/Clone.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Workorder": {
    "workorderID": "84",
    "systemSku": "250000000084",
    "timeIn": "2025-04-02T19:03:07+00:00",
    "etaOut": "2025-04-02T19:03:07+00:00",
    "note": "Workorder for John Hamm",
    "internalNote": "",
    "warranty": "false",
    "tax": "false",
    "archived": "false",
    "hookIn": "",
    "hookOut": "",
    "saveParts": "false",
    "assignEmployeeToAll": "false",
    "timeStamp": "2025-04-02T19:03:07+00:00",
    "customerID": "12",
    "discountID": "0",
    "employeeID": "56",
    "serializedID": "0",
    "shopID": "124",
    "saleID": "0",
    "saleLineID": "499",
    "workorderStatusID": "2"
  }
}
```

#### Attributes

| workorderID | (integer) The primary key for the workorder being cloned. Required Field |
| --- | --- |

---
