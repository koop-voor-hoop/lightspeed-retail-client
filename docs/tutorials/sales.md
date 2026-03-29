---
title: Sales
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/sales/
---

# Sales

All the requests in this tutorial use the same method and endpoint (except the full refund), so the code sample is the same unless noted; only the payload changes.

## Creating a Completed Sale

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

?>
```

> Bad Example Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "customerID": 8,
    "completed": true,
    "SaleLines": {
        "SaleLine": [
        {
            "itemID": 12,
            "unitQuantity": 1
        },
        {
            "itemID": 28,
            "unitQuantity": 1
        }
        ]
    },
    "SalePayments": {
    	"SalePayment": {
    		"amount": 11.49,
    		"paymentTypeID": 1
    	}
    }
}
```

The `completed` field will mark a sale as finished, but the sale must be balanced. The first example request will fail because the payment is less than the sale total.

---

> Good Example Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "customerID": 8,
    "completed": true,
    "SaleLines": {
        "SaleLine": [
        {
            "itemID": 12,
            "unitQuantity": 1
        },
        {
            "itemID": 28,
            "unitQuantity": 1
        }
        ]
    },
    "SalePayments": {
    	"SalePayment": {
    		"amount": 34.48,
    		"paymentTypeID": 1
    	}
    }
}
```

> Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "277",
    "timeStamp": "2016-11-10T13:51:54+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "false",
    "isTaxInclusive": "false",
    "createTime": "2016-11-10T13:51:54+00:00",
    "updateTime": "2016-11-10T13:51:54+00:00",
    "completeTime": "2016-11-10T13:51:54+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "29.99",
    "ticketNumber": "220000000277",
    "calcDiscount": "0",
    "calcTotal": "34.48",
    "calcSubtotal": "29.99",
    "calcTaxable": "29.99",
    "calcNonTaxable": "0",
    "calcAvgCost": "14.95",
    "calcFIFOCost": "14",
    "calcTax1": "1.5",
    "calcTax2": "2.99",
    "calcPayments": "34.48",
    "calcTips": "0",
    "total": "34.48",
    "totalDue": "34.48",
    "displayableTotal": "34.48",
    "balance": "0",
    "customerID": "8",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "5",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "Customer": {
      "customerID": "8",
      "firstName": "Bramberson",
      "lastName": "",
      "archived": "false",
      "title": "",
      "company": "",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "createTime": "2014-09-03T13:53:54+00:00",
      "timeStamp": "2016-09-06T12:41:58+00:00",
      "contactID": "16",
      "creditAccountID": "2",
      "customerTypeID": "2",
      "discountID": "0",
      "employeeID": "0",
      "noteID": "42",
      "taxCategoryID": "0"
    },
    "Shop": {
      "shopID": "1",
      "name": "West Bolduc",
      "serviceRate": "0",
      "timeZone": "US/Eastern",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2016-09-28T15:43:22+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "false",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "3",
      "gatewayConfigID": "3",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "James Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.09975",
      "timeStamp": "2016-08-08T19:15:44+00:00",
      "TaxCategoryClasses": {
        "TaxCategoryClass": [
          {
            "taxCategoryClassID": "2",
            "tax1Rate": "0",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "2"
          },
          {
            "taxCategoryClassID": "4",
            "tax1Rate": "0.05",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "4"
          }
        ]
      }
    },
    "SaleLines": {
      "SaleLine": [
        {
          "saleLineID": "269",
          "createTime": "2016-11-10T13:51:54+00:00",
          "timeStamp": "2016-11-10T13:51:54+00:00",
          "unitQuantity": "1",
          "unitPrice": "9.99",
          "normalUnitPrice": "0",
          "discountAmount": "0",
          "discountPercent": "0",
          "avgCost": "3.2",
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
          "saleID": "277"
        },
        {
          "saleLineID": "270",
          "createTime": "2016-11-10T13:51:54+00:00",
          "timeStamp": "2016-11-10T13:51:54+00:00",
          "unitQuantity": "1",
          "unitPrice": "20",
          "normalUnitPrice": "0",
          "discountAmount": "0",
          "discountPercent": "0",
          "avgCost": "11.75",
          "fifoCost": "12",
          "tax": "true",
          "tax1Rate": "0.05",
          "tax2Rate": "0.09975",
          "isLayaway": "false",
          "isWorkorder": "false",
          "isSpecialOrder": "false",
          "displayableSubtotal": "20",
          "displayableUnitPrice": "20",
          "calcLineDiscount": "0",
          "calcTransactionDiscount": "0",
          "calcTotal": "22.995",
          "calcSubtotal": "20",
          "calcTax1": "1",
          "calcTax2": "1.995",
          "taxClassID": "6",
          "customerID": "0",
          "discountID": "0",
          "employeeID": "2",
          "itemID": "28",
          "noteID": "0",
          "parentSaleLineID": "0",
          "shopID": "1",
          "saleID": "277"
        }
      ]
    },
    "SalePayments": {
      "SalePayment": {
        "salePaymentID": "168",
        "amount": "34.48",
        "tipAmount": "0",
        "createTime": "2016-11-10T13:51:54+00:00",
        "archived": "false",
        "remoteReference": "",
        "paymentID": "",
        "saleID": "277",
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
    },
    "taxTotal": "4.49"
  }
}
```

