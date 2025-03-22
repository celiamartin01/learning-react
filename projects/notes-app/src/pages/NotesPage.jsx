import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NoteContext } from "../context/note.context"
import NoteCard from "../components/NoteCard"
import './NotesPage.css'
import CreateNote from "../components/CreateNote"

function NotesPage() {
  const { notes, getNotes, hasError, hasLoaded } = useContext(NoteContext)

  useEffect (() => {
    getNotes()  // We get all notes when the component is mounted
  }, [])  // Don't forget the reaking empty array to use this only when mounted
          // (i forgot this at first and keep getting infinite requests)

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
        {hasError ? (
          <p className="error-text">Error obtaining data</p>
        ) : !hasLoaded ? (
          <p>Loading...</p>
        ) : (
          noteCards
        )}
        
      </ul>
    </>
  )
}

export default NotesPage