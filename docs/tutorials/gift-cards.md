---
title: Gift Cards
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/gift-cards/
---

# Gift Cards

In Retail POS (R-Series), gift cards are credit accounts that do not need to be tied to a customer. They are created directly through the [Credit Account](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/) endpoint, and their balance is changed by payments made on a [Sale](https://developers.lightspeedhq.com/retail/endpoints/Sale/).

## Creating a Gift Card

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}"),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

> Example Request:

```json
{
	"code":"2312345678904",
	"name":"Gift Card",
	"description": "Gift Card"
}
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "10",
    "name": "Gift Card",
    "code": "**********8904",
    "creditLimit": "0",
    "description": "Gift Card",
    "giftCard": "true",
    "archived": "false",
    "timeStamp": "2021-10-11T16:29:27+00:00",
    "customerID": "0",
    "balance": "0"
  }
}
```

A gift card is created with a POST request to the [Credit Account](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/) endpoint. The `code` field represents the gift card redemption number, and must be between 8 and 32 digits in length.

---

## Checking if a Gift Card exists

```shell
curl -X GET \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json?giftCard=true&archived=true&code=123456789101112"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json?giftCard=true&archived=true&code=123456789101112"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json?giftCard=true&archived=true&code=123456789101112",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}"),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "CreditAccount": {
    "creditAccountID": "10",
    "name": "Gift Card 2021-10-11",
    "code": "**********1112",
    "creditLimit": "0",
    "description": "Gift Card",
    "giftCard": "true",
    "archived": "false",
    "timeStamp": "2021-10-11T16:29:27+00:00",
    "customerID": "0",
    "balance": "0"
  }
}
```

To check if a gift card exists, a GET request to the Account.CreditAccount endpoint is sent. The following query parameters must be included:

- `giftCard = true`
- `archived = true`
- `code = {giftCardCode}`

**The following restrictions apply to gift card code searches:**

- A rate limit of 1 request per second per lookup.
- Only the equals operator **=** query parameter can be used for lookup.

---

## Adding a balance to the Gift Card

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}"),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"

payload = "{See Below (can also be a Python dictionary)}"
headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

> Option 1 - Step 1: POST Request

```json
{
  "employeeID": 2,
  "registerID": 5,
  "shopID": 1,
  "SalePayments": {
    "SalePayment": [
      {
        "amount": "-100",
        "creditAccountID": "9",
        "paymentTypeID": "5"
      }
    ]
  }
}
```

```shell
curl -X PUT \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale/{SaleID}.json"
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.{SaleID}.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}"),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale/{SaleID}.json"

payload = "{See Below (can also be a Python dictionary)}"
headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("PUT", url, data=payload, headers=headers)

print(response.text)
```

> Option 1 - Step 2: PUT Request

