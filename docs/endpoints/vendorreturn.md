---
title: VendorReturn
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/VendorReturn/
---

# VendorReturn

#### Description

Vendor Returns represent inventory that is being returned to vendors. Each Vendor Return has a Vendor (the supplier to return the items to), a Shop (the location returning the items), and many VendorReturnItems which contain the individual product quantities and costs being returned.

#### User Interface

- Inventory → Vendor Returns

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:vendor_returns | true |
| --- | --- |

#### Additional Relations

- Note
- Shop
- Shop.Contact
- Vendor
- Vendor.Contact
- Vendor.Reps
- VendorReturnItems
- VendorReturnItems.Item
- VendorReturnItems.VendorReturnItemReason

#### VendorReturn Fields

| vendorReturnID | (integer) The unique numerical ID for the vendor return. |
| --- | --- |
| vendorID | (integer) The foreign key for the vendor this return is being sent to. |
| shopID | (integer) The foreign key for the shop this vendor return is from. |
| refNum | (string) A custom string to hold an external reference number. |
| status | (string) The status of the vendor return (for example: open, sent). |
| sentDate | (datetime) Date/time the vendor return was sent to the vendor. |
| shipCost | (float) Shipping costs on the vendor return. |
| otherCost | (float) Other costs on the vendor return. |
| hideVendorDetails | (boolean) Whether vendor details are hidden on the return. |
| archived | (boolean) Whether this vendor return is archived. |
| VendorReturnItems | (object) The individual line items being returned. |
| Note | (object) Notes for the vendor return. |
| Shop | (object) The shop this vendor return is from. |
| Vendor | (object) The vendor this return is being sent to. |
| subtotal | (float) The subtotal of all items being returned. |
| total | (float) The total cost of all items being returned including any adjustments. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- vendorReturnID
- timeStamp

Sort ascending with `?sort=vendorReturnID` or `?sort=timeStamp`. Sort descending with `?sort=-vendorReturnID` or `?sort=-timeStamp`.

---

### GET All Vendor Returns

Retrieve a list of all vendor returns in the account.

> Definition

```
GET /API/V3/Account/{accountID}/VendorReturn.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/VendorReturn.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "VendorReturn": [
    {
      "vendorReturnID": "1",
      "vendorID": "1",
      "shopID": "1",
      "refNum": "",
      "status": "open",
      "archived": "false",
      "shipCost": "0",
      "otherCost": "0",
      "VendorReturnItems": "",
      "subtotal": "0",
      "total": "0",
      "timeStamp": "2024-10-29T15:43:18+00:00",
      "hideVendorDetails": "false"
    },
    {
      "vendorReturnID": "2",
      "vendorID": "5",
      "shopID": "1",
      "refNum": "",
      "status": "open",
      "archived": "false",
      "shipCost": "0",
      "otherCost": "0",
      "VendorReturnItems": "",
      "subtotal": "0",
      "total": "0",
      "timeStamp": "2025-07-09T19:12:35+00:00",
      "hideVendorDetails": "false"
    },
    {
      "vendorReturnID": "3",
      "vendorID": "2",
      "shopID": "1",
      "refNum": "4524324324324",
      "status": "sent",
      "archived": "false",
      "sentDate": "2025-12-18T08:00:00+00:00",
      "shipCost": "0",
      "otherCost": "0",
      "VendorReturnItems": {
        "VendorReturnItem": {
          "vendorReturnItemID": "1",
          "vendorReturnID": "3",
          "itemID": "262",
          "Item": {
            "itemID": "262",
            "systemSku": "210000000263",
            "defaultCost": "0",
            "avgCost": "0",
            "fifoCost": "0",
            "discountable": "true",
            "tax": "true",
            "archived": "false",
            "itemType": "default",
            "serialized": "false",
            "description": "Vendor Return Item",
            "modelYear": "0",
            "upc": "",
            "ean": "",
            "customSku": "",
            "manufacturerSku": "",
            "timeStamp": "2025-12-18T21:05:24+00:00",
            "createTime": "2025-12-19T01:05:18+00:00",
            "categoryID": "0",
            "taxClassID": "0",
            "departmentID": "0",
            "itemMatrixID": "0",
            "itemAttributesID": "0",
            "manufacturerID": "0",
            "seasonID": "0",
            "defaultVendorID": "0",
            "Prices": {
              "ItemPrice": [
                {
                  "amount": "200",
                  "useType": "Default",
                  "useTypeID": "1"
                },
                {
                  "amount": "215",
                  "useType": "MSRP",
                  "useTypeID": "2"
                }
              ]
            }
          },
          "orderID": "0",
          "quantity": "10",
          "cost": "0",
          "subtotal": "0",
          "inventoryInStock": "8788",
          "vendorReturnItemReasonID": "2",
          "VendorReturnItemReason": {
            "vendorReturnItemReasonID": "2",
            "reason": "Defective",
            "defaultSelected": "false",
            "archived": "false",
            "createTime": "2024-09-11T16:25:06+00:00",
            "timeStamp": "2024-09-11T16:25:06+00:00",
            "isSystem": "true",
            "sortOrder": "2"
          }
        }
      },
      "subtotal": "0",
      "total": "0",
      "timeStamp": "2025-12-18T21:05:46+00:00",
      "hideVendorDetails": "false"
    },
    {
      "vendorReturnID": "4",
      "vendorID": "4",
      "shopID": "1",
      "refNum": "453453453534",
      "status": "sent",
      "archived": "false",
      "sentDate": "2025-12-18T08:00:00+00:00",
      "shipCost": "0",
      "otherCost": "0",
      "VendorReturnItems": {
        "VendorReturnItem": {
          "vendorReturnItemID": "2",
          "vendorReturnID": "4",
          "itemID": "263",
          "Item": {
            "itemID": "263",
            "systemSku": "210000000264",
            "defaultCost": "0",
            "avgCost": "0",
            "fifoCost": "0",
            "discountable": "true",
            "tax": "true",
            "archived": "false",
            "itemType": "default",
            "serialized": "false",
            "description": "Vendor Return Item 2",
            "modelYear": "0",
            "upc": "",
            "ean": "",
            "customSku": "",
            "manufacturerSku": "",
            "timeStamp": "2025-12-18T21:10:09+00:00",
            "createTime": "2025-12-19T01:10:03+00:00",
            "categoryID": "0",
            "taxClassID": "0",
            "departmentID": "0",
            "itemMatrixID": "0",
            "itemAttributesID": "0",
            "manufacturerID": "0",
            "seasonID": "0",
            "defaultVendorID": "0",
            "Prices": {
              "ItemPrice": [
                {
                  "amount": "45",
                  "useType": "Default",
                  "useTypeID": "1"
                },
                {
                  "amount": "75",
                  "useType": "MSRP",
                  "useTypeID": "2"
                }
              ]
            }
          },
          "orderID": "0",
          "quantity": "10",
          "cost": "0",
          "subtotal": "0",
          "inventoryInStock": "5455",
          "vendorReturnItemReasonID": "1",
          "VendorReturnItemReason": {
            "vendorReturnItemReasonID": "1",
            "reason": "None",
            "defaultSelected": "true",
            "archived": "false",
            "createTime": "2024-09-11T16:25:06+00:00",
            "timeStamp": "2024-09-11T16:25:06+00:00",
            "isSystem": "true",
            "sortOrder": "1"
          }
        }
      },
      "subtotal": "0",
      "total": "0",
      "timeStamp": "2025-12-18T21:10:30+00:00",
      "hideVendorDetails": "false"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single Vendor Return

Retrieve a single vendor return by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/VendorReturn/{vendorReturnID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/VendorReturn/{vendorReturnID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "VendorReturn": {
    "vendorReturnID": "1",
    "vendorID": "1",
    "shopID": "1",
    "Shop": {
      "shopID": "1",
      "name": "ABC Electronics",
      "serviceRate": "0",
      "timeZone": "America/Halifax",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2025-10-06T15:26:49+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "true",
      "networkHealthTool": "true",
      "contactID": "2",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "ccGatewayID": "0",
      "gatewayConfigID": "77685b55-4fe8-46b0-b269-8c401813738a",
      "priceLevelID": "1"
    },
    "Vendor": {
      "vendorID": "1",
      "name": "New Vendor One",
      "accountNumber": "5884488955674411",
      "priceLevel": "",
      "updatePrice": "false",
      "updateCost": "false",
      "updateDescription": "false",
      "Contact": {
        "contactID": "6",
        "custom": "",
        "noEmail": "true",
        "noPhone": "true",
        "noMail": "true",
        "Addresses": {
          "ContactAddress": {
            "address1": "45983 River St",
            "address2": "",
            "city": "New Minas",
            "state": "Nova Scotia",
            "zip": "B4N 1G8",
            "country": "Canada",
            "countryCode": "CA",
            "stateCode": "NS"
          }
        },
        "Phones": {
          "ContactPhone": {
            "number": "965-447-1245",
            "useType": "Work"
          }
        },
        "Emails": {
          "ContactEmail": {
            "address": "[email protected]",
            "useType": "Primary"
          }
        },
        "Websites": "",
        "timeStamp": "2025-09-10T18:31:04+00:00"
      },
      "Reps": {
        "firstName": "John",
        "lastName": "Smith"
      }
    },
    "Note": {
      "note": "",
      "isPublic": "false",
      "timeStamp": "2024-10-29T15:43:18+00:00"
    },
    "refNum": "",
    "status": "open",
    "archived": "false",
    "shipCost": "0",
    "otherCost": "0",
    "VendorReturnItems": "",
    "subtotal": "0",
    "total": "0",
    "timeStamp": "2024-10-29T15:43:18+00:00",
    "hideVendorDetails": "false"
  }
}
```

#### Attributes

| vendorReturnID | (integer) The unique numerical ID for the vendor return. Required Field |
| --- | --- |
