import { app, Request, Response } from './server'
import BotRoutes from './routes/bot'

class App {
    Application(){
        app.get('/', (req: Request, res: Response) => {
            res.send("Hello world")
        })

        app.use('/', BotRoutes)
    }
}

export const { Application } = new App()