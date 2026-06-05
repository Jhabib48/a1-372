import { useState } from 'react'
import './index.css'
import './App.css'
import './Componets/NoteEditor'
import NoteEditor from './Componets/NoteEditor'
import NoteList from './Componets/NoteList'
import type { Note } from "./Componets/types"
import { useEffect } from "react";


function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectNote, setSelectedNote] = useState<Note | null>(null); 

  useEffect(()=>{
    const storedNotes = localStorage.getItem("notes"); 
    if(storedNotes){
      setNotes(JSON.parse(storedNotes)); 
    }
  }, [])

  const addBook = (newNote: Note) => {
    const updateNotes = [...notes, newNote];
    setNotes(updateNotes); 
    localStorage.setItem("notes", JSON.stringify(updateNotes)); 
  }

  return (
    <div>
      <NoteEditor onAddNote={addBook} notes={notes}/>
      {selectNote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg">
            <h2>{selectNote.title}</h2>
            <p>ID: {selectNote.id}</p>
            <p>
              Created At: {new Date(selectNote.createAt).toLocaleString()}
            </p>
            <p>Note: {selectNote.body}</p>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-200" onClick={() => setSelectedNote(null)}>
              Close
            </button>
          </div>
        </div>
      )}
      <NoteList notes={notes} onSelectNote={setSelectedNote}/>
    </div>
  )
}

export default App
