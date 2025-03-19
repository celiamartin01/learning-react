import { Link } from "react-router-dom"
import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <header className="header">
            <h1 className="title">Notes App</h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/notes" className="link">Notes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent