import React  from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <React.Fragment>
          <header className="flex gap-5 text-white bg-slate-600">
          <Link to={"/"}>
                    Home
                </Link>     
                <Link to={"/About"}>
                    About us
                </Link> 
                <Link to={"/ContactUs"}>
                    Contact us
                </Link>  
                <Link to={"/SignUp"}>
                    Sign up
                </Link>  
                <Link to={"/Login"}>
                    Login
                </Link>
                <Link to={"/AdminDashboard"}>
                    Admin
                </Link>  
            </header>
        </React.Fragment>
    );
}
export default Header;