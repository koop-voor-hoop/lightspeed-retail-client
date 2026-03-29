---
title: Rate Limiting
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/ratelimits/
---

# Rate Limiting

Rate limits are a mechanism to control the rate at which each client can send requests to the Lightspeed API to prevent abuse and ensure a fair experience for all users. Lightspeed uses a [leaky-bucket](https://en.wikipedia.org/wiki/Leaky_bucket) algorithm to control rate limiting.

*Lightspeed reserves the right to modify rate limit allowances and the cost of requests, without notice.*

## Allowances

Each distinct account and client combination receives a separate rate limit allowance (or “bucket”), which reflects the rate limiting behavior for that specific connection. If your client connects to multiple accounts, the traffic to one will not impact the allowance for the other. Likewise, if an account connects to multiple different API clients, traffic from other clients will not impact your client’s allowance.

Rate limit allowances for each account are based on the number of registers in the account. Merchants can increase their rate limit allowances by adding additional registers to their R-Series subscription. These increases reflect the register limit of the subscription, and apply regardless of whether actual register entities have been created within a shop.

### Drip Rate

Drip rate represents the rate at which the bucket is emptied, making room for other requests to be made. This reflects the maximum throughput of requests that can be sustained.

Each connection has a base drip rate of 1 drip per second and receives an additional 0.5 drip per second per additional register beyond the first.

### Bucket Size

Bucket size provides a limit to the amount of allowance that a given connection can stockpile. It reflects the number of requests that can be sent in a short burst.

The first request that would increase the bucket level beyond the bucket size is allowed, but subsequent requests will be blocked with a `429 Rate Limited` error until the bucket level reduces below the bucket size.

Each connection has a base bucket size of 90, which is increased by 10 for each additional register beyond the first.

## Request Costs

Some requests impose a higher drip cost than others, proportional to the amount of work required by the server to satisfy the request. These costs are determined based on the endpoint, query parameters, and/or payload of the request. Rate limit costs are determined before based solely on the request contents, and are evaluated before any entities are loaded from the database. As such, sending fields that are not modified by the request may still result in additional costs.

### Endpoint Costs

Each request has a base cost of 1 drip. Some endpoints may impose a higher base cost for certain CRUD actions. Review the documentation of the individual endpoints for more information.

### Query Parameter Costs

The use of certain query parameters will impose additional costs. Review the [Query Parameters](https://developers.lightspeedhq.com/retail/introduction/parameters.md) page for more information.

### Request Payload Costs

When sending POST or PUT requests, the cost of the request is increased by an additional 0.5 drips for each nested relation entity in the request payload. For example, each `SaleLine` included in a `POST /API/V3/Account/#/Sale` payload increases the cost of the request by 0.5 drips.

In addition, some endpoints may impose additional costs if particular fields are present in the request in the request payload. Review the documentation of the individual endpoints for more information.

## Burst Rate Limiter

In addition to the primary leaky-bucket rate limiter, Lightspeed enforces a secondary burst rate limit to prevent sudden traffic spikes that could overwhelm the system, even when clients haven’t exhausted their total bucket allocation.

The burst rate limiter operates on 1-second fixed windows with a limit based on a fraction of the allowed bucket size. All requests add 1 increment to the burst rate limiter.

If you receive a `429 Too Many Requests` response that mentions “burst rate limit exceeded,” back off for at least 1 second before sending any additional requests.

## Response Headers

> Example Successful Request

```shell
$ curl -vH 'Authorization: Bearer {Access Token}' 'https://api.lightspeedapp.com/API/V3/Account.json'

< HTTP/1.1 200 OK
< X-LS-Acct-Id: 83050
< X-LS-Oauth-Client-Id: 51661
< X-LS-Api-Bucket-Level: 1/90
< X-LS-API-Burst-Level: 1/20
< X-LS-Api-Drip-Rate: 1
< X-LS-Api-Request-Cost: 1
< Cf-Ray: 3afe6bf03de43fdd-YUL
```

> Example Rate Limited Request

```shell
$ curl -vH 'Authorization: Bearer {Access Token}' 'https://api.lightspeedapp.com/API/V3/Item?load_relations=all'

< HTTP/1.1 429 Too Many Requests
< X-LS-Acct-Id: 83050
< X-LS-OAuth-Client-Id: 51661
< X-LS-API-Bucket-Level: 92.57/90
< X-LS-API-Burst-Level: 18/20
< X-LS-Api-Drip-Rate: 1
< X-LS-Api-Request-Cost: 10
< X-LS-API-RateLimit-Type: api-leaky-bucket
< Retry-After: 3
< Cf-Ray: 3afe6bf03de43fdd-YUL
```

Every response returned by the API will include a number of headers which can be used to understand the status of the connection and its rate limit allowance.

- **X-LS-Acct-Id**: The ID of the R-Series account connected to
- **X-LS-Oauth-Client-Id**: The ID of the OAuth client used to connect to the API
- **X-LS-Api-Bucket-Level**: The current bucket level and total bucket size of the current connection, expressed as a fraction
- **X-LS-Api-Burst-Level**: The number of requests made in the current second and the maximum number of requests per second, expressed as a fraction
- **X-LS-Api-Drip-Rate**: The current drip rate of the connection
- **X-LS-Api-Request-Cost**: The cost of the current request, i.e. the number of drips added to the bucket by this request
- **X-LS-API-RateLimit-Type**: Will only be present if the requests was blocked by a rate limiter. Indicates which rate limiter which blocked the request. Possible values include `api-leaky-bucket` or `api-burst-limiter`
- **Retry-After**: Will only be present if the request was blocked by a rate limiter. The number of seconds to wait before retrying the request or sending additional traffic
- **Cf-Ray**: The Cloudflare Ray ID of the request. Please include this value when reporting issues to Lightspeed support.

## Handling 429 Errors

If the rate limit allowance for a connection has been exceeded, a 429 error will be returned. The client should gracefully handle this error and retry the request after a delay. Other requests should also be throttled until space in the bucket is restored to avoid receiving further rate limit errors.

If possible, your client application should implement proactive rate limiting strategies to self-throttle requests before exceeding the rate limit. The `X-LS-API-Bucket-Level` and `X-LS-API-Burst-Level` headers returned with each response can be used to gauge the current state of the rate limit bucket and adjust request frequency accordingly.

**Clients who consistently send excessive volumes of traffic beyond the allowed rate limit may be subject to additional rate limiting measures or suspension of access to the API.**
