---
title: SalePayment SalePaymentSignature
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/SalePayment-SalePaymentSignature/
---

# SalePayment SalePaymentSignature

> Example XML Read

```xml
1
  2021-08-04T20:19:36+00:00
  5
```

> Example XML Write

```xml
1
  2021-08-04T20:19:36+00:00
  5
```

#### Description

A sale payment signature.  This controller handles both the signature file and metadata.

**Uploading sale payment signature file in pdf format**

Files are uploaded using a multipart form encoded POST. The first part contains the metadata as a typical API xml or json structure. The second part contains the file data. Server maintains no more than one signature per sale payment. An example POST would look like:

```
POST /API/V3/Account/{account_id}/SalePayment/{salePaymentID}/SalePaymentSignature
Accept: application/xml
Content-Type: multipart/form-data; boundary=25112bca3fa7474e9874f9e8654c27aa
--25112bca3fa7474e9874f9e8654c27aa
Content-Disposition: form-data; name="data"
<SalePaymentSignature>
</SalePaymentSignature>
--25112bca3fa7474e9874f9e8654c27aa
Content-Disposition: form-data; name="binary"; filename="sig.pdf"
Content-Type: application/pdf
.... Signature file data ....
--25112bca3fa7474e9874f9e8654c27aa--
```

SalePaymentSignature must have a SalePayment parent.

**Getting SalePaymentSignature metadata**

To retrieve the signature metadata, eg. file object name, create time, the parent sale payment, just do a normal GET on SalePayment/ID/SalPaymentSignature, passing in the specific salePaymentID

**Getting the SalePaymentSignature file**

To retrieve the signature binary data itself, do a GET and append emitter .pdf.

Examples:

- For the metadata:
    
      /API/V3/Account/1/SalePayment/2/SalePaymentSignature
  - /API/V3/Account/1/SalePayment/2/SalePaymentSignature
- For the signature:
    
      /API/V3/Account/1/SalePayment/2/SalePaymentSignature.pdf
  - /API/V3/Account/1/SalePayment/2/SalePaymentSignature.pdf

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | False |
| DELETE/Delete | False |

#### Scopes Required

| employee:register | true |
| --- | --- |

#### SalePaymentSignature Fields

| salePaymentSignatureID | (key) The primary key of the Sale Payment Signature |
| --- | --- |
| createTime | (datetime) The time the signature was created |
| salePaymentID | (key) The primary ID of the corresponding sale payment |

#### Sortable Fields

- salePaymentSignatureID