```json
{
  "completed": true,
  "SalePayments": {
    "SalePayment": [
      {
        "amount": "100",
        "paymentTypeID": "1"
      }
    ]
  }
}
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "195",
    "timeStamp": "2021-10-11T18:21:08+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "false",
    "isTaxInclusive": "false",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "0",
    "ticketNumber": "220000000195",
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
    "totalDue": "100",
    "displayableTotal": "100",
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
    "Shop": {
      "shopID": "1",
      "name": "West Bolduc",
      "serviceRate": "0",
      "timeZone": "US/Eastern",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2021-09-28T15:43:22+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "3",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "James Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.09975",
      "timeStamp": "2021-08-08T19:15:44+00:00",
      "TaxCategoryClasses": {
        "TaxCategoryClass": [
          {
            "taxCategoryClassID": "2",
            "tax1Rate": "0",
            "tax2Rate": "0",
            "timeStamp": "2021-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "2"
          },
          {
            "taxCategoryClassID": "4",
            "tax1Rate": "0.05",
            "tax2Rate": "0",
            "timeStamp": "2021-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "4"
          }
        ]
      }
    },
    "SaleLines": {
      "SaleLine": {
        "saleLineID": "192",
        "createTime": "2021-10-11T18:21:09+00:00",
        "timeStamp": "2021-10-11T18:21:09+00:00",
        "unitQuantity": "1",
        "unitPrice": "0",
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
        "displayableSubtotal": "0",
        "displayableUnitPrice": "0",
        "calcLineDiscount": "0",
        "calcTransactionDiscount": "0",
        "calcTotal": "0",
        "calcSubtotal": "0",
        "calcTax1": "0",
        "calcTax2": "0",
        "taxClassID": "8",
        "customerID": "0",
        "discountID": "0",
        "employeeID": "2",
        "itemID": "0",
        "noteID": "136",
        "parentSaleLineID": "0",
        "shopID": "1",
        "saleID": "195",
        "Note": {
          "noteID": "136",
          "note": "Gift Card Purchase 231234000000",
          "isPublic": "false",
          "timeStamp": "2021-10-11T18:21:09+00:00"
        }
      }
    },
    "SalePayments": {
      "SalePayment": [
        {
          "salePaymentID": "120",
          "amount": "-100",
          "tipAmount": "0",
          "createTime": "2021-10-11T18:21:09+00:00",
          "archived": "false",
          "remoteReference": "",
          "paymentID": "",
          "saleID": "195",
          "paymentTypeID": "5",
          "ccChargeID": "0",
          "refPaymentID": "0",
          "registerID": "5",
          "employeeID": "2",
          "creditAccountID": "9",
          "PaymentType": {
            "paymentTypeID": "5",
            "name": "Gift Card",
            "requireCustomer": "false",
            "archived": "false",
            "internalReserved": "true",
            "type": "gift card",
            "refundAsPaymentTypeID": "5"
          },
          "SaleAccounts": {
            "SaleAccount": {
              "saleAccountID": "20",
              "creditAccountID": "9",
              "salePaymentID": "120",
              "saleLineID": "192"
            }
          }
        },
        {
          "salePaymentID": "121",
          "amount": "100",
          "tipAmount": "0",
          "createTime": "2021-10-11T18:21:09+00:00",
          "archived": "false",
          "remoteReference": "",
          "paymentID": "",
          "saleID": "195",
          "paymentTypeID": "1",
          "ccChargeID": "0",
          "refPaymentID": "0",
          "registerID": "5",
          "employeeID": "2",
          "creditAccountID": "0",
          "PaymentType": {
            "paymentTypeID": "1",
            "name": "Cash",
            "requireCustomer": "false",
            "archived": "false",
            "internalReserved": "true",
            "type": "cash",
            "refundAsPaymentTypeID": "0"
          }
        }
      ]
    },
    "taxTotal": "0"
  }
}
```

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}"),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"

payload = "{See Below (can also be a Python dictionary)}"
headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

> Option 2 - Step 1: Post Request

```json
{
  "completed": true,
  "employeeID": 2,
  "registerID": 5,
  "shopID": 1,
  "SalePayments": {
    "SalePayment": [
      {
        "amount": "-100",
        "creditAccountID": "9",
        "paymentTypeID": "5"
      },
      {
        "amount": "100",
        "paymentTypeID": "1"
      }
    ]
  }
}
```

The balance of a gift card can only be changed by a payment on a sale. A gift card can be loaded with a balance in two ways:

- The payment that adds funds to the gift card has a **paymentTypeID** of **5**, and the **creditAccountID** of the gift card must be specified.
- For this payment, use a negative amount. For example, if a gift card has a balance of $100, its credit account will show a balance amount of **-100**.
- The register specified in the sale payload must **not** be named (case sensitive) **eCom**.

### Option 1 - Two Steps:

