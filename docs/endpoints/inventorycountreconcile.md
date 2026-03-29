---
title: InventoryCountReconcile
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/InventoryCountReconcile/
---

# InventoryCountReconcile

#### Description

Holds a physical inventory count reconciliation for a particular item within a particular count. The record of what changed when the inventory count was reconciled. These records are created automatically and can not be modified.

**Creating / Triggering A Reconcile**

You can issue a POST/Create to trigger a reconcile. If your InventoryCountReconcile record contains an itemID then only that item will be reconciled. If you omit itemID then the entire count (all items) will be reconciled.

**Warning**

Once a reconcile is performed on an item or an entire count it can not be undone without manually adjusting the inventory levels of all items.

#### User Interface

- Inventory → Inventory Maintenance → Inventory Counts

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |

#### Scopes Required

| employee:inventory_counts | true |
| --- | --- |

#### Request Cost

| GET/Read (single) | Default |
| --- | --- |
| GET/Read (query) | Default |
| POST/Create | 10 drips |

#### InventoryCountReconcile Fields

| inventoryCountReconcileID | (integer) The unique numerical ID for the inventory count reconcile. |
| --- | --- |
| createTime | (datetime) The date/time this reconcile was performed at. |
| costChange | (float) The cost value of the inventory change. The amount lost or gained in the reconcile to the books. |
| qohChange | (integer) The change postitive/negative to the QOH/Stock level of the item from the reconcile. |
| inventoryCountID | (integer) The foreign key for the count this sum belongs to. /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID} |
| itemID | (integer) The foreign key for the item that this sum/calc is for. /API/V3/Account/{accountID}/Item/{itemID} |

#### Sortable Fields

- inventoryCountReconcileID
- inventoryCountID
- itemID

---

### GET All inventory count reconciles

Retrieve a list of all inventory count reconciles in the account.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountReconcile.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountReconcile.json
"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "InventoryCountReconcile": [
    {
      "inventoryCountReconcileID": "1",
      "costChange": "0",
      "qohChange": "35",
      "createTime": "2021-03-26T02:39:05+00:00",
      "inventoryCountID": "1",
      "itemID": "22"
    },
    {
      "inventoryCountReconcileID": "2",
      "costChange": "0",
      "qohChange": "40",
      "createTime": "2021-03-27T14:44:21+00:00",
      "inventoryCountID": "2",
      "itemID": "27"
    }
  ]
}
```

#### Attribues

|  | No attribues available. |
| --- | --- |

---

### GET Single inventory count reconcile

Retrieve a single inventory count reconcile by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountReconcile/{inventoryCountReconcileID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountReconcile/{inventoryCountReconcileID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountReconcile": {
    "inventoryCountReconcileID": "2",
    "costChange": "0",
    "qohChange": "40",
    "createTime": "2021-03-27T14:44:21+00:00",
    "inventoryCountID": "2",
    "itemID": "27"
  }
}
```

#### Attributes

| inventoryCountReconcileID | (integer) The unique numerical ID for the inventory count reconcile. Required Field |
| --- | --- |

---

### POST Create an inventory count reconcile

Create an inventory count reconcile based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/InventoryCountReconcile.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "inventoryCountID": "2",
      "itemID": "27"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountReconcile.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountReconcile": {
    "inventoryCountReconcileID": "2",
    "costChange": "0",
    "qohChange": "40",
    "createTime": "2021-03-27T14:44:21+00:00",
    "inventoryCountID": "2",
    "itemID": "27"
  }
}
```

#### Attributes

| inventoryCountID | (integer) The foreign key for the count this sum belongs to. /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID} Required Field |
| --- | --- |
| itemID | (integer) The foreign key for the item that this sum/calc is for. /API/V3/Account/{accountID}/Item/{itemID} |

---
