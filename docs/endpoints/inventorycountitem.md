---
title: InventoryCountItem
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/InventoryCountItem/
---

# InventoryCountItem

#### Description

The amount counted for a particular item at a particular time.

#### User Interface

- Inventory → Inventory Counts → Counts

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:inventory_counts | true |
| --- | --- |

#### InventoryCountItem Fields

| inventoryCountItemID | (integer) The unique numerical ID for the inventory count item.  /API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID} |
| --- | --- |
| qty | (integer) The amount counted. |
| timeStamp | (datetime) The date/time at which the count was made. |
| inventoryCountID | (integer) The foreign key for the count this count belongs to. /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID} |
| itemID | (integer) The foreign key for the item this count is for. /API/V3/Account/{accountID}/Item/{itemID} |
| employeeID | (integer) The foreign key for the employee that made the count. /API/V3/Account/{accountID}/Employee/{employeeID} |

#### Sortable Fields

- inventoryCountItemID
- inventoryCountID
- itemID

---

### GET All Inventories Count Items

Retrieve all the inventories count items

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountItem.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountItem.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "InventoryCountItem": [
    {
      "inventoryCountItemID": "1",
      "qty": "150",
      "timeStamp": "2021-03-26T02:38:53+00:00",
      "inventoryCountID": "1",
      "itemID": "22",
      "employeeID": "1"
    },
    {
      "inventoryCountItemID": "2",
      "qty": "40",
      "timeStamp": "2021-03-27T14:43:50+00:00",
      "inventoryCountID": "2",
      "itemID": "27",
      "employeeID": "1"
    }
  ]
}
```

#### Attribues

|  | No attribues available. |
| --- | --- |

---

### GET Inventory count Items

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountItem": {
    "inventoryCountItemID": "2",
    "qty": "40",
    "timeStamp": "2021-03-27T14:43:50+00:00",
    "inventoryCountID": "2",
    "itemID": "27",
    "employeeID": "1"
  }
}
```

#### Attributes

| inventoryCountItemID | (integer) The unique numerical ID for the inventory count item. Required Field |
| --- | --- |

---

### POST Create an inventory count item

Create an inventory count item based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/InventoryCountItem.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "qty": "40",
      "inventoryCountID": "2",
      "itemID": "46",
      "employeeID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountItem.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountItem": {
    "inventoryCountItemID": "4",
    "qty": "40",
    "timeStamp": "2021-03-27T19:36:35+00:00",
    "inventoryCountID": "2",
    "itemID": "46",
    "employeeID": "1"
  }
}
```

#### Attributes

| inventoryCountItemID | (integer) The unique numerical ID for the inventory count item. Required Field |
| --- | --- |
| qty | (integer) The amount counted. |
| inventoryCountID | (integer) The foreign key for the count this count belongs to. Required Field |
| itemID | (integer) The foreign key for the item this count is for. Required Field |
| employeeID | (integer) The foreign key for the employee that made the count. Required Field |

---

### PUT Update an inventory count item

Update an existing inventory count item based on given parameters

> Definition

```
PUT /API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "qty": "1001",
      "itemID": "46",
      "employeeID": "2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountItem": {
    "inventoryCountItemID": "5",
    "qty": "1001",
    "timeStamp": "2021-03-27T19:43:18+00:00",
    "inventoryCountID": "2",
    "itemID": "46",
    "employeeID": "2"
  }
}
```

#### Attributes

| inventoryCountItemID | (integer) The unique numerical ID for the inventory count item. Required Field |
| --- | --- |
| qty | (integer) The amount counted. |
| employeeID | (integer) The foreign key for the employee that made the count. Required Field |

---

### DELETE Delete an inventory count item

Permanently delete an existing inventory count item by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountItem/{inventoryCountItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountItem": {
    "inventoryCountItemID": "5",
    "qty": "1001",
    "timeStamp": "2021-03-27T19:43:18+00:00",
    "inventoryCountID": "2",
    "itemID": "46",
    "employeeID": "2"
  }
}
```

#### Attributes

| inventoryCountItemID | (integer) The unique numerical ID for the inventory count item. Required Field |
| --- | --- |
