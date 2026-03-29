---
title: Shop
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Shop/
---

# Shop

#### Description

The physical store location. Shops contain Registers (and the Sales within those Registers), Item inventory quantities, Orders, etc.

#### User Interface

- Admin → General → Edit Shop (Shops → edit a Shop)

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Write | True |
| PUT/Update | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Additional Relations

- Contact
- ReceiptSetup
- TaxCategory
- ShelfLocations
- Registers
- CCGateway
- PriceLevel

#### Shop Fields

| shopID | (integer) The unique numerical ID for the shop. |
| --- | --- |
| name | (string) The name of the store. |
| serviceRate | (float) The hourly service rate for the shop, if any. |
| timeZone | (string) The timezone for the shop. |
| taxLabor | (boolean) Whether this service/labor has sales tax. |
| labelTitle | (enum) What the title of product labels should be. An enumeration with these possible values: No Title, Shop Name, Website, Phone, Custom. |
| labelMsrp | (boolean) Whether the label should include the MSRP for items it’s filled in for when it’s more than the shop’s price. |
| archived | (boolean) Whether this shop is archived. |
| contactID | (integer) The foreign key for the phone number address etc for the shop. |
| taxCategoryID | (integer) The foreign key for the default sales tax category for the shop to use on sales. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| receiptSetupID | (integer) The foreign key for the receipt setup, text at the top and bottom of the receipt etc. |
| ccGatewayID | (integer) The foreign key for the credit card gateway setup for this shop. |
| priceLevelID | (integer) The foreign key for default price level for this shop. /API/V3/Account/{accountID}/PriceLevel/{priceLevelID} |
| Contact | (object) Phone number address etc for the shop. |
| TaxCategory | (object) The default sales tax category for the shop to use on sales. /API/V3/Account/{accountID}/TaxCategory |
| ReceiptSetup | (object) The receipt setup, text at the top and bottom of the receipt etc. |
| CCGateway | (object) The credit card gateway setup for this shop. |
| PriceLevel | (object) The default price level for this shop. /API/V3/Account/{accountID}/PriceLevel |
| Registers | (object) Control:Account.Register |

#### ReceiptSetup Fields

| receiptSetupID | (integer) The unique numerical ID for the receipt. |
| --- | --- |
| generalMsg | (string) General text that prints at the end of all receipts. |
| workorderAgree | (string) Text that prints at the end of workorder receipts/invoices/quotes. |
| creditcardAgree | (string) Text that prints at the end of a sales receipt with credit card charges. |
| logo | (string) The relative URL to the logo image file. |
| logoHeight | (integer) The logo image file pixel height. |
| logoWidth | (integer) The logo image file pixel width. |
| header | (string) Prints at the top of the receipt. If left blank the shop’s contact information is printed. |

#### CCGateway Fields

| ccGatewayID | (integer) The unique numerical ID for the credit card gateway. |
| --- | --- |
| login | (string) Stores gateway credentials |
| marketType | (string) Market type in transaction XML |
| transKey | (string) Stores gateway credentials |
| deviceType | (integer) Type of device used to process CC transactions |
| hashValue | (string) MD5 hash used to validate transaction |
| enabled | (boolean) Whether gateway is enabled |
| testMode | (boolean) Whether test mode is enabled |
| gateway | (string) Name of the gateway |
| accountNum | (string) Stores gateway credentials |
| terminalNum | (string) Terminal ID in transaction XML |
| allowCredits | (boolean) Whether credit card charges are allowed |
| otherCredentials1 | (string) In case other credentials are needed. |
| otherCredentials2 | (string) In case other credentials are needed. |
| visaPaymentTypeID | (integer) The ID of the Visa payment type associated with the gateway. /API/V3/Account/{accountID}/PaymentType/{visaPaymentTypeID} |
| masterPaymentTypeID | (integer) The ID of the MasterCard payment type associated with the gateway. /API/V3/Account/{accountID}/PaymentType/{masterPaymentTypeID} |
| discoverPaymentTypeID | (integer) The ID of the Discover Card payment type associated with the gateway. /API/V3/Account/{accountID}/PaymentType/{discoverPaymentTypeID} |
| americanPaymentTypeID | (integer) The ID of the American Express payment type associated with the gateway. /API/V3/Account/{accountID}/PaymentType/{americanPaymentTypeID} |
| debitPaymentTypeID | (integer) The ID of the debit card payment type associated with the gateway. /API/V3/Account/{accountID}/PaymentType/{debitPaymentTypeID} |

#### Sortable Fields

- shopID

#### See Also

