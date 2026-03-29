---
title: Glossary of Terms
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/glossary/
---

# Glossary of Terms

Refer to the following glossary of terms for definitions of common OAuth terms used in the Lightspeed Retail (R-Series) API documentation.

| Term | Definition |
| --- | --- |
| Access Token | A string that represents an authorization issued to the client. It is used to access the API on behalf of a user. See the Access Token page for more information. |
| Account | A business operating on Lightspeed Retail (R-Series) POS, represented by a unique integer ID. An account may comprise many store locations and may contain many users (employees) |
| API | Application Programming Interface. A set of rules and protocols that allow one software application to interact with another. |
| Authorization Code | A temporary code that is used to obtain an access token. See the Authorization Code Grant page for more information. |
| Authorization Code Grant | An OAuth token grant flow that is used to obtain an access token using an authorization code. See the Authorization Code Grant page for more information. |
| Authorization Server | The server that issues access tokens to clients after successfully authenticating the resource owner and obtaining authorization. The authorization server for Lightspeed Retail POS (R-Series) is located at https://cloud.lightspeedapp.com/auth/oauth/ |
| Bearer Token | A type of access token that is used to authenticate API requests. Bearer tokens should be transmitted via the Authorization HTTP header with the prefix Bearer |
| Client | A third-party application that interacts with the Lightspeed Retail API. See the API Clients page for more information. |
| Client ID | A public unique identifier that a client application uses to identify itself. Client IDs are issued when a client is created and cannot be changed |
| Client Secret | A private unique identifier that a client application uses to authenticate itself. Client secrets are issued when a client is registered and should be kept confidential. |
| Endpoint | A specific URL that is used to access a particular resource or service. |
| Grant | A method of obtaining an access token. |
| JWT | JSON Web Token. A compact, URL-safe means of representing claims to be transferred between two parties. |
| OAuth | Open Authorization. A standard protocol for authorization that allows users to authorize third-party applications to access subsets of their data without sharing passwords. |
| PKCE | Proof Key for Code Exchange. A security extension to OAuth 2.0 that is used to protect authorization codes from interception. |
| Refresh Token | A string that can be used to obtain a new access token when the current access token expires. See the Refresh Token page for more information. |
| Refresh Token Grant | An OAuth token grant flow that is used to renew an access token using a refresh token. See the Refresh Token page for more information |
| Resource | A data entity that is exposed via an API (e.g. a Sale, an Item). |
| Resource Owner | The user who owns the data that is being accessed by a client application. |
| Resource Server | The server that hosts the protected resources that a client application wants to access. The resource server for Lightspeed Retail POS (R-Series) is located at https://api.lightspeedapp.com |
| Scope | A permission that a client application requests from a user to be able to access specific resources. |
| User | An individual with credentials to log into a Lightspeed Retail (R-Series) POS account. |
