---
title: TaxCategory
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/
---

# TaxCategory

#### Description

Defines a sales tax, for example if a shop serves customers with different tax rules/authorities the shop can define a TaxCategory (called Sales Tax in the user interface) for each of these rules/authorities. Defines default and per TaxClass rates for sales taxes (per TaxClass rates are defined in the child TaxCategoryClasses).

#### User Interface

- Admin → Sales → Sales Taxes
- Register → New Sale → Tax button under Totals section.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Additional Relations

- TaxCategoryClasses
- TaxCategoryClasses.TaxClass

#### TaxCategory Fields

| taxCategoryID | (integer) The unique numerical ID for the tax category. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| --- | --- |
| isTaxInclusive | (boolean) Whether this tax category is tax inclusive. |
| tax1Name | (string) The name for the first tax rate. Example ‘GST’. |
| tax2Name | (string) The name for the second tax rate. Example ‘PST’. |
| tax1Rate | (float) The first tax rate. For many locals this is the only one used. |
| tax2Rate | (float) The second tax rate. |
| TaxCategoryClasses | (object) Provides a custom rate for the TaxClass in this TaxCategory. |
| timeStamp | (datetime) Date/time the record was last modified. |

#### Sortable Fields

- taxCategoryID
- timeStamp

#### See Also

- [TaxCategoryClass](https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/#taxcategoryclass-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)

---

### GET All tax categories

Retrieve a list of all tax categories

> Definition

```
GET /API/V3/Account/{accountID}/TaxCategory.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxCategory.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "TaxCategory": [
    {
      "taxCategoryID": "1",
      "isTaxInclusive": "false",
      "tax1Name": "Sales Tax",
      "tax2Name": "",
      "tax1Rate": "0.05",
      "tax2Rate": "0.099475",
      "timeStamp": "2021-04-07T13:52:16+00:00"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single tax category

Retrieve a single tax category by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxCategory": {
    "taxCategoryID": "5",
    "isTaxInclusive": "false",
    "tax1Name": "Tax 15",
    "tax2Name": "",
    "tax1Rate": "0.15",
    "tax2Rate": "0",
    "timeStamp": "2021-04-07T13:52:16+00:00"
  }
}
```

#### Attributes

| taxCategoryID | (integer) The unique numerical ID for the tax category. Required Field |
| --- | --- |

---

### POST Create a tax category

Create a tax category based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/TaxCategory.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "isTaxInclusive": "true",
      "tax1Name": "Tax 1",
      "tax2Name": "Tax 2",
      "tax1Rate": "0.05",
      "tax2Rate": "0.1"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxCategory.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxCategory": {
    "taxCategoryID": "7",
    "isTaxInclusive": "true",
    "tax1Name": "Tax 1",
    "tax2Name": "Tax 2",
    "tax1Rate": "0.05",
    "tax2Rate": "0.1",
    "timeStamp": "2021-04-21T18:40:28+00:00"
  }
}
```

#### Attributes

| isTaxInclusive | (boolean) Whether this tax category is tax inclusive. |
| --- | --- |
| tax1Name | (string) The name for the first tax rate. Example ‘GST’. |
| tax2Name | (string) The name for the second tax rate. Example ‘PST’. |
| tax1Rate | (float) The first tax rate. For many locals this is the only one used. |
| tax2Rate | (float) The second tax rate. |

---

### PUT Update a tax category

Update an existing tax category based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
	    "isTaxInclusive": "false",
      "tax1Name": "Tax One",
      "tax2Name": "Tax Two",
      "tax1Rate": "0.15",
      "tax2Rate": "0.2"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxCategory": {
    "taxCategoryID": "7",
    "isTaxInclusive": "false",
    "tax1Name": "Tax One",
    "tax2Name": "Tax Two",
    "tax1Rate": "0.15",
    "tax2Rate": "0.2",
    "timeStamp": "2021-04-21T18:42:38+00:00"
  }
}
```

#### Attributes

| taxCategoryID | (integer) The unique numerical ID for the tax category. Required Field |
| --- | --- |
| isTaxInclusive | (boolean) Whether this tax category is tax inclusive. |
| tax1Name | (string) The name for the first tax rate. Example ‘GST’. |
| tax2Name | (string) The name for the second tax rate. Example ‘PST’. |
| tax1Rate | (float) The first tax rate. For many locals this is the only one used. |
| tax2Rate | (float) The second tax rate. |

---

### DELETE Delete a tax category

Permenantly delete a tax category by its ID. All TaxCategoryClasses (rates within this tax category for different tax classed) will also be deleted.

> Definition

```
DELETE /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/TaxCategory/{taxCategoryID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "TaxCategory": {
    "taxCategoryID": "7",
    "isTaxInclusive": "false",
    "tax1Name": "Tax One",
    "tax2Name": "Tax Two",
    "tax1Rate": "0.15",
    "tax2Rate": "0.2",
    "timeStamp": "2021-04-21T18:42:38+00:00"
  }
}
```

#### Attributes

| taxCategoryID | (integer) The unique numerical ID for the tax category. Required Field |
| --- | --- |
