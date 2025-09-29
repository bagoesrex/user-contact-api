# Contact API Specification

## Create Contact

POST `/api/contacts`

Headers :

- Authorization: token

Request Body :

```json
{
  "first_name": "Bagoes",
  "last_name": "Rex",
  "email": "bagoesrex@gmail.com",
  "phone": "08912345678"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Bagoes",
    "last_name": "Rex",
    "email": "bagoesrex@gmail.com",
    "phone": "08912345678"
  }
}
```

## Get Contact

GET `/api/contacts/:contactId`

Headers :

- Authorization: token

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Bagoes",
    "last_name": "Rex",
    "email": "bagoesrex@gmail.com",
    "phone": "08912345678"
  }
}
```

## Update Contact

PUT `/api/contacts/:contactId`

Headers :

- Authorization: token

Request Body :

```json
{
  "first_name": "Bagoes",
  "last_name": "Rex",
  "email": "bagoesrex@gmail.com",
  "phone": "08912345678"
}
```

Response Body :

```json
{
  "data": {
    "id": 1,
    "first_name": "Bagoes",
    "last_name": "Rex",
    "email": "bagoesrex@gmail.com",
    "phone": "08912345678"
  }
}
```

## Remove Contact

DELETE `/api/contacts/:contactId`

Headers :

- Authorization: token

Response Body :

```json
{
  "data": true
}
```

## Search Contact

GET `/api/contacts`

Headers :

- Authorization: token

Query Params :

- name: string, contact first_name or contact last_name (optional)
- phone: string, contact phone (optional)
- email: string, contact email (optional)
- page: number, default 1
- size: number, default 10

Response Body :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Bagoes",
      "last_name": "Rex",
      "email": "bagoesrex@gmail.com",
      "phone": "08912345678"
    },
    {
      "id": 2,
      "first_name": "Bagoes",
      "last_name": "Rex",
      "email": "bagoesrex@gmail.com",
      "phone": "08912345678"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```
