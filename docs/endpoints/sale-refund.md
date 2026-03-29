---
title: Sale Refund
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Sale-refund/
---

# Sale Refund

#### Description

A simplified API for creating a Refund type of Sale.  Refunds are expressed as a Sale whose SaleLines have a negative unitQuantity and whose SalePayments have negative amount.  The Sale API may be used to Create/Read/Update/Delete Sales which are Refunds, but this API provides an easier and faster way to set up a Refund.  The advantages of the Refund API are:

1. Avoids an extra call to the API (usually the client would have to query for a Sale in order to get the info required to set up the Refund).
2. Easier and smaller payload necessary to set up a Refund.
3. Can obtain original SaleLine money totals, so refund amounts can be optional in the payload.
4. Able to easily Refund an entire Sale, without specifying individual SaleLines.
5. Can specify a ticketNumber as the Sale ID in the URL.

Sample URL with standard ID: `.../Account/{accountID}/Sale/1234/refund`

Sample URL with ticketNumber: `.../Account/{accountID}/Sale/220000001234/refund`

> Definition

```
POST /API/V3/Account/{accountID}/Sale/{saleID}/refund.json
```

> Example minimal payload: refunding an entire Sale (no SaleLines specified), with cash payment and original total amounts:

```xml
100  
  1  
  5  
      
          
      2
```

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": 100,
      "registerID": 1,
      "shopID": 5,
      "SalePayments": {
        "SalePayment": {
          "paymentTypeID": 2
        }
      }
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/refund.json"
```

> Example payload where the client has specified the desired refund amount, with cash payment:

```xml
100  
  1  
  5  
      
          
       currency="USD">-16.24      
      2
```

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": 100,
      "registerID": 1,
      "shopID": 5,
      "SalePayments": {
        "SalePayment": {
          "amount": -16.24,
          "paymentTypeID": 2
        }
      }
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/refund.json"
```

> Example payload that specifies an uncompleted Refund, a specific SaleLine from the original Sale, a (possibly partial) unitQuantity, and a desired refund amount with cash payment:

```xml
100  
  1  
  5  
  false  
      
          
      1234      
      -2    
      
    
      
          
       currency="USD">-16.24      
      2
```

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-d '{
      "employeeID": 100,
      "registerID": 1,
      "shopID": 5,
      "completed": false,
      "SaleLines": {
        "SaleLine": {
          "parentSaleLineID": 1234,
          "unitQuantity": -2
        }
      },
      "SalePayments": {
        "SalePayment": {
          "amount": -16.24,
          "paymentTypeID": 2
        }
      }
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Sale/{saleID}/refund.json"
```

#### User Interface

- Sales → Refund

#### Actions Allowed

| POST/Create | True |
| --- | --- |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### Request Cost

| POST/Create | 10 drips |
| --- | --- |

#### Refund Fields

| timeStamp | (datetime) The last date/time this sale was modified, or if complete the date/time at which it was completed.  (readonly) |
| --- | --- |
| completed | (boolean) Whether the refund Sale is completed. If it is completed the inventory will be removed and the refund payments will be logged. (optional, default: true) |
| employeeID | (integer) The foreign key for the employee who processed this sale. /API/V3/Account/{accountID}/Employee/{employeeID} |
| registerID | (integer) The foreign key for the register where this sale was processed. /API/V3/Account/{accountID}/Register/{registerID} |
| shopID | (integer) The foreign key for the shop where this sale was processed. /API/V3/Account/{accountID}/Shop/{shopID} |
| saleID | (integer) The primary key. of the refund created.  This will be present in the output payload returned from the Create action.  It does not need to be specified within the input to Create, as the saleID is taken from the URL. /API/V3/Account/{accountID}/Sale/{saleID} |
| SalePayments | (object) The payments for this refund. At least one PaymentType must be provided in order to specify how the money will be refunded. /API/V3/Account/{accountID}/SalePayment |
