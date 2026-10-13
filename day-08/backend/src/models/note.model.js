const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    age:Number
})

const noteModel = mongoose.model("notes",noteSchema)             // ye jo "notes" likha hai yha pe wo ek db ke andar collection hai jisme isi prakaar ke data rakhe jaenge
 
module.exports = noteModel