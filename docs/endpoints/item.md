---
title: Item
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Item/
---

# Item

#### Description

Holds product information including: description, price, default cost, SKUs, categorization, etc. Also contains per shop inventory levels and relates to SaleLines, WorkorderItems, OrderLines and others.

**Archiving**

Items can not be deleted, only archived. If you issue a delete on an item it will be archived. If you archive an item with inventory, the inventory will be zeroed out. This can not be undone without individually re-entering the inventory records.

**Updating**

You can not archive an item by setting the archived flag on an update. You must issue a DELETE to archive an item.

**GET/Read**

You can do a single read or query using itemCode, which is a number that will match an Item’s itemID, upc or ean. Operators other than ‘=’, ‘or’ and ‘IN’ are not supported.

#### User Interface

- Inventory → Items

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:product_cost | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Additional Relations

- Category
- TaxClass
- ItemAttributes
- ItemAttributes.ItemAttributeSet
- Manufacturer
- Note
- Images
- ItemShops
- ItemVendorNums
- ItemComponents
- ItemECommerce
- TagRelations
- TagRelations.Tag
- CustomFieldValues
- CustomFieldValues.value
- ItemPrices

#### Item Fields

| itemID | (integer) The unique numerical ID for the item. /API/V3/Account/{accountID}/Item/{itemID} |
| --- | --- |
| systemSku | (integer) The SKU for the item created by Retail POS (R-Series). This is what is used on item labels as the barcode. Read-only. |
| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| avgCost | (float) DEPRECATED The average cost of all purchases of this item, even for stock that has already been sold. Prefer to use ItemShop.averageCost instead. Read-only. |
| tax | (boolean) Whether tax is charged on this item. |
| archived | (boolean) Whether this discount is archived. |
| discountable | (boolean) Whether a discount can be applied to this item. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the item. Displayed on receipts, labels, etc. |
| modelYear | (integer) The model year for this item. Example: “2008”. This is only available on older Retail POS accounts. |
| upc | (string) The UPC sku for this product. Must be 11-14 digits. |
| ean | (string) The EAN sku for this product. Must be 11-14 digits. |
| customSku | (string) The custom sku the business has created for this item. |
| manufacturerSku | (string) The manufacturers number/sku for this product. |
| timeStamp | (datetime) Date/time the item was last modified. This doesn’t include changes to related records (e.g., ItemShops). Read-only. |
| createTime | (datetime) Date/time the item was created. Read-only. |
| publishToEcom | (boolean) Specifies if the item will be published to Lightspeed eCom |
| categoryID | (integer) Foreign key for the category this item is in. /API/V3/Account/{accountID}/Category/{categoryID} |
| taxClassID | (integer) Foreign key for the tax class this item falls within. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| departmentID | (integer) Foreign key for the department this item is in. This is only available on older Retail POS accounts. /API/V3/Account/{accountID}/Department/{departmentID} |
| itemMatrixID | (integer) Foreign key for the matrix this item belongs to. /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID} |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer/{manufacturerID} |
| seasonID | (integer) Foreign key for the season this item is in. This is only available on older Retail POS accounts. /API/V3/Account/{accountID}/Season/{seasonID} |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item /API/V3/Account/{accountID}/Vendor/{defaultVendorID} |
| Category | (object) The category this item is in. /API/V3/Account/{accountID}/Category |
| TaxClass | (object) The tax class this item falls within. /API/V3/Account/{accountID}/TaxClass |
| Department | (object) The department this item is in. /API/V3/Account/{accountID}/Department |
| ItemAttributes | (object) Matrix attributes for this item. |
| Manufacturer | (object) The manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer |
| Note | (object) Notes attached to this item. |
| Season | (object) Control:Account.Season |
| ItemShops | (object) ItemShop gives specific shop level quantities on hand, backorder, and reorder points. |
| ItemComponents | (object) The items that can be put together in assemblies or boxes that can create this item. |
| ItemShelfLocations | (object) The shelf locations at the shops for this item. |
| ItemVendorNums | (object) The vendor specific SKUs for this item. |
| CustomFieldValues | (object) The custom field values that belong to this item. |

