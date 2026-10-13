const mongoose = require("mongoose")
const dotenv = require('dotenv')

const connectToDB = () =>{
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(()=>{
        console.log("connected to database....");
        
    })
}

module.exports = connectToDB