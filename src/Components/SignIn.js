import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ setUserEmail, setIsSignedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUserEmail(email);
            setIsSignedIn(true);

            if (email === "admin@gmail.com") {
                navigate('/homeadmin', { state: { email: userCredential.user.email } });
            } else {
                navigate('/homeuser', { state: { email: userCredential.user.email } });
            }
        } catch (error) {
            setError(error.message);
            setIsSignedIn(false);
        }
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

                    <button type="submit">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <p onClick={() => navigate("/signup")} className="link-btn">You don't have an account? Sign up here</p>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;
