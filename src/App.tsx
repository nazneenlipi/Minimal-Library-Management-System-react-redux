import React from 'react'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router'

export const App = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
