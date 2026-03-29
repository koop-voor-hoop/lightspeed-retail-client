---
title: Workorder WorkorderImage
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/Workorder-WorkorderImage/
---

# Workorder WorkorderImage

#### Description

The images on a Workorder used for reference.

#### User Interface

- Service → Workorders → edit Workorder / New Workorder → Add an image to the workorder

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:workbench | true |
| --- | --- |

#### WorkorderImage Fields

| workorderImageID | (integer) The unique numerical ID for the workorder image. /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderImageID} |
| --- | --- |
| description | (string) The description of the image. |
| filename | (string) The filename of the image. |
| ordering | (integer) The order of the image in the list. |
| publicID | (string) The public ID of the image. |
| baseImageURL | (string) The base URL of the image. |
| size | (integer) The size of the image. |
| createTime | (datetime) The date/time the image was created. |
| workorderID | (integer) The foreign key for the workorder this image is on. /API/V3/Account/{accountID}/Workorder/{workorderID} |
| timeStamp | (datetime) The date/time the record was last modified. |

#### Sortable Fields

- workorderImageID
- timeStamp

---

### GET All workorder images

Retrieve a list of all workorder images in the account

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderImage": [
    {
      "workorderImageID": "1",
      "description": "",
      "filename": "image.jpg",
      "ordering": "0",
      "baseImageURL": "https://www.example.com/images/",
      "size": "123",
      "createTime": "2021-10-25T15:27:34+00:00",
      "timeStamp": "2021-10-25T15:27:34+00:00",
      "workorderID": "1"
    },
    {...}
  ]
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |
| --- | --- |

---

### GET Single workorder image

Retrieve a single workorder image by its ID.

> Definition

```
GET /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderImageID}.json
```

> Sample Request

```shell
$ curl -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderImageID}.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "count": "1"
  },
  "WorkorderImage": {
    "workorderImageID": "1",
    "description": "",
    "filename": "image.jpg",
    "ordering": "0",
    "baseImageURL": "https://www.example.com/images/",
    "size": "123",
    "createTime": "2021-10-25T15:27:34+00:00",
    "timeStamp": "2021-10-25T15:27:34+00:00",
    "workorderID": "1"
  }
}
```

#### Attributes

| workorderImageID | (integer) The unique numerical ID for the workorder image. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |

---

### POST Create a workorder image

Create a workorder image based on given parameters.

> Definition

```
POST /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage.json
```

> Sample Request

```shell
$ curl -X POST -H "Authorization: Bearer {Access Token}" \
-F "image=@/path/to/your/image.jpg" \
-F "description=Bike" \
-F "ordering=2" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderImage": {
    "workorderImageID": "1",
    "description": "Bike",
    "filename": "image.jpg",
    "ordering": "2",
    "baseImageURL": "https://www.example.com/images/",
    "size": "123",
    "createTime": "2021-10-25T15:27:34+00:00",
    "timeStamp": "2021-10-25T15:27:34+00:00",
    "workorderID": "1"
  }
}
```

#### Attributes

| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |
| --- | --- |
| image | (file) The image file to upload. Required Field |
| description | (string) The description of the image. |
| ordering | (integer) The order of the image in the list. |

---

### PUT Update a workorder image

Update a workorder image based on given parameters.

> Definition

```
PUT /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderItem}.json
```

> Sample Request

```shell
$ curl -X PUT -H "Authorization: Bearer {Access Token}" \
-d '{
        "description": "Bike",
        "ordering": "2",
    }' "https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage.json"
```

> Sample JSON Response

```json
{
  "@attributes": {
    "next": "",
    "previous": ""
  },
  "WorkorderImage": {
    "workorderImageID": "1",
    "description": "Bike",
    "filename": "image.jpg",
    "ordering": "2",
    "baseImageURL": "https://www.example.com/images/",
    "size": "123",
    "createTime": "2021-10-25T15:27:34+00:00",
    "timeStamp": "2021-10-25T15:27:34+00:00",
    "workorderID": "1"
  }
}
```

#### Attributes

| workorderImageID | (integer) The unique numerical ID for the workorder image. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |
| description | (string) The description of the image. |
| ordering | (integer) The order of the image in the list. |

---

### DELETE Delete a workorder image

Permanently delete a workorder image based on given parameters.

> Definition

```
DELETE /API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderItem}.json
```

> Sample Request

```shell
$ curl -X DELETE -H "Authorization: Bearer {Access Token}" \
"https://api.lightspeedapp.com/API/V3/Account/{accountID}/Workorder/{workorderID}/WorkorderImage/{workorderImageID}.json"
```

> Sample JSON Response

```json
{
  "name": "WorkorderImage",
  "primaryID": "2"
}
```

#### Attributes

| workorderImageID | (integer) The unique numerical ID for the workorder image. Required Field |
| --- | --- |
| workorderID | (integer) The foreign key for the workorder this image is on. Required Field |

---
