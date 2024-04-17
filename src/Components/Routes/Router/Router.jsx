import { createBrowserRouter } from "react-router-dom";
import Root from "../../../Layouts/Root/Root";
import Home from "../../../Pages/Home/Home";
import UpdateProfile from "../../../Pages/Update Profile/UpdateProfile";
import Login from "../../../Pages/Login/Login";
import Register from "../../../Pages/Register/Register";
import UserProfile from "../../../Pages/User Profile/UserProfile";
import PrivateRoute from "../../Private/PrivateRoute";
import EstateDetails from "../../../Pages/Estate Details/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("/data.json");
        }
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/user_profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/estate_details/:id",
        loader: () => fetch(`/data.json`),
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
