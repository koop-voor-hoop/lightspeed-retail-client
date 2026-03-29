---
title: Item CustomField CustomFieldChoice
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField-CustomFieldChoice/
---

# Item CustomField CustomFieldChoice

#### Actions Allowed

| GET/Read (single) | true |
| --- | --- |
| GET/Read  (query) | true |
| POST/Create | true |
| PUT/Update | true |
| DELETE/Delete | true |

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### CustomFieldChoice Fields

- Single_ and multi_choice fields must be created with at least 1 CustomFieldChoice object.
- Each field can have up to 64 choices set on it and must have at least one, the last remaining CustomFieldChoice for a field cannot be deleted.
- CustomFieldChoices must be unique on a given CustomField, uniqueness is enforced on the value field, or the name field when a separate value is omitted.

| customFieldChoiceID | (integer) The unique numerical ID for the item custom field choice. |
| --- | --- |
| value | (string) The string value of this choice if different from the name. (optional) |
| name | (string) The name of the CustomFieldChoice. |
| canBeDeleted | (boolean) Whether the choice can be deleted. Choices that are in use cannot be deleted. |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}/{customFieldID} |
| CustomField | (object) The CustomField this choice belongs to. /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomFieldChoice was last modified. |

#### Sortable Fields

- customFieldChoiceID
- timeStamp

#### See Also

- [CustomField](https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField)

---

### GET All item custom field choices

Retrieve a list of all item custom field choices.

> Definition

```
GET /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice.json"
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
      "name": "a",
      "canBeDeleted": "true",
      "customFieldID": "7"
    },
    {
      "customFieldChoiceID": "2",
      "value": "",
      "name": "b",
      "canBeDeleted": "true",
      "customFieldID": "7"
    },
    {
      "customFieldChoiceID": "3",
      "value": "",
      "name": "c",
      "canBeDeleted": "true",
      "customFieldID": "7"
    }
  ]
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |

---

### GET Single item custom field choice

Retrieve a single item custom field choice.

> Definition

```
/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "2",
    "name": "b",
    "value": "",
    "canBeDeleted": "true",
    "customFieldID": "7"
  }
}
```

#### Attributes

| customFieldChoiceID | (integer) The unique numerical ID for the item custom field choice. Required Field |
| --- | --- |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |

---

### POST Create an item custom field choice

Create a new item custom field choice based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "G",
      "value": "Letter G"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "8",
    "name": "G",
    "value": "Letter G",
    "canBeDeleted": "true",
    "customFieldID": "7"
  }
}
```

#### Attributes

| value | (string) The string value of this choice if different from the name. (optional) |
| --- | --- |
| name | (string) The name of the CustomFieldChoice. |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |

---

### PUT Update an item custom field choice

Update an existing item custom field choice based on the given parameters

> Definition

```
PUT /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "H",
      "value": "Letter H"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "8",
    "name": "H",
    "value": "Letter H",
    "canBeDeleted": "true",
    "customFieldID": "7"
  }
}
```

#### Attributes

| value | (string) The string value of this choice if different from the name. (optional) |
| --- | --- |
| name | (string) The name of the CustomFieldChoice. |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| customFieldChoiceID | (integer) The unique numerical ID for the item custom field choice. Required Field |

---

### DELETE Delete an item custom field choice

Permanently delete an existing item custom field by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "8",
    "value": "Letter H",
    "name": "H",
    "canBeDeleted": "true",
    "customFieldID": "7"
  }
}
```
