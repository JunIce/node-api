import { Router, Request, Response, NextFunction } from 'express'
import ZT from '../models/ztBase'
import Info from '../models/baseInfo'

class CategoryController {
	router: Router
	constructor() {
		this.router = Router()
		this.router.get('/label-list', this.labelList)
		this.router.get('/detail', this.infoDetail)
	}

	public infoDetail(req: Request, res: Response, next: NextFunction) {
		let { classId, Id } = req.query
		if (!classId || !Id) {
			return next(new Error('参数缺失'))
		}

		let model = new Info()
		model
			.getInfoDetail(parseInt(classId), Id)
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				next()
			})
	}

	public labelList(req: Request, res: Response, next: NextFunction) {
		let { classId } = req.query
		if (!classId) {
			return next(new Error('classId 不存在'))
		}
		let model = new ZT()
		model
			.getLabelList(parseInt(classId))
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				next(err)
			})
	}
}

export default new CategoryController().router
