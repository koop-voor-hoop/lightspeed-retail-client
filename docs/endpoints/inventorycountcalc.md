---
title: InventoryCountCalc
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/InventoryCountCalc/
---

# InventoryCountCalc

#### Description

Shows the calculated sums for a particular item within a count. These records are automatically created and updated. You can not write to them. Gives you the total amount counted, and the total amount the system things the item had on hand when the last count was added.

#### User Interface

- Inventory → Inventory Counts → Counts

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:inventory_counts | true |
| --- | --- |

#### InventoryCountCalc Fields

| inventoryCountCalcID | (integer) The unique numerical ID for the inventory count calculation. |
| --- | --- |
| timeStamp | (datetime) The modified date/time for this sum/calc record (the last time a count was entered for this item / count). |
| calcQoh | (integer) The amount the system thinks the business should have in stock. |
| countedQoh | (integer) The physical amount counted. |
| inventoryCountID | (integer) The foreign key for the count this sum belongs to. /API/V3/Account/{accountID}/InventoryCount/{inventoryCountID} |
| itemID | (integer) The foreign key for the item that this sum/calc is for. /API/V3/Account/{accountID}/Item/{itemID} |

#### Sortable Fields

- inventoryCountCalcID
- inventoryCountID
- itemID

---

### GET ALL inventory counts calculations

Retrieve all inventory count calculations in the account.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountCalc.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountCalc.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "InventoryCountCalc": [
    {
      "inventoryCountCalcID": "1",
      "timeStamp": "2021-03-26T02:39:05+00:00",
      "calcQoh": "150",
      "countedQoh": "150",
      "inventoryCountID": "1",
      "itemID": "22"
    },
    {
      "inventoryCountCalcID": "2",
      "timeStamp": "2021-03-27T14:44:21+00:00",
      "calcQoh": "40",
      "countedQoh": "40",
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

### GET Single inventory count calculation

Retrieve a single inventory count calculation by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryCountCalc/{inventoryCountCalcID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryCountCalc/{inventoryCountCalcID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "InventoryCountCalc": {
    "inventoryCountCalcID": "1",
    "timeStamp": "2021-03-26T02:39:05+00:00",
    "calcQoh": "150",
    "countedQoh": "150",
    "inventoryCountID": "1",
    "itemID": "22"
  }
}
```

#### Attributes

| inventoryCountCalcID | (integer) The unique numerical ID for the inventory count calculation. Required Field |
| --- | --- |
