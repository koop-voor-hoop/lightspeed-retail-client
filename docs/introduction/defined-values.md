---
title: Defined Values
category: Introduction
source: https://developers.lightspeedhq.com/retail/introduction/definedvalues/
---

# Defined Values

## Reserved Payment Types

Reserved [payment types](https://developers.lightspeedhq.com/retail/endpoints/PaymentType/) are the system-defined payment types. When a reserved payment type is used for a sale, the `internalReserved` field of the `PaymentType` object is set to `true`. The `type` field contains the payment type. Its value will either be a reserved payment type or be set to `user defined`.

The complete list of reserved payment types is: `gift card`, `cash`, `credit account`,`credit card`, `ecom`, `adjustment`.

---

## Workorder Statuses

There are five possible system-defined [workorder stauses](https://developers.lightspeedhq.com/retail/endpoints/WorkorderStatus/).

The complete list of workorder statuses is: `open`, `waiting`, `estimate`, `finished`, `paid`.
