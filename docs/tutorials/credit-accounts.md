---
title: Credit Accounts
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/creditacounts/
---

# Credit Accounts

Credit accounts serve two purposes in Retail POS (R-Series): to provide credit accounts to customers, and to store gift card balances. Gift cards are covered in a [separate tutorial](https://developers.lightspeedhq.com/retail/tutorials/gift-cards/).

More information about customer credit accounts is available in the [user guide](https://retail-support.lightspeedhq.com/hc/en-us/articles/228840007-Creating-credit-accounts).

## Creating a Customer Credit Account

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
-X PUT -d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Customer/{CustomerID}.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount.json"

payload = "{See Below}"
headers = {"Authorization": "Bearer {Access Token}"}

response = requests.request("PUT", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/CreditAccount",
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array ("Authorization: Bearer {oauth_token}"),
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

> Example Payload:

```json
{
	"CreditAccount": {
		"name": "firstName lastName",
		"creditLimit": 100
	}
}
```

By default, customers have no credit account. To create one, the credit limit must be specified (use 0 for unlimited). The credit account name should also be set to avoid problems updating the credit account in the future. The name is usually the full name of the customer.

---

## Giving and Using Credit

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
```

> Example Request:

```json
{
    "employeeID": 2,
    "registerID": 5,
    "shopID": 1,
    "customerID": 2,
    "completed": true,
    "SaleLines": {
        "SaleLine": {
            "itemID": 0,
            "note": "Store Credit",
            "unitQuantity": 1,
            "unitPrice": -100,
            "taxClassID": 0,
            "avgCost": 0,
            "fifoCost": 0
        }
    },
    "SalePayments": {
    	"SalePayment": {
    		"amount": -100,
    		"paymentTypeID": 4,
    		"creditAccountID": 11
    	}
    }
}
```

To give a customer credit, a payment must be applied on a completed sale. This payment has to be balanced by another payment (a deposit) or an item. In this example, a miscellaneous item is used to give the customer store credit.

When using credit accounts as a payment method, the `paymentTypeID` is always `4`, and you must provide the `creditAccountID`.

When a customer is carrying a balance owed to the store, their account balance is negative. If they are carrying store credit to be redeemed on a future purchase, the amount is positive.
