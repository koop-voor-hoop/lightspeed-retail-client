---
title: ItemMatrix
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ItemMatrix/
---

# ItemMatrix

#### Description

Holds product matrix (like Color/Size group of variants) information including: description, price, default cost, SKUs, categorization, etc.

#### User Interface

- Inventory → Matrix

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:product_cost | true |
| --- | --- |

#### Additional Relations

- Category
- TaxClass
- Department
- ItemAttributeSet
- Manufacturer
- Season
- Images
- Items
- ItemECommerce
- TagRelations
- TagRelations.Tag

#### ItemMatrix Fields

| itemMatrixID | (integer) The unique numerical ID for the item matrix. /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID} |
| --- | --- |
| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| tax | (boolean) Whether tax is charged on this item. |
| archived | (boolean) Whether this discount is archived. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the matrix. Displayed on receipts, labels, etc. Items in the matrix get the description: <ItemMatrix.description> <attribute1> <attribute2> <attribute3> |
| modelYear | (integer) The model year for this item. Example: “2008” |
| categoryID | (integer) Foreign key for the category this item is in. /API/V3/Account/{accountID}/Category/{categoryID} |
| taxClassID | (integer) Foreign key for the tax class this item falls within. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| departmentID | (integer) Foreign key for the department this item is in. /API/V3/Account/{accountID}/Department/{departmentID} |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer/{manufacturerID} |
| seasonID | (integer) Foreign key for the season this item is in. /API/V3/Account/{accountID}/Season/{seasonID} |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item /API/V3/Account/{accountID}/Vendor/{defaultVendorID} |
| itemAttributeSetID | (string) Foreign key to the AttributeSet which tells you what type of matrix this item should belong to. AttributeSets are “Color/Size”, “Size”, “Color”, “3 Attributes” |
| Category | (object) The category this item is in. /API/V3/Account/{accountID}/Category |
| TaxClass | (object) The tax class this item falls within. /API/V3/Account/{accountID}/TaxClass |
| Department | (object) The department this item is in. /API/V3/Account/{accountID}/Department |
| Manufacturer | (object) The manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer |
| Season | (object) Control:Account.Season |
| ItemAttributeSet | (object) The AttributeSet which tells you what type of matrix this item should belong to. |
| Items | (object) The items that belong to this matrix. /API/V3/Account/{accountID}/Item |
| CustomFieldValues | (object) The custom field values that belong to this matrix. |
| timeStamp | (datetime) Date/time the record was last modified. |

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

- itemMatrixID
- timeStamp
- description

#### See Also

