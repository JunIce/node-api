import {Router, Request, Response} from 'express'
import Advertise from '../models/advertise'
import BaseInfo from '../models/baseInfo'

class HomeController {
    router: Router
    constructor() {
        this.router = Router()
        this.router.get('/home-ad', this.homeAd)
        this.router.get('/list', this.getList)
    }

    public homeAd(req: Request, res: Response): void {
        let ad = new Advertise()
        ad.getAdvertise().then(data => {
            res.json(JSON.parse(data))
        })
    }

    public getList(req: Request, res: Response):void {
        let base = new BaseInfo()
        base.getList(24).then(data => {
            res.json(JSON.parse(data))
        })
    }
}

export default new HomeController().router