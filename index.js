const express = require('express')
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

