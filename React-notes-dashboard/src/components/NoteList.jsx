import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteList(){
    const{notes,selectedNote,setSelectedNote}=useContext(NotesContext);
    return(
        <div className="notes-grid">
            {notes.map((note)=>(
                <div key={note.id} onClick={()=>setSelectedNote(note.id)}
                className={selectedNote===note.id?"note selected":"note"}>
                    {note.text}
                </div>
            ))}
       
        </div>
    );
}
export default NoteList;