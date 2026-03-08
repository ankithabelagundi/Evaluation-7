import { useEffect, useState } from "react";
import { createContext } from "react";

export const NotesContext = createContext();
export const NotesProvider = ({children})=>{
    const[notes,setNotes]=useState(()=>{
        const saved = localStorage.getItem("notes");
        return saved? JSON.parse(saved):[];
    });
    const[selectedNote,setSelectedNote] =useState(null);
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));

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
        {children}
        </NotesContext.Provider>
    );
};