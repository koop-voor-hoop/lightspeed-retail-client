---
title: Season
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Season/
---

# Season

#### Description

Seasons have been deprecated. Items are organized with Categories, Manufacturers, and Tags only (Season + Department removed).

Another way to organize items.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Season Fields

| seasonID | (integer) The unique numerical ID for the season. /API/V3/Account/{accountID}/Season/{seasonID} |
| --- | --- |
| name | (string) The name/description of the department. |

#### Sortable Fields

- seasonID

---

### GET All seasons

Retrieve a list of all seasons in the account

> Definition

```
GET /API/V3/Account/{accountID}/Season.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Season.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Season": [
    {
      "seasonID": "1",
      "name": "Winter"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single season

Retrieve a single season by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Season/{seasonID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Season/{seasonID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Season": {
    "seasonID": "4",
    "name": "Spring-16"
  }
}
```

#### Attributes

| seasonID | (integer) The unique numerical ID for the season. Required Field |
| --- | --- |

---

### POST Create a season

Create a season based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Season.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Spring-16"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Season.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Season": {
    "seasonID": "4",
    "name": "Spring-16"
  }
}
```

#### Attributes

| name | (string) The name/description of the department. Required Field |
| --- | --- |

---

### PUT Update a season

Update an existing season based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Season/{seasonID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Spring-14"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Season/{seasonID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Season": {
    "seasonID": "4",
    "name": "Spring-14"
  }
}
```

#### Attributes

| seasonID | (integer) The unique numerical ID for the season. |
| --- | --- |
| name | (string) The name/description of the department. |

---

### DELETE Delete a season

Permanently delete a season by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Season/{seasonID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Season/{seasonID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Season": {
    "seasonID": "4",
    "name": "Spring-14"
  }
}
```

#### Attributes

| seasonID | (integer) The unique numerical ID for the season. Required Field |
| --- | --- |

---
