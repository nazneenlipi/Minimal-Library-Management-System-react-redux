import { createBrowserRouter } from "react-router";
import { User } from "../pages/User";
import { App } from "../App";

import { BorrowSummary } from "@/pages/BorrowSummary";
import { Books } from "@/pages/Books";
import { AddBook } from "@/pages/AddBook";
import BookDetails from "@/pages/BookDetails";


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
            element:<BorrowSummary/>
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
