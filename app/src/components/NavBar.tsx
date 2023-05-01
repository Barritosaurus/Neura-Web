import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/opportunities">Work With Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
        </div>
    );
}

export default NavBar;