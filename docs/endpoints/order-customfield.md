---
title: Order CustomField
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField/
---

# Order CustomField

#### Actions Allowed

| GET/Read (single) | true |
| --- | --- |
| GET/Read (query) | true |
| POST/Create | true |
| PUT/Update | true |
| DELETE/Archive | true |

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### CustomField Fields

Depending on the type of the CustomField, different validation will be enforced on the values assigned to the CustomField on objects

| customFieldID | (integer) The unique numerical ID for the order custom field. |
| --- | --- |
| type | (enum) The type of the CustomField, possible values are: string, text, url, email, datetime, date, boolean, integer, float, single_choice, multi_choice  string: Any string up to 64 characters. text: Any string up to 4096 characters. url: Full web page URL. (e.g. ‘http://www.example.com/’) email: Needs to be valid email format. (e.g. ‘[email protected]’) datetime: datetime value, similar to elsewhere in the API. date: date value, same as above but without the time. boolean: true or false. integer: any integer, non-integers will typically be converted. float: any decimal value. single_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID. multi_choice: values need to be CustomFieldChoice objects with a pre-set customFieldChoiceID |
| name | (string) The name of the CustomField. |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: only settable on float type |
| archived | (boolean) Whether the custom field is archived. |
| CustomFieldChoices | (object) The choices available for this Custom Field. /API/V3/Account/{accountID}/Order/CustomField/CustomFieldChoice |
| default | (mixed) CustomFieldValue the default value for this Custom Field |

#### CustomFieldValue Fields

**Setting CustomFields**

  CustomFieldValues can be set after a CustomField has been defined, and they require a customFieldID.

  The value field’s type depends on that of the CustomField the CustomFieldValue is being set on. String for string, text, url, and email, integer, boolean and float are self-explanatory, and single and multi_choice both take choice objects for the value.

| customFieldValueID | (integer) The primary key. |
| --- | --- |
| value | (mixed) The value of the CustomField for a particular object. Type depends on CustomField type |
| name | (string) The name of the custom field (can only be updated on the CustomField object) |
| type | (string) The type of the custom field (can only be updated on the CustomField object) |
| deleted | (boolean) Set to true in order to delete the CustomFieldValue |
| customFieldID | (integer) The foreign ID for the CustomField this value belongs to. /API/V3/Account/{accountID}/Order/CustomField/{customFieldID} |
| timeStamp | (datetime) Date/time the CustomField was last modified. |

#### Sortable Fields

- customFieldID
- timeStamp
- name

#### See Also

- [CustomFieldChoice](https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField-CustomFieldChoice/#customfieldchoice-fields)

---

### GET All orders custom fields

Retrieve a list of all orders custom fields

> Definition

```
GET /API/V3/Account/{accountID}/Order/CustomField.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField.json"
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
      "customFieldID": "1",
      "type": "string",
      "name": "PO",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false"
    },
    {
      "customFieldID": "2",
      "type": "integer",
      "name": "Ref",
      "uom": "",
      "decimalPrecision": "0",
      "archived": "false"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single order custom field

Retrieve a single order custom field by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "2",
    "type": "integer",
    "name": "Ref",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| customFieldID | (integer) The unique numerical ID for the order custom field. Required Field |
| --- | --- |

---

### POST Create an order custom field

Create an order custom field based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Order/CustomField.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Date",
      "type": "date"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "3",
    "type": "date",
    "name": "Date",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| value | (mixed) The value of the CustomField for a particular object. Type depends on CustomField type |
| --- | --- |
| name | (string) The name of the custom field (can only be updated on the CustomField object) |
| type | (string) The type of the custom field (can only be updated on the CustomField object) |

---

### PUT Update an order custom field

Update an existing order custom field based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "rushed order"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "3",
    "type": "date",
    "name": "rushed order",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "false"
  }
}
```

#### Attributes

| customFieldID | (integer) The unique numerical ID for the order custom field. Required Field |
| --- | --- |
| value | (mixed) The value of the CustomField for a particular object. Type depends on CustomField type |
| name | (string) The name of the custom field (can only be updated on the CustomField object) |
| type | (string) The type of the custom field (can only be updated on the CustomField object) |
| uom | (string) The units of the CustomField, can be up to four characters. |
| decimalPrecision | (integer) The precision to which floats are rounded: only settable on float type |

---

### DELETE Delete an order custom field

Archive an order custom field by its ID. CustomFieldValues for this custom field will not be deleted.

> Definition

```
DELETE /API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/CustomField/{customFieldID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomField": {
    "customFieldID": "3",
    "type": "date",
    "name": "rushed order",
    "uom": "",
    "decimalPrecision": "0",
    "archived": "true"
  }
}
```

#### Attributes

| customFieldID | (integer) The unique numerical ID for the order custom field. Required Field |
| --- | --- |
