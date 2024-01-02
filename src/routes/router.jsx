import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import HomePage from "../Pages/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AdminDashboard from "../Pages/AdminPage";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
  
    {
      path: "/about",
      element: <About></About>,
    },
  
    {
      path: "/contactUs",
      element: <ContactUs />,
    },

    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/AdminDashboard",
      element: <AdminDashboard />,
    },
  ]);
  export default router;
  