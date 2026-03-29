---
title: Authorization Code Grant
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant/
---

# Authorization Code Grant

An access token grants your application access to a single Lightspeed Retail POS (R-Series) account. In order to acquire an access token for an account, a user in the account must authorize your client to access their data. This is done using the OAuth Authorization Code Grant flow, which provides a three-way handshake between, your client, the merchant (the data owner) and Lightspeed Retail POS (R-Series) (the data server).

**Once you get an access token and refresh token, no further action is needed from the user.**

## Requesting Authorization

The first step is to request access to the Lightspeed Retail POS (R-Series) account. You must provide an account user a URL to an OAuth endpoint that identifies your application and specifies the access scope(s) that you are asking the user to grant.

The URL uses this format:

`GET https://cloud.lightspeedapp.com/auth/oauth/authorize?response_type=code&client_id={client_id}&scope={scope}&state={state}&code_challenge={code_challenge}&code_challenge_method=S256`

| Parameter | Description |
| --- | --- |
| response_type | code is the only accepted value. This indicates that you are requesting an authorization code. |
| client_id | Your application’s client ID that was provided when you registered your client. |
| scope | The permissions that your application is requesting to be granted by the user (see the Access Scopes page for more information). |
| state | [optional] A value used by the client to maintain state between the request and callback. This value is usually randomly generated for every authorization request and stored by the client application for the duration of the authorization grant flow. The authorization server will return this value when sending the authorization code to the redirect URI. It is strongly recommended to include this parameter and to validate it when received at your redirect URI in order to to prevent unauthorized access. |
| code_challenge | [optional] A random string that has been hashed using the code_challenge_method. Must only contain base64url valid characters. This is required if the client is using the PKCE flow. See the PKCE section for more information. |
| code_challenge_method | [optional] The hashing method used to generate the code challenge. Possible values are S256 (sha256, strongly recommended) and plain (no hashing). This is required if the client is using the PKCE flow. See the PKCE section for more information. |

The state parameter lets the OAuth client maintain a connection between the initial authorization request and the redirect back to your client. This can be useful to keep track of who requested the connection and increases security by preventing cross-site request forgery (CSRF) attacks. For more information on the security aspect see the [OAuth 2.0 specification](https://tools.ietf.org/html/rfc6749#section-10.12).

This URL will take the user to a login page for Retail POS (R-Series). After logging in, they will be asked to authorize your application for the access scope(s) specified in the URL.

Once the user authorizes your application, you will receive a response in the following format:

`https://{redirect_uri}?code={authorization_code}&state={state}`

You will use the temporary authorization code found in the response URL to request an access token. The temporary token is only valid for 60 seconds.

### Common Errors

| Error | Description |
| --- | --- |
| 400 invalid_client | The client ID wasn’t supplied or doesn’t match any active OAuth clients. |
| 400 invalid_scope | The scope wasn’t specified, or the specified scope was invalid. If you’re requesting multiple scopes, make sure the list is formatted correctly. |

## Exchange Code for an Access Token

> Request URI

```
POST https://cloud.lightspeedapp.com/auth/oauth/token
```

> Example Request Body

```shell
$ curl -F 'client_id={client id}' \
-F 'client_secret={client secret}' \
-F 'code={authorization_code}' \
-F 'grant_type=authorization_code' \
-F 'code_verifier={code_verifier}' \
https://cloud.lightspeedapp.com/auth/oauth/token
```

```php
$tokenURL = "https://cloud.lightspeedapp.com/auth/oauth/token";

$postFields = [
    'client_id' => $clientID,
    'client_secret' => $clientSecret,
    'code' => $authorizationCode,
    'grant_type' => 'authorization_code'
    'code_verifier' => $codeVerifier
];

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $tokenURL,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $postFields
));

$response = curl_exec($curl);
$responseObj = json_decode($response);
$jsonString = json_encode($responseObj, JSON_PRETTY_PRINT);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

```python
import requests

url = "https://cloud.lightspeedapp.com/auth/oauth/token"

payload = {
    "client_id": {Client ID},
    "client_secret": {Client Secret},
    "code": {authorizaton_code},
    "grant_type": "authorization_code"}

response = requests.request("POST", url, data=payload)

print(response.text)
```

> Example Response

```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "{access_token}",
    "refresh_token": "{refresh_token}"
}
```

The authorization code sent to your application’s redirect URI can be converted to an access token by sending a POST request to the `/auth/oauth/token` endpoint with your clients credentials and the authorization code. The request may be sent with a Content-Type of either `application/json` or `multi-part/form-data`

If the provided client credentials and authorization code are  valid, then a JSON response will be returned with the access token and a refresh token.

The access token request endpoint is:

`https://cloud.lightspeedapp.com/auth/oauth/token`

