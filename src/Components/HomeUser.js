import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const HomeUser = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [clientName, setClientName] = useState('');
    const [services, setServices] = useState([]);
    const [approvedProviders, setApprovedProviders] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (userEmail) {
            fetchAllUsers();
            fetchBookedServices();
            fetchApprovedProviders();
        }
    }, [userEmail]);

    const fetchBookedServices = async () => {
        try {
            const userId = userEmail.replace('.', '_');
            const snapshot = await get(ref(database, `services/${userId}`));
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
    

    const fetchAllUsers = async () => {
        try {
            const snapshot = await get(ref(database, 'users'));
            if (snapshot.exists()) {
                const users = snapshot.val();
                const user = Object.values(users).find(user => user.email === userEmail);
                if (user) {
                    setClientName(`${user.firstName} ${user.lastName}`);
                }
            } else {
                setError("No users found.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

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

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    const bookServiceWithProvider = (providerEmail) => {
        navigate(`/bookservice?providerEmail=${providerEmail}`);
    };

    const formatServices = (services) => {
        return services.join(', ');
    }

    return (
        <div>
            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
            <div className="home-user-page">
                <div className="client-info">
                    <h3>Welcome, {clientName}</h3>
                </div>

                <div className="home-user-content">
                    <div className="calendar-container">
                        <h4>Upcoming Services Calendar</h4>
                        {/* Add your calendar component here */}
                    </div>

                    <div className="services-table-container">
                        <h4>Your Booked Services</h4>
                        {services.length > 0 ? (
                            <table className="services-table">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map(service => (
                                        <tr key={service.id}>
                                            <td>{service.name}</td>
                                            <td>{service.date}</td>
                                            <td>{service.time}</td>
                                            <td>{service.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No services booked yet.</p>
                        )}
                    </div>
                </div>

                <div className='available-services'>
                    <h1>Approved Providers</h1>
                    {approvedProviders.length > 0 ? (
                        <table className="providers-table">
                            <thead>
                                <tr>
                                    <th>Store Name</th>
                                    <th>Services</th>
                                    <th>Action</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {approvedProviders.map(provider => (
                                    <tr key={provider.email} className='td-row'>
                                        <td>{provider.storeName}</td>
                                        <td>
                                            <p>{formatServices(provider.services)}</p>
                                        </td>
                                        <td>
                                            <button onClick={() => bookServiceWithProvider(provider.email)}>
                                                Book Service
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No approved providers found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeUser;
