import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
            }
        ]
    },
]);

export default myCreatedRoute;