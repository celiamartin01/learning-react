import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function SettingsPage() {

// This state is what decides if the user has access to the page. Ofc, this is not the way you should
// do it, but it's just an example. We will learn how to check access with context in future examples
const [hasAccess, setHasAccess] = useState(true)

if (!hasAccess) return <Navigate to="/error"/>

  return (
    <>
        <HeaderComponent/>
        <h3>SettingsPage</h3>
    </>
  )
}

export default SettingsPage