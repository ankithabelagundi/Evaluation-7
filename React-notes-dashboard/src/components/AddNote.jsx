import { useContext, useRef } from "react";
import { NotesContext } from "../context/NotesContext";

function AddNote(){
    const{addNote}= useContext(NotesContext);
    const inputRef = useRef();
    const handleAdd=()=>{
        const value=inputRef.current.value;
        if(!value)return;
        addNote(value);
        inputRef.current.value="";
        inputRef.current.focus();
    };
    return(
        <div>
            <input ref={inputRef} placeholder="Enter note..." />
            <button onClick={handleAdd}>Add Note</button>
        </div>
    )
}
export default AddNote;