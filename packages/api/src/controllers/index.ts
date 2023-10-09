import { db } from "../db"
import type { Message, User } from "../interfaces"
import { v4 as uuid } from 'uuid'

class UserController {

    readOne(handle: string): User | null {
        const res = db.query('SELECT * FROM user WHERE handle = $handle').get({ $handle: handle }) as User

        return res
    }

    create(name: string, handle: string): User | null {
        const res = db.query('SELECT * FROM user WHERE handle = $handle').get({ $handle: handle }) as (User | null)

        if (res)
            return null

        const newToken = uuid()

        const newUser = db.query('INSERT INTO user (name, handle, token) VALUES ($name, $handle, $token) RETURNING *')
            .get({
                $name: name,
                $handle: handle,
                $token: newToken
            }) as User

        return newUser
    }

    delete() {
        return
    }
}

class MessageController {

    readAllByToken(token: string): Message[] {
        const user = db.query('SELECT * FROM user WHERE token = $token').get({ $token: token }) as User
        if (user === null) return []

        const messages = db.query('SELECT * FROM message WHERE handle = $handle').all({ $handle: user.handle }) as Message[]

        return messages
    }

    create(content: string, handle: string): Message {
        const message = db.query('INSERT INTO message (content, handle) VALUES ($content, $handle) RETURNING *')
            .get({ $content: content, $handle: handle }) as Message

        return message
    }

    delete() {
        return
    }
}

export const UserModel = new UserController()
export const MessageModel = new MessageController()