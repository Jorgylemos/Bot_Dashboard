import dotenv from 'dotenv'
dotenv.config()

const PORT: string | number = process.env.PORT || 5050

if(!PORT){
    throw new Error("🔴 Port is null")
}

const TOKEN: string | undefined = process.env.TOKEN

if(!TOKEN) {
   throw new Error("🔴 Token is null") 
}

const BOT_TOKEN: string | undefined = process.env.BOT_TOKEN

if (!BOT_TOKEN) {
    throw new Error("🔴 Bot token is null")
}

export { PORT, TOKEN, BOT_TOKEN }