import React, { useState, useEffect } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const BookService = ({ userEmail, isSignedIn, setUserEmail, setIsSignedIn }) => {
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState('');
    const [storeName, setStoreName] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Load Google API library
        const loadGapiScript = () => {
            const script = document.createElement('script');
            script.src = 'https://apis.google.com/js/api.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.gapi.load('client:auth2', initializeGapi);
            };
            document.body.appendChild(script);
        };

        const initializeGapi = () => {
            window.gapi.client.init({
                apiKey: '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', // Your API Key
                clientId: '65310157307-s5t6gtlqklb40ffra9t0a9bsk7vqihdk.apps.googleusercontent.com', // Your Client ID
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: 'https://www.googleapis.com/auth/calendar'
            }).then(() => {
                setGapiLoaded(true);
                console.log('GAPI client initialized.');
            }).catch((error) => {
                console.error('Error initializing GAPI client:', error);
            });
        };

        loadGapiScript();
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
        if (window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.getAuthInstance().signIn().then(() => {
                const authInstance = window.gapi.auth2.getAuthInstance();
                setAccessToken(authInstance.currentUser.get().getAuthResponse().access_token);
            }).catch((error) => {
                setError('Error signing in: ' + error.message);
            });
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

        if (!gapiLoaded) {
            setError('Google API not loaded.');
            return;
        }

        if (!accessToken) {
            signInToGoogle();
            return;
        }

        try {
            const response = await window.gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: {
                    summary: `Service Booking: ${serviceType}`,
                    description: `Service Type: ${serviceType}\nDate: ${serviceDate}\nTime: ${serviceTime}`,
                    start: {
                        dateTime: `${serviceDate}T${serviceTime}:00`,
                        timeZone: 'America/Los_Angeles'
                    },
                    end: {
                        dateTime: `${serviceDate}T${parseInt(serviceTime.split(':')[0]) + 1}:${serviceTime.split(':')[1]}:00`,
                        timeZone: 'America/Los_Angeles'
                    },
                    attendees: [
                        { email: providerEmail },
                        { email: userEmail }
                    ]
                }
            });

            if (response.status === 200) {
                alert('Service booked successfully!');
                navigate('/homeuser');
            } else {
                setError('Error booking service: ' + response.result.error.message);
            }
        } catch (error) {
            setError('Error booking service: ' + error.message);
        }
    };

    return (
        <div className='book-service-page'>
            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
            <h1 className='Book-serv'>Book a Service with {storeName || 'Unknown Provider'} </h1>
            <div className='form-container'>
                <form className='client-form' onSubmit={handleServiceBooking}>
                    <label>Service Type:<br /></label>
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
