import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { Books } from "@/pages/Books";
import BookDetails from "@/pages/BookDetails";
import BorrowedBooksTable from "@/pages/BorrowBooks";
import { AddBook } from "@/pages/AddBook";
import Banner from "@/components/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { index: true, element: <Banner /> }, 
      {
        path: "/books",
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
