import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddReview from "../pages/Home/Testimonials/AddReview";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Card from "../pages/Dashboard/Card/Card";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
// import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
       {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>,
        
      },
      // {
      //  path: "/add-review/:dogId",
      //   element:<AddReview></AddReview>,
      // }, 

      {
        path:'/login',
        element:<Login></Login>
      },
      



      {
        path:'/signup',
        element:<SignUp></SignUp>
      },   
      
             




    ]
  },
    {
    path:'dashboard',
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children:[
      //normal user routes
      {
        path:'userHome',
        element:<UserHome></UserHome>

      },
      {
        path:'cart',
        element:<Card></Card>
      },
      {
        path:'payment',
        element:<Payment></Payment>

      },
          {
        path: "add-review/:dogId",
        element: <AddReview></AddReview>,
      },

      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      // //admin routes
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute> 

      },
      {
        path:'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute> 

      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>

      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params}) =>fetch(`http://localhost:5000/menu/${params.id}`)

      },
      {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
      }
    ]
  }
]);