The itemType field determines specific behavior for various special types of items. The `serialized` and `serialized_assembly` itemTypes have been deprecated in favor of the `serialized` Item flag, which can be applied to the other 4 itemTypes. These 2 itemTypes can still be used, but the `serialized` flag must also be set to `true`.

Items behave normally.

Inventory for these items is not tracked and no inventory options are displayed on the user interface. Non Inventory items with TaxClass = Labor are treated specially on workorders as tasks instead of items.

ItemComponents are used to build Assembly items. Think of an assembly line where a certain set of component items are taken out of inventory to build one final item.

Box items can be broken down into single items that are contained within the box (ItemComponents are the singles). Think of a six pack of soda. The six back is a ‘box’ and the single cans are the ‘singles’.

*Deprecated* Serialized entries are stored for these items. These track serial numbers that are in stock or have been sold to customers. On the sales screen these serial numbers are displayed and new serial numbers can be entered.

*Deprecated* Combines serialized and assembly functionality to create items from components that have serial numbers.

#### ItemPrice Fields

Contains all the retail prices for this item. It supports multiple price levels that can be activated in various ways.

| amount | (float) The price value/amount. |
| --- | --- |
| useType | (string) The price level name which indicates how it is used. The amount set for this price level overrides dynamically generated amount which is based on cost and price level calculation. |
| useTypeID | (integer) Foreign key for the pricing level for this item price. |

#### ItemAttributes Fields

| attribute1 | (string) The first attribute value. Attributes are things like color or size. |
| --- | --- |
| attribute2 | (string) The second attribute value. Attributes are things like color or size. |
| attribute3 | (string) The third attribute value. Attributes are things like color or size. |
| itemAttributeSetID | (string) Foreign key for the AttributeSet which tells you what type of matrix this item should belong to. AttributeSets are “Color/Size”, “Size”, “Color”, “3 Attributes” |
| ItemAttributeSet | (object) The AttributeSet which tells you what type of matrix this item should belong to. AttributeSets are “Color/Size”, “Size”, “Color”, “3 Attributes” |

#### Note Fields

| note | (string) The note text. |
| --- | --- |
| isPublic | (boolean) Whether this note should show on receipts. For example if you put a note on an Item and mark it public than it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified |

#### ItemShop Fields

| itemShopID | (integer) The unique numerical ID for the ItemShop. Either the itemShopID or shopID field must be provided when making updates. |
| --- | --- |
| qoh | (integer) The current quantity on hand. A positive value denotes that stock is available in this shop. A negative value indicates the presence of negative inventory. |
| sellable | (integer) The amount that is available for sale. This value will match QOH unless it is negative, in which case it will display 0. |
| backorder | (integer) The amount currently on backorder (on a purchase order). Zero or positive integer. |
| componentQoh | (integer) The amount that could be created by breaking down or building up boxes that have stock. Zero or positive integer. |
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

#### ItemVendorNum Fields

| itemVendorNumID | (integer) The unique numerical ID for the item vendor number. |
| --- | --- |
| value | (string) The vendor specific SKU. |
| itemID | (integer) The foreign key for the item this SKU is for /API/V3/Account/{accountID}/Item/{itemID} |
| vendorID | (integer) The foreign key for the vendor this SKU is for. /API/V3/Account/{accountID}/Vendor/{vendorID} |
| timeStamp | (datetime) Date/time the record was last modified. |
| cost | (float) The item’s vendor cost. Optional value, only when vendor cost functionality is enabled, if not given vendor cost will be set to 0. |

#### ItemComponent Fields