- [Contact](https://developers.lightspeedhq.com/retail/endpoints/Customer/#contact-fields)
- [PriceLevel](https://developers.lightspeedhq.com/retail/endpoints/PriceLevel/#pricelevel-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)
- [Register](https://developers.lightspeedhq.com/retail/endpoints/Register/#register-fields)

---

### GET All shops

Retrieve a list of all shops in the account

> Definition

```
GET /API/V3/Account/{accountID}/Shop.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Shop.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Shop": [
    {
      "shopID": "1",
      "name": "HQ",
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
      "ccGatewayID": "1",
      "gatewayConfigID": "1",
      "priceLevelID": "1"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single shop

Retrieve a single shop by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Shop/{shopID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Shop/{shopID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Shop": {
    "shopID": "3",
    "name": "Kiosk",
    "serviceRate": "0",
    "timeZone": "US/Central",
    "taxLabor": "false",
    "labelTitle": "Shop Name",
    "labelMsrp": "false",
    "archived": "false",
    "timeStamp": "2021-04-07T13:46:44+00:00",
    "companyRegistrationNumber": "",
    "vatNumber": "",
    "zebraBrowserPrint": "false",
    "contactID": "14",
    "taxCategoryID": "0",
    "receiptSetupID": "3",
    "ccGatewayID": "3",
    "gatewayConfigID": "3",
    "priceLevelID": "1"
  }
}
```

#### Attributes

| shopID | (integer) The unique numerical ID for the shop. |
| --- | --- |

---

### POST Create a shop

Create a shop based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Shop.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "2nd Location",
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Shop.json"
```

> Sample JSON response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Shop": {
        "shopID": "2",
        "name": "2nd Location",
        "serviceRate": "0",
        "timeZone": "America/Toronto",
        "taxLabor": "false",
        "labelTitle": "Shop Name",
        "labelMsrp": "false",
        "archived": "false",
        "timeStamp": "2021-05-22T04:33:29+00:00",
        "companyRegistrationNumber": "",
        "vatNumber": "",
        "zebraBrowserPrint": "true",
        "contactID": "7",
        "taxCategoryID": "0",
        "receiptSetupID": "2",
        "ccGatewayID": "0",
        "gatewayConfigID": "",
        "priceLevelID": "1",
        "Contact": {
            "contactID": "7",
            "custom": "",
            "noEmail": "true",
            "noPhone": "true",
            "noMail": "true",
            "timeStamp": "2021-05-22T04:33:29+00:00",
            "Addresses": "",
            "Phones": "",
            "Emails": "",
            "Websites": ""
        }
    }
}
```

#### Attributes

| name | (string) The name of the store. |
| --- | --- |
| serviceRate | (float) The hourly service rate for the shop, if any. |
| timeZone | (string) The timezone for the shop. |
| taxLabor | (boolean) Whether this service/labor has sales tax. |
| labelTitle | (enum) What the title of product labels should be. An enumeration with these possible values: No Title, Shop Name, Website, Phone, Custom. |
| labelMsrp | (boolean) Whether the label should include the MSRP for items it’s filled in for when it’s more than the shop’s price. |
| contactID | (integer) The foreign key for the phone number address etc for the shop. |
| taxCategoryID | (integer) The foreign key for the default sales tax category for the shop to useon sales. |
| receiptSetupID | (integer) The foreign key for the receipt setup, text at the top and bottom of the receipt etc. |
| ccGatewayID | (integer) The foreign key for the credit card gateway setup for this shop. |
| priceLevelID | (integer) The foreign key for default price level for this shop. |

---

### PUT Update a shop

Update an existing shop based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Shop/{shopID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "name": "Castle",
        "timeZone": "US/Easter"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Shop/{shopID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Shop": {
    "shopID": "3",
    "name": "Castle",
    "serviceRate": "1",
    "timeZone": "US/Eastern",
    "taxLabor": "false",
    "labelTitle": "Shop Name",
    "labelMsrp": "false",
    "archived": "false",
    "timeStamp": "2021-04-21T14:32:23+00:00",
    "companyRegistrationNumber": "",
    "vatNumber": "",
    "zebraBrowserPrint": "false",
    "contactID": "14",
    "taxCategoryID": "0",
    "receiptSetupID": "3",
    "ccGatewayID": "3",
    "gatewayConfigID": "3",
    "priceLevelID": "1",
    "Contact": {
      "contactID": "14",
      "custom": "",
      "noEmail": "false",
      "noPhone": "false",
      "noMail": "false",
      "timeStamp": "2021-04-07T13:46:44+00:00",
      "Addresses": {
        "ContactAddress": {
          "address1": "700 St-Antoine E",
          "city": "Montreal",
          "state": "Quebec",
          "stateCode": "QC",
          "zip": "H2Y 1A6",
          "country": "Canada",
          "countryCode": "CA"
        }
      },
      "Phones": "",
      "Emails": {
        "ContactEmail": {
          "address": "[email protected]",
          "useType": "Primary"
        }
      },
      "Websites": ""
    },
    "CCGateway": {
      "ccGatewayID": "3",
      "name": "",
      "marketType": "2",
      "deviceType": "5",
      "hashValue": "",
      "enabled": "false",
      "testMode": "false",
      "gateway": "",
      "terminalNum": "",
      "allowCredits": "false",
      "archived": "false",
      "visaPaymentTypeID": "3",
      "masterPaymentTypeID": "3",
      "discoverPaymentTypeID": "3",
      "americanPaymentTypeID": "3",
      "debitPaymentTypeID": "6"
    }
  }
}
```

#### Attributes

| name | (string) The name of the store. |
| --- | --- |
| serviceRate | (float) The hourly service rate for the shop, if any. |
| timeZone | (string) The timezone for the shop. |
| taxLabor | (boolean) Whether this service/labor has sales tax. |
| labelTitle | (enum) What the title of product labels should be. An enumeration with these possible values: No Title, Shop Name, Website, Phone, Custom. |
| labelMsrp | (boolean) Whether the label should include the MSRP for items it’s filled in for when it’s more than the shop’s price. |
| contactID | (integer) The foreign key for the phone number address etc for the shop. |
| taxCategoryID | (integer) The foreign key for the default sales tax category for the shop to useon sales. |
| receiptSetupID | (integer) The foreign key for the receipt setup, text at the top and bottom of the receipt etc. |
| ccGatewayID | (integer) The foreign key for the credit card gateway setup for this shop. |
| priceLevelID | (integer) The foreign key for default price level for this shop. |
