// const catMe = require('cat-me')

// console.log(catMe('nyan'));

const express = require('express')

const app = express()                       //server create kiyaa

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000,()=> "Server runnig on port 3000")          //server start hogyaa
