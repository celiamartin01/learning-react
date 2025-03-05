import { createContext, useState } from "react";

const UserContext = createContext()

// This is where we handle everything related to the user
function UserProviderWrapper(props) {
    // State where we store the user data
    const [user, setUser] = useState(null)

    // Dummy user data, this would be replaced with API calls
    const userData = {
        name: "Celia",
        email: "celia@gmail.com",
        isAdmin: true
    }

    const login = () => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }