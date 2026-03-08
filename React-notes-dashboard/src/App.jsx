import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import NotesCount from "./components/NotesCount";
import { NotesProvider } from "./context/NotesContext";

function App(){
  return(
    <NotesProvider>
      <div>
        <h1>Notes</h1>
      <AddNote/>
      <NoteList/>
      <NotesCount/>
      </div>
    </NotesProvider>
  )
}
export default App;