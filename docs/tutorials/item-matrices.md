---
title: Item Matrices
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/itemmatrix/
---

# Item Matrices

This tutorial will cover creating an item matrix and assigning items to it.

## Creating an Item Matrix

> Definition

```
POST /API/V3/Account/{accountID}/ItemMatrix.json
```

> Example Payload

```json
{
    "description": "T-Shirt Test",
    "itemAttributeSetID": "1"
}
```

> Example Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "ItemMatrix": {
        "itemMatrixID": "20",
        "description": "T-Shirt",
        "tax": "false",
        "defaultCost": "0",
        "itemType": "default",
        "serialized": "false",
        "modelYear": "0",
        "archived": "false",
        "timeStamp": "2017-12-04T19:07:41+00:00",
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
                    "amount": "0",
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
                    "useType": "My Online Store"
                },
                {
                    "amount": "0",
                    "useTypeID": "5",
                    "useType": "Online"
                }
            ]
        },
        "attribute1Values": "",
        "attribute2Values": ""
    }
}
```

First, create the item matrix. Only 2 fields are required:  `description` and  `itemAttributeSetID` (Check the [ItemMatrix](https://developers.lightspeedhq.com/retail/endpoints/ItemMatrix) endpoint for all its attributes). It’s a good idea to set up all of the matrix’s attributes (e.g., manufacturer, cost, price, itemType, category, taxes, etc.) before adding products.

In this example, the name of the item matrix is ‘T-shirt’ and the `itemAttributeSetID` is set to 2 (the color/size attribute set). Visit the [ItemAttributeSet](https://developers.lightspeedhq.com/retail/endpoints/ItemAttributeSet) endpoint to see all the defined attribute sets.

---

## Adding a Product to the Item Matrix

> Definition

```
POST /API/V3/Account/{accountID}/Item.json
```

> Example Payload

```json
{
    "description": "T-shirt White Small",
    "itemMatrixID": "20",
    "ItemAttributes": {
        "itemAttributeSetID": "1",
        "attribute1": "White",
        "attribute2": "Small"
    }
}
```

> Example Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Item": {
        "itemID": "133",
        "systemSku": "210000000133",
        "defaultCost": "0",
        "avgCost": "0",
        "discountable": "true",
        "tax": "true",
        "archived": "false",
        "itemType": "default",
        "serialized": "false",
        "description": "T-Shirt White Small",
        "modelYear": "0",
        "upc": "",
        "ean": "",
        "customSku": "",
        "manufacturerSku": "",
        "createTime": "2017-12-04T19:49:44+00:00",
        "timeStamp": "2017-12-04T19:53:35+00:00",
        "publishToEcom": "true",
        "categoryID": "0",
        "taxClassID": "1",
        "departmentID": "0",
        "itemMatrixID": "20",
        "manufacturerID": "0",
        "seasonID": "0",
        "defaultVendorID": "0",
        "ItemAttributes": {
            "attribute1": "White",
            "attribute2": "Small",
            "attribute3": "",
            "itemAttributeSetID": "1"
        },
        "ItemMatrix": {
            "itemMatrixID": "20",
            "description": "T-Shirt",
            "tax": "true",
            "defaultCost": "10",
            "itemType": "default",
            "serialized": "false",
            "modelYear": "0",
            "archived": "false",
            "timeStamp": "2017-12-04T19:53:35+00:00",
            "itemAttributeSetID": "1",
            "manufacturerID": "0",
            "categoryID": "0",
            "defaultVendorID": "0",
            "taxClassID": "1",
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
                        "amount": "15",
                        "useTypeID": "2",
                        "useType": "MSRP"
                    },
                    {
                        "amount": "0",
                        "useTypeID": "3",
                        "useType": "My Online Store"
                    },
                    {
                        "amount": "0",
                        "useTypeID": "5",
                        "useType": "Online"
                    }
                ]
            },
            "attribute1Values": "White",
            "attribute2Values": "Small"
        },
        "ItemShops": {
            "ItemShop": [
                {
                    "itemShopID": "666",
                    "qoh": "0",
                    "backorder": "0",
                    "componentQoh": "0",
                    "componentBackorder": "0",
                    "reorderPoint": "0",
                    "reorderLevel": "0",
                    "timeStamp": "2017-12-04T19:49:44+00:00",
                    "itemID": "133",
                    "shopID": "1"
                },
                {
                    "itemShopID": "667",
                    "qoh": "0",
                    "backorder": "0",
                    "componentQoh": "0",
                    "componentBackorder": "0",
                    "reorderPoint": "0",
                    "reorderLevel": "0",
                    "timeStamp": "2017-12-04T19:49:44+00:00",
                    "itemID": "133",
                    "shopID": "2"
                },
                {
                    "itemShopID": "668",
                    "qoh": "0",
                    "backorder": "0",
                    "componentQoh": "0",
                    "componentBackorder": "0",
                    "reorderPoint": "0",
                    "reorderLevel": "0",
                    "timeStamp": "2017-12-04T19:49:44+00:00",
                    "itemID": "133",
                    "shopID": "3"
                },
                {
                    "itemShopID": "665",
                    "qoh": "0",
                    "backorder": "0",
                    "componentQoh": "0",
                    "componentBackorder": "0",
                    "reorderPoint": "0",
                    "reorderLevel": "0",
                    "timeStamp": "2017-12-04T19:49:44+00:00",
                    "itemID": "133",
                    "shopID": "0"
                }
            ]
        },
        "Prices": {
            "ItemPrice": [
                {
                    "amount": "0",
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
                    "useType": "My Online Store"
                },
                {
                    "amount": "0",
                    "useTypeID": "5",
                    "useType": "Online"
                }
            ]
        }
    }
}
```

Next, a new product is created and assigned to the item matrix.

The `itemMatrixID` is necessary to specify which item matrix the product should be part of. In this example, the `itemMatrixID` from the previous response, `20`, is used.

The item’s attributes (e.g. size and color) are specified in the `ItemAttributes` object. These attribute values will automatically be added to the matrix’s `attribute1Values`, `attribute2Values` and/or `attribute3Values` arrays.

Add other fields as necessary.
