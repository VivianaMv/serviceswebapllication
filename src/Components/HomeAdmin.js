import React, { useState, useEffect } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [error, setError] = useState(null);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/signin');
        } else {
            fetchAdminServices();
        }
    }, [isSignedIn, navigate]);

    const fetchAdminServices = async () => {
        try {
            const snapshot = await get(ref(database, 'adminServices'));
            if (snapshot.exists()) {
                const servicesList = [];
                snapshot.forEach(childSnapshot => {
                    servicesList.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setServices(servicesList);
            } else {
                console.log('No services found.');
            }
        } catch (error) {
            console.error('Error fetching services:', error.message);
            setError(error.message);
        }
    };

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

            <h2 className="client-info">Welcome, Admin.</h2>

            <button className='user-management-button' onClick={goToUserManagement}>Go to User Management</button>

            <div className="services-table-container">
                <h3>All Booked Services</h3>
                {services.length > 0 ? (
                    <table className="services-table">
                        <thead>
                            <tr>
                                <th>Client Email</th>
                                <th>Provider Email</th>
                                <th>Store Name</th>
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
                                    <td>{service.clientEmail}</td>
                                    <td>{service.providerEmail}</td>
                                    <td>{service.storeName}</td>
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

export default HomeAdmin;
