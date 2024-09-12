import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';

const SignIn = ({  userEmail, isSignedIn, setUserEmail, setIsSignedIn  }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    const handleSignin = async (e) => {
        e.preventDefault();
    
        const sanitizedEmail = email.replace(/\./g, '_');
        const bannedUserRef = ref(database, 'bannedUsers/' + sanitizedEmail);
        const bannedUserSnapshot = await get(bannedUserRef);
    
        if (bannedUserSnapshot.exists()) {
            setError("This email is banned.");
            return;
        }
    
        const pendingProvidersRef = ref(database, 'pendingProviders');
        const pendingProvidersSnapshot = await get(pendingProvidersRef);
    
        if (pendingProvidersSnapshot.exists()) {
            let isPending = false;
            pendingProvidersSnapshot.forEach((providerSnapshot) => {
                const provider = providerSnapshot.val();
                if (provider.email === email) {
                    isPending = true;
                }
            });
    
            if (isPending) {
                setError("Your profile is still pending approval from the admin.");
                return;
            }
        }
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userEmail = userCredential.user.email;
            setUserEmail(userEmail);
    
            const approvedProvidersRef = ref(database, 'approvedProviders');
            const approvedProvidersSnapshot = await get(approvedProvidersRef);
            let isProvider = false;
    
            if (approvedProvidersSnapshot.exists()) {
                approvedProvidersSnapshot.forEach((providerSnapshot) => {
                    const provider = providerSnapshot.val();
                    if (provider.email === userEmail) {
                        isProvider = true;
                    }
                });
            }
    
            if (userEmail === "admin@gmail.com") {
                navigate('/homeadmin', { state: { email: userEmail } });
            } else if (isProvider) {
                navigate('/homeprovider', { state: { email: userEmail } });
            } else {
                navigate('/homeuser', { state: { email: userEmail } });
            }
        } catch (error) {
            setError(error.message);
        }
    };
    

    const handleReset = () => {
        navigate('/reset');
    };

    return (
        <div className="sign-up-pages">
            <Header />
            <div className="form-signin">
                <h1 className="signin-title">Sign In</h1>
                <form className="client-form" onSubmit={handleSignin}>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="signinEmail"
                        className='input-client-form'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        id="signinPassword"
                        className='input-client-form'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="Password" onClick={handleReset} >Forgot password?</p>

                    <button type="submit">Login</button><br /><br />
                </form>
                {error && <p className="error-message">{error}</p>}
                <p className="Sign-up-here">You don't have an account? Sign up here</p>
                <button onClick={() => navigate("/signupoptions")} type="submit">Sign Up</button>
            </div>
            <Footer 
                userEmail={userEmail} 
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn} 
            />
        </div>
    );
};

export default SignIn;
