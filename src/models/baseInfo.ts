import Base from './base'

export default class baseInfo extends Base {
    public getList(classid: number, type: number = 0, page: number = 1, pageSize: number = 20) {
        this.tbname = this.prefix + 'ecms_tx'
        let sql = `select id,title,classid,userid,username,diggtop,favanum,titlepic,newstime from ${this.tbname} order by 'id' desc limit ${pageSize},${page*pageSize}`
        console.log(sql)
        return this.query(sql)
    }
}