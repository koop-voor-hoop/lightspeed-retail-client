---
title: Changelog
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/changelog/
---

# Changelog

The Lightspeed Retail POS (R-Series) API is undergoing continuous improvement. Lightspeed will occasionally add additional API endpoints or update existing ones. Follow this changelog so that you are always up-to-date.

### 2026.03.17 (Coming Soon)

#### Rate Limiting

Rate Limits are being overhauled to improve the stability and scalability of the platform. These changes are intended to better support merchants as they grow and to speed up common workflows, while discouraging request patterns which put excessive load on the system. The following changes will be rolled out to all accounts on March 17th, and will apply to all currently supported versions of the API.

*Lightspeed reserves the right to modify the rate limit allowances and request costs without notice. The initial values provided here are subject to change as we measure the impacts of these changes.*

- **[Updated]**: Rate limit allowances for a given connection are now based on the number of registers in the merchant’s account. Merchants may add additional registers to their subscription to benefit from higher rate limit allowances.
    
      All connections now have a base drip rate of 1 drip per second and receive an additional 0.5 drip per second per additional register beyond the first. The X-LS-Api-Drip-Rate response header indicates the current drip rate for the connection.
      All connections now have a base bucket size of 90, which is increased by 10 for each additional register beyond the first.
  - All connections now have a base drip rate of 1 drip per second and receive an additional 0.5 drip per second per additional register beyond the first. The `X-LS-Api-Drip-Rate` response header indicates the current drip rate for the connection.
  - All connections now have a base bucket size of 90, which is increased by 10 for each additional register beyond the first.
