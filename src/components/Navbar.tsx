
import { Button } from "./ui/button";
import { ModeToggle } from "./model-toggle";
import { AddBook } from "@/pages/AddBook";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white px-4 py-6 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">MyLogo</Link>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link to="/books">
              <Button variant="outline">All Books</Button>
            </Link>
          </li>
          <li>
            <AddBook buttonText="Add Books" variant="outline" />
          </li>
          <li>
            <Link to="/borrow-summary">
              <Button variant="outline">Borrow Summary</Button>
            </Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <Button>Book Store</Button>
        </div>
      </div>
    </nav>
  );
}
