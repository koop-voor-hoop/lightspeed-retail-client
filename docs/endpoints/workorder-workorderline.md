---
title: Workorder WorkorderLine
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder-WorkorderLine/
---

# Workorder WorkorderLine

#### Description

The tasks/charges on a Workorder. Usually represents the labor tasks performed that are charged for. Items that are type ‘Non-Inventory’ and of TaxClass ‘Labor’ are counted as labor tasks instead of items on Workorders.

#### User Interface

- Service → Workorders → edit Workorder / New Workorder → Add a Labor charge.

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
- TaxClass

#### WorkorderLine Fields

| workorderLineID | (integer) The unique numerical ID for the workorder line. /API/V3/Account/{accountID}/WorkorderLine/{workorderLineID} |
| --- | --- |
| note | (string) Notes for this task/charge/oine. |
| timeStamp | (datetime) The date/time at which this task/charge was modified. |
| hours | (integer) The hours this task took, or is expected to take. |
| minutes | (integer) The minutes this task took, or is expected to take. |
| unitPriceOverride | (float) The retail price of this charge, per unit. If the set it overrides the shop hourly service rate. |
| unitQuantity | (integer) The unit quantity of this charge. Usually 1 for tasks. |
| unitCost | (float) The per unit cost to the business for this line/task/charge. |
| done | (boolean) Whether this task is complete. |
| approved | (boolean) Whether the customer has approved this charge. |
| warranty | (boolean) Whether this line/charge/task is covered under warranty. If true the customer will not be charged for this line. |
| tax | (boolean) Whether this line/charge is taxed. |
| workorderID | (integer) The foreign key for the workorder this task/charge belongs to. /API/V3/Account/{accountID}/Workorder/{workorderID} |
| employeeID | (integer) The foreign key for the employee responsible for this task/charge. /API/V3/Account/{accountID}/Employee/{employeeID} |
| saleLineID | (integer) The foreign key for the sale line that represents this task/charge on the register. /API/V3/Account/{accountID}/SaleLine/{saleLineID} |
| saleID | (integer) The foreign key for the sale where this task/charge was compeleted/paid for. /API/V3/Account/{accountID}/Sale/{saleID} |
| itemID | (integer) The foreign key for the Non-inventory TaxClass=Labor Item that was used to create this task/charge. /API/V3/Account/{accountID}/Item/{itemID} |
| discountID | (integer) The foreign key for the discount for this charge. /API/V3/Account/{accountID}/Discount/{discountID} |
| taxClassID | (integer) The foreign key for the TaxClass for this line. /API/V3/Account/{accountID}/TaxClass/{taxClassID} |
| Discount | (object) The discount for this charge. |
| TaxClass | (object) The TaxClass for this line. |

#### Sortable Fields

- workorderLineID
- timeStamp

#### See Also

- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discount-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)

---

### GET All workorder lines

Retrieve a list of all workorder lines

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderLine": [
    {
      "workorderLineID": "1",
      "note": "Labor",
      "timeStamp": "2021-04-24T15:45:24+00:00",
      "approved": "false",
      "warranty": "true",
      "hours": "1",
      "minutes": "0",
      "unitPriceOverride": "0",
      "done": "true",
      "unitQuantity": "1",
      "tax": "false",
      "unitCost": "35",
      "workorderID": "3",
      "employeeID": "1",
      "saleLineID": "145",
      "saleID": "0",
      "itemID": "0",
      "discountID": "0",
      "taxClassID": "2"
    },
    {...}
  ]
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this workorder line is on. Required Field |
| --- | --- |

---

### GET Single workorder lines

Retrieve a single workorder line by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine/{workorderLine}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine/{workorderLine}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderLine": {
    "workorderLineID": "2",
    "note": "Labor",
    "timeStamp": "2021-04-24T15:48:50+00:00",
    "approved": "false",
    "warranty": "false",
    "hours": "0",
    "minutes": "35",
    "unitPriceOverride": "0",
    "done": "false",
    "unitQuantity": "1",
    "tax": "false",
    "unitCost": "50",
    "workorderID": "4",
    "employeeID": "1",
    "saleLineID": "147",
    "saleID": "0",
    "itemID": "0",
    "discountID": "0",
    "taxClassID": "2"
  }
}
```

#### Attributes

| workorderLineID | (integer) The unique numerical ID for the workorder line. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this workorder line is on. Required Field |

---

### POST Create a workorder lines

Create a workorder line based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Workoder/{workorderID}/WorkorderLine/{workorderLine}.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "note": "Labor",
        "approved": "false",
        "warranty": "false",
        "hours": "0",
        "minutes": "35",
        "unitPriceOverride": "0",
        "done": "false",
        "unitQuantity": "1",
        "tax": "false",
        "unitCost": "50",
        "employeeID": "1",
        "itemID": "0",
        "discountID": "0",
        "taxClassID": "2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine/{workorderLine}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderLine": {
    "workorderLineID": "2",
    "note": "Labor",
    "timeStamp": "2021-04-24T15:48:50+00:00",
    "approved": "false",
    "warranty": "false",
    "hours": "0",
    "minutes": "35",
    "unitPriceOverride": "0",
    "done": "false",
    "unitQuantity": "1",
    "tax": "false",
    "unitCost": "50",
    "workorderID": "4",
    "employeeID": "1",
    "saleLineID": "147",
    "saleID": "0",
    "itemID": "0",
    "discountID": "0",
    "taxClassID": "2"
  }
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this workorder line is on. Required Field |
| --- | --- |

---

### PUT Update a workorder lines

Update a workorder line based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Workoder/{workorderID}/WorkorderLine/{workorderLine}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "note": "Labor",
        "approved": "false",
        "warranty": "false",
        "hours": "0",
        "minutes": "35",
        "unitPriceOverride": "0",
        "done": "false",
        "unitQuantity": "1",
        "tax": "false",
        "unitCost": "50",
        "employeeID": "1",
        "itemID": "0",
        "discountID": "0",
        "taxClassID": "2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine/{workorderLine}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderLine": {
    "workorderLineID": "2",
    "note": "Labor",
    "timeStamp": "2021-04-24T15:48:50+00:00",
    "approved": "false",
    "warranty": "false",
    "hours": "0",
    "minutes": "35",
    "unitPriceOverride": "0",
    "done": "false",
    "unitQuantity": "1",
    "tax": "false",
    "unitCost": "50",
    "workorderID": "4",
    "employeeID": "1",
    "saleLineID": "147",
    "saleID": "0",
    "itemID": "0",
    "discountID": "0",
    "taxClassID": "2"
  }
}
```

#### Attributes

| workorderLineID | (integer) The unique numerical ID for the workorder line. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this workorder line is on. Required Field |

---

### DELETE Delete a workorder lines

Permanently delete a workorder line based on given parameters.

> Definition

```
DELETE /API/V3/Account/{accountID}/Workoder/{workorderID}/WorkorderLine/{workorderLine}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderLine/{workorderLine}.json"
```

> Sample JSON Response

```json
{
  "name": "WorkorderLine",
  "primaryID": "2"
}
```

#### Attributes

| workorderLineID | (integer) The unique numerical ID for the workorder line. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this workorder line is on. Required Field |

---
