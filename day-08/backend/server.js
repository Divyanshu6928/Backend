const app = require('./src/app')
const connectToDb = require("./src/config/database")
require('dotenv').config()

connectToDb()

app.listen(3000,()=>{
    console.log("Server running at port 3000");
    
})