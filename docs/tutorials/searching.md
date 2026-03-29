---
title: Searching
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/searching/
---

# Searching

See [Query Parameters](https://developers.lightspeedhq.com/retail/introduction/parameters/) for more information.

## Searching for Records by timeStamp

```shell
curl -X GET \
-H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json?timeStamp=>,2016-11-01T00:00:00-0400'
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json?timeStamp=>,2016-11-01T00:00:00-0400',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array('authorization: Bearer {Access Token}'),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo 'cURL Error #:' . $err;
} else {
  echo $response;
}
```

```python
import requests

url = 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json?timeStamp=>,2016-11-01T00:00:00-0400'

headers = {'authorization': 'Bearer {Access Token}'}

response = requests.request('GET', url headers=headers)

print(response.text)
```

> Example Response:

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Sale": {
    "saleID": "248",
    "timeStamp": "2016-11-02T19:36:29+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "9.99",
    "ticketNumber": "220000000248",
    "calcDiscount": "0",
    "calcTotal": "11.49",
    "calcSubtotal": "9.99",
    "calcTaxable": "9.99",
    "calcNonTaxable": "0",
    "calcAvgCost": "2",
    "calcFIFOCost": "2",
    "calcTax1": "0.5",
    "calcTax2": "1",
    "calcPayments": "11.49",
    "calcTips": "0",
    "total": "11.49",
    "totalDue": "11.49",
    "displayableTotal": "11.49",
    "balance": "0",
    "customerID": "0",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "5",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "taxTotal": "1.5"
  }
}
```

This example will return all sales with a timeStamp after midnight November 1, 2016 EDT(Eastern Daylight Time/UTC-4h).

The format is `YYYY-MM-DDTHH:MM:SS±HHMM` where `±HHMM` is the offset from UTC/GMT. This is optional, but allows searching in the shop’s local time. in this example, the value is `>,2016-11-01T00:00:00-0400`, where `-0400` is the timezone offset.

It may be necessary to manually encode `>` as `%3D`.

---

## Searching Customers’ Contact Information

```shell
curl -X GET \
-H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer.json?load_relations=\["Contact"\]&Contact.email=!~,'
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Customer.json?load_relations=["Contact"]&Contact.email=!~,',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array('authorization: Bearer {Access Token}'),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo 'cURL Error #:' . $err;
} else {
  echo $response;
}
```

```python
import requests

url = 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Customer.json?load_relations=["Contact"]&Contact.email=!~,'

headers = {'authorization': 'Bearer {Access Token}'}

response = requests.request('GET', url, headers=headers)

print(response.text)
```

> Example Response:

```json
{
   "@attributes" : {
      "next" : "",
      "previous" : ""
   },
   "Customer" : [
      {
         "vatNumber" : "",
         "customerTypeID" : "2",
         "dob" : "2011-08-05T04:00:00+00:00",
         "taxCategoryID" : "0",
         "creditAccountID" : "0",
         "firstName" : "Tamberson",
         "discountID" : "0",
         "timeStamp" : "2016-09-23T14:17:18+00:00",
         "title" : "",
         "archived" : "false",
         "lastName" : "The Minotaur",
         "customerID" : "2",
         "createTime" : "2014-05-05T19:44:10+00:00",
         "companyRegistrationNumber" : "",
         "Contact" : {
            "timeStamp" : "2016-08-29T14:49:25+00:00",
            "noMail" : "false",
            "custom" : "",
            "noEmail" : "false",
            "Phones" : {
               "ContactPhone" : {
                  "useType" : "Home",
                  "number" : "360 555 2453"
               }
            },
            "Emails" : {
               "ContactEmail" : {
                  "useType" : "Primary",
                  "address" : "[email protected]"
               }
            },
            "noPhone" : "false",
            "Addresses" : {
               "ContactAddress" : {
                  "address1": "700 St-Antoine E",
                  "city": "Montreal",
                  "state": "Quebec",
                  "stateCode": "QC",
                  "zip": "H2Y 1A6",
                  "country": "Canada",
                  "countryCode": "CA"
               }
            },
            "Websites" : {
               "ContactWebsite" : {
                  "url" : "minotaurmingle.biz/tamberson"
               }
            }
         },
         "company" : "Minotaurs R Us"
      },
      {
         "creditAccountID" : "0",
         "taxCategoryID" : "0",
         "dob" : "2012-10-04T04:00:00+00:00",
         "discountID" : "0",
         "firstName" : "Pendleton",
         "vatNumber" : "",
         "customerTypeID" : "2",
         "companyRegistrationNumber" : "",
         "company" : "",
         "Contact" : {
            "noEmail" : "false",
            "Phones" : {
               "ContactPhone" : {
                  "useType" : "Home",
                  "number" : "360 555 4253"
               }
            },
            "Emails" : {
               "ContactEmail" : {
                  "useType" : "Primary",
                  "address" : "[email protected]"
               }
            },
            "Websites" : {
               "ContactWebsite" : {
                  "url" : "livejournal.com/users/xpendles"
               }
            },
            "noPhone" : "false",
            "Addresses" : {
               "ContactAddress" : {
                  "address1": "700 St-Antoine E",
                  "city": "Montreal",
                  "state": "Quebec",
                  "stateCode": "QC",
                  "zip": "H2Y 1A6",
                  "country": "Canada",
                  "countryCode": "CA"
               }
            },
            "custom" : "",
            "timeStamp" : "2014-09-04T15:00:15+00:00",
            "noMail" : "false"
         },
         "archived" : "false",
         "title" : "",
         "timeStamp" : "2016-09-13T19:20:24+00:00",
         "customerID" : "4",
         "createTime" : "2014-05-05T20:10:44+00:00",
         "lastName" : "Snodgrass"
      }
   ]
}
```

You can use dot-notation to search fields that are part of related records. For example, you can use the parameter `Contact.email` to search for customers by email.

Similarly, the following query parameters can be used to search Customers by telephone numbers:

- `Contact.phoneHome`
- `Contact.phoneWork`
- `Contact.mobile`
- `Contact.pager`
- `Contact.fax`
