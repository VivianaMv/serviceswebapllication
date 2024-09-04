import React, { useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const BookService = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleServiceBooking = async (e) => {
        e.preventDefault();

        try {
            const newServiceRef = push(ref(database, `services/${userEmail.replace('.', '_')}`));
            await newServiceRef.set({
                name: serviceType,
                date: serviceDate,
                time: serviceTime,
                status: 'Booked'
            });

            alert('Service booked successfully!');
            navigate('/homeuser'); 
        } catch (error) {
            setError('Error booking service: ' + error.message);
        }
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
            <div className='form-container'>
                <h2>Book a Service</h2>
                <form className='client-form' onSubmit={handleServiceBooking}>
                    <label>Service Type:</label>
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
            <Footer />
        </div>
    );
};

export default BookService;
