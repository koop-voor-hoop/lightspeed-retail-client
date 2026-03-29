---
title: Authentication Overview
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/authentication-overview/
---

# Authentication Overview

The Lightspeed Retail POS (R-Series) API currently uses [OAuth 2.0](https://oauth.net/2/) access tokens for authenticating requests. OAuth 2.0 allows R-Series users to securely authorize third-party applications to access specific data from their account using the R-Series API.

Refer to the [Glossary of Terms](https://developers.lightspeedhq.com/retail/authentication/glossary) for definitions of common terms used in the Lightspeed Retail API documentation.

The main steps for using OAuth to access the API are:

1. [Registering your client](https://developers.lightspeedhq.com/#registering-your-client)
2. [Requesting an authorization code](https://developers.lightspeedhq.com/#requesting-an-authorization-code)
3. [Exchanging authorization code for an access token](https://developers.lightspeedhq.com/#exchanging-authorization-code-for-an-access-token)
4. [Making API requests](https://developers.lightspeedhq.com/#making-api-requests)
5. [Refreshing the access token as needed](https://developers.lightspeedhq.com/#using-the-refresh-token)

## Registering Your Client

Fill out the [registration form](https://cloud.lightspeedapp.com/oauth/register.php) to receive a client ID and client secret that your application can use to access the API. This step only needs to be performed once.

See the [API Client](https://developers.lightspeedhq.com/retail/authentication/clients) page for more information on the required fields and how to manage your client.

## Requesting an Authorization Code

When a user signs up for your application, you can prompt them to link their Retail POS (R-Series) account to your client by initiating the OAuth [Authorization Code Grant](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant) flow. Once completed, this will allow your application to access data from their account. This step should be performed once per user, when they register for your application.

> Authorization Request URL

```
GET https://cloud.lightspeedapp.com/auth/oauth/authorize?response_type=code&client_id={client_id}&scope=employee:register+employee:inventory&state={state}
```

Link or redirect the user to the OAuth authorization page. You will need to provide your application’s client id and the [access scope(s)](https://developers.lightspeedhq.com/retail/authentication/scopes) you require as query parameters.

The user will be redirected to the Lightspeed login page. After logging in, they will be asked to provide consent for your application to access their account with the permission scope(s) specified.

If the user approves the authorization request, a temporary authorization code will be sent to the redirect URI that was registered for your client.

It will be sent in the following format: `GET {client_redirect_uri}?code={authorization_code}&state={state}`

See the [Authorization Code Grant](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant) page for more details.

## Exchanging Authorization Code for an Access Token

> Request URI

```
POST https://cloud.lightspeedapp.com/auth/oauth/token
```

> Request Body

```json
{
    "client_id": "{client_id}",
    "client_secret": "{client_secret}",
    "grant_type": "authorization_code",
    "code": "{code}"
}
```

> Example Response

```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "eyJ[***]MK8aA",
    "refresh_token": "def50200f[******]565"
}
```

The second step of the Authorization Code Grant flow that your client will need to perform is to exchange the temporary authorization code for an access token. This is done by sending a POST request to the OAuth access token endpoint, with your client ID, client secret, and the code. **The code expires after 60 seconds, so the access token request must be sent quickly.**

If successful, the response will contain an [access token](https://developers.lightspeedhq.com/retail/authentication/access-token), which can be used to make requests to the API and a [refresh token](https://developers.lightspeedhq.com/retail/authentication/refresh-token), which can be used to renew the access token after it expires.

See the [Authorization Code Grant](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant#exchange-code-for-an-access-token) page for more details.

Access tokens and refresh tokens should be considered secrets and not exposed to any parties other than Lightspeed Retail (R-Series) API and your application. Do not share access tokens or refresh tokens with Lightspeed Support. If you suspect that your token has been compromised, you should regenerate the token by performing a [Refresh Token Grant](https://developers.lightspeedhq.com/retail/authentication/refresh-token).

## Making API Requests

> Example Request URI

```
GET https://api.lightspeedapp.com/API/V3/Account.json
```

> Request Header

```
Authorization: Bearer {Access Token}
```

Once you have an access token, you can make requests to the Lightspeed Retail POS (R-Series) API by sending the token in the Authorization header.

For more information on access tokens, see the [Using Access Tokens](https://developers.lightspeedhq.com/retail/authentication/access-token) page.

## Using the Refresh Token

> Refresh Token Request URI

```
POST https://cloud.lightspeedapp.com/auth/oauth/token
```

> Request Body

```json
{
    "client_id": "{client_id}",
    "client_secret": "{client_secret}",
    "grant_type": "refresh_token",
    "refresh_token": "{refresh_token}"
}
```

All access tokens are issued with an expiry time defined by the `expires_in` value (generally 60 minutes). Once a token expires, your application can request a new one by exchanging the refresh token that was issued. This does *not* require user interaction.

See the [Refresh Token Grant](https://developers.lightspeedhq.com/retail/authentication/refresh-token) page for more details.
