---
title: Item CustomField
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField/
---

# Item CustomField

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### CustomField Fields

Depending on the type of the CustomField, different validation will be enforced on the values assigned to the CustomField on objects

| customFieldID | (integer) The unique numerical ID for the item custom field. |
| --- | --- |
| type | (enum) The type of the CustomField, possible values are: string, text, url, email, datetime, date, boolean, integer, float, single_choice, multi_choice  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: datetime value, similar to elsewhere in the API. date: date value, same as above but without the time. boolean: true or false. integer: any integer, non-integers will typically be converted. float: any decimal value. single_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID |
| name | (string) The name of the CustomField. |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: only settable on float type. |
| archived | (boolean) Whether the custom field is archived. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |

#### CustomFieldValue Fields

**Setting CustomFields**

  CustomFieldValues can be set after a CustomField has been defined, and they require a customFieldID.

  The value field’s type depends on that of the CustomField the CustomFieldValue is being set on. String for string, text, url, and email, integer, boolean and float are self-explanatory, and single and multi_choice both take choice objects for the value.

| customFieldValueID | (integer) The unique numerical ID for the item custom field. |
| --- | --- |
| value | (mixed) The value of the CustomField for a particular object. Type depends on CustomField type. |
| name | (string) The name of the custom field. (can only be updated on the CustomField object) |
| type | (string) The type of the custom field. (can only be updated on the CustomField object) |
| deleted | (boolean) Set to true in order to delete the CustomFieldValue. |
| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. /API/V3/Account/{accountID}/Item/CustomField/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomField was last modified. |

#### Sortable Fields

- customFieldID
- timeStamp
- name

#### See Also

- [CustomFieldChoice](https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField-CustomFieldChoice/#customfieldchoice-fields)

---

### GET All item custom fields

Retrieve a list of all item custom fields in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Item/CustomField.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField.json"
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
      "customFieldID": "2",
      "type": "integer",
      "name": "Size",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single item custom field

> Definition

```
GET /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "3",
    "type": "integer",
    "name": "weight",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. Required Field |
| --- | --- |

---

### POST Create an item custom field

> Definition

```
POST /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "type": "email",
      "name": "email",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "10",
    "type": "email",
    "name": "email",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| type | (enum) The type of the CustomField, possible values are: string, text, url, email, datetime, date, boolean, integer, float, single_choice, multi_choice  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: datetime value, similar to elsewhere in the API. date: date value, same as above but without the time. boolean: true or false. integer: any integer, non-integers will typically be converted. float: any decimal value. single_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID |
| --- | --- |
| name | (string) The name of the CustomField. |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: only settable on float type. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |

---

### PUT Update an item custom field

Update an existing item custom field

> Definition

```
PUT /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "email 3"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "11",
    "type": "email",
    "name": "email 3",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| name | (string) The name of the CustomField. |
| --- | --- |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: only settable on float type. |
| default | (mixed) CustomFieldValue the default value for this Custom Field. |
| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. Required Field |

---

### DELETE Delete an item custom field

Archive an item custom field by its ID. CustomFieldValues for this custom field will not be deleted.

> Definition

```
DELETE /API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "11",
    "type": "email",
    "name": "email 3",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "true"
  }
}
```

#### Attributes

| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. Required Field |
| --- | --- |
