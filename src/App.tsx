import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
