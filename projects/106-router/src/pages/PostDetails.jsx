import HeaderComponent from "../components/HeaderComponent"
import { useParams } from "react-router-dom"

function PostDetails() {
    const { id } = useParams()
    const [post, setPost] = useState()

    const fetchPost = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
    }

    useEffect(() => {
        fetchPost(id)
    }, [])

  return (
    <>
        <HeaderComponent/>

        {post && (
            <section>
            <h3>PostDetails</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </section>

        )}
        
    </>
    
  )
}

export default PostDetails