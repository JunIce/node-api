import {Application, Response, Request, NextFunction, Errback} from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import Home from './controllers/home'

class App {
    app: Application
    port: number
    constructor() {
        this.app = express()
        this.port = 8082
        this.beforeMiddleware()
        this.router()
        this.afterMiddleware()
    }

    private router() {
        this.app.use('/home', Home)
    }

    private beforeMiddleware(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    private afterMiddleware(): void {
        this.app.use(this.methodNotRright)
        this.app.use(this.errorHandle)
    }

    private methodNotRright(req: Request, res: Response, next: NextFunction) {
        if (!req.route)
            return next (new Error('path is not access'))
        next()
    }
    private errorHandle(err: RouterErorBack, req: Request, res: Response, next: NextFunction) {
        let errorMessage = {
            code: 12345,
            message: err.message
        }
        res.status(500).json(errorMessage)
    }

    run(): void {
        this.app.listen(this.port, () => {
            console.log(`express app is running at ${this.port}`)
        })
    }
}

new App().run()

interface RouterErorBack extends Errback { message: string }

