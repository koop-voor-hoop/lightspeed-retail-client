---
title: CurrencyRate
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/CurrencyRate/
---

# CurrencyRate

#### Description

Retrieve the Currency Rates used by the merchant. These currency rates will not be updated automatically.

#### User Interface

- Settings → General Options → Currencies

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (multi) | True |
| POST/Create | True |
| PUT/Update | True |

#### Currency Rate Fields

| currencyRateID | (integer) The unique numerical ID for the currency. /API/V3/Account/{accountID}/CurrencyRate/{currencyRateID} |
| --- | --- |
| currencyCode | (string) The currency ISO code, ie: USD, CAD. |
| rate | (float) The rate field is a value representing the exchange rate of the given currency code relative to the account’s base currency. (given currency / account currency) |
| createTime | (datetime) Date/time the currency code was created. |
| timeStamp | (datetime) Date/time the currency code was last modified. |

---

### GET All Currency Rates

Retrieve a list of all currency rates in this account.

> Description

```
GET /API/V3/Account/{accountID}/CurrencyRate.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
'https://api.lightspeedapp.com/API/V3/Account/{accountID}/CurrencyRate.json'
```

> Sample Json response

```json
{
  "CurrencyRate": [
    {
      "currencyRateID": "1",
      "currencyCode": "CAD",
      "rate": "0.5",
      "createTime": "2024-11-04T19:20:07+00:00",
      "timeStamp": "2024-11-04T19:20:07+00:00"
    },
    {
      "currencyRateID": "36",
      "currencyCode": "AUD",
      "rate": "0.11",
      "createTime": "2024-11-05T19:18:11+00:00",
      "timeStamp": "2024-12-04T16:13:45+00:00"
    },
    {
      "currencyRateID": "37",
      "currencyCode": "GBP",
      "rate": "0.41",
      "createTime": "2024-12-02T20:08:05+00:00",
      "timeStamp": "2024-12-05T21:10:51+00:00"
    },
    {
      "currencyRateID": "41",
      "currencyCode": "MXN",
      "rate": "0.33",
      "createTime": "2024-12-05T18:05:32+00:00",
      "timeStamp": "2024-12-05T18:05:32+00:00"
    },
    {
      "currencyRateID": "42",
      "currencyCode": "EUR",
      "rate": "453453",
      "createTime": "2024-12-05T18:07:25+00:00",
      "timeStamp": "2024-12-05T18:07:25+00:00"
    }
  ]
}
```

#### Arguments

|  | No arguments available. |
| --- | --- |

---

### GET Retrieve a Currency Rate

Returns a single currency rate by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/CurrencyRate/{currencyRateID}.json
```

> Sample request

```
$ curl -H "Authorization: Bearer {Access Token}" \
'https://api.lightspeedapp.comGET /API/V3/Account/{accountID}/CurrencyRate/{currencyRateID}.json'
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CurrencyRate": {
    "currencyRateID": "37",
    "currencyCode": "GBP",
    "rate": "0.41",
    "createTime": "2024-12-02T20:08:05+00:00",
    "timeStamp": "2024-12-05T21:10:51+00:00"
  }
}
```

#### Arguments

| currencyRateID | (integer) The primary ID. /API/V3/Account/{accountID}/CurrencyRate/{currencyRateID} |
| --- | --- |

---

### POST Create a Currency Rate

Create a new Currency Rate based on the given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/CurrencyRate.json
```

> Sample request

```
curl -X POST -H "Authorization: Bearer {Access Token}" \
-H "Content-Type: application/json" \
-d ' {
  "currencyCode": "EUR",
  "rate": 0.77,
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CurrencyRate.json"
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CurrencyRate": {
    "currencyRateID": "42",
    "currencyCode": "EUR",
    "rate": "0.56",
    "createTime": "2024-12-05T18:07:25+00:00",
    "timeStamp": "2024-12-06T19:42:47+00:00"
  }
}
```

#### Arguments

| currencyCode | (string) The currency ISO code, ie: USD, CAD. |
| --- | --- |
| rate | (float) The currency codes’ current rate. |

---

### PUT Update a Currency Rate

Update an existing Currency Rate based on the given parameters.

#### Arguments

| rate | (float) The currency codes’ current rate. |
| --- | --- |

> Definition

```
PUT /API/V3/Account/{accountID}/CurrencyRate/{currencyRateID}.json
```

> Sample request

```
curl -X PUT -H "Authorization: Bearer {Access Token}" \
-H "Content-Type: application/json" \
-d ' {
  "rate": 0.41
  }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/CurrencyRate/{currencyRateID}.json"
```

> Sample JSON response

```json
{
  "@attributes": {
    "count": "1"
  },
  "CurrencyRate": {
    "currencyRateID": "37",
    "currencyCode": "GBP",
    "rate": "0.41",
    "createTime": "2024-12-02T20:08:05+00:00",
    "timeStamp": "2024-12-05T21:10:51+00:00"
  }
}
```
