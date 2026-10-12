const mongoose = require("mongoose")
const dotenv = require("dotenv")

const connecttoDb = () => {mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
    console.log("Connected to database..");
    
})}


module.exports = connecttoDb