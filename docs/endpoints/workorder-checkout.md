---
title: Workorder Checkout
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder-Checkout/
---

# Workorder Checkout

#### Description

Transition a Workorder to a Sale. This will create a Sale and SaleLines for all the WorkorderItems and WorkorderLines on the Workorder.

#### User Interface

- Service → Workorders → edit Workorder → Checkout → Sales Register - Work Orders Tab → Complete

#### Actions Allowed

*
[POST/Create](https://developers.lightspeedhq.com/retail/endpoints/Workorder-Checkout/#post-create-a-sale-for-the-workorder) | **True**

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### Checkout Fields

| saleID | (integer) The unique numerical ID for the sale create. /API/V3/Account/{accountID}/Sale/{saleID} |
| --- | --- |

---

### POST Create a sale for the workorder

Create a sale to checkout and complete the workorder.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder/{workorderID}/Checkout.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{}' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/Checkout.json"
```

```
> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Checkout": {
    "saleID": "1"
  }
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |
| --- | --- |

---
