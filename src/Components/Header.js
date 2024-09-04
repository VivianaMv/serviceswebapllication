import React from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";

const Header = ({ email, handleSignOut, isSignedIn }) => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/")
    }

    return (
        <div className="header-container">
            <div className="Home-title">Easy Home</div>

            <div className="nav-links">
                <a className='nav-item' onClick={handleHome}>Home</a>
                <a className='nav-item' onClick={() => navigate("/services")}>Services</a>
                <a className='nav-item' onClick={() => navigate("/aboutus")}>About</a>
                <a className='nav-item' onClick={() => navigate("/contact")}>Contact</a>
            </div>

            <div className="auth-buttons">
                {isSignedIn ? (
                    <>
                        <button onClick={handleSignOut} className="btnSignIn">Sign Out</button>
                        {/* <div className="email-in-use">{email}</div> */}
                    </>
                ) : (
                    <>
                        <button className="btnSignIn" onClick={() => navigate("/signin")}>Sign In</button>
                        <button className="btnSignIn" onClick={() => navigate("/signupoptions")}>Sign Up</button>
                    </>
                )}
                
            </div>
        </div>
    );
};

export default Header;