import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-300 py-6">
        © {new Date().getFullYear()} Nazneen Lipi. All rights reserved.
      </footer>
    </div>
  )
}
