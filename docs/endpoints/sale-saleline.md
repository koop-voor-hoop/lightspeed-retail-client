---
title: Sale SaleLine
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Sale-SaleLine/
---

# Sale SaleLine

#### Description

A simplified API for creating, updating, modifying and deleting sale lines in a sale. The Sale.SaleLine API is designed to make adding sale lines to a sale (or modifying existing sale lines) simpler. `Note that the specified sale must not be completed or archived.`

An itemCode can be used in place of itemID in SaleLines. An itemCode matches the UPC or EAN code, or itemID of an item.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Request Cost

| GET/Read (single) | Default |
| --- | --- |
| GET/Read (query) | Default |
| POST/Create | 2 drips |
| PUT/Update | 2 drips |
| DELETE/Delete | 2 drips |

#### SaleLine Fields

| saleLineID | (integer) The unique numerical ID for the sale line. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
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
| isLayaway | (boolean) Whether this line is a Layaway. This field should not be set through the Sale or SaleLine endpoints; setting it will not reserve inventory. |
| isWorkorder | (boolean) Whether this line is a workorder line. This field should not be set through the Sale or SaleLine endpoints and cannot be used to create a workorder. |
| isSpecialOrder | (boolean) Whether this line is a special order line. This field should not be set through the Sale or SaleLine endpoints and cannot be used to create special orders. |
| sortorder | (string) The internal sort order for the line. Determines how the line will sort on the register. |
| onCompletedTrans | (integer) No longer used actively, but still may be some legacy dependancies. |
| displayableSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice) - discount. |
| displayableUnitPrice | (float) Reflect the current unit price that the customer is charged for after price rule and only price rule percentage discount (not fixed). |
| calcLineDiscount | (float) The line level discount for this line. |
| calcTransactionDiscount | (float) The transaction discount applied to this line. |
| calcTotal | (float) The total of this line. |
| calcSubtotal | (float) The subtotal of this line (unitQuantity * unitPrice). |
| calcTax1 | (float) The tax total for the first tax rate. |
| calcTax2 | (float) The tax total for the second tax rate. |
| taxClassID | (integer) The foreign ID for the line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign ID for the line specific discount. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign ID for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. /API/V3/Account/{accountID}/SaleLine/{parentSaleLineID} |
| priceRuleID | (integer) The foreign ID for the price rule that adjusted this lines unitPrice down. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. /API/V3/Account/{accountID}/Shop/{shopID} |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| saleID | (integer) The foreign ID for the the sale that this line is on. /API/V3/Account/{accountID}/Sale/{saleID} |
| TaxClass | (object) The line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass |
| Discount | (object) The line specific discount. /API/V3/Account/{accountID}/Discount |
| Note | (object) The notes associated with this line. Notes print on the receipt. |
| TaxCategory | (object) The TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory |
| SaleAccounts | (object) The Sale Accounts that apply to this line. /API/V3/Account/{accountID}/SaleLine |

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
| sourceID | (integer) Type of discount. 0 is price rule, 1 is loyalty, 2 is discount rule |
| timeStamp | (datetime) Date/time the record was last modified. |

#### SaleAccount Fields

| saleAccountID | (integer) The unique numeric identifier for the Sale Account. |
| --- | --- |
| creditAccountID | (integer) The unique numeric identifier for the Credit Account. |
| salePaymentID | (integer) The unique numeric identifier for the Sale Payment. |
| saleLineID | (integer) The unique numeric identifier for the Sale Line. |

#### Sortable Fields

- saleLineID
- timeStamp

#### See Also

- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)

---

### GET All sale salelines

Retrieve a list of all sale’s sale lines

> Definition

```
GET /API/V3/Account/{accountID}/Sale/{saleID}/SaleLine.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/SaleLine.json"
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
            }
        }
    ]
}
```

#### Attributes

| saleID | (integer) The foreign ID for the the sale that this line is on. Required Field |
| --- | --- |

---

### GET Single sale saleline

