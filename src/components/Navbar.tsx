import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { AddBook } from "@/pages/AddBook";
import { ModeToggle } from "./model-toggle";

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
          <li>
            <Link to="/books">
              <Button variant="outline">All Books</Button>
            </Link>
          </li>
          <li>
            <AddBook />
          </li>
          <li>
            <Link to="/borrow-summary">
              <Button variant="outline">Borrow Summary</Button>
            </Link>
          </li>
        </ul>

        {/* Right: Sign Up Button */}
        <div className="">
          <ModeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden bg-white text-black">
          <Button>Book store</Button>
        </div>
      </div>
    </nav>
  );
}