Below are the fields used in the payload sent to the access token end point:

| Parameter | Description |
| --- | --- |
| client_id | Your application’s client ID specified when you registered your client. |
| client_secret | optional The client secret you specified when you registered your client. Required for clients that are not publicly distributed (server-based) |
| code | The code you received after the user authorized your application. |
| grant_type | Specify ‘authorization_code’ to get the access token. |
| code_verifier | optional The random string used to generate the code_challenge hash provided in the authorize request. Must contain only base64url valid characters. This is required if the client is using the PKCE flow. See the PKCE section for more information. |

Here is a breakdown of the fields returned in the response:

| Fields | Description |
| --- | --- |
| token_type | The type of token granted. This will always be "Bearer". |
| expires_in | The lifetime in seconds of this access token. 3600 means that the token will expire in 1 hour. |
| access_token | The access token that has been granted. |
| refresh_token | The refresh token that can be used to request a new access token after the access token expires. |

### Common Errors

| Error | Description |
| --- | --- |
| 405 invalid_request | The request method must be POST when requesting an access token |
| 400 invalid_request | A required field wasn’t included, or the value was not correct. Check the “hint” field for more context |
| 401 invalid_client | The client ID and secret were not valid or the client is blocked. |
| 400 invalid_grant | The temporary token (authorization code) is expired, incorrect or was issued to a different OAuth client. |
| 400 invalid_scope | One or more of the scopes requested is not valid |

## Authorization Code Grant with PKCE

> Generating a Code Verifier and Challenge

```shell
code_verifier=$(openssl rand -base64 64 | tr -d "\n" | tr '/+' '_-' | tr -d '=')
code_challenge=$(printf $code_verifier | shasum -a 256 | head -c 64 | xxd -r -p - | openssl base64 | tr '/+' '_-' | tr -d '=')
```

```python
code_verifier = re.sub('[^a-zA-Z0-9_-]+', '', base64.urlsafe_b64encode(os.urandom(64)).decode('utf-8'))
code_challenge = base64.urlsafe_b64encode(hashlib.sha256(code_verifier.encode('utf-8')).digest()).decode('utf-8').rstrip('=')
```

```php
if (!function_exists('base64url_encode')) {
    function base64url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
}
$code_verifier = base64url_encode(random_bytes(64));
$code_challenge = base64url_encode(hash('sha256', $code_verifier, true));
```

Proof Key for Code Exchange ([PKCE](https://datatracker.ietf.org/doc/html/rfc7636)) is an extension to the OAuth 2.0 authorization code flow that is used to ensure that the client that is requesting the access token is the same as the client that requested the authorization code. It is **required** for all publicly distributed clients, but is recommended for all clients.  The PKCE flow is similar to the standard authorization code flow, but with an additional step to generate a code verifier and a code challenge.

The code verifier is a randomly generated string, which must be between 43 and 128 characters long and contain only base64url valid characters (`a-zA-Z0-9_-`). It is sent as part of the access token request.

The code challenge is a base64url encoded hash of the code verifier. The hash method may be `S256` (sha256) or `plain`. The `S256` method is **strongly recommended**. The code challenge and method is sent as part of the initial authorization request.

The following online tool can be used to generate a code challenge and code verifier for testing purposes: [https://developer.pingidentity.com/en/tools/pkce-code-generator.html](https://developer.pingidentity.com/en/tools/pkce-code-generator.html)