1. A [(POST/Create)](https://developers.lightspeedhq.com/retail/endpoints/Sale/#post-create-a-sale) request to create the sale, attach the payment object that adds funds to the gift card, and link to the gift card’s credit account ID.
2. A [(PUT/Update)](https://developers.lightspeedhq.com/retail/endpoints/Sale/#put-update-a-sale) request to attach the payment received and finalize the sale.

### Option 2 - Single Step:

1. A [(POST/Create)](https://developers.lightspeedhq.com/retail/endpoints/Sale/#post-create-a-sale) request to create the sale, attach the gift card payment with a link to the gift card’s credit account ID, attach payment received, and finalize the sale.

---

## Using the Gift Card

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json"

payload = "{See Below (can also be a Python dictionary)}"
headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array("authorization: Bearer {Access Token}",),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

> Example Request:

```json
{
	"employeeID": 2,
	"registerID": 5,
	"shopID": 1,
	"completed": true,
	"SaleLines": {
	  "SaleLine": {
	  	"itemID": 12,
	  	"unitQuantity": 1
	  }
	},
	"SalePayments": {
      "SalePayment": {
          "amount": "11.49",
          "creditAccountID": "9",
          "paymentTypeID": "5"
      }
    }
}
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "201",
    "timeStamp": "2021-10-11T19:20:29+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "false",
    "isTaxInclusive": "false",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "9.99",
    "ticketNumber": "220000000201",
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
    "totalDue": "0",
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
    "Shop": {
      "shopID": "1",
      "name": "West Bolduc",
      "serviceRate": "0",
      "timeZone": "US/Eastern",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2021-09-28T15:43:22+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "3",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "James Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.09975",
      "timeStamp": "2021-08-08T19:15:44+00:00",
      "TaxCategoryClasses": {
        "TaxCategoryClass": [
          {
            "taxCategoryClassID": "2",
            "tax1Rate": "0",
            "tax2Rate": "0",
            "timeStamp": "2021-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "2"
          },
          {
            "taxCategoryClassID": "4",
            "tax1Rate": "0.05",
            "tax2Rate": "0",
            "timeStamp": "2021-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "4"
          }
        ]
      }
    },
    "SaleLines": {
      "SaleLine": {
        "saleLineID": "195",
        "createTime": "2021-10-11T19:20:29+00:00",
        "timeStamp": "2021-10-11T19:20:29+00:00",
        "unitQuantity": "1",
        "unitPrice": "9.99",
        "normalUnitPrice": "0",
        "discountAmount": "0",
        "discountPercent": "0",
        "avgCost": "2",
        "fifoCost": "2",
        "tax": "true",
        "tax1Rate": "0.05",
        "tax2Rate": "0.09975",
        "isLayaway": "false",
        "isWorkorder": "false",
        "isSpecialOrder": "false",
        "displayableSubtotal": "9.99",
        "displayableUnitPrice": "9.99",
        "calcLineDiscount": "0",
        "calcTransactionDiscount": "0",
        "calcTotal": "11.4860025",
        "calcSubtotal": "9.99",
        "calcTax1": "0.4995",
        "calcTax2": "0.9965025",
        "taxClassID": "6",
        "customerID": "0",
        "discountID": "0",
        "employeeID": "2",
        "itemID": "12",
        "noteID": "0",
        "parentSaleLineID": "0",
        "shopID": "1",
        "saleID": "201"
      }
    },
    "SalePayments": {
      "SalePayment": {
        "salePaymentID": "126",
        "amount": "11.49",
        "tipAmount": "0",
        "createTime": "2021-10-11T19:20:29+00:00",
        "archived": "false",
        "remoteReference": "",
        "paymentID": "",
        "saleID": "201",
        "paymentTypeID": "5",
        "ccChargeID": "0",
        "refPaymentID": "0",
        "registerID": "5",
        "employeeID": "2",
        "creditAccountID": "9",
        "PaymentType": {
          "paymentTypeID": "5",
          "name": "Gift Card",
          "requireCustomer": "false",
          "archived": "false",
          "internalReserved": "true",
          "type": "gift card",
          "refundAsPaymentTypeID": "5"
        }
      }
    },
    "taxTotal": "1.5"
  }
}
```

To use the gift card as a [payment method](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/) on a sale, add a `SalePayment` with `paymentTypeID` of `5` and include the `creditAccountID` of the gift card.
