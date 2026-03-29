---
title: ItemFee
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ItemFee/
---

# ItemFee

#### Description

A fee associated with items based on item categories. Can be flagged as taxable or non-taxable.
Currently refundable, discountable, and calculationMethod attributes provide no extra functionality.

An ItemFee associated with an item will be represented as a SaleLine within a transaction. The item the fee is associated with is considered the fee’s “parent”,
connected via the `parentSaleLineID` attribute on a SaleLine. By default, an item fee’s SaleLine has a `lineType` of `item_fee`. When refunding, the `lineType` is `item_fee_refund`.

To differentiate between and item being refunded, and an item fee that is associated with an item in a refund, check for a non-zero `parentSaleLineID`, and a `lineType` that is not equal to `item_fee`.

#### User Interface

- Settings -> Item Fees -> Add Item Fee.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| item fees | true |
| --- | --- |

#### Additional Relations

- ItemFeeCategories

#### Item Fee Fields

| itemFeeID | (integer) The primary ID of an item fee |
| --- | --- |
| name | (string) The name of an item fee |
| calculationMethod | (string) The way in which an item fee’s value determined (currently only fixed_amount) |
| feeValue | (float) The monetary value of the item fee |
| taxable | (boolean) A flag to determine if the item fee can be taxed |
| discountable | (boolean) A flag to determine if the item fee can be discounted (currently not in use) |
| nonRefundable | (boolean) A flag to determine if the item fee can be refunded (currently not in use) |
| archived | (boolean) A flag to determine if the item fee is archived (cannot be used within a transaction if “true”) |
| createTime | (datetime) The date/time the item fee was created |
| timestamp | (datetime) The data/time the item fee was last updated |
| ItemFeeCategories | (object) The item categories the item fee is associated with /API/V3/Account/{accountID}/Category |

#### Sortable Fields

- itemFeeID

#### See Also

- [SaleLine](https://developers.lightspeedhq.com/retail/endpoints/SaleLine/#saleline-fields)
- [Category](https://developers.lightspeedhq.com/retail/endpoints/Category/#category-fields)

### GET All item fees

Retrieve a list of all item fees in the account

> Definition

```
GET /API/V3/Account/{accountID}/ItemFee.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemFee.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "ItemFee": [
        {
            "itemFeeID": "1074",
            "name": "Tire Recycling Fee",
            "calculationMethod": "fixed_amount",
            "feeValue": "11.95",
            "taxable": "true",
            "discountable": "false",
            "nonRefundable": "false",
            "archived": "false",
            "createTime": "2024-02-07T20:36:15+00:00",
            "timestamp": "2024-02-21T18:37:49+00:00"
        },
        {
            "itemFeeID": "1075",
            "name": "Environmental Fee - EBike",
            "calculationMethod": "fixed_amount",
            "feeValue": "30.00",
            "taxable": "true",
            "discountable": "false",
            "nonRefundable": "false",
            "archived": "false",
            "createTime": "2024-02-07T20:36:35+00:00",
            "timestamp": "2024-02-08T18:39:25+00:00"
        }
    ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET single item fee

Retrieve an existing item fee by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "ItemFee": {
        "itemFeeID": "1074",
        "name": "Tire Recycling Fee",
        "calculationMethod": "fixed_amount",
        "feeValue": "11.95",
        "taxable": "true",
        "discountable": "false",
        "nonRefundable": "false",
        "archived": "false",
        "createTime": "2024-02-07T20:36:15+00:00",
        "timestamp": "2024-02-28T14:09:46+00:00"
    }
}
```

#### Attributes

| itemFeeID | (integer) The unique numerical ID for the item fee. Required Field |
| --- | --- |

---

### PUT Update an item fee

Update an existing item fee based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "name": "Environmental Fee - E-Bike",
      "feeValue": 30.00,
      "taxable": true,
      "ItemFeeCategories": {
          "ItemFeeCategory": [
              { "categoryID": "844" }
          ]
      }
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "ItemFee": {
        "itemFeeID": "1112",
        "name": "Environmental Fee - E-Bike",
        "calculationMethod": "fixed_amount",
        "feeValue": "30.00",
        "taxable": "false",
        "discountable": "false",
        "nonRefundable": "false",
        "archived": "false",
        "createTime": "2024-02-29T16:11:00+00:00",
        "timestamp": "2024-02-29T16:11:00+00:00",
        "ItemFeeCategories": {
            "ItemFeeCategory": {
                "itemFeeCategoryID": "10111",
                "itemFeeID": "1112",
                "categoryID": "844",
                "Category": {
                    "categoryID": "844",
                    "name": "Electric",
                    "nodeDepth": "0",
                    "fullPathName": "Bikes|Electric",
                    "leftNode": "1581",
                    "rightNode": "1584",
                    "createTime": "2016-02-18T22:34:05+00:00",
                    "timeStamp": "2024-02-21T15:27:12+00:00",
                    "parentID": "1581"
                }
            }
        }
    }
}
```

#### Attributes

| name | (string) The name of an item fee |
| --- | --- |
| calculationMethod | (string) The way in which an item fee’s value determined (currently only fixed_amount) |
| feeValue | (float) The monetary value of the item fee |
| taxable | (boolean) A flag to determine if the item fee can be taxed |
| discountable | (boolean) A flag to determine if the item fee can be discounted (currently not in use) |
| nonRefundable | (boolean) A flag to determine if the item fee can be refunded (currently not in use) |
| archived | (boolean) A flag to determine if the item fee is archived (cannot be used within a transaction is “true”) |
| ItemFeeCategories | (object) The item categories the item fee is associated with /API/V3/Account/{accountID}/Category |

---

### DELETE delete an item fee

Soft delete (archive) an item fee by its ID. You can’t use an item fee in a transaction if it is archived

> Definition

```
DELETE /API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemFee/{itemFeeID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "ItemFee": {
        "itemFeeID": "1074",
        "name": "Tire Recycling Fee",
        "calculationMethod": "fixed_amount",
        "feeValue": "11.95",
        "taxable": "true",
        "discountable": "false",
        "nonRefundable": "false",
        "archived": "true",
        "createTime": "2024-02-07T20:36:15+00:00",
        "timestamp": "2024-02-28T14:09:46+00:00"
    }
}
```

#### Attributes

| itemFeeID | (integer) The unique numerical ID for the item fee. Required Field |
| --- | --- |
