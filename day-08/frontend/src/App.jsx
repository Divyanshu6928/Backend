import React,{useState, useEffect} from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([
    {
      title : "title1",
      description : "description1"
    },
    {
      title : "title2",
      description : "description2"
    }
  ])

  useEffect(() => {
    axios.get("http://localhost:3000/notes")
    .then((res) => {
    console.log(res.data);
    setNotes(res.data.note);
    })},[])




  return (
    <>
      <div className="notes">
        {notes.map((item,idx)=>{
          return <div key={idx} className="note">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
        })}
        
      </div>
    </>
  )
}

export default App
