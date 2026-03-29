---
title: Sale
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Sale/
---

# Sale

#### Description

The sale history of the account. A completed sale will have SaleLines which create a total for the sale and payments with a sum equal to that total. Completed Sales have the field ‘completed’ set to true and the ‘completedTime’ field set to the time the sale was completed.

In SaleLines, an itemCode can be used in place of itemID. An itemCode matches the UPC or EAN code, or itemID of an item.

SaleLines can also be used to represent an “item fee”, which carries an extra monetary charge, associated with an item.

#### User Interface

- Register → New Sale
- Reports → Point of Sale → Totals etc.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

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
| DELETE/Archive | 2 drips |

If `complete = true` is included the payload, the request will cost an additional 3 drips.

#### Additional Relations

- SaleLines
- SaleLines.Discount
- SaleLines.TaxClass
- SaleLines.Note
- SaleLines.Item
- SaleLines.InventorySales
- SaleNotes
- SalePayments
- SalePayments.PaymentType
- SalePayments.CCCharge
- SalePayments.SaleAccounts
- SalePayments.Signatures
- ShipTo
- ShipTo.Contact
- Customer
- Customer.Contact
- Discount
- TaxCategory
- TaxCategory.TaxCategoryClasses
- Quote

#### Sale Fields

| saleID | (integer) The unique numerical ID for the sale. /API/V3/Account/{accountID}/Sale/{saleID} |
| --- | --- |
| timeStamp | (datetime) legacy the last date/time this sale was modified, or if complete the date/time at which it was completed. |
| discountPercent | (float) This field is deprecated. |
| completed | (boolean) Whether this sale is completed. If the sale is completed the inventory will have been removed and the payments will be equal to the total. |
| archived | (boolean) Whether this sale is archived. |
| voided | (boolean) Whether the sale has been voided. Voided sales do not count towards totals, or payments received. All inventory is restocked etc. |
| enablePromotions | (boolean) Run any applicable Promotions on all SaleLines added to this sale. This field may only be set on creation and cannot be changed thereafter. |
| createTime | (datetime) The date/time that the sale was created. Read-only. |
| updatetime | (datetime) The last date/time that the sale was updated. Read-only. |
| completeTime | (datetime) The date/time that the sale was completed. Can be changed. |
| referenceNumber | (string) Custom reference sale number from an external system (e.g. webstore, amazon) |
| referenceNumberSource | (string) Name of the external system for referenceNumber |
| tax1Rate | (float) The default first tax rate. Lines that do not have specific class tax rates will use this rate. |
| tax2Rate | (float) The default second tax rate. Lines that do not have specific class tax rates will use this rate. |
| change | (float) The cash change given out on the sale. Only for cash sales. |
| tipEnabled | (boolean) Whether the Tipping feature is active on this Sale. |
| calcDiscount | (float) The total amount discounted on the sale. |
| calcTotal | (float) The total. |
| calcSubtotal | (float) The subtotal. |
| calcTaxable | (float) The subtotal of the Taxable lines. |
| calcNonTaxable | (float) The subtotal of the Non Taxable lines. |
| calcAvgCost | (float) The total Avg. cost of all the lines. |
| calcFIFOCost | (float) The total FIFO cost of all the lines. |
| calcTax1 | (float) The tax total for the first tax rate. |
| calcTax2 | (float) The tax total for the second tax rate. |
| calcPayments | (float) The total of all SalePayment amounts. |
| calcTips | (float) The total of all SalePayment tipAmount values. |
| total | (float) The Sale total: calcSubtotal minus calcDiscount plus calcTax1 plus calcTax2. |
| totalDue | (float) Total minus (CreditAccount and Gift Card deposits(-) or withdraws(+)) minus (credit card refunds). |
| displayableTotal | (float) Represents the total + gift card deposits (a gift card’s cost is not computed in total when it is created). |
| balance | (float) Total minus calcPayments. |
| customerID | (integer) The foreign key for the customer attached to this sale. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) This field is deprecated. |
| employeeID | (integer) The foreign key for the employee who processed this sale. /API/V3/Account/{accountID}/Employee/{employeeID} |
| tipEmployeeID | (integer) The foreign key for the employee who will be assigned the total tip amount for this sale. |
| quoteID | (integer) The foreign key for the quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). /API/V3/Account/{accountID}/Quote/{quoteID} |
| registerID | (integer) The foreign key for the register where this sale was processed. /API/V3/Account/{accountID}/Register/{registerID} |
| shipToID | (integer) The foreign key for the shipment record for this sale. /API/V3/Account/{accountID}/ShipTo/{shipToID} |
| shopID | (integer) The foreign key for the shop where this sale was processed. /API/V3/Account/{accountID}/Shop/{shopID} |
| taxCategoryID | (integer) The foreign key for the sales tax (TaxCategory) for this sale. Defines what the tax rates will be. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| Customer | (object) The customer attached to this sale. /API/V3/Account/{accountID}/Customer |
| Discount | (object) The discount % applied to this entire sale. /API/V3/Account/{accountID}/Discount |
| Quote | (object) The quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). /API/V3/Account/{accountID}/Quote |
| ShipTo | (object) The shipment record for this sale. /API/V3/Account/{accountID}/ShipTo |
| TaxCategory | (object) The sales tax (TaxCategory) for this sale. Defines what the tax rates will be. /API/V3/Account/{accountID}/TaxCategory |
| SaleLines | (object) All the sale lines for this sale. /API/V3/Account/{accountID}/SaleLine |
| SalePayments | (object) The payments for this Sale. If the sale is complete it will have payments that sum to the total. If it’s not complete it will have no payments. /API/V3/Account/{accountID}/SalePayment |