In this case, the $15 payment that was posted was more than the sale total of $11.49. However, because this was a cash payment, the payment is saved as $11.49 and the remaining $3.51 is marked as change to be returned.

---

## Pricing Rules

> Example Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "enablePromotions": true,
    "completed": true,
    "Customer": {
        "customerTypeID": 2
    },
    "SaleLines": {
        "SaleLine": {
            "itemID": 28,
            "unitQuantity": 1
        }
    },
    "SalePayments": {
        "SalePayment": [
            {
                "amount": 16.22,
                "paymentTypeID": 1
            }
        ]
    }
}
```

> Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "270",
    "timeStamp": "2016-11-09T17:11:53+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "true",
    "isTaxInclusive": "false",
    "createTime": "2016-11-09T17:11:53+00:00",
    "updateTime": "2016-11-09T17:11:53+00:00",
    "completeTime": "2016-11-09T17:11:53+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "14.1",
    "ticketNumber": "220000000270",
    "calcDiscount": "0",
    "calcTotal": "16.22",
    "calcSubtotal": "14.1",
    "calcTaxable": "14.1",
    "calcNonTaxable": "0",
    "calcAvgCost": "11.75",
    "calcFIFOCost": "12",
    "calcTax1": "0.71",
    "calcTax2": "1.41",
    "calcPayments": "16.22",
    "calcTips": "0",
    "total": "16.22",
    "totalDue": "16.22",
    "displayableTotal": "16.22",
    "balance": "0",
    "customerID": "2",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "5",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "Customer": {
      "customerID": "2",
      "firstName": "Tamberson",
      "lastName": "The Minotaur",
      "dob": "2011-08-05T04:00:00+00:00",
      "archived": "false",
      "title": "",
      "company": "Minotaurs R Us",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "createTime": "2014-05-05T19:44:10+00:00",
      "timeStamp": "2016-09-23T14:17:18+00:00",
      "contactID": "10",
      "creditAccountID": "0",
      "customerTypeID": "2",
      "discountID": "0",
      "employeeID": "0",
      "noteID": "30",
      "taxCategoryID": "0"
    },
    "Shop": {
      "shopID": "1",
      "name": "West Bolduc",
      "serviceRate": "0",
      "timeZone": "US/Eastern",
      "taxLabor": "false",
      "labelTitle": "Shop Name",
      "labelMsrp": "false",
      "archived": "false",
      "timeStamp": "2016-09-28T15:43:22+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "false",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "3",
      "gatewayConfigID": "3",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "James Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.09975",
      "timeStamp": "2016-08-08T19:15:44+00:00",
      "TaxCategoryClasses": {
        "TaxCategoryClass": [
          {
            "taxCategoryClassID": "2",
            "tax1Rate": "0",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "2"
          },
          {
            "taxCategoryClassID": "4",
            "tax1Rate": "0.05",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "4"
          }
        ]
      }
    },
    "SaleLines": {
      "SaleLine": {
        "saleLineID": "260",
        "createTime": "2016-11-09T17:11:53+00:00",
        "timeStamp": "2016-11-09T17:11:53+00:00",
        "unitQuantity": "1",
        "unitPrice": "14.1",
        "normalUnitPrice": "20",
        "discountAmount": "0",
        "discountPercent": "0",
        "avgCost": "11.75",
        "fifoCost": "12",
        "tax": "true",
        "tax1Rate": "0.05",
        "tax2Rate": "0.09975",
        "isLayaway": "false",
        "isWorkorder": "false",
        "isSpecialOrder": "false",
        "displayableSubtotal": "14.1",
        "displayableUnitPrice": "14.1",
        "calcLineDiscount": "0",
        "calcTransactionDiscount": "0",
        "calcTotal": "16.211475",
        "calcSubtotal": "14.1",
        "calcTax1": "0.705",
        "calcTax2": "1.406475",
        "taxClassID": "6",
        "customerID": "0",
        "discountID": "0",
        "employeeID": "2",
        "itemID": "28",
        "noteID": "0",
        "parentSaleLineID": "0",
        "shopID": "1",
        "saleID": "270"
      }
    },
    "SalePayments": {
      "SalePayment": {
        "salePaymentID": "165",
        "amount": "16.22",
        "tipAmount": "0",
        "createTime": "2016-11-09T17:11:53+00:00",
        "archived": "false",
        "remoteReference": "",
        "paymentID": "",
        "saleID": "270",
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
    },
    "taxTotal": "2.12"
  }
}
```

