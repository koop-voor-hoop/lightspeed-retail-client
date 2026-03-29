---
title: Account
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Account/
---

# Account

> Definition

```
GET /API/V3/Account.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account.json"
```

> Object Example JSON

```json
"Account": {
    "accountID": "{accountID}",
    "name": "{Account Name}",
    "link": {
      "@attributes": {
        "href": "/API/V3/Account/{accountID}"
      }
    }
  }
```

#### Description

Returns the Lightspeed Retail POS (R-Series) account associated with your access token.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| PUT/Update | True |

---

### GET Retrieve an Account

Retrieve a single account by its ID.

> Definition

```
GET /API/V3/Account/{accountID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "systemCustomerID": "1"
  },
  "status": "customer",
  "name": "Main",
  "employeeCount": "9",
  "employeeLimit": "30",
  "uniqueSubscriptionIdentifier": "ABC123456",
  "defaultCurrency": {
    "code": "CAD",
    "symbol": "$"
  },
  "purchasingCurrencies": {
    "purchasingCurrency": [
      {
        "code": "CAD",
        "symbol": "$",
        "rate": "2"
      },
      {
        "code": "CNY",
        "symbol": "¥",
        "rate": "0.5"
      }
    ]
  }
}
```

#### Attributes

| status | (string) The status of the account. |
| --- | --- |
| name | (string) The name of the account. |
| employeeCount | (integer) The number of active employees for this account, excludes archived employees. |
| employeeLimit | (integer) The maximum number of employees allowed for this account. |
| uniqueSubscriptionIdentifier | (string) Support code for the account. Last 6 digits. |
| defaultCurrency | (object) The default currency for the account, including code and symbol. |
| purchasingCurrencies | (object) The list of purchasing currencies available for the account, each with code, symbol, and rate. |

#### Sortable Fields

Sorting is not available for this endpoint.

---
