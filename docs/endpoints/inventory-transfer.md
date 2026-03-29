---
title: Inventory Transfer
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/
---

# Inventory Transfer

#### Description

Transfers between Shops. Gives the ability to take inventory out of one shop and then check it in at another shop. For line items, see [Inventory Transfer TransferItems](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/).

Transfers can be created and sent with the API, but they can only be received and completed in the user interface.

#### User Interface

- Inventory → Transfers

#### Available Actions

- [GET Read Multiple](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#get-all-transfers)
- [GET Read Single](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#get-single-transfer)
- [POST Create](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#post-create-a-transfer)
- [PUT Update](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#put-update-a-transfer)
- [POST Archive](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#post-archive-a-transfer)
- [POST Restore](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#post-restore-a-transfer)
- [POST Send](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer/#post-send-a-transfer)

#### Scopes Required

| employee:transfers | true |
| --- | --- |

#### Additional Relations

- SendingShop
- SendingShop.Contact
- CreatedByEmployee
- CreatedByEmployee.Contact
- SentByEmployee
- SentByEmployee.Contact
- ReceivingShop
- ReceivingShop.Contact
- TransferItems*
- TransferItems.Item*

*Only when getting a single Transfer by ID

#### Transfer Fields

| transferID | (integer) The unique numerical ID for the transfer. |
| --- | --- |
| note | (string) Note on the transfer. |
| archived | (boolean) Is this transfer archived/done. |
| timeStamp | (datetime) Date/time the transfer was last modified. |
| createTime | (datetime) Date/time the transfer was last created. |
| status | (string) The status of the transfer (open, sent, or received). |
| sentOn | (datetime) Date/time the transfer was sent. |
| needBy | (datetime) Date/time the transfer is needed at the receiving location. |
| sendingShopID | (integer) The unique numerical identifier of the shop the transfer is being sent from. /API/V3/Account/{accountID}/Shop/{shopID} |
| sentByEmployeeID | (integer) The unique numerical identifier of the employee who sent the transfer. /API/V3/Account/{accountID}/Employee/{employeeID} |
| receivingShopID | (integer) The unique numerical identifier of the shop receiving the transfer. /API/V3/Account/{accountID}/Shop/{shopID} |

#### Sortable Fields

- transferID
- timeStamp

#### See Also

- [Inventory Transfer TransferItems](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems/#transferitem-fields)
- [Shop](https://developers.lightspeedhq.com/retail/endpoints/Shop/) for SendingShop and ReceivingShop
- [Employee](https://developers.lightspeedhq.com/retail/endpoints/Employee/) for SentByEmployee

---

### GET All Transfers

Retrieve a list of all transfers in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Inventory/Transfer.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer.json"
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
      "note": "Transfer note",
      "archived": "false",
      "timeStamp": "2021-01-29T21:19:43+00:00",
      "createTime": "2021-01-29T21:19:43+00:00",
      "status": "open",
      "sentOn": "2021-01-29T21:19:43+00:00",
      "needBy": "2021-01-29T21:19:43+00:00",
      "sendingShopID": "1",
      "sentByEmployeeID": "0",
      "receivingShopID": "2",
      "createdByEmployeeID": "1"
    },
    {
      "transferID": "2",
      "note": "Transfer note",
      "archived": "false",
      "timeStamp": "2021-01-30T12:00:32+00:00",
      "createTime": "2021-01-30T12:00:32+00:00",
      "status": "open",
      "sentOn": "2021-01-30T12:00:32+00:00",
      "needBy": "2021-01-30T12:00:32+00:00",
      "sendingShopID": "1",
      "sentByEmployeeID": "0",
      "receivingShopID": "2",
      "createdByEmployeeID": "1"
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
GET /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "note": "",
        "archived": "false",
        "timeStamp": "2021-01-29T21:19:43+00:00",
        "createTime": "2021-01-29T21:19:43+00:00",
        "status": "open",
        "sentOn": "2021-01-29T21:19:43+00:00",
        "needBy": "2021-01-29T21:19:43+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "0",
        "receivingShopID": "2",
        "createdByEmployeeID": "1"
    }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |

---

### POST Create a Transfer

Create a new Transfer

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
    "note": "transfer note",
    "archived": "false",
    "needBy": "2021-01-29T17:40:00+00:00",
    "sendingShopID": "1",
    "receivingShopID": "2"
}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "7",
        "note": "transfer note",
        "archived": "false",
        "timeStamp": "2021-05-08T15:01:50+00:00",
        "createTime": "2021-05-08T12:01:50+00:00",
        "status": "open",
        "needBy": "2021-01-29T17:40:00+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "0",
        "receivingShopID": "3",
        "createdByEmployeeID": "2",
        "SendingShop": {
            "shopID": "1",
            "name": "Shop 1",
            "serviceRate": "30",
            "timeZone": "US/Eastern",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-03-28T16:06:29+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "4",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "ccGatewayID": "3",
            "priceLevelID": "1"
        },
        "ReceivingShop": {
            "shopID": "2",
            "name": "Shop 2",
            "serviceRate": "20",
            "timeZone": "US/Eastern",
            "taxLabor": "true",
            "labelTitle": "Shop Name",
            "labelMsrp": "true",
            "archived": "false",
            "timeStamp": "2021-09-09T12:13:16+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "26",
            "taxCategoryID": "3",
            "receiptSetupID": "3",
            "ccGatewayID": "4",
            "priceLevelID": "3"
        },
        "CreatedByEmployee": {
            "employeeID": "2",
            "firstName": "Test",
            "lastName": "Employee",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-05-02T12:49:18+00:00",
            "contactID": "2",
            "systemUserID": "463362",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "1013",
            "lastRegisterID": "8"
        }
    }
}
```

#### Attributes

| note | (string) Note on the transfer. |
| --- | --- |
| needBy | (datetime) Date/time the transfer is needed at the receiving location. |
| sendingShopID | (integer) The unique numerical identifier of the shop the transfer is being sent from. /API/V3/Account/{accountID}/Shop/{shopID} |
| receivingShopID | (integer) The unique numerical identifier of the shop receiving the transfer. /API/V3/Account/{accountID}/Shop/{shopID} |

---

### PUT Update a Transfer

Update an existing Transfer. A transfer cannot be modified after it’s been sent.

It is not possible to change the status of the Transfer directly

To add TransferItem, use the [Inventory Transfer Items](https://developers.lightspeedhq.com/retail/endpoints/Inventory-Transfer-TransferItems)

> Definition

```
PUT /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "note": "some text",
    "needBy": "2021-01-30T17:40:00+00:00",
    "sendingShopID": "1",
    "receivingShopID": "2"
}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "note": "some text",
        "archived": "false",
        "timeStamp": "2021-01-30T12:10:53+00:00",
        "createTime": "2021-01-29T21:19:43+00:00",
        "status": "open",
        "sentOn": "",
        "needBy": "2021-01-30T17:40:00+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "0",
        "receivingShopID": "2",
        "createdByEmployeeID": "1",
        "SendingShop": {
            "shopID": "1",
            "name": "Shop 1",
            "serviceRate": "30",
            "timeZone": "US/Eastern",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-03-28T16:06:29+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "4",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "ccGatewayID": "3",
            "priceLevelID": "1"
        },
        "ReceivingShop": {
            "shopID": "2",
            "name": "Shop 2",
            "serviceRate": "20",
            "timeZone": "US/Eastern",
            "taxLabor": "true",
            "labelTitle": "Shop Name",
            "labelMsrp": "true",
            "archived": "false",
            "timeStamp": "2021-09-09T12:13:16+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "26",
            "taxCategoryID": "3",
            "receiptSetupID": "3",
            "ccGatewayID": "4",
            "priceLevelID": "3"
        },
        "CreatedByEmployee": {
            "employeeID": "2",
            "firstName": "Test",
            "lastName": "Employee",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-05-02T12:49:18+00:00",
            "contactID": "2",
            "systemUserID": "463362",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "1013",
            "lastRegisterID": "8"
        }
    }
}
```

#### Attributes

| note | (string) Note on the transfer. |
| --- | --- |
| needBy | (datetime) Date/time the transfer is needed at the receiving location. |
| sendingShopID | (integer) The unique numerical identifier of the shop the transfer is being sent from. /API/V3/Account/{accountID}/Shop/{shopID} |
| receivingShopID | (integer) The unique numerical identifier of the shop receiving the transfer. /API/V3/Account/{accountID}/Shop/{shopID} |

---

### POST Archive a Transfer

Archive an item by its ID.

Since the POST method requires a body, send an empty object: `{}` for JSON or `<Transfer></Transfer>` for XML.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Archive.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" -d "{}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Archive.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "note": "some text",
        "archived": "true",
        "timeStamp": "2021-01-30T12:10:53+00:00",
        "createTime": "2021-01-29T21:19:43+00:00",
        "status": "open",
        "sentOn": "",
        "needBy": "2021-01-30T17:40:00+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "0",
        "receivingShopID": "2",
        "createdByEmployeeID": "1",
        "SendingShop": {
            "shopID": "1",
            "name": "Shop 1",
            "serviceRate": "30",
            "timeZone": "US/Eastern",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-03-28T16:06:29+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "4",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "ccGatewayID": "3",
            "priceLevelID": "1"
        },
        "ReceivingShop": {
            "shopID": "2",
            "name": "Shop 2",
            "serviceRate": "20",
            "timeZone": "US/Eastern",
            "taxLabor": "true",
            "labelTitle": "Shop Name",
            "labelMsrp": "true",
            "archived": "false",
            "timeStamp": "2021-09-09T12:13:16+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "26",
            "taxCategoryID": "3",
            "receiptSetupID": "3",
            "ccGatewayID": "4",
            "priceLevelID": "3"
        },
        "CreatedByEmployee": {
            "employeeID": "2",
            "firstName": "Test",
            "lastName": "Employee",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-05-02T12:49:18+00:00",
            "contactID": "2",
            "systemUserID": "463362",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "1013",
            "lastRegisterID": "8"
        }
    }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |

---

### POST Restore a Transfer

Restore an item by its ID.

Since the POST method requires a body, send an empty object: `{}` for JSON or `<Transfer></Transfer>` for XML.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Restore.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" -d "{}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Restore.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "note": "some text",
        "archived": "false",
        "timeStamp": "2021-01-30T12:10:53+00:00",
        "createTime": "2021-01-29T21:19:43+00:00",
        "status": "open",
        "sentOn": "",
        "needBy": "2021-01-30T17:40:00+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "0",
        "receivingShopID": "2",
        "createdByEmployeeID": "1",
        "SendingShop": {
            "shopID": "1",
            "name": "Shop 1",
            "serviceRate": "30",
            "timeZone": "US/Eastern",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-03-28T16:06:29+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "4",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "ccGatewayID": "3",
            "priceLevelID": "1"
        },
        "ReceivingShop": {
            "shopID": "2",
            "name": "Shop 2",
            "serviceRate": "20",
            "timeZone": "US/Eastern",
            "taxLabor": "true",
            "labelTitle": "Shop Name",
            "labelMsrp": "true",
            "archived": "false",
            "timeStamp": "2021-09-09T12:13:16+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "26",
            "taxCategoryID": "3",
            "receiptSetupID": "3",
            "ccGatewayID": "4",
            "priceLevelID": "3"
        },
        "CreatedByEmployee": {
            "employeeID": "2",
            "firstName": "Test",
            "lastName": "Employee",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-05-02T12:49:18+00:00",
            "contactID": "2",
            "systemUserID": "463362",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "1013",
            "lastRegisterID": "8"
        }
    }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |

---

### POST Send a Transfer

Send a transfer by its ID.

Since the POST method requires a body, send an empty object: `{}` for JSON or `<Transfer></Transfer>` for XML.

> Definition

```
POST /API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Send.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" -d "{}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Inventory/Transfer/{transferID}/Send.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Transfer": {
        "transferID": "1",
        "note": "some text",
        "archived": "false",
        "timeStamp": "2021-01-31T15:10:12+00:00",
        "createTime": "2021-01-29T21:19:43+00:00",
        "status": "sent",
        "sentOn": "2021-01-31T15:10:12+00:00",
        "needBy": "2021-01-30T17:40:00+00:00",
        "sendingShopID": "1",
        "sentByEmployeeID": "2",
        "receivingShopID": "2",
        "createdByEmployeeID": "1",
        "SendingShop": {
            "shopID": "1",
            "name": "Shop 1",
            "serviceRate": "30",
            "timeZone": "US/Eastern",
            "taxLabor": "false",
            "labelTitle": "Shop Name",
            "labelMsrp": "false",
            "archived": "false",
            "timeStamp": "2021-03-28T16:06:29+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "4",
            "taxCategoryID": "1",
            "receiptSetupID": "1",
            "ccGatewayID": "3",
            "priceLevelID": "1"
        },
        "ReceivingShop": {
            "shopID": "2",
            "name": "Shop 2",
            "serviceRate": "20",
            "timeZone": "US/Eastern",
            "taxLabor": "true",
            "labelTitle": "Shop Name",
            "labelMsrp": "true",
            "archived": "false",
            "timeStamp": "2021-09-09T12:13:16+00:00",
            "companyRegistrationNumber": "",
            "vatNumber": "",
            "zebraBrowserPrint": "false",
            "contactID": "26",
            "taxCategoryID": "3",
            "receiptSetupID": "3",
            "ccGatewayID": "4",
            "priceLevelID": "3"
        },
        "CreatedByEmployee": {
            "employeeID": "2",
            "firstName": "Test",
            "lastName": "Employee",
            "lockOut": "false",
            "archived": "false",
            "timeStamp": "2021-05-02T12:49:18+00:00",
            "contactID": "2",
            "systemUserID": "463362",
            "clockInEmployeeHoursID": "0",
            "employeeRoleID": "4",
            "limitToShopID": "0",
            "lastShopID": "1",
            "lastSaleID": "1013",
            "lastRegisterID": "8"
        }
    }
}
```

#### Attributes

| transferID | (integer) The unique numerical ID for the transfer. Required Field |
| --- | --- |
