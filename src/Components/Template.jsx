import React, { useState } from "react";
import Header from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";

const Template = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-between">
        <div className="h-[100vh] w-[10%] bg-blue-500 text-white">
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
        <div className="h-[100vh] w-[80%] bg-white-500"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Template;