---
title: Locale
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Locale/
---

# Locale

> Definition

```
GET /API/Locale.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/Locale.json"
```

> Object Sample JSON

```json
{
  "Locale": [
    {
      "name": "Argentina",
      "country": "Argentina",
      "countryCode": "AR",
      "states": "",
      "currencySymbol": "$",
      "currencyCode": "ARS",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$500",
            "value": "500",
            "significant": "true"
          },
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "50¢",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          }
        ]
      },
      "taxName1": "IVA"
    },
    {
      "name": "Australia",
      "country": "Australia",
      "countryCode": "AU",
      "states": "ACT,CHR,COC,JB,NSW,NT,QLD,SA,TAS,VIC,WA",
      "currencySymbol": "$",
      "currencyCode": "AUD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_AU",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "50¢",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "20¢",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "GST"
    },
    {
      "name": "Belgium",
      "country": "Belgium",
      "countryCode": "BE",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_BE",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "BTW/TVA"
    },
    {
      "name": "Canada",
      "country": "Canada",
      "countryCode": "CA",
      "states": "MB,PE,QC,SK",
      "currencySymbol": "$",
      "currencyCode": "CAD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_CA",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "GST",
      "taxName2": "PST"
    },
    {
      "name": "Canada GST+PST",
      "country": "Canada",
      "countryCode": "CA",
      "states": "MB,PE,QC,SK",
      "currencySymbol": "$",
      "currencyCode": "CAD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_CA",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "GST",
      "taxName2": "PST"
    },
    {
      "name": "Canada HST",
      "country": "Canada",
      "countryCode": "CA",
      "states": "BC,NB,NL,NS,ON",
      "currencySymbol": "$",
      "currencyCode": "CAD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_CA",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "HST"
    },
    {
      "name": "Canada GST",
      "country": "Canada",
      "countryCode": "CA",
      "states": "AB,NT,NU,YT",
      "currencySymbol": "$",
      "currencyCode": "CAD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_CA",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "GST"
    },
    {
      "name": "Colombia",
      "country": "Colombia",
      "countryCode": "CO",
      "states": "AMA,ANT,ARA,ATL,BOL,BOY,CAL,CAQ,CAS,CAU,CES,CHO,COR,CUN,DC,GUA,GUV,HUI,LAG,MAG,MET,NAR,NSA,PUT,QUI,RIS,SAP,SAN,SUC,TOL,VAC,VAU,VID",
      "currencySymbol": "$",
      "currencyCode": "COP",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100000",
            "value": "100000",
            "significant": "true"
          },
          {
            "name": "$50000",
            "value": "50000",
            "significant": "true"
          },
          {
            "name": "$20000",
            "value": "20000",
            "significant": "true"
          },
          {
            "name": "$10000",
            "value": "10000",
            "significant": "true"
          },
          {
            "name": "$5000",
            "value": "5000",
            "significant": "true"
          },
          {
            "name": "$2000",
            "value": "2000",
            "significant": "true"
          },
          {
            "name": "$1000",
            "value": "1000",
            "significant": "true"
          },
          {
            "name": "$500",
            "value": "500",
            "significant": "true"
          },
          {
            "name": "$200",
            "value": "200",
            "significant": "true"
          },
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "false"
          }
        ]
      },
      "taxName1": "IVA"
    },
    {
      "name": "Denmark",
      "country": "Denmark",
      "countryCode": "DK",
      "states": "Hovedstaden,Midtjylland,Nordjylland,Sjælland,Syddanmark",
      "currencySymbol": "kr",
      "currencyCode": "DKK",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "1000 kr",
            "value": "1000",
            "significant": "false"
          },
          {
            "name": "500 kr",
            "value": "500",
            "significant": "true"
          },
          {
            "name": "200 kr",
            "value": "200",
            "significant": "true"
          },
          {
            "name": "100 kr",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "50 kr",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "20 kr",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "10 kr",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "5 kr",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "2 kr",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "1 kr",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "50-øre",
            "value": "0.5",
            "significant": "true"
          }
        ]
      },
      "taxName1": "moms"
    },
    {
      "name": "Finland",
      "country": "Finland",
      "countryCode": "FI",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "ALV"
    },
    {
      "name": "France",
      "country": "France",
      "countryCode": "FR",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "TVA"
    },
    {
      "name": "Ireland",
      "country": "Ireland",
      "countryCode": "IE",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "VAT"
    },
    {
      "name": "Luxembourg",
      "country": "Luxembourg",
      "countryCode": "LU",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "TVA"
    },
    {
      "name": "Mexico",
      "country": "Mexico",
      "countryCode": "MX",
      "states": "AGS,BC,BCS,CAM,CHIH,CHIS,COAH,COL,D.F.,DGO,GRO,GTO,HGO,JAL,MEX,MICH,MOR,NAY,NL,OAX,PUE,Q. ROO,QRO,SIN,SLP,SON,TAB,TAMPS,TLAX,VER,YUC,ZAC",
      "currencySymbol": "$",
      "currencyCode": "MXN",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "es_MX",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$1000",
            "value": "1000",
            "significant": "false"
          },
          {
            "name": "$500",
            "value": "500",
            "significant": "true"
          },
          {
            "name": "$200",
            "value": "200",
            "significant": "true"
          },
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "50¢",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "20¢",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "IVA"
    },
    {
      "name": "Netherlands",
      "country": "Netherlands",
      "countryCode": "NL",
      "states": "",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_NL",
      "dateFormat": "d-m-Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "BTW"
    },
    {
      "name": "Spain",
      "country": "Spain",
      "countryCode": "ES",
      "states": "Alava,Albacete,Alicante,Almería,Asturias,Avila,Badajoz,Baleares,Barcelona,Burgos,Cantabria,Castellón,Ceuta,Ciudad Real,Cuenca,Cáceres,Cádiz,Córdoba,Girona,Granada,Guadelajara,Guipúzcoa,Huelva,Huesca,Jaén,La Coruña,La Rioja,Las Palmas,León,Lleida,Lugo,Madrid,Melilla,Murcia,Málaga,Navarra,Orense,Palencia,Pontevedra,Salamanca,Santa Cruz de Tenerife,Segovia,Sevilla,Soria,Tarragona,Teruel,Toledo,Valencia,Valladolid,Vizcaya,Zamora,Zaragoza",
      "currencySymbol": "€",
      "currencyCode": "EUR",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "€500",
            "value": "500",
            "significant": "false"
          },
          {
            "name": "€200",
            "value": "200",
            "significant": "false"
          },
          {
            "name": "€100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "€50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "€20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "€10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "€5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "€2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "€1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "€0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "€0.20",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "€0.10",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "€0.05",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "€0.02",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "€0.01",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "IVA"
    },
    {
      "name": "Switzerland",
      "country": "Switzerland",
      "countryCode": "CH",
      "states": "AG,AI,AR,BE,BL,BS,FR,GE,GL,GR,JU,LU,NE,NW,OW,SG,SH,SO,SZ,TG,TI,UR,VD,VS,ZG,ZH",
      "currencySymbol": "CHF",
      "currencyCode": "CHF",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d.m.Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "1000 Fr.",
            "value": "1000",
            "significant": "false"
          },
          {
            "name": "200 Fr.",
            "value": "200",
            "significant": "true"
          },
          {
            "name": "100 Fr.",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "50 Fr.",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "20 Fr.",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "10 Fr.",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "5 Fr.",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "2 Fr.",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "1 Fr.",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "1/2 Fr.",
            "value": "0.5",
            "significant": "true"
          },
          {
            "name": "20 c.",
            "value": "0.2",
            "significant": "true"
          },
          {
            "name": "10 c.",
            "value": "0.1",
            "significant": "true"
          },
          {
            "name": "5 c.",
            "value": "0.05",
            "significant": "true"
          }
        ]
      },
      "taxName1": "TVA"
    },
    {
      "name": "Trinidad / Tobago",
      "country": "Trinidad / Tobago",
      "countryCode": "TT",
      "states": "*",
      "currencySymbol": "TT$",
      "currencyCode": "TTD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "true",
      "languageTag": "en_TT",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "true"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "Tax"
    },
    {
      "name": "United Arab Emirates",
      "country": "United Arab Emirates",
      "countryCode": "AE",
      "states": "",
      "currencySymbol": "AED",
      "currencyCode": "AED",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "AED 1000",
            "value": "1000",
            "significant": "true"
          },
          {
            "name": "AED 500",
            "value": "500",
            "significant": "true"
          },
          {
            "name": "AED 200",
            "value": "200",
            "significant": "true"
          },
          {
            "name": "AED 100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "AED 50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "AED 20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "AED 10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "AED 5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "AED 1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "AED 0.50",
            "value": "0.5",
            "significant": "false"
          },
          {
            "name": "AED 0.25",
            "value": "0.25",
            "significant": "false"
          }
        ]
      },
      "taxName1": "VAT"
    },
    {
      "name": "United Kingdom",
      "country": "United Kingdom",
      "countryCode": "GB",
      "states": "ENG,NIR,SCT,WLS",
      "currencySymbol": "£",
      "currencyCode": "GBP",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_GB",
      "dateFormat": "d/m/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "£100",
            "value": "100",
            "significant": "false"
          },
          {
            "name": "£50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "£20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "£10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "£5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "£2",
            "value": "2",
            "significant": "true"
          },
          {
            "name": "£1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "50p",
            "value": "0.5",
            "significant": "true"
          },
          {
            "name": "20p",
            "value": "0.2",
            "significant": "false"
          },
          {
            "name": "10p",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5p",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "2p",
            "value": "0.02",
            "significant": "false"
          },
          {
            "name": "1p",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "VAT"
    },
    {
      "name": "United States",
      "country": "United States",
      "countryCode": "US",
      "states": "AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY,AS,DC,FM,GU,MH,MP,PW,PR,VI,AE,AA,AE,AE,AE,AP",
      "currencySymbol": "$",
      "currencyCode": "USD",
      "currencyPrecision": "2",
      "includeTaxOnLabels": "false",
      "languageTag": "en_US",
      "dateFormat": "m/d/Y",
      "CurrencyDenominations": {
        "CurrencyDenomination": [
          {
            "name": "$100",
            "value": "100",
            "significant": "true"
          },
          {
            "name": "$50",
            "value": "50",
            "significant": "true"
          },
          {
            "name": "$20",
            "value": "20",
            "significant": "true"
          },
          {
            "name": "$10",
            "value": "10",
            "significant": "true"
          },
          {
            "name": "$5",
            "value": "5",
            "significant": "true"
          },
          {
            "name": "$1",
            "value": "1",
            "significant": "true"
          },
          {
            "name": "25¢",
            "value": "0.25",
            "significant": "true"
          },
          {
            "name": "10¢",
            "value": "0.1",
            "significant": "false"
          },
          {
            "name": "5¢",
            "value": "0.05",
            "significant": "false"
          },
          {
            "name": "1¢",
            "value": "0.01",
            "significant": "false"
          }
        ]
      },
      "taxName1": "Tax"
    }
  ]
}
```

#### Description

Lists all the locales available globally and their attributes.

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

#### Locale Fields

| name | (string) Name of the locale |
| --- | --- |
| country | (string) Country of the locale |
| states | (string) States of the locale |
| currencySymbol | (string) Currency symbol of the locale |
| currencyCode | (string) Currency code of the locale |
| currencyPrecision | (float) Currency precision of the locale |
| cashRoundingPrecision | (float) Value of smallest unit of currency used in cash transactions |
| includeTaxOnLabels | (boolean) Include tax on labels setting of the locale |
| languageTag | (string) Language tag as described by the ISO 639-1 standard |
| dateFormat | (string) Date format of the locale |
| datetimeFormat | (string) Date time format of the locale |
| CurrencyDenominations | (collection) Currency denominations of the locale |
| taxName1 | (string) Tax name 1 of the locale |
| taxName2 | (string) Tax name 2 of the locale |

#### Sortable Fields

Sorting is not available for this endpoint.
