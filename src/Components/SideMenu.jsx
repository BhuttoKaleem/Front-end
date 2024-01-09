import {useState} from 'react'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actions';
const SideMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.user.userData)
  return (
    <div className="flex justify-between">
    <div className="h-[100vh] w-full bg-blue-500">
      <ul className="mt-8 text-center text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            {userData && <Link to="/AddPost">Publish Blog</Link>}
          </li>
        <li>
            {userData && <Link to="/UserPosts">Manage</Link>}
          </li>
        <li>
         {!userData && <Link to="/signup">Sign up</Link>}
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li> 
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
            {/* <button onClick={() => setIsLoggedIn(false)}>Logout</button>  */}
            {/* <Link to="/login">Login</Link>  */}
        </li>
          {/* <Link to="/admindashboard">Admin</Link> */}
        {/* </li>  */}
      </ul>
    </div>
  </div>
  )
}

export default SideMenu