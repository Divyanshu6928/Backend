const express = require("express")
const app = express()

app.use(express.json())

const notes =[]

// post
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    console.log(req.body);
    
    res.send("note created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.patch("/notes/:index",(req,res)=>{
    res.send(req.params.index)
    notes[req.params.index].description = req.body.description
    res.send(`Notes at index ${req.params.index} is successfully updated`);
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send(`Notes at index ${req.params.index} is successfully deleted`);
    
})
module.exports = app