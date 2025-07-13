import { createBrowserRouter } from "react-router";
import { User } from "../pages/User";
import { App } from "../App";


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