- **[Updated]**: Rate limit allowances no longer fluctuate throughout the day. Previously drip rates and bucket sizes would be reduced at peak hours and increase at off-peak hours.
- **[Updated]**: Request drip costs have been rebalanced to better reflect the amount of server work performed by a given operation. These changes are intended to allow the majority of write requests to be sent faster, while discouraging some problematic request patterns. All request costs are determined based on request contents alone, before any records have been loaded from the database. As such, sending fields that are not modified by the request may still result in additional costs.
    
      All requests now have a base cost of 1 drip. Previously all GET requests cost 1 drip, and all POST/PUT/DELETE requests cost 10 drips.
      The use of certain query parameters will now impose additional costs:
        
          Load_relations: each relation requested will now add an additional cost. X-to-One relations loaded on a single record cost an additional 0.1 drip each. X-to-Many relations loaded on a single record cost an additional 0.2 drips cost. The costs are doubled when potentially loading for multiple records, such as for read-multiple endpoints or on nested relations of an X-to-Many relation. Using the load_relations=all parameter will sum the costs of all available relations for the entity.
          Count: The count query parameter makes the request cost 10 drips. No change from the previous behaviour.
          Or: The or query parameter will now impose additional costs based on the fields and operators being compared
            
              If all operands reference the same field, no additional costs are applied.
              If all operands reference fields of the same entity and no more than one range operator is used, the request will cost an additional 1 drip per operand.
              If operands reference multiple entities or multiple range operators are used, the request will cost an additional 10 drips per entity and an additional 1 drip per additional operand referencing that entity. This usage of this parameter is extremely slow and strongly discouraged.
            
          
          Offset: The deprecated offset parameter from V2 of the API will now cost 0.0005 drips multiplied by the offset value provided. Upgrading to V3 of the API is strongly recommended.
          Orderby: The deprecated orderby parameter from V2 of the API will now cost an additional 4 drips if attempting to order by a field that is not supported by the sort parameter added in V3. Upgrading to V3 of the API is strongly recommended.
  - All requests now have a base cost of 1 drip. Previously all GET requests cost 1 drip, and all POST/PUT/DELETE requests cost 10 drips.
  - The use of certain query parameters will now impose additional costs:
          
            Load_relations: each relation requested will now add an additional cost. X-to-One relations loaded on a single record cost an additional 0.1 drip each. X-to-Many relations loaded on a single record cost an additional 0.2 drips cost. The costs are doubled when potentially loading for multiple records, such as for read-multiple endpoints or on nested relations of an X-to-Many relation. Using the load_relations=all parameter will sum the costs of all available relations for the entity.
            Count: The count query parameter makes the request cost 10 drips. No change from the previous behaviour.
            Or: The or query parameter will now impose additional costs based on the fields and operators being compared
              
                If all operands reference the same field, no additional costs are applied.
                If all operands reference fields of the same entity and no more than one range operator is used, the request will cost an additional 1 drip per operand.
                If operands reference multiple entities or multiple range operators are used, the request will cost an additional 10 drips per entity and an additional 1 drip per additional operand referencing that entity. This usage of this parameter is extremely slow and strongly discouraged.
              
            
            Offset: The deprecated offset parameter from V2 of the API will now cost 0.0005 drips multiplied by the offset value provided. Upgrading to V3 of the API is strongly recommended.
            Orderby: The deprecated orderby parameter from V2 of the API will now cost an additional 4 drips if attempting to order by a field that is not supported by the sort parameter added in V3. Upgrading to V3 of the API is strongly recommended.
    - **Load_relations**: each relation requested will now add an additional cost. X-to-One relations loaded on a single record cost an additional 0.1 drip each. X-to-Many relations loaded on a single record cost an additional 0.2 drips cost. The costs are doubled when potentially loading for multiple records, such as for read-multiple endpoints or on nested relations of an X-to-Many relation. Using the `load_relations=all` parameter will sum the costs of all available relations for the entity.
    - **Count**: The `count` query parameter makes the request cost 10 drips. No change from the previous behaviour.
    - **Or**: The `or` query parameter will now impose additional costs based on the fields and operators being compared
                
                  If all operands reference the same field, no additional costs are applied.
                  If all operands reference fields of the same entity and no more than one range operator is used, the request will cost an additional 1 drip per operand.
                  If operands reference multiple entities or multiple range operators are used, the request will cost an additional 10 drips per entity and an additional 1 drip per additional operand referencing that entity. This usage of this parameter is extremely slow and strongly discouraged.
      - If all operands reference the same field, no additional costs are applied.
      - If all operands reference fields of the same entity and no more than one range operator is used, the request will cost an additional 1 drip per operand.
      - If operands reference multiple entities or multiple range operators are used, the request will cost an additional 10 drips per entity and an additional 1 drip per additional operand referencing that entity. This usage of this parameter is extremely slow and strongly discouraged.
    - **Offset**: The deprecated `offset` parameter from V2 of the API will now cost 0.0005 drips multiplied by the offset value provided. Upgrading to V3 of the API is strongly recommended.
    - **Orderby**: The deprecated `orderby` parameter from V2 of the API will now cost an additional 4 drips if attempting to order by a field that is not supported by the `sort` parameter added in V3. Upgrading to V3 of the API is strongly recommended.
- **[Updated]** When sending POST and PUT requests, additional costs may be imposed based on the contents of the request. For each related entity included in the request payload (e.g., for each SaleLine in a Sale payload), an additional cost of 0.5 drip will be applied.
- **[Updated]** The following endpoints apply the following costs, which vary from the baseline costs described above:
    
      The following endpoints each have a base cost of 2 drips:
        
          POST|PUT|DELETE /API/V3/Account/#/Sale,
            
              If the "completed" = "true" field is present in the request. The request will cost an additional 3 drips.
            
          
          POST|PUT|DELETE /API/V3/Account/#/SaleLine
          POST|PUT|DELETE /API/V3/Account/#/Sale/#/SaleLine
        
      
      The following endpoints each have a base cost of 5 drips:
        
          POST /API/V3/Account/#/Sale/#/EmailReceipt
        
      
      The following endpoints each have a base cost of 10 drips:
        
          POST|PUT /API/V3/Account/#/Category
          POST /API/V3/Account/#/InventoryCount/#/Reconcile
          POST /API/V3/Account/#/Sale/#/Refund
  - The following endpoints each have a base cost of 2 drips:
          
            POST|PUT|DELETE /API/V3/Account/#/Sale,
              
                If the "completed" = "true" field is present in the request. The request will cost an additional 3 drips.
              
            
            POST|PUT|DELETE /API/V3/Account/#/SaleLine
            POST|PUT|DELETE /API/V3/Account/#/Sale/#/SaleLine
    - `POST|PUT|DELETE /API/V3/Account/#/Sale`,
                
                  If the "completed" = "true" field is present in the request. The request will cost an additional 3 drips.
      - If the `"completed" = "true"` field is present in the request. The request will cost an additional 3 drips.
    - `POST|PUT|DELETE /API/V3/Account/#/SaleLine`
    - `POST|PUT|DELETE /API/V3/Account/#/Sale/#/SaleLine`
  - The following endpoints each have a base cost of 5 drips:
          
            POST /API/V3/Account/#/Sale/#/EmailReceipt
    - `POST /API/V3/Account/#/Sale/#/EmailReceipt`
  - The following endpoints each have a base cost of 10 drips:
          
            POST|PUT /API/V3/Account/#/Category
            POST /API/V3/Account/#/InventoryCount/#/Reconcile
            POST /API/V3/Account/#/Sale/#/Refund
    - `POST|PUT /API/V3/Account/#/Category`
    - `POST /API/V3/Account/#/InventoryCount/#/Reconcile`
    - `POST /API/V3/Account/#/Sale/#/Refund`
