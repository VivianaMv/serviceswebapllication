import React, { useEffect, useState } from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";
import { ref, get } from 'firebase/database';
import { database } from '../firebase';

const Header = ({handleSignOut, isSignedIn, userEmail }) => {
    const [userType, setUserType] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const determineUserType = async () => {
            if (!userEmail) return;

            try {
                if (userEmail === 'admin@gmail.com') {
                    setUserType('admin');
                    return;
                }

                const providersSnapshot = await get(ref(database, 'approvedProviders'));
                if (providersSnapshot.exists()) {
                    const providers = Object.keys(providersSnapshot.val());
                    if (providers.includes(userEmail)) {
                        setUserType('provider');
                        return;
                    }
                }

                const usersSnapshot = await get(ref(database, 'users'));
                if (usersSnapshot.exists()) {
                    const users = Object.values(usersSnapshot.val());
                    const user = users.find(user => user.email === userEmail);
                    if (user) {
                        setUserType('client');
                        return;
                    }
                }

                setUserType(null); 
            } catch (error) {
                console.error('Error determining user type:', error.message);
                setUserType(null);
            }
        };

        determineUserType();
    }, [userEmail]);

    const handleHome = () => {
        if (!isSignedIn) {
            navigate("/");
        } else if (userType === 'admin') {
            navigate("/homeadmin");
        } else if (userType === 'provider') {
            navigate("/homeprovider");
        } else if (userType === 'client') {
            navigate("/homeuser");
        } else {
            navigate("/");
        }
    };

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
