import './NoteCard.css'
import { useContext } from 'react'
import { NoteContext } from '../context/note.context'

function NoteCard({ note }) {
  const {updateNote} = useContext(NoteContext)

  // Creating a new note with all its properties but changing the title
  const handleInput = (e) => {
    const updatedNote = {
      ...note,
      title: e.target.value
    }

    updateNote(updatedNote)
  }

  // Same thing to change the checkbox value
  const handleCheck = (e) => {
    const updatedNote = {
      ...note,
      // We change the value of marked to the opposite of what it was (this is called toggle)
      marked: !note.marked
    }

    updateNote(updatedNote)
  }

  return (
    <article className="note-card">
        <input type="checkbox" checked={note.marked} onChange={handleCheck}/>
        <input type="text" className="card-title" value={note.title} onChange={handleInput}/>
    </article>
  )
}

export default NoteCard