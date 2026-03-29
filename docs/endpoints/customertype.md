---
title: CustomerType
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/CustomerType/
---

# CustomerType

#### Description

A way to organize customers. Also allows for a TaxCategory and Discount to be automatically be applied to a group of customers.

#### User Interface

- Customers → Customer Types
- Customers → Customers → edit Customer → Type field

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| customers | true |
| --- | --- |

#### Additional Relations

- Discount
- TaxCategory
- TaxCategory.TaxCategoryClasses
- TaxCategory.TaxCategoryClasses.TaxClass

#### CustomerType Fields

| customerTypeID | (integer) The unique numeric identifier for the CustomerType. |
| --- | --- |
| name | (string) Description/name of the customer type. |
| taxCategoryID | (integer) Foreign ID for the TaxCategory to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| discountID | (integer) Foreign ID for the Discount to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/Discount/{discountID} |
| TaxCategory | (object) The TaxCategory to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/TaxCategory |
| Discount | (object) Discount to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/Discount |

#### Sortable Fields

- customerTypeID

#### See Also

- [Discount](https://developers.lightspeedhq.com/retail/endpoints/Discount/#discount-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)
- [TaxCategoryClass](https://developers.lightspeedhq.com/retail/endpoints/TaxCategoryClass/#taxcategoryclass-fields)
- [TaxClass](https://developers.lightspeedhq.com/retail/endpoints/TaxClass/#taxclass-fields)

---

### GET All customer Types

Retrieve a list of all customer types in the account.

> Definition

```
GET /API/V3/Account/{accountID}/CustomerType.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/CustomerType.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "CustomerType": [
    {
      "customerTypeID": "2",
      "name": "API Customers",
      "taxCategoryID": "1",
      "discountID": "3"
    },
    {
      "customerTypeID": "3",
      "name": "Loyalty",
      "taxCategoryID": "0",
      "discountID": "1"
    }
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Retrieve a customer type

Get a single customer type by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomerType": {
    "customerTypeID": "3",
    "name": "Loyalty",
    "taxCategoryID": "0",
    "discountID": "1"
  }
}
```

#### Attributes

| customerTypeID | (integer) The unique numeric identifier for the customer type. Required Field |
| --- | --- |

---

### POST Create a customer type

> Definition

```
POST /API/V3/Account/{accountID}/CustomerType.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{

  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CustomerType.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomerType": {
    "customerTypeID": "6",
    "name": "Employee",
    "taxCategoryID": "1",
    "discountID": "3"
  }
}
```

#### Attributes

| name | (string) Description/name of the customer type. |
| --- | --- |
| taxCategoryID | (integer) Foreign ID for the TaxCategory to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| discountID | (integer) Foreign ID for the Discount to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/Discount/{discountID} |

---

### PUT Update a Customer Type

Update a Customer Type based on the given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "Managers"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomerType": {
    "customerTypeID": "6",
    "name": "Managers",
    "taxCategoryID": "1",
    "discountID": "3"
  }
}
```

#### Attributes

| customerTypeID | (integer) The unique numeric identifier for the CustomerType. Required Field |
| --- | --- |
| name | (string) Description/name of the customer type. |
| taxCategoryID | (integer) Foreign ID for the TaxCategory to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/TaxCategory/{taxCategoryID} |
| discountID | (integer) Foreign ID for the Discount to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/Discount/{discountID} |
| TaxCategory | (object) The TaxCategory to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/TaxCategory |
| Discount | (object) Discount to automatically apply on the register when a customer of this customer type is attached. /API/V3/Account/{accountID}/Discount |

---

### DELETE Delete a Customer Type

Permanently delete a customer type by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/CustomerType/{customerTypeID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CustomerType": {
    "customerTypeID": "6",
    "name": "Managers",
    "taxCategoryID": "1",
    "discountID": "3"
  }
}
```

#### Attributes

| customerTypeID | (integer) The unique numeric identifier for the CustomerType. Required Field |
| --- | --- |
