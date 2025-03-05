import { createContext } from "react";
import { useState } from "react";

const BlogContext = createContext()

function BlogProviderWrapper(props) {

    const [posts, setPosts] = useState([])

    // Error state variable to handle errors easily
    const [error, setError] = useState(false)

    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()

            console.log(data)
            setPosts(data)

            // Dont forget to set error to false in case we are successful
            setError(false)
        }
        catch (e) {
            setError(true)
        }
    }

    return (
        <BlogContext.Provider value={{ posts, error, getPosts }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export { BlogContext, BlogProviderWrapper }