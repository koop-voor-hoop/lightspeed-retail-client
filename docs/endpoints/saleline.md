---
title: SaleLine
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/SaleLine/
---

# SaleLine

#### Description

An individual line/charge on a Sale. Can be tied to an Item or can just be a miscellaneous line with a note and or amount/quantity.

SaleLines can also be used to represent an “item fee”, which carries an extra monetary charge, associated with an item by category.

#### User Interface

- Register → New Sale → add an Item or Misc. charge.
- Reports → Point of Sale → Lines etc.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |

#### Request Cost

| GET/Read (single) | Default |
| --- | --- |
| GET/Read (query) | Default |
| POST/Create | 2 drips |
| PUT/Update | 2 drips |
| DELETE/Delete | 2 drips |

#### Additional Relations

- Discount
- TaxClass
- TaxCategory
- Note
- Item
- InventorySales

#### SaleLine Fields

| saleLineID | (integer) The unique numerical ID for the sale line. |
| --- | --- |
| createTime | (datetime) The date/time at which the sale line was first created. |
| timeStamp | (datetime) The date/time at which the sale line was last modified. |
| unitQuantity | (integer) The number of units being sold. Is negative for refunds. |
| unitPrice | (float) The unit price. May be adjusted by price rules. Can be negative for rebates or other uses, but not for refunds. Refunds are handled through negative unitQuantity |
| normalUnitPrice | (float) The normal unit price of the item, before price rules. |
| discountAmount | (float) The dollar amount discount. Can have dollar amount or percentage amount but not both. |
| discountPercent | (float) The percentage discount. Can have dollar amount or percentage amount but not both. |
| avgCost | (float) The current average unit cost of the product being sold. |
| fifoCost | (float) The FIFO unit cost of the product being sold. |
| tax | (boolean) Whether the line is taxed. If false no tax will apply. If true tax will only apply if there is a tax in this line’s TaxClass. |
| tax1Rate | (float) The first tax rate for this line. Customized by the TaxClass and the TaxCategory. |
| tax2Rate | (float) The second tax rate for this line (if any). Customized by the TaxClass and the TaxCategory. |
| isLayaway | (boolean) Whether this line is a Layaway. This field can only be set through SaleLine endpoint, or through the application. |
| isWorkorder | (boolean) Whether this line is a workorder line. This field should not be set through the Sale or SaleLine endpoints and cannot be used to create a workorder. |
| isSpecialOrder | (boolean) Whether this line is a special order line. This field can only be set through SaleLine endpoint or through the application, and will create a SpecialOrder record. |
| displayableSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice) - discount. |
| displayableUnitPrice | (float) Reflect the current unit price that the customer is charged for after price rule and only price rule percentage discount (not fixed). |
| calcLineDiscount | (float) The line level discount for this line. |
| calcTransactionDiscount | (float) The transaction discount applied to this line. |
| calcTotal | (float) The total of this line. |
| calcSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice). |
| calcTax1 | (float) The tax total for the first tax rate. |
| calcTax2 | (float) The tax total for the second tax rate. |
| taxClassID | (integer) The foreign ID for the line’s tax class. Determines specific tax rates. |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. |
| discountID | (integer) The foreign ID for the line specific discount. |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. |
| itemID | (integer) The foreign ID for the item this line is a charge for. |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. |
| saleID | (integer) The foreign ID for the sale that this line is on. |
| itemFeeID | (integer) The foreign ID for the item fee that this line represents. |
| lineType | (string) A descriptor for what the line represents. E.g. item_fee, item_fee_refund. Currently not used to differentiate between layaway, special order, or workorder lines. |
| requireFullReservation | (boolean) Optional request payload flag which will cause the request to fail if insufficient inventory quantity is available to be reserved for the requested unitQuantity. Only applies to layaway lines. Defaults to false. |
| TaxClass | (object) The line’s tax class. Determines specific tax rates. |
| Discount | (object) The line specific discount. |
| Item | (object) The item this line is a charge for. |
| Note | (object) The notes associated with this line. Notes print on the receipt. |
| TaxCategory | (object) The the TaxCategory that applies to this line. |
| SaleAccounts | (object) The Sale Accounts that apply to this line. /API/V3/Account/{accountID}/SaleLine |
| ItemFee | (object) The ItemFee that this line represents. |

#### Note Fields

| noteID | (integer) The unique numerical ID for the note. |
| --- | --- |
| note | (string) The note text. |
| isPublic | (boolean) Whether this note should show on receipts. For example if you put a note on an Item and mark it public than it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified |

#### Discount Fields

| discountID | (integer) The unique numeric identifier for the discount. |
| --- | --- |
| name | (string) The description/name of the discount. |
| discountAmount | (float) The dollar amount of the discount. Discounts can be either dollar amounts or percentages (but not both). Must be > 0.00. |
| discountPercent | (float) The percentage discount amount. Discounts can be either dollar amounts or percentages (but not both). Must be <=1.00 (100%). |
| requireCustomer | (boolean) Whether this discount requires a customer to be attached to the sale before it can be applied. |
| archived | (boolean) Whether this discount is archived. |
| sourceID | (integer) Type of discount. 0 is price rule, 1 is loyalty, 2 is discount rule. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### SaleAccount Fields

| saleAccountID | (integer) The unique numeric identifier for the Sale Account. |
| --- | --- |
| creditAccountID | (integer) The unique numeric identifier for the Credit Account. |
| salePaymentID | (integer) The unique numeric identifier for the Sale Payment. |
| saleLineID | (integer) The unique numeric identifier for the Sale Line. |

#### InventorySale Fields

InventorySale objects represent allocations of inventory to a sale line. If the sale line is an open layaway, special order, or workorder line, each InventorySale object indicates how many units have been reserved from a particular inventory lot. If the sale line is sold, each InventorySale object will indicate the quantity sold from a particular inventory lot.

| inventorySaleID | (integer) The unique numeric identifier for the inventory allocation. |
| --- | --- |
| quantity | (integer) The number of units reserved or sold. |
| createTime | (datetime) The date/time the Inventory Sale was created. |
| inventoryID | (integer) The foreign key to the Inventory lot object that the inventory was pulled from. |

#### Sortable Fields

- saleLineID
- timeStamp
- saleID

#### See Also

- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/#taxcategoryclass-fields)
- [SpecialOrder](https://developers.lightspeedhq.com/retail/endpoints/SpecialOrder/#specialorder-fields)

### GET All sale lines

Retrieve a list of all sale lines in the account

> Definition

```
GET /API/V3/Account/{accountID}/SaleLine.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleLine.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "SaleLine": [
        {
            "saleLineID": "4",
            "createTime": "2021-05-20T14:10:08+00:00",
            "timeStamp": "2021-05-20T14:14:10+00:00",
            "unitQuantity": "2",
            "unitPrice": "45",
            "normalUnitPrice": "0",
            "discountAmount": "0",
            "discountPercent": "0.5",
            "avgCost": "15",
            "fifoCost": "15",
            "tax": "true",
            "tax1Rate": "0.05",
            "tax2Rate": "0.09975",
            "isLayaway": "false",
            "isWorkorder": "false",
            "isSpecialOrder": "false",
            "displayableSubtotal": "45",
            "displayableUnitPrice": "45",
            "calcLineDiscount": "45",
            "calcTransactionDiscount": "0",
            "calcTotal": "51.73875",
            "calcSubtotal": "90",
            "calcTax1": "2.25",
            "calcTax2": "4.48875",
            "taxClassID": "1",
            "customerID": "0",
            "discountID": "2",
            "employeeID": "1",
            "itemID": "3",
            "noteID": "0",
            "parentSaleLineID": "0",
            "shopID": "1",
            "taxCategoryID": "1",
            "saleID": "5",
            "itemFeeID": "3",
            "TaxClass": {
                "taxClassID": "1",
                "name": "Item",
                "timeStamp": "2021-05-10T15:57:26+00:00"
            },
            "Discount": {
                "discountID": "2",
                "name": "discountrule1",
                "discountAmount": "0",
                "discountPercent": "0.5",
                "requireCustomer": "false",
                "archived": "false",
                "sourceID": "2",
                "createTime": "2021-05-20T14:07:18+00:00",
                "timeStamp": "2021-05-20T14:09:58+00:00"
            },
            "TaxCategory": {
                "taxCategoryID": "1",
                "isTaxInclusive": "false",
                "tax1Name": "Sales Tax",
                "tax2Name": "",
                "tax1Rate": "0.05",
                "tax2Rate": "0.09975",
                "timeStamp": "2021-05-10T15:59:39+00:00"
            },
            "SalesAccounts": {
              "SaleAccount": {
                "saleAccountID": "1",
                "creditAccountID": "1",
                "salePaymentID": "1",
                "saleLineID": "1"
              }
            },
            "ItemFee": {
              "itemFeeID": "3",
              "name": "Environmental Fee",
              "calculationMethod": "fixed_amount",
              "feeValue": "10.50",
              "taxable": "false",
              "discountable": "false",
              "nonRefundable": "false",
              "archived": "false",
              "createTime": "2024-02-07T20:36:15+00:00",
              "timestamp": "2024-02-21T18:37:49+00:00"
            }
        },
        {
            "saleLineID": "6",
            "createTime": "2021-05-20T14:11:14+00:00",
            "timeStamp": "2021-05-20T14:14:10+00:00",
            "unitQuantity": "1",
            "unitPrice": "10",
            "normalUnitPrice": "23",
            "discountAmount": "0",
            "discountPercent": "0",
            "avgCost": "0",
            "fifoCost": "0",
            "tax": "true",
            "tax1Rate": "0.05",
            "tax2Rate": "0.09975",
            "isLayaway": "false",
            "isWorkorder": "false",
            "isSpecialOrder": "false",
            "displayableSubtotal": "10",
            "displayableUnitPrice": "10",
            "calcLineDiscount": "0",
            "calcTransactionDiscount": "0",
            "calcTotal": "11.4975",
            "calcSubtotal": "10",
            "calcTax1": "0.5",
            "calcTax2": "0.9975",
            "taxClassID": "1",
            "customerID": "0",
            "discountID": "0",
            "employeeID": "1",
            "itemID": "27",
            "noteID": "0",
            "parentSaleLineID": "0",
            "shopID": "1",
            "taxCategoryID": "1",
            "saleID": "5",
            "itemFeeID": "6",
            "TaxClass": {
                "taxClassID": "1",
                "name": "Item",
                "timeStamp": "2021-05-10T15:57:26+00:00"
            },
            "TaxCategory": {
                "taxCategoryID": "1",
                "isTaxInclusive": "false",
                "tax1Name": "Sales Tax",
                "tax2Name": "",
                "tax1Rate": "0.05",
                "tax2Rate": "0.09975",
                "timeStamp": "2021-05-10T15:59:39+00:00"
            },
            "SalesAccounts": {
              "SaleAccount": {
                "saleAccountID": "1",
                "creditAccountID": "1",
                "salePaymentID": "1",
                "saleLineID": "1"
              }
            },
            "ItemFee": {
              "itemFeeID": "6",
              "name": "Bottle Deposit",
              "calculationMethod": "fixed_amount",
              "feeValue": "0.50",
              "taxable": "false",
              "discountable": "false",
              "nonRefundable": "false",
              "archived": "false",
              "createTime": "2024-02-07T20:36:15+00:00",
              "timestamp": "2024-02-21T18:37:49+00:00"
            }
        }
    ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single sale line

Retrieve an existing sale line by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "100",
    "createTime": "2021-12-01T14:34:59+00:00",
    "timeStamp": "2021-12-01T14:34:59+00:00",
    "unitQuantity": "2",
    "unitPrice": "34.95",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0.05",
    "avgCost": "0",
    "fifoCost": "0",
    "tax": "true",
    "tax1Rate": "0.13",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "66.4",
    "displayableUnitPrice": "34.95",
    "calcLineDiscount": "3.5",
    "calcTransactionDiscount": "0",
    "calcTotal": "75.032",
    "calcSubtotal": "69.9",
    "calcTax1": "8.632",
    "calcTax2": "0",
    "taxClassID": "1",
    "customerID": "0",
    "discountID": "3",
    "employeeID": "1",
    "itemID": "38",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "saleID": "120",
    "SalesAccounts": {
      "SaleAccount": {
        "saleAccountID": "1",
        "creditAccountID": "1",
        "salePaymentID": "1",
        "saleLineID": "1"
      }
    }
  }
}
```

#### Attributes

| saleLineID | (integer) The unique numerical ID for the sale line. Required Field |
| --- | --- |

---

### POST Create a sale line

Create a sale line based on given parameters. Requires `isSpecialOrder` or `isLayaway` to be set to `true`.

Updating a sale line with `isSpecialOrder` parameter set to `true` will create a Special Order record.

> Definition

```
POST /API/V3/Account/{accountID}/SaleLine.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": "1",
      "shopID": "1",
      "itemID": "1",
      "isSpecialOrder": "true",
      "unitQuantity": "1",
      "customerID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleLine.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "SaleLine": {
        "saleLineID": "34",
        "createTime": "2024-02-26T21:55:13+00:00",
        "timeStamp": "2024-02-26T21:55:13+00:00",
        "unitQuantity": "1",
        "unitPrice": "24.5",
        "normalUnitPrice": "0",
        "discountAmount": "0",
        "discountPercent": "0",
        "avgCost": "0",
        "fifoCost": "0",
        "tax": "true",
        "tax1Rate": "0",
        "tax2Rate": "0",
        "isLayaway": "false",
        "isWorkorder": "false",
        "isSpecialOrder": "true",
        "displayableSubtotal": "24.5",
        "displayableUnitPrice": "24.5",
        "lineType": "",
        "calcLineDiscount": "0",
        "calcTransactionDiscount": "0",
        "calcTotal": "26.52125",
        "calcSubtotal": "24.5",
        "calcTax1": "2.02125",
        "calcTax2": "0",
        "taxClassID": "1",
        "customerID": "1",
        "discountID": "0",
        "employeeID": "1",
        "itemID": "1",
        "noteID": "0",
        "parentSaleLineID": "0",
        "shopID": "1",
        "taxCategoryID": "0",
        "saleID": "0",
        "itemFeeID": "0",
        "SpecialOrder": {
            "SpecialOrder": {
                "specialOrderID": "10",
                "unitQuantity": "1",
                "contacted": "false",
                "completed": "false",
                "timeStamp": "2024-02-26T21:55:13+00:00",
                "status": "Not Ordered",
                "customerID": "1",
                "shopID": "1",
                "saleLineID": "34",
                "orderLineID": "0",
                "transferItemID": "0"
            }
        }
    }
}
```

#### Attributes

| createTime | (datetime) The date/time at which the sale line was first created. |
| --- | --- |
| timeStamp | (datetime) The date/time at which the sale line was last modified. |
| unitQuantity | (integer) The number of units being sold. Is negative for refunds. Must be positive for create action. Required Field |
| unitPrice | (float) The unit price. May be adjusted by price rules. Can be negative for rebates or other uses, but not for refunds. Refunds are handled through negative unitQuantity. |
| normalUnitPrice | (float) The normal unit price of the item, before price rules. |
| discountAmount | (float) The dollar amount discount. Can have dollar amount or percentage amount but not both. |
| discountPercent | (float) The percentage discount. Can have dollar amount or percentage amount but not both. |
| avgCost | (float) The current average item cost of the product being sold. |
| fifoCost | (float) The FIFO item cost of the product being sold. |
| tax | (boolean) Whether the line is taxed. If false no tax will apply. If true tax will only apply if there is a tax in this line’s TaxClass. |
| tax1Rate | (float) The first tax rate for this line. Customized by the TaxClass and the TaxCategory. |
| tax2Rate | (float) The second tax rate for this line (if any). Customized by the TaxClass and the TaxCategory. |
| isLayaway | (boolean) Whether this line is a Layaway. Required to have isLayaway or isSpecialOrder set to true. Required Field |
| isWorkorder | (boolean) Whether this line is a workorder line. This field should not be set through the Sale or SaleLine endpoints and cannot be used to create a workorder. |
| isSpecialOrder | (boolean) Whether this line is a special order line. Required to have isLayaway or isSpecialOrder set to true. Required Field |
| displayableSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice) - discount. |
| displayableUnitPrice | (float) Reflects the current unit price charged. Will show the price after any applicable price rule, but only for percentage discounts. Fixed price discounts will not be reflected here. |
| calcLineDiscount | (float) The line level discount for this line. |
| calcTransactionDiscount | (float) The transaction discount applied to this line. |
| calcTotal | (float) The total of this line. |
| calcSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice). |
| calcTax1 | (float) The tax total for the first tax rate. |
| calcTax2 | (float) The tax total for the second tax rate. |
| taxClassID | (integer) The foreign ID for the line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass/{taxclassID} |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. /API/V3/Account/{accountID}/Customer/{customerID}  Required Field |
| discountID | (integer) The foreign ID for the line specific discount. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} Required Field |
| itemID | (integer) The foreign ID for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} Required Field |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. /API/V3/Account/{accountID}/Note/{noteID} |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. /API/V3/Account/{accountID}/Shop/{shopID} Required Field |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| saleID | (integer) The foreign ID for the the sale that this line is on. This will be 0 for SpecialOrder and Layaway sale lines, and cannot be set on create with this endpoint. /API/V3/Account/{accountID}/Sale/{saleID} |
| SpecialOrder | (object) The Special Order that applies to this line. /API/V3/Account/{accountID}/SpecialOrder |
| Note | (object) The note associated with this sale line. |

