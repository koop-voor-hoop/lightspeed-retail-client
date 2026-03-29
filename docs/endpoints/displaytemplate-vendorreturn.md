---
title: DisplayTemplate VendorReturn
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/DisplayTemplate-VendorReturn/
---

# DisplayTemplate VendorReturn

#### Description

Uses a print template to print a vendor return.

Use the `.html` emitter or `Content-Type: text/html` header to get an HTML rendering. You’ll need to specify the template. See the [example below](https://developers.lightspeedhq.com/#get-single-record-rendered-in-html).

Lightspeed Retail POS (R-Series) uses the [Twig templating engine](https://twig.symfony.com/doc/1.x/). We maintain a public [Github repository](https://github.com/merchantos/PrintTemplates) containing the base templates and some customizable examples.

**Lightspeed does not give support for template design.**

You can also request normal XML or JSON as you can with other endpoints. This will let you see exactly what data is sent to the template.

#### User Interface

- Inventory → Vendor Returns

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Additional Relations

The Display Template endpoints each load a fixed set of relations. The `load_relations` parameter is ignored.

- Note
- VendorReturnItems
- VendorReturnItems.Item
- VendorReturnItems.Item.ItemVendorNums
- Shop
- Shop.Contact
- Vendor
- Vendor.Contact
- VendorReturnItems.VendorReturnItemReason

#### Scopes Required

| employee:vendor_returns | true |
| --- | --- |

#### Sortable Fields

- vendorReturnID
