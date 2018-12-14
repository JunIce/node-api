import {
	Router,
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
	Errback
} from 'express'
import Advertise from '../models/advertise'
import BaseInfo from '../models/baseInfo'

interface RouterErorBack extends Errback {
	message: string
}
class HomeController {
	router: Router

	constructor() {
		this.router = Router()
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
		let { page, pageSize, classId, type } = req.body
		if (!page || !pageSize || !classId) {
			let err = '参数不存在'
			return next(new Error(err))
		}
		let ctype = type || 0
		let base = new BaseInfo()
		base.getList(parseInt(classId), page, pageSize, ctype).then(data => {
			res.status(200).json(data)
		})
	}
}

export default new HomeController().router
