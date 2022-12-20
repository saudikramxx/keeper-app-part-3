import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    
    title:"",
    content:""
  })
  function handleChange(event){
    const {value,name} = event.target;
    setNote((prevValue)=>{
      if(name === "title" ){
        return {title : value,
        content : prevValue.content}
        
      }else if(name === "content"){
        return{
          title : prevValue.title,
          content : value,
          
        }
      }
    })
    
  }
  function handleClick(event){
    props.CreateNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange = {handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange = {handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
