import './NoteCard.css'

function NoteCard({ note }) {
  return (
    <article className="note-card">
        <input type="checkbox" checked={note.marked} />
        <input type="text" className="card-title" value={note.title} />
    </article>
  )
}

export default NoteCard