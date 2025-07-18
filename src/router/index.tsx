import { createBrowserRouter } from "react-router";
import { User } from "../pages/User";
import { App } from "../App";
import { Books } from "@/pages/Books";
import { AddBook } from "@/pages/AddBook";
import BookDetails from "@/pages/BookDetails";
import BorrowedBooksTable from "@/pages/BorrowBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/books",
            index:true,
            element:<Books/>
        },
        {
            path:"/add-book",
            element:<AddBook/>
        },{
            path:"/borrow-summary",
            element:<BorrowedBooksTable/>
        },{
            path:"user",
            element:<User/>
        },
        {
            path:"/books/:id",
            element:<BookDetails />
        }
    ]
  },
]);

export default router;
