import React,{useState, useEffect} from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([
    {
      title : 'title1',
      description : 'description1'
    },
    {
      title : 'title2',
      description : 'description'
    }
  ])

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [editId, setEditId] = useState(null);

  const fetchData = () =>{
    axios.get('http://localhost:3000/notes')
    .then((res)=>{
      console.log(res.data);
      setNotes(res.data.note)
      
  })
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(e);
    
    if (!editId && (!title.trim() || !description.trim())) {
      alert("Please enter both title and description");
      return;
    }

    
    const data = { title, description };

    if (editId) {
      // PATCH: Update existing note
      axios.patch(`http://localhost:3000/notes/${editId}`, data)
        .then(() => {
          setNotes(notes.map((item) =>
            item._id === editId
              ? { ...item, ...data }
              : item
          ));

          setTitle("");
          setDescription("");
          setEditId(null);
        });
    } else {
      // POST: Add new note
      axios.post("http://localhost:3000/notes", data)
        .then((res) => {
          setNotes([...notes, res.data.note]);
          setTitle("");
          setDescription("");
        });
    }
  }

  

  const handleDelete = (id) =>{
    axios.delete("http://localhost:3000/notes/"+id)
    .then(()=>{
      console.log(`Note with id ${id} is deleted`);
      fetchData()
    })

    // console.log(id);
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  
  return (
    <>
    
    <div className=' h-screen text-white p-4 bg-[#333]'>
      <h1 className='flex justify-center text-4xl font-bold border-b-2 pb-2'>Notes</h1>
      <div className='py-3'>
        <h2 className='flex justify-start font-3xl font-semibold pb-2 text-amber-300 '>Add Notes :-</h2>
        <form className='flex gap-3' onSubmit={function(e){
          submitHandler(e)
        }}>
          <input name='title' type="text" placeholder='Enter title here' className='border-1 p-2 w-[24%]' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <input name='description' type="text" placeholder='Enter description here' className='border-1 p-2 w-[49%]' value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <button className='bg-green-600 text-white w-[24%] cursor-pointer active:scale-95'>Submit</button>
        </form>
      </div>
      <div className="notes flex justify-start gap-3 flex-wrap mt-4">
      {notes.map((item,idx)=>{
        return <div key={idx} className="note bg-[#444] w-[24%] p-2 rounded-lg h-25 flex justify-between">
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-3xl font-bold'>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center'>
                  <button className='bg-red-500 text-white py-1 px-2 cursor-pointer rounded active:scale-95' onClick={function(){
                    handleDelete(item._id)
                  }}>Delete</button>
                  <button className='bg-blue-500 text-white py-1 px-2 cursor-alias rounded active:scale-95' onClick={function(){
                    setTitle(item.title);
                    setDescription(item.description);
                    setEditId(item._id);
                  }}>Update</button>
                </div>
              </div>
      })}
      </div>
    </div> 
    </>
  )
}

export default App
