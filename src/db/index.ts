import {
	Connection,
	ConnectionConfig,
	ConnectionOptions,
	queryCallback
} from 'mysql' // type
import { createConnection } from 'mysql' // function
import { Promise } from 'es6-promise'

const config: ConnectionConfig = {
	host: '127.0.0.1',
	port: 3311,
	user: 'root',
	password: '1',
	database: 'wygx',
	charset: 'utf8mb4'
}

interface DB {
	query(s: string): Promise<any>
}

export default class Base implements DB {
	connection: Connection
	prefix: string = 'phome_'
	tbname: string

	constructor(tbname: string = '') {
		this.connection = createConnection(config)
		this.tbname = `${this.prefix}${tbname}`
	}

	public query(sql: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				sql,
				(err, res, fields): void => {
					if (err) {
						reject(err)
					}
					resolve(JSON.stringify(res))
				}
			)
		}).then((data: any) => {
			return JSON.parse(data)
		})
	}
}
