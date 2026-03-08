import { useContext, useRef } from "react";
import { NotesContext } from "../context/NotesContext";

function AddNote(){
    const{addNote}= useContext(NotesContext);
    const inputRef = useRef();
    const handleAdd=()=>{
        const text=inputRef.current.value;
        if(!text)return;
        addNote(text);
        inputRef.current.value="";
        inputRef.current.focus();
    };
    return(
        <div className="add-note">
            <input ref={inputRef} placeholder="Write a note..." />
            <button onClick={handleAdd}>Add Note</button>
        </div>
    )
}
export default AddNote;