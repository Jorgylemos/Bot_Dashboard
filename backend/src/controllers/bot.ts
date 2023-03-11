import { app, Request, Response } from '../server'
import { PrismaClient } from '@prisma/client'
import { client } from '../utils/DiscordClient'

const prisma = new PrismaClient()

class BotControllers {

    FindID = async () =>{
       const botId = await prisma.bot.findUnique({
            where: {
                bot: client.user.tag
            },
            select: {
                id: true,
            }
        })

        return botId?.id
    }

    Bot = async (req: Request, res: Response) => {

        const botId = await this.FindID().then((res) => res)

        const bot = await prisma.bot.findUnique({
            where: {
               id: botId 
            },
            select: {
                bot: true
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

    BotSettings = async (req: Request, res: Response) => {

        const botId = await this.FindID().then((res) => res)

        const BotData = await prisma.bot.findFirst({
            where: {
                id: botId
            },
            select: {
                bot: true,
                prefix: true
            }
        })

        res.json({ BotData })

    }

    BotSettingsUpdate = async (req: Request, res: Response) => {
        
        try {
            const { prefix } = req.body

            const botId = await this.FindID().then((res) => res)

            const botTag = await prisma.bot.findFirst({
                where: {
                    id: botId
                },
                select: {
                    bot: true,
                }
            })

            if(botTag?.bot !== client.user.tag){
                console.log("Bot not updated!")
            } else {
                console.log("Bot updated!")
                await prisma.bot.update({
                where: {
                    id: botId
                },
                data: {
                    prefix: prefix
                }
            })

            return res.status(200).send("Ok")
            }
        
        } catch(err) {
            console.error(err)
        }

    }
}

export const { Bot, BotSettings, BotSettingsUpdate } = new BotControllers()