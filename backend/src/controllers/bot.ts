import { app, Request, Response } from '../server'
import { PrismaClient } from '@prisma/client'
import { client } from '../utils/DiscordClient'

const prisma = new PrismaClient()

class BotControllers {
    async Bot(req: Request, res: Response){
        const bot = await prisma.bot.findUnique({
            where: {
                bot: client.user.tag
            }
        })

        if(bot?.bot === client.user.tag){
            console.log("Already exists")
        } else {
            console.log("Created with success!")
            await prisma.bot.create({
                select: {
                    bot: true
                },
                data: {
                    bot: client.user.tag,
                    prefix: "/" // Default prefix "/" - slash
                }
            })
        }
    }

    async BotSettings(){

    }

    async BotSettingsUpdate(){

    }
}

export const { Bot, BotSettings, BotSettingsUpdate } = new BotControllers()