#### InventorySale Fields

InventorySale object represent allocations of inventory to a sale line. If the sale line is an open layaway, special order, or workorder line, the InventorySale object indicates how many units have been reserved from each lot. If the sale line is sold, the InventorySale object will indicate the quantity sold from each lot.

| inventorySaleID | (integer) The unique numeric identifier for the inventory allocation. |
| --- | --- |
| quantity | (integer) The number of units reserved or sold. |
| createTime | (datetime) The date/time the Inventory Sale was created. |
| inventoryID | (integer) The foreign key to the Inventory lot object that the inventory was pulled from. |

#### Note Fields

| noteID | (integer) The primary key.. |
| --- | --- |
| note | (string) The note text. |
| isPublic | (boolean) Whether this note should show on receipts. For example if you put a note on an Item and mark it public than it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified |

#### SaleAccount Fields

| saleAccountID | (integer) The primary key. /API/V3/Account/{accountID}/SaleAccount/{saleAccountID} |
| --- | --- |
| creditAccountID | (integer) The foreign key to the CreditAccount (Gift Card) used in the SalePayment. /API/V3/Account/{accountID}/CreditAccount/{creditAccountID} |
| salePaymentID | (integer) The foreign key to the SalePayment that is linked to the SaleLine. /API/V3/Account/{accountID}/SalePayment/{salePaymentID} |
| saleLineID | (integer) The foreign key to the SaleLine that is linked to the SalePayment. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |

#### SaleNote Fields

### InternalNote

This is only
noteID | **(integer)** The primary key..
note: | **(string)** The note text.

### PrintedNote

| noteID | (integer) The primary key.. |
| --- | --- |
| note: | (string) The note text. |

#### SalePaymentSignature Fields

| salePaymentSignatureID | (integer) The primary key. /API/V3/Account/{accountID}/SalePayment/{salePaymentID}/SalePaymentSignature/{salePaymentSignatureID} |
| --- | --- |
| filePath | (string) The signature object’s file path in the image storage service |
| createTime | (datetime) The date/time the signature was created |
| salePaymentID | (integer) The foreign key to the Sale Payment the signature is created for. /API/V3/Account/{accountID}/SalePayment/{salePaymentID} |

#### Sortable Fields

- saleID
- timeStamp
- completeTime
- updatetime

#### See Also

