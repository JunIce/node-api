import {Application, Response, Request, NextFunction} from 'express'
import express from 'express'
import HomeContoller from './controllers/homeContoller'

class App {
    app: Application
    port: number
    constructor() {
        this.app = express()
        this.port = 8082
        this.middleware()
        this.router()
    }

    private router() {
        this.app.use('/home', HomeContoller)
    }
    private middleware(): void {
        this.app.use(this.responseJsonMiddleware)
    }

    private responseJsonMiddleware(req: Request, res: Response, next: NextFunction): void {
        console.log(`before`)
        next()
        console.log(`aft`)
    }
    run(): void {
        this.app.listen(this.port, () => {
            console.log(`express app is running at ${this.port}`)
        })
    }
}

new App().run()
