---
title: Sale Notes
category: Tutorials
source: https://developers.lightspeedhq.com/retail/tutorials/salenotes/
---

# Sale Notes

Now is possible to read, create or modify sale notes through the API.

## Creating a sale notes

Making a POST request to the Sale endpoint

> PAYLOAD SAMPLE REQUEST

```json
{
    
    "SaleNotes":{
        "InternalNote": {
            "note": "Example Internal Note"
        },
        "PrintedNote": {
            "note": "Example Printed Note"
        }
    }
      
}
```

## Updating a Sale Note

> API request Sample

PUT /API/V3/Account/[account_id]/Sale/{saleID}

The body will be the same as the POST request. You do not need to specify the internal note or printed note IDs. Since each sale will only have at most one of each, then the backend will either create or update the notes for the sale in question depending on whether the note already exists or not.

## Reading sale notes

The response body will contain the same structure as the examples above.

> API Request Sample

```shell
GET  /API/V3/Account/[account_id]/Sale/[sale_id] or
GET /API/V3/Account/[account_id]/Sale
```

The `SaleNotes` relation must be loaded `load_relations=["SaleNotes"]` before it can be viewed
