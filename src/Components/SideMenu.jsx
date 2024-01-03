import {useState} from 'react'
import { Link } from "react-router-dom";


const SideMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  return (
    <div className="flex justify-between">
    <div className="h-[100vh] w-full bg-blue-500 text-white">
      <ul className="mt-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button> // If logged in, show logout button
          ) : (
            <Link to="/login">Login</Link> // If not logged in, show login link
          )}
        </li>
        <li>
          <Link to="/admindashboard">Admin</Link>
        </li>
      </ul>
    </div>
    <div className="h-[100vh]  bg-white-500">

    </div>
  </div>
  )
}

export default SideMenu