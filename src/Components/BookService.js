import React, { useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate, useLocation } from 'react-router-dom';

const BookService = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Extract providerEmail from state with a fallback to an empty string
    const { providerEmail = '' } = location.state || {};

    // const handleServiceBooking = async (e) => {
    //     e.preventDefault();

    //     if (!userEmail) {
    //         setError('User email is not defined.');
    //     } else if (!providerEmail) {
    //         setError('Provider email is not defined.');

    //     }

    //     const userId = userEmail.replace(/\./g, '_');
    //     const providerId = providerEmail.replace(/\./g, '_');

    //     try {
    //         const userServiceRef = ref(database, `services/${userId}`);
    //         const providerServiceRef = ref(database, `providerServices/${providerId}`);

    //         await push(userServiceRef).set({
    //             name: serviceType,
    //             date: serviceDate,
    //             time: serviceTime,
    //             status: 'Booked',
    //             providerEmail
    //         });

    //         await push(providerServiceRef).set({
    //             name: serviceType,
    //             date: serviceDate,
    //             time: serviceTime,
    //             status: 'Booked',
    //             clientEmail: userEmail
    //         });

    //         alert('Service booked successfully!');
    //         navigate('/homeuser');
    //     } catch (error) {
    //         setError('Error booking service: ' + error.message);
    //     }
    // };

    const [schedule, setSchedule] = useState(null);

    // client Id 1000.KZ5V66G3H4XNC47B9RPNXGAQYLXC1Q
    // client secret 6c46b37e0b7ab0f401d4c4ceb671caf4f5cda6d955

    // generated code 1000.6be0556c68502ab42743f4e098979b8b.fad7c3168d4c3128c0c050570d9c7a74

    const getSchedule = async (e) => {
        e.preventDefault();
        const apiKey = '1000.6be0556c68502ab42743f4e098979b8b.fad7c3168d4c3128c0c050570d9c7a74';
        const url = `https://accounts.zoho.com/oauth/v2/token`;
        const response = await fetch(url);
        const data = await response.json();
        setSchedule(data);
      };

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <div className='book-service-page'>
            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
            <h1 className='Book-serv'>Book a Service with {providerEmail} </h1>
            <div className='form-container'>
                
                <form className='client-form' onSubmit={getSchedule}>
                    <label>Service Type:<br></br></label>
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                        <option value="">Select Service</option>
                        <option value="Painting">Painting</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Gardening">Gardening</option>
                    </select>

                    <label>Date:</label>
                    <input type='date' value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} required />

                    <label>Time:</label>
                    <input type='time' value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} required />

                    <button type='submit'>Book Service</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
            <Footer 
                userEmail={userEmail} 
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn} 
            />
        </div>
    );
};

export default BookService;
