import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const HomeProvider = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [approvedProviders, setApprovedProviders] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [services,setServices] = useState([]);



    useEffect(() => {
        if (!isSignedIn) {
            navigate('/signin');
        }
    }, [isSignedIn]);

    const fetchApprovedProviders = async () => {
        try {
            const snapshot = await get(ref(database, 'approvedProviders'));
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log('Fetched approved providers:', data);
                const providers = Object.values(data).filter(provider => provider.status === 'not_banned');
                setApprovedProviders(providers);
            } else {
                setError("No providers found.");
            }
        } catch (error) {
            console.error('Error fetching approved providers:', error.message);
            setError(error.message);
        }
    };

    const fetchProviderServices = async () => {
        try {
            const providerId = userEmail.replace('.', '_');
            const snapshot = await get(ref(database, `providerServices/${providerId}`));
            if (snapshot.exists()) {
                const servicesList = [];
                snapshot.forEach(childSnapshot => {
                    servicesList.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setServices(servicesList);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    
    

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <div className='home-container'>

            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />

            <h1 className='Welcome'>Welcome to EasyHome, </h1>

            

            <Footer />

        </div>
    );

};

export default HomeProvider;
