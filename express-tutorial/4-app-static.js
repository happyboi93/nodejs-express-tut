const express = require('express')
const path = require('path')
const app = express()
// setup static and middleware

//   adding static asset
app.use(express.static('./public'))


//   SSR(server side rendering)
app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'./index.html'))

})

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000...')
})