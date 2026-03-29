---
title: Best Practices
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/bestpractices/
---

# Best Practices

## Respect the Rate Limit

```shell
$ curl -vH 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account'

< HTTP/1.1 200 OK
< Date: Wed, 27 Jan 2016 16:46:01 GMT
* Server Apache/2.2.15 (CentOS) is not blacklisted
< Server: Apache/2.2.15 (CentOS)
< X-Powered-By: PHP/5.4.44
< X-LS-API-Bucket-Level: 1/90    <-- This means 1 point out of the current rate limit of 90 has been used. Going above 90 will result in a 429 error.
< X-LS-OAuth-Client-Id: 123456
< X-LS-Acct-Id: 123456
< Content-Length: 1575
< Vary: Accept-Encoding
< Content-Type: application/vnd.merchantos.pos-v1+xml
```

The Lightspeed Retail POS (R-Series) API limits the number of requests that can be sent to an account over a period of time. When the rate limit has been reached, a 429 Rate Limit Exceeded error will be returned. If this error is encountered, do not continuously replay the request until it is accepted. We strongly recommend letting your code sleep until the required bucket level has been regained.

To view the current state of your bucket, retrieve the header information of the request made and look for the `X-LS-API-Bucket-Level` header to see how many points out of the current limit you have used.

---

## Only Load Needed Relations

> Example URI

```
https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item?load_relations=["Images","ItemShops"]
```

> Example curl command

```
curl -H 'Authorization: Bearer {Access Token}' \
'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/Item?load_relations=["Images","ItemShops"]'
```

Loading all available relations is acceptable when testing, but not all relations are usually needed when your code is finalized. Attempting to load too much data may result in 500 errors due to memory exhaustion.

Individual relations can be loaded by specifying them in a JSON encoded array. For example, if you only want to load the Images and ItemShops relations on the Item endpoint, use the `load_relations=["Images","ItemShops"]` parameter.

---

## Pass authorization via header

```shell
$ curl -H 'Authorization: Bearer {Access Token}' \
-X GET 'https://api.lightspeedapp.com/API/V3/Account'
```

Authorization should be passed via the header of a request. The header needed is the following: `"Authorization: Bearer {access_token}"`

---

## Inventory Adjustments

Adjustments to QoH (Quantity on Hand) should be done by creating and completing Sales with the appropriate items needing adjustment. This will create an appropriate record in Lightspeed for reporting purposes and show a proper record of the item being sold.
