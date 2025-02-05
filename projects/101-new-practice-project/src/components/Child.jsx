function Child(props) {
    // This line to avoid writing "props.whatever" every time
    const {msg, person} = props
  return (
    <div>
        <h2>Child component</h2>
        <p>{msg}</p>
        <p>{person.name} - {person.age}</p>
    </div>
  )
}

export default Child