import Base from './base'

interface ListConfig {
    classid: number
}

export default class baseInfo extends Base {

    public getList({classid: number, type: number = 0, page: number = 1, pageSize: number = 20}) {

    }
}