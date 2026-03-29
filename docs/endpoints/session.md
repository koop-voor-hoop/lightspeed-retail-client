---
title: Session
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Session/
---

# Session

#### Description

Gives information about the current session (based on the access token), including the employee and access rights.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |

#### Session Fields

| sessionID | (integer) Not used for access token sessions. |  |
| --- | --- | --- |
| sessionCookie | (string) Not used for access token sessions. |  |
| employeeID | (integer) The foreign key for the employee that granted the access token. | /API/V3/Account/{accountID}/Employee/{employeeID} |
| systemCustomerID | (integer) The account ID. | /API/V3/Account/{accountID} |
| systemUserID | (integer) The systemUserID for the employee, which is unique accross all accounts. |  |
| systemAPIClientID | (integer) The unique identifier of the API client associated with the access token. |  |
| systemAPIKeyID | (integer) The unique identifier of the access token. |  |
| ecomUrl | (string) If applicable, the URL of the associated C-Series account. |  |
| shopCount | (integer) The number of shops on the account. |  |

#### Employee Fields

| employeeID | (integer)  The unique numeric identifier for the employee. |
| --- | --- |
| firstName | (string) First name of the employee. |
| lastName | (string) Last name of the employee. |
| singleShop | (boolean) Whether the employee is locked to a specific shop. |
| hasPin | (boolean) Whether the employee has a PIN. |
| isCheckedIn | (boolean) Whether the employee checked (clocked) in. |
| checkedInAt | (datetime) If the employee is checked in, the time that they checked in. |

#### Rights

Note that not all rights apply to the API.

| admin | Can access the Settings area. |
| --- | --- |
| admin_employees | Can view and edit Employees. |
| admin_inventory | Can set Price Rules, Discounts, Payment Types, and taxes. |
| admin_purchases | Can access inventory-related settings in Settings. |
| admin_shops | Can view and edit Shop Settings. |
| admin_void_sale | Can void transactions. |
| all_read | Can view all records. |
| allow_login | Can log into Lightspeed Retail POS (R-Series) from any device connected to the internet using their username and password. A user without external login rights can only authenticate using their access PIN locally after a session is started by another account user with the right. |
| categories | Can edit Categories. |
| customers | Can access the Customers area. |
| customers_credit_limit | Can set credit limits for customers. |
| customers_read | Can view customers. |
| ecom | Can access the eCom tab. |
| inventory_base | Can access the Inventory area. |
| inventory_counts | Can create inventory counts. |
| inventory_import | Can import both items and product images into inventory. |
| inventory_read | Can view items and inventory. |
| manufacturers | Can edit Manufacturers. |
| product_cost | Can view and edit item cost. |
| product_edit | Can create new items or edit existing items. |
| purchase_orders | Can access and receive Purchase Orders. |
| register | Can access the Sales area. Disabling this option prevents the user from making sales. |
| register_catalogs | Can import items from catalogs to the local inventory. |
| register_close | Can close a register. |
| register_layaway | Can create layaways & special orders. |
| register_line_discount | Can apply a discount to individual line items. |
| register_open | Can open a register (till). |
| register_price | Can change the prices of items on a specific sale. |
| register_read | Can view sales history. |
| register_refund | Can process a refund. |
| register_transaction_discount | Can apply discounts to an entire sale. |
| register_withdraw | Can withdraw money from a register. |
| reports | Can access the Reports area. |
| special_orders | Can view existing Special Orders. |
| tags | Can edit Tags. |
| transfers | Can send and receive Transfers between stores. |
| vendor_returns | Can access and send Vendor Returns. |
| vendors | Can edit Vendors. |
| vr_reasons | Can edit Vendor Return Reasons. |
| workbench | Can access the Service area. |

#### Sortable Fields

This endpoint is not sortable.

---

### GET Session

Retrieve a list of session details for the access token

> Description

```
GET /API/Session.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
'https://api.lightspeedapp.com/API/Session.json'
```

> Sample Json response

```json
{
    "sessionID": "",
    "sessionCookie": "PHPSESSID=; path=/",
    "employeeID": "2",
    "systemCustomerID": "83050",
    "systemUserID": "170236",
    "systemAPIClientID": "25578",
    "systemAPIKeyID": "1757062",
    "ecomUrl": "https://example.shoplightspeed.com",
    "shopCount": "3",
    "Employee": {
        "employeeID": "2",
        "firstName": "James",
        "lastName": "Ratcliffe",
        "singleShop": "false",
        "hasPin": "true",
        "isCheckedIn": "true",
        "checkedInAt": "2021-07-24T16:20:32-04:00"
    },
    "Rights": {
        "admin": "true",
        "admin_employees": "true",
        "admin_inventory": "true",
        "admin_purchases": "true",
        "admin_shops": "true",
        "admin_void_sale": "true",
        "all_read": "true",
        "allow_login": "true",
        "categories": "true",
        "customers": "true",
        "customers_credit_limit": "true",
        "customers_read": "true",
        "ecom": "true",
        "inventory_base": "true",
        "inventory_counts": "true",
        "inventory_import": "true",
        "inventory_read": "true",
        "manufacturers": "true",
        "product_cost": "true",
        "product_edit": "true",
        "purchase_orders": "true",
        "register": "true",
        "register_catalogs": "true",
        "register_close": "true",
        "register_layaway": "true",
        "register_line_discount": "true",
        "register_open": "true",
        "register_price": "true",
        "register_read": "true",
        "register_refund": "true",
        "register_transaction_discount": "true",
        "register_withdraw": "true",
        "reports": "true",
        "special_orders": "true",
        "tags": "true",
        "transfers": "true",
        "vendor_returns": "true",
        "vendors": "true",
        "vr_reasons": "true",
        "workbench": "true"
    }
}
```
