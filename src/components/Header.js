import React from "react";
import { Link } from "react-router-dom";
import   './Header.css';

import logo from './logo.PNG';

function Header() {

    
    return (
        <div>
            {/* header */}

            <div class="topnav">
      
            <a class="active" href="/"> <img className="img" src={logo} alt="Logo"/></a>

            <div className="header_right">
                               <Link to="/profile">Profile</Link>

                               <Link to="/login">Login</Link>
 
                                 <Link to="/login/createUser">Register</Link>

                               <Link to="/">Cart</Link>

            </div>

            
            </div>
            
        </div>
    )
}

export default Header