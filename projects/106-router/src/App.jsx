import './App.css'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import PostDetails from './pages/PostDetails'
import SettingsPage from './pages/SettingsPage'

import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <Routes>
      { /* Quite self explanatory: we set the path where the element is being rendered
        So, "/" is the root element, the page that will show when you open the app
        Then in "/blog" the blog page will appear. Now we are rendering this app at
        "localhost:5173" so this is our root page, blog will be "localhost:5173/blog" */ }
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<PostDetails />} />
      <Route path="/settings" element={<SettingsPage />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
