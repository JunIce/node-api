import express from 'express'
import HomeContoller from './controllers/homeContoller'
const app = express()

import {Promise} from 'es6-promise';
function foo():Promise<string> {
    return new Promise((resolve: (str: string)=>void) => {
        const a: string = "hello from Promise";
        setTimeout(() => {
            resolve(a);
        }, 3000)
     })
}
const p: Promise<string> = foo()
p.then((st) => {
  console.log(st);
});

app.get('/', (req, res) => {
    res.send('hello express')
})

app.use('/home', HomeContoller)

app.listen(8082, function() {
    console.log(`listening at 8082`)
})
