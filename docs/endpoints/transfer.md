---
title: Transfer
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Transfer/
---

# Transfer

This endpoint has been deprecated and should be used for backwards compatibility only. New integrations should make use of the [transfer](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer) endpoint.

#### Description

Transfers between Shops. Gives the ability to take inventory out of one shop and then check it in at another shop.

#### User Interface

- Inventory → Transfers

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:transfers | true |
| --- | --- |

#### Additional Relations

- TransferItems

#### Transfer Fields

| transferID | (integer) The unique numerical ID for the transfer. |
| --- | --- |
| sent | (boolean) Whether the transfer has been sent from the origin store. |
| received | (boolean) Whether the transfer has been received by the receiving store. |
| note | (integer) Text notes for the store. |
| archived | (integer) Whether this transfer is archived/done. |
| transferFromID | (integer) The foreign ID for the record that holds the relation to the shop the order is being transfered from (origin store). |
| transferToID | (integer) The foreign ID for the record that holds the relation to the shop the order is being received at. |
| orderID | (integer) The foreign ID for the Order this transfer was added to for centralized ordering. |
| TransferFrom | (object) The record that holds the relation to the shop the order is being transfered from (origin store). |
| TransferTo | (object) The record that holds the relation to the shop the order is being received at. |
| TransferItems | (object) The list of items being transfered with their quantity and amount that is in transent vs to send vs received. /API/V3/Account/{accountID}/TransferItem |
| timeStamp | (datetime) Date/time the record was last modified. |

#### TransferFrom Fields

| transferFromID | (integer) The primary key.. |
| --- | --- |
| sentOn | (datetime) Date/time the transfer was sent. |
| employeeID | (integer) The foreign ID for the employee who sent this transfer. /API/V3/Account/{accountID}/Employee/{employeeID} |
| shopID | (integer) The foreign ID for the shop this transfer is from. /API/V3/Account/{accountID}/Shop/{shopID} |

#### TransferTo Fields

| transferToID | (integer) The unique numerical ID for the transfer to. |
| --- | --- |
| needBy | (datetime) Date/time the transfer is required to be received by, or the date it was received if it’s already been received. |
| employeeID | (integer) The foreign ID for the employee who received the transfer. /API/V3/Account/{accountID}/Employee/{employeeID} |
| shopID | (integer) The foreign ID for the shop this transfer is being sent to. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- transferID
- timeStamp

#### See Also

- [TransferItem](https://developers.lightspeedhq.com/retail/endpoints/TransferItem/#transferitem-fields)

---

### GET All transfers

Retrieve a list of all transfers in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Transfer.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Tranfser.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Transfer": [
    {
      "transferID": "1",
      "sent": "true",
      "received": "true",
      "note": "",
      "archived": "false",
      "timeStamp": "2021-06-10T14:16:47+00:00",
      "transferFromID": "1",
      "transferToID": "1",
      "orderID": "0"
    },
    {
      "transferID": "2",
      "sent": "false",
      "received": "false",
      "note": "",
      "archived": "false",
      "timeStamp": "2021-04-21T19:39:41+00:00",
      "transferFromID": "2",
      "transferToID": "2",
      "orderID": "0"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single Transfer

Retrieve a single transfer by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Transfer/{transferID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Transfer/{transferID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Transfer": {
    "transferID": "2",
    "sent": "false",
    "received": "false",
    "note": "",
    "archived": "false",
    "timeStamp": "2021-04-21T19:39:41+00:00",
    "transferFromID": "2",
    "transferToID": "2",
    "orderID": "0"
  }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |

---