By default, pricing rules are not applied to sales completed through the API. To apply them, set `enablePromotions` to true. In this example, there is a Pricing Rule set up in Retail POS (R-Series) that gives the selected customer a discount.

---

## Refunds

Refunds are always done at the SaleLine level. This allows us to refund only some items from a Sale.

The [Account.Sale.Refund](https://developers.lightspeedhq.com/retail/endpoints/Sale-refund/) endpoint offers an easy way to create a refund of an entire Sale. These examples will be refunds off of the Sale from the [first good example above](https://developers.lightspeedhq.com/#goodex).

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale/277/refund.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale/277/refund.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Sale/277/refund.json",
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

?>
```

> Full Refund Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "SalePayments": {
    	"SalePayment": {
    		"paymentTypeID": 1
    	}
    }
}
```

> Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "282",
    "timeStamp": "2016-11-10T14:07:38+00:00",
    "discountPercent": "0",
    "completed": "true",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "false",
    "isTaxInclusive": "false",
    "createTime": "2016-11-10T14:07:38+00:00",
    "updateTime": "2016-11-10T14:07:38+00:00",
    "completeTime": "2016-11-10T14:07:38+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "-29.99",
    "ticketNumber": "220000000282",
    "calcDiscount": "0",
    "calcTotal": "-34.48",
    "calcSubtotal": "-29.99",
    "calcTaxable": "-29.99",
    "calcNonTaxable": "0",
    "calcAvgCost": "-14.95",
    "calcFIFOCost": "-14",
    "calcTax1": "-1.5",
    "calcTax2": "-2.99",
    "calcPayments": "-34.48",
    "calcTips": "0",
    "total": "-34.48",
    "totalDue": "-34.48",
    "displayableTotal": "-34.48",
    "balance": "0",
    "customerID": "8",
    "discountID": "0",
    "employeeID": "2",
    "tipEmployeeID": "2",
    "quoteID": "0",
    "registerID": "5",
    "shipToID": "0",
    "shopID": "1",
    "taxCategoryID": "1",
    "SaleLines": {
      "SaleLine": [
        {
          "saleLineID": "279",
          "createTime": "2016-11-10T11:05:25+00:00",
          "timeStamp": "2016-11-10T14:07:38+00:00",
          "unitQuantity": "-1",
          "unitPrice": "9.99",
          "normalUnitPrice": "0",
          "discountAmount": "0",
          "discountPercent": "0",
          "avgCost": "3.2",
          "fifoCost": "2",
          "tax": "true",
          "tax1Rate": "0.05",
          "tax2Rate": "0.09975",
          "isLayaway": "false",
          "isWorkorder": "false",
          "isSpecialOrder": "false",
          "displayableSubtotal": "-9.99",
          "displayableUnitPrice": "9.99",
          "calcLineDiscount": "0",
          "calcTransactionDiscount": "0",
          "calcTotal": "-11.4860025",
          "calcSubtotal": "-9.99",
          "calcTax1": "-0.4995",
          "calcTax2": "-0.9965025",
          "taxClassID": "6",
          "customerID": "0",
          "discountID": "0",
          "employeeID": "2",
          "itemID": "12",
          "noteID": "0",
          "parentSaleLineID": "275",
          "shopID": "1",
          "saleID": "282"
        },
        {
          "saleLineID": "280",
          "createTime": "2016-11-10T11:05:25+00:00",
          "timeStamp": "2016-11-10T14:07:38+00:00",
          "unitQuantity": "-1",
          "unitPrice": "20",
          "normalUnitPrice": "0",
          "discountAmount": "0",
          "discountPercent": "0",
          "avgCost": "11.75",
          "fifoCost": "12",
          "tax": "true",
          "tax1Rate": "0.05",
          "tax2Rate": "0.09975",
          "isLayaway": "false",
          "isWorkorder": "false",
          "isSpecialOrder": "false",
          "displayableSubtotal": "-20",
          "displayableUnitPrice": "20",
          "calcLineDiscount": "0",
          "calcTransactionDiscount": "0",
          "calcTotal": "-22.995",
          "calcSubtotal": "-20",
          "calcTax1": "-1",
          "calcTax2": "-1.995",
          "taxClassID": "6",
          "customerID": "0",
          "discountID": "0",
          "employeeID": "2",
          "itemID": "28",
          "noteID": "0",
          "parentSaleLineID": "276",
          "shopID": "1",
          "saleID": "282"
        }
      ]
    },
    "SalePayments": {
      "SalePayment": {
        "salePaymentID": "172",
        "amount": "-34.48",
        "tipAmount": "0",
        "createTime": "2016-11-10T14:07:38+00:00",
        "archived": "false",
        "remoteReference": "",
        "paymentID": "",
        "saleID": "282",
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
    },
    "taxTotal": "-4.49"
  }
}
```

With this example, the entire Sale will be refunded. When using the Account.Sale.Refund endpoint, all of the `SaleLine` records will be generated automatically. Sales created through the Account.Sale.Refund endpoint will be created as completed by default. As such, if they are unbalanced, the request will fail.

It is necessary to specify the `paymentTypeID` of the payment method to use for the refund. However, the `amount` field can be omitted which will cause the entire total of the original Sale to be refunded.

---

# Partial Refunds

> Example Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "SaleLines": {
      "SaleLine": {
        "unitQuantity": -1,
        "itemID": 12,
        "parentSaleLineID": 279
      }
    },
    "SalePayments": {
      "SalePayment": {
        "amount": -11.49,
        "paymentTypeID": 1
      }
    }
}
```

> Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Sale": {
    "saleID": "302",
    "timeStamp": "2016-11-15T20:59:51+00:00",
    "discountPercent": "0",
    "completed": "false",
    "archived": "false",
    "voided": "false",
    "enablePromotions": "false",
    "isTaxInclusive": "false",
    "createTime": "2016-11-15T20:59:51+00:00",
    "updateTime": "2016-11-15T20:59:51+00:00",
    "referenceNumber": "",
    "referenceNumberSource": "",
    "tax1Rate": "0.05",
    "tax2Rate": "0.09975",
    "change": "0",
    "tipEnabled": "true",
    "receiptPreference": "printed",
    "displayableSubtotal": "0",
    "ticketNumber": "220000000302",
    "calcDiscount": "0",
    "calcTotal": "0",
    "calcSubtotal": "0",
    "calcTaxable": "0",
    "calcNonTaxable": "0",
    "calcAvgCost": "0",
    "calcFIFOCost": "0",
    "calcTax1": "0",
    "calcTax2": "0",
    "calcPayments": "-11.49",
    "calcTips": "0",
    "total": "0",
    "totalDue": "0",
    "displayableTotal": "0",
    "balance": "11.49",
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
      "timeStamp": "2016-09-28T15:43:22+00:00",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "zebraBrowserPrint": "false",
      "contactID": "4",
      "taxCategoryID": "1",
      "receiptSetupID": "1",
      "vendorID": "0",
      "ccGatewayID": "3",
      "gatewayConfigID": "3",
      "priceLevelID": "1"
    },
    "TaxCategory": {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "James Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.09975",
      "timeStamp": "2016-08-08T19:15:44+00:00",
      "TaxCategoryClasses": {
        "TaxCategoryClass": [
          {
            "taxCategoryClassID": "2",
            "tax1Rate": "0",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "2"
          },
          {
            "taxCategoryClassID": "4",
            "tax1Rate": "0.05",
            "tax2Rate": "0",
            "timeStamp": "2014-05-05T13:12:12+00:00",
            "taxCategoryID": "1",
            "taxClassID": "4"
          }
        ]
      }
    },
    "SalePayments": {
      "SalePayment": {
        "salePaymentID": "182",
        "amount": "-11.49",
        "tipAmount": "0",
        "createTime": "2016-11-15T20:59:51+00:00",
        "archived": "false",
        "remoteReference": "",
        "paymentID": "",
        "saleID": "302",
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
    },
    "taxTotal": "0"
  }
}
```

To perform a partial refund of a Sale, create a new sale with a POST request to `Account.Sale` and specify the `parentSaleLineID` for each line that is a refund.
