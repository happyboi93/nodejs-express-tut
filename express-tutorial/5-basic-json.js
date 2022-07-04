const express = require('express')
const app = express()
const {products} = require('../node-express-course/02-express-tutorial/data.js')

app.get('/',(req,res)=>{
    res.json(products)
})

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})