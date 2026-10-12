const app = require("./src/app")
const conncetToDb = require('./src/config/database')
require('dotenv').config()



conncetToDb()


app.listen(3000,()=>{
    console.log("Port running at 3000");
    
})