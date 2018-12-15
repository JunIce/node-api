import {
	Router,
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
	Errback
} from 'express'
import BaseController from './baseController'
import { checkParams } from '../lib/toolController'
import Advertise from '../models/advertise'
import BaseInfo from '../models/baseInfo'

interface RouterErorBack extends Errback {
	message: string
}
class HomeController extends BaseController {
	constructor() {
		super()
		this.router.post('/home-ad', this.homeAd)
		this.router.post('/list', this.getList)
	}

	public homeAd(req: Request, res: Response, next: NextFunction): void {
		let ad = new Advertise()
		ad.getAdvertise()
			.then(data => {
				res.json(data)
			})
			.catch(err => {
				next(err)
			})
	}

	public getList(req: Request, res: Response, next: NextFunction): void {
		checkParams(arguments, ['page', 'pageSize', 'classId'])

		let { page, pageSize, classId, type } = req.body
		let ctype = type || 0
		let base = new BaseInfo()
		let data = base.getList(parseInt(classId), page, pageSize, ctype)

		data
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				next(err)
			})
	}
}

export default new HomeController().router
