export function checkParams(args: any, arr: string[]): void {
	let method = args[0].method
	let data: any = {}
	if (method === 'GET') {
		data = args[0].query
	}
	if (method === 'POST') {
		data = args[0].body
	}

	arr.forEach(key => {
		if (!data[key]) {
			let err = new Error(`${key} 参数缺失`)
			return args[2](err)
		}
	})
}
