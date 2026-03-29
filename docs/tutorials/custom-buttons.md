---
title: Custom Buttons
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/custombutton/
---

# Using Custom Buttons with an Integration

## Creating the Button

To add a button in Retail POS (R-Series), go to **Settings → Custom Menus**. To have the button appear during sales, open the “Register: Sale Tab” setting. Buttons can also be added to the refund, layaway, special order, or workorder screens.

Under “Add New Button”, enter a label for the button and choose “Open Web Page” as the type. Click “Add Button to Menu” to save it.

The button will appear in the list below, click the pencil button and enter the URL you want Retail POS to send the user to.

---

## Using the Button

> Example URL From Button Click:

```text
{Menu Button base URL}
?accountID=5
&alg=RS256
&customerID=0
&employeeID=1
&exp=1733416075
&kid=RT_GENERIC_WEBHOOK_2023_03_17
&registerID=1
&returnURL=https%3A%2F%2Fus.lightspeedapp.com%2Fregister.php
&saleID=119
&shopID=1
&systemUserID=4
&type=sale
&signature={Signature}
```

When the user clicks the button, they’ll be sent to the button’s URL. Retail POS will append query parameters providing the following context about the user and the sale they are working on:

- `type`: Type of transaction
- `accountID`: The R-Series Account ID of the user (A.K.A. systemCustomerID)
- `userID`: System User ID of the user
- `employeeID`: Employee ID of the user
- `saleID`: Sale ID or workorder ID
- `customerID`: Customer ID that the sale is associated with (if any)
- `shopID`: Shop ID that the sale is associated with
- `registerID`: Register ID that the sale is associated with
- `returnURL`: A URL to return the user to the register.

Your application can make requests to the Retail POS API as needed. When the user is done performing tasks in your application, they can be sent back to the Retail POS register with the `returnURL` included in the request to your application.

Custom buttons also support common frontend routing library URL formats. If the base URL provided for the button contains a fragment (#), the query parameters will be appended after the fragment. If the fragment contents validate as a URI path and/or query, then it will be normalized according to RFC-3986 before appending the query parameters for signing purposed (see below). This allows you to use the fragment to route the user to a specific page within your single-page application.

## Validating the Request

Lightspeed includes a cryptographic signature in the query parameters which can be used to verify the request. Validating the URL from your server is **strongly recommended** to ensure that the request originated from a user of Retail POS and not a malicious actor.

The URL will contain the following query parameters which can be used to validate the authenticity of the request:

- `exp`: a Unix timestamp indicating when the request should be considered expired. If the current time is greater than this value, the request should be considered invalid and be rejected.
- `kid`: a key ID that can be used to look up the public key used to validate the request from Lightspeed’s public key set ([https://cloud.merchantos.com/.well-known/jwks](https://cloud.merchantos.com/.well-known/jwks)).
- `alg`: the algorithm used to sign the request. For the time being, this will always be `RS256` (RSA sha256 asymmetric signature).
- `signature`: A cryptographic signature of the request, signed with the private key corresponding to the public key identified by `kid` using the algorithm specified by `alg`. The signature is base64url-encoded in transit.

To validate the request, you should follow the following steps:

1. Retrieve the full URL of the request, including the query parameters.
2. ensure that all four parameters described above are present in the request
3. ensure that the `exp` parameter is greater than the current timestamp, and reject the request if it is not.
4. Extract the `signature` query parameter from the request and remove it from the URL.
5. In order to minimize validation errors due to slight variation in URI semantics, Lightspeed will normalize the URL according to RFC-3986 before signing it. Your application should perform the same normalization to minimize the chances of a validation failure due to the way your server interprets the incoming request.
    
      perform all RFC-3986 normalizations that preserve semantics. See wikipedia article on the topic.
      sort all query parameters alphabetically by key name, including both query parameters that are part of the base URL of the button and ones that were appended by lightspeed (excluding the signature, which should be removed from the URL before validation).
  1. perform all RFC-3986 normalizations that preserve semantics. See [wikipedia article](https://en.wikipedia.org/wiki/URI_normalization#Normalizations_that_preserve_semantics) on the topic.
  2. sort all query parameters alphabetically by key name, including both query parameters that are part of the base URL of the button and ones that were appended by lightspeed (excluding the signature, which should be removed from the URL before validation).
6. Fetch the public key set from [https://cloud.merchantos.com/.well-known/jwks](https://cloud.merchantos.com/.well-known/jwks). Your application should cache this key set and only fetch it again when encountering an unrecognized key ID.
7. Retrieve the public key corresponding to the key ID specified in the request. Depending on your chosen cryptographic library, you may need to convert the key from JWK format to a format that your library can use (e.g. PEM).
8. Base64url-decode the signature and verify it against the normalized URL using the public key and the algorithm specified in the request. If the signature is valid, the request is authentic and can be processed.

See the [demo application](https://github.com/lightspeedretail/demo-menu-button-signature-php) which illustrates how to perform all of the above steps using PHP.

## Note on SSL

When the user clicks your button from the Lightspeed Retail POS (R-Series) iPad app, App Transport Security applies when opening an external URL. The SSL certificate of the server your URL is pointing to must comply with Apple’s standards.

Forward Secrecy must be enabled because the URL is opened in the user’s browser as a redirect from Lightspeed’s application.
