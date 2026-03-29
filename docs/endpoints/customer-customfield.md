---
title: Customer CustomField
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomField/
---

# Customer CustomField

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### CustomField Fields

Depending on the type of the CustomField, different validation will be enforced on the values assigned to the CustomField on objects

| customFieldID | (integer) The primary key. |
| --- | --- |
| type | (enum) The type of the CustomField, possible values are:  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: Datetime value, similar to elsewhere in the API. date: Date value, same as above but without the time. boolean: True or false. integer: Any integer, non-integers will typically be converted. float: Any decimal value. single_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID |
| name | (string) The name of the CustomField. |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: can only be set on CustomFields of type ‘float’. |
| archived | (boolean) Whether the custom field is archived. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |

#### CustomFieldChoice Fields

Click [Here](https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomeField-CustomFieldChoice/#customfieldchoise-fields) for more information on CustomFieldChoice Fields.

#### CustomFieldValue Fields

**Setting CustomFields**

  CustomFieldValues can be set after a CustomField has been defined, and they require a customFieldID.

  The value field’s type depends on that of the CustomField the CustomFieldValue is being set on.

  **Deleting CustomFields**

  CustomFieldValues can be deleted by setting their deleted flag to true on an update of the parent.

| customFieldValueID | (integer) The primary key.. |
| --- | --- |
| value | (mixed) The value of the CustomField for a particular object. Type depends on CustomField type. |
| name | (string) The name of the custom field. (can only be updated on the CustomField object) |
| type | (string) The type of the custom field. (can only be updated on the CustomField object) |
| deleted | (boolean) Set to true in order to delete the CustomFieldValue. |
| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomField was last modified. |

#### Sortable Fields

- customFieldID
- timeStamp
- name

---

### GET All Custom Fields

> Definition

```
GET /API/V3/Account/{accountID}/Customer/CustomField.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CustomField": [
    {
      "customFieldID": "6",
      "type": "boolean",
      "name": "Student",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false",
      "default": "false"
    },
    {
      "customFieldID": "7",
      "type": "integer",
      "name": "weight",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false"
    },
    {
      "customFieldID": "8",
      "type": "multi_choice",
      "name": "1",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false",
      "default": ""
    }
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Retrieve a custom Field

Retrieve a single custom field by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "8",
    "type": "multi_choice",
    "name": "1",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false",
    "default": ""
  }
}
```

#### Attributes

| customFieldID | (integer) The primary key. Required Field |
| --- | --- |

---

### POST Create a Custom Field

Create a custom field based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Customer/CustomField.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "type": "text",
    "name": "test1",
    "uom": "gram",
    "defatul": 400
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField.json"
```

> Sample JSON Response

```json
{
	"@attributes": {
		"count": "1"
	},
	"CustomField": {
		"customFieldID": "12",
		"type": "text",
		"name": "test1",
		"uom": "gram",
		"decimalPrecision": "0",
		"archived": "false"
	}
}
```

#### Attributes

| type | (enum) The type of the CustomField, possible values are:  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: Datetime value, similar to elsewhere in the API. date: Date value, same as above but without the time. boolean: True or false. integer: Any integer, non-integers will typically be converted. float: Any decimal value. single_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID.   *Required Field |
| --- | --- |
| name | (string) The name of the CustomField. Required Field |
| uom | (string) The units of the CustomField, can be up to four characters. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |

---

### PUT Update a Custom Field

> Definition

```
PUT /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "test3"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
	"@attributes": {
		"count": "1"
	},
	"CustomField": {
		"customFieldID": "12",
		"type": "text",
		"name": "test3",
		"uom": "gram",
		"decimalPrecision": "0",
		"archived": "false"
	}
}
```

#### Attributes

| customFieldID | (integer) The primary key. Required Field |
| --- | --- |
| type | (enum) The type of the CustomField, possible values are:  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: Datetime value, similar to elsewhere in the API. date: Date value, same as above but without the time. boolean: True or false. integer: Any integer, non-integers will typically be converted. float: Any decimal value. single_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: Values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID |
| name | (string) The name of the CustomField. |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: can only be set on CustomFields of type ‘float’. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |

---

### DELETE Archive a custom field

Archive a customer custom field by its ID. CustomFieldValues for this custom field will not be deleted.

> Definition

```
DELETE /API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "12",
    "type": "float",
    "name": "test3",
    "uom": "gram",
    "decimalPrecision": "2",
    "archived": "true"
  }
}
```

#### Attributes

| customFieldID | (integer) The primary key. Required Field |
| --- | --- |
