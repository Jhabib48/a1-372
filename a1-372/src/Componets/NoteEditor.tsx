import {  useState } from "react";
import type { Note } from "./types"


interface NoteEditorProps {
    onAddNote: (newNote: Note) => void;
    notes: Note[];
}

const NoteEditor = ({onAddNote, notes}: NoteEditorProps) => {
    const [title, setTitle] = useState(""); 
    const [message, setMessage] = useState(""); 

    
    const onSubmit = (event: React.FormEvent) =>{
        event.preventDefault(); 
        const newId = notes.length;
        const newNote: Note = {
            id: newId, 
            title: title, 
            body: message, 
            createAt: Date.now()
        }; 

        onAddNote(newNote); 
        setTitle(""); 
        setMessage(""); 
    }

    return ( 
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={onSubmit}>
            <input
                className="pb-5 mb-5"
                id="title"
                name="title"
                type='text'
                value={title}
                placeholder=" Please enter note title"
                onChange={(event)=>setTitle(event.target.value)}
                required
            />
            <label htmlFor="note"></label>
            <textarea
            id="message"
            rows={4}
            className="mb-5 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 resize-none"
            onChange={(event)=>setMessage(event.target.value)}
            placeholder="Enter note"
            value={message}
            required
            ></textarea>
             <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200">
                Post Comment
             </button>
             <button className=" ml-5 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all duration-200">
                Delete
             </button>
            </form>
        </div>
     );
}
 
export default NoteEditor;