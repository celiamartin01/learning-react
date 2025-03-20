import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
    // This is just for testing purposes, delete later
    const noteList = [
        {
            id: "1",
            title: "Subrayar tema 3 arte clásico",
            marked: false
        },
        {
            id: "2",
            title: "Apuntes tema 3 arte clásico",
            marked: false
        },
        {
            id: "3",
            title: "Subrayar tema 4 iconografía",
            marked: false
        },
        {
            id: "4",
            title: "Vídeo 37 react",
            marked: false
        }
    ]

    const [notes, setNotes] = useState(noteList)

    // Creating a new array where we modify the indicated note and left the rest as they were
    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== updatedNote.id) return note
            return updatedNote
        })

        setNotes(updatedNotes)
    }

    // We just create a new array with the new note at the begginig and the rest of the notes
    // We could just place the new note at the end changing the line to setNotes([...notes, newNote])
    const addNote = (newNote) => {
        setNotes([newNote, ...notes])
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, updateNote, addNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper }