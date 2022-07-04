const express = require('express')
const morgan = require('morgan')
const authorize = require('./authorize')
const app = express()
const logger = require('./logger')
// req => middleware => res

// /home/about/link/link
// 1.   use vs route
// 2.   options - our own / express / third party

// app.use([logger, authorize])
app.use(morgan('tiny'))
// app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})