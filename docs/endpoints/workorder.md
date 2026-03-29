---
title: Workorder
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder/
---

# Workorder

#### Description

A service or repair ticker for a customer. Records the work that needs to be done and is done to a customer’s item (stored as a serialized entry). Contains WorkorderLines which are tasks and misc. charges, and WorkorderItems which are parts used during the repair.

#### User Interface

- Service → Workorders
- Register → New Sale → Customer → attach a customer → Register → New Workorder or Workorders tab of the sale for existing workorders.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### Additional Relations

- Customer
- Employee
- Serialized
- Discount
- WorkorderStatus
- WorkorderLines
- WorkorderLines.Discount
- WorkorderLines.TaxClass
- WorkorderItems
- WorkorderItems.Discount
- Images

#### Workorder Fields

| workorderID | (integer) The unique numerical ID for the workorder. /API/V3/Account/{accountID}/Workorder/{workorderID} |
| --- | --- |
| timeIn | (datetime) The date/time this workorder was received. |
| etaOut | (datetime) The date/time this workorder is expected to be finished at. |
| note | (string) Overall notes for this workorder. |
| internalNote | (string) Internal notes for this workorder. |
| warranty | (boolean) Whether this workorder is covered by a warranty. If it is, the customer will not be charged. |
| tax | (boolean) Does this workorder have tax charged on it. |
| archived | (boolean) True if this workorder is archived. Archived workorders are hidden and not counted towards totals anywhere. |
| hookIn | (string) The storage location where the item will be saved when it is ready for work to be done on it. |
| hookOut | (string) The storage location where the item will be saved when it is done and ready for pickup. |
| saveParts | (boolean) Indicates the customer wants the parts removed from the item saved for pickup with the workorder. |
| assignEmployeeToAll | (boolean) Whether the employee for this workorder should be automatically applied to all the lines. |
| customerID | (integer) The foreign key for the customer this workorder is for. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign key for the discount for this workorder. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign key for the employee who is incharge of this workorder. /API/V3/Account/{accountID}/Employee/{employeeID} |
| serializedID | (integer) The foreign key for the serialized entry for the part/item being worked on. /API/V3/Account/{accountID}/Serialized/{serializedID} |
| shopID | (integer) The foreign key for the shop where this workorder is going to be performed. /API/V3/Account/{accountID}/Shop/{shopID} |
| saleID | (integer) The foreign key for the sale this workorder was completed and paid for on. /API/V3/Account/{accountID}/Sale/{saleID} |
| saleLineID | (integer) The foreign key for the sale line for this workorder. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
| workorderStatusID | (integer) The foreign key for the status of this workorder. /API/V3/Account/{accountID}/WorkorderStatus/{workorderStatusID} |
| Customer | (object) The customer this workorder is for. /API/V3/Account/{accountID}/Customer |
| Discount | (object) The discount for this workorder. /API/V3/Account/{accountID}/Discount |
| Employee | (object) The employee who is in charge of this workorder. /API/V3/Account/{accountID}/Employee |
| Serialized | (object) The serialized entry for the part/item being worked on. /API/V3/Account/{accountID}/Serialized |
| WorkorderStatus | (object) The status of this workorder. /API/V3/Account/{accountID}/WorkorderStatus |
| WorkorderItems | (object) The item line charges on this workorder. /API/V3/Account/{accountID}/WorkorderItem |
| WorkorderLines | (object) The other charges, including labor/tasks, on this workorder. /API/V3/Account/{accountID}/WorkorderLine |
| Images | (object) The images attached to this workorder. /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- workorderID
- timeStamp

#### See Also

