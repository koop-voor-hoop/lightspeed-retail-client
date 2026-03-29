---
title: Inventory Levels
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/inventory/
---

# Inventory Levels

Inventory levels for each item in each shop is stored in the `ItemShops` entity. Each `ItemShop` has a `shopID` indicating which shop the inventory data is for. There is also an `ItemShop` for each item with `shopID` of 0, which summarizes the total inventory levels of that item across all shops.

```shell
curl -X GET \
-H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemShop.json?sort=timeStamp&timeStamp=%3E%2C2017-11-10T12%3A00%3A00Z"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/ItemShop.json"

querystring = {
    "sort": "timeStamp",
    "timeStamp": ">,2017-11-10T12:00:00Z"
}

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("GET", url, params=querystring, headers=header)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemShop.json?sort=timeStamp&timeStamp=%3E%2C2017-11-10T12%3A00%3A00Z",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer {Access Token}"
  ),
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
        "next": "",
        "previous": ""
    },
    "ItemShop": [
        {
            "itemShopID": "897",
            "qoh": "33",
            "sellable": "33",
            "backorder": "0",
            "componentQoh": "0",
            "componentBackorder": "0",
            "onLayaway": "0",
            "onSpecialOrder": "0",
            "onWorkorder": "0",
            "onTransferOut": "2",
            "onTransferIn": "2",
            "averageCost": "17",
            "nextFifoLotID": "313086",
            "nextFifoLotCost": "20",
            "lastReceivedLotID": "313089",
            "lastReceivedCost": "20",
            "totalValueFifo": "631",
            "totalValueAvgCost": "595",
            "totalValueNegativeInventory": "0",
            "reorderPoint": "0",
            "reorderLevel": "0",
            "timeStamp": "2025-06-18T18:30:09+00:00",
            "itemID": "141",
            "shopID": "0"
        },
        {...}
    ]
}
```

If you want to find items whose inventory levels have changed recently, use the `timeStamp` field.

It is also possible to view the ItemShop details from the `Item` endpoint by loading the `ItemShops` relation.

---

There are several ways to adjust Inventory levels:

- [Purchase Orders](https://developers.lightspeedhq.com/#purchase-orders)
- [Inventory Counts](https://developers.lightspeedhq.com/#inventory-counts)
- [Adjusting ItemShops Directly](https://developers.lightspeedhq.com/#adjusting-itemshops-directly)

## Purchase Orders

Creating a purchase order is the best way to bring new stock into Retail POS.

### Create the Purchase Order

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Order.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Order.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Order.json",
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
	"vendorID": 2,
	"shopID": 1,
	"shipCost": 7.50
}
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Order": {
    "orderID": "14",
    "shipInstructions": "",
    "stockInstructions": "",
    "shipCost": "10",
    "otherCost": "0",
    "complete": "false",
    "archived": "false",
    "discount": "0",
    "totalDiscount": "0",
    "totalQuantity": "0",
    "timeStamp": "2016-11-08T17:03:21+00:00",
    "refNum": "",
    "vendorID": "2",
    "noteID": "0",
    "shopID": "1"
  }
}
```

A purchase order can be created with a POST request to [Order](https://developers.lightspeedhq.com/retail/endpoints/Order/).

Specifying the `shopID` of the shop intended to receive the inventory is required. Specifying a `vendorID` is recommended. Unlike with sales, purchase order lines cannot be added as part of the same request when creating the purchase order.

---

### Adding Items to the Purchase Order

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/OrderLine.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/OrderLine.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/OrderLine.json",
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
          "quantity": 24,
          "numReceived": 24,
          "price": 7,
          "originalPrice": 7,
          "itemID": 28,
          "orderID": 14
}
```

Items can be added to the purchase order using a POST request to [Account.OrderLine](https://developers.lightspeedhq.com/retail/endpoints/OrderLine/).

Specify the `orderID` (14 in this example) to put the items on the right purchase order. If the items have already been received, the `numReceived` quantity can be defined with the same request.

---

### Finishing the Purchase Order

The purchase order must now be finished in Retail POS (R-Series). If all the received quantities (`numReceived`) have been set through the API, an account user can complete this with the click of a button.

---

## Inventory Counts

An inventory count is appropriate when updating a lot of products that have incorrect inventory.

### Create the Count

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCount.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCount.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCount.json",
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
	"name": "API TEST COUNT",
	"shopID": 1
}
```

First, create the inventory count with a POST request to [InventoryCount](https://developers.lightspeedhq.com/retail/endpoints/InventoryCount/).

The `shopID` is required.

---

### Add Items

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountItem.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountItem.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountItem.json",
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
	"inventoryCountID": 3,
	"itemID": 12,
	"qty": 75,
	"employeeID": 2
}
```

