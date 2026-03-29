---
title: OrderLine
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/OrderLine/
---

# OrderLine

#### Description

The individual OrderLines for an Order. Accessible through this separate control from Order so you can create, update, and delete single lines without affecting an entire Order.

#### User Interface

- Inventory → Purchase Orders / New Order → Purchase Order view

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### OrderLine Fields

| orderLineID | (integer) The unique numerical ID for the order line. /API/V3/Account/{accountID}/OrderLine/{orderLineID} |
| --- | --- |
| quantity | (integer) The quantity ordered of the item on this line. |
| price | (float) The unit cost, in the merchant’s default currency (discount adjusted if there is a discount on the order) . |
| originalPrice | (float) The original unit cost, in the merchant’s default currency (before discount if there is a discount). |
| vendorCost | (float) The unit cost, before any order discount, in the vendor’s default currency. Should only be used instead of originalPrice. |
| checkedIn | (integer) The quantity that has been checked in (added to inventory). |
| numReceived | (integer) The quantity that has been received but not checked in (hasn’t been added to inventory yet). |
| orderID | (integer) The foreign ID for the order that this line belongs to. /API/V3/Account/{accountID}/Order/{orderID} |
| itemID | (integer) The foreign ID for the item that is being ordered on this line. /API/V3/Account/{accountID}/Item/{itemID} |
| timeStamp | (datetime) Date/time the record was last modified. |
| total | (float) Order line total: quantity multiplied by price. |
| createTime | (datetime) The date the order line was created. |
| shippingCost | (float) The calculated shipping cost information from the purchase order level in merchant’s default currency. |
| shippingVendorCost | (float) The calculated shipping cost information from the purchase order level in vendor’s currency. |
| discountMoneyValue | (float) The money value of the discount for the item from the purchase order level in merchant’s default currency. |
| discountMoneyVendorValue | (float) The money value of the discount for the item from the purchase order level in vendor’s currency. |
| discountPercentValue | (float) The percentage value of the discount for the item from the purchase order level. |

#### Sortable Fields

- orderLineID
- timeStamp
- orderID

---

### GET All order lines

Retrieve a list of all order lines in the account.

> Definition

```
GET /API/V3/Account/{accountID}/OrderLine.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/OrderLine.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "OrderLine": [
    {
      "orderLineID": "73",
      "quantity": "1",
      "price": "20.12",
      "originalPrice": "20.12",
      "vendorCost": "15.12",
      "checkedIn": "0",
      "numReceived": "0",
      "timeStamp": "2022-09-07T19:29:19+00:00",
      "total": "20.12",
      "createTime": "2022-09-07T19:29:19+00:00",
      "shippingCost": "3.12",
      "shippingVendorCost": "2.12",
      "discountMoneyValue": "2.34",
      "discountMoneyVendorValue": "1.23",
      "discountPercentValue": "0",
      "orderID": "32",
      "itemID": "89"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single order line

Retrieve a single order line by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/OrderLine/{orderLineID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/OrderLine/{orderLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderLine": {
    "orderLineID": "73",
    "quantity": "1",
    "price": "20.12",
    "originalPrice": "20.12",
    "vendorCost": "15.12",
    "checkedIn": "0",
    "numReceived": "0",
    "timeStamp": "2022-09-07T19:29:19+00:00",
    "total": "20.12",
    "createTime": "2022-09-07T19:29:19+00:00",
    "shippingCost": "3.12",
    "shippingVendorCost": "2.12",
    "discountMoneyValue": "2.34",
    "discountMoneyVendorValue": "1.23",
    "discountPercentValue": "0",
    "orderID": "32",
    "itemID": "89"
  }
}
```

#### Attributes

| orderLineID | (integer) The unique numerical ID for the order line. Required Field |
| --- | --- |

---

### POST Create an order line

Create an order line based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/OrderLine.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "quantity": "1",
        "price": "20",
        "originalPrice": "20",
        "numReceived": "0",
        "itemID": "89",
        "orderID": "32"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/OrderLine.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderLine": {
            "orderLineID": "73",
            "quantity": "1",
            "price": "20",
            "originalPrice": "20",
            "vendorCost": "0",
            "checkedIn": "0",
            "numReceived": "0",
            "timeStamp": "2022-09-07T19:29:19+00:00",
            "total": "20",
            "createTime": "2022-09-07T19:29:19+00:00",
            "orderID": "32",
            "itemID": "89"
        }
}
```

#### Attributes

| quantity | (integer) The quantity ordered of the Item on this line. |
| --- | --- |
| price | (float) The unit cost, in the merchant’s default currency (discount adjusted if there is a discount on the order) . |
| originalPrice | (float) The original unit cost, in the merchant’s default currency (before discount if there is a discount). |
| vendorCost | (float) The unit cost, before any order discount, in the vendor’s default currency. Should only be used instead of originalPrice. |
| numReceived | (integer) The quantity that has been received but not checked in (hasn’t been added to inventory yet). |
| orderID | (integer) The foreign ID for the order that this line belongs to. |
| itemID | (integer) The foreign ID for the item that is being ordered on this line. |

---

### PUT Update an order line

Update an existing order line based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/OrderLine/{orderLineID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "quantity": "10",
        "price": "20",
        "orderID": "32"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/OrderLine/{orderLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderLine": {
            "orderLineID": "73",
            "quantity": "1",
            "price": "20",
            "originalPrice": "20",
            "vendorCost": "0",
            "checkedIn": "0",
            "numReceived": "0",
            "timeStamp": "2022-09-07T20:29:19+00:00",
            "total": "200",
            "createTime": "2022-09-07T19:29:19+00:00",
            "orderID": "32",
            "itemID": "89"
        }
}
```

#### Attributes

| orderLineID | (integer) The unique numerical ID for the order line. Required Field |
| --- | --- |
| quantity | (integer) The quantity ordered of the Item on this line. |
| price | (float) The unit cost, in the merchant’s default currency (discount adjusted if there is a discount on the order) . |
| originalPrice | (float) The original unit cost, in the merchant’s default currency (before discount if there is a discount). |
| vendorCost | (float) The unit cost, before any order discount, in the vendor’s default currency. Should only be used instead of originalPrice. |
| numReceived | (integer) The quantity that has been received but not checked in (hasn’t been added to inventory yet). |
| orderID | (integer) The foreign ID for the order that this line belongs to. |
| itemID | (integer) The foreign ID for the item that is being ordered on this line. |

---

### DELETE Delete an order line

Permanently delete an order line by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/OrderLine/{orderLineID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/OrderLine/{orderLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderLine": {
            "orderLineID": "73",
            "quantity": "10",
            "price": "20",
            "originalPrice": "20",
            "vendorCost": "0",
            "checkedIn": "0",
            "numReceived": "0",
            "timeStamp": "2022-09-07T21:29:19+00:00",
            "total": "200",
            "createTime": "2022-09-07T19:29:19+00:00",
            "orderID": "32",
            "itemID": "89"
        }
}
```

#### Attributes

| orderLineID | (integer) The unique numerical ID for the order line. Required Field |
| --- | --- |
