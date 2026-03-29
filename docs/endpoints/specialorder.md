---
title: SpecialOrder
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/SpecialOrder/
---

# SpecialOrder

#### Description

Tracks a special order for a customer (a special order is a customer requesting the shop stock an item they are out of stock on and the shop optionally taking a deposit and then ordering the product for the customer).

#### User Interface

- Inventory → Special Orders
- Register → New Sale → attach a customer to the sale → Register → Special Order add an item

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:special_orders | true |
| --- | --- |

#### Additional Relations

- SaleLine
- SaleLine.Item
- SaleLine.Item.Note
- SaleLine.Note
- SaleLine.Discount
- SaleLine.TaxClass
- SaleLine.TaxCategory
- OrderLine

#### SpecialOrder Fields

| specialOrderID | (integer) The unique numerical ID for the special order. /API/V3/Account/{accountID}/SpecialOrder/{specialOrderID} |
| --- | --- |
| unitQuantity | (integer) The quantity being special ordered. |
| contacted | (boolean) Whether the customer has been contacted to let them know the special order has arrived. |
| completed | (boolean) Whether this special order is completed. |
| customerID | (integer) The foreign ID for the customer that this special order is for. /API/V3/Account/{accountID}/Customer/{customerID} |
| shopID | (integer) The foreign ID for the shop where this special order was done at. /API/V3/Account/{accountID}/Shop/{shopID} |
| saleLineID | (integer) The foreign ID for the sale line where this special order was started from (and where it will be completed). /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
| orderLineID | (integer) The foreign ID for the purchase order line where this special order is being ordered from the supplier/vendor. /API/V3/Account/{accountID}/OrderLine/{orderLineID} |
| transferItemID | (integer) The foreign ID for the TransferItem in the case where this special order is fulfilled via a transfer between shops. /API/V3/Account/{accountID}/TransferItem/{transferItemID} |
| SaleLine | (object) The sale line where this special order was started from (and where it will be completed). /API/V3/Account/{accountID}/SaleLine |
| OrderLine | (object) The purchase order line where this special order is being ordered from the supplier/vendor. /API/V3/Account/{accountID}/OrderLine |

#### Note Fields

| noteID | (integer) The unique numerical ID for the note. |
| --- | --- |
| note | (string) The note text. |
| isPublic | (boolean) Whether this note should show on receipts. For example if you put a note on an Item and mark it public than it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified |

#### Sortable Fields

- specialOrderID
- timeStamp

#### See Also

- [SaleLine](https://developers.lightspeedhq.com/retail/endpoints/SaleLine/#saleline-fields)
- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)
- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discount-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)
- [OrderLine](https://developers.lightspeedhq.com/retail/endpoints/OrderLine/#orderline-fields)

---

### GET All special orders

Retrieve a list of all special orders

> Definition

```
GET /API/V3/Account/{accountID}/SpecialOrder.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SpecialOrder.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "SpecialOrder": [
    {
      "specialOrderID": "1",
      "unitQuantity": "1",
      "contacted": "false",
      "completed": "true",
      "timeStamp": "2021-04-21T15:10:09+00:00",
      "status": "Ready For Pickup",
      "customerID": "8",
      "shopID": "1",
      "saleLineID": "142",
      "orderLineID": "0",
      "transferItemID": "0"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single special order

Retrieve a single special order by its ad.

> Definition

```
GET /API/V3/Account/{accountID}/SpecialOrder/{specialOrderID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SpecialOrder/{specialOrderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SpecialOrder": {
    "specialOrderID": "2",
    "unitQuantity": "1",
    "contacted": "false",
    "completed": "false",
    "timeStamp": "2021-04-21T15:09:34+00:00",
    "status": "Not Ordered",
    "customerID": "2",
    "shopID": "1",
    "saleLineID": "143",
    "orderLineID": "0",
    "transferItemID": "0"
  }
}
```

#### Attributes

| specialOrderID | (integer) The unique numerical ID for the special order. Required Field |
| --- | --- |
