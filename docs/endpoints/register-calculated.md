---
title: Register Calculated
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Register-calculated/
---

# Register Calculated

#### Description

Returns the calculated amount for each payment type since the indicated register was opened.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Sortable Fields

This endpoint is not sortable.

---

### GET All register calculations

Retrieve a list of all register calculations.

> Definition

```
GET /API/V3/Account/{accountID}/Register/{registerID}/calculated.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Register/{registerID}/calculated.json"
```

> Sample JSON Response

```json
{
  "CalculatedAmount": [
    {
      "add": "189",
      "withdraw": "0",
      "payment": "2678.01",
      "paymentTypeID": "1"
    },
    {...}
  ]
}
```
