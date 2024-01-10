import { Link, Navigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT } from '../redux/actions';
import { FaBookReader } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa"; 
function Header(){
    const Navigate = useNavigate();
    const dispatch = useDispatch();
   const userData = useSelector((state)=>state.user.userData)
   const handleLogout = () => {
    dispatch({ type: LOGOUT });
    Navigate("/")
  }
    return(
          <header className="">
            <nav className="flex justify-between px-16 py-8 text-white bg-slate-600">
                <div>
                    <Link to="/">
                    <div className="flex gap-2">
                    <FaBookReader className="text-[2rem]" />
                    <h3 className="self-end text-xl font-bold">Daily Biz</h3>
                    </div>
                    </Link>
                </div>
                <div>
                    <p className="flex items-center bg-white rounded-md">
                        <label htmlFor="Search" className="absolute left-[-1000px]">Search</label>
                        <input placeholder="Search..." className="bg-transparent p-2 rounded-md w-[250px] outline-none text-[#45474B]" type="text" name="search" id="search" />
                        <CiSearch className="text-black mr-2 text-2xl cursor-pointer hover:bg-gray-400" />            
                    </p>
                </div>
                <div className="flex gap-6 items-center">
                {userData ? (
                    <div className="flex items-center gap-2 ">
                        {/* <Link to="/profile"/>   */}
                        {/* <FaRegUserCircle className="text-[1.8rem]" /> */}
                        <Link to="/profile">
                            <FaRegUserCircle className="text-[1.8rem]" />
                        </Link>
                        <h4 className="font-bold">{userData.username}</h4>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    /* </Link> */
                    <Link to="/login" className="font-bold">Login</Link>
                    )}
                </div>
            </nav>
            </header>
    );
}
export default Header;
