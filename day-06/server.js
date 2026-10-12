const app = require('./src/app')
const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://divyanshu2003dev_db_user:EAozrJfl1wYrLnUY@backend-cohort.ls6htph.mongodb.net/day-06')
// .then(()=>{
//     console.log("Ready to know about you !!");
    
// })



app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})