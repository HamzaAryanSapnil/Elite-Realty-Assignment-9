import { createBrowserRouter } from "react-router-dom";
import Root from "../../../Layouts/Root/Root";
import Home from "../../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/update_profile",
                element: <></>
            }
        ],
    }
])


export default router;