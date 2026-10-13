const express = require("express")
const app = express()
const NoteModel = require('./models/note.model')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/notes',async (req,res)=>{
    const {title, description, age} = req.body

    const note = await NoteModel.create({
        title,description,age
    })

    res.status(201).json({
        message: "note created",
        note
    })
})

app.get("/notes",async (req,res)=>{
    const note = await NoteModel.find()        // data array of objects ke form me rhta hai

    res.status(200).json({
        message : "Note fetched succussfully",
        note
    })
})

app.delete("/notes/:id" ,async (req,res)=>{
    // console.log(req.params.id)
    await NoteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message : "note deleted succesfully"
    })
    
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body;
    await NoteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message : "note updated successfully"
    })
})

module.exports = app