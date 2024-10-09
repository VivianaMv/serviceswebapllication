import React, { useState, useEffect } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, get, push, set } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate, useLocation } from 'react-router-dom';

const BookService = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [serviceAddress, setServiceAddress] = useState('');
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState('');
    const [storeName, setStoreName] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
    const [gsiInitialized, setGsiInitialized] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const initializeGoogleIdentityServices = () => {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setGsiInitialized(true);
                console.log('Google Identity Services initialized.');
            };
            script.onerror = () => {
                setError('Failed to load Google Identity Services.');
            };
            document.body.appendChild(script);
        };

        if (!window.google || !window.google.accounts) {
            initializeGoogleIdentityServices();
        } else {
            setGsiInitialized(true);
        }
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const emailFromQuery = query.get('providerEmail');
        const emailFromState = location.state?.providerEmail;
        const storeNameFromState = location.state?.storeName;

        const email = emailFromState || emailFromQuery;

        if (email) {
            setProviderEmail(email);
            if (storeNameFromState) {
                setStoreName(storeNameFromState);
            } else {
                fetchProviderData(email);
            }
        } else {
            setError('Provider email not provided.');
        }
    }, [location]);

    const fetchProviderData = async (email) => {
        try {
            const emailKey = email.replace(/\./g, '_');
            const approvedProvidersRef = ref(database, `approvedProviders/${emailKey}`);
            const snapshot = await get(approvedProvidersRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                setStoreName(data.storeName || '');
            } else {
                setError('Provider data not found.');
            }
        } catch (error) {
            setError('Error fetching provider data: ' + error.message);
        }
    };

    const handleSignOut = () => {
        setUserEmail('');
        setIsSignedIn(false);
        navigate('/');
    };

    const signInToGoogle = () => {
        if (!gsiInitialized) {
            setError('Google Identity Services not initialized.');
            return;
        }

        if (window.google && window.google.accounts) {
            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: '65310157307-s5t6gtlqklb40ffra9t0a9bsk7vqihdk.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/calendar',
                callback: (response) => {
                    if (response.error) {
                        setError('Error during sign-in: ' + response.error);
                        return;
                    }
                    setAccessToken(response.access_token);
                    console.log('Access token obtained:', response.access_token);
                },
            });

            client.requestAccessToken();
        } else {
            setError('Google Identity Services not loaded.');
        }
    };

    const handleServiceBooking = async (e) => {
        e.preventDefault();

        if (!userEmail) {
            setError('User email is not defined.');
            return;
        } else if (!providerEmail) {
            setError('Provider email is not defined.');
            return;
        }

        if (!gsiInitialized) {
            setError('Google Identity Services not initialized.');
            return;
        }

        if (!accessToken) {
            signInToGoogle();
            return;
        }

        try {
            const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    summary: `Service Booking: ${serviceType}`,
                    description: `Service Type: ${serviceType}\nDate: ${serviceDate}\nTime: ${serviceTime}\nAddress: ${serviceAddress}`,
                    start: {
                        dateTime: `${serviceDate}T${serviceTime}:00`,
                        timeZone: 'America/Toronto'
                    },
                    end: {
                        dateTime: `${serviceDate}T${parseInt(serviceTime.split(':')[0]) + 1}:${serviceTime.split(':')[1]}:00`,
                        timeZone: 'America/Toronto'
                    },
                    attendees: [
                        { email: providerEmail },
                        { email: userEmail }
                    ]
                }),
            });

            if (response.ok) {
                alert('Service booked successfully!');
                saveServiceToFirebase();
                navigate('/homeuser');
            } else {
                const errorData = await response.json();
                setError('Error booking service: ' + errorData.error.message);
            }
        } catch (error) {
            setError('Error booking service: ' + error.message);
        }
    };

    const saveServiceToFirebase = async () => {
        try {
            const userId = userEmail.replace(/\./g, '_');
            const providerId = providerEmail.replace(/\./g, '_');
            const serviceId = push(ref(database, 'services')).key;
    
            const userServicesRef = ref(database, `userServices/${userId}/${serviceId}`);
            const providerServicesRef = ref(database, `providerServices/${providerId}/${serviceId}`);
            const adminServicesRef = ref(database, `adminServices/${serviceId}`);
    
            const serviceData = {
                id: serviceId,
                name: serviceType,
                date: serviceDate,
                time: serviceTime,
                address: serviceAddress,
                status: 'Booked',
                providerEmail: providerEmail,
                storeName,
                clientEmail: userEmail
            };
    
            await set(userServicesRef, serviceData);
            await set(providerServicesRef, serviceData);
            await set(adminServicesRef, serviceData);
    
            console.log('Service saved to Firebase.');
    
        } catch (error) {
            console.error('Error saving service to Firebase:', error.message);
            setError('Error saving service to Firebase: ' + error.message);
        }
    };

    return (
        <div className='book-service-page'>
            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
            <h2 className='Book-serv'>Book a Service with {storeName || 'Unknown Provider'} </h2>
            <div className='form-container'>
                <form className='client-form' onSubmit={handleServiceBooking}>
                    <label>Service Type:<br /></label>
                    <select className='book-service-input' value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                        <option value="">Select Service</option>
                        <option value="Painting">Painting</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Gardening">Gardening</option>
                    </select>

                    <label>Date:</label>
                    <input className='book-service-input' type='date' value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} required />

                    <label>Time:</label>
                    <input className='book-service-input' type='time' value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} required />

                    <label>Service Address:</label>
                    <input className='book-service-input' type='text' value={serviceAddress} onChange={(e) => setServiceAddress(e.target.value)} required />
                    <br></br>
                    <button type='submit'>Book Service</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default BookService;
