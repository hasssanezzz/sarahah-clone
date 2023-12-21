import { Elysia } from 'elysia'
import { User } from './interfaces'
import { MessageModel, UserModel } from './controllers'

// TODO add validation
// TODO add datetime
// TODO use a real DB
// TODO remove ids from response

const app = new Elysia()
    .get('/api/message/:token', ({ params }) => {
        const { token } = params

        const messages = MessageModel.readAllByToken(token)

        return messages
    })
    .post('/api/user', ({ body, set }) => {
        const { name, handle } = body as Omit<User, 'id' | 'token'>

        const oneWithHandle = UserModel.readOne(handle)

        if (oneWithHandle === null)
            return UserModel.create(name, handle)

        set.status = 403
        return { error: "Handle already in use" }
    })
    .post('/api/message/:handle', ({ params, body }) => {
        const { handle } = params
        const { content } = body as { content: string }

        const newMessage = MessageModel.create(content, handle)

        return newMessage
    })
    .listen(8080)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)