---
title: InventoryLog
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/InventoryLog/
---

# InventoryLog

#### Description

Gives access to the inventory change log. The logs are **read-only**.

GET information on the inventory changes : transfers, manual adjustments, purchase orders, refunds, auto-adds, inventory-count, etc..

#### Actions Allowed

| [GET/Read] (single) | False |
| --- | --- |
| GET/Read (query) | True |
| [POST/Create] | False |
| [PUT/Update] | False |
| [DELETE/Delete] | False |

#### Scopes Required

| employee:inventory_log | true |
| --- | --- |
| employee:product_cost | true |
| employee:all_read | true |

#### InventoryLog Fields

| inventoryLogID | (integer) The unique numerical ID for the InventoryLog. |
| --- | --- |
| qohChange | (integer) The increase (positive) or decrease (negative) in inventory level. |
| costChange | (float) The updated unit cost for the Item. |
| createTime | (datetime) The date/time at which the change was made. |
| automated | (bool) Whether the change has been done manually or automatically. |
| reason | (string) Helps distinguish between types of inventory changes. see more details below |
| causedNegative | (bool) Whether this change caused the inventory level to become negative. |
| employeeID | (integer) The foreign key for the Employee who made the change. |
| itemID | (integer) The foreign key for the Item which had its inventory level changed. |
| shopID | (integer) The foreign key for the Shop in which the change was made. |
| orderID | (integer) The foreign key for the purchase order that caused the change. |
| transferID | (integer) The foreign key for the Transfer that caused the change. |
| saleID | (integer) The foreign key for the Sale that caused the change. |
| inventoryCountID | (integer) The foreign key for the InventoryCount that caused the change. |
| customerID | (integer) The foreign key for the Customer associated with the change. |
| vendorReturnID | (integer) The foreign key for the VendorReturn that caused the change. |
| itemImportID | (integer) The foreign key for the ItemImport that caused the change. |

#### Sortable Fields

- inventoryLogID
- itemID

---

### GET All inventory logs

Retrieve all inventory logs for this account.

> Definition

```
GET /API/V3/Account/{accountID}/InventoryLog.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/InventoryLog.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "InventoryLog": {
    "inventoryLogID": "1",
    "shopID": "1",
    "employeeID": "1",
    "itemID": "1",
    "qohChange": "10",
    "costChange": "0",
    "createTime": "2021-04-09T20:16:17+00:00",
    "automated": "false",
    "causedNegative": "false",
    "reason": "manualAdjustQOH",
    "customerID": "0",
    "inventoryCountID": "0",
    "itemImportID": "0",
    "orderID": "0",
    "saleID": "0",
    "transferID": "0",
    "vendorReturnID": "0"
  }
}
```

#### Attributes

| inventoryLogID | (integer) The unique numerical ID for the inventory log. |
| --- | --- |
| createTime | (datetime) The date/time the change was made. Can be set to a past/date time, but not into the future. |

---

### Reasons

Non-exhaustive list of possible reasons

- AddForArchiveItem
- AddForTransfer
- AddInventoryForCount
- AddInventoryToUnsendForVendorReturn
- AdjustmentForSale
- AutoAddItemFromTransfer
- BreakAssemblyAddInventory
- BreakAssemblyRemoveInventory
- BreakBoxDown
- BuildAssemblyAddInventory
- BuildAssemblyRemoveInventory
- BusinessProcessAddInventory
- BusinessProcessRemoveInventory
- CancelSpecialOrder
- CreateAndRemoveInventoryForLayaway
- CreateAndRemoveInventoryForSpecialOrder
- CreateAndRemoveInventoryForTransaction
- CreateAndRemoveInventoryForTransactionLine
- CreateAndRemoveInventoryForVendorReturn
- CreateAndRemoveInventoryForWorkorder
- CreateSinglesFromBox
- DeletedByMerge
- GenericReason
- ItemCreated
- ItemImport
- ManualCostAdjustment
- ManualQuantityAdjustment
- ModifiedByMerge
- PutBackForTransaction
- RefundAddInventory
- RemoveForArchiveItem
- RemoveForInventoryCount
- RemoveForLayaway
- RemoveForSpecialOrder
- RemoveForTransaction
- RemoveForTransactionLine
- RemoveForTransfer
- RemoveForVendorReturn
- RemoveForWorkorder
- RemoveNegativeInventory
- RestoreFromTransfer
- UndoAdjustmentForSale
- VoidRefund
