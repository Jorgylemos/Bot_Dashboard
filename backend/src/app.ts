import { app, Request, Response } from './server'
import BotRoutes from './routes/bot'

class App {
    Application(){

        const DateToday = new Date()

        const month = DateToday.getMonth() + 1

        app.get('/', (req: Request, res: Response) => {
            res.json({
                date: [DateToday.getDate().toString(), month.toString(), DateToday.getFullYear().toString()],
                hour: [DateToday.getHours().toString()]
            })
        })

        app.use('/', BotRoutes)
    }
}

export const { Application } = new App()