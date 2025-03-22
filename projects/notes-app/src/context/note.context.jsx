import { createContext, useState } from "react";

const NoteContext = createContext();

const API_URL = "https://ca229452138bc01a9b05.free.beeceptor.com/api/notes/"

function NoteProviderWrapper(props) {

    const [notes, setNotes] = useState([])
    const [hasError, setError] = useState(false)
    const [hasLoaded, setLoaded] = useState(false)

    const getNotes = async () => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            setNotes(data.reverse())    // We reverse the array to show the last notes first
            setError(false)
            setLoaded(true)
        } catch (e) {
            console.log(e)
            setError(true)
        }
    }

    const addNote = async (newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)   // Note that we need to stringify the object
            })

            // We would'nt have to set the notes here if we were using a database,
            // but since we're using a free API, we're updating here the notes state
            // to save requests
            setNotes([newNote, ...notes])
        } catch (e) {
            console.log(e)
        }
    }

    // WIP
    // This doesn't work properly anymore! We would need to update the function to use the API
    // Now the notes are being updated BUT NOT SAVED IN THE API so they will be lost when the page is refreshed
    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id !== updatedNote.id) return note
            return updatedNote
        })

        setNotes(updatedNotes)
    }


    return (
        <NoteContext.Provider value={{ notes, hasError, hasLoaded, getNotes, setNotes, updateNote, addNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper }