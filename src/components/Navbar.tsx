import React from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Center: Menu Items (hidden in mobile) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>

        {/* Right: Sign Up Button */}
        <div className="hidden md:block">
          <Link
            to="/signup"
            className="bg-white text-black px-4 py-1.5 rounded hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
