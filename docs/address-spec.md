# Address API Specification

## Create Address

POST `/api/contacts/:contactId/addresess`

Headers :

- Authorization: token

Request Body :

```json
{
  "street": "Johar No.25, optional",
  "city": "Semarang, optional",
  "province": "Jawa Tengah, optional",
  "country": "Indonesia",
  "postal_code": "12345"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "Johar No.25, optional",
    "city": "Semarang, optional",
    "province": "Jawa Tengah, optional",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

## Get Address

GET `/api/contacts/:contactId/addresess/:addressId`

Headers :

- Authorization: token

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "Johar No.25, optional",
    "city": "Semarang, optional",
    "province": "Jawa Tengah, optional",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

## Update Address

PUT `/api/contacts/:contactId/addresess/:addressId`

Headers :

- Authorization: token

Request Body :

```json
{
  "street": "Johar No.25, optional",
  "city": "Semarang, optional",
  "province": "Jawa Tengah, optional",
  "country": "Indonesia",
  "postal_code": "12345"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "street": "Johar No.25, optional",
    "city": "Semarang, optional",
    "province": "Jawa Tengah, optional",
    "country": "Indonesia",
    "postal_code": "12345"
  }
}
```

## Remove Address

DELETE `/api/contacts/:contactId/addresess/:addressId`

Headers :

- Authorization: token

Response Body :

```json
{
  "data": true
}
```

## List Addresses

GET `/api/contacts/:contactId/addresess`

Headers :

- Authorization: token

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Johar No.25, optional",
      "city": "Semarang, optional",
      "province": "Jawa Tengah, optional",
      "country": "Indonesia",
      "postal_code": "12345"
    },
    {
      "id": 2,
      "street": "Johar No.25, optional",
      "city": "Semarang, optional",
      "province": "Jawa Tengah, optional",
      "country": "Indonesia",
      "postal_code": "12345"
    }
  ]
}
```
