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
    const [services, setServices] = useState([]);
    const [storeName, setStoreName] = useState('');

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/signin');
        } else {
            fetchApprovedProviders();
            fetchProviderServices();
            fetchStoreName();
        }
    }, [isSignedIn, userEmail]);

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
            } else {
                console.log('No services found for this provider.');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchStoreName = async () => {
        try {
            const providerId = userEmail.replace('.', '_');
            const snapshot = await get(ref(database, `approvedProviders/${providerId}`));
            if (snapshot.exists()) {
                const providerData = snapshot.val();
                console.log('Fetched provider data:', providerData);
                setStoreName(providerData.storeName || '');
            } else {
                console.log('No store name found for this provider.');
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

            <h2 className='Welcome'>Welcome to EasyHome, {userEmail}</h2>

            <div className="services-table-container">
                <h3>Your Booked Services</h3>
                {services.length > 0 ? (
                    <table className="services-table">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Service Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service.id}>
                                    <td>{service.name}</td>
                                    <td>{service.date}</td>
                                    <td>{service.time}</td>
                                    <td>{service.status}</td>
                                    <td>{service.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No services booked yet.</p>
                )}
            </div>

            <Footer
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
        </div>
    );
};

export default HomeProvider;