- [SaleLine](https://developers.lightspeedhq.com/retail/endpoints/Sale-SaleLine/#saleline-fields)
- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discont-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/#item-fields)
- [SalePayment](https://developers.lightspeedhq.com/retail/endpoints/SalePayment/#salepayment-fields)
- [PaymentType](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/#paymenttype-fields)
- [CCCharge](https://developers.lightspeedhq.com/retail/endpoints/CCCharge/#cccharge-fields)
- [ShipTo](https://developers.lightspeedhq.com/retail/endpoints/ShipTo/#shipto-fields)
- [Contact](https://developers.lightspeedhq.com/retail/endpoints/Customer/#contact-fields)
- [Customer](https://developers.lightspeedhq.com/retail/endpoints/Customer/#customer-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)
- [TaxCategoryClass](https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/#taxcategoryclass-fields)

---

### GET All sales

Retrieve a list of all sales in the account

> Definition

```
GET /API/V3/Account/{accountID}/Sale.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Sale": [
    {
      "saleID": "2",
      "timeStamp": "2021-06-06T15:19:18+00:00",
      "discountPercent": "0",
      "completed": "true",
      "archived": "false",
      "voided": "false",
      "enablePromotions": "true",
      "isTaxInclusive": "false",
      "createTime": "2021-06-06T15:17:23+00:00",
      "updatetime": "2021-06-06T15:19:18+00:00",
      "completeTime": "2021-06-06T15:19:18+00:00",
      "referenceNumber": "",
      "referenceNumberSource": "",
      "tax1Rate": "0.0825",
      "tax2Rate": "0.05",
      "change": "0",
      "tipEnabled": "true",
      "receiptPreference": "printed",
      "displayableSubtotal": "280",
      "ticketNumber": "220000000002",
      "calcDiscount": "0",
      "calcTotal": "317.1",
      "calcSubtotal": "280",
      "calcTaxable": "280",
      "calcNonTaxable": "0",
      "calcAvgCost": "100",
      "calcFIFOCost": "100",
      "calcTax1": "23.1",
      "calcTax2": "14",
      "calcPayments": "317.1",
      "calcTips": "0",
      "total": "317.1",
      "totalDue": "317.1",
      "displayableTotal": "317.1",
      "balance": "0",
      "customerID": "0",
      "discountID": "0",
      "employeeID": "1",
      "tipEmployeeID": "1",
      "quoteID": "0",
      "registerID": "1",
      "shipToID": "0",
      "shopID": "1",
      "taxCategoryID": "1",
      "taxTotal": "37.1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single sale

Retrieve an existing sale by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Sale/{saleID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "44",
    "timeStamp": "2021-06-13T14:43:29+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "createTime": "2021-06-13T14:42:01+00:00",
    "updatetime": "2021-06-13T14:43:29+00:00",
    "completeTime": "2021-06-13T14:43:29+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0",
    "tax2Rate": "0",
    "change": "47.5",
    "tipEnabled": "true",
    "receiptPreference": "email",
    "displayableSubtotal": "2001",
    "ticketNumber": "220000000044",
    "calcDiscount": "0",
    "calcTotal": "2001",
    "calcSubtotal": "2001",
    "calcTaxable": "0",
    "calcNonTaxable": "2001",
    "calcAvgCost": "400",
    "calcFIFOCost": "400",
    "calcTax1": "0",
    "calcTax2": "0",
    "calcPayments": "2001",
    "calcTips": "0",
    "total": "2001",
    "totalDue": "2001",
    "displayableTotal": "2001",
    "balance": "0",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "1",
    "tipEmployeeID": "1",
    "quoteID": "0",
    "registerID": "1",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "0",
    "taxTotal": "0"
  }
}
```

#### Attributes

| saleID | (integer) The unique numerical ID for the sale. Required Field |
| --- | --- |

---

### POST Create a sale

Create a sale based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Sale.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "discountPercent": "0",
        "completed": "true",
        "archived": "false",
        "voided": "false",
        "enablePromotions": "true",
        "isTaxInclusive": "false",
        "completeTime": "2021-04-18T14:22:48+00:00"
        "referenceNumber": "",
        "receiptPreference": "printed",
        "customerID": "0",
        "discountID": "0",
        "employeeID": "1",
        "tipEmployeeID": "1",
        "quoteID": "0",
        "registerID": "3",
        "shipToID": "0",
        "shopID": "2",
        "taxCategoryID": "6"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "156",
    "timeStamp": "2021-04-18T14:22:48+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "createTime": "2021-04-18T14:22:48+00:00",
    "updatetime": "2021-04-18T14:22:48+00:00",
    "completeTime": "2021-04-18T14:22:48+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.1",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "0",
    "ticketNumber": "220000000156",
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
    "calcTips": "0",
    "total": "0",
    "totalDue": "0",
    "displayableTotal": "0",
    "balance": "0",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "1",
    "tipEmployeeID": "1",
    "quoteID": "0",
    "registerID": "3",
    "shipToID": "0",
    "shopID": "2",
    "taxCategoryID": "6",
    "Shop": {
      "shopID": "2",
      "name": "Fear the Walking Customer",
      "serviceRate": "0",
      "timeZone": "US/Pacific",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2021-04-06T14:42:40+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "false",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "2",
      "vendorID": "0",
      "ccGatewayID": "2",
      "gatewayConfigID": "2",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "6",
      "isTaxInclusive": "false",
      "tax1Name": "Old Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.1",
      "timeStamp": "2021-04-18T12:12:06+00:00"
    },
    "taxTotal": "0"
  }
}
```

#### Attributes

| completed | (boolean) Whether this sale is completed. If the sale is completed the inventory will have been removed and the payments will be equal to the total. |
| --- | --- |
| enablePromotions | (boolean) Run any applicable Promotions on all SaleLines added to this sale. This field may only be set on creation and cannot be changed thereafter. |
| completeTime | (datetime) The date/time that the sale was completed. Can be set to a past/date time, but not into the future. |
| referenceNumber | (string) Custom reference sale number from an external system (e.g. webstore, amazon) |
| referenceNumberSource | (string) Name of the external system for referenceNumber |
| change | (float) The cash change given out on the sale. Only for cash sales. |
| tipEnabled | (boolean) Whether the Tipping feature is active on this Sale. |
| customerID | (integer) The foreign key for the customer attached to this sale. |
| discountID | (integer) This field is deprecated. |
| employeeID | (integer) The foreign key for the employee who processed this sale. * |
| tipEmployeeID | (integer) The foreign key for the employee who will be assigned the total tip amount for this sale. |
| quoteID | (integer) The foreign key for the quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). |
| registerID | (integer) The foreign key for the register where this sale was processed. |
| shipToID | (integer) The foreign key for the shipment record for this sale. |
| shopID | (integer) The foreign key for the shop where this sale was processed. |
| taxCategoryID | (integer) The foreign key for the sales tax (TaxCategory) for this sale. Defines what the tax rates will be. |
| Customer | (object) The customer attached to this sale. |
| Discount | (object) The discount % applied to this entire sale. |
| Quote | (object) The quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). |
| ShipTo | (object) The shipment record for this sale. |
| TaxCategory | (object) The sales tax (TaxCategory) for this sale. Defines what the tax rates will be. |
| SaleLines | (object) All the sale lines for this sale. |
| SalePayments | (object) The payments for this Sale. If the sale is complete it will have payments that sum to the total. If it’s not complete it will have no payments. |

---

### PUT Update a sale

Update an existing sale based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Sale/{saleID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "discountPercent": "0",
        "completed": "false",
        "enablePromotions": "true",
        "isTaxInclusive": "false",
        "referenceNumber": "",
        "receiptPreference": "printed",
        "customerID": "6",
        "discountID": "0",
        "employeeID": "2",
        "tipEmployeeID": "2",
        "quoteID": "0",
        "registerID": "1",
        "shipToID": "0",
        "shopID": "1",
        "taxCategoryID": "1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "156",
    "timeStamp": "2021-04-18T16:57:22+00:00",
    "discountPercent": "0",
    "completed": "false",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "createTime": "2021-04-16T15:12:34+00:00",
    "updatetime": "2021-04-18T16:57:22+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.099475",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "0",
    "ticketNumber": "220000000156",
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
    "calcTips": "0",
    "total": "0",
    "totalDue": "0",
    "displayableTotal": "0",
    "balance": "0",
    "customerID": "6",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "1",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "Customer": {
      "customerID": "6",
      "firstName": "Alex",
      "lastName": "Lugo R",
      "dob": "1981-04-09T08:00:00+00:00",
      "archived": "false",
      "title": "",
      "company": "",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "createTime": "2021-02-16T20:49:46+00:00",
      "timeStamp": "2021-03-21T19:24:05+00:00",
      "contactID": "25",
      "creditAccountID": "0",
      "customerTypeID": "0",
      "discountID": "0",
      "employeeID": "0",
      "noteID": "38",
      "taxCategoryID": "0",
      "Contact": {
        "contactID": "25",
        "custom": "",
        "noEmail": "false",
        "noPhone": "false",
        "noMail": "false",
        "timeStamp": "2021-03-21T19:24:05+00:00",
        "Addresses": "",
        "Phones": "",
        "Emails": "",
        "Websites": ""
      }
    },
    "Shop": {
      "shopID": "1",
      "name": "The Walking Dead Consumers",
      "serviceRate": "100",
      "timeZone": "US/Pacific",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2021-03-03T15:53:45+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "false",
      "contactID": "2",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "1",
      "gatewayConfigID": "1",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.099475",
      "timeStamp": "2021-04-07T13:52:16+00:00"
    },
    "taxTotal": "0"
  }
}
```

#### Attributes

| saleID | (integer) The unique numerical ID for the sale. Required Field |
| --- | --- |
| completed | (boolean) Whether this sale is completed. If the sale is completed the inventory will have been removed and the payments will be equal to the total. |
| enablePromotions | (boolean) Run any applicable Promotions on all SaleLines added to this sale. This field may only be set on creation and cannot be changed thereafter. |
| completeTime | (datetime) The date/time that the sale was completed. Can be set to a past/date time, but not into the future. |
| referenceNumber | (string) Custom reference sale number from an external system (e.g. webstore, amazon) |
| referenceNumberSource | (string) Name of the external system for referenceNumber |
| change | (float) The cash change given out on the sale. Only for cash sales. |
| tipEnabled | (boolean) Whether the Tipping feature is active on this Sale. |
| customerID | (integer) The foreign key for the customer attached to this sale. |
| discountID | (integer) This field is deprecated. |
| employeeID | (integer) The foreign key for the employee who processed this sale. * |
| tipEmployeeID | (integer) The foreign key for the employee who will be assigned the total tip amount for this sale. |
| quoteID | (integer) The foreign key for the quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). |
| registerID | (integer) The foreign key for the register where this sale was processed. |
| shipToID | (integer) The foreign key for the shipment record for this sale. |
| shopID | (integer) The foreign key for the shop where this sale was processed. |
| taxCategoryID | (integer) The foreign key for the sales tax (TaxCategory) for this sale. Defines what the tax rates will be. |
| Customer | (object) The customer attached to this sale. |
| Discount | (object) The discount % applied to this entire sale. |
| Quote | (object) The quote that this sale is attached to (if it’s an existing quote, it’s the quote that created the sale). |
| ShipTo | (object) The shipment record for this sale. |
| TaxCategory | (object) The sales tax (TaxCategory) for this sale. Defines what the tax rates will be. |
| SaleLines | (object) All the sale lines for this sale. |
| SalePayments | (object) The payments for this Sale. If the sale is complete it will have payments that sum to the total. If it’s not complete it will have no payments. |

---

### DELETE delete a sale

Archive an existing sale by its ID. You can’t archive a completed sale.

> Definition

```
DELETE /API/V3/Account/{accountID}/Sale/{saleID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "156",
    "timeStamp": "2021-04-18T16:59:24+00:00",
    "discountPercent": "0",
    "completed": "false",
    "archived": "true",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "createTime": "2021-02-06T15:17:23+00:00",
    "updatetime": "2021-04-18T16:59:24+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.099475",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "0",
    "ticketNumber": "220000000156",
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
    "calcTips": "0",
    "total": "0",
    "totalDue": "0",
    "displayableTotal": "0",
    "balance": "0",
    "customerID": "6",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "1",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "Customer": {
      "customerID": "6",
      "firstName": "Alex",
      "lastName": "Lugo R",
      "dob": "1981-04-09T08:00:00+00:00",
      "archived": "false",
      "title": "",
      "company": "",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "createTime": "2021-02-16T20:49:46+00:00",
      "timeStamp": "2021-03-21T19:24:05+00:00",
      "contactID": "25",
      "creditAccountID": "0",
      "customerTypeID": "0",
      "discountID": "0",
      "employeeID": "0",
      "noteID": "38",
      "taxCategoryID": "0"
    },
    "taxTotal": "0"
  }
}
```

#### Attributes

| saleID | (integer) The unique numerical ID for the sale. Required Field |
| --- | --- |
