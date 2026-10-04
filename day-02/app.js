const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Namaskar")
})

app.get('/contact',(req,res)=>{
    res.send("Contact page")
})

app.get('/about',(req, res)=>{
    res.send("About-me")
})

app.listen(3000,() => "Server is running !!")