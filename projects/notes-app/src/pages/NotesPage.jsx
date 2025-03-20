import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NoteContext } from "../context/note.context"
import NoteCard from "../components/NoteCard"
import './NotesPage.css'
import CreateNote from "../components/CreateNote"

function NotesPage() {
  const { notes } = useContext(NoteContext)

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note} />
      </li>
    )
  })

  return (
    <>
      <HeaderComponent />
      <h2>To-do list</h2>
      <ul className="notes-list">
        <li>
          <CreateNote />
        </li>
        {noteCards}
      </ul>
    </>
  )
}

export default NotesPage