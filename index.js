const express = require('express')
const app = express()

app.listen(4000,()=>{console.log('this App is running on 2000 port')})
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/no',(req, res)=>{
throw new Error('BRoken bridge')
})