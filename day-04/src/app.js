const express = require("express")
const app = express()
app.use(express.json())
const notes =[]

// post notes

app.post('/notes',(req,res)=>{
    // console.log(req.body);
    
    notes.push(req.body)
    res.send("note created");


})

// get notes

app.get("/notes",(req,res)=>{
    res.send(notes)
})

// delete notes

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]              // bina : ke params kaam nhi karta hai
    res.send(`note at index ${req.params.index} is successfully deleted `)
})

// updating only description of notes

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description;
    res.send(`note at index ${req.params.index} updated successfully`)
})

module.exports = app