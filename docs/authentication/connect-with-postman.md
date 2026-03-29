---
title: Connect with Postman
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/connect-with-postman/
---

# Connect to your demo account with Postman

## Introduction

In order to follow these steps, you will need the key and secret for an API client.

If you do not have a client, please request one from the [OAuth client registration page](https://cloud.lightspeedapp.com/oauth/register.php) to obtain your key and secret.

You can request a Lightspeed Retail POS (R-Series) test account here: [Request a trial account](https://www.lightspeedhq.com/pos/retail/register-for-a-free-trial/).

Download Postman [here](https://www.postman.com/downloads/).

You can view and download our R-Series Postman Collection [here](https://www.postman.com/lightspeedhq/workspace/r-series-api/overview).

## Step 1 - Requesting an Authorization Code

To gain access to an account, provide the Lightspeed Retail POS (R-Series) user with a URL that includes your application’s client ID and the [access scope(s)](https://developers.lightspeedhq.com/retail/authentication/scopes) you need. This URL takes the account user to the Retail POS (R-Series) login page. After logging in, they will be asked if they want to allow your application access to their account with the access scope(s) specified. For the sake of this exercise, you will enter your own demo account credentials.
Example link: `https://cloud.lightspeedapp.com/auth/oauth/authorize?response_type=code&client_id={client_id}&scope=employee:all`

Once you authorize your application, you will receive a response in the following format:
`http://{redirect_uri}?code={authorization_code}`
After you have authorized your client on your demo account, copy the temporary authorization code from the browser’s address bar.

## Step 2 - Requesting an Access Token

```shell
$ curl -F 'client_id={client_id}' \
-F 'client_secret={client_secret}' \
-F 'code={authorization_code}' \
-F 'grant_type=authorization_code' \
https://cloud.lightspeedapp.com/auth/oauth/token
```

```php
$tokenURL = "https://cloud.lightspeedapp.com/auth/oauth/token";
$postFields = [
    'client_id' => {client_id},
    'client_secret' => {client_secret},
    'code' => {authorization_code},
    'grant_type' => 'authorization_code'
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
    "client_id": {client_id},
    "client_secret": {client_secret},
    "code": {authorization_code},
    "grant_type": "authorization_code"}
response = requests.request("POST", url, data=payload)
print(response.text)
```

> Example Response

```json
{
    "token_type": "Bearer",
    "expires_in": 1800,
    "access_token": "eyJ0e...",
    "refresh_token": "def50..."
}
```

Once you have an authorization code it can be converted to an access token by passing your client ID, client secret and the code to the `access_token` endpoint. Authorization codes are only valid for 60 seconds, so it’s a good idea to prepare this request in postman before carrying out step 1.

The access token request endpoint is:
`https://cloud.lightspeedapp.com/auth/oauth/token`

After pasting the authorization code into the `code` field in Postman, click send. This request will return an access token. You can see an example response in the side panel on the right.

## Step 3 - Using the Access Token

To make requests to the API, send the access token in the Authorization header of each request like this:
`Authorization: Bearer {access token}`

## Step 4 - Refreshing Your Access Token

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

The endpoint is the same one used the request the first access token:
`https://cloud.lightspeedapp.com/auth/oauth/token`

The POST request is the same as when using the authorization code, except the `grant_type` must be `refresh_token`. See the [Access Token](https://developers.lightspeedhq.com/retail/authentication/access-token/) page and the examples on the right for more details.
If your previous access token is still active, it will be returned instead of a new access token. The `expires_in` field will tell you how much time is left before it expires.
