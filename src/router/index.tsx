import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { Books } from "@/pages/Books";
import BookDetails from "@/pages/BookDetails";
import BorrowedBooksTable from "@/pages/BorrowBooks";
import { AddBook } from "@/pages/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/books",
        index: true,
        element: <Books />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowedBooksTable />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path:"/add-book",
        element:<AddBook/>
      }
    ],
  },
]);

export default router;