### PUT Update a sale line

Update an existing sale line based on given parameters. Can be used to create Layaway and Special Order sale lines from existing sales.

Updating a sale line with `isSpecialOrder` parameter set to `true` will create a Special Order record.

> Definition

```
PUT /API/V3/Account/{accountID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "employeeID": "3",
        "shopID": "3",
        "saleID": "22",
        "unitPrice":"12",
        "createTime": "2021-01-01",
        "timeStamp": "2021-04-01"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "11",
    "createTime": "2021-01-01T08:00:00+00:00",
    "timeStamp": "2021-04-19T18:13:42+00:00",
    "unitQuantity": "1",
    "unitPrice": "12",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "0",
    "fifoCost": "0",
    "tax": "false",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "12",
    "displayableUnitPrice": "12",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "12",
    "calcSubtotal": "12",
    "calcTax1": "0",
    "calcTax2": "0",
    "taxClassID": "0",
    "customerID": "1",
    "discountID": "0",
    "employeeID": "3",
    "itemID": "2",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "3",
    "taxCategoryID": "0",
    "saleID": "22",
    "Sale": {
      "saleID": "22",
      "timeStamp": "2021-06-07T13:21:42+00:00",
      "discountPercent": "0",
      "completed": "false",
      "archived": "false",
      "voided": "true",
      "enablePromotions": "true",
      "isTaxInclusive": "false",
      "referenceNumber": "",
      "referenceNumberSource": "",
      "tax1Rate": "0",
      "tax2Rate": "0",
      "change": "0",
      "receiptPreference": "email",
      "displayableSubtotal": "12",
      "ticketNumber": "220000000022",
      "calcDiscount": "0",
      "calcTotal": "12",
      "calcSubtotal": "12",
      "calcTaxable": "0",
      "calcNonTaxable": "12",
      "calcAvgCost": "0",
      "calcFIFOCost": "0",
      "calcTax1": "0",
      "calcTax2": "0",
      "calcPayments": "0",
      "total": "12",
      "totalDue": "12",
      "displayableTotal": "12",
      "balance": "12",
      "customerID": "0",
      "discountID": "0",
      "employeeID": "1",
      "quoteID": "0",
      "registerID": "1",
      "shipToID": "0",
      "shopID": "1",
      "taxCategoryID": "0",
      "taxTotal": "0"
    }
  }
}
```

