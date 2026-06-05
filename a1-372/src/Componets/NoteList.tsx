import type { Note } from "./types";

interface NoteListProps {
    notes: Note[];
    onSelectNote: (note: Note) => void;
}

const NoteList = ({notes, onSelectNote}: NoteListProps) => {
    return (  
        <>
        {
            notes.map(note=>(
                <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                    key={note.id}
                    onClick={() => onSelectNote(note)}
                >
                <h2>{note.title}</h2>
                </div>
            ))
        }
        </>
    );
}
 
export default NoteList;