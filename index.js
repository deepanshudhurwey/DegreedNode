const express = require('express')
const user =require('./src/models/user')
const app = express()

app.listen(4000,()=>{console.log('this App is running on 4000 port')})
app.get('/',(req,res)=>{
    res.send('hello user, welcome to the application')
})
app.get('*',(req, res)=>{
//throw new Error('BRoken bridge')
res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
    })
})
app.post('/createuser',async(req,res)=>{
    try{
        console.log(req.body)
    const ActiveUser = new user(req.body);
    await ActiveUser.save()
    res.send(201)
    }
    catch{
        res.send(500)
    }
})