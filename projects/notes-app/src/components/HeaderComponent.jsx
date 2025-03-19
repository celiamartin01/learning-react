import { Link } from "react-router-dom"
import './HeaderComponent.css'

function HeaderComponent() {
    return (
        <header className="header">
            <h2 className="title">Notes App</h2>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/notes">Notes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent