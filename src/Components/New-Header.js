import React from "react";
import './Style.css';
import logo from '../images/logo-home.jpg';


const NewHeader = ({ email, handleSignOut, isSignedIn }) => {
    return (
        <div className="header-container">
            {/* <img src={logo} alt="Logo" className="logo-home" /> */}
            <div className="Home-title">Easy Home</div>

            <div className="nav-links">
                <a className='nav-item' href='/home'>Home</a>
                <a className='nav-item' href='/services'>Services</a>
                <a className='nav-item' href='/about'>About</a>
                <a className='nav-item' href='/contact'>Contact</a>
            </div>

            <div className="auth-buttons">
                {/* {isSignedIn ? (
                    <>
                        <button onClick={handleSignOut} className="btnSignOut">Sign Out</button>
                        <div className="email-in-use">{email}</div>
                    </>
                ) : (
                    <> */}
                        <button className="btnSignIn">Sign In</button>
                        <button className="btnCreate">Sign Up</button>
                    {/* </>
                )} */}
            </div>
        </div>
    );
};

export default NewHeader;