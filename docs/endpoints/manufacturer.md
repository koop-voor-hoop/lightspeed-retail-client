---
title: Manufacturer
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Manufacturer/
---

# Manufacturer

#### Description

The list of product manufacturers. This is separate from Vendors (suppliers). Every item can have one Manufacturer (but multiple Vendors).

#### User Interface

- Admin → Inventory → Manufacturers
- Inventory → Items → edit Item → Manufacturer field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| [DELETE/Delete] | False |

#### Manufacturer Fields

| manufacturerID | (integer) The unique numerical ID for the manufacturer. |
| --- | --- |
| name | (string) The name/description of the manufacturer. |
| createTime | (datetime) Date/time of creation of this record. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- manufacturerID
- timeStamp
- name

---

### GET All manufacturers

Retrieve a list of all manufacturers

> Definition

```
GET /API/V3/Account/{accountID}/Manufacturer.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Manufacturer.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Manufacturer": [
    {
      "manufacturerID": "1",
      "name": "RED ARROW",
      "createTime": "2021-02-29T19:22:05+00:00",
      "timeStamp": "2021-02-29T19:22:05+00:00"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single manufacturer

Retrieve a single manufacturer by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Manufacturer/{manufacturerID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Manufacturer/{manufacturerID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Manufacturer": {
    "manufacturerID": "2",
    "name": "LightSpeed",
    "createTime": "2021-03-18T20:57:49+00:00",
    "timeStamp": "2021-04-03T16:17:11+00:00"
  }
}
```

#### Attributes

| manufacturerID | (integer) The unique numerical ID for the manufacturer. Required Field |
| --- | --- |

---

### POST Create a manufacturer

Create a manufacturer based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Manufacturer.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Retail"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Manufacturer.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Manufacturer": {
    "manufacturerID": "4",
    "name": "Retail",
    "createTime": "2021-04-03T16:27:09+00:00",
    "timeStamp": "2021-04-03T16:27:09+00:00"
  }
}
```

#### Attributes

| name | (string) The name/description of the manufacturer. Required Field |
| --- | --- |

---

### PUT Update a manufacturer

Update an existing manufacturer based on the given parameter.

> Definition

```
PUT /API/V3/Account/{accountID}/Manufacturer/{manufacturerID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Lightspeed Retail"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Manufacturer/{manufacturerID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Manufacturer": {
    "manufacturerID": "4",
    "name": "Lightspeed Retail",
    "createTime": "2021-04-03T16:27:09+00:00",
    "timeStamp": "2021-04-03T16:29:51+00:00"
  }
}
```

#### Attributes

| manufacturerID | (integer) The unique numerical ID for the manufacturer. Required Field |
| --- | --- |
| name | (string) The name/description of the manufacturer. Required Field |

---
