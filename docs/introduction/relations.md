---
title: Relations
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/relations/
---

# Relations

Lightspeed Retail POS (R-Series) uses a relational database. When querying an endpoint, related records are only included if you specify that they should be loaded.

## Loading Relations

You can use the `load_relations` URL parameter to request that related records be returned as sub-records. The relations should be provided as a JSON encoded array.

```
GET /API/V3/Account/{accountID}/Item/{itemID}.json?load_relations=["ItemShops"]
```

> SAMPLE JSON RESPONSE

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "20",
    "systemSku": "210000000020",
    ...
    "ItemShops": {
      "ItemShop": [{
          "itemShopID": "4",
          "qoh": "2",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "5",
          "reorderLevel": "10",
          "timeStamp": "2017-04-25T16:07:38+00:00",
          "itemID": "2",
          "shopID": "1",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        },
        {
          "itemShopID": "146",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2016-11-01T20:20:13+00:00",
          "itemID": "2",
          "shopID": "3",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        },
        {
          "itemShopID": "8",
          "qoh": "2",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2017-04-25T16:07:38+00:00",
          "itemID": "2",
          "shopID": "0",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        }
      ]
    },
    "Prices": {
        ...
    }
  }
}
```

For example, the inventory levels of items are stored in related records called ItemShops. You need to load the ItemShops relation on the Item endpoint to see this data.

As shown in the example, the desired relations are specified with a JSON-encoded array. You can also specify `load_relations=all` to get all available relations (except CustomFieldValues). This is convenient for discovery during testing, but shouldn’t be used in production as it is very resource-intensive. CustomFieldValues values are only loaded if explicitly specified in an array of relations.

The example specifies a specific item ID, but the `load_relations` parameters also works when requesting multiple records.

Each endpoint page in this documentation lists the available relations.

Usage of the `load_relations` parameter will increase the request cost for each relation loaded. X-to-One relations loaded on a single record cost an additional 0.1 drip each. X-to-Many relations loaded on a single record cost an additional 0.2 drips cost. The costs are doubled when potentially loading for multiple records, such as for query endpoints or on nested relations of an X-to-Many relation. Using the `load_relations=all` parameter will sum the costs of all available relations for the entity.

---

## Searching in Relations

Sometimes you may need to search based specific values in related records. To do this, you will give the name of the relation and the name of the parameter you want to use on the related records. The relation you are searching in must be loaded using the `load_relations` parameter.

For example, if you are looking for items with inventory greater than 1, you would use the following URI and parameters to filter on the `qoh` field in the ItemShops relation:

`https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item?load_relations=["ItemShops"]&ItemShops.qoh=>,1`

This will return all Items that have at least one related ItemShop record that satisfies the condition (in this case, quantity on hand greater than 1)

It’s only possible to search in 1 level of relations, that is, you can search in the SaleLines relation on the Sale endpoint, but not in SaleLines.Item.

## Writing to Relations

The can create or modify a lot records as relations of the parent record. For example, when creating a sale, you can create sale lines and sale payments in the same payload by adding them as subobjects of the sale. See the [Sales tutorial](https://developers.lightspeedhq.com/retail/tutorials/sales) for a full example request.

> Example Request

```json
{
    "firstName": "Jane",
    "lastName": "Doe",
    "Contact": {
        "Phones": {
            "ContactPhone": {
                "number": "360 555 2453",
                "useType": "Home"
            }
        },
        "Emails": {
            "ContactEmail": {
                "address": "[email protected]",
                "useType": "Primary"
            }
        }
    }
}
```

Some record types don’t have their own endpoints and can only be created and modified this way. Customer contact info is a common example. This payload can be used to create a customer with a phone number and email address by sending it in a POST request to the Customer endpoint. The same payload could be used to update an existing customer’s contact info (this example would also update the name).
