---
title: Customer
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Customer/
---

# Customer

#### Description

Biographical information on customers. Relates to many other records to create a customer history.

#### User Interface

- Customers → Customers

When you delete a customer, they are actually archived. When a customer is archived their CreditAccount is also archived. To unarchive do a PUT/Update and set *archived=false*. To retrieve archived customers you need to use the *?archive=1* query parameter on your GET.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Archive | True |
| DELETE/Anonymize | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Additional Relations

- Contact
- CustomerType
- Discount
- Note
- TaxCategory
- CreditAccount
- Tags
- CustomFieldValues
- CustomFieldValues.value

#### Customer Fields

| customerID | (integer) The unique numerical ID for the customer. |
| --- | --- |
| firstName | (string) Customer’s first name. |
| lastName | (string) Customer’s last name. |
| dob | (datetime) Customer’s date of birth. |
| archived | (boolean) Whether the customer is archived. |
| title | (string) The job title of this customer. |
| company | (string) The company name this customer belongs to. |
| companyRegistrationNumber | (string) The customer’s company registration number. |
| vatNumber | (string) The customer’s vat number. |
| createTime | (datetime) Date/time the customer was created. |
| timeStamp | (datetime) Date/time the customer was last modified. |
| creditAccountID | (integer) Foreign key for CreditAccount. |
| customerTypeID | (integer) Foreign key for CustomerType. |
| discountID | (integer) Foreign key for Discount. |
| taxCategoryID | (integer) Foreign key for TaxCategory. |
| Contact | (object) |
| CreditAccount | (object) |
| CustomerType | (object) |
| Discount | (object) |
| Note | (object) |
| TaxCategory | (object) |
| CustomFieldValues | (object) The custom field values that belong to this customer. |

#### Contact Fields

**Addresses/ContactAddress**

Contains the postal address(es) for the contact.

| address1 | The contact’s street address. |
| --- | --- |
| address2 | The contact’s second address line (apt, suite, etc). |
| city | The contact’s postal address city. |
| state | The contact’s postal address state. |
| stateCode | The ISO code for the state. |
| zip | The contact’s postal address zip/postal code. This may be empty in some cases. |
| country | The contact’s postal address country. |
| countryCode | The ISO code for the country. This may be empty in some cases. |

**Phones/Contact**

The contact’s phone numbers. There can be one each of useType = Home, Work, Mobile, Pager, Fax

| number | The phone number. |
| --- | --- |
| useType | The type of phone number this is: Home, Work, Mobile, Pager, Fax. |

**Emails/ContactEmail**

The contact’s email addresses. There can be one each of useType = Primary, Secondary.

| address | The email address. |
| --- | --- |
| useType | The type of email address this is: Primary, Secondary. |

**Websites/Contact**

The contact website/URL.

| url | The URL. |
| --- | --- |

| noEmail | (boolean) Does the contact wish to opt out of email messages. |
| --- | --- |
| noMail | (boolean) Does the contact wish to opt out of postal mail. |
| noPhone | (boolean) Does the contact wish to opt out of phone calls. |
| timeStamp | (datetime) The date/time the record was last modified. |

#### Note Fields

| note | (string) The note text. |
| --- | --- |
| isPublic | (boolean) Whether this note should show on receipts. For example, if you put a note on an Item and mark it public, then it will be used to fill the saleLine note. |
| timeStamp | (datetime) Date/time the note was last modified. |

#### Sortable Fields

- customerID
- timeStamp
- firstName
- lastName

#### See Also

