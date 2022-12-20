import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,newNote] = useState([])
  function CreateNote(note){
    return newNote(prevValue => {
      return [...prevValue,note]
    })
  }
  function handleDelete(id){
    newNote(prevValue => {
     return prevValue.filter((note,index) => {
        return   index !== id ;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea CreateNote={CreateNote} />
      {notes.map((note,INDEX) => {
        return (<Note delete = {handleDelete} key = {INDEX} id = {INDEX} title={note.title} content={note.content} />)
      })}
      
      <Footer />
    </div>
  ); 
}

export default App;
