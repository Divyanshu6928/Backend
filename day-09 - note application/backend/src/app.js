const express = require("express")
const app = express()
const noteModel = require("./models/note.model")
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static("./src"))
// post request
app.post('/notes',async (req,res)=>{
    console.log(req.body);
    
    const {title, description} = req.body
    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message : 'note created successfully',
        note : note
    })
})

// get request
app.get('/notes',async (req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message : "note fecthed successfully",
        note : note
    })
})

// delete request
app.delete('/notes/:id',async (req,res)=>{
    const id = req.params.id
    const note = await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message :  `Note with id ${id} deleted successfully`,
        deletedNote : note
    })
})

// patch request
app.patch('/notes/:id',async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    const note = await noteModel.findByIdAndUpdate(id, {description})
    res.status(200).json({
        message :  `Note with id ${id} updated successfully`
    })
})

app.use('/{*name}',(req,res)=>{
    res.sendFile(path.join(__dirname, './assets/index.html'))
})

module.exports = app