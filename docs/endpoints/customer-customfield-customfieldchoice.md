---
title: Customer CustomField CustomFieldChoice
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomField-CustomFieldChoice/
---

# Customer CustomField CustomFieldChoice

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### CustomFieldChoice Fields

- Single_ and multi_choice fields must be created with at least 1 CustomFieldChoice object.
- Each field can have up to 64 choices set on it and must have at least one, the last remaining CustomFieldChoice for a field cannot be deleted.
- CustomFieldChoices must be unique on a given CustomField, uniqueness is enforced on the value field, or the name field when a separate value is omitted.

| customFieldChoiceID | (integer) The unique numerical ID for the customer custom field. |
| --- | --- |
| value | (string) The string value of this choice if different from the name. (optional) |
| name | (string) The name of the CustomFieldChoice. |
| canBeDeleted | (boolean) Whether the choice can be deleted. Choices that are in use cannot be deleted. |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomFieldChoice was last modified. |

#### Sortable Fields

- customFieldChoiceID
- timeStamp

#### See Also:

- [CustomField](https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomField/#customfield-fields)

---

### GET All Custom Field Choices

Retrieve all Custom Field choices.

> Definition

```
GET /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/CustomFieldChoice.json'
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CustomFieldChoice": [
    {
      "customFieldChoiceID": "1",
      "value": "",
      "name": "1",
      "canBeDeleted": "true",
      "customFieldID": "8"
    },
    {
      "customFieldChoiceID": "2",
      "value": "",
      "name": "2",
      "canBeDeleted": "true",
      "customFieldID": "8"
    },
    {
      "customFieldChoiceID": "3",
      "value": "",
      "name": "3",
      "canBeDeleted": "false",
      "customFieldID": "8"
    }
  ]
}
```

### Attributes

| customFieldID | (integer) Custom Field primary key. Required Field |
| --- | --- |

---

### GET Retrieve a Custom Field Choice

Retrieve a single Custom Field Choice by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json'
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "3",
    "name": "3",
    "value": "",
    "canBeDeleted": "false",
    "customFieldID": "8"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The Custom Field Choice primary key. Required Field |

---

### POST Create a Custom Field Choice

Create a Custom Field Choice.

> Definition

```
POST /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
  "name": "{string}"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customFieldID}/CustomField/CustomFieldChoice.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "7",
    "name": "123",
    "value": "",
    "canBeDeleted": "true",
    "customFieldID": "8"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The Custom Field Choice primary key. Required Field |
| name | (string) The name of the CustomFieldChoice. Required Field |
| canBeDeleted | (boolean) Whether the choice can be deleted. Choices that are in use cannot be deleted. |

---

### PUT Update a Custom Field Choice

> Definition

```
PUT /API/V3/Account/{accountID}/Customer/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "12341234"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "7",
    "name": "12341234",
    "value": "",
    "canBeDeleted": "true",
    "customFieldID": "8"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The Custom Field Choice primary key. Required Field |
| name | (string) The name of the CustomFieldChoice. |
| canBeDeleted | (boolean) Whether the choice can be deleted. Choices that are in use cannot be deleted. |

---

### DELETE Delete a Custom Field Choice

Permanently delete a Custom Field Choice by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Customer/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "7",
    "value": "",
    "name": "update",
    "canBeDeleted": "true",
    "customFieldID": "8"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The Custom Field Choice primary key. Required Field |
