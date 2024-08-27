import React from "react";
import './Style.css';
import logo from '../images/logo-home.jpg';

const Header = ({ email, handleSignOut }) => {

    const location = window.location.pathname;
    const showHeaderRight = location !== "/signup" && location !== "/signin" && location !== "/reset";

    return (
        <div className="header-container">
            <div className="options">
                <img src={logo} alt="Logo" className="logo-home" />
                <div className="nav-links">
                    <a className='Home' href='Home.js'>Home</a>
                    <a className='Services' href='Services.js' target='_blanck'>Services</a>
                    <a className='About' href='About.js' target='_blanck'>About Us</a>
                    <a className='Contact' href='Contact.js' target='_blanck'>Contact Us</a>
                </div>

                <div className="buttons-home">
                    <button className="btnsignIn"> Sign In</button>
                    <button className="btnCreate"> Create an Account</button>
                </div>
            </div>
            <div> <h1 className="header-title">EasyHome</h1></div>

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
