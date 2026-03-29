---
title: Industry
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Industry/
---

# Industry

#### Description

Available Industries.

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| PUT/Update | True |

#### Scopes Required

| admin | true |
| --- | --- |

#### Industry Fields

| employee:industryID | (integer) The unique numerical ID for the industry. |
| --- | --- |
| employee:name | (string) Name of the Industry. |
| employee:enabled | (boolean) Is the industry enable for the account. |

#### Sortable Fields

- industryID

---

### GET All industries

Retrieve a list of industries avaible for the account

> Definition

```
GET /API/V3/Account/{accountID}/Industry.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Industry.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "Industry": [
    {
      "industryID": "1",
      "name": "Bicycles",
      "enabled": "false",
      "catalogIndustryID": "1"
    },
    {
      "industryID": "2",
      "name": "Skateboards",
      "enabled": "false",
      "catalogIndustryID": "2"
    },
    {
      "industryID": "3",
      "name": "Off Road Motor",
      "enabled": "false",
      "catalogIndustryID": "3"
    },
    {
      "industryID": "4",
      "name": "Motorcycles",
      "enabled": "false",
      "catalogIndustryID": "4"
    },
    {
      "industryID": "5",
      "name": "Swim",
      "enabled": "false",
      "catalogIndustryID": "6"
    },
    {
      "industryID": "6",
      "name": "Golf",
      "enabled": "false",
      "catalogIndustryID": "8"
    },
    {
      "industryID": "7",
      "name": "Pet",
      "enabled": "false",
      "catalogIndustryID": "10"
    },
    {
      "industryID": "8",
      "name": "Bicycles Canada",
      "enabled": "false",
      "catalogIndustryID": "12"
    },
    {
      "industryID": "9",
      "name": "Fly Fishing",
      "enabled": "false",
      "catalogIndustryID": "14"
    },
    {
      "industryID": "10",
      "name": "Hardware",
      "enabled": "false",
      "catalogIndustryID": "16"
    },
    {
      "industryID": "11",
      "name": "Racks",
      "enabled": "false",
      "catalogIndustryID": "17"
    },
    {
      "industryID": "12",
      "name": "Hobby",
      "enabled": "false",
      "catalogIndustryID": "18"
    },
    {
      "industryID": "13",
      "name": "Ski and Snowboard",
      "enabled": "false",
      "catalogIndustryID": "19"
    },
    {
      "industryID": "14",
      "name": "Outdoor",
      "enabled": "false",
      "catalogIndustryID": "21"
    },
    {
      "industryID": "15",
      "name": "Computer",
      "enabled": "false",
      "catalogIndustryID": "22"
    },
    {
      "industryID": "16",
      "name": "Games",
      "enabled": "true",
      "catalogIndustryID": "24"
    },
    {
      "industryID": "17",
      "name": "Home Furnishings/Decor",
      "enabled": "false",
      "catalogIndustryID": "26"
    },
    {
      "industryID": "18",
      "name": "Landscaping",
      "enabled": "false",
      "catalogIndustryID": "28"
    },
    {
      "industryID": "19",
      "name": "Agricultural",
      "enabled": "false",
      "catalogIndustryID": "30"
    },
    {
      "industryID": "20",
      "name": "Multisport",
      "enabled": "false",
      "catalogIndustryID": "31"
    },
    {
      "industryID": "21",
      "name": "Running",
      "enabled": "false",
      "catalogIndustryID": "33"
    },
    {
      "industryID": "22",
      "name": "Footwear",
      "enabled": "false",
      "catalogIndustryID": "35"
    },
    {
      "industryID": "23",
      "name": "Hunting/Fishing",
      "enabled": "false",
      "catalogIndustryID": "36"
    },
    {
      "industryID": "24",
      "name": "Boating",
      "enabled": "false",
      "catalogIndustryID": "38"
    },
    {
      "industryID": "25",
      "name": "Medical Supply",
      "enabled": "false",
      "catalogIndustryID": "40"
    },
    {
      "industryID": "26",
      "name": "Baseball",
      "enabled": "false",
      "catalogIndustryID": "42"
    },
    {
      "industryID": "27",
      "name": "Toy",
      "enabled": "false",
      "catalogIndustryID": "46"
    },
    {
      "industryID": "28",
      "name": "Adult",
      "enabled": "false",
      "catalogIndustryID": "48"
    },
    {
      "industryID": "29",
      "name": "Children's Books",
      "enabled": "false",
      "catalogIndustryID": "50"
    },
    {
      "industryID": "30",
      "name": "Gift",
      "enabled": "false",
      "catalogIndustryID": "52"
    },
    {
      "industryID": "31",
      "name": "Comic Books",
      "enabled": "false",
      "catalogIndustryID": "54"
    },
    {
      "industryID": "32",
      "name": "Firearm",
      "enabled": "false",
      "catalogIndustryID": "56"
    },
    {
      "industryID": "33",
      "name": "Tobacco",
      "enabled": "false",
      "catalogIndustryID": "58"
    },
    {
      "industryID": "34",
      "name": "Education",
      "enabled": "false",
      "catalogIndustryID": "60"
    },
    {
      "industryID": "35",
      "name": "Food",
      "enabled": "false",
      "catalogIndustryID": "62"
    },
    {
      "industryID": "36",
      "name": "Scooter",
      "enabled": "false",
      "catalogIndustryID": "64"
    },
    {
      "industryID": "37",
      "name": "Clothing",
      "enabled": "false",
      "catalogIndustryID": "66"
    },
    {
      "industryID": "38",
      "name": "Vitamins",
      "enabled": "false",
      "catalogIndustryID": "68"
    },
    {
      "industryID": "39",
      "name": "Christian Books",
      "enabled": "false",
      "catalogIndustryID": "146"
    },
    {
      "industryID": "40",
      "name": "Billiard",
      "enabled": "false",
      "catalogIndustryID": "150"
    },
    {
      "industryID": "41",
      "name": "Books",
      "enabled": "false",
      "catalogIndustryID": "154"
    },
    {
      "industryID": "42",
      "name": "Coffee",
      "enabled": "false",
      "catalogIndustryID": "156"
    },
    {
      "industryID": "43",
      "name": "Small Engine Repair",
      "enabled": "false",
      "catalogIndustryID": "162"
    },
    {
      "industryID": "44",
      "name": "Paintball",
      "enabled": "false",
      "catalogIndustryID": "166"
    },
    {
      "industryID": "45",
      "name": "Garden",
      "enabled": "false",
      "catalogIndustryID": "170"
    },
    {
      "industryID": "46",
      "name": "Surfing",
      "enabled": "false",
      "catalogIndustryID": "172"
    },
    {
      "industryID": "47",
      "name": "Car Audio",
      "enabled": "false",
      "catalogIndustryID": "173"
    },
    {
      "industryID": "48",
      "name": "Ski and Snowboard Canada",
      "enabled": "false",
      "catalogIndustryID": "175"
    },
    {
      "industryID": "49",
      "name": "Furniture",
      "enabled": "false",
      "catalogIndustryID": "177"
    },
    {
      "industryID": "50",
      "name": "Paint",
      "enabled": "false",
      "catalogIndustryID": "179"
    },
    {
      "industryID": "51",
      "name": "Sewing",
      "enabled": "false",
      "catalogIndustryID": "181"
    },
    {
      "industryID": "52",
      "name": "Home",
      "enabled": "false",
      "catalogIndustryID": "183"
    },
    {
      "industryID": "53",
      "name": "Beauty",
      "enabled": "false",
      "catalogIndustryID": "185"
    },
    {
      "industryID": "54",
      "name": "Jewelry",
      "enabled": "false",
      "catalogIndustryID": "187"
    },
    {
      "industryID": "55",
      "name": "Knitting",
      "enabled": "false",
      "catalogIndustryID": "189"
    },
    {
      "industryID": "56",
      "name": "Baby",
      "enabled": "false",
      "catalogIndustryID": "191"
    },
    {
      "industryID": "57",
      "name": "Hardware Canada",
      "enabled": "false",
      "catalogIndustryID": "193"
    },
    {
      "industryID": "58",
      "name": "Outdoor Canada",
      "enabled": "false",
      "catalogIndustryID": "195"
    },
    {
      "industryID": "59",
      "name": "Home Brewing",
      "enabled": "false",
      "catalogIndustryID": "197"
    },
    {
      "industryID": "60",
      "name": "Vitamins (Canada)",
      "enabled": "false",
      "catalogIndustryID": "199"
    },
    {
      "industryID": "61",
      "name": "Vacuum",
      "enabled": "false",
      "catalogIndustryID": "201"
    },
    {
      "industryID": "62",
      "name": "Archery",
      "enabled": "false",
      "catalogIndustryID": "203"
    },
    {
      "industryID": "63",
      "name": "Electronics",
      "enabled": "true",
      "catalogIndustryID": "205"
    },
    {
      "industryID": "64",
      "name": "Music",
      "enabled": "false",
      "catalogIndustryID": "207"
    },
    {
      "industryID": "65",
      "name": "Fitness",
      "enabled": "false",
      "catalogIndustryID": "209"
    },
    {
      "industryID": "66",
      "name": "RV",
      "enabled": "false",
      "catalogIndustryID": "211"
    },
    {
      "industryID": "67",
      "name": "Equestrian",
      "enabled": "false",
      "catalogIndustryID": "213"
    },
    {
      "industryID": "68",
      "name": "Hockey",
      "enabled": "false",
      "catalogIndustryID": "215"
    },
    {
      "industryID": "69",
      "name": "Accessories",
      "enabled": "false",
      "catalogIndustryID": "217"
    },
    {
      "industryID": "70",
      "name": "Appliances",
      "enabled": "false",
      "catalogIndustryID": "219"
    },
    {
      "industryID": "71",
      "name": "Watches",
      "enabled": "false",
      "catalogIndustryID": "221"
    },
    {
      "industryID": "72",
      "name": "Glasses",
      "enabled": "false",
      "catalogIndustryID": "223"
    },
    {
      "industryID": "73",
      "name": "Gift (Canada)",
      "enabled": "false",
      "catalogIndustryID": "225"
    },
    {
      "industryID": "74",
      "name": "Office Supply",
      "enabled": "false",
      "catalogIndustryID": "226"
    },
    {
      "industryID": "75",
      "name": "Travel",
      "enabled": "false",
      "catalogIndustryID": "228"
    },
    {
      "industryID": "76",
      "name": "Automotive",
      "enabled": "false",
      "catalogIndustryID": "229"
    },
    {
      "industryID": "77",
      "name": "Art & Craft",
      "enabled": "false",
      "catalogIndustryID": "231"
    },
    {
      "industryID": "78",
      "name": "Equestrian (Canada)",
      "enabled": "false",
      "catalogIndustryID": "233"
    },
    {
      "industryID": "79",
      "name": "Toy (Canada)",
      "enabled": "false",
      "catalogIndustryID": "235"
    },
    {
      "industryID": "80",
      "name": "Automotive (Canada)",
      "enabled": "false",
      "catalogIndustryID": "236"
    },
    {
      "industryID": "81",
      "name": "Off Road Motor (Canada)",
      "enabled": "false",
      "catalogIndustryID": "238"
    },
    {
      "industryID": "82",
      "name": "Food (Canada)",
      "enabled": "false",
      "catalogIndustryID": "239"
    },
    {
      "industryID": "83",
      "name": "Home (Canada)",
      "enabled": "false",
      "catalogIndustryID": "241"
    },
    {
      "industryID": "84",
      "name": "Outdoor UK",
      "enabled": "false",
      "catalogIndustryID": "242"
    },
    {
      "industryID": "85",
      "name": "Bicycles UK",
      "enabled": "false",
      "catalogIndustryID": "243"
    },
    {
      "industryID": "86",
      "name": "Hockey (Canada)",
      "enabled": "false",
      "catalogIndustryID": "244"
    },
    {
      "industryID": "87",
      "name": "Photography",
      "enabled": "false",
      "catalogIndustryID": "245"
    },
    {
      "industryID": "88",
      "name": "Hardware UK",
      "enabled": "false",
      "catalogIndustryID": "246"
    },
    {
      "industryID": "89",
      "name": "Skates and Blades",
      "enabled": "false",
      "catalogIndustryID": "247"
    },
    {
      "industryID": "90",
      "name": "Figure Skates",
      "enabled": "false",
      "catalogIndustryID": "248"
    },
    {
      "industryID": "91",
      "name": "Sporting Goods",
      "enabled": "false",
      "catalogIndustryID": "249"
    },
    {
      "industryID": "92",
      "name": "Masks and Costumes",
      "enabled": "false",
      "catalogIndustryID": "250"
    }
  ]
}
```

#### Attributes

|  | No attributes available. |
| --- | --- |

---

### GET Single industry

Retrieve a single industry by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Industry/{industryID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Industry/{industryID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Industry": {
    "industryID": "92",
    "name": "Masks and Costumes",
    "enabled": "false",
    "catalogIndustryID": "250"
  }
}
```

#### Attributes

| industryID | (integer) The unique numerical ID for the industry. Required Field |
| --- | --- |

---

### PUT Update an industry

Update an existing industry based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Industry/{industryID}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "enabled": "true"
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Industry/{industryID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "Industry": {
    "industryID": "92",
    "name": "Masks and Costumes",
    "enabled": "true",
    "catalogIndustryID": "250"
  }
}
```

#### Attributes

| enabled | (boolean) Is the industry enable for the account. |
| --- | --- |
