import Base from '../db'

export default class Zt extends Base {
	constructor() {
		super('enewszt')
	}

	public getLabelList(classId: number): Promise<any> {
		let sql = `select ztid as labelId, ztname as labelName, classid as classId from ${
			this.tbname
		} where classid = '${classId}' and showzt = 0 order by myorder desc, addtime desc`
		console.log(sql)
		return this.query(sql)
	}
}
