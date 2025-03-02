import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <>
        <h1>ErrorPage</h1>
        <h2>Please, return to <Link to="/">home page</Link></h2>
    </>
    
  )
}

export default ErrorPage