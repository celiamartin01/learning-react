import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
    // This is just for testing purposes, delete later
    const noteList = [
        {
            id: 1,
            title: "Subrayar tema 3 arte clásico",
            marked: false
        },
        {
            id: 2,
            title: "Apuntes tema 3 arte clásico",
            marked: false
        },
        {
            id: 3,
            title: "Subrayar tema 4 iconografía",
            marked: false
        },
        {
            id: 4,
            title: "Vídeo 37 react",
            marked: false
        }
    ]

    const [notes, setNotes] = useState(noteList)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper }