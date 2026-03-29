---
title: Order
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Order/
---

# Order

#### Description

Orders are for replenishing product inventory. Each Order has a Vendor (the supplier that will fulfill the order) and many OrderLines which contain the individual product quantities and costs that are being ordered.

#### User Interface

- Inventory → Purchase Orders / New Order

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:purchase_orders | true |
| --- | --- |

#### Additional Relations

- OrderLines
- Note
- Vendor
- Shop
- CustomFieldValues
- CustomFieldValues.value

#### Order Fields

| orderID | (integer) The unique numerical ID for the order. /API/V3/Account/{accountID}/Order/{orderID} |
| --- | --- |
| orderedDate | (datetime) The date the order is placed with the vendor on. |
| receivedDate | (datetime) The date the order actually arrives on. |
| arrivalDate | (datetime) The date the order is expected to arrive on. |
| refNum | (string) A custom string to hold an external reference number. |
| shipInstructions | (string) Instructions for the vendor or shipper about how to ship the order. |
| stockInstructions | (string) Instructions for employees that are receiving the order and are stocking it in the store. |
| shipCost | (float) Shipping costs the vendor adds to the order. |
| shipVendorCost | (float) The shipping costs the vendor adds to the order in the vendor’s currency. |
| otherCost | (float) Other costs the vendor adds to the order. Can be negative to be a discount. |
| otherVendorCost | (float) The other costs the vendor adds to the order in the vendor’s currency. |
| complete | (boolean) Whether this order is marked as complete. Usually happens after the order is done being checked in. |
| archived | (boolean) Whether this order is archived. Archived orders are not counted towards backorder totals etc. |
| discount | (float) A percentage discount that is applied to the unit cost of each item on the order. |
| totalDiscount | (float) Total of all the discounts added to the order. |
| totalQuantity | (integer) Total of all the items quantities added to the order. |
| vendorID | (integer) The foreign key for the vendor this purchase order is for. /API/V3/Account/{accountID}/Vendor/{vendorID} |
| noteID | (integer) The foreign key for the notes for this order. |
| shopID | (integer) The foreign key for the shop this purchase order is under. /API/V3/Account/{accountID}/Shop/{shopID} |
| createdByEmployeeID | (integer) The foreign key for the employee that created the purchase order. |
| Vendor | (object) The vendor this purchase order is for. /API/V3/Account/{accountID}/Vendor |
| Note | (object) Notes for the order. |
| Shop | (object) The shop this purchase order is under. /API/V3/Account/{accountID}/Shop |
| OrderLines | (object) The individual lines on this order. /API/V3/Account/{accountID}/OrderLine |
| CustomFieldValues | (object) The custom field values that belong to this order. |
| createTime | (datetime) Date/time the record was created. |
| timeStamp | (datetime) Date/time the record was last modified. |
| vendorCurrencyRate | (float) The currency rate of the purchase order. The default value is the vendor’s currency rate. |
| vendorCurrencyCode | (string) The currency code of the purchase order. The default value is the vendor’s currency code. |
| shippingCostMethod | (string) The shipping cost method on the purchase order level (can only be “evenly”, “proportionally” or “total”). |
| hasShipments | (boolean) Does this order has any shipments associated with? true/false |
| discountMethod | (string) The discount method on the purchase order level (can only be “evenly”, “proportionally” or “total”). |
| discountMoneyValue | (float) The money value of the discount on the purchase order level in merchant’s currency. |
| discountMoneyVendorValue | (float) The money value of the discount on the purchase order level in vendor’s currency. |
| discountIsPercent | (boolean) Is the discount for this order expressed as a percentage or a fixed dollar amount? true/false |
| discountPercentValue | (float) The percentage value of the discount on the purchase order level. |
| costsModifiedAfterShipment | (boolean) Has the shipping cost or discount been modified since the creation of the 1st shipment? true/false |
| b2bOrderUID | (string) The unique identifier of the order in NuORDER. |
| b2bOrderNumber | (string) The order number in NuORDER. |

#### Note Fields

| noteID | (integer) The unique numerical ID for the note. |
| --- | --- |
| note | (string) The note text. |
| isPublic | (boolean) Whether this note should show on receipts. For example if you put a note on an Item and mark it public than it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified |

#### Sortable Fields

- orderID
- timeStamp

#### See Also

- [OrderLine](https://developers.lightspeedhq.com/retail/endpoints/OrderLine/#orderline-fields)
- [Vendor](https://developers.lightspeedhq.com/retail/endpoints/Vendor/#vendor-fields)
- [Shop](https://developers.lightspeedhq.com/retail/endpoints/Shop/#shop-fields)
- [CustomFieldValue](https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField/#customfieldvalue-fields)
- [CustomFieldChoice](https://developers.lightspeedhq.com/retail/endpoints/Order-CustomField-CustomFieldChoice/#customfieldchoice-fields)

---

### GET All orders

Retrievea list of all order in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Order.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Order": [
    {
      "orderID": "1",
      "orderedDate": "2021-08-29T07:00:00+00:00",
      "receivedDate": "2021-08-29T07:00:00+00:00",
      "shipInstructions": "",
      "stockInstructions": "",
      "shipCost": "9.56",
      "shipVendorCost": "8.12",
      "otherCost": "0",
      "otherVendorCost": "0",
      "complete": "true",
      "archived": "false",
      "discount": "0",
      "totalDiscount": "0",
      "totalQuantity": "2",
      "subTotalCost": "5",
      "totalCost": "6.5",
      "timeStamp": "2021-10-17T13:47:52+00:00",
      "refNum": "",
      "createTime": "2021-10-17T13:47:52+00:00",
      "vendorCurrencyRate": "1.5",
      "vendorCurrencyCode": "USD",
      "shippingCostMethod": "evenly",
      "hasShipments": "true",
      "discountMethod": "proportionally",
      "discountMoneyValue": "6.12",
      "discountMoneyVendorValue": "4.56",
      "discountIsPercent": "false",
      "discountPercentValue": "0",
      "costsModifiedAfterShipment": "false",
      "b2bOrderUID": "12345",
      "b2bOrderNumber": "abcde",
      "vendorID": "0",
      "noteID": "11",
      "shopID": "2",
      "createdByEmployeeID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single order

Retrieve a single order by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Order/{orderID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Order": {
    "orderID": "3",
    "orderedDate": "2021-10-17T07:00:00+00:00",
    "receivedDate": "2021-10-17T07:00:00+00:00",
    "shipInstructions": "",
    "stockInstructions": "",
    "shipCost": "9.56",
    "shipVendorCost": "8.12",
    "otherCost": "0",
    "otherVendorCost": "0",
    "complete": "true",
    "archived": "false",
    "discount": "0",
    "totalDiscount": "0",
    "totalQuantity": "1234156",
    "subTotalCost": "5",
    "totalCost": "6.5",
    "timeStamp": "2021-10-17T13:48:23+00:00",
    "refNum": "",
    "createTime": "2021-10-17T13:47:52+00:00",
    "vendorCurrencyRate": "1.5",
    "vendorCurrencyCode": "USD",
    "shippingCostMethod": "evenly",
    "hasShipments": "true",
    "discountMethod": "proportionally",
    "discountMoneyValue": "6.12",
    "discountMoneyVendorValue": "4.56",
    "discountIsPercent": "false",
    "discountPercentValue": "0",
    "costsModifiedAfterShipment": "false",
    "b2bOrderUID": "12345",
    "b2bOrderNumber": "abcde",
    "vendorID": "62",
    "noteID": "16",
    "shopID": "2",
    "createdByEmployeeID": "1"
  }
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |

---

### POST Create an order

Create an order based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Order.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "orderedDate": "2021-04-04",
        "shipInstructions": "This is a special ship instruction",
        "stockInstruction": "This is a special stock instruction",
        "vendorID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Order": {
    "orderID": "3",
    "orderedDate": "2021-04-04T07:00:00+00:00",
    "receivedDate": "2021-10-17T07:00:00+00:00",
    "shipInstructions": "This is a special ship instruction",
    "stockInstructions": "",
    "shipCost": "0",
    "otherCost": "0",
    "complete": "true",
    "archived": "false",
    "discount": "0",
    "totalDiscount": "0",
    "totalQuantity": "1234156",
    "timeStamp": "2021-04-05T03:08:13+00:00",
    "refNum": "",
    "b2bOrderUID": "",
    "b2bOrderNumber": "",
    "vendorID": "1",
    "noteID": "16",
    "shopID": "2",
    "Note": {
      "noteID": "16",
      "note": "",
      "isPublic": "false",
      "timeStamp": "2021-10-17T13:47:39+00:00"
    }
  }
}
```

#### Attributes

| orderedDate | (datetime) The date the order is placed with the vendor on. |
| --- | --- |
| receivedDate | (datetime) The date the order actually arrives on. |
| arrivalDate | (datetime) The date the order is expected to arrive on. |
| refNum | (string) A custom string to hold an external reference number. |
| shipInstructions | (integer) Instructions for the vendor or shipper about how to ship the order. |
| stockInstructions | (integer) Instructions for employees that are receiving the order and are stocking it in the store. |
| shipCost | (float) Shipping costs the vendor adds to the order. |
| otherCost | (float) Other costs the vendor adds to the order. Can be negative to be a discount. |
| discount | (float) A percentage discount that is applied to the unit cost of each item on the order. |
| shopID | (integer) The foreign key for the shop this purchase order is under. /API/V3/Account/{accountID}/Shop/{shopID} |
| refNum | (string) Reference number for the purchase order. |
| b2bOrderUID | (string) The unique identifier of the order in NuORDER. |
| b2bOrderNumber | (string) The order number in NuORDER. |
| Vendor | (object) The vendor this purchase order is for. /API/V3/Account/{accountID}/Vendor |
| Shop | (object) The shop this purchase order is under. /API/V3/Account/{accountID}/Shop |

---

### PUT Update an order

Update an existing order based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Order/{orderID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "orderedDate": "2021-04-06",
        "shipInstructions": "This is a updated special ship instruction",
        "vendorID": "3"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Order": {
    "orderID": "3",
    "orderedDate": "2021-04-06T07:00:00+00:00",
    "receivedDate": "2021-10-17T07:00:00+00:00",
    "shipInstructions": "This is a updated special ship instruction",
    "stockInstructions": "",
    "shipCost": "0",
    "otherCost": "0",
    "complete": "true",
    "archived": "false",
    "discount": "0",
    "totalDiscount": "0",
    "totalQuantity": "1234156",
    "timeStamp": "2021-04-05T03:08:13+00:00",
    "refNum": "",
    "b2bOrderUID": "",
    "b2bOrderNumber": "",
    "vendorID": "3",
    "noteID": "16",
    "shopID": "2",
    "Note": {
      "noteID": "16",
      "note": "",
      "isPublic": "false",
      "timeStamp": "2021-10-17T13:47:39+00:00"
    }
  }
}
```

#### Attributes

| orderedDate | (datetime) The date the order is placed with the vendor on. |
| --- | --- |
| receivedDate | (datetime) The date the order actually arrives on. |
| arrivalDate | (datetime) The date the order is expected to arrive on. |
| refNum | (string) A custom string to hold an external reference number. |
| shipInstructions | (integer) Instructions for the vendor or shipper about how to ship the order. |
| stockInstructions | (integer) Instructions for employees that are receiving the order and are stocking it in the store. |
| shipCost | (float) Shipping costs the vendor adds to the order. |
| otherCost | (float) Other costs the vendor adds to the order. Can be negative to be a discount. |
| discount | (float) A percentage discount that is applied to the unit cost of each item on the order. |
| shopID | (integer) The foreign key for the shop this purchase order is under. /API/V3/Account/{accountID}/Shop/{shopID} |
| refNum | (string) Reference number for the purchase order. |
| b2bOrderUID | (string) The unique identifier of the order in NuORDER. |
| b2bOrderNumber | (string) The order number in NuORDER. |
| Vendor | (object) The vendor this purchase order is for. /API/V3/Account/{accountID}/Vendor |
| Shop | (object) The shop this purchase order is under. /API/V3/Account/{accountID}/Shop |

To trigger a status change to “Check-In”, you can set a date in the `receivedDate` field.

Similarly, to trigger a status change to “Ordered”, you can set a date in the `orderedDate` field.

**Note:** In order for the status change to take effect, the order must contain at least one item.

---

---

### DELETE Delete an order

Archive an existing order by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Order/{orderID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Order/{orderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Order": {
    "orderID": "3",
    "orderedDate": "2021-04-04T07:00:00+00:00",
    "receivedDate": "2021-04-04T07:00:00+00:00",
    "shipInstructions": "This is a special ship instruction",
    "stockInstructions": "",
    "shipCost": "12",
    "otherCost": "12",
    "complete": "true",
    "archived": "true",
    "discount": "12",
    "totalDiscount": "1480987200",
    "totalQuantity": "1234156",
    "timeStamp": "2021-04-05T03:10:40+00:00",
    "refNum": "12",
    "b2bOrderUID": "",
    "b2bOrderNumber": "",
    "vendorID": "1",
    "noteID": "16",
    "shopID": "1",
    "Note": {
      "noteID": "16",
      "note": "",
      "isPublic": "false",
      "timeStamp": "2021-10-17T13:47:39+00:00"
    }
  }
}
```

#### Attributes

| orderID | (integer) The unique numerical ID for the order. Required Field |
| --- | --- |
