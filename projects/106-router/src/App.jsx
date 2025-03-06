import './App.css'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

/* This is a way to render pages as they are needed, instead of render all of them
just as we join the app. THIS IS NOT RECOMMENDED in general. We, as users, are used
to "single page applications", where we wait a few seconds in the beginning to have
a fluid navigation between pages. This way, using lazy, we will have loading time
each time we navigate through pages */
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostDetails = lazy(() => import('./pages/PostDetails'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))

function App() {

  return (
    // Fallback attribute is used to show an html element while the page is loading
    <Suspense fallback={<h1>Loading...</h1>}>
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
    </Suspense>
    
  )
}

export default App