- **[New]**: All API requests will now return a new `X-LS-Api-Request-Cost` header to indicate the calculated drip cost of the current request.
- **[Migrating]**: No changes are necessary to take advantage of these rate limit changes. However, ensuring that your application implements the following best practices is strongly recommended to avoid excessive `429 Rate Limited` errors:
    
      Use the latest version of the API (V3). Please refer to the changelogs for upgrade details.
      Avoid using the or query parameter with fields from multiple different entities or with multiple range operators.
      When using the load_relations query parameter, specify only the relations that you actually need. The load_relations=all option should only be used for discovery purposes during development.
      When sending POST and PUT requests, only include fields and sub-entities that you intend to modify. Sending extraneous data may result in additional request costs.
      Ensure that your integration handles HTTP 429 responses appropriately. For example, automatically retrying with exponential backoff and/or by respecting Retry-After headers provided.
      Where possible, send request traffic with consistent throughput over time rather than sending sudden large bursts of concurrent requests.
  - Use the latest version of the API (V3). Please refer to the [changelogs](https://developers.lightspeedhq.com/#20220411) for upgrade details.
  - Avoid using the `or` query parameter with fields from multiple different entities or with multiple range operators.
  - When using the `load_relations` query parameter, specify only the relations that you actually need. The `load_relations=all` option should only be used for discovery purposes during development.
  - When sending POST and PUT requests, only include fields and sub-entities that you intend to modify. Sending extraneous data may result in additional request costs.
  - Ensure that your integration handles HTTP 429 responses appropriately. For example, automatically retrying with exponential backoff and/or by respecting Retry-After headers provided.
  - Where possible, send request traffic with consistent throughput over time rather than sending sudden large bursts of concurrent requests.

### 2025.01.30

#### ItemShop

- **[New]** The `ItemShop` entity now contains a number of additional fields:
    
      onLayaway: The total number of units that are currently reserved for layaways in the shop.
      onSpecialOrder: The total number of units that are currently reserved for special orders in the shop.
      onWorkOrder: The total number of units that are currently reserved for work orders in the shop.
      onTransferOut: The total number of units that are currently in-transit that were sent from the shop to another shop.
      onTransferIn: The total number of units that are currently in-transit that are expected to be received to the shop from another shop.
      averageCost: The current weighted average cost of the item. Currently, this will only show a value for ItemShops with shopID=0 (account-wide).
      totalValueFifo: The total value of the inventory in the shop, calculated using the FIFO (First In, First Out) method.
      totalValueAvgCost: The total value of the inventory in the shop, calculated using the average cost method.
      totalValueNegativeInventory: The total value of negative inventory records in the shop.
      lastReceivedCost: The cost of the last received inventory lot for the item in the shop.
      lastReceivedLotID: The ID of the last received inventory lot for the item in the shop.
      nextFifoLotCost: The cost of the next inventory lot in the FIFO queue in the shop.
      nextFifoLotID: The ID of the next inventory lot in the FIFO queue in the shop.
  - `onLayaway`: The total number of units that are currently reserved for layaways in the shop.
  - `onSpecialOrder`: The total number of units that are currently reserved for special orders in the shop.
  - `onWorkOrder`: The total number of units that are currently reserved for work orders in the shop.
  - `onTransferOut`: The total number of units that are currently in-transit that were sent from the shop to another shop.
  - `onTransferIn`: The total number of units that are currently in-transit that are expected to be received to the shop from another shop.
  - `averageCost`: The current weighted average cost of the item. Currently, this will only show a value for ItemShops with shopID=0 (account-wide).
  - `totalValueFifo`: The total value of the inventory in the shop, calculated using the FIFO (First In, First Out) method.
  - `totalValueAvgCost`: The total value of the inventory in the shop, calculated using the average cost method.
  - `totalValueNegativeInventory`: The total value of negative inventory records in the shop.
  - `lastReceivedCost`: The cost of the last received inventory lot for the item in the shop.
  - `lastReceivedLotID`: The ID of the last received inventory lot for the item in the shop.
  - `nextFifoLotCost`: The cost of the next inventory lot in the FIFO queue in the shop.
  - `nextFifoLotID`: The ID of the next inventory lot in the FIFO queue in the shop.
- **[Deprecated]** The `Item.ItemShop.m.layaways`, `Item.ItemShop.m.specialOrders`, and `Item.ItemShop.m.workOrders` metadata fields are now deprecated, and will be removed in a future version of the API, as they are redundant with the newly added fields.
- **[Deprecated]** The `Item.avgCost` field is now deprecated, and will be removed in a future version of the API, as it is redundant with the `ItemShop.averageCost` field. Both fields will return the same value for the time being.

### 2026.01.15

#### Refresh Token Grant

- **[Updated]** Improved fault tolerance of refresh token grant workflow. Revocation of used refresh tokens is now deferred until the newly issued access token is used to authenticate a request. This allows for refresh token grant attempts to be retried multiple times in the event of network issues or problems on the client end with recording new tokens (max 5 attempts per minute per connection). Clients should make sure that newly issued tokens are properly received and stored on their end before making API requests with them, but otherwise no changes are necessary to take advantage of this improvement.

### 2025.07.22

#### SaleLine

- **[New]** The `POST|PUT /API/V3/Account/{AccountID}/SaleLine` endpoints now supports an optional `requireFullReservation` request payload field when creating or editing layaways. If set to `true`, the API will ensure that the inventory quantity reserved for the sale line is equal to the quantity requested. If there is not enough inventory available, the request will fail and an error will be returned. If set to `false`, the API will reserve as much inventory as possible. Default value is `false`.
- **[New]** The `/API/V3/Account/{AccountID}/SaleLine` endpoints now support loading the `InventorySales` relationship. This provides information about the inventory quantity that has been reserved from each inventory lot for open layaway, special order or workorder lines, and the quantity that has been sold from each lot for lines attached to completed sales. This can be used to evaluate how many units have been reserved.
- **[New]** Added tutorial article on how to [create and manage reservations](https://developers.lightspeedhq.com/retail/tutorials/reservations/) using the SaleLine endpoint.

#### Sale

- **[Updated]** It is now possible to associate layaway or special order sale lines to a sale using the Sale endpoint by referencing the saleLineIDs in the SaleLines relation. This can allow associating multiple lines to a sale and/or completing the sale in a single request.

### 2025.07.10

#### Rate Limiting

- **[New]** Implemented a secondary rate limiting mechanism to mitigate burst traffic. This limiter uses a fixed window strategy that tracks the number of incoming requests within 1-second intervals, providing additional protection against high-frequency API calls and helping to ensure overall system reliability.

### 2025.06.06

#### Item

- **[Update]** Editing ItemShops from the Item endpoint is now more flexible. `ItemShop` objects provided in PUT requests may now provide either the `itemShopID` or the `shopID` field.
- **[Update]** Added additional validation for invalid or redundant `ItemShop` objects in POST and PUT requests.

#### ItemShop

- **[New]** Added `PUT /API/V3/Account/{AccountID}/ItemShop/{ItemShopID}` endpoint, which can be used to update the `reorderPoint` and `reorderLevel` fields of an item in a specific shop.

### 2025.05.23

#### ItemShop

- **[New]** Added `GET /API/V3/Account/{AccountID}/ItemShop` endpoint, which provides a more efficient mechanism for polling for changes to inventory levels than the previous approach of using the `ItemShop` relation of the `Item` endpoint.

### 2025.05.20

#### Terms of Use

- **[Updated]** Lightspeed has updated the Lightspeed API License Agreement effective [May 20, 2025].

### 2024.12.07

#### Custom Buttons

- **[New]** Lightspeed will now include a cryptographic signature in the query parameters of the URL that is generated when a custom button is clicked. This signature can be used by your application to verify the authenticity of the request. Validating the URL from your server is strongly recommended to ensure that the request originated from a user of Retail POS and not a malicious actor.
- **[Updated]** When a custom button is clicked, Lightspeed will now normalize the generated URL according to RFC-3986, and sort all query parameters alphabetically. This is to ensure that the URL being signed is consistent and can be more easily validated by your application.

### 2024.07.31

#### OAuth Authentication

A new, more secure, OAuth authorization server has been implemented. All integrators are advised to update their application to use the new OAuth endpoints as soon as possible. These changes have no impact on the functionality of the old OAuth endpoints or contents of the REST API itself. However, the previous OAuth endpoints are now considered deprecated and will eventually be removed.

- **[New]** Added `/auth/oauth/authorize` endpoint (replaces `/oauth/authorize.php`).
- **[New]** Added `/auth/oauth/token` endpoint (replaces `/oauth/access_token.php`).
- **[New]** Added `/auth/oauth/revoke` endpoint which allows clients to revoke a refresh token.
- **[New]** Added `/auth/oauth/introspect` endpoint which may be used for debugging purposes to validate and view the contents of an access token.
- **[New]** All OAuth endpoints now accept request payloads encoded in `application/json` format, in addition to `multipart/form-data` format.
- **[New]** Newly registered clients can be marked as “publicly distributed”. This makes using the client secret optional, but makes the Authorization Code Grant with PKCE flow mandatory. This should be used for any clients authenticating from a mobile app, desktop app, browser plugin, single-page app, etc.
- **[New]** The [Proof Key for Code Exchange (PKCE)](https://developers.lightspeedhq.com/retail/authentication/authorization-code-grant#authorization-code-grant-with-pkce) extension on Authorization Code Grant is now supported. Adoption of PKCE is recommended for all clients, but is mandatory for publicly distributed clients.
- **[New]** [Access Tokens](https://developers.lightspeedhq.com/retail/authentication/access-token) are now returned as JWT tokens, which encode some basic information about their access. The JWTs are signed by Lightspeed. Public keys for verifying the token signature are available at [https://cloud.lightspeedapp.com/.well-known/jwks](https://cloud.lightspeedapp.com/.well-known/jwks)
- **[New]** Performing a refresh token grant while the access token is still valid will now always revoke the old token and generate a new one (previously the same token would be returned again). However, attempting to refresh the token too frequently will result in your client being rate limited.
- **[New]** If too many requests with incorrect client credentials are provided, the client will be rate limited.
- **[Breaking]** The existing refresh token and access token are now invalidated when performing a [Refresh Token Grant](https://developers.lightspeedhq.com/retail/authentication/refresh-token). Your application should store the new refresh token value that is returned each time.
- **[Breaking]** Unused refresh tokens now automatically expire after 30 days. Previously, unused refresh tokens would be periodically purged from the database. This expiry is now automatic. As long as the refresh token is used regularly, the connection to the merchant account will remain active indefinitely.
- **[Breaking]** The `code`, `access_token`, and `refresh_token` fields returned by the OAuth endpoints are now significantly longer. The new length is variable, depending on the information encoded within them (e.g. scopes requested). Make sure that your storage mechanism can handle the new values without truncation.
- **[Breaking]** The token endpoint no longer returns the list of granted scopes. The scopes that are authorized are now embedded in the access token JWT under the `scope` claim. See the [Access Token](https://developers.lightspeedhq.com/retail/authentication/access-token) documentation for more information.
- **[Breaking]** The `systemuserid:{number}` scope is no longer used. The ID of the user who authorized the access token is now embedded in the access token JWT under the `sub` claim. See the [Access Token](https://developers.lightspeedhq.com/retail/authentication/access-token) documentation for more information.
- **[Updated]** All [authentication](https://developers.lightspeedhq.com/retail/authentication/authentication-overview) documentation in this document has been updated to reflect the new OAuth server, and to improve the legibility and accuracy of the information.
- [Migration] Please follow the following steps to migrate your application to use the new endoints:

    
      If your client authenticates from a publicly distributed application (e.g. mobile app, desktop app, browser extension, single-page app, etc.) please register a new client and select the “publicly distributed” checkbox. Otherwise, no change is needed to your client
      Review the changelog above to ensure that your application is prepared for the changes.
      Existing refresh tokens can be migrated to the new authorization server without needing user interaction to reauthorize the client. To do this, simply perform a Refresh Token Grant to the new /auth/oauth/token endpoint providing the original refresh token value. A refresh token in the new format will be returned, and the old refresh token will be invalidated.
  - If your client authenticates from a publicly distributed application (e.g. mobile app, desktop app, browser extension, single-page app, etc.) please register a new client and select the “publicly distributed” checkbox. Otherwise, no change is needed to your client
  - Review the changelog above to ensure that your application is prepared for the changes.
  - Existing refresh tokens can be migrated to the new authorization server without needing user interaction to reauthorize the client. To do this, simply perform a [Refresh Token Grant](https://developers.lightspeedhq.com/retail/authentication/refresh-token) to the new `/auth/oauth/token` endpoint providing the original refresh token value. A refresh token in the new format will be returned, and the old refresh token will be invalidated.

### 2024.02.27

#### SaleLine

- **[New]** POST/Create method added to create special order or layaway sale lines.
- **[Updated]** PUT/Update method allows for isSpecialOrder or isLayaway to be set for existing sale lines (this will remove the sale line from existing sale).
- **[Updated]** DELETE/Delete method restricts deletion of special order sale lines when the related special order is on either a Purchase Order or Inventory Transfer.

#### Sale/SaleLine

- **[Updated]** PUT/Update method will set the related Special Order status to completed when sale lines of type special order are attached to a Sale.

### 2023.09.26

#### OAuth Client Registration

- **[New]** Validation of API client registration and update forms has been improved.
- **[New]** API client registrations will now be automatically approved in most circumstances. Please note that only one client is permitted per integration.
- **[Breaking]** The API client redirect URL must now use the HTTPS protocol. This is enforced for all new API client registrations. Existing API clients must [update their client details](https://developers.lightspeedhq.com/(https://cloud.lightspeedapp.com/oauth/update.php)), if necessary, by January 1st, 2024. Following this date, new authorization grant requests will be blocked until the redirect URL is updated. This will not have any effect on existing API access tokens or refresh tokens.

### 2023.08.30

- **[New]** Added Sale Accounts relation to the SaleLine and Sale/SaleLine response payload. E.g.: API/V3/Account/{accountID}/SaleLine
- **[New]** Removed the gift card `code` from Sale Line Note object. To retrieve `code`, use `creditAccountID` returned in the `SaleAccounts` relation of the `SaleLine` response payload.

### 2022.05.20

#### Query Parameters

- The IN query parameter is now restricted to a maximum of 100 values per field.

### 2022.04.11

Published Version 3 of the API, which includes a completely redesigned pagination mechanism with significantly improved performance, providing both faster response times and improved stability for the API as a whole.

#### Summary of Changes

*The changes listed below only apply when V3 is specified as part of the path. Existing integrations will continue to work as-is for the time being. We recommend upgrading as soon as possible in order to benefit from the improved performance. Support for the previous API version is scheduled to be discontinued May 1st, 2023.*

- **[New]** Added support for versioning in the URI Path, e.g. `/API/V3/Account/1/Item`.
- **[Breaking]** The `offset` query parameter is removed. It is replaced with the `after` and `before` query parameters, which use cursors to resume the query in an efficient manner.
- **[New]** Response payloads now contain `next` and `previous` metadata attributes, which contain the full URI to the adjacent pages of results, allowing forward and backwards pagination.
- **[Breaking]** Response payloads no longer contain the `count` metadata attribute by default. It will only show if the `count=1` query parameter is provided as part of the request URI.
- **[Breaking]** Response payloads no longer contain the `offset` or `limit` metadata attributes.
- **[Breaking]** The `orderby` and `orderby_desc` query parameters are removed. They are collectively replaced by the `sort` query parameter. Prefix with the `-` character to indicate descending order.
- **[Breaking]** Sortable fields are now restricted. Each endpoint offers one or more fields that are allowed to be used for sorting. Most entities are sortable by the primary key field and the timeStamp field (if appropriate), though some endpoints offer additional fields.
- [New] Added sortable timeStamp field to the response payload of the CustomField and CustomFieldChoice endpoints
- See the [Pagination](https://developers.lightspeedhq.com/retail/introduction/pagination) section for additional details on these changes.

### 2022.01.18

#### Gift Cards

The `code` field in the response payloads of all CreditAccount endpoints is now masked unless the API key is authorized with the `employee:customers_view_gift_card_numbers` scope.

### 2022.01.11

#### Gift Cards

An additional rate limit of 1 request per second has been added to the gift card code lookup endpoint (`/API/V3/Account/#/CreditAccount?giftCard=true&code=[CODE]`).

### 2021.08.20

#### Gift Cards

When querying [Credit Accounts](https://developers.lightspeedhq.com/retail/endpoints/CreditAccount/#get-all-credit-accounts) the query parameter `giftCard=true` must be passed to include credit accounts of type giftCard.

To add balance to a gift card, the process has changed to a two-step process:

  1. A (POST/Create) request to create the sale, attach the gift card payment, and link to the gift card’s Credit Account.

  2. A (PUT/Update) call to attached the payment and finalize the sale.

The requirement for gift card codes to be valid EAN-13 or UPC-A format has been removed, and replaced by an 8 character minimum and 32 character maximum.

### 2018.21

#### Refresh Tokens

Refresh tokens that haven’t been used for 30 days will be deleted. There is still no expiry for refresh tokens, so they will continue to work indefinitely as long as they’re used at least once every 30 days.

### 2018.17

#### OAuth Client Registration

The client registration form will validate the redirect URI and Website URL to make sure they aren’t using any Lightspeed-controlled domains and check for other common issues. The contact phone number is now optional.

### 2018.16

#### Item

It’s now possible to unarchive an archived item by setting the `archived` field to `true`. To archive an item, use the [DELETE method](https://developers.lightspeedhq.com/retail/endpoints/Item/#delete-delete-an-item).

When creating or updating an item that belongs to a matrix, the item’s attributes will be added to the matrix’s list of attributes. See the [Item Matrices Tutorial](https://developers.lightspeedhq.com/retail/tutorials/itemmatrix/) for more information.

### 2018.14

#### Customer

A new action has been added to allow API applications to optionally anomymize customer records while archiving them.

### 2018.12

#### Customer

Customers are created with the values noEmail, noPhone, and noMail set to true unless explicitly set to false.

### 2018.8

#### Inventory Transfer

New endpoints have been added to read, create, update and delete transfer documents.

#### Authentication Error

The error message returned when an invalid access token is used has been updated to say “Invalid access token.”

#### OAuth Client Registration

When registering an OAuth client, the result page mislabelled the client ID as “Client Key”. This has been fixed.

### 2018.4

#### Sale

When creating a Sale with SaleLines, the employeeID for the SaleLines will default to the employeeID on the Sale.

#### Sale.SaleLine

When creating a SaleLine, the employeeID for the SaleLine will default to the employeeID on the Sale.

### 2018.3

#### Refreshing Access Tokens

A new access token will be created if the current access token expires in less than 10 seconds.

### 2018.2

#### Contact

Addresses now have fields to store the ISO country code and region code (state, province, etc.). These fields can be read and written through the API.

### 2017.23

#### Refreshing Access Tokens

To reduce the number of access tokens that are created, a new access token will only be created now if the previous access token has expired. Otherwise the current active access token will be returned. The `expires_in` field will reflect how much time is left before this token expires.

### 2017.18

#### Sale

Added 3 new time stamp fields to show the time the sale was created, last modified and completed.

#### Rate Limiting

Added an `X-LS-API-Drip-Rate` response header to return the current bucket drip rate.

### 2017.12

#### Various Endpoints

Fixed an issue causing the filter `archived=false` to return all records.

### 2017.7

#### OAuth Tokens

Users have more control over clients’ API access to their account in the Lightspeed Retail POS (R-Series) Settings. Refresh tokens can now be revoked, and all access tokens for a given client can be revoked in one click without revoking the corresponding refresh token(s).

### 2017.5

#### OAuth Tokens

Access/Tokens will no longer work if the employee that granted them has been locked.

### 2016.25

#### VendorReturn

VendorReturn records can now be filtered by timestamp.

### December 15, 2016

#### CCGateway

This endpoint has been removed.

### 2016.25

#### OAuth Scopes

[Major](https://developers.lightspeedhq.com/#label) Three read-only scopes have been added:

- employee:customer_read
- employee:inventory_read
- employee:register_read

### 2016.24

#### VendorReturn

The timestamp is now included in the VendorReturn response

### 2016.23

#### Category

Resolved an issue when searching Categories using the fullPathName parameter

#### Sale

Resolved an issue where larger totalDue values were being displayed in scientific notation

#### Item

[Major](https://developers.lightspeedhq.com/#label) The `serialized` and `serialized_assembly` itemTypes have been deprecated in favor of the `serialized` Item flag, which can be applied to the other 4 itemTypes. These 2 itemTypes can still be used, but the `serialized` flag must also be set to `true`.

#### ItemMatrix

[Major](https://developers.lightspeedhq.com/#label) The `serialized` and `serialized_assembly` itemTypes have been deprecated in favor of the `serialized` Item flag, which can be applied to the other 4 itemTypes. These 2 itemTypes can still be used, but the `serialized` flag must also be set to `true`.

ItemMatrix attributes with a value of 0 can be updated via the API

### 2016.20  - September 21, 2016

#### Employee

Employee response has been updated to remove employee pins

#### API Keys

[Major](https://developers.lightspeedhq.com/#label) Users attempting to request API keys are warned about the feature being deprecated

### 2016.16  - August 3, 2016

#### OAuth

[Major](https://developers.lightspeedhq.com/#label) Refresh tokens have been added to the OAuth workflow. Access tokens currently do not expire but will in the future. The refresh token will be used to request a new access token.

#### Item

Resolved an issue with JSON response for Note object

### 2016.12  - June 16, 2016

#### CreditAccount

[Major](https://developers.lightspeedhq.com/#label) giftCard status can now be set on new CreditAccounts

### 2016.11  - June 01, 2016

#### OAuth

[New](https://developers.lightspeedhq.com/#label)  The client should now use the Bearer authentication scheme when sending the access token in the Authorization request header.
`Authorization: Bearer {ACCESS_TOKEN}`

### 2016.10  - June 01, 2016

#### Data Formats

All JSON endpoints support pretty_print

### 2016.7  - April 11, 2016

#### InventoryCount

[Major](https://developers.lightspeedhq.com/#label) Resolved issue with last counted Item in Inventory Count

### 2016.4  - February 24, 2016

#### Vendor

[Major](https://developers.lightspeedhq.com/#label) Resolved error when sending PUT request to Vendor endpoint

### 2016.3  - February 11, 2016

#### OAuth

[New](https://developers.lightspeedhq.com/#label) OAuth response includes `expiry_time: 0`. OAuth tokens do not currently expire, but an expiry time will be enforced in the future.

### 2016.2  - January 28, 2016

#### Item

Resolved an issue when updating ItemShop QoH

### 2016.1  - January 13, 2016

#### Categories

Users are prevented from deleting categories that have subcategories
