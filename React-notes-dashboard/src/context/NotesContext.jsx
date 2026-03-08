import { useEffect, useState } from "react";

export const NotesContext = createContext();
export const NotesProvider = ({childern})=>{
    const[notes,setNotes]=useState(()=>{
        const saved = localStorage.getItem("notes");
        return saved? JSON.parse(saved):[];
    });
    const[selectedNote,setSelectedNote] =useState(null);
    useEffect(()=>{
        localStorage.getItem("notes",JSON.stringify(notes));

    },[notes]);
    const addNote =(text)=>{
        const newNote={
            id:Date.now(),
            text
        };
        setNotes([...notes,newNote]);
    };
    return(
        <NotesContext.Provider value={{ notes,addNote,selectedNote,setSelectedNote}}>
        {childern}
        </NotesContext.Provider>
    );
};