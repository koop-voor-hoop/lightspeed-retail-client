---
title: Using Access Tokens
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/access-token/
---

# Using Access Tokens

> Example Request

```shell
$ curl -H 'Authorization: Bearer {Access Token}'
'https://api.lightspeedapp.com/API/V3/Account.json'
```

```python
import requests

headers = {"Authorization": "Bearer {Access Token}"}
url = 'https://api.lightspeedapp.com/API/V3/Account.json'

r = requests.get(url=url, headers=headers)
```

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.lightspeedapp.com/API/V3/Account.json",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer {access_token}",
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

?>
```

Once an access token has been issued, it can be used to make requests to the API. The access token should be sent in the Authorization header of each request like this:

`Authorization: Bearer {access_token}`

All access tokens are issued with an expiry time defined by the `expires_in` value returned in the `auth/oauth/token` response as well as the `exp` claim embedded in the token. Tokens generally expire after 60 minutes, though this is subject to change. Once the token expires, your application will need to use a [refresh token](https://developers.lightspeedhq.com/retail/authentication/refresh-token) to renew it. This does *not* require user interaction.

Access tokens should be considered secrets and not exposed to any parties other than Lightspeed Retail (R-Series) API and your application. Do not share access tokens with Lightspeed Support. If you suspect that your access token has been compromised, you should regenerate the token by performing a [Refresh Token Grant](https://developers.lightspeedhq.com/retail/authentication/refresh-token).

## Decoding the Access Token

The access token is a signed [JSON Web Token](https://jwt.io/introduction) (JWT) which contains some information about the access that it grants. The token is signed by Lightspeed and may be optionally decoded to view the content.

Lightspeed lists all public keys that can be used to verify JWT signatures at `https://cloud.lightspeedapp.com/.well-known/jwks`. Use the `kid` field in the JWT header to find the correct key to verify the signature. **The contents of this endpoint should be cached by your application and only refreshed if your application encounters an unrecognized kid value in a token.**

The decoded JWT will contain the following claims:

> Header

```json
{
 "typ": "JWT",
 "alg": "RS256",
 "kid": "RT_OAUTH2_2024_07_08"
}
```

> Payload

```json
{
 "jti": "6d771...",
 "iss": "https://cloud.lightspeedapp.com",
 "aud": "224de...",
 "sub": "12",
 "acct": "5",
 "scope": "employee:register employee:inventory",
 "iat": 1720462133.2479,
 "nbf": 1720462133.2479,
 "exp": 1720465733.161645
}
```

| Claim | Definition |
| --- | --- |
| typ | Token Type: The type of token. This will always be JWT. |
| alg | Algorithm: The algorithm used to sign the token. At the moment, this will always be RS256, however, this could change in future. |
| kid | Key ID: The ID of the public key used to verify the token. Can be used to retrieve the public key from the JWKS endpoint in order to verify the signature of the token |
| jti | JSON Web Token Identifier: The unique identifier of the token. For Lightspeed internal use only. |
| iss | Issuer: The URL of the issuer of the token. Should always be https://cloud.lightspeedapp.com |
| aud | Audience: This is the public client ID of the application that requested the token. |
| sub | Subscriber ID: The ID of the Retail POS (R-Series) user that authorized the token |
| acct | Account ID: The ID of the Retail POS (R-Series) account that the token is authorized to access |
| scopes | A space-separated list of permissions that the token has been granted |
| iat | Issued At: The unix timestamp of when the token was issued. |
| nbf | Not Before: The unix timestamp indicating when the token is valid from. |
| exp | Expires: The unix timestamp after which the token will no longer be valid. After a token is expired, a new one should be requested with a Refresh Token Grant |

> Request URL

```
GET https://cloud.lightspeedapp.com/auth/oauth/introspect
```

> Authorization Header

```
Authorization: Bearer {access_token}
```

You may also send a request to the introspection endpoint to verify the validity of a token and view the claims. If the token is invalid, an error will be returned. This endpoint is only intended to be used for debugging purposes, and should not be used in production.
