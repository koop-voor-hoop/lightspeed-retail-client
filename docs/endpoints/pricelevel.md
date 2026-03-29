---
title: PriceLevel
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/PriceLevel/
---

# PriceLevel

#### Description

Access to PriceLevels. PriceLevels are used to specify different
pricing for items.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| PUT/Update | True |

#### PriceLevel Fields

| priceLevelID | (integer) The unique numerical ID of the PriceLevel. |
| --- | --- |
| name | (string) The name of the PriceLevel. |
| archived | (boolean) Whether this PriceLevel is archived. |
| canBeArchived | (boolean) Whether this PriceLevel is allowed to be archived.  Note that setting this field has no effect. |
| type | (enum) The type of PriceLevel. |
| Calculation | (reference) Parameters used in calculating prices from cost. |

#### Sortable Fields

- orderLineID
- name

---

### GET All price levels

Retrieve a list of all price levels in the account

> Definition

```
GET /API/V3/Account/{accountID}/PriceLevel.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/PriceLevel.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "PriceLevel": [
    {
      "priceLevelID": "1",
      "name": "Default",
      "archived": "false",
      "canBeArchived": "false",
      "type": "fixed",
      "Calculation": ""
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single price level

Retrieve a single price level by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/PriceLeve/{priceLevelID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/PriceLeve/{priceLevelID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PriceLevel": {
    "priceLevelID": "3",
    "name": "Online",
    "archived": "false",
    "canBeArchived": "false",
    "type": "fixed",
    "Calculation": ""
  }
}
```

#### Attributes

| priceLevelID | (integer) The unique numerical ID of the PriceLevel. Required Field |
| --- | --- |

---

### PUT Update a price level

Update an existing price level based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/PriceLevel/{priceLevelID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "My Online Store"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/PriceLevel/{priceLevelID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "PriceLevel": {
    "priceLevelID": "3",
    "name": "My Online Store",
    "archived": "false",
    "canBeArchived": "false",
    "type": "fixed",
    "Calculation": ""
  }
}
```

#### Attributes

| name | (string) The name of the PriceLevel. |
| --- | --- |

---