Retrieve a single sale’s saline

> Definition

```
GET /API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "1",
    "createTime": "2021-06-06T15:19:11+00:00",
    "timeStamp": "2021-06-06T15:19:18+00:00",
    "unitQuantity": "1",
    "unitPrice": "280",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "100",
    "fifoCost": "100",
    "tax": "true",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "280",
    "displayableUnitPrice": "280",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "317.1",
    "calcSubtotal": "280",
    "calcTax1": "23.1",
    "calcTax2": "14",
    "taxClassID": "1",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "1",
    "itemID": "6",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "1",
    "taxCategoryID": "0",
    "saleID": "2",
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
| saleID | (integer) The foreign ID for the the sale that this line is on. Required Field |

---

### POST Create a sale saleline

Create a sale’s saleline based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Sale/{saleID}/SaleLine.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": "1",
      "itemID": "1",
      "shopID": "1",
      "saleID": "152",
      "createTime": "2021-09-01"
     }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/SaleLine.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "150",
    "createTime": "2021-09-01T07:00:00+00:00",
    "timeStamp": "2021-09-01T07:00:00+00:00",
    "unitQuantity": "0",
    "unitPrice": "12",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "8",
    "fifoCost": "8",
    "tax": "false",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "0",
    "displayableUnitPrice": "12",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "0",
    "calcSubtotal": "0",
    "calcTax1": "0",
    "calcTax2": "0",
    "taxClassID": "1",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "1",
    "itemID": "1",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "1",
    "taxCategoryID": "0",
    "saleID": "22"
  }
}
```

#### Attributes

| saleID | (integer) The foreign ID for the the sale that this line is on. Required Field |
| --- | --- |
| createTime | (datetime) The date/time at which the sale line was first created. |
| timeStamp | (datetime) The date/time at which the sale line was last modified. |
| unitQuantity | (integer) The number of units being sold. Is negative for refunds. |
| unitPrice | (float) The unit price. May be adjusted by price rules. Can be negative for rebates or other uses, but not for refunds. Refunds are handled through negative unitQuantity |
| normalUnitPrice | (float) The normal unit price of the item, before price rules. |
| tax | (boolean) Whether the line is taxed. If false no tax will apply. If true tax will only apply if there is a tax in this line’s TaxClass. |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign ID for the line specific discount. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign ID for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. /API/V3/Account/{accountID}/SaleLine/{parentSaleLineID} |
| priceRuleID | (integer) The foreign ID for the price rule that adjusted this lines unitPrice down. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. /API/V3/Account/{accountID}/Shop/{shopID} |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| TaxClass | (object) The line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass |
| Discount | (object) The line specific discount. /API/V3/Account/{accountID}/Discount |
| Note | (object) The notes associated with this line. Notes print on the receipt. |
| TaxCategory | (object) The the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory |

---

### PUT Update a sale saleline

Update an existing sale’s saleline based on given parameters.

SpecialOrder and Layaway SaleLines can be added to sales using this endpoint. SpecialOrder SaleLines added to a sale via this endpoint will be marked as complete.

Updating the unitQuantity on a SpecialOrder SaleLine will update the unitQuantity on the related SpecialOrder.

> Definition

```
PUT /API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": "2",
      "itemID": "7",
      "shopID": "3",
      "createTime": "2021-09-01"
}
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "151",
    "createTime": "2021-09-01T07:00:00+00:00",
    "timeStamp": "2021-04-26T16:29:23+00:00",
    "unitQuantity": "0",
    "unitPrice": "189",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "100",
    "fifoCost": "100",
    "tax": "false",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "0",
    "displayableUnitPrice": "189",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "0",
    "calcSubtotal": "0",
    "calcTax1": "0",
    "calcTax2": "0",
    "taxClassID": "1",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "2",
    "itemID": "7",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "3",
    "taxCategoryID": "0",
    "saleID": "22"
  }
}
```

#### Attributes

