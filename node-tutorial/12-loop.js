// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// // console.log(newItems)
// // console.log('hello israeli')

// const http = require('http')

// const server = http.createServer((req,res) =>{
// if (req.url === '/' ) {
//     res.end('Home Page')
// }
// if (req.url === '/about') {
//     res.end('About Page')
//     // BLOCKING CODE
//     for(i=0; i<1000; i++){
//         for(j=0; j<100; j++){
//         console.log(`${i} ${j}`)
//         }
//     }
// }
// if (req.url != '/' ) {
//     res.end('Error Page')
// }
// })
// server.listen(5000, ()=>{
//     console.log('server listening on port : 5000')
// })


const { readFile, writeFile } = require('fs')
const { reject, result } = require('lodash')
const { resolve } = require('path')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first= await readFilePromise('./content/first.txt','utf8')
        const second= await readFilePromise('./content/subfolder/second.txt','utf8')
        await writeFilePromise(
            './content/first.txt', 
            ` Hello this is the await writeFile : ${first} ${second}`
    )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }  
}
start()

// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data) => {
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }
//      getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

