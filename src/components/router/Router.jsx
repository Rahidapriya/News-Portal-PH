import {
    createBrowserRouter,
  
  } from "react-router-dom";

// import Login from "../pages/login/Login";
// import Register from "../pages/register/Register";
// import Home from "../pages/home/Home";
import Roott from "../../layouts/Roott";


import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Features from "../../pages/features/Features";

import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import ServiceDetails from "../singleServicesDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roott></Roott>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('/public/data.json')
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:"/donate/:id",
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
           loader:()=>fetch('/public/data.json')
        },
        {
          path:'/features',
          element:<PrivateRoute><Features></Features></PrivateRoute>
        },
       
        {
          path:'/contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;