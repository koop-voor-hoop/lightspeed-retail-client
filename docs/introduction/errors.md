---
title: Errors
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/errors/
---

# Errors

The Lightspeed Retail POS (R-Series) API uses the following HTTP error codes:

| Error Code | Message | Meaning |
| --- | --- | --- |
| 400 | Bad Request | The server cannot or will not process the request due to something that is perceived to be a client error (i.e. malformed query or invalid XML/JSON payload). |
| 401 | Unauthorized | This error code indicates that authentication is required. Occurs when an authentication token is not provided, is invalid, or is expired. Can be resolved by refreshing the authentication token. |
| 403 | Forbidden | This error indicates that the authentication token was accepted, but does not include the necessary access scopes to access the particular endpoint. |
| 404 | Not Found | The requested resource could not be found. Please ensure that the URL is correct. |
| 405 | Method Not Allowed | A request was made of a resource using a request method not supported by that resource, for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource. |
| 409 | Conflict | Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple simultaneous updates. |
| 422 | Unprocessable Entity | The request was well-formed but the server was unable to process it due to semantic or validation errors. |
| 429 | Too Many Requests | The client has sent too many requests in a given amount of time. See rate limiting for more details. |
| 500 | Internal Error | A generic error message given when an unexpected condition is encountered and no specific message is suitable. |
| 502 | Bad Gateway | The server was acting as a gateway or proxy, and received an invalid response from the upstream server. |
| 503 | Service Unavailable | The server is currently unavailable because it is overloaded or down for maintenance. |
