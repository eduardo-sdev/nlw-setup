import Fastify from 'fastify'
import cors from '@fastify/cors'

import {PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get("/", () => {
    return 'helllo workd'
})

app.listen({ port: 3333 }).then(() =>
    console.log("server runing"))


