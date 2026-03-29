---
title: Access Scopes
category: Authentication
source: https://developers.lightspeedhq.com/retail/authentication/scopes/
---

# Access Scopes

An OAuth access token can have a variety of permission levels for access to data in an account. This is called the scope. When redirecting an account user as part of the authorization grant flow, you must specify the scope of access needed by your application. The account user can approve or decline the requested access.

The scope is a space-separated list of permissions that your application is requesting. The permissions available for API clients are roughly equivalent to the employee rights that can be assigned to users using the Retail POS (R-Series) UI, however, all API scopes are prefixed with `employee:`.

The rights of the employee authorizing your integration also affect your access scope. For example, if you are granted a token with scope `employee:all` by an employee that doesn’t have the ‘Inventory - Purchase Orders’ right, you won’t be able to access Purchase Orders. Employee rights can be changed in the UI after the token is granted.

If an employee is locked, any token they granted will stop working.

The user is more likely to grant access if you only request the scope(s) necessary for your application to function. Scopes with the `_read` suffix only give read access; the rest give full access.

You can specify individual scopes by delimiting each one with a `+`. For example:

`https://cloud.lightspeedapp.com/auth/oauth/authorize?response_type=code&client_id={client_id}&scope=employee:inventory+employee:reports`

Note that you may need to URL encode the `+` depending on your development platform and environment.

Below is a list of allowed scope values:

| Scope | Description |
| --- | --- |
| employee:all | Grants full read and write access to the account. This grant will automatically assume all access rights that the authorizing user possesses |
| employee:admin | View, create, update, and archive administrative records. |
| employee:admin_employees | View, create, update, and archive employees. |
| employee:admin_inventory | View, create, update, and archive vendors and manufacturers. |
| employee:admin_purchases | View, create, update, and archive payment types, discounts, and taxes. |
| employee:admin_shops | View, create, update, and archive shops. |
| employee:admin_void_sale | Void sales. |
| employee:categories | View, create, update, and archive product categories. |
| employee:customers | View, create, update, and archive customers. |
| employee:customers_read | View customer accounts. |
| employee:customers_view_gift_card_numbers | View the “code” field unmasked in the response payloads of the credit account endpoints. |
| employee:inventory | View, create, update, and archive items and inventory. |
| employee:inventory_counts | View, create, update inventory counts. |
| employee:inventory_counts_reconcile | Reconcile inventory counts. |
| employee:inventory_read | View items and inventory. |
| employee:manufacturers | View, create, update, and archive manufacturers. |
| employee:product_cost | View and edit product cost values |
| employee:product_edit | create, update, and archive products |
| employee:purchase_orders | View, create, and update purchase orders |
| employee:register | Create new sales and read sales history. |
| employee:register_layaway | Create layaway sales. |
| employee:register_read | Read sales history. |
| employee:register_refund | Create refund sales. |
| employee:reports | View reports. |
| employee:special_orders | View, createm and update special orders. |
| employee:tags | View, create, update, and archive product tags. |
| employee:transfers | View, create, update, and archive transfers. |
| employee:vendors | View, create, update and archive vendors. |
| employee:vendor_returns | View vendor returns. |
| employee:workbench | View, create, update, and archive work orders. |
