import HeaderComponent from "../components/HeaderComponent"
import './HomePage.css'
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <h2>Home page</h2>
            <div className="text">this is useless tbh... the functionable part is <Link to={`/notes`}>notes!</Link></div>
        </>
    )
}

export default HomePage