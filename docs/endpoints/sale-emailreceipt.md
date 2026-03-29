---
title: Sale EmailReceipt
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Sale-EmailReceipt/
---

# Sale EmailReceipt

#### Description

Emails a receipt for the sale to the designated email address. `Only the emailAddress is required`.

#### User Interface

- Register → Email Receipt

#### Actions Allowed

| POST/Create | True |
| --- | --- |

#### Scopes Required

| employee:register | true |
| --- | --- |
| employee:cfd | true |

#### Request Cost

| POST/Create | 5 drips |
| --- | --- |

---

### POST Sale email receipt

Send email receipt based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Sale/{saleID}/EmailReceipt.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
       "emailAddress":"[email protected]"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/EmailReceipt.json"
```

> Sample JSON Response

```json
{
  "message": "Receipt emailed to: [email protected]"
}
```

#### Attributes

| saleID | (integer) The unique numerical ID for the sale. Required Field |
| --- | --- |
