---
title: Category
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Category/
---

# Category

#### Description

Retrieve the [categories](https://retail-support.lightspeedhq.com/hc/en-us/articles/360036155554-Creating-categories) used to organize items. They are hierarchical, much like a file directory structure.

#### User Interface

- Admin → Inventory → Categories
- Inventory → Items → Edit Item → Category Field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Request Cost

| GET/Read (single) | Default |
| --- | --- |
| GET/Read (query) | Default |
| POST/Create | 10 drips |
| PUT/Update | 10 drips |
| DELETE/Delete | 10 drips |

#### Additional Relations

- Parent

#### Category Fields

| categoryID | (integer) The unique numerical ID for the category. /API/V3/Account/{accountID}/Category/{categoryID} |
| --- | --- |
| name | (string) The category’s descriptive name. |
| nodeDepth | (string) How many parent categories the category has. |
| fullPathName | (string) A slash delimited string that lists the full path to the category. |
| leftNode | (integer) Used to build the category structure. |
| rightNode | (integer) Used to build the category structure. |
| createTime | (datetime) Date/time of creation of this record. |
| timeStamp | (datetime) Date/time the record was last modified. |
| parentID | (integer) The foreign key for the parent Category. /API/V3/Account/{accountID}/Category/{parentID} |
| Parent | (object) The parent category. /API/V3/Account/{accountID}/Category |

#### Sortable Fields

- categoryID
- timeStamp
- leftNode
- rightNode

---

### GET All Categories

Retrieve a list of all categories in this account.

> Description

```
GET /API/V3/Account/{accountID}/Category.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/Category.json'
```

> Sample Json response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Category": [
    {
      "categoryID": "1",
      "name": "Accesories",
      "nodeDepth": "0",
      "fullPathName": "Accesories",
      "leftNode": "1",
      "rightNode": "2",
      "createTime": "2021-02-29T19:22:55+00:00",
      "timeStamp": "2021-08-12T13:32:52+00:00",
      "parentID": "0"
    },
    {
      "categoryID": "2",
      "name": "Misc",
      "nodeDepth": "0",
      "fullPathName": "Misc",
      "leftNode": "3",
      "rightNode": "6",
      "createTime": "2021-08-12T13:32:51+00:00",
      "timeStamp": "2021-08-12T13:39:45+00:00",
      "parentID": "0"
    },
    {
      "categoryID": "3",
      "name": "Home",
      "nodeDepth": "1",
      "fullPathName": "Misc/Home",
      "leftNode": "4",
      "rightNode": "5",
      "createTime": "2021-08-12T13:39:45+00:00",
      "timeStamp": "2021-08-12T13:39:45+00:00",
      "parentID": "2"
    }
  ]
}
```

#### Arguments

|  | No arguments available. |
| --- | --- |

---

### GET Retrieve a Category

Returns a single category by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Category/{categoryID}.json
```

> Sample request

```
$ curl -H "Authorization: Bearer {Access Token}" \
'https://api.lightspeedapp.comGET /API/V3/Account/{accountID}/Category/{categoryID}.json'
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Category": {
    "categoryID": "1",
    "name": "Accesories",
    "nodeDepth": "0",
    "fullPathName": "Accesories",
    "leftNode": "1",
    "rightNode": "2",
    "createTime": "2021-02-29T19:22:55+00:00",
    "timeStamp": "2021-08-12T13:32:52+00:00",
    "parentID": "0"
  }
}
```

#### Arguments

| categoryID | (integer) The primary ID. /API/V3/Account/{accountID}/Category/{categoryID} |
| --- | --- |

---

### POST Create a Category

Create a new Category based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Category.json
```

> Sample request

```
curl -X POST -H "Authorization: Bearer {Access Token}" \
-H "Content-Type: application/json" \
-d ' {
  "name": "Bath",
  "fullPathName": "Bath",
  "parentID": "0"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Category.json"
```

> Sample JSON response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Category": {
		"categoryID": "7",
		"name": "Bath",
		"nodeDepth": "0",
		"fullPathName": "Bath",
		"leftNode": "3",
		"rightNode": "4",
		"createTime": "2021-03-15T18:05:48+00:00",
		"timeStamp": "2021-03-15T18:05:48+00:00",
		"parentID": "0"
	}
}
```

#### Arguments

| name | (string) The category’s descriptive name. |
| --- | --- |
| fullPathName | (string) This is a delimited string that lists the full path to the category. The delimiter is ‘/’ (slash). |
| parentID | (integer) The foreign key for the parent Category. /API/V3/Account/{accountID}/Category/{parentID} |

---

### PUT Update a Category

Update an existing Category based on the given parameters.

#### Arguments

| name | (string) The category’s descriptive name. |
| --- | --- |
| fullPathName | (string) This is a delimited string that lists the full path to the category. The delimiter is ‘/’ (slash). |
| parentID | (integer) The foreign key for the parent Category. /API/V3/Account/{accountID}/Category/{parentID} |

> Definition

```
PUT /API/V3/Account/{accountID}/Category/{categoryID}.json
```

> Sample request

```
curl -X PUT -H "Authorization: Bearer {Access Token}" \
-H "Content-Type: application/json" \
-d ' {
  "name": "Bathroom",
  "fullPathName": "Bathroom"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Category/{categoryID}.json"
```

> Sample JSON response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Category": {
		"categoryID": "7",
		"name": "Bathroom",
		"nodeDepth": "0",
		"fullPathName": "Bathroom",
		"leftNode": "3",
		"rightNode": "4",
		"createTime": "2021-03-15T18:05:48+00:00",
		"timeStamp": "2021-03-15T18:19:42+00:00",
		"parentID": "0"
	}
}
```

---

### DELETE Delete a Category

Permanently delete an existing category by its ID.

#### Arguments

| categoryID | (integer) The primary ID. /API/V3/Account/{accountID}/Category/{categoryID} |
| --- | --- |

> Definition

```
DELETE /API/V3/Account/{accountID}/Category/{categoryID}.json
```

> Sample request

```
curl -X DELETE -H "Authorization: Bearer {Access Token}" \
-H "Content-Type: application/json" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Category/{categoryID}.json"
```

> Sample JSON response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Category": {
		"categoryID": "7",
		"name": "Bathroom",
		"nodeDepth": "0",
		"fullPathName": "Bathroom",
		"leftNode": "11",
		"rightNode": "12",
		"createTime": "2021-03-15T18:05:48+00:00",
		"timeStamp": "2021-03-15T18:21:50+00:00",
		"parentID": "0"
	}
}
```