- [Tag](https://developers.lightspeedhq.com/retail/endpoints/Tag/#tag-fields)
- [Category](https://developers.lightspeedhq.com/retail/endpoints/Category/#category-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [ItemAttributeSet](https://developers.lightspeedhq.com/retail/endpoints/ItemAttributeSet/#itemattributeset-fields)
- [Manufacturer](https://developers.lightspeedhq.com/retail/endpoints/Manufacturer/#manufacurer-fields)
- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)
- [Image](https://developers.lightspeedhq.com/retail/endpoints/Image/#image-fields)
- [Season](https://developers.lightspeedhq.com/retail/endpoints/Season/#season-fields)

### GET All Items Matrix

Retrieve a list of all item matrices in this account.

> Definition

```
GET /API/V3/Account/{accountID}/ItemMatrix.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ItemMatrix": [
    {
      "itemMatrixID": "1",
      "description": "Matrix Master",
      "tax": "true",
      "defaultCost": "0",
      "itemType": "default",
      "serialized": "false",
      "modelYear": "0",
      "archived": "false",
      "timeStamp": "2021-03-31T17:35:47+00:00",
      "itemAttributeSetID": "3",
      "manufacturerID": "0",
      "categoryID": "0",
      "defaultVendorID": "0",
      "taxClassID": "1",
      "seasonID": "0",
      "departmentID": "0",
      "Prices": {
        "ItemPrice": [
          {
            "amount": "100000",
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
      },
      "attribute1Values": [
        "Color 1",
        "Color 2",
        "Color 3"
      ]
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single item matrix

Retrieve a single item matrix by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemMatrix": {
    "itemMatrixID": "2",
    "description": "T-shirt",
    "tax": "true",
    "defaultCost": "0",
    "itemType": "default",
    "serialized": "false",
    "modelYear": "0",
    "archived": "false",
    "timeStamp": "2021-03-31T18:32:28+00:00",
    "itemAttributeSetID": "1",
    "manufacturerID": "0",
    "categoryID": "0",
    "defaultVendorID": "0",
    "taxClassID": "0",
    "seasonID": "0",
    "departmentID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "20",
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
    },
    "attribute1Values": [
      "Black",
      "White"
    ],
    "attribute2Values": [
      "Small",
      "Medium",
      "Large"
    ]
  }
}
```

#### Attributes

| itemMatrixID | (integer) The unique numerical ID for the item matrix. Required Field |
| --- | --- |

---

### POST Create an item matrix

Create an item matrix based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/ItemMatrix.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "description": "Chairs",
      "tax": "true",
      "defaultCost": "0",
      "itemType": "default",
      "serialized": "false",
      "modelYear": "0",
      "itemAttributeSetID": "1",
      "manufacturerID": "0",
      "categoryID": "0",
      "defaultVendorID": "0",
      "taxClassID": "0",
      "seasonID": "0",
      "departmentID": "0",
      "Prices": {
        "ItemPrice": [
          {
            "amount": "20",
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
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemMatrix": {
    "itemMatrixID": "4",
    "description": "Chairs",
    "tax": "true",
    "defaultCost": "0",
    "itemType": "default",
    "serialized": "false",
    "modelYear": "0",
    "archived": "false",
    "timeStamp": "2021-04-03T15:12:23+00:00",
    "itemAttributeSetID": "1",
    "manufacturerID": "0",
    "categoryID": "0",
    "defaultVendorID": "0",
    "taxClassID": "0",
    "seasonID": "0",
    "departmentID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "20",
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
  }
}
```

#### Attrubutes

| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| --- | --- |
| tax | (boolean) Whether tax is charged on this item. |
| archived | (boolean) Whether this discount is archived. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the matrix. Displayed on receipts, labels, etc. Items in the matrix get the description: <ItemMatrix.description> <attribute1> <attribute2> <attribute3> |
| modelYear | (integer) The model year for this item. Example: “2008” |
| categoryID | (integer) Foreign key for the category this item is in. /API/V3/Account/{accountID}/Category/{categoryID} |
| taxClassID | (integer) Foreign key for the tax class this item falls within. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| departmentID | (integer) Foreign key for the department this item is in. /API/V3/Account/{accountID}/Department/{departmentID} |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer/{manufacturerID} |
| seasonID | (integer) Foreign key for the season this item is in. /API/V3/Account/{accountID}/Season/{seasonID} |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item /API/V3/Account/{accountID}/Vendor/{defaultVendorID} |
| itemAttributeSetID | (string) Foreign key to the AttributeSet which tells you what type of matrix this item should belong to. AttributeSets are “Color/Size”, “Size”, “Color”, “3 Attributes” |
| Category | (object) The category this item is in. /API/V3/Account/{accountID}/Category |
| TaxClass | (object) The tax class this item falls within. /API/V3/Account/{accountID}/TaxClass |
| Department | (object) The department this item is in. /API/V3/Account/{accountID}/Department |
| Manufacturer | (object) The manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer |
| Season | (object) The season this item is. |
| Items | (object) The items that belong to this matrix. /API/V3/Account/{accountID}/Item |
| CustomFieldValues | (object) The custom field values that belong to this matrix. |
| timeStamp | (datetime) Date/time the record was last modified. |

---

### PUT Update an item matrix

Update an existing item matrix based on the given paramters.

> Definition

```
PUT /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "description": "Pool Chairs",
      "tax": "false",
      "defaultCost": "0",
      "itemType": "default",
      "serialized": "false",
      "modelYear": "2021",
      "itemAttributeSetID": "1",
      "manufacturerID": "0",
      "categoryID": "0",
      "defaultVendorID": "0",
      "taxClassID": "0",
      "seasonID": "0",
      "departmentID": "0",
      "Prices": {
        "ItemPrice": [
          {
            "amount": "30",
            "useTypeID": "1",
            "useType": "Default"
          },
          {
            "amount": "15",
            "useTypeID": "2",
            "useType": "MSRP"
          },
          {
            "amount": "30",
            "useTypeID": "3",
            "useType": "Online"
          }
        ]
      }
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemMatrix": {
    "itemMatrixID": "4",
    "description": "Pool Chairs",
    "tax": "false",
    "defaultCost": "0",
    "itemType": "default",
    "serialized": "false",
    "modelYear": "2021",
    "archived": "false",
    "timeStamp": "2021-04-03T15:48:05+00:00",
    "itemAttributeSetID": "1",
    "manufacturerID": "0",
    "categoryID": "0",
    "defaultVendorID": "0",
    "taxClassID": "0",
    "seasonID": "0",
    "departmentID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "30",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "15",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "30",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attrubutes

| itemMatrixID | (integer) The unique numerical ID for the item matrix. Required Field |
| --- | --- |
| defaultCost | (float) The default reordering cost for the item. When no cost is entered this is used to create the inventory record cost. |
| tax | (boolean) Whether tax is charged on this item. |
| archived | (boolean) Whether this discount is archived. |
| itemType | (enum) An enumeration with these possible values: default, non_inventory, serialized, box, serialized_assembly, assembly. |
| serialized | (boolean) Whether the item is serialized. This can be applied to any itemType, but must be true to set the itemType to serialized or serialized_assembly. |
| description | (string) The description of the matrix. Displayed on receipts, labels, etc. Items in the matrix get the description: <ItemMatrix.description> <attribute1> <attribute2> <attribute3> |
| modelYear | (integer) The model year for this item. Example: “2008” |
| categoryID | (integer) Foreign key for the category this item is in. /API/V3/Account/{accountID}/Category/{categoryID} |
| taxClassID | (integer) Foreign key for the tax class this item falls within. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| departmentID | (integer) Foreign key for the department this item is in. /API/V3/Account/{accountID}/Department/{departmentID} |
| manufacturerID | (integer) Foreign key for the manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer/{manufacturerID} |
| seasonID | (integer) Foreign key for the season this item is in. /API/V3/Account/{accountID}/Season/{seasonID} |
| defaultVendorID | (integer) Foreign key for the default Vendor for this item /API/V3/Account/{accountID}/Vendor/{defaultVendorID} |
| itemAttributeSetID | (string) Foreign key to the AttributeSet which tells you what type of matrix this item should belong to. AttributeSets are “Color/Size”, “Size”, “Color”, “3 Attributes” |
| Category | (object) The category this item is in. /API/V3/Account/{accountID}/Category |
| TaxClass | (object) The tax class this item falls within. /API/V3/Account/{accountID}/TaxClass |
| Department | (object) The department this item is in. /API/V3/Account/{accountID}/Department |
| Manufacturer | (object) The manufacturer this item is from. /API/V3/Account/{accountID}/Manufacturer |
| Season | (object) The season this item is. |
| Items | (object) The items that belong to this matrix. /API/V3/Account/{accountID}/Item |
| CustomFieldValues | (object) The custom field values that belong to this matrix. |
| timeStamp | (datetime) Date/time the record was last modified. |

---

### DELETE Delete an item matrix

Archive an existing item matrix by its ID. All items in the matrix will also be archived.

> Definition

```
DELETE /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ItemMatrix": {
    "itemMatrixID": "4",
    "description": "Pool Chairs",
    "tax": "false",
    "defaultCost": "0",
    "itemType": "default",
    "serialized": "false",
    "modelYear": "2021",
    "archived": "true",
    "timeStamp": "2021-04-03T15:48:05+00:00",
    "itemAttributeSetID": "1",
    "manufacturerID": "0",
    "categoryID": "0",
    "defaultVendorID": "0",
    "taxClassID": "0",
    "seasonID": "0",
    "departmentID": "0",
    "Prices": {
      "ItemPrice": [
        {
          "amount": "30",
          "useTypeID": "1",
          "useType": "Default"
        },
        {
          "amount": "15",
          "useTypeID": "2",
          "useType": "MSRP"
        },
        {
          "amount": "30",
          "useTypeID": "3",
          "useType": "Online"
        }
      ]
    }
  }
}
```

#### Attributes

| itemMatrixID | (integer) The unique numerical ID for the item matrix. Required Field |
| --- | --- |