| itemComponentID | (integer) The unique numerical ID for the item component. |
| --- | --- |
| quantity | (integer) The amount it takes of componentItemID to build one assemblyItemID |
| componentGroup | (integer) A number identifying the box or assembly group. Assemblies will all have componentGroup = 0. Box relationships will have a unique componentGroup for each single component. |
| assemblyItemID | (integer) The foreign key for the assembly (box of) item. /API/V3/Account/{accountID}/Item/{assemblyItemID} |
| componentItemID | (integer) The foreign key for the component (single) item. /API/V3/Account/{accountID}/Item/{componentItemID} |

#### itemECommerce Fields

*These fields are not used by Lightspeed eCommerce*

| itemECommerceID | (integer) The unique numerical ID for the item eCommerce info record. |
| --- | --- |
| longDescription | (string) Long description for the item. |
| shortDescription | (string) Short description for the item. |
| weight | (float) The item’s weight. |
| width | (float) The item’s width. |
| height | (float) The item’s height. |
| length | (float) The item’s length. |
| listOnStore | (boolean) Whether the item is listed to be sold online. This value cannot be set in the user interface. |

#### Sortable Fields

- itemID
- timeStamp
- description

#### See Also

- [Category](https://developers.lightspeedhq.com/retail/endpoints/Category/#category-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [ItemAttributeSet](https://developers.lightspeedhq.com/retail/endpoints/ItemAttributeSet/#itemattributeset-fields)
- [CustomFieldChoice](https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField-CustomFieldChoice/#customfieldchoice-fields)
- [Tag](https://developers.lightspeedhq.com/retail/endpoints/Tag/#tag-fields)
- [Manufacturer](https://developers.lightspeedhq.com/retail/endpoints/Manufacturer/#manufacturer-fields)
- [Season](https://developers.lightspeedhq.com/retail/endpoints/Season/#season-fields)
- [Image](https://developers.lightspeedhq.com/retail/endpoints/Image/#image-fields)
- [CustomFieldValue](https://developers.lightspeedhq.com/retail/endpoints/Item-CustomField/#customfieldvalue-fields)

---

### GET All Items

Retrieve all items in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Item.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Item": [
    {
      "itemID": "20",
      "systemSku": "210000000020",
      "defaultCost": "0",
      "avgCost": "100",
      "discountable": "true",
      "tax": "true",
      "archived": "false",
      "itemType": "default",
      "serialized": "false",
      "description": "Matrix",
      "modelYear": "0",
      "upc": "",
      "ean": "",
      "customSku": "matrix",
      "manufacturerSku": "",
      "createTime": "2021-06-27T13:15:25+00:00",
      "timeStamp": "2021-03-03T13:51:56+00:00",
      "publishToEcom": "true",
      "categoryID": "0",
      "taxClassID": "1",
      "departmentID": "0",
      "itemMatrixID": "0",
      "manufacturerID": "0",
      "seasonID": "0",
      "defaultVendorID": "0",
      "Prices": {
        "ItemPrice": [
          {
            "amount": "100",
            "useTypeID": "1",
            "useType": "Default"
          },
          {
            "amount": "0",
            "useTypeID": "2",
            "useType": "MSRP"
          },
          {
            "amount": "0",
            "useTypeID": "3",
            "useType": "Online"
          }
        ]
      }
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single item

Retrieve a single item

> Definition

```
GET /API/V3/Account/{accountID}/Item/{itemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/{itemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "22",
    "systemSku": "210000000022",
    "defaultCost": "0",
    "avgCost": "0",
    "discountable": "true",
    "tax": "true",
    "archived": "false",
    "itemType": "default",
    "serialized": "false",
    "description": "Dell Screen 27 \"",
    "modelYear": "0",
    "upc": "",
    "ean": "",
    "customSku": "12341234",
    "manufacturerSku": "",
    "createTime": "2021-08-04T13:35:06+00:00",
    "timeStamp": "2021-03-29T17:43:20+00:00",
    "publishToEcom": "true",
    "categoryID": "1",
    "taxClassID": "1",
    "departmentID": "0",
    "itemMatrixID": "0",
    "manufacturerID": "0",
    "seasonID": "0",
    "defaultVendorID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "500",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "10",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "500",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attributes

| itemID | (integer) The unique numerical ID for the item. Required Field |
| --- | --- |

---

### POST Create an item

Create an item based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Item.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "defaultCost": "0",
      "discountable": "true",
      "tax": "true",
      "itemType": "default",
      "serialized": "false",
      "description": "Samsung 40 \" tv",
      "modelYear": "0",
      "upc": "",
      "ean": "",
      "customSku": "12341234",
      "manufacturerSku": "",
      "publishToEcom": "true",
      "categoryID": "1",
      "taxClassID": "1",
      "departmentID": "0",
      "itemMatrixID": "0",
      "manufacturerID": "0",
      "seasonID": "0",
      "defaultVendorID": "0",
      "Prices": {
      "ItemPrice": [
        {
          "amount": "400",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "275",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "320",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]}
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "47",
    "systemSku": "210000000047",
    "defaultCost": "0",
    "avgCost": "0",
    "discountable": "true",
    "tax": "true",
    "archived": "false",
    "itemType": "default",
    "serialized": "false",
    "description": "Samsung 40 \" tv",
    "modelYear": "0",
    "upc": "",
    "ean": "",
    "customSku": "12341234",
    "manufacturerSku": "",
    "createTime": "2021-03-30T19:38:07+00:00",
    "timeStamp": "2021-03-30T19:38:07+00:00",
    "publishToEcom": "true",
    "categoryID": "1",
    "taxClassID": "1",
    "departmentID": "0",
    "itemMatrixID": "0",
    "manufacturerID": "0",
    "seasonID": "0",
    "defaultVendorID": "0",
    "ItemShops": {
      "ItemShop": [
        {
          "itemShopID": "163",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:38:07+00:00",
          "itemID": "47",
          "shopID": "1"
        },
        {
          "itemShopID": "164",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:38:08+00:00",
          "itemID": "47",
          "shopID": "2"
        },
        {
          "itemShopID": "165",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:38:08+00:00",
          "itemID": "47",
          "shopID": "3"
        },
        {
          "itemShopID": "162",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:38:07+00:00",
          "itemID": "47",
          "shopID": "0"
        }
      ]
    },
    "Prices": {
      "ItemPrice": [
        {
          "amount": "400",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "275",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "320",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attributes

| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| --- | --- |
| tax | (boolean) Whether tax is charged on this item. |
| discountable | (boolean) Whether a discount can be applied to this item. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the item. Displayed on receipts, labels, etc. |
| modelYear | (integer) The model year for this item. Example: “2008” |
| upc | (string) The UPC SKU for this product. Must be 11-14 digits. |
| ean | (string) The EAN SKU for this product. Must be 11-14 digits. |
| customSku | (string) The custom SKU the business has created for this item. |
| manufacturerSku | (string) The manufacturers number/SKU for this product. |
| categoryID | (integer) Foreign key for the category this item is in. |
| taxClassID | (integer) Foreign key for the tax class this item falls within. |
| itemMatrixID | (integer) Foreign key for the matrix this item belongs to. |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item |
| Category | (object) The category this item is in. |
| TaxClass | (object) The tax class this item falls within. |
| ItemAttributes | (object) Matrix attributes for this item. |
| Manufacturer | (object) The manufacturer this item is from. |
| Note | (object) Notes attached to this item. |
| ItemComponents | (object) The items that can be put together in assemblies or boxes that can create this item. |
| ItemVendorNums | (object) The vendor specific SKUs for this item. |
| CustomFieldValues | (object) The custom field values that belong to this item. |

---

### PUT Update an item

Update an existing item based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Item/{itemID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "description": "The best product"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/{itemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "48",
    "systemSku": "210000000048",
    "defaultCost": "0",
    "avgCost": "0",
    "discountable": "true",
    "tax": "true",
    "archived": "false",
    "itemType": "default",
    "serialized": "false",
    "description": "The best product",
    "modelYear": "0",
    "upc": "",
    "ean": "",
    "customSku": "12341234",
    "manufacturerSku": "",
    "createTime": "2021-03-30T19:42:36+00:00",
    "timeStamp": "2021-03-30T19:52:28+00:00",
    "publishToEcom": "true",
    "categoryID": "1",
    "taxClassID": "1",
    "departmentID": "0",
    "itemMatrixID": "0",
    "manufacturerID": "0",
    "seasonID": "0",
    "defaultVendorID": "0",
    "ItemShops": {
      "ItemShop": [
        {
          "itemShopID": "167",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:42:36+00:00",
          "itemID": "48",
          "shopID": "1"
        },
        {
          "itemShopID": "168",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:42:36+00:00",
          "itemID": "48",
          "shopID": "2"
        },
        {
          "itemShopID": "169",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:42:36+00:00",
          "itemID": "48",
          "shopID": "3"
        },
        {
          "itemShopID": "166",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2021-03-30T19:42:36+00:00",
          "itemID": "48",
          "shopID": "0"
        }
      ]
    },
    "Prices": {
      "ItemPrice": [
        {
          "amount": "400",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "275",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "320",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attributes

| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| --- | --- |
| tax | (boolean) Whether tax is charged on this item. |
| discountable | (boolean) Whether a discount can be applied to this item. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| archived | (boolean) Whether this discount is archived. Can only be set to false on update. To archive an item, use the DELETE method. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the item. Displayed on receipts, labels, etc. |
| modelYear | (integer) The model year for this item. Example: “2008” |
| upc | (string) The UPC sku for this product. Must be 11-14 digits. |
| ean | (string) The EAN sku for this product. Must be 11-14 digits. |
| customSku | (string) The custom sku the business has created for this item. |
| manufacturerSku | (string) The manufacturers number/sku for this product. |
| categoryID | (integer) Foreign key for the category this item is in. |
| taxClassID | (integer) Foreign key for the tax class this item falls within. |
| itemMatrixID | (integer) Foreign key for the matrix this item belongs to. |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item |
| Category | (object) The category this item is in. |
| TaxClass | (object) The tax class this item falls within. |
| ItemAttributes | (object) Matrix attributes for this item. |
| Manufacturer | (object) The manufacturer this item is from. |
| Note | (object) Notes attached to this item. |
| ItemComponents | (object) The items that can be put together in assemblies or boxes that can create this item. |
| ItemVendorNums | (object) The vendor specific SKUs for this item. |
| CustomFieldValues | (object) The custom field values that belong to this item. |

---

### DELETE Delete an item

Archive an item by its ID. The item’s inventory will be zeroed out (when applicable).

> Definition

```
DELETE /API/V3/Account/{accountID}/Item/{itemID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Item/{itemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "48",
    "systemSku": "210000000048",
    "defaultCost": "0",
    "avgCost": "0",
    "discountable": "true",
    "tax": "false",
    "archived": "true",
    "itemType": "non_inventory",
    "serialized": "false",
    "description": "The best product",
    "modelYear": "0",
    "upc": "",
    "ean": "",
    "customSku": "12341234",
    "manufacturerSku": "",
    "createTime": "2021-03-30T19:42:36+00:00",
    "timeStamp": "2021-03-30T19:54:24+00:00",
    "publishToEcom": "true",
    "categoryID": "1",
    "taxClassID": "1",
    "departmentID": "0",
    "itemMatrixID": "0",
    "manufacturerID": "0",
    "seasonID": "0",
    "defaultVendorID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "400",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "275",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "320",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attributes

| itemID | (integer) The unique numerical ID for the item. Required Field |
| --- | --- |
