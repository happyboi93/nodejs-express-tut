const express = require('express');
const app = express()

// app.get
app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req,res)=>{
    res.status(200).send('About Page')
})

// app.all
app.all('*',(req,res)=>{
    res.status(404).status(404).send('<h3>resource not found</h3>')
})
// app.listen
app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})


// app.post
// app.put
// app.delete

// app.use