---
title: Option
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Option/
---

# Option

#### Description

Options that the account has turned on

#### Actions Allowed

| GET/Read (query) | True |
| --- | --- |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Option Fields

| name | (string) Name of the option |
| --- | --- |
| value | (string) Value of the option |

#### Sortable Fields

- optionID
- name

---

### GET All options

Retrieve a list of all options in the account.

> Definition

```
GET /API/V3/Account/{accountID}/Option.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Option.json"
```

> Sample JSON Response

```json
{
    "Option": [
        {
            "name": "auto_logout_delay",
            "value": "120"
        },
        {
            "name": "require_pin_delay",
            "value": "0"
        },
        {
            "name": "cost_method",
            "value": "average"
        },
        {
            "name": "require_pin_before_each_sale",
            "value": ""
        },
        {
            "name": "no_discounts_on_labor",
            "value": ""
        },
        {
            "name": "require_customer_for_serialized_sales",
            "value": ""
        },
        {
            "name": "no_original_receipt_refund_to_credit_account_only",
            "value": ""
        },
        {
            "name": "no_auto_switching_to_box_of_from_singles_on_sales",
            "value": ""
        },
        {
            "name": "disable_giftcard_refunds",
            "value": ""
        },
        {
            "name": "disable_credit_refunds",
            "value": ""
        },
        {
            "name": "disable_inventory_warnings",
            "value": ""
        },
        {
            "name": "billing_header",
            "value": ""
        },
        {
            "name": "billing_address",
            "value": ""
        },
        {
            "name": "billing_payable_to",
            "value": ""
        },
        {
            "name": "billing_show_limit",
            "value": ""
        },
        {
            "name": "billing_days_till_due",
            "value": "30"
        },
        {
            "name": "billing_percent_due",
            "value": "1.0E-8"
        },
        {
            "name": "import_catalog_categories_with_products",
            "value": ""
        },
        {
            "name": "disable_email",
            "value": ""
        },
        {
            "name": "email_header",
            "value": ""
        },
        {
            "name": "email_footer",
            "value": ""
        },
        {
            "name": "email_reply_to",
            "value": ""
        },
        {
            "name": "email_subject",
            "value": ""
        },
        {
            "name": "label_size",
            "value": "2.25x1.25"
        },
        {
            "name": "scan_small_labels",
            "value": ""
        },
        {
            "name": "disable_receipt_auto_print",
            "value": ""
        },
        {
            "name": "locale",
            "value": "United States"
        },
        {
            "name": "locale_code",
            "value": ""
        },
        {
            "name": "share_item_data_online",
            "value": ""
        },
        {
            "name": "first_start_status",
            "value": "done"
        },
        {
            "name": "last_welcome_back",
            "value": ""
        },
        {
            "name": "goto_training_registered",
            "value": ""
        },
        {
            "name": "background_url",
            "value": ""
        },
        {
            "name": "logo_url",
            "value": ""
        },
        {
            "name": "invert_logo",
            "value": "true"
        },
        {
            "name": "hide_custom_fields",
            "value": ""
        },
        {
            "name": "currency_code",
            "value": "0"
        },
        {
            "name": "tax_pricing",
            "value": "0"
        },
        {
            "name": "date_format",
            "value": "m/d/Y"
        },
        {
            "name": "ecom_language",
            "value": "en_US"
        },
        {
            "name": "payments_settings_opencashdrawer",
            "value": "all_payments"
        },
        {
            "name": "publish_item_to_ecom_limit",
            "value": ""
        },
        {
            "name": "publish_to_ecom_default_value",
            "value": "0"
        },
        {
            "name": "publish_to_ecom_matrix_child_limit",
            "value": ""
        },
        {
            "name": "loyalty_merchant_id",
            "value": ""
        },
        {
            "name": "payment_settings_migrated",
            "value": "3"
        }
    ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |
