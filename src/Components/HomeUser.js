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
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (userEmail) {
            fetchClientName();
            fetchBookedServices();
        }
    }, [userEmail]);

    const fetchClientName = async () => {
        try {
            const userId = userEmail.replace('.', '_'); 
            const snapshot = await get(ref(database, `users/${userId}`));
            if (snapshot.exists()) {
                const data = snapshot.val();
                setClientName(`${data.firstName} ${data.lastName}`);
            } else {
                setError("User name not found.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

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

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <div>
            <Header 
                userEmail={userEmail} 
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn} 
            />
            <div className="home-user-page">
                <div className="client-info">
                    <h3>Welcome, {clientName || "Guest"}</h3>
                    <div className="email-in-use">{userEmail}</div>
                    {error && <p className="error">{error}</p>}
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
            </div>
            <Footer />
        </div>
    );
};

export default HomeUser;
