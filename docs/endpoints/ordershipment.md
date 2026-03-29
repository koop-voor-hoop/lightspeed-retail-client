---
title: OrderShipment
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/OrderShipment/
---

# OrderShipment

#### Description

Order Shipments are summary of order items that are received and added into inventory.
Each Order Shipment contains the summary of the total Quantity of items received, as well as the total Vendor Cost.

This endpoint is identical to [Shipment](https://developers.lightspeedhq.com/retail/endpoints/Shipment/) but constraint to a single [Order](https://developers.lightspeedhq.com/retail/endpoints/Order/).

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
- Order
- OrderShipmentItems

#### Order Shipment Fields

| orderShipmentID | (integer) The unique numerical ID for the order shipment. /API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID} |
| --- | --- |
| orderID | (integer) The foreign key for the order for this order shipment. |
| sequenceNumber | (integer) The numerical ID for the order shipment, unique relative to the order. |
| totalQtyReceived | (integer) Total quantity of items in the shipment. |
| totalVendorCost | (float) Total landed cost of all items in vendor’s currency. |
| totalCost | (float) Total landed cost of all items in default currency. |
| currencyCode | (string) Default currency code. |
| vendorCurrencyCode | (string) Vendor’s currency code. |
| vendorCurrencyRate | (float) Exchange rate from vendor’s currency to default currency at the time of order shipment creation. |
| createTime | (datetime) The date the shipment was created. |
| paymentDueDate | (date) The payment due date of the shipment. |
| shipmentPackingRefNum | (string) Reference number for the shipment. |
| timeStamp | (datetime) The last updated date of the shipment. |
| employeeID | (integer) The foreign key for the employee for this order shipment. |
| receptionDate | (datetime) The date the shipment was received. |
| shippingCostMethod | (string) The shipping cost method applied on the shipment (can only be “evenly”, “proportionally” or “total”). |
| shippingVendorCost | (float) The shipping cost in Vendor’s currency. |
| shippingCost | (float) The shipping cost in default currency. |
| shippingCostOrderFullValue | (float) The full value of the shipping cost applied on the PO in default currency. |
| shippingCostOrderFullVendorValue | (float) The full value of the shipping cost applied on the PO in vendor’s currency. |
| discountMethod | (string) The discount method applied on the shipment (can only be “evenly”, “proportionally” or “total”). |
| discountMoneyVendorValue | (float) The discount amount in vendor’s currency. |
| discountMoneyValue | (float) The discount amount in default currency. |
| discountPercentValue | (float) The discount percent value of the item. |
| discountOrderFullMoneyValue | (float) The full value of the discount amount applied on the PO in default currency. |
| discountOrderFullMoneyVendorValue | (float) The full value of the discount amount applied on the PO in vendor’s currency. |
| cost | (float) The total cost of items in default currency before applying shipping cost & discounts. |
| vendorCost | (float) The total cost of items in vendor’s currency before applying shipping cost & discounts. |
| status | (string) The shipment status (can only be either “received” or “finished”). |

#### Sortable Fields

- orderShipmentID
- paymentDueDate
- sequenceNumber

#### See Also

- [Employee](https://developers.lightspeedhq.com/retail/endpoints/Employee/#employee-fields)
- [Order](https://developers.lightspeedhq.com/retail/endpoints/Order/#order-fields)
- [OrderShipmentItem](https://developers.lightspeedhq.com/retail/endpoints/OrderShipmentItem/#order-shipment-item-fields)

---

### GET All order shipments

Retrieve list of all order shipments in the account for a given order id.

> Definition

```
GET /API/V3/Account/{accountID}/Order/{orderID}/Shipment.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}/Shipment.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "OrderShipment": [
    {
      "orderShipmentID": "101",
      "orderID": "1",
      "sequenceNumber": "1",
      "totalQtyReceived": "10",
      "totalVendorCost": "100.12",
      "totalCost": "137.12",
      "currencyCode": "CAD",
      "vendorCurrencyCode": "USD",
      "vendorCurrencyRate": "1.37",
      "createTime": "2023-04-20T00:00:00+00:00",
      "paymentDueDate": "2023-05-20",
      "shipmentPackingRefNum": "1234-567890-0000",
      "timeStamp": "2023-04-20T00:00:00+00:00",
      "employeeID": "1",
      "receptionDate": "2023-04-20T00:00:00+00:00",
      "shippingCostMethod": "evenly",
      "shippingVendorCost": "3.45",
      "shippingCost": "4.56",
      "shippingCostOrderFullValue": "12.34",
      "shippingCostOrderFullVendorValue": "8.56",
      "discountMethod": "proportionally",
      "discountMoneyVendorValue": "2.34",
      "discountMoneyValue": "3.45",
      "discountPercentValue": "0",
      "discountOrderFullMoneyValue": "6.78",
      "discountOrderFullMoneyVendorValue": "5.12",
      "cost": "15.12",
      "vendorCost": "10.12",
      "status": "received"
    },
    {...}
  ]
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |

---

### GET Single order shipment

Retrieve a single order shipment by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}/Shipment/{orderShipmentID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "OrderShipment": {
    "orderShipmentID": "101",
    "orderID": "1",
    "sequenceNumber": "1",
    "totalQtyReceived": "10",
    "totalVendorCost": "100.12",
    "totalCost": "137.12",
    "currencyCode": "CAD",
    "vendorCurrencyCode": "USD",
    "vendorCurrencyRate": "1.37",
    "createTime": "2023-04-20T00:00:00+00:00",
    "paymentDueDate": "2023-05-20",
    "shipmentPackingRefNum": "1234-567890-0000",
    "timeStamp": "2023-04-20T00:00:00+00:00",
    "employeeID": "1",
    "receptionDate": "2023-04-20T00:00:00+00:00",
    "shippingCostMethod": "evenly",
    "shippingVendorCost": "3.45",
    "shippingCost": "4.56",
    "shippingCostOrderFullValue": "12.34",
    "shippingCostOrderFullVendorValue": "8.56",
    "discountMethod": "proportionally",
    "discountMoneyVendorValue": "2.34",
    "discountMoneyValue": "3.45",
    "discountPercentValue": "0",
    "discountOrderFullMoneyValue": "6.78",
    "discountOrderFullMoneyVendorValue": "5.12",
    "cost": "15.12",
    "vendorCost": "10.12",
    "status": "received"
  }
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |
| orderShipmentID | (integer) The unique numerical ID for the order shipment. Required Field |
