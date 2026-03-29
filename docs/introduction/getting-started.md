---
title: Getting Started
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/introduction/
---

# Getting Started

## Introduction

> Languages

```
Language bindings are available in Shell, Python, and PHP!

Code examples are displayed in this area. You can switch the programming language of the examples using the tabs above.
```

```shell
Shell examples will be displayed here.
```

```python
Python examples will be displayed here.
```

```php
PHP examples will be displayed here.
```

Welcome to the Lightspeed Retail POS (R-Series) API! Developers can make use of the API to access Lightspeed Retail API endpoints.

Lightspeed uses the OAuth2 protocol to authenticate integrations and grant access to the API. See the section on [Authentication](https://developers.lightspeedhq.com/retail/authentication/authentication-overview) for more details.

If you need a guided introduction to the API, a detailed [Beginner Tutorial on the Retail POS (R-Series) API](https://www.youtube.com/watch?v=PN_BlVsfBFo) is also available.

## Methods

#### Read | HTTP GET

There are two read methods on data objects. The first is reading a single object via a unique URI. For example, `API/V3/Account/1/Item/1` will read the Item object with itemID = 1. The second method is reading a collection of objects, with optional search parameters to filter the result set. For example, `API/V3/Account/1/Item/` will return all active (unarchived) items, and `API/V3/Account/1/Item?upc=123456789012` will return any Item objects that have the UPC = 123456789012.

#### Create | HTTP POST

You can create a new record/object with an HTTP POST request. 
The post data should be an XML block defining the new object to be created. 
For example, to create an Item you would POST to `API/V3/Account/1/Item` 
with an  block (1 is the account number in this example).

Fields defined in the data object which are omitted from the payload 
will be set to their default values.

#### Update | HTTP PUT

To update an existing record/object you do an HTTP PUT request. 
The put/post data should be an XML block defining the updates to the object. 
For example, to update an Item you would PUT to `API/V3/Account/1/Item/2` 
with an  block (1 is the account number and 2 the itemID in this example).

Fields defined in the data object which are omitted from the payload
will retain their current values. A payload field having an empty or null value 
will result in that value being set as empty.

#### Delete | HTTP DELETE

To delete or archive (depending on the entity) an existing record/object you do an HTTP DELETE request. No data is recorded. For example, to delete/archive an Item you would DELETE to `API/V3/Account/1/Item/2` (1 is the account number and 2 the itemID in this example).

## Data Formats

The Lightspeed Retail (R-Series) API gives you the option to make requests using XML or JSON. XML is the default format accepted and returned from the API. You can choose whether to add the .xml to the end of your request URI, or you can leave it blank. Both of the following GET requests will return XML:

`https://api.lightspeedapp.com/API/V3/Account/{AccoundID}/Item`

AND

`https://api.lightspeedapp.com/API/V3/Account/{AccoundID}/Item.xml`

To use JSON, add `.json` to the end of your request URI. For example a GET request to Item using JSON:

`https://api.lightspeedapp.com/API/V3/Account/{AccoundID}/Item.json`

Alternately, you can request either XML or JSON with the `Accept` request header. For XML, use `Accept: application/xml`; for JSON use `Accept: application/json`.

This header takes precedence over the format specified in the URI, so a request to

`https://api.lightspeedapp.com/API/V3/Account/{AccoundID}/Item.json`

with the header `Accept: application/xml` will use XML.

You can also Create, Update, and Delete using JSON. Create and Update will require the payload sent to be a properly formatted JSON array.

---

## Pagination

See the dedicated [Pagination](https://developers.lightspeedhq.com/retail/introduction/pagination) section for more information on how to paginate through large datasets.

## Relations

See the dedicated [Relations](https://developers.lightspeedhq.com/retail/introduction/relations) section for more information on how to load and edit sub-records of an entity.