- [CustomerType](https://developers.lightspeedhq.com/retail/endpoints/CustomerType/#customertype-fields)
- [Discount](https://developers.lightspeedhq.com/retail/endpoints/CustomerType/#customertype-fields)
- [TaxCategory](https://developers.lightspeedhq.com/retail/endpoints/TaxCategory/#taxcategory-fields)
- [CreditAccount](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/#creditaccount-fields)
- [CustomFieldValue](https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomField/#customerfieldvalue-fields)
- [CustomFieldChoice](https://developers.lightspeedhq.com/retail/endpoints/Customer-CustomField-CustomFieldChoice/#customfieldchoice-fields)

---

### GET All Customers

Get all customers.

> Definition

```
GET /API/V3/Account/{accountID}/Customer.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Customer": [
    {
      "firstName": "Alex",
      "lastName": "Lugo",
      "title": "",
      "company": "Lightspeed HQ",
      "companyRegistrationNumber": "",
      "vatNumber": "",
      "creditAccountID": "0",
      "customerTypeID": "2",
      "discountID": "0",
      "taxCategoryID": "0",
      "customerID": "1",
      "createTime": "2021-06-06T18:04:35+00:00",
      "timeStamp": "2021-09-09T14:13:13+00:00",
      "archived": "false"
    },
    {...}
  ]
}
```

#### Attributes

|  | No Attributes available. |
| --- | --- |

---

### GET Retrieve a customer

Retrieve a customer by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Customer/{customerID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customerID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Customer": {
    "firstName": "John",
    "lastName": "Doe",
    "title": "",
    "company": "",
    "companyRegistrationNumber": "",
    "vatNumber": "",
    "creditAccountID": "2",
    "customerTypeID": "0",
    "discountID": "0",
    "taxCategoryID": "0",
    "customerID": "7",
    "createTime": "2021-03-03T15:39:34+00:00",
    "timeStamp": "2021-03-16T04:10:29+00:00",
    "archived": "false"
  }
}
```

#### Attributes

| customerID | (integer) Primary key. Required Field |
| --- | --- |

---

### POST Create a Customer

Create a customer based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Customer.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
  "firstName": "Junior",
  "lastName": "Doe",
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer.json"
```

> Sample JSON Response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Customer": {
		"firstName": "Junior",
		"lastName": "Doe",
		"title": "",
		"company": "",
		"companyRegistrationNumber": "",
		"vatNumber": "",
		"creditAccountID": "0",
		"customerTypeID": "0",
		"discountID": "0",
		"taxCategoryID": "0",
		"Contact": {
			"custom": "",
			"noEmail": "false",
			"noPhone": "false",
			"noMail": "false",
			"Addresses": {
				"ContactAddress": {
					"address1": "",
					"address2": "",
					"city": "",
					"state": "",
					"stateCode": "",
					"zip": "",
					"country": "",
					"countryCode": ""
				}
			},
			"Phones": "",
			"Emails": "",
			"Websites": "",
			"timeStamp": "2021-03-21T20:03:58+00:00"
		},
		"customerID": "11",
		"createTime": "2021-03-21T20:03:58+00:00",
		"timeStamp": "2021-03-21T20:03:58+00:00",
		"archived": "false"
	}
}
```

#### Attributes

| firstName | (string) Customer’s first name. |
| --- | --- |
| lastName | (string) Customer’s last name. |
| dob | (datetime) Date/time the customer was born, date of birth. |
| title | (string) The job title of the customer. |
| company | (string) The company name this customer belongs to. |
| companyRegistrationNumber | (string) The customer’s company registration number. |
| vatNumber | (string) The customer’s vat number. |
| customerTypeID | (integer) Foreign key for CustomerType. |
| discountID | (integer) Foreign key for Discount. |
| taxCategoryID | (integer) Foreign key for TaxCategory. |

---

### PUT Update a customer

Update an existing customer based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Customer/{customerID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
    "name": "Guest"
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customerID}.json"
```

> Sample JSON Response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Customer": {
		"firstName": "User5",
		"lastName": "API5",
		"dob": "2021-01-01T08:00:00+00:00",
		"title": "XX",
		"company": "LS",
		"companyRegistrationNumber": "12341234",
		"vatNumber": "234234234",
		"creditAccountID": "0",
		"customerTypeID": "2",
		"discountID": "1",
		"taxCategoryID": "2",
		"Contact": {
			"custom": "",
			"noEmail": "false",
			"noPhone": "false",
			"noMail": "false",
			"Addresses": {
				"ContactAddress": {
					"address1": "",
					"address2": "",
					"city": "",
					"state": "",
					"stateCode": "",
					"zip": "",
					"country": "",
					"countryCode": ""
				}
			},
			"Phones": "",
			"Emails": "",
			"Websites": "",
			"timeStamp": "2021-03-22T03:25:32+00:00"
		},
		"customerID": "16",
		"createTime": "2021-03-22T03:25:32+00:00",
		"timeStamp": "2021-03-22T03:25:32+00:00",
		"archived": "false"
	}
}
```

#### Attributes

| firstName | (string) Customer’s first name. |
| --- | --- |
| lastName | (string) Customer’s last name. |
| dob | (datetime) Date/time the customer was born, date of birth. |
| title | (string) The job title of this customer. |
| company | (string) The company name this customer belongs to. |
| companyRegistrationNumber | (string) The customer’s company registration number. |
| vatNumber | (string) The customer’s vat number. |
| customerTypeID | (integer) Foreign key for CustomerType. |
| discountID | (integer) Foreign key for Discount. |
| taxCategoryID | (integer) Foreign key for TaxCategory. |
| archived | (boolean) Whether the customer is archived. |

---

### DELETE Archive a Customer

Archive a customer by its ID.

> Definition

```
DELETE /API/V3/Account/{accountID}/Customer/{customerID}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customerID}.json"
```

> Sample JSON Response

```json
{
	"@attributes": {
		"count": "1"
	},
	"Customer": {
		"firstName": "User5",
		"lastName": "API5",
		"dob": "2021-01-01T08:00:00+00:00",
		"title": "XX",
		"company": "LS",
		"companyRegistrationNumber": "12341234",
		"vatNumber": "234234234",
		"creditAccountID": "0",
		"customerTypeID": "2",
		"discountID": "1",
		"taxCategoryID": "2",
		"customerID": "16",
		"createTime": "2021-03-22T03:25:32+00:00",
		"timeStamp": "2021-03-22T03:31:30+00:00",
		"archived": "true"
	}
}
```

#### Attributes

| customerID | (integer) Customer primary key. Required Field |
| --- | --- |

---

### DELETE Archive & Anonymize a Customer

Archive a customer by its ID and clear their personal information. Customer notes and custom field values are not cleared. The customer’s credit account is preserved, but their name is removed from the credit account.

> Definition

```
DELETE /API/V3/Account/{accountID}/Customer/{customerID}/Anonymize.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Customer/{customerID}/Anonymize.json"
```

> Sample JSON Response

```json
{
    "@attributes": {
        "count": "1"
    },
    "Customer": {
        "firstName": "Customer",
        "lastName": "[70]",
        "title": "",
        "company": "",
        "companyRegistrationNumber": "",
        "vatNumber": "",
        "creditAccountID": "43",
        "customerTypeID": "0",
        "discountID": "0",
        "taxCategoryID": "0",
        "customerID": "70",
        "createTime": "2021-03-26T15:32:24+00:00",
        "timeStamp": "2021-07-13T19:38:53+00:00",
        "archived": "true"
    }
}
```

#### Attributes

| customerID | (integer) Customer primary key. Required Field |
| --- | --- |