#### Attributes

| createTime | (datetime) The date/time at which the sale line was first created. |
| --- | --- |
| timeStamp | (datetime) The date/time at which the sale line was last modified. |
| unitQuantity | (integer) The number of units being sold. Is negative for refunds. |
| unitPrice | (float) The unit price. May be adjusted by price rules. Can be negative for rebates or other uses, but not for refunds. Refunds are handled through negative unitQuantity |
| normalUnitPrice | (float) The normal unit price of the item, before price rules. |
| tax | (boolean) Whether the line is taxed. If false no tax will apply. If true tax will only apply if there is a tax in this line’s TaxClass. |
| tax1Rate | (float) The first tax rate for this line. Customized by the TaxClass and the TaxCategory. |
| tax2Rate | (float) The second tax rate for this line (if any). Customized by the TaxClass and the TaxCategory. |
| isLayaway | (boolean) Whether this line is a Layaway. If set to true on update, relation to Sale will be removed. |
| isWorkorder | (boolean) Whether this line is a workorder line. This field should not be set through the Sale or SaleLine endpoints and cannot be used to create a workorder. |
| isSpecialOrder | (boolean) Whether this line is a special order line. If set to true on update, relation to Sale will be removed, and a Special Order will be created. |
| displayableSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice) - discount. |
| displayableUnitPrice | (float) Reflect the current unit price that the customer is charged for after price rule and only price rule percentage discount (not fixed). |
| calcLineDiscount | (float) The line level discount for this line. |
| calcTransactionDiscount | (float) The transaction discount applied to this line. |
| calcTotal | (float) The total of this line. |
| calcSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice). |
| calcTax1 | (float) The tax total for the first tax rate. |
| calcTax2 | (float) The tax total for the second tax rate. |
| taxClassID | (integer) The foreign ID for the line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass/{taxclassID} |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. Required if isLayaway or isSpecialOrder is set to true. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign ID for the line specific discount. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign ID for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. /API/V3/Account/{accountID}/Note/{noteID} |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. /API/V3/Account/{accountID}/Shop/{shopID} |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| saleID | (integer) The foreign ID for the the sale that this line is on. This will be set to 0 for if isLayaway or isSpecialOrder is set to true on update. To associate an existing saleline with a sale, see Sale/SaleLine. /API/V3/Account/{accountID}/Sale/{saleID} |

