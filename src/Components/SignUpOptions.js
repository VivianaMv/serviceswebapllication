import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";



const SignUpOptions = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };
    return (
        <div >
            <Header />

            <h1 className='About'>Joins as a client or as service provider</h1>
            <div className='SignUpOpt' >
                <h2 className="signin-title">Client</h2>
                <button onClick={() => navigate("/signupclient")}>Sign Up here</button>
            </div>

            <div className='SignUpOpt'>
                <h2 className="signin-title">Service provider</h2>
                <button onClick={() => navigate("/signupprovider")}>Sign Up here</button>
            </div>

            <Footer
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
        </div>


    );

}
export default SignUpOptions;