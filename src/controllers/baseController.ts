import {
	Router,
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
	Errback
} from 'express'
export default class BaseController {
	router: Router
	constructor() {
		this.router = Router()
	}
}
