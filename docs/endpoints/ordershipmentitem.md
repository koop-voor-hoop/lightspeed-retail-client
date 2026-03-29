---
title: OrderShipmentItem
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/OrderShipmentItem/
---

# OrderShipmentItem

#### Description

Order Shipment Items are detailed list of order items that are received and added into inventory.
Each Order Shipment contain the summary total Quantity of items received, as well as the total Vendor Cost.

This endpoint is identical to [ShipmentItem](https://developers.lightspeedhq.com/retail/endpoints/ShipmentItem/) but constraint to a single [Order](https://developers.lightspeedhq.com/retail/endpoints/Order/).

#### User Interface

- Inventory → Purchase Orders → Purchase Order view → Shipment History tab

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | False |
| PUT/Update | False |
| DELETE/Archive | False |

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### Additional Relations

- Employee
- Item
- OrderLine
- OrderShipment

#### Order Shipment Item Fields

| orderShipmentItemID | (integer) The unique numerical ID for the order shipment item. /API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}/Item/{orderShipmentItemID} |
| --- | --- |
| orderShipmentID | (integer) The foreign key for the order shipment for this order shipment item. |
| qtyReceived | (integer) Total quantity of item in the shipment. |
| vendorCost | (float) Item cost in vendor’s currency before applying shipping cost & discounts. |
| cost | (float) Item cost in default currency before applying shipping cost & discounts. |
| totalVendorCost | (float) Total landed cost of the item within this shipment in vendor’s currency. |
| totalCost | (float) Total landed cost of the item within this shipment in default currency. |
| shippingCost | (float) Shipping cost of the item in default currency. |
| shippingVendorCost | (float) Shipping cost of the item in vendor’s currency. |
| discountMoneyValue | (float) Discount value of the item in default currency. |
| discountMoneyVendorValue | (float) Discount value of the item in vendor’s currency. |
| discountPercentValue | (float) Discount percent value of the item. |
| currencyCode | (string) Default currency code. |
| vendorCurrencyCode | (string) Vendor’s currency code. |
| vendorCurrencyRate | (float) Exchange rate from vendor’s currency to default currency at the time of order shipment creation. |
| createTime | (datetime) The date the shipment item was created. |
| timeStamp | (datetime) The last updated date of the shipment item. |
| employeeID | (integer) The foreign key for the employee. |
| itemID | (integer) The foreign key for the item. |
| itemVendorID | (string) The vendor specific SKUs for this item. |
| itemDescription | (string) The description of the item. |

#### Sortable Fields

- description
- orderShipmentItemID
- qtyReceived
- vendorCost

#### See Also

- [Employee](https://developers.lightspeedhq.com/retail/endpoints/Employee/#employee-fields)
- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)
- [OrderLine](https://developers.lightspeedhq.com/retail/endpoints/OrderLine/#orderline-fields)
- [OrderShipment](https://developers.lightspeedhq.com/retail/endpoints/OrderShipment/#order-shipment-fields)

---

### GET All order shipment items

Retrieve list of all order shipment items in the account for a given order shipment id.

> Definition

```
GET /API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}/Item.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}/Item.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "OrderShipmentItem": [
    {
      "orderShipmentItemID": "1011",
      "orderShipmentID": "101",
      "qtyReceived": "5",
      "vendorCost": "10.12",
      "cost": "13.56",
      "totalVendorCost": "50.12",
      "totalCost": "67.56",
      "shippingCost": "3.12",
      "shippingVendorCost": "2.34",
      "discountMoneyValue": "5.56",
      "discountMoneyVendorValue": "4.12",
      "discountPercentValue": "0",
      "currencyCode": "CAD",
      "vendorCurrencyCode": "USD",
      "vendorCurrencyRate": "1.35",
      "createTime": "2023-04-20T00:00:00+00:00",
      "timeStamp": "2023-04-20T00:00:00+00:00",
      "employeeID": "1",
      "itemID": "123",
      "itemVendorID": "itm-123",
      "itemDescription": "Tomato"
    },
    {...}
  ]
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |
| orderShipmentID | (integer) The unique numerical ID for the order shipment. Required Field |

---

### GET Single order shipment item

Retrieve a single order shipment item by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}/Item/{orderShipmentItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}/Item/{orderShipmentItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderShipmentItem": {
    "orderShipmentItemID": "1011",
    "orderShipmentID": "101",
    "qtyReceived": "5",
    "vendorCost": "10.12",
    "cost": "13.56",
    "totalVendorCost": "50.12",
    "totalCost": "67.56",
    "shippingCost": "3.12",
    "shippingVendorCost": "2.34",
    "discountMoneyValue": "5.56",
    "discountMoneyVendorValue": "4.12",
    "discountPercentValue": "0",
    "currencyCode": "CAD",
    "vendorCurrencyCode": "USD",
    "vendorCurrencyRate": "1.35",
    "createTime": "2023-04-20T00:00:00+00:00",
    "timeStamp": "2023-04-20T00:00:00+00:00",
    "employeeID": "1",
    "itemID": "123",
    "itemVendorID": "itm-123",
    "itemDescription": "Tomato"
  }
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |
| orderShipmentID | (integer) The unique numerical ID for the order shipment. Required Field |
| orderShipmentItemID | (integer) The unique numerical ID for the order shipment item. Required Field |
