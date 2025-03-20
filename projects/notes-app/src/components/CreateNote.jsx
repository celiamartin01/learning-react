import { useContext, useState } from "react"
import { NoteContext } from "../context/note.context"
import './CreateNote.css'

function CreateNote() {
    const { addNote } = useContext(NoteContext)

    const [noteTitle, setNoteTitle] = useState("")

    // This is just a function said in the video i'm watching to create a random id lol
    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2)
    }

    const handleInput = (e) => {
        setNoteTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        // This line is for the app to not refresh when we submit the form
        e.preventDefault()
        
        if (!noteTitle) return // This is to prevent creating empty notes

        const newNote = {
            id: createId(),
            title: noteTitle, // What we write in the input
            marked: false
        }

        addNote(newNote)
        setNoteTitle("") // We clean the input

    }

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <button className="create-btn" type="create-button">+</button>
            <input className="note-title" type="text" value={noteTitle} placeholder="New note" onChange={handleInput}/>
        </form>
    )
}

export default CreateNote