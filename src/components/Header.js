import React from "react";
import { Link } from "react-router-dom";
import   './Header.css';

function Header() {

    
    return (
        <div>
            {/* header */}

            <div class="topnav">
      
            <a class="active" href="#home"> <img className="img" src="./logo.PNG" alt="Logo"/></a>

            <div className="header_right">

                               <Link to="/login">Login</Link>
 
                                 <Link to="/login/createUser">Register</Link>

                               <Link to="/">Cart</Link>

            </div>

            
            </div>
            
        </div>
    )
}

export default Header