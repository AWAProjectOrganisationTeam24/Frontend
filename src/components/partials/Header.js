import React from "react";
import { Link } from "react-router-dom";
import   './Header.css';

import logo from '../logo.PNG';

function Header() {

    
    return (
        <div>
            <div class="topnav">
                <a class="active" href="#home"> <img className="img" src={logo} alt="Logo"/></a>
                <div className="header_right">
                    <Link to="/login">Login</Link>

                    <Link to="/Profile/:id">Profile</Link>

                    <Link to="/login/createUser">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Header