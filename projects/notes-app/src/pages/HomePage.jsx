import HeaderComponent from "../components/HeaderComponent"
import './HomePage.css'
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <h2>Home page</h2>
            <div className="text">this is useless tbh... the functionable part is <Link to={`/notes`}>notes!</Link></div>

            {/* In case I want to come back to this some day... those are the things missing / errors:
            - check css if the note is bigger than the input field
            - check if the note is empty and delete it if so
            - implement a delete function
            - implement a proper function to save updates in the API
            */}
        </>
    )
}

export default HomePage