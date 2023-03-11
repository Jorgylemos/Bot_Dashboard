import dotenv from 'dotenv'
import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import http from 'http'

import { Application } from './app'
import { client } from './utils/DiscordClient'
import { PORT, BOT_TOKEN } from '../config'

dotenv.config()

const app = express()

const port = PORT as any

(async () => {

    try {

        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        await client.on('ready', () => {
            console.log(`🤖 Bot ${client.user.tag} is on!`)
        })

        Application()

        await client.login(BOT_TOKEN)

        http.createServer(app)
            .listen(port, '0.0.0.0', () => {
                console.log(`Express server listening at port ${port} 🚀`);
            });
        
    }catch(error){
        console.error(error)
    }

})()

export { app, Router, Request, Response  }