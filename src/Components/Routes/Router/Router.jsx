import { createBrowserRouter } from "react-router-dom";
import Root from "../../../Layouts/Root/Root";
import Home from "../../../Pages/Home/Home";
import UpdateProfile from "../../../Pages/Update Profile/UpdateProfile";
import Login from "../../../Pages/Login/Login";
import Register from "../../../Pages/Register/Register";
import UserProfile from "../../../Pages/User Profile/UserProfile";

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
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/user_profile",
                element: <UserProfile></UserProfile>
            }
        ],
    }
])


export default router;