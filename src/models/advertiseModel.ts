import { query } from '../db'
import {Promise} from 'es6-promise'
export default class Advertise {
    private tbname: string = 'phome_home_ad'

    public getAdvertise():Promise<any> {
        let sql = `select title, description, icon, url from ${this.tbname} where status = 1 order by 'index' asc`
        let data = query(sql)
        return Promise.resolve(data)
    }
}