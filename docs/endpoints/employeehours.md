---
title: EmployeeHours
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/EmployeeHours/
---

# EmployeeHours

#### Description

Entries recorded from Employees clocking in and out.

#### User Interface

- Settings → General → Employee Setup → Hours (Time Clock icon in the middle of the employee line.)

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:admin_employees | true |
| --- | --- |

#### EmployeeHours Fields

| employeeHoursID | (integer) The unique numerical ID for the EmployeeHours. /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID} |
| --- | --- |
| checkIn | (datetime) The date/time of the start of the clock in entry/EmployeeHours. |
| checkOut | (datetime) The date/time of the end of the clock in entry/EmployeeHours. |
| employeeID | (integer) The foreign ID for the Employee record that this belongs to. /API/V3/Account/{accountID}/Employee/{employeeID} |
| shopID | (integer) The foreign ID for the Shop that the employee clocked in/out at. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- employeeHoursID

---

### GET All employees hours

Retrieve a list of all employee hours in the account.

> Definition

```
GET /API/V3/Account/{accountID}/EmployeeHours.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/EmployeeHours.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "EmployeeHours": [
    {
      "employeeHoursID": "1",
      "checkIn": "2021-12-13T15:43:00+00:00",
      "checkOut": "2021-12-13T15:43:26+00:00",
      "employeeID": "4",
      "shopID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Single employee hours

Retrieve a single employee hours by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "EmployeeHours": {
    "employeeHoursID": "2",
    "checkIn": "2021-12-13T17:47:14+00:00",
    "checkOut": "2021-12-13T17:47:15+00:00",
    "employeeID": "4",
    "shopID": "3"
  }
}
```

#### Attributes

| employeeHoursID | (integer) The unique numerical ID for the EmployeeHours.  Required Field |
| --- | --- |

---

### POST Create an employee hours

> Definition

```
POST /API/V3/Account/{accountID}/EmployeeHours.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "checkIn": "2021-12-13T17:47:14+00:00",
      "checkOut": "2021-12-13T17:47:15+00:00",
      "employeeID": "4",
      "shopID": "3"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/EmployeeHours.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "EmployeeHours": {
    "employeeHoursID": "10",
    "checkIn": "2021-12-13T17:47:14+00:00",
    "checkOut": "2021-12-13T17:47:15+00:00",
    "employeeID": "4",
    "shopID": "3"
  }
}
```

#### Attributes

| checkIn | (datetime) The date/time of the start of the clock in entry/EmployeeHours. |
| --- | --- |
| checkOut | (datetime) The date/time of the end of the clock in entry/EmployeeHours. |
| employeeID | (integer) The foreign ID for the Employee record that this belongs to. /API/V3/Account/{accountID}/Employee/{employeeID} Required Field |
| shopID | (integer) The foreign ID for the Shop that the employee clocked in/out at. /API/V3/Account/{accountID}/Shop/{shopID} |

---

### PUT Update an employee hour

Update an employee hour based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "checkIn": "2021-12-13T17:47:14+00:00",
      "checkOut": "2021-12-13T17:47:15+00:00",
      "employeeID": "2",
      "shopID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "EmployeeHours": {
    "employeeHoursID": "10",
    "checkIn": "2021-12-13T17:47:14+00:00",
    "checkOut": "2021-12-13T17:47:15+00:00",
    "employeeID": "2",
    "shopID": "1"
  }
}
```

#### Attributes

| employeeHoursID | (integer) The unique numerical ID for the EmployeeHours. /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID} Required Field |
| --- | --- |
| checkIn | (datetime) The date/time of the start of the clock in entry/EmployeeHours. |
| checkOut | (datetime) The date/time of the end of the clock in entry/EmployeeHours. |
| employeeID | (integer) The foreign ID for the Employee record that this belongs to. /API/V3/Account/{accountID}/Employee/{employeeID} |
| shopID | (integer) The foreign ID for the Shop that the employee clocked in/out at. /API/V3/Account/{accountID}/Shop/{shopID} |

---

### DELETE Delete an employee hours

Permanently delete an existing employee hours by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID}.json"
```

> Sample JSON Response

```json
{
  "name": "EmployeeHours",
  "primaryID": "10"
}
```

#### Attributes

| employeeHoursID | (integer) The unique numerical ID for the EmployeeHours. /API/V3/Account/{accountID}/EmployeeHours/{employeeHoursID} Required Field |
| --- | --- |
