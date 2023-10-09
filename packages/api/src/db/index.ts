import { Database } from 'bun:sqlite'

export const db = new Database('mydb.sqlite')

// const res = db.exec(`CREATE TABLE message (
//     id INTEGER PRIMARY KEY AUTOINCREMENT      NOT NULL,
//     content           VARCHAR NOT NULL,
//     token         VARCHAR      NOT NULL
// )`)

// const res = db.exec(`CREATE TABLE user (
//     id INTEGER PRIMARY KEY AUTOINCREMENT      NOT NULL,
//     name VARCHAR(100) NOT NULL,
//     handle           VARCHAR UNIQUE NOT NULL,
// token               VARCHAR      NOT NULL
// )`)