- [Customer](https://developers.lightspeedhq.com/retail/endpoints/Customer/#customer-fields)
- [Employee](https://developers.lightspeedhq.com/retail/endpoints/Employee/#employee-fields)
- [Serialized](https://developers.lightspeedhq.com/retail/endpoints/Serialized/#serialized-fields)
- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discount-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)
- [WorkorderStatus](https://developers.lightspeedhq.com/retail/endpoints/WorkorderStatus/#workorderstatus-fields)
- [WorkorderItem](https://developers.lightspeedhq.com/retail/endpoints/Workorder_WorkorderItem/#workorderitem-fields)
- [WorkorderLine](https://developers.lightspeedhq.com/retail/endpoints/Workorder_WorkorderLine/#workorderline-fields)
- [WorkorderImage](https://developers.lightspeedhq.com/retail/endpoints/Workorder_WorkorderImage/#workorderimage-fields)

---

### GET All workorders

Retrieve a list of all workorders in the account

> Definition

```
GET /API/V3/Account/{accountID}/Workorder.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Workorder": [
    {
      "workorderID": "1",
      "systemSku": "250000000001",
      "timeIn": "2021-10-25T15:11:28+00:00",
      "etaOut": "2021-10-25T15:11:28+00:00",
      "note": "",
      "internalNote": "",
      "warranty": "true",
      "tax": "false",
      "archived": "false",
      "hookIn": "",
      "hookOut": "",
      "saveParts": "true",
      "assignEmployeeToAll": "false",
      "timeStamp": "2021-10-25T15:27:43+00:00",
      "customerID": "2",
      "discountID": "0",
      "employeeID": "4",
      "serializedID": "1",
      "shopID": "1",
      "saleID": "110",
      "saleLineID": "85",
      "workorderStatusID": "5"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single workorder

Retrieve a single workorder by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Workorder": {
    "workorderID": "2",
    "systemSku": "250000000002",
    "timeIn": "2021-04-03T16:00:48+00:00",
    "etaOut": "2021-04-03T16:00:48+00:00",
    "note": "",
    "internalNote": "",
    "warranty": "true",
    "tax": "false",
    "archived": "false",
    "hookIn": "",
    "hookOut": "",
    "saveParts": "false",
    "assignEmployeeToAll": "true",
    "timeStamp": "2021-04-03T16:02:59+00:00",
    "customerID": "2",
    "discountID": "0",
    "employeeID": "1",
    "serializedID": "1",
    "shopID": "2",
    "saleID": "0",
    "saleLineID": "138",
    "workorderStatusID": "4"
  }
}
```

#### Attributes

| workorderID | (integer) The unique numerical ID for the workorder. Required Field |
| --- | --- |

---

### POST Create a workorder

Create a workorder based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "timeIn": "2021-04-03T16:00:48+00:00",
        "etaOut": "2021-04-03T16:00:48+00:00",
        "note": "",
        "internalNote": "",
        "warranty": "true",
        "hookIn": "",
        "hookOut": "",
        "saveParts": "false",
        "assignEmployeeToAll": "true",
        "customerID": "2",
        "discountID": "0",
        "employeeID": "1",
        "serializedID": "0",
        "shopID": "2",
        "workorderStatusID": "4"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Workorder": {
    "workorderID": "2",
    "systemSku": "250000000002",
    "timeIn": "2021-04-03T16:00:48+00:00",
    "etaOut": "2021-04-03T16:00:48+00:00",
    "note": "",
    "internalNote": "",
    "warranty": "true",
    "tax": "false",
    "archived": "false",
    "hookIn": "",
    "hookOut": "",
    "saveParts": "false",
    "assignEmployeeToAll": "true",
    "timeStamp": "2021-04-03T16:02:59+00:00",
    "customerID": "2",
    "discountID": "0",
    "employeeID": "1",
    "serializedID": "1",
    "shopID": "2",
    "saleID": "0",
    "saleLineID": "138",
    "workorderStatusID": "4"
  }
}
```

#### Attributes

| timeIn | (datetime) The date/time this workorder was received. |
| --- | --- |
| etaOut | (datetime) The date/time this workorder is expected to be finished at. |
| note | (string) Overall notes for this workorder. |
| internalNote | (string) Internal notes for this workorder. |
| warranty | (boolean) Whether this workorder is covered by a warranty. If it is, the customer will not be charged. |
| hookIn | (string) The storage location where the item will be saved when it is ready for work to be done on it. |
| hookOut | (string) The storage location where the item will be saved when it is done and ready for pickup. |
| saveParts | (boolean) Indicates the customer wants the parts removed from the item saved for pickup with the workorder. |
| assignEmployeeToAll | (boolean) Whether the employee for this workorder should be automatically applied to all the lines. |
| customerID | (integer) The foreign key for the customer this workorder is for. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign key for the discount for this workorder. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign key for the employee who is incharge of this workorder. /API/V3/Account/{accountID}/Employee/{employeeID} |
| serializedID | (integer) The foreign key for the serialized entry for the part/item being worked on. /API/V3/Account/{accountID}/Serialized/{serializedID} |
| shopID | (integer) The foreign key for the shop where this workorder is going to be performed. /API/V3/Account/{accountID}/Shop/{shopID} |
| workorderStatusID | (integer) The foreign key for the status of this workorder. /API/V3/Account/{accountID}/WorkorderStatus/{workorderStatusID} |

---

### PUT Update a workorder

Update an existing workorder based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Workorder/{workorderID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "timeIn": "2021-04-03T16:00:48+00:00",
        "etaOut": "2021-04-03T16:00:48+00:00",
        "note": "",
        "internalNote": "",
        "warranty": "false",
        "hookIn": "",
        "hookOut": "",
        "saveParts": "false",
        "assignEmployeeToAll": "false",
        "customerID": "2",
        "employeeID": "1",
        "serializedID": "0",
        "shopID": "2",
        "workorderStatusID": "4"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Workorder": {
    "workorderID": "2",
    "systemSku": "250000000002",
    "timeIn": "2021-04-03T16:00:48+00:00",
    "etaOut": "2021-04-03T16:00:48+00:00",
    "note": "",
    "internalNote": "",
    "warranty": "true",
    "tax": "false",
    "archived": "false",
    "hookIn": "",
    "hookOut": "",
    "saveParts": "false",
    "assignEmployeeToAll": "true",
    "timeStamp": "2021-04-03T16:02:59+00:00",
    "customerID": "2",
    "discountID": "0",
    "employeeID": "1",
    "serializedID": "1",
    "shopID": "2",
    "saleID": "0",
    "saleLineID": "138",
    "workorderStatusID": "4"
  }
}
```

#### Attributes

| workorderID | (integer) The unique numerical ID for the workorder. Required Field |
| --- | --- |
| timeIn | (datetime) The date/time this workorder was received. |
| etaOut | (datetime) The date/time this workorder is expected to be finished at. |
| note | (string) Overall notes for this workorder. |
| internalNote | (string) Internal notes for this workorder. |
| warranty | (boolean) Whether this workorder is covered by a warranty. If it is, the customer will not be charged. |
| hookIn | (string) The storage location where the item will be saved when it is ready for work to be done on it. |
| hookOut | (string) The storage location where the item will be saved when it is done and ready for pickup. |
| saveParts | (boolean) Indicates the customer wants the parts removed from the item saved for pickup with the workorder. |
| assignEmployeeToAll | (boolean) Whether the employee for this workorder should be automatically applied to all the lines. |
| customerID | (integer) The foreign key for the customer this workorder is for. /API/V3/Account/{accountID}/Customer/{customerID} |
| discountID | (integer) The foreign key for the discount for this workorder. /API/V3/Account/{accountID}/Discount/{discountID} |
| employeeID | (integer) The foreign key for the employee who is incharge of this workorder. /API/V3/Account/{accountID}/Employee/{employeeID} |
| serializedID | (integer) The foreign key for the serialized entry for the part/item being worked on. /API/V3/Account/{accountID}/Serialized/{serializedID} |
| shopID | (integer) The foreign key for the shop where this workorder is going to be performed. /API/V3/Account/{accountID}/Shop/{shopID} |
| workorderStatusID | (integer) The foreign key for the status of this workorder. /API/V3/Account/{accountID}/WorkorderStatus/{workorderStatusID} |

---

### DELETE Archive a workorder

Archive an existing workorder by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Workorder/{Workorder}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}.json"
```

> Sample JSON Response

```json
{
  "name": "Workorder",
  "primaryID": "2"
}
```

#### Attributes

| workorderID | (integer) The unique numerical ID for the workorder. |
| --- | --- |

---
