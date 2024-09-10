import React, { useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const goToUserManagement = () => {
        navigate('/usermanagement');
    };

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <div className='home-admin-page'>
            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />

            <div className='admin-content'>
                <h2>Welcome, Admin</h2>
                <button className='user-management-button' onClick={goToUserManagement}>
                    Go to User Management
                </button>
            </div>

            <Footer 
                userEmail={userEmail} 
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn} 
            />
        </div>
    );
};

export default HomeAdmin;
