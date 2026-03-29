---
title: Workorder WorkorderItem
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder-WorkorderItem/
---

# Workorder WorkorderItem

#### Description

The charges on a Workorder for products used during the repair/service.

#### User Interface

- Service → Workorders → edit Workorder / New Workorder → Add an item to the workorder

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### Additional Relations

- Discount

#### WorkorderItem Fields

| workorderItemID | (integer) The unique numerical ID for the workorder item. /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItemID} |
| --- | --- |
| approved | (boolean) Whether the customer has approved this charge. |
| unitPrice | (float) The per unit retail price the item is being sold at. |
| unitQuantity | (integer) The quantity being used/sold. |
| warranty | (boolean) Whether this item is a warranty covered item. If so then the customer will not be charged. |
| tax | (boolean) Whether this line is taxed. |
| isSpecialOrder | (boolean) Whether this item is being special ordered. If true then a special order will be created for this item line. Related to through the SaleLine |
| note | (string) Notes for this workorder item line. |
| workorderID | (integer) The foreign key for the workorder this line item is on. /API/V3/Account/{accountID}/Workorder/{workorderID} |
| employeeID | (integer) The foreign key for the Employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| saleLineID | (integer) The foreign key for the SaleLine this workorder item is represented by on the register/sale. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
| saleID | (integer) The foreign key for the Sale where this workorder was completed/paid for on. /API/V3/Account/{accountID}/Sale/{saleID} |
| itemID | (integer) The foreign key for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| discountID | (integer) The foreign key for the discount applied to this charge. /API/V3/Account/{accountID}/Discount/{discountID} |
| Discount | (object) The discount applied to this charge. /API/V3/Account/{accountID}/Discount |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- workorderItemID
- timeStamp

#### See Also

- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discount-fields)

---

### GET All workorder items

Retrieve a list of all workorder items in the account

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderItem": [
    {
      "workorderItemID": "1",
      "approved": "false",
      "unitPrice": "124.97",
      "unitQuantity": "1",
      "warranty": "false",
      "tax": "true",
      "isSpecialOrder": "false",
      "note": "",
      "timeStamp": "2021-10-25T15:27:34+00:00",
      "workorderID": "1",
      "employeeID": "1",
      "saleLineID": "86",
      "saleID": "110",
      "itemID": "7",
      "discountID": "0"
    },
    {...}
  ]
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this line item is on. Required Field |
| --- | --- |

---

### GET Single workorder item

Retrieve a single workorder item by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItemID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItemID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderItem": {
    "workorderItemID": "2",
    "approved": "false",
    "unitPrice": "500",
    "unitQuantity": "1",
    "warranty": "false",
    "tax": "true",
    "isSpecialOrder": "false",
    "note": "",
    "timeStamp": "2021-04-03T16:02:55+00:00",
    "workorderID": "2",
    "employeeID": "1",
    "saleLineID": "139",
    "saleID": "0",
    "itemID": "22",
    "discountID": "3"
  }
}
```

#### Attributes

| workorderItemID | (integer) The unique numerical ID for the workorder item. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this line item is on. Required Field |

---

### POST Create a workorder item

Create a workorder item based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "approved": "false",
        "unitPrice": "124.97",
        "unitQuantity": "1",
        "warranty": "false",
        "tax": "true",
        "isSpecialOrder": "false",
        "note": "",
        "employeeID": "1",
        "itemID": "7",
        "discountID": "0"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderItem": {
    "workorderItemID": "1",
    "approved": "false",
    "unitPrice": "124.97",
    "unitQuantity": "1",
    "warranty": "false",
    "tax": "true",
    "isSpecialOrder": "false",
    "note": "",
    "timeStamp": "2021-10-25T15:27:34+00:00",
    "workorderID": "1",
    "employeeID": "1",
    "saleLineID": "86",
    "saleID": "0",
    "itemID": "7",
    "discountID": "0"
  }
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this line item is on. Required Field |
| --- | --- |
| approved | (boolean) Whether the customer has approved this charge. |
| unitPrice | (float) The per unit retail price the item is being sold at. |
| unitQuantity | (integer) The quantity being used/sold. |
| warranty | (boolean) Whether this item is a warranty covered item. If so then the customer will not be charged. |
| tax | (boolean) Whether this line is taxed. |
| isSpecialOrder | (boolean) Whether this item is being special ordered. If true then a special order will be created for this item line. Related to through the SaleLine |
| note | (string) Notes for this workorder item line. |
| employeeID | (integer) The foreign key for the Employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign key for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| discountID | (integer) The foreign key for the discount applied to this charge. /API/V3/Account/{accountID}/Discount/{discountID} |

---

### PUT Update a workorder item

Update a workorder item based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItem}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "approved": "false",
        "unitPrice": "124.97",
        "unitQuantity": "1",
        "warranty": "false",
        "tax": "true",
        "isSpecialOrder": "false",
        "note": "",
        "employeeID": "1",
        "itemID": "7",
        "discountID": "0"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderItem": {
    "workorderItemID": "1",
    "approved": "false",
    "unitPrice": "124.97",
    "unitQuantity": "1",
    "warranty": "false",
    "tax": "true",
    "isSpecialOrder": "false",
    "note": "",
    "timeStamp": "2021-10-25T15:27:34+00:00",
    "workorderID": "1",
    "employeeID": "1",
    "saleLineID": "86",
    "saleID": "0",
    "itemID": "7",
    "discountID": "0"
  }
}
```

#### Attributes

| workorderItemID | (integer) The unique numerical ID for the workorder item. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this line item is on. Required Field |
| approved | (boolean) Whether the customer has approved this charge. |
| unitPrice | (float) The per unit retail price the item is being sold at. |
| unitQuantity | (integer) The quantity being used/sold. |
| warranty | (boolean) Whether this item is a warranty covered item. If so then the customer will not be charged. |
| tax | (boolean) Whether this line is taxed. |
| isSpecialOrder | (boolean) Whether this item is being special ordered. If true then a special order will be created for this item line. Related to through the SaleLine |
| note | (string) Notes for this workorder item line. |
| employeeID | (integer) The foreign key for the Employee responsible for this line. /API/V3/Account/{accountID}/Employee/{employeeID} |
| itemID | (integer) The foreign key for the item this line is a charge for. /API/V3/Account/{accountID}/Item/{itemID} |
| discountID | (integer) The foreign key for the discount applied to this charge. /API/V3/Account/{accountID}/Discount/{discountID} |

---

### DELETE Delete a workorder item

Permanently delete a workorder item based on given parameters.

> Definition

```
DELETE /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItem}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderItem/{workorderItemID}.json"
```

> Sample JSON Response

```json
{
  "name": "WorkorderItem",
  "primaryID": "2"
}
```

#### Attributes

| workorderItemID | (integer) The unique numerical ID for the workorder item. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this line item is on. Required Field |

---
