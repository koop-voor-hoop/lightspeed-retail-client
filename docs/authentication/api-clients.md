---
title: API Clients
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/clients/
---

# API Clients

An API “client” represents the third party application looking to interact with Retail POS (R-Series) data. An OAuth client is not tied to a specific Lightspeed Retail POS (R-Series) account. **Each application should register only one client**, which can then be used to connect to to multiple accounts by performing the [Authorization Code Grant](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant) flow.

To register for an OAuth client, use our [OAuth client registration page](https://cloud.lightspeedapp.com/oauth/register.php).

**Note: If you already have an OAuth client, you can update your details here**

## Client Registration

When you register a client, you will need to provide the following information:

### API Client Details

| Field | Description |
| --- | --- |
| Name | The application name users will see when approving access for your OAuth client. Ensure that it describes your application well enough that users understand which application is asking for permission to access their account. |
| Redirect URI | The location that users will be redirected to after granting permission to your application. This URI will receive the temporary code that you can use to request an access token. The URI must not contain a fragment (i.e. it can’t contain the ‘#’ character). The redirect URI must point to a server you control. If you aren’t sure what to enter, you can use https://localhost for testing. The redirect URI must use HTTPS as the protocol. |
| Website | The homepage of your application or a page giving information about the application. The Website URL must point to a server you control. |
| Is Publicly Distributed | Check this box if your application will be authenticating from a publicly distributed app (e.g. as a desktop application, mobile application, browser plugin, single-page application, etc.) instead of server to server. Client secrets must NEVER be embedded in publicly distributed apps. Instead, the Authorization Code Grant with PKCE flow must be used to authenticate users. |

**IMPORTANT NOTE**

You may not use the name “Lightspeed” in the name of your client. You may not use any Lightspeed-owned domain name in your client’s website URL.

**If your client violates either rule or otherwise confuses a user into thinking that your integration is made by Lightspeed, your client request will be rejected.**

### Contact Person

Any updates about the API will be sent to the contact person registered with the API client. Be sure to keep the contact details up to date, to avoid missing important information about changes and deprecations to the API that could impact your application.

| Field | Description |
| --- | --- |
| Name | The main contact person’s name |
| Email | A valid email address. This email address will be used to send you API related announcements. Make sure you can receive emails at this address and keep the address up to date in order to ensure that you are able to receive these communications. |
| Phone | optional A valid phone number. |

## Client Credentials

Once the form is submitted, a “client ID” and a “client secret” will be generated and displayed. **Make sure that you record these values. They will not be displayed again.** The client ID is a unique identifier for your client, and the secret is used to authenticate your client when requesting tokens, similar to a username and password.

In most cases, your client will be auto-approved. Otherwise, the request will be reviewed for approval (this can take 24-48 hours), after which you will be notified via email when your client has been activated or if there is some issue with the request.

The client secret value should be considered sensitive and never shared with any party other than your application and the Lightspeed Retail POS (R-Series) API. Do not share your client secret with Lightspeed Support. If you suspect that your client secret has been compromised, you must [regenerate it](https://cloud.lightspeedapp.com/oauth/update.php). Lightspeed reserves the right to block clients whose credentials are discovered to have been exposed.

## Modifying Clients

Should you need to make changes to your client, you can update your client details at [https://cloud.lightspeedapp.com/oauth/update.php](https://cloud.lightspeedapp.com/oauth/update.php). You will need your client ID and secret to authenticate.

You cannot change the client ID and you cannot change whether your client is publicly distributed. If you need to change these details, you will need to create a new client.

You may use the form to regenerate your client secret at any time. This will invalidate the previous secret and require you to update your application to use the new secret.
