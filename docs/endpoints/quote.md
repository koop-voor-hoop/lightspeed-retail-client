---
title: Quote
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Quote/
---

# Quote

#### Description

An uncompleted sale that is saved as a quote for a customer. Can be easily reloaded into the register for completion.

#### User Interface

- Customers → Invoices
- Register → New Sale → Invoice button under the Totals section.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |

#### Scopes Required

| employee:customers | true |
| --- | --- |

#### Quote Fields

| quoteID | (integer) The unique numerical ID of the quote. |
| --- | --- |
| issueDate | (datetime) Date/time this quote was issued. |
| notes | (string) The notes for this quote. |
| archived | (boolean) Whether the quote is archived. |
| employeeID | (integer) The foreign ID for the employee who started this quote. /API/V3/Account/{accountID}/Employee/{employeeID} |
| saleID | (integer) The foreign ID for the sale that holds this quote information currently. Everytime a quote is modified it will have a new SaleID |

#### Sortable Fields

- quoteID

---

### GET All quotes

Retrieve a list of all quote in the account

> Definition

```
GET /API/V3/Account/{accountID}/Quote.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Quote.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Quote": [
    {
      "quoteID": "1",
      "issueDate": "2021-06-13T14:25:48+00:00",
      "notes": "",
      "archived": "false",
      "employeeID": "1",
      "saleID": "39"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single quote

Retrieve an existing quote by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Quote/{quoteID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Quote/{quoteID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Quote": {
    "quoteID": "2",
    "issueDate": "2021-09-14T18:52:09+00:00",
    "notes": "",
    "archived": "false",
    "employeeID": "1",
    "saleID": "101"
  }
}
```

#### Attributes

| quoteID | (integer) The unique numerical ID of the quote. Required Field |
| --- | --- |

---

### POST Create a quote

Create a quote based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Quote.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
        "issueDate": "2021-04-04",
        "notes": "Special offer",
        "employeeID": "1",
        "saleID": "48"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Quote.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Quote": {
    "quoteID": "3",
    "issueDate": "2021-04-04T07:00:00+00:00",
    "notes": "Special offer",
    "archived": "false",
    "employeeID": "1",
    "saleID": "48"
  }
}
```

#### Attributes

| issueDate | (datetime) Date/time this quote was issued. |
| --- | --- |
| notes | (string) The notes for this quote. |
| archived | (boolean) Whether the quote is archived. |
| employeeID | (integer) The foreign ID for the employee who started this quote. /API/V3/Account/{accountID}/Employee/{employeeID} |
| saleID | (integer) The foreign ID for the sale that holds this quote information currently. Everytime a quote is modified it will have a new SaleID |

---

### PUT Update a quote

Update an existing quote based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Quote/{quoteID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "issueDate": "2021-04-05",
        "notes": "Spring Promotion",
        "employeeID": "1",
        "saleID": "100"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Quote/{quoteID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Quote": {
    "quoteID": "3",
    "issueDate": "2021-04-05T07:00:00+00:00",
    "notes": "Spring Promotion",
    "archived": "false",
    "employeeID": "1",
    "saleID": "100"
  }
}
```

#### Attributes

| quoteID | (integer) The unique numerical ID of the quote. Required Field |
| --- | --- |
| issueDate | (datetime) Date/time this quote was issued. |
| notes | (string) The notes for this quote. |
| archived | (boolean) Whether the quote is archived. |
| employeeID | (integer) The foreign ID for the employee who started this quote. /API/V3/Account/{accountID}/Employee/{employeeID} |
| saleID | (integer) The foreign ID for the sale that holds this quote information currently. Everytime a quote is modified it will have a new SaleID |

---

### DELETE Delete a quote

Archive an existing quote by its ID. The linked incomplete sale is not archived.

> Definition

```
DELETE /API/V3/Account/{accountID}/Quote/{quoteID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Quote/{quoteID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Quote": {
    "quoteID": "3",
    "issueDate": "2021-04-05T07:00:00+00:00",
    "notes": "Spring Promotion",
    "archived": "true",
    "employeeID": "1",
    "saleID": "100"
  }
}
```

#### Attributes

| quoteID | (integer) The unique numerical ID of the quote. Required Field |
| --- | --- |
