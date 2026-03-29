---
title: InventoryCount
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/InventoryCount/
---

# InventoryCount

#### Description

Holds a physical inventory count and reconciliation.

**Reconciling**

To reconcile a count you need to POST/Create a InventoryCountReconcile record with the inventoryCountID filled in. See the [InventoryCountReconcile](https://developers.lightspeedhq.com/retail/endpoints/InventoryCountReconcile/) control documentation for more information.

#### User Interface

- Inventory → Inventory Maintenance → Inventory Counts

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

#### InventoryCount Fields

| inventoryCountID | (integer) The unique numerical ID for the inventory count.  /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID} |
| --- | --- |
| name | (string) The name of the count. Example: ‘Spring Inventory Count’. |
| timeStamp | (datetime) The modified date/time for the count. |
| archived | (boolean) Whether this count is archived. |
| shopID | (integer) The foreign key for the shop this count is at. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- inventoryCountID

---

### GET All inventory counts

Retrieve all inventory counts in this account.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCount.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "InventoryCount": {
    "inventoryCountID": "1",
    "name": "Test",
    "timeStamp": "2021-03-26T02:38:53+00:00",
    "archived": "false",
    "shopID": "2"
  }
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Single inventory count

Retrieve a single inventory count by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCount": {
    "inventoryCountID": "2",
    "name": "March",
    "timeStamp": "2021-03-27T14:43:52+00:00",
    "archived": "false",
    "shopID": "2"
  }
}
```

#### Attributes

| inventoryCountID | (integer) The unique numerical ID for the inventory count. Required Field |
| --- | --- |

---

### POST Create an inventory count

Create an inventory count based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/InventoryCount.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "mid-March",
      "shopID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCount.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCount": {
    "inventoryCountID": "3",
    "name": "mid-March",
    "timeStamp": "2021-03-27T14:56:14+00:00",
    "archived": "false",
    "shopID": "1"
  }
}
```

#### Attributes

| name | (string) The name of the count. Example: ‘Spring Inventory Count’. |
| --- | --- |
| shopID | (integer) The foreign key for the shop this count is at. |

---

### PUT Update an inventory Count

Update and existing inventory count.

> Definition

```
PUT /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "end-March",
      "shopID": "3"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCount": {
    "inventoryCountID": "3",
    "name": "end-March",
    "timeStamp": "2021-03-27T14:59:53+00:00",
    "archived": "false",
    "shopID": "3"
  }
}
```

#### Attributes

| inventoryCountID | (integer) The unique numerical ID for the inventory count. Required Field |
| --- | --- |
| name | (string) The name of the count. Example: ‘Spring Inventory Count’. |
| shopID | (integer) The foreign key for the shop this count is at. |

---

### DELETE Delete an inventory count.

Permanently delete an inventory count by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCount/{inventoryCountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCount": {
    "inventoryCountID": "3",
    "name": "end-March",
    "timeStamp": "2021-03-27T14:59:53+00:00",
    "archived": "false",
    "shopID": "3"
  }
}
```

#### Attributes

| inventoryCountID | (integer) The unique numerical ID for the inventory count. Required Field |
| --- | --- |

---
