---
title: Inventory Transfer TransferItems
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/
---

# Inventory Transfer TransferItems

#### Description

Read, create, update or delete line items on a specific [transfer](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer).

Adding an item to a transfer doesn’t affect its inventory. Inventory will only change when the transfer is received and completed.

#### User Interface

- Inventory → Transfers

#### Available Actions

- [GET Read Multiple](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#get-all-transfersitems-on-a-transfer)
- [GET Read Single](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#get-single-transferitem)
- [POST Create (single or multiple)](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#post-add-items-to-a-transfer)
- [POST Update Multiple)](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#post-update-multiple-transfer-items-on-a-transfer)
- [POST Delete Multiple](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#post-delete-multiple-transfer-items-on-a-transfer)

#### Scopes Required

| employee:transfers | true |
| --- | --- |

#### Additional Relations

None

#### TransferItem Fields

| transferItemID | (integer) The unique numerical ID for the transfer item. |
| --- | --- |
| toSend | (integer) The quantity the shop is sending. |
| toReceive | (integer) The quantity the receiving shop has counted as received. |
| sent | (integer) The actual number sent (sent - received is number in transit). |
| received | (integer) The actual number received. |
| sentValue | (float) The inventory cost total value of all the quantity sent. |
| receivedValue | (float) The inventory cost total value of all the quantity received. |
| comment | (string) A comment note about the transfer line. |
| timeStamp | (datetime) Date/time the record was last modified. |
| transferID | (integer) The unique numerical ID for transfer that this line is on. |
| itemID | (integer) The unique numerical ID for the item. |

#### Sortable Fields

- transferItemID
- timeStamp
- transferID

---

### GET All TransfersItems on a Transfer

Retrieve a list of all items on a specific transfer.

> Definition

```
GET /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/TransferItems.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/TransferItems.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "next": "",
        "previous": ""
    },
    "TransferItem": [
        {
            "transferItemID": "11",
            "toSend": "1",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the first transfer item",
            "timeStamp": "2021-01-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "12"
        },
        {
            "transferItemID": "12",
            "toSend": "3",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the second transfer item",
            "timeStamp": "2021-05-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "28"
        }
    ]
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |

---

### GET Single TransferItem

Retrieve a single transfer item by itemID.

> Definition

```
GET /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/TransferItems/{transferItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/TransferItems/{transferItemID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "TransferItem": {
        "transferItemID": "11",
        "toSend": "1",
        "toReceive": "0",
        "sent": "0",
        "received": "0",
        "sentValue": "0",
        "receivedValue": "0",
        "comment": "a note about the transfer item",
        "timeStamp": "2021-01-29T13:52:36+00:00",
        "transferID": "10",
        "itemID": "12"
    }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |
| itemID | (integer) The unique numerical ID for the item. Required Field |

---

### POST Add Items to a Transfer

Add items to a specific transfer. You can add up to 100 items per payload.

You need to use the format shown here, even when adding just one item. Also, a given item can only appear once on a transfer.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/AddItems.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "TransferItems":
	[
		{
			"toSend":"1",
			"itemID":"12"
		},
		{
			"toSend":"3",
			"itemID":"28"
		}
	]
}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/AddItems.json"
```

> Sample JSON Response

```json
{
    "TransferItem": [
        {
            "transferItemID": "11",
            "toSend": "1",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the first transfer item",
            "timeStamp": "2021-01-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "12"
        },
        {
            "transferItemID": "12",
            "toSend": "3",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the second transfer item",
            "timeStamp": "2021-05-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "28"
        }
    ]
}
```

#### Attributes

| toSend | (integer) The quantity to be sent. Required Field |
| --- | --- |
| itemID | (integer) The unique numerical ID for the item. Required Field |

---

### POST Update Multiple TransferItems on a Transfer

Update transfer items to a specific transfer. You can update up to 100 transfer items per payload. TransferItems cannot be modified after the transfer is sent.

You need to use the format shown here, even when updating just one item. The itemID in the payload is used to determine which transfer item is updated; it can’t be modified.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/UpdateItems.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "TransferItems":
	[
		{
			"toSend":"3",
			"itemID":"12"
		},
		{
			"toSend":"4",
			"itemID":"28"
		}
	]
}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/UpdateItems.json"
```

> Sample JSON Response

```json
{
    "TransferItem": [
        {
            "transferItemID": "11",
            "toSend": "3",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the first transfer item",
            "timeStamp": "2021-01-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "12"
        },
        {
            "transferItemID": "12",
            "toSend": "4",
            "toReceive": "0",
            "sent": "0",
            "received": "0",
            "sentValue": "0",
            "receivedValue": "0",
            "comment": "a note about the second transfer item",
            "timeStamp": "2021-05-29T13:52:36+00:00",
            "transferID": "10",
            "itemID": "28"
        }
    ]
}
```

#### Attributes

| toSend | (integer) The quantity to be sent. Required Field |
| --- | --- |
| itemID | (integer) The unique numerical ID for the item. Required Field |

---

### POST Delete Multiple TransferItems from a Transfer

Delete transfer items from a specific transfer. You can delete up to 100 transfer items per payload. TransferItems cannot be deleted after the transfer is sent.

You need to use the format shown here, even when deleting just one item.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/DeleteItems.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "TransferItems":
	[
		{
			"itemID":"12"
		},
		{
			"itemID":"28"
		}
	]
}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/DeleteItems.json"
```

> Sample JSON Response

```json
{
    "TransferItem": {
        "transferItemID": "11",
        "toSend": "3",
        "toReceive": "0",
        "sent": "0",
        "received": "0",
        "sentValue": "0",
        "receivedValue": "0",
        "comment": "a note about the first transfer item",
        "timeStamp": "2021-01-29T13:52:36+00:00",
        "transferID": "10",
        "itemID": "12"
    }
}
```

#### Attributes

| itemID | (integer) The unique numerical ID for the item. Required Field |
| --- | --- |
