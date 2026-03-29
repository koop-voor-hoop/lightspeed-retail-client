---
title: TransferItem
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/TransferItem/
---

# TransferItem

This endpoint has been deprecated and should be used for backwards compatibility only. New integrations should make use of the [TransferItems](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems) endpoint.

#### Description

The individual line item for transfers.

#### User Interface

- Inventory → Transfers

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:transfers | true |
| --- | --- |

#### TransferItem Fields

| transferItemID | (integer) The unique numerical ID for the transfer Item. /API/V3/Account/{accountID}/TransferItem/{transferItemID} |
| --- | --- |
| toSend | (integer) The quantity the shop is sending. |
| toReceive | (integer) The quantity the recieving shop has counted as received. |
| sent | (integer) The actual number sent (sent - recieved is number in transit). |
| received | (integer) The actual number received. |
| sentValue | (float) The inventory cost total value of all the quantity sent. |
| receivedValue | (float) The inventory cost total value of all the quantity received. |
| comment | (string) A comment note about the transfer line. |
| transferID | (integer) The foreign ID for the transfer this line is apart of. /API/V3/Account/{accountID}/Transfer/{transferID} |
| itemID | (integer) The foreign ID for the item this line is for. /API/V3/Account/{accountID}/Item/{itemID} |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- transferItemID
- timeStamp
- transferID

---

### GET All Transfer Items

Retrieve a list of all transfer items in the account

> Definition

```
GET /API/V3/Account/{accountID}/TransferItem.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TransferItem.json"
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
      "transferItemID": "2",
      "toSend": "0",
      "toReceive": "0",
      "sent": "0",
      "received": "10",
      "sentValue": "0",
      "receivedValue": "3000",
      "comment": "",
      "timeStamp": "2021-06-10T14:16:47+00:00",
      "transferID": "1",
      "itemID": "5"
    },
    {
      "transferItemID": "3",
      "toSend": "1",
      "toReceive": "0",
      "sent": "0",
      "received": "0",
      "sentValue": "0",
      "receivedValue": "0",
      "comment": "",
      "timeStamp": "2021-04-21T19:39:35+00:00",
      "transferID": "2",
      "itemID": "47"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single transfer item

Retrieve a single transfer item by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/TransferItem/{transferItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TransferItem/{transferItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TransferItem": {
    "transferItemID": "2",
    "toSend": "0",
    "toReceive": "0",
    "sent": "0",
    "received": "10",
    "sentValue": "0",
    "receivedValue": "3000",
    "comment": "",
    "timeStamp": "2021-06-10T14:16:47+00:00",
    "transferID": "1",
    "itemID": "5"
  }
}
```

#### Attributes

| transferItemID | (integer) The unique numerical ID for the transfer Item. Required Field |
| --- | --- |
