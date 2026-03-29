---
title: ShipTo
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ShipTo/
---

# ShipTo

#### Description

When Sales need to be shipped to the customer a ShipTo record is created to track the shipping process.

#### User Interface

- Register → New Sale → Customer → attach a customer → Ship To button under customer’s name
- Inventory → Shipping

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |

#### Scopes Required

| employee:customers | true |
| --- | --- |

#### Additional Relations

- Contact

#### ShipTo Fields

| shipToID | (integer) The unique numerical ID for the ship to. /API/V3/Account/{accountID}/ShipTo/{shipToID} |
| --- | --- |
| shipped | (boolean) Whether this shipment has been shipped out. |
| timeStamp | (datetime) The last date/time the shipment was modified. |
| shipNote | (string) Notes for the shipment. |
| firstName | (string) The first name for the shipment |
| lastName | (string) The last name for the shipment |
| customerID | (integer) The foreign key for the customer this is a shipment for. /API/V3/Account/{accountID}/Customer/{customerID} |
| saleID | (integer) The foreign key for the sale that this is a shipment for. /API/V3/Account/{accountID}/Sale/{saleID} |
| Contact | (object) The contact info for where this shipment is going. The shipping address. |

#### Sortable Fields

- shipToID
- timeStamp
- saleID

#### See Also

- [Contact](https://developers.lightspeedhq.com/retail/endpoints/Customer/#contact-fields)

---

### GET All ships to

Retrieve a list of all ships to in the account

> Definition

```
GET /API/V3/Account/{accountID}/ShipTo.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ShipTo.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "ShipTo": [
    {
      "shipToID": "1",
      "shipped": "true",
      "timeStamp": "2021-09-02T13:53:12+00:00",
      "shipNote": "Call before leaving product at the door",
      "firstName": "Alex",
      "lastName": "Lugo",
      "company": "",
      "customerID": "1",
      "saleID": "75"
    },
    {...}
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single ship to

Retrieve a single ship to by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/ShipTo/{shipToID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/ShipTo/{shipToID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "ShipTo": {
    "shipToID": "3",
    "shipped": "true",
    "timeStamp": "2021-09-14T18:38:19+00:00",
    "shipNote": "",
    "firstName": "Alex",
    "lastName": "Lugo",
    "company": "Lightspeed HQ",
    "customerID": "1",
    "saleID": "97"
  }
}
```

#### Attributes

| shipToID | (integer) The unique numerical ID for the ship to. Required Field |
| --- | --- |

---
