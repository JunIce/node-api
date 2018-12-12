import {Router} from 'express'
const router = Router()

import Advertise from '../models/advertiseModel'


router.get('/home-ad', function(req, res) {
    let ad = new Advertise()
    ad.getAdvertise().then(data => {
        res.json(JSON.parse(data))
    })
})

export default router