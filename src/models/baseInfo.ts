import Base from '../db'

export default class baseInfo extends Base {
	// 信息详情
	public getInfoDetail(classId: number, Id: number): Promise<any> {
		let select = [
			'a.id',
			'a.title',
			'a.classid as classId',
			'a.userid as userId',
			'a.diggtop as likeNum',
			'a.favanum as favoriteNum',
			'a.titlepic as titlePic',
			'a.newstime as addTime'
		]
		let sql = `select ${select.join(',')} from ${
			this.prefix
		}_ecms_${this.getTableName(classId)} as a where a.id = '${Id}' limit 1`
		return this.query(sql)
	}

	// 获取列表
	public getList(
		classid: number,
		page: number = 1,
		pageSize: number = 20,
		type: number = 0
	): Promise<any> {
		this.tbname = this.prefix + 'ecms_' + this.getTableName(classid)

		let baseSql: string = `select a.id,a.title,a.classid,a.userid,a.username,a.diggtop,a.favanum,a.titlepic,a.newstime,b.content from ${
			this.tbname
		} as a left join ${this.tbname}_data_1 as b on a.id = b.id`

		let where_condition: string[] = []

		if (type == 0) {
			// 推荐
			// where_condition.push('checked = 1')
			where_condition.push('a.isgood = 1')
		}

		if (type == 1) {
			// 好评
		}

		if (type == 2) {
			// where_condition.push('checked = 1')
		}

		let where = where_condition.length
			? ` where ` + where_condition.join(' and ')
			: ''

		let order = ` order by a.id desc `
		let limit: string = `limit ${pageSize} offset ${page * pageSize}`
		let sql = baseSql + where + order + limit
		console.log(sql)
		return this.query(sql)
	}

	private getTableName(classid: number): string {
		switch (classid) {
			case 1:
				return 'article'
			case 2:
				return 'name'
			case 24:
				return 'tx'
			case 85:
				return 'photo'
			default:
				return ''
		}
	}
}
