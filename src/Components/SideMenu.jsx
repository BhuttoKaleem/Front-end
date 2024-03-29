import {useState} from 'react'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actions';
const SideMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.user.userData)
  return (
    <div className="flex h-full align-center justify-between sm:w-1/4 lg:w-1/2 bg-blue-500">
      <ul className="mt-8 text-center text-white font-bold">
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
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li> 
      </ul>
    </div>
  )
}

export default SideMenu