---
title: Serialized
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Serialized/
---

# Serialized

#### Description

Serial numbers owned by items or customers.

#### User Interface

- Inventory → Items & Inventory → Serial Numbers.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### Serialized Fields

| serializedID | (integer) The unique numerical ID for the serial number. /API/V3/Account/{accountID}/Serialized/{serializedID} |
| --- | --- |
| colorName | (string) The color of the serialized item. |
| sizeName | (string) The size of hte serialized item. |
| serial | (string) The serial number of the item. |
| description | (string) A description of the item if it’s not connected to an Item record. |
| itemID | (integer) The foreign key for the item this is a serialized entry for. /API/V3/Account/{accountID}/Item/{itemID} |
| saleLineID | (integer) The foreign key for the sale line where this entry was sold /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
| customerID | (integer) The foreign key for the customer who owns this serial number item. /API/V3/Account/{accountID}/Customer/{customerID} |
| timeStamp | (datetime) The date/time at which the record was last modified. |

#### Sortable Fields

- serializedID
- timeStamp
- serial

#### See Also

- [Tag](https://developers.lightspeedhq.com/retail/endpoints/Tag/#tag-fields)

---

### GET All serial numbers

Retrieve a list of all serial numbers in the account

> Definition

```
GET /API/V3/Account/{accountID}/Serialized.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Serialized.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Serialized": [
    {
      "serializedID": "1",
      "colorName": "",
      "sizeName": "",
      "serial": "",
      "description": "fixing stuff",
      "timeStamp": "2021-10-25T15:12:20+00:00",
      "itemID": "0",
      "saleLineID": "0",
      "customerID": "2"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single serial number

Retrieve a single serial number by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Serialized/{serializedID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Serialized/{serializedID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Serialized": {
    "serializedID": "4",
    "colorName": "",
    "sizeName": "",
    "serial": "",
    "description": "",
    "timeStamp": "2021-04-03T16:01:27+00:00",
    "itemID": "0",
    "saleLineID": "0",
    "customerID": "2"
  }
}
```

#### Attributes

| serializedID | (integer) The unique numerical ID for the serial number. Required Field |
| --- | --- |

---

### POST Create a serial number

Create a serial number based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Serialized.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "colorName": "Test",
        "sizeName": "Large",
        "serial": "123456789",
        "description": "Test Large Serial Number"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Serialized.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Serialized": {
    "serializedID": "5",
    "colorName": "Test",
    "sizeName": "Large",
    "serial": "123456789",
    "description": "Test Large Serial Number",
    "timeStamp": "2021-04-20T19:01:26+00:00",
    "itemID": "0",
    "saleLineID": "0",
    "customerID": "0"
  }
}
```

#### Attributes

| colorName | (string) The color of the serialized item. |
| --- | --- |
| sizeName | (string) The size of hte serialized item. |
| serial | (string) The serial number of the item. |
| description | (string) A description of the item if it’s not connected to an Item record. |
| itemID | (integer) The foreign key for the item this is a serialized entry for. |
| saleLineID | (integer) The foreign key for the sale line where this entry was sold |
| customerID | (integer) The foreign key for the customer who owns this serial number item. |

---

### PUT Update a serial number

Update an existing serial number based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Serialized/{serializedID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "serializedID": "5",
        "colorName": "Yellow",
        "sizeName": "Large",
        "serial": "YL-123456",
        "description": "Yellow Large Serial Number"
     }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Serialized/{serializedID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Serialized": {
    "serializedID": "5",
    "colorName": "Yellow",
    "sizeName": "Large",
    "serial": "YL-123456",
    "description": "Yellow Large Serial Number",
    "timeStamp": "2021-04-20T19:03:44+00:00",
    "itemID": "0",
    "saleLineID": "0",
    "customerID": "0"
  }
}
```

#### Attributes

| colorName | (string) The color of the serialized item. |
| --- | --- |
| sizeName | (string) The size of hte serialized item. |
| serial | (string) The serial number of the item. |
| description | (string) A description of the item if it’s not connected to an Item record. |
| itemID | (integer) The foreign key for the item this is a serialized entry for. |
| saleLineID | (integer) The foreign key for the sale line where this entry was sold |
| customerID | (integer) The foreign key for the customer who owns this serial number item. |

---

### DELETE Delete a serial number

Permanently delete a serial number by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Serialized/{serializedID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Serialized/{serializedID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Serialized": {
    "serializedID": "5",
    "colorName": "Yellow",
    "sizeName": "Large",
    "serial": "YL-123456",
    "description": "Yellow Large Serial Number",
    "timeStamp": "2021-04-20T19:03:44+00:00",
    "itemID": "0",
    "saleLineID": "0",
    "customerID": "0"
  }
}
```

#### Attributes

| serializedID | (integer) The unique numerical ID for the serial number. Required Field |
| --- | --- |

---
