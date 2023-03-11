import React from "react";
import { Link } from "react-router-dom";
function Landing() {
    return (
        <div className="background">
            <div className="header-background-container">
                <div className="header-wrapper">
                    <header className="center-container-header">
                        <li className="link-text">
                            <Link to="/">home</Link>
                        </li>
                        <li className="link-text">
                            <Link to="/applications">applications</Link>
                        </li>
                        <h1 className="header-text">neura studios</h1>
                        <li className="link-text">
                            <Link to="/opportunities">opportunities</Link>
                        </li>
                        <li className="link-text">
                            <Link to="/aboutus">about us</Link>
                        </li>
                    </header>
                </div>
            </div>
            <div className="grid-container">
                <div className="image-grid">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
