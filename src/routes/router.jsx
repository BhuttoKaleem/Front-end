import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import HomePage from "../Pages/Homepage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Template from "../Components/Template";
import Profile from '../Components/Profile';
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import CreatePost from "../Pages/AddPost";
import NotFoundPage from "../Pages/NotFoundPage";
import UnAuthorized from "../Pages/UnAuthorized";
import Posts from "../Components/ManagePosts";
  const MyRoutes=()=>
  <Routes>
          <Route exact path="/" element={<Template><HomePage /></Template>} />
          <Route exact path="/about" element={<Template><About/></Template>}/>
          <Route exact path="/contactUs" element={<Template><ContactUs/></Template>}/>
          <Route exact path="/SignUp" element={<Template><SignUp/></Template>}/>
          <Route path="/UnAuthorized" element={<UnAuthorized />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route exact path="/Login" element={<Template><Login/></Template>}/>
          <Route element={<Protected/>}>
                <Route exact path="/UserPosts" element={<Template><Posts/></Template>}/>
          </Route>
          <Route element={<Protected/>}>
                <Route path="/AddPost" element={<Template><CreatePost/></Template>}/>
          </Route>
          <Route element={<Protected/>}>
                <Route path="/Profile" element={<Template><Profile/></Template>}/>
          </Route>
  </Routes>
  export default MyRoutes;