import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <header className="Navbar-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Landing</Link>
                        </li>
                        <li>
                            <Link to="/applications">Applications</Link>
                        </li>
                        <li>
                            <Link to="/opportunities">Opportunities</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">AboutUs</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
