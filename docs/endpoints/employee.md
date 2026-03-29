---
title: Employee
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Employee/
---

# Employee

#### Description

Biographical and account login information about an employee. Employees have logins, rights/authorization levels, roles, and clocked hours.

#### User Interface

- Settings → General → Employee Setup

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Additional Relations

- Contact
- EmployeeRole
- EmployeeRole.EmployeeRights
- EmployeeRights

#### Employee Fields

| employeeID | (integer)  The unique numeric identifier for the employee. |
| --- | --- |
| firstName | (string) First name of the employee. |
| lastName | (string) Last name of the employee. |
| lockOut | (boolean) Whether this employee is locked out of the system. |
| archived | (boolean) Whether the employye has been archived. Archived employees don’t count towards the account’s employee limit. |
| contactID | (integer) Foreign key to the contact record. |
| clockInEmployeeHoursID | (integer) Foreign key for the current EmployeeHours record that the employee is clocked in under. /API/V3/Account/{accountID}/EmployeeHours/{clockInEmployeeHoursID} |
| employeeRoleID | (integer) Foreign key for the employee’s role (specifies rights). If none, then the employee’s own rights apply instead of the role’s. |
| limitToShopID | (integer) Foreign key for the shop the employee is limited to. /API/V3/Account/{accountID}/Shop/{limitToShopID} |
| lastShopID | (integer) The foreign key for the shop the employee is currently (or last) attached to. /API/Acccount/Shop/{lastShopID} |
| lastSaleID | (integer) The foreign key for the sale the employee is currently (or last) working on. /API/V3/Account/{accountID}/Sale/{lastSaleID} |
| lastRegisterID | (integer) The foreign key for the register the employee is currently (or last) attached to. /API/V3/Account/{accountID}/Register/{lastRegisterID} |
| Contact | (object) The contact info for the employee. |
| EmployeeRole | (object) The employee’s role (specifies rights). If none, then the employee’s own rights apply instead of the role’s. |
| EmployeeRights | (object) The employees rights. These are used if the employee has no role. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Contact Fields

**Addresses/ContactAddress**

Contains the postal address(es) for the contact. Right now only one address can be stored.

| address1 | the contact’s street address. |
| --- | --- |
| address2 | the contact’s second address line (apt, suite, etc). |
| city | the contact’s postal address city. |
| state | the contact’s postal address state. |
| stateCode | the ISO code for the state. |
| zip | the contact’s postal address zip/postal code. This may be empty in some cases. |
| country | the contact’s postal address country. |
| countryCode | the ISO code for the country. This may be empty in some cases. |

**Phones/ContactPhone**

The contact’s phone numbers. There can be one each of useType = Home, Work, Mobile, Pager, Fax.

| number | the phone number. |
| --- | --- |
| useType | the type of phone number this is: Home, Work, Mobile, Pager, Fax. |

**Emails/ContactEmail**

The contact’s email addresses. There can be one each of useType = Primary, Secondary.

| address | the email address. |
| --- | --- |
| useType | the type of email address this is: Primary, Secondary. |

**Websites/ContactWebsite**

The contact website/URL. There can be only one at this time.

| url | the url. |
| --- | --- |

| contactID | (integer) The unique numerical ID for the contact. |
| --- | --- |
| noEmail | (boolean) Whether the contact wishes to opt out of email messages. |
| noMail | (boolean) Whether the contact wishes to opt out of postal mail. |
| noPhone | (boolean) Whether the contact wishes to opt out of phone calls. |
| timeStamp | (datetime) The date/time the record was last modified. |

#### EmployeeRole Fields

| employeeRoleID | (integer) The unique numeric identifier for the employee role. |
| --- | --- |
| name | (string) The name of the role. |
| EmployeeRights | (object) The rights/privileges for this role. |

#### EmployeeRight Fields

| employeeRightID | (integer) The unique numeric identifier for the employee right. |
| --- | --- |
| name | (string) The name of the right/privilege. |

#### Sortable Fields

- employeeID
- timeStamp

---

### GET All employees

Retrieve a list of all employees in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Employee.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Employee.json"
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
      "firstName": "Alex ",
      "lastName": "Lugo",
      "lockOut": "false",
      "archived": "false",
      "timeStamp": "2021-03-23T14:33:22+00:00",
      "contactID": "1",
      "clockInEmployeeHoursID": "0",
      "employeeRoleID": "4",
      "limitToShopID": "0",
      "lastShopID": "2",
      "lastSaleID": "143",
      "lastRegisterID": "0"
    },
    {...}
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Single Employee

Retrieve a single employee by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Employee/{employeeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Employee/{employeeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Employee": {
    "employeeID": "4",
    "firstName": "John",
    "lastName": "Doe",
    "lockOut": "false",
    "archived": "false",
    "timeStamp": "2021-03-23T15:45:03+00:00",
    "contactID": "15",
    "clockInEmployeeHoursID": "0",
    "employeeRoleID": "1",
    "limitToShopID": "0",
    "lastShopID": "1",
    "lastSaleID": "104",
    "lastRegisterID": "1"
  }
}
```

#### Attributes

| employeeID | (integer) The unique numeric identifier for the employee. Required Field |
| --- | --- |

---

### POST Create an employee

Create a new employee based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Employee.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "firstName": "John",
      "lastName": "Doe",
      "lockOut": "true",
      "archived": "true",
      "clockInEmployeeHoursID": "2",
      "employeeRoleID": "1",
      "limitToShopID": "1",
      "lastShopID": "1",
      "lastSaleID": "102",
      "lastRegisterID": "2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Employee.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Employee": {
    "employeeID": "5",
    "firstName": "J",
    "lastName": "Doe",
    "lockOut": "true",
    "archived": "true",
    "timeStamp": "2021-03-24T15:20:47+00:00",
    "clockInEmployeeHoursID": "2",
    "employeeRoleID": "1",
    "limitToShopID": "1",
    "lastShopID": "1",
    "lastSaleID": "102",
    "lastRegisterID": "2"
  }
}
```

