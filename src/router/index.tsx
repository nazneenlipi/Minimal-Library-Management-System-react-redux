import { createBrowserRouter } from "react-router";
import { App } from "../app";
import { User } from "../pages/User";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"user",
            element:<User/>
        }
    ]
  },
]);

export default router;
