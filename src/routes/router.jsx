import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import HomePage from "../Pages/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AdminDashboard from "../Pages/AdminPage";
import Template from "../Components/Template";
import Profile from '../Components/Profile';
import { Route, Routes } from "react-router-dom";

import ProtectedByUser from "./Protected";
import Posts from "../Components/ManagePosts";
import CreatePost from "../Pages/AddPost";

  const MyRoutes=()=>
  <Routes>
          <Route exact path="/" element={<Template><HomePage /></Template>} />
          <Route exact path="/about" element={<Template><About/></Template>}/>
          <Route exact path="/contactUs" element={<Template><ContactUs/></Template>}/>
          <Route exact path="/SignUp" element={<Template><SignUp/></Template>}/>
          <Route exact path="/UserPosts" element={<Template><Posts/></Template>}/>
          <Route exact path="/AddPost" element={<Template><CreatePost/></Template>}/>
          <Route exact path="Login" element={<Template><Login/></Template>}/>
          <Route   element={<ProtectedByUser/>}>
          <Route  path="/admin" element={<AdminDashboard />} />
          </Route>
  </Routes>
  export default MyRoutes;