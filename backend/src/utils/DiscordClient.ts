import { Client, GatewayIntentBits } from 'discord.js'

export const client: any = new Client({
    intents: [ 
        GatewayIntentBits.AutoModerationConfiguration, 
        GatewayIntentBits.AutoModerationExecution, 
        GatewayIntentBits.DirectMessageReactions, 
        GatewayIntentBits.DirectMessageTyping, 
        GatewayIntentBits.DirectMessages, 
        GatewayIntentBits.GuildEmojisAndStickers, 
        GatewayIntentBits.GuildIntegrations, 
        GatewayIntentBits.GuildInvites, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildMessageReactions, 
        GatewayIntentBits.GuildMessageTyping, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildModeration, 
        GatewayIntentBits.GuildPresences, 
        GatewayIntentBits.GuildScheduledEvents, 
        GatewayIntentBits.GuildVoiceStates, 
        GatewayIntentBits.GuildWebhooks, 
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.MessageContent
    ]
})