---

### DELETE Delete a sale line

Permanently delete a saleline by its ID. You can’t delete a saleline from a completed or cancelled sale. Special Order sale lines cannot be deleted if they are associated with an [Inventory Transfer](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/) or [Order](https://developers.lightspeedhq.com/retail/endpoints/Order).

> Definition

```
DELETE /API/V3/Account/{accountID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "11",
    "createTime": "2021-06-09T20:30:57+00:00",
    "timeStamp": "2021-04-19T18:13:42+00:00",
    "unitQuantity": "1",
    "unitPrice": "12",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "0",
    "fifoCost": "0",
    "tax": "false",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "12",
    "displayableUnitPrice": "12",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "12",
    "calcSubtotal": "12",
    "calcTax1": "0",
    "calcTax2": "0",
    "taxClassID": "0",
    "customerID": "1",
    "discountID": "0",
    "employeeID": "3",
    "itemID": "2",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "3",
    "taxCategoryID": "0",
    "saleID": "22",
    "Sale": {
      "saleID": "22",
      "timeStamp": "2021-06-07T13:21:42+00:00",
      "discountPercent": "0",
      "completed": "false",
      "archived": "false",
      "voided": "true",
      "enablePromotions": "true",
      "isTaxInclusive": "false",
      "referenceNumber": "",
      "referenceNumberSource": "",
      "tax1Rate": "0",
      "tax2Rate": "0",
      "change": "0",
      "receiptPreference": "email",
      "displayableSubtotal": "12",
      "ticketNumber": "220000000022",
      "calcDiscount": "0",
      "calcTotal": "12",
      "calcSubtotal": "12",
      "calcTaxable": "0",
      "calcNonTaxable": "12",
      "calcAvgCost": "0",
      "calcFIFOCost": "0",
      "calcTax1": "0",
      "calcTax2": "0",
      "calcPayments": "0",
      "total": "12",
      "totalDue": "12",
      "displayableTotal": "12",
      "balance": "12",
      "customerID": "0",
      "discountID": "0",
      "employeeID": "1",
      "quoteID": "0",
      "registerID": "1",
      "shipToID": "0",
      "shopID": "1",
      "taxCategoryID": "0",
      "SalePayments": "",
      "taxTotal": "0"
    }
  }
}
```

#### Attributes

| saleLineID | (integer) The unique numerical ID for the sale line. Required Field |
| --- | --- |
