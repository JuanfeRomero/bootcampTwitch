import { useState } from 'react';
import { Note } from './Note.js';

export const App = (props) => {
    const [notes, setNotes] = useState([{title: "loading..."}]);
    const [newNote, setNewNote] = useState('');

    const handleChange = (event) => {
        setNewNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const noteToAddToState = {
            id: notes.length + 1,
            title: newNote,
            body: new Date().toISOString(),
        };
        
        setNotes([...notes, noteToAddToState]);
        setNewNote('');
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <Note key={note.id} {...note} />
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button>Crear nota</button>
            </form>
        </div>
    );
};
