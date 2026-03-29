---
title: Refresh Token
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/refresh-token/
---

# Refresh Token

```json
{
    "error": "access_denied",
    "error_description": "The resource owner or authorization server denied the request.",
    "hint": "Access token could not be verified"
}
```

```json
{
    "error": "access_denied",
    "error_description": "The resource owner or authorization server denied the request.",
    "hint": "Access token has been revoked"
}
```

All access tokens are issued with an expiry time defined by the `expires_in` value. When an expired access token is sent as part of an API request, a `401 Unauthorized` error will be returned. The error message for an expired token is `"Access token could not be verified"`, however expired tokens are periodically deleted from our system, so for older tokens, you may get `"Access token has been revoked"` instead.

Once an access token expires, your application will need to request another one using the refresh token that was issued at the same time as the access token. This does *not* require interaction from the POS user.

Refresh token grants should only be performed when the access token has expired or shortly before expiration. **Excessive use of refresh tokens may result in rate limiting or your client being blocked.**

## Getting a New Access Token

> Request URI

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

```shell
$ curl -F 'refresh_token={Refresh Token}' \
-F 'client_id={Client ID}' \
-F 'client_secret={Client Secret}' \
-F 'grant_type=refresh_token' \
https://cloud.lightspeedapp.com/auth/oauth/token
```

```python
import requests

payload = {
    'refresh_token': '{Refresh Token}',
    'client_secret': '{Client Secret}',
    'client_id': '{Client ID}',
    'grant_type': 'refresh_token',
}

r = requests.get('https://cloud.lightspeedapp.com/auth/oauth/token', data=payload).json()
```

```php
$url = 'https://cloud.lightspeedapp.com/auth/oauth/token';

$postfields = array(
  'refresh_token' => '{Refresh Token}',
  'client_secret' => '{Client Secret}',
  'client_id' => '{Client ID}',
  'grant_type' => 'refresh_token'
);

$curl = curl_init();

curl_setopt($curl,CURLOPT_URL, $url);
curl_setopt($curl,CURLOPT_POST, sizeof($postfields));
curl_setopt($curl,CURLOPT_POSTFIELDS, $postfields);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo 'cURL Error #:' . $err;
} else {
    echo $response;
}
```

> Response

```json
{
    "token_type": "Bearer",
    "expires_in": 1800,
    "access_token": "eyJ0e...",
    "refresh_token": "def50..."
}
```

To request a new access token, send a POST request to the access token endpoint (`https://cloud.lightspeedapp.com/auth/oauth/token`). This is the same endpoint used to request an access token in the [Authorization Code Grant](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant) flow, except the `grant_type` must be `refresh_token`, and the `refresh_token` parameter must be provided instead of a `code`. As with the authorization code grant, the `client_secret` field is optional for publicly distributed clients.

After a refresh token has been used, a new access token and a new refresh token will be issued. Once the new access token is used to authenticate a request, the old refresh token will be revoked. Be sure to properly store the new access token and refresh token in your client before making requests with the new access token.

Unused refresh tokens expire after 30 days. As long as your application continues to use the refresh tokens at least once every 30 days, the connection with the Retail POS account will remain active indefinitely.

If you lose the refresh token, or the token is deleted due to inactivity, the Retail POS user will need to re-authorize your client.

Refresh tokens should be considered secrets and not exposed to any parties other than Lightspeed Retail (R-Series) API and your application. Do not share refresh tokens with Lightspeed support. If you suspect that your access token has been compromised, you should regenerate the token by performing a refresh token grant.

### Common Errors

| Error | Description |
| --- | --- |
| 400 invalid_request | The refresh token wasn’t provided. |
| 400 invalid_grant | The refresh token is invalid. |

See also the [list of common errors when requesting an access token](https://developers.lightspeedhq.com/retail/authentication/access-token/#common-errors-1).

## When to Refresh Your Access Tokens

If your access token was working, and you begin to receive 401 errors, your token is most likely expired. At this point, you should try requesting a new one.

The recommended strategy is to wait until you get a 401 Unauthorized error, then refresh the token. However, be sure that your application only tries to refresh once.

Another option is to track the `expires_in` value. After a token is issued, store the time of the refresh + the `expires_in` value in memory. If the current time is greater than or equal to the refresh time + `expires_in`, you can refresh the access token.

## Revoking Refresh Tokens

Retail POS account users can revoke the access of your application from their settings page. This invalidates both the access token and refresh token.

> Request URI

```
POST https://cloud.lightspeedapp.com/auth/oauth/revoke
```

> Request Body

```json
{
    "client_id": "{client_id}",
    "client_secret": "{client_secret}",
    "refresh_token": "{refresh_token}"
}
```

```shell
$ curl -F 'refresh_token={Refresh Token}' \
-F 'client_id={Client ID}' \
-F 'client_secret={Client Secret}' \
https://cloud.lightspeedapp.com/auth/oauth/revoke
```

Clients may also break the link to the Retail POS account by sending a request to the `auth/oauth/revoke` endpoint with the most recent refresh token. This will invalidate both the refresh token and the access token. This should be used if the merchant closes their account with your application.

To reconnect to that account, the account user will need to perform the [authorization code grant flow](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant) again.