#### Attributes

| firstName | (string) First name of the employee. |
| --- | --- |
| lastName | (string) Last name of the employee. |
| accessPin | (string) The access pin that can be used to quickly switch to this employee when the system is already logged in. |
| lockOut | (boolean) Whether this employee is locked out of the system. |
| archived | (boolean) Whether this employee is archived. Archived employees don’t count towards the account’s employee limit. |
| clockInEmployeeHoursID | (integer) Foreign key for the current EmployeeHours record that the employee is clocked in under. /API/V3/Account/{accountID}/EmployeeHours/{clockInEmployeeHoursID} |
| employeeRoleID | (integer) Foreign key for the employee’s role (specifies rights). If none, then the employee’s own rights apply instead of the role’s. |
| limitToShopID | (integer) Foreign key for the shop the employee is limited to. /API/V3/Account/{accountID}/Shop/{limitToShopID} |
| lastShopID | (integer) The foreign key for the shop the employee is currently (or last) attached to. /API/Acccount/Shop/{lastShopID} |
| lastSaleID | (integer) The foreign key for the sale the employee is currently (or last) working on. /API/V3/Account/{accountID}/Sale/{lastSaleID} |
| lastRegisterID | (integer) The foreign key for the register the employee is currently (or last) attached to. /API/V3/Account/{accountID}/Register/{lastRegisterID} |

---

### PUT Update an employee

Update an existing employee based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Employee.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "firstName": "J",
      "lastName": "Doe",
      "lockOut": "true",
      "archived": "true",
      "clockInEmployeeHoursID": "2",
      "employeeRoleID": "1",
      "limitToShopID": "1",
      "lastShopID": "1",
      "lastSaleID": "102",
      "lastRegisterID": "2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Employee.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Employee": {
    "employeeID": "5",
    "firstName": "J",
    "lastName": "Doe",
    "lockOut": "true",
    "archived": "true",
    "timeStamp": "2021-03-24T15:20:47+00:00",
    "contactID": "19",
    "clockInEmployeeHoursID": "2",
    "employeeRoleID": "1",
    "limitToShopID": "1",
    "lastShopID": "1",
    "lastSaleID": "102",
    "lastRegisterID": "2",
    "Contact": {
      "contactID": "19",
      "custom": "",
      "noEmail": "false",
      "noPhone": "false",
      "noMail": "false",
      "timeStamp": "2021-03-23T15:44:49+00:00",
      "Addresses": "",
      "Phones": "",
      "Emails": "",
      "Websites": ""
    }
  }
}
```

#### Attributes

| firstName | (string) First name of the employee. |
| --- | --- |
| lastName | (string) Last name of the employee. |
| accessPin | (string) The access pin that can be used to quickly switch to this employee when the system is already logged in. |
| lockOut | (boolean) Whether this employee is locked out of the system. |
| archived | (boolean) Whether this employee is archived. Archived employees don’t count towards the account’s employee limit. |
| clockInEmployeeHoursID | (integer) Foreign key for the current EmployeeHours record that the employee is clocked in under. /API/V3/Account/{accountID}/EmployeeHours/{clockInEmployeeHoursID} |
| employeeRoleID | (integer) Foreign key for the employee’s role (specifies rights). If none, then the employee’s own rights apply instead of the role’s. |
| limitToShopID | (integer) Foreign key for the shop the employee is limited to. /API/V3/Account/{accountID}/Shop/{limitToShopID} |
| lastShopID | (integer) The foreign key for the shop the employee is currently (or last) attached to. /API/Acccount/Shop/{lastShopID} |
| lastSaleID | (integer) The foreign key for the sale the employee is currently (or last) working on. /API/V3/Account/{accountID}/Sale/{lastSaleID} |
| lastRegisterID | (integer) The foreign key for the register the employee is currently (or last) attached to. /API/V3/Account/{accountID}/Register/{lastRegisterID} |
| EmployeeRole | (object) The employee’s role (specifies rights). If none, then the employee’s own rights apply instead of the role’s. |

---

### DELETE Delete an employee

Delete an existing employee by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Employee/{employeeID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Employee/{employeeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Employee": {
    "employeeID": "5",
    "firstName": "J",
    "lastName": "Doe",
    "lockOut": "true",
    "archived": "true",
    "timeStamp": "2021-03-24T15:22:44+00:00",
    "contactID": "19",
    "clockInEmployeeHoursID": "2",
    "employeeRoleID": "1",
    "limitToShopID": "1",
    "lastShopID": "1",
    "lastSaleID": "102",
    "lastRegisterID": "2"
  }
}
```

#### Attributes

| employeeID | (integer) The unique numeric idetifier for the employee. Required Field |
| --- | --- |
