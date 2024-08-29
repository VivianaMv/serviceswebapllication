import React, { useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

const SignUpProvider = () => {
    const [storeName, setStoreName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        setServices(prevServices =>
            checked ? [...prevServices, value] : prevServices.filter(service => service !== value)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;

            await set(ref(database, 'pendingProviders/' + userId), {
                storeName,
                email,
                services
            });

            navigate('/signin');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='sign-up-pages'>
            <Header />

            <h2 className='client-title'>Sign Up to get hired to work</h2>

            <div className='form-container'>
                <form className='client-form' onSubmit={handleSubmit}>
                    <label>Storefront Name:</label>
                    <input
                        type="text"
                        id="pStoreName"
                        className='input-client-form'
                        required
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        id="pEmail"
                        className='input-client-form'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        id="cPassword"
                        className='input-client-form'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Services:</label>
                    <div className='services-signup-container'>
                        <div className='services-signup-items'>
                            <input
                                type="checkbox"
                                id="painting"
                                name="services"
                                value="Painting"
                                onChange={handleServiceChange}
                            />
                            <label htmlFor="painting">Painting</label>
                        </div>
                        <div className='services-signup-items'>
                            <input
                                type="checkbox"
                                id="cleaning"
                                name="services"
                                value="Cleaning"
                                onChange={handleServiceChange}
                            />
                            <label htmlFor="cleaning">Cleaning</label>
                        </div>
                        <div className='services-signup-items'>
                            <input
                                type="checkbox"
                                id="gardening"
                                name="services"
                                value="Gardening"
                                onChange={handleServiceChange}
                            />
                            <label htmlFor="gardening">Gardening</label>
                        </div>
                    </div>

                    <button type='submit'>Submit</button>

                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default SignUpProvider;
