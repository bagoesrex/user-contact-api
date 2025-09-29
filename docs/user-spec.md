# User API Specification

## Register User

POST `/api/users`

Request Body :

```json
{
  "username": "sikucink",
  "password": "secret",
  "name": "Bagoes Rex"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "sikucink",
    "name": "Bagoes Rex"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Login User

POST `/api/users/login`

Request Body :

```json
{
  "username": "sikucink",
  "password": "secret"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "sikucink",
    "name": "Bagoes Rex",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

GET `/api/users/current`

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": {
    "username": "sikucink",
    "name": "Bagoes Rex"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

PATCH `/api/users/current`

Headers :

- Authorization: token

Request Body :

```json
{
  "password": "secret", //optional
  "name": "Bagoes Rex" //optional
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "sikucink",
    "name": "Bagoes Rex"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username already registered"
}
```

## Logout User

DELETE `/api/users/current`

Headers :

- Authorization: token

Response Body (Success) :

```json
{
  "data": true
}
```
