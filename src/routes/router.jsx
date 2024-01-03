import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import HomePage from "../Pages/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AdminDashboard from "../Pages/AdminPage";
import Template from "../Components/Template";
import Profile from '../Components/Profile';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template>
        <HomePage/>
      </Template>,  
    },
  
    {
      path: "/about",
      element: <Template>
         <About/>
        </Template>,
    },
  
    {
      path: "/contactUs",
      element: <Template>
        <ContactUs/>
      </Template>
      ,
    },

    {
      path: "/SignUp",
      element: <Template>
      <SignUp />
        </Template>, 
    },
    {
      path: "/Login",
      element:<Template>
      <Login />
      </Template>, 
    },
    {
      path: "/AdminDashboard",
      element: 
      <Template>
      <AdminDashboard />
      </Template>,
    },
    {
      path: "/profile",
      element: 
      <Template>
      <Profile />
      </Template>,
    },
  ]);
  export default router;
  