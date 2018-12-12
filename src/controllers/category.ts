import {Router, Request, Response} from 'express'
import Advertise from '../models/advertise'

class CategoryController {
    router: Router
    constructor() {
        this.router = Router()
        this.router.get('/home-ad', this.homeAd)
    }

    public homeAd(req: Request, res: Response): void {
        let ad = new Advertise()
        ad.getAdvertise().then(data => {
            console.log(1)
            res.json(JSON.parse(data))
        })
    }
}

export default new CategoryController().router