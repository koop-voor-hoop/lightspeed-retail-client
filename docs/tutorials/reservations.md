---
title: Reservations
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/reservations/
---

# Reservations

Reservations allow items to be put on hold for a customer. Reservations are [SaleLines](https://developers.lightspeedhq.com/retail/endpoints/SaleLine) that are initially linked to a customer rather than a sale. The reserved units are only considered to be sold goods when the reserved sale lines are added to a [Sale](https://developers.lightspeedhq.com/retail/endpoints/Sale) and [Payment](https://developers.lightspeedhq.com/retail/endpoints/SalePayment/#salepayment-fields) is applied.

While upfront payment is not required for reservations, advanced payment can be applied to the customer’s [credit account](https://developers.lightspeedhq.com/retail/tutorials/creditaccounts). This deposit can be made in a separate transaction, and the credit can then be applied towards the final purchase when the reservation is fulfilled.

## Types of Reservations

Reservations come in three main types, each serving a different purpose:

**Layaways**: Layaways set units aside for a customer, typically for a future purchase. This can be helpful for confirming availability before finalizing online orders, simulating rentals, or holding items for pickup. When a layaway is created or edited, the requested quantity of units is automatically **reserved from available inventory**.

**Special Orders**: Special orders are for items being back-ordered from a vendor for a specific customer. This allows merchants to sell items even if they are not currently in stock. When a special order is created, **no units are reserved right away**, even if some are on hand. The special order can then be linked to a purchase order or transfer, and units will be automatically reserved as they are received.

**Work Orders**: Items added to a work order are automatically reserved for the duration of that work order. By default, they behave like layaways. However, if a work order line is marked as a special order, it will behave like a special order instead. The key difference is that special order saleLines on work orders are fulfilled and paid for as part of the entire work order, rather than as individual sales.

This tutorial is focused on **layaway and special order workflows**. Work Order reservations cannot be edited directly through the sale line, but can be edited through the [WorkorderItem](https://developers.lightspeedhq.com/retail/endpoints/Workorder-WorkorderItem) endpoint.

## Creating a Reservation

> Sample Request

```
POST https://api.lightspeedapp.com/API/V3/Account/{AccountID}/SaleLine.json?load_relations=["InventorySales"]

{
    "customerID": "8",
    "employeeID": "2",
    "isLayaway": "true",
    "itemID": "12",
    "shopID": "1",
    "tax": "true",
    "unitQuantity": "3"
}
```

> Sample Response

```
{
    "@attributes": {
        "count": "1"
    },
    "SaleLine": {
        "saleLineID": "1",
        "createTime": "2025-07-05T15:27:31+00:00",
        "timeStamp": "2025-07-05T18:27:31+00:00",
        "unitQuantity": "3",
        "unitPrice": "200",
        "normalUnitPrice": "0",
        "discountAmount": "0",
        "discountPercent": "0",
        "avgCost": "6",
        "fifoCost": "7",
        "tax": "true",
        "tax1Rate": "0",
        "tax2Rate": "0",
        "isLayaway": "true",
        "isWorkorder": "false",
        "isSpecialOrder": "false",
        "displayableSubtotal": "600",
        "displayableUnitPrice": "200",
        "lineType": "",
        "calcLineDiscount": "30",
        "calcTransactionDiscount": "0",
        "calcTotal": "617.025",
        "calcSubtotal": "600",
        "calcTax1": "47.025",
        "calcTax2": "0",
        "taxClassID": "0",
        "customerID": "1",
        "discountID": "1",
        "employeeID": "2",
        "itemID": "12",
        "noteID": "0",
        "parentSaleLineID": "0",
        "shopID": "1",
        "taxCategoryID": "0",
        "saleID": "0",
        "itemFeeID": "0",
        "InventorySales": {
            "InventorySale": [
                {
                    "inventorySaleID": "1",
                    "quantity": "2",
                    "createTime": "2025-01-01T00:00:00+00:00",
                    "inventoryID": "312284"
                },
                {
                    "inventorySaleID": "2",
                    "quantity": "1",
                    "createTime": "2025-01-01T00:00:00+00:00",
                    "inventoryID": "312964"
                }
            ]
        }
    }
}
```

To create a reservation, a POST request is made to the SaleLine endpoint specifying the `itemID`, a `customerID`, a `shopID`, a `unitQuantity`, and setting either the `isLayaway` or `isSpecialOrder` property to `true`. Any other SaleLine fields may be set as well (e.g. `unitPrice`, `taxClassID`, etc.). A `SaleID` is not initially required.

It is strongly recommended to load the `InventorySales` relation when interacting with reservation sale lines, as this relation will indicate the number of units that are reserved from each inventory lot for the sale line. The total quantity reserved for the sale line is the sum of all `InventorySales.quantity` values. This may be less than the desired `unitQuantity` if insufficient inventory is available for a layaway, or if a special order has not been fully received.

When creating layaways, if it is necessary to ensure that the desired quantity is fully available to be reserved, an optional `requireFullReservation` parameter can be used. If this parameter is set to `true`, and insufficient inventory is available, the request will fail and no sale line will be created. This is particularly useful for e-commerce scenarios where it is important to ensure that the requested quantity is available before allowing a customer to complete their order. **Note:** *This option is only supported for layaways, and will be ignored for special orders.*

It is possible to create layaways and special orders for non-inventory items, though no units will be reserved, since inventory is not tracked for these items.

## Editing a Reservation

> Sample Request

```
PUT https://api.lightspeedapp.com/API/V3/Account/{AccountID}/SaleLine/{saleLineID}.json?load_relations=[\"InventorySales\"]

{
    "unitQuantity": "5",
}
```

The same SaleLine endpoint can be used to edit an existing reservation using the `PUT` method. When changing the `unitQuantity` of a reservation, the reserved quantity will be automatically updated to match the new quantity. If the new quantity is greater than the current reserved quantity, additional units will be reserved as needed. If the new quantity is less than the current reserved quantity, excess units will be restored to inventory.

It is also possible to update the `customerID` or `shopID` of a reservation, but this will result in all reserved units being restored to inventory and then re-reserved for the new customer and shop. If the line is a special order, it will be detached from any associated purchase order or transfer.

## Cancelling a Reservation

> Sample Request

```
DELETE https://api.lightspeedapp.com/API/V3/Account/{AccountID}/SaleLine/{saleLineID}.json
```

To cancel a reservation, a `DELETE` request can be made to the SaleLine endpoint with the `saleLineID` of the reservation. This will restore all reserved units to inventory and remove the sale line from the system. If the reservation is a special order, it will also be detached from any associated purchase order or transfer.

## Fulfilling a Reservation

> Sample Request (SaleLine Endpoint)

```
PUT https://api.lightspeedapp.com/API/V3/Account/{AccountID}/SaleLine/{saleLineID}.json

{
    "saleID": "{saleID}}",
}
```

> Sample Request (Sale Endpoint)

```
POST https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json?load_relations=["SaleLines","SalePayments"]

{
    "shopID": "1",
    "registerID": "1",
    "employeeID": "2",
    "customerID": "8",
    "SaleLines": {
        "SaleLine": [
            {
                "saleLineID": "{saleLineID}",
            }
        ]
    },
    "SalePayments": {
        "SalePayment": [
            {
                "amount": "600.03",
                "paymentTypeID": "1"
            }
        ]
    },
    "completed": "true",
}
```

To fulfill a reservation, it must be attached to a sale. There are two ways to attach a reservation sale line to a sale: by updating the `saleID` of the reservation sale line to the ID of an existing sale, or by creating a new sale with one or more reservation `saleLineID`s included in the `SaleLines` relation.

Reservation sale lines can only be attached to sales associated with the same customer

Once the reservation line is attached to a sale, it can be paid for and completed like any other sale. Refer to the [sales tutorial](https://developers.lightspeedhq.com/retail/tutorials/sales) for more information on completing sales.

When the sale is paid and completed, the reserved units will be removed from inventory. If the reserved quantity attached to the sale line is less than the desired `unitQuantity`, available inventory will be removed or negative inventory will be created to satisfy the remainder at the time that the sale is completed.