| saleLineID | (integer) The unique numerical ID for the sale line. Required Field |
| --- | --- |
| saleID | (integer) The foreign ID for the the sale that this line is on. Required Field |
| createTime | (datetime) The date/time at which the sale line was first created. |
| timeStamp | (datetime) The date/time at which the sale line was last modified. |
| unitQuantity | (integer) The number of units being sold. Is negative for refunds. |
| unitPrice | (float) The unit price. May be adjusted by price rules. Can be negative for rebates or other uses, but not for refunds. Refunds are handled through negative unitQuantity |
| normalUnitPrice | (float) The normal unit price of the item, before price rules. |
| tax | (boolean) Whether the line is taxed. If false no tax will apply. If true tax will only apply if there is a tax in this line’s TaxClass. |
| customerID | (integer) The foreign ID for the customer if this is a layaway, special order, or workorder line. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign ID for the line specific discount. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign ID for the for the employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign ID for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| noteID | (integer) The foreign ID for the Note object associated with this line. Only one Note object can be attached to each line. Notes will print on the receipt. |
| parentSaleLineID | (integer) The foreign ID for the line this refund line originated from. Only for refund lines. Makes sure refunds of a line don’t exceed the original lines quantity. /API/V3/Account/{accountID}/SaleLine/{parentSaleLineID} |
| priceRuleID | (integer) The foreign ID for the price rule that adjusted this lines unitPrice down. |
| shopID | (integer) The foreign ID for the shop where this sale line was added. /API/V3/Account/{accountID}/Shop/{shopID} |
| taxCategoryID | (integer) The foreign ID for the the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| saleID | (integer) The foreign ID for the the sale that this line is on. /API/V3/Account/{accountID}/Sale/{saleID} |
| TaxClass | (object) The line’s tax class. Determines specific tax rates. /API/V3/Account/{accountID}/TaxClass |
| Discount | (object) The line specific discount. /API/V3/Account/{accountID}/Discount |
| Note | (object) The notes associated with this line. Notes print on the receipt. |
| TaxCategory | (object) The the TaxCategory that applies to this line. /API/V3/Account/{accountID}/TaxCategory |

---

### DELETE Delete a sale saleline

Permanently delete a sale’s saleline by its ID. You can’t delete a saleline from a completed or cancelled sale.

> Definition

```
DELETE /API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/SaleLine/{saleLineID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "SaleLine": {
    "saleLineID": "150",
    "createTime": "2021-04-26T15:54:48+00:00",
    "timeStamp": "2021-04-26T15:54:48+00:00",
    "unitQuantity": "0",
    "unitPrice": "12",
    "normalUnitPrice": "0",
    "discountAmount": "0",
    "discountPercent": "0",
    "avgCost": "8",
    "fifoCost": "8",
    "tax": "false",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "isLayaway": "false",
    "isWorkorder": "false",
    "isSpecialOrder": "false",
    "displayableSubtotal": "0",
    "displayableUnitPrice": "12",
    "calcLineDiscount": "0",
    "calcTransactionDiscount": "0",
    "calcTotal": "0",
    "calcSubtotal": "0",
    "calcTax1": "0",
    "calcTax2": "0",
    "taxClassID": "1",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "1",
    "itemID": "1",
    "noteID": "0",
    "parentSaleLineID": "0",
    "shopID": "1",
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
      "displayableSubtotal": "0",
      "ticketNumber": "220000000022",
      "calcDiscount": "0",
      "calcTotal": "0",
      "calcSubtotal": "0",
      "calcTaxable": "0",
      "calcNonTaxable": "0",
      "calcAvgCost": "0",
      "calcFIFOCost": "0",
      "calcTax1": "0",
      "calcTax2": "0",
      "calcPayments": "0",
      "total": "0",
      "totalDue": "0",
      "displayableTotal": "0",
      "balance": "0",
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

| saleLineID | (integer) The unique numerical ID for the sale line. Required Field |
| --- | --- |
| saleID | (integer) The foreign ID for the the sale that this line is on. Required Field |
