---
title: ItemShop
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ItemShop/
---

# ItemShop

#### Description

ItemShops are a pivot table between Item and Shop records which hold aggregated inventory information about items in each shop, such as total quantity levels and costs.

ItemShops with `shopID=0` are summary records with the overall values for all shops.

This endpoint provides a mechanism to efficiently poll for changes to inventory levels, e.g.
`GET /API/V3/Account/{accountID}/ItemShop.json?sort=timeStamp&timeStamp=%3E%3D%2C{LastPollTime}`

#### User Interface

- Inventory → Items

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | False |
| PUT/Update | True |
| DELETE/Archive | False |

#### Scopes Required

| employee:inventory | true |
| --- | --- |
| employee:inventory_read | true |
| employee:product_cost | true |

#### ItemShop Fields

| itemShopID | (integer) The unique numerical ID for the ItemShop. |
| --- | --- |
| qoh | (integer) The current quantity on hand.  A positive value denotes that stock is available in this shop. A negative value indicates the presence of negative inventory |
| sellable | (integer) The amount that is available for sale. This value will match QOH unless it is negative, in which case it will display 0. |
| backorder | (integer) The amount currently on backorder (on a purchase order). Zero or positive integer. |
| componentQoh | (integer) The amount that could be created by breaking down or building up boxes that have stock. Zero or positive integer |
| componentBackorder | (integer) The amount that could be created by breaking down or building up boxes that are currently on order. Zero or positive integer. |
| reorderPoint | (integer) If the QOH is at or below this quantity, then the item is considered ready to be reordered. |
| reorderLevel | (integer) Desired level to reach when reordering. When the item is automatically reordered, quantity will be added to the order equal to the difference between the reorder level and the current QOH. |
| timeStamp | (datetime) Date/time the ItemShop was last modified. |
| itemID | (integer) The foreign key for the item. /API/V3/Account/{accountID}/Item/{itemID} |
| shopID | (integer) The foreign key for the shop the inventory quantities are in. ItemShop with shopID = 0 is a summary record that includes the QOH for all shops. /API/V3/Account/{accountID}/Shop/{shopID} |
| onLayaway | (integer) The total number of units that are currently reserved for layaways in the shop. |
| onSpecialOrder | (integer) The total number of units that are currently reserved for special orders in the shop. |
| onWorkOrder | (integer) The total number of units that are currently reserved for work orders in the shop. |
| onTransferOut | (integer) The total number of units that are currently in-transit that were sent from the shop to another shop. |
| onTransferIn | (integer) The total number of units that are currently in-transit that are expected to be received to the shop from another shop. |
| averageCost | (float) The current weighted average cost of the item. Currently, this will only show a value for ItemShops with shopID=0 (account-wide). |
| totalValueFifo | (float) The total value of the inventory in the shop, calculated using the FIFO (First In, First Out) method. |
| totalValueAvgCost | (float) The total value of the inventory in the shop, calculated using the average cost method. |
| totalValueNegativeInventory | (float) The total value of negative inventory records in the shop. |
| lastReceivedCost | (float) The cost of the last received inventory lot for the item in the shop. |
| lastReceivedLotID | (integer) The ID of the last received inventory lot for the item in the shop. |
| nextFifoLotCost | (float) The cost of the next inventory lot in the FIFO queue in the shop. |
| nextFifoLotID | (integer) The ID of the next inventory lot in the FIFO queue in the shop. |

#### Sortable Fields

- itemShopID
- timeStamp

---

### GET All ItemShops

List all ItemShops in the account.

> Definition

```
GET /API/V3/Account/{accountID}/ItemShop.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemShop.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ItemShop": [
    {
      "itemShopID": "897",
      "qoh": "33",
      "sellable": "33",
      "backorder": "0",
      "componentQoh": "0",
      "componentBackorder": "0",
      "onLayaway": "0",
      "onSpecialOrder": "0",
      "onWorkorder": "0",
      "onTransferOut": "2",
      "onTransferIn": "2",
      "averageCost": "17",
      "nextFifoLotID": "313086",
      "nextFifoLotCost": "20",
      "lastReceivedLotID": "313089",
      "lastReceivedCost": "20",
      "totalValueFifo": "631",
      "totalValueAvgCost": "595",
      "totalValueNegativeInventory": "0",
      "reorderPoint": "0",
      "reorderLevel": "0",
      "timeStamp": "2025-06-18T18:30:09+00:00",
      "itemID": "141",
      "shopID": "0"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single ItemShop

Retrieve a single ItemShop record

> Definition

```
GET /API/V3/Account/{accountID}/ItemShop/{itemShopID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemShop/{itemShopID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemShop": {
    "itemShopID": "897",
    "qoh": "33",
    "sellable": "33",
    "backorder": "0",
    "componentQoh": "0",
    "componentBackorder": "0",
    "onLayaway": "0",
    "onSpecialOrder": "0",
    "onWorkorder": "0",
    "onTransferOut": "2",
    "onTransferIn": "2",
    "averageCost": "17",
    "nextFifoLotID": "313086",
    "nextFifoLotCost": "20",
    "lastReceivedLotID": "313089",
    "lastReceivedCost": "20",
    "totalValueFifo": "631",
    "totalValueAvgCost": "595",
    "totalValueNegativeInventory": "0",
    "reorderPoint": "0",
    "reorderLevel": "0",
    "timeStamp": "2025-06-18T18:30:09+00:00",
    "itemID": "141",
    "shopID": "0"
  }
}
```

#### Attributes

| itemID | (integer) The unique numerical ID for the item. Required Field |
| --- | --- |

### PUT Update an ItemShop

Update an existing ItemShop based on the given parameters. This endpoint allows you to update the reorder point and reorder level fields for an item in a specific shop.

> Definition

```
PUT /API/V3/Account/{accountID}/ItemShop/{itemShopID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "reorderPoint": "2",
      "reorderLevel": "5",
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemShop/{itemShopID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemShop": {
    "itemShopID": "897",
    "qoh": "33",
    "sellable": "33",
    "backorder": "0",
    "componentQoh": "0",
    "componentBackorder": "0",
    "onLayaway": "0",
    "onSpecialOrder": "0",
    "onWorkorder": "0",
    "onTransferOut": "2",
    "onTransferIn": "2",
    "averageCost": "17",
    "nextFifoLotID": "313086",
    "nextFifoLotCost": "20",
    "lastReceivedLotID": "313089",
    "lastReceivedCost": "20",
    "totalValueFifo": "631",
    "totalValueAvgCost": "595",
    "totalValueNegativeInventory": "0",
    "reorderPoint": "2",
    "reorderLevel": "5",
    "timeStamp": "2025-06-18T18:30:09+00:00",
    "itemID": "141",
    "shopID": "0"
  }
}
```

#### Attributes

| reorderPoint | (integer) If the QOH is at or below this quantity, then the item is considered ready to be reordered. |
| --- | --- |
| reorderLevel | (integer) Desired level to reach when reordering. When the item is automatically reordered, quantity will be added to the order equal to the difference between the reorder level and the current QOH. |
