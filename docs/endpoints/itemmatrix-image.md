---
title: ItemMatrix Image
category: Endpoints
source: https://developers.lightspeedhq.com/retail/endpoints/ItemMatrix-Image/
---

# ItemMatrix Image

#### Description

A product image. This controller handles both the image data and metadata for images.

**Please note, this endpoint should not be used as an alternative to image hosting for your own external website. Traffic is monitored for excessive use, and additional charges to your account may apply.**

#### Actions Allowed

| GET/Read (single) | True |
| --- | --- |
| GET/Read (query) | True |
| POST/Create | True |
| PUT/Update | True |
| DELETE/Delete | True |

#### Scopes Required

| employee:cfd | true |
| --- | --- |
| employee:register | true |
| employee:inventory_base | true |
| employee:reports | true |
| employee:workbench | true |
| employee:customers | true |
| employee:admin | true |

#### Additional Relations

- ItemMatrix

#### Sortable Fields

- imageID
- timeStamp
- itemMatrixID

### Uploading Images

```shell
$ curl -v -X POST -H 'Authorization: Bearer {Access Token}' \
-H 'Accept: application/xml' \
-H 'Content-Type: multipart/form-data' \
--form-string 'data={See Below}' \
-F 'image=@/Users/lightspeed/testimage.jpg' \
'https://api.lightspeedapp.com/API/V3/Account/{AccountID}/ItemMatrix/{ItemMatrixID}/Image.json'
```

```python
import requests

url = 'https://api.lightspeedapp.com/API/V3/Account/{accountID}/Image.json'
headers = {'Authorization': 'Bearer {Access Token}'}
files = {'image': ('testimage.jpg', open('/Users/lightspeed/testimage.jpg', 'rb'), 'image/jpeg')}
payload = {'data': '{See Below}'}

r = requests.post(url, files=files, data=payload, headers=headers)

print(r.text)
```

```php
$url = "https://api.lightspeedapp.com/API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID}Image.json";

$headers = array(
    'Authorization: Bearer {Access Token}',
    'Accept: application/json',
    'Content-Type: multipart/form-data');

$imagefile = '/Users/lightspeed/testimage.jpg'; //Full path of image file you wish to use

$postfields = array(
    'data' => '{See Below}',
    'image' => new CURLFile($imagefile, 'text/plain', 'testimage.jpg'));

$filesize = filesize($imagefile);

$ch = curl_init();

$options = array(
    CURLOPT_URL => $url,
    CURLOPT_HEADER => true,
    CURLOPT_POST => 1,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_VERBOSE => 1,
    CURLOPT_POSTFIELDS => $postfields,
    CURLOPT_INFILESIZE => $filesize,
    CURLOPT_RETURNTRANSFER => true
); // cURL options

curl_setopt_array($ch, $options);
$output = curl_exec($ch);

curl_close($ch);

echo '';
print_r($output);
echo '';

?>
```

> Data Payload:

```json
{
    "description": "Test Image",
    "ordering": 1
}
```

Images are uploaded using a multipart form encoded POST. The first part contains the metadata as a typical API XML or JSON structure. The second part contains the image data. This is an example raw request:

```
POST /API/V3/Account/{Account ID}/ItemMatrix/{ItemMatrix ID}/Image.json
Accept: application/json
Content-Type: multipart/form-data; boundary=25112bca3fa7474e9874f9e8654c27aa
--25112bca3fa7474e9874f9e8654c27aa
Content-Disposition: form-data; name="data"
{
    "description": "Test Image",
    "ordering": 1
}
--25112bca3fa7474e9874f9e8654c27aa
Content-Disposition: form-data; name="image"; filename="Test Image.jpg"
Content-Type: image/jpeg
.... Image data ....
--25112bca3fa7474e9874f9e8654c27aa--
```

The ordering field specifies the sort order, starting at 0. This is optional but recommended. If you don’t give a value, it will be set to 0.

---

> Example JSON Read (Single)

```json
{
    "@attributes": {
        "count": "1"
    },
    "Image": {
        "imageID": "234",
        "description": "Test Image",
        "filename": "Test Image.jpg",
        "ordering": "1",
        "publicID": "dsxcqjwl1s4j6ppmnmec",
        "baseImageURL": "https://res.cloudinary.com/lightspeed-retail/image/upload/",
        "size": "380994",
        "createTime": "2021-09-19T19:32:43+00:00",
        "timeStamp": "2021-09-19T19:32:43+00:00",
        "itemID": "0",
        "itemMatrixID": "43"
    }
}
```

### Getting Images

To retrieve the image metadata, eg filename, description, parent, just do a normal GET on the image.

#### Getting the Image

To retrieve the image itself, do a GET and utilize the baseImageURL field.
The value returned will be a URL prefix like https://host/path/.
The client should append either two or three things to arrive at a full URL:

- The publicID and an extension
- A “settings” section, the publicID, and an extension.

Like this: `{baseImageURL}/{settings}/{publicID}.{extension}`. The full URL for example on the right as a JPEG (with no special settings) would be https://res.cloudinary.com/lightspeed-retail/image/upload/dsxcqjwl1s4j6ppmnmec.jpg.

#### Settings

A comma-separated list of any of the following settings: width, height, and either c_scale (default), c_fill or c_limit.

| w_{width} | integer width amount in pixels. Example: w_300 |
| --- | --- |
| h_{height} | integer height amount in pixels. Example: h_200 |
| c_scale | (default) scale the image to fit the given dimensions, without preserving aspect ratio |
| c_limit | limit the image size to the given dimensions, preserving aspect ratio |
| c_fill | crop to the given dimensions, using center gravity |
| g_{direction} | specify a gravity when using c_fill. center, north_west, north, north_east, west, east, south_west, south, south_east |

**Examples**

| Get the image as JPEG | {baseImageURL}/{publicID}.jpg |
| --- | --- |
| Get the image as PNG | {baseImageURL}/{publicID}.png |
| Scale the image | {baseImageURL}/w_300,h_200/{publicID}.jpg |
| Scale and preserve aspect ratio | {baseImageURL}/w_300,h_200,c_limit/{publicID}.jpg |
| Centered crop | {baseImageURL}/w_300,h_200,c_fill/{publicID}.jpg |
| Crop from top-left corner | {baseImageURL}/w_300,h_200,c_fill,g_north_west/{publicID}.jpg |

---

#### Image Fields

| imageID | (integer) The primary key. /API/V3/Account/{accountID}/Image/{imageID} |
| --- | --- |
| description | (string)   Description or caption for the image |
| filename | (string)  Original filename of the image |
| ordering | (integer)  Display order of Image |
| publicID | (string)  ID string used to retrieve Image from Cloudinary |
| itemID | (integer) Foreign key for Item this is an Image of /API/V3/Account/{accountID}/Item/{itemID} |
| itemMatrixID | (integer) Foreign key for ItemMatrix this is an Image of /API/V3/Account/{accountID}/ItemMatrix/{itemMatrixID} |
| Item | (object) Item this is an Image of /API/V3/Account/{accountID}/Item |
| ItemMatrix | (object) ItemMatrix this is an Image of /API/V3/Account/{accountID}/ItemMatrix |
