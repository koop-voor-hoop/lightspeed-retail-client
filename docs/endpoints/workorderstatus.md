---
title: WorkorderStatus
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/WorkorderStatus/
---

# WorkorderStatus

#### Description

Lists all the workorder statuses the system and user have defined. A list of predefined workorder statuses is available in the [Defined Values](https://developers.lightspeedhq.com/retail/introduction/definedvalues) section of the API documentation.

#### User Interface

- Admin → Service → Custom Statuses
- Service → Workorders → edit a Workorder → Status drop down.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### WorkorderStatus Fields

| workorderStatusID | (integer) The unique numerical ID for the workorder status. /API/V3/Account/{accountID}/WorkorderStatus/{workorderStatusID} |
| --- | --- |
| name | (string) The display name of this status. |
| sortOrder | (string) The internal sort order for the status. Determines how the status will sort on drop downs etc. |
| htmlColor | (string) The hex color value to display for this status. |
| systemValue | (string) The internal system value for this status. If this is set then the status is a system value that can not be changed. See our list of workorder statuses in the Defined Values section of the API documentation. |

#### Sortable Fields

- workorderStatusID

---

### GET All workorder statuses

Retrieve a list of all workorder statuses

> Definition

```
GET /API/V3/Account/{accountID}/WorkorderStatus.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/WorkorderStatus.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderStatus": [
    {
      "workorderStatusID": "1",
      "name": "Open",
      "sortOrder": "0",
      "htmlColor": "",
      "systemValue": "open"
    },
    {
      "workorderStatusID": "2",
      "name": "Estimate",
      "sortOrder": "1",
      "htmlColor": "",
      "systemValue": "estimate"
    },
    {
      "workorderStatusID": "3",
      "name": "Waiting",
      "sortOrder": "2",
      "htmlColor": "",
      "systemValue": "waiting"
    },
    {
      "workorderStatusID": "4",
      "name": "Finished",
      "sortOrder": "65000",
      "htmlColor": "",
      "systemValue": "finished"
    },
    {
      "workorderStatusID": "5",
      "name": "Done & Paid",
      "sortOrder": "65001",
      "htmlColor": "",
      "systemValue": "paid"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single workorder status

Retrieve a single workorder status by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/WorkorderStatus/{workorderStatus}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/WorkorderStatus/{workorderStatus}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderStatus": {
    "workorderStatusID": "4",
    "name": "Finished",
    "sortOrder": "65000",
    "htmlColor": "",
    "systemValue": "finished"
  }
}
```

#### Attributes

| workorderStatusID | (integer) The unique numerical ID for the workorder status. Required Field |
| --- | --- |
