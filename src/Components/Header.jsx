import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import { FaBookReader } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import {logoutUser} from '../redux/userSlice'; 

function Header({ isLoggedIn, user, logout }){
    const handleLogout = () => {
        logout();
      };    

    return(
     
          <header className="">
            <nav className="flex justify-between px-16 py-8 text-white bg-slate-600">
                <div>
                    <Link to="/">
                    <div className="flex gap-2">
                    <FaBookReader className="text-[2rem]" />
                    <h3 className="self-end text-xl font-bold">Kaleem's Blog</h3>
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
                    <Link to="/profile">
                    <div className="flex items-center gap-2 ">
                        <FaRegUserCircle className="text-[1.8rem]"/>
                        <h4 className="font-bold">Username</h4>
                    </div>
                    </Link>
                    <Link to="/">Logout</Link>
                               </div>

            </nav>
            </header>

    );
}
export default Header;








// // Header.js or any component where you want to use Redux
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { logoutUser } from './userSlice'; // Import the logout action

// function Header({ isLoggedIn, user, logout }) {
//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <header className="">
//       {/* ...Your header content... */}
//       <div className="flex gap-6 items-center">
//         {isLoggedIn ? (
//           <>
//             <Link to="/profile">
//               <div className="flex items-center gap-2 ">
//                 <FaRegUserCircle className="text-[1.8rem]" />
//                 <h4 className="font-bold">{user.username}</h4>
//               </div>
//             </Link>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </header>
//   );
// }

// const mapStateToProps = (state) => ({
//   isLoggedIn: state.user.isLoggedIn,
//   user: state.user.user,
// });

// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(logoutUser()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
