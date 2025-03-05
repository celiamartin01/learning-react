import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/user.context'

function SettingsPage() {
  const { user } = useContext(UserContext)

  if (!user?.isAdmin) return <Navigate to="/error" />

  return (
    <>
      <HeaderComponent />
      <h3>SettingsPage</h3>
    </>
  )
}

export default SettingsPage