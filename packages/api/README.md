# Sarahah clone

A simple sarahah clone I developed to learn and try bun with [ElysiaJs](https://elysiajs.com)

## How it works

The API is fairly simple, there is no authentication, when a user is created he is given in which he can use to access his private messages he received, then his public handle is used to let people send him messages, this means a user can't access his received messaged wihtout his token.

## Environment variables

```
DB_PATH=<your_sqlite_db_path>
```

## Database schema

There are only 2 tables:

1. user
```sql
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT      NOT NULL,
    name VARCHAR(100) NOT NULL,
    handle           VARCHAR UNIQUE NOT NULL,
token               VARCHAR      NOT NULL
)

```

2. message
```sql
CREATE TABLE message (
    id INTEGER PRIMARY KEY AUTOINCREMENT      NOT NULL,
    content           VARCHAR NOT NULL,
    token         VARCHAR      NOT NULL
)
```

## Routes

As said before is API is simple, there are only 3 routes.

1. GET /api/message/:token
    *  Description: Retrieve messages by token.
    * Method: GET
    * Path: /api/message/:token
    * Parameters:
        * :token (Path Parameter): Token associated with messages.
    * Handler: Fetch messages using MessageModel.readAllByToken(token).

2. POST /api/user
    * Description: Create a new user.
    * Method: POST
    * Path: /api/user
    * Payload:
        * name (String): User's name.
        * handle (String): User's handle.
    * Handler: Check if the handle is already in use (`UserModel.readOne(handle)`).
    If not, create a new user using `UserModel.create(name, handle)`.
    If the handle is already in use, return a 403 status with an error message.

3. POST /api/message/:handle
    * Description: Create a new message.
    * Method: POST
    * Path: /api/message/:handle
    * Parameters:
        * :handle (Path Parameter): User handle associated with the message.
    * Payload:
        * content (String): Content of the message.
    * Handler: Create a new message using` MessageModel.create(content, handle)`.


This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
