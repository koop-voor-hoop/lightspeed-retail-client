---
title: ItemAttributeSet
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ItemAttributeSet/
---

# ItemAttributeSet

#### Description

Holds a definition for a set of attributes. An example would be “Color and Size” with attributeName1 = Color and attributeName2 = Size. Items and Matrices use these to say what type of matrix they are a part of.

#### User Interface

- Inventory → Item Attribute Sets
- Inventory → Matrix → edit a matrix → Setup tab → Matrix Type field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:inventory_base | true |
| --- | --- |

#### ItemAttributeSet Fields

| itemAttributeSetID | (integer) The unique numerical ID for the item attribute set. |
| --- | --- |
| name | (string) The name of the attribute set: Color/Size, Size, Color, 3 Attributes. These are the only allowed values for now. |
| attributeName1 | (string) The name of the first attribute: Color, Attribute 1 |
| attributeName2 | (string) The name of the second attribute: Size, Attribute 2 |
| attributeName3 | (string) The name of the third attribute: Attribute 3 |

#### Sortable Fields

- itemAttributeSetID

---

### GET All item attribute sets

Retrieve all item attributes sets in the account.

> Definition

```
GET /API/V3/Account/{accountID}/ItemAttributeSet.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemAttributeSet.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ItemAttributeSet": [
    {
      "itemAttributeSetID": "1",
      "name": "Color/Size",
      "attributeName1": "Color",
      "attributeName2": "Size",
      "attributeName3": "",
      "system": "true",
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

### GET Single item attribute set

Retrieve a single item attribute set by its ID.

> Definition

```
/API/V3/Account/{accountID}/ItemAttributeSet/{itemAttributeSetID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemAttributeSet/{itemAttributeSetID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemAttributeSet": {
    "itemAttributeSetID": "3",
    "name": "Color",
    "attributeName1": "Color",
    "attributeName2": "",
    "attributeName3": "",
    "system": "true",
    "archived": "false"
  }
}
```

#### Attributes

| itemAttributeSetID | (integer) The unique numerical ID for the item attribute set. Required Field |
| --- | --- |

---

### POST Create an item attribute set

Create a new item attribute set based on given parameters.

> Definition

```
/API/V3/Account/{accountID}/ItemAttributeSet.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
  "name": "Color/Size/Fabric",
  "attributeName1": "Color",
  "attributeName2": "Size",
  "attributeName3": "Fabric",
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemAttributeSet.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemAttributeSet": {
    "itemAttributeSetID": "5",
    "name": "Color/Size/Fabric",
    "attributeName1": "Color",
    "attributeName2": "Size",
    "attributeName3": "Fabric",
    "system": "false",
    "archived": "false"
  }
}
```

#### Attributes

| itemAttributeSetID | (integer) The unique numerical ID for the item attribute set. |
| --- | --- |
| name | (string) The name of the attribute set. Required Field |
| attributeName1 | (string) The name of the first attribute. |
| attributeName2 | (string) The name of the second attribute. |
| attributeName3 | (string) The name of the third attribute. |
| archived | (boolean) Whether the attribute set is archived. |
| system | (boolean) Whether the attribute set is a system set. |

---

### PUT Update an item attribute set

Update an existing item attribute set based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/ItemAttributeSet/{itemAttributeSetID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "Color/Size/Fabric",
    "attributeName1": "Color",
    "attributeName2": "Size",
    "attributeName3": "Fabric",
    "archived": true,
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemAttributeSet/{itemAttributeSetID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemAttributeSet": {
    "itemAttributeSetID": "5",
    "name": "Color/Size/Fabric",
    "attributeName1": "Color",
    "attributeName2": "Size",
    "attributeName3": "Fabric",
    "system": "false",
    "archived": "true"
  }
}
```

#### Attributes

| itemAttributeSetID | (integer) The unique numerical ID for the item attribute set. |
| --- | --- |
| name | (string) The name of the attribute set. |
| attributeName1 | (string) The name of the first attribute. |
| attributeName2 | (string) The name of the second attribute. |
| attributeName3 | (string) The name of the third attribute. |
| archived | (boolean) Whether the attribute set is archived. |
| system | (boolean) Whether the attribute set is a system set. |

---
