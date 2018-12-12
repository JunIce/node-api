import Base from './base'

export default class Advertise extends Base {
    constructor() {
        super('home_ad')
    }

    public getAdvertise():Promise<any> {
        let sql = `select title, description, icon, url from ${this.tbname} where status = 1 order by 'index' asc`
        return this.query(sql)
    }
}