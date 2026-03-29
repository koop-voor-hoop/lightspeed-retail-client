---
title: Tag
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Tag/
---

# Tag

#### Description

Read and write tags.

#### User Interface

- Inventory → Items → search form
- Inventory → Items → edit Item → tags field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Tag Fields

| tagID | (integer) The unique numerical ID for the tag. |
| --- | --- |
| name | (string) The name of the tag. |

#### Sortable Fields

- tagID
- name

---

### GET All tags

Retrieve a list of tags in the account

> Definition

```
GET /API/V3/Account/{accountID}Tag.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tag.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Tag": [
    {
      "tagID": "4",
      "name": "aqui"
    },
    {
      "tagID": "3",
      "name": "more"
    },
    {
      "tagID": "2",
      "name": "tags"
    },
    {
      "tagID": "1",
      "name": "webstore"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single tag

Retrieve a single tag by its ID.

> Definition

```
GET /API/V3/Account/{accountID}Tag/{tagID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tag/{tagID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Tag": {
    "tagID": "4",
    "name": "Here"
  }
}
```

| tagID | (integer) The unique numerical ID for the tag. Required Field |
| --- | --- |

---

### POST Create a tag

Create a tag based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Tag.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "New Tag"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tag.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Tag": {
    "tagID": "5",
    "name": "newtag"
  }
}
```

#### Attributes

| name | (string) The name of the tag. |
| --- | --- |

---

### PUT Update a tag

Update an existing tag based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Tag/{tagID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "newest"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tag/{tagID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Tag": {
    "tagID": "8",
    "name": "newest"
  }
}
```

#### Attributes

| name | (string) The name of the tag. |
| --- | --- |

---

### DELETE Delete a tag

Permanently delete an existing tag by its ID. The tag will be removed from all records.

> Definition

```
DELETE /API/V3/Account/{accountID}/Tag/{tagID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "newest"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tag/{tagID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Tag": {
    "tagID": "8",
    "name": "newest"
  }
}
```

#### Attributes

| name | (string) The name of the tag. |
| --- | --- |
