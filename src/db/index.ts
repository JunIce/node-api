import {createConnection} from 'mysql'
import {Promise} from 'es6-promise'

type Config = {
    host: string
    port: number
    user: string
    password: string
    database: string
}

const config: Config = {
    host: '127.0.0.1',
    port: 3311,
    user: 'root',
    password: '3',
    database: 'wygx'
}
const connection = createConnection(config)


export function query(sql: string): Promise<any>{
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res, fields) => {
            if(err) {
                reject(err)
            }
            resolve(JSON.stringify(res))
        })
    })
}