Add items to the inventory count with POST requests to the [InventoryCountItem](https://developers.lightspeedhq.com/retail/endpoints/InventoryCountItem/) endpoint. Specify the `inventoryCountID` of the inventory count that the item should be added to.

The quantity on hand is not adjusted until the count is reconciled. The `employeeID` of the employee counting the item is required.

---

### Reconcile the Count

```shell
curl -X POST \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountReconcile.json"
```

```python
import requests

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountReconcile.json"

payload = "{See Below (can also be a Python dictionary)}"

headers = {"authorization": "Bearer {Access Token}"}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/InventoryCountReconcile.json",
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

```json
{
	"inventoryCountID": 3
}
```

The last step is to reconcile the inventory count with a POST request to [InventoryCountReconcile](https://developers.lightspeedhq.com/retail/endpoints/InventoryCountItem/).

It is possible to reconcile an individual item on the count by specifying an `itemID` in the request.

---

## Adjusting ItemShops Directly

This method is best for adjusting a few items with incorrect inventory levels.

### Get the ItemShop ID

```shell
curl -X GET \
-H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2?load_relations=["ItemShops"]'
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2?load_relations=["ItemShops"]',
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

url = 'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2?load_relations=["ItemShops"]'

payload = '{See Below (can also be a Python dictionary)}'

headers = {'authorization': 'Bearer {Access Token}'}

response = requests.request('POST', url, data=payload, headers=headers)

print(response.text)
```

> Example Response:

```json
{
  "@attributes": {
    "count": "1"
  },
  "Item": {
    "itemID": "2",
    	...
    "ItemShops": {
      "ItemShop": [
        {
          "itemShopID": "4",
          "qoh": "6",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "5",
          "reorderLevel": "10",
          "timeStamp": "2016-11-01T20:20:13+00:00",
          "itemID": "2",
          "shopID": "1",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        },
        {
          "itemShopID": "146",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2016-11-01T20:20:13+00:00",
          "itemID": "2",
          "shopID": "3",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        },
        {
          "itemShopID": "1660",
          "qoh": "0",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2016-11-01T20:20:13+00:00",
          "itemID": "2",
          "shopID": "5",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        },
        {
          "itemShopID": "8",
          "qoh": "6",
          "backorder": "0",
          "componentQoh": "0",
          "componentBackorder": "0",
          "reorderPoint": "0",
          "reorderLevel": "0",
          "timeStamp": "2016-11-01T20:20:13+00:00",
          "itemID": "2",
          "shopID": "0",
          "m": {
            "layaways": "0",
            "specialorders": "0",
            "workorders": "0"
          }
        }
      ]
    },
    "Prices": {
    	...
    }
  }
}
```

Inventory levels for items are stored in records called `ItemShops`. If an item has inventory in multiple shops, there will be an `ItemShop` entry for that item in each shop.

Either the `itemShopID` or `shopID` value is required to update the `ItemShop` record. The `ItemShops` are created by Retail POS as needed, so they might not exist for all item/shop combinations.

The `ItemShops` relation can be loaded while querying the [Item](https://developers.lightspeedhq.com/retail/endpoints/Item/) endpoint to find the `itemShopID` values for a given item.

---

```shell
curl -X PUT \
-H "Authorization: Bearer {Access Token}" \
-d '{See Below}' \
"https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2.json"
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "{See Below}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer {Access Token}",
    "content-type: application/json"
  ),
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

url = "https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item/2.json"

payload = "{See Below (can also be a Python dictionary)}"
headers = {
    'authorization': "Bearer {Access Token}",
    'content-type': "application/json"
    }

response = requests.request("PUT", url, data=payload, headers=headers)

print(response.text)
```

> Example Request:

```json
{
	"ItemShops": {
		"ItemShop": {
			"itemShopID": 4,
			"qoh": 3
		}
	}
}
```
