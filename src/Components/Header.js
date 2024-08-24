import React from "react";
import './Style.css';
import logo from '../images/logo-home.jpg';

const Header = ({ email, handleSignOut }) => {

    const location = window.location.pathname;
    const showHeaderRight = location !== "/signup" && location !== "/signin" && location !== "/reset";

    return (
        <div className="header-container">
            <h1 className="header-title">EasyHome</h1>
            <img src={logo} alt="Logo" className="logo-home" />

            {/* {showHeaderRight && (
                <div className="header-right">
                    <button onClick={handleSignOut} className="sign-out">Sign Out</button>
                    <div className="email-in-use">{email}</div>
                </div>
            )} */}
        </div>
    );
};




export default Header;