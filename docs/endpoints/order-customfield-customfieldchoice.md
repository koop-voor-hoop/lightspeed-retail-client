---
title: Order CustomField CustomFieldChoice
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField-CustomFieldChoice/
---

# Order CustomField CustomFieldChoice

#### Actions Allowed

| GET/Read (single) | true |
| --- | --- |
| GET/Read (query) | true |
| POST/Create | true |
| PUT/Update | true |
| DELETE/Delete | true |

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### CustomFieldChoice Fields

- Single_ and multi_choice fields must be created with at least 1 CustomFieldChoice object.
- Each field can have up to 64 choices set on it and must have at least one, the last remaining CustomFieldChoice for a field cannot be deleted.
- CustomFieldChoices must be unique on a given CustomField, uniqueness is enforced on the value field, or the name field when a separate value is omitted.

| customFieldChoiceID | (integer) The unique numerical ID for the order custom field choice. |
| --- | --- |
| value | (string) The string value of this choice if different from the name. (optional) |
| name | (string) The name of the CustomFieldChoice. |
| canBeDeleted | (boolean) Whether the choice can be deleted. Choices that are in use cannot be deleted. |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/{customFieldID} |
| CustomField | (object) The CustomField this choice belongs to. /API/V3/Account/{accountID}/Order/CustomField/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomFieldChoice was last modified. |

#### Sortable Fields

- customFieldChoiceID
- timeStamp

#### See Also

- [CustomField](https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField/#order-customfield-fields)

---

### GET All order custom field choices

Retrieve a list of all order custom field choices

> Definition

```
GET /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice.json"
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
      "customFieldChoiceID": "2",
      "value": "",
      "name": "b",
      "canBeDeleted": "true",
      "customFieldID": "4"
    },
    {
      "customFieldChoiceID": "3",
      "value": "",
      "name": "c",
      "canBeDeleted": "true",
      "customFieldID": "4"
    }
  ]
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |

---

### GET Single order custom field choice

Retrieve a single order custom field choice by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "3",
    "name": "c",
    "value": "",
    "canBeDeleted": "true",
    "customFieldID": "4"
  }
}
```

#### Attributes

| customFieldChoiceID | (integer) The unique numerical ID for the order custom field choice. Required Field |
| --- | --- |
| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |

---

### POST Create an order custom field choice

Create an order custom field choice based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "d",
      "value": "Letter D"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "4",
    "name": "d",
    "value": "Letter D",
    "canBeDeleted": "true",
    "customFieldID": "4"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| value | (string) The string value of this choice if different from the name. (optional) |
| name | (string) The name of the CustomFieldChoice. |

---

### PUT Update an order custom field

Update an existing order custom field based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "value": "D"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "4",
    "name": "d",
    "value": "D",
    "canBeDeleted": "true",
    "customFieldID": "4"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The unique numerical ID for the order custom field choice. Required Field |
| value | (string) The string value of this choice if different from the name. (optional) |
| name | (string) The name of the CustomFieldChoice. |

---

### DELETE Delete an order custom field choice

Permanently delete an order custom field choice by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}/CustomFieldChoice/{customFieldChoiceID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomFieldChoice": {
    "customFieldChoiceID": "4",
    "value": "D",
    "name": "d",
    "canBeDeleted": "true",
    "customFieldID": "4"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this choice belongs to. Required Field |
| --- | --- |
| customFieldChoiceID | (integer) The unique numerical ID for the order custom field choice. Required Field |
