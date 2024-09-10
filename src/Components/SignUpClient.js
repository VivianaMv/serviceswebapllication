import React, { useState } from 'react';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useNavigate } from "react-router-dom";

const SignUpClient = ({ setUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await set(ref(database, `users/${userId}`), {
        email,
        firstName,
        lastName,
        streetAddress,
        city,
        province,
        postalCode,
        status: 'not_banned'  // Set the default status to 'not_banned'
      });

      setUserEmail(email);
      navigate('/signin');
    } catch (error) {
      setError(error.message);
      console.error("Sign-up error:", error.message);
    }
  };

  return (
    <div className='sign-up-pages'>
      <Header />
      <h2 className='client-title'>Sign Up to Hire Services</h2>
      <div className='form-container'>
        <form className='client-form' onSubmit={handleSignUp}>
          <label>First Name:</label>
          <input
            type="text"
            id="cFirstName"
            className='input-client-form'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name:</label>
          <input
            type="text"
            id="cLastName"
            className='input-client-form'
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            id="cEmail"
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

          <label>Street Address:</label>
          <input
            type='text'
            id='cStreetAddress'
            className='input-client-form'
            required
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />

          <label>City:</label>
          <input
            type='text'
            id='cCityAddress'
            className='input-client-form'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label>Province:</label>
          <select
            id='cProvince'
            className='input-client-form'
            required
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value=''></option>
            <option value='NL'>NL</option>
            <option value='PE'>PE</option>
            <option value='NS'>NS</option>
            <option value='NB'>NB</option>
            <option value='QC'>QC</option>
            <option value='ON'>ON</option>
            <option value='MB'>MB</option>
            <option value='SK'>SK</option>
            <option value='AB'>AB</option>
            <option value='BC'>BC</option>
            <option value='YT'>YT</option>
            <option value='NT'>NT</option>
            <option value='NU'>NU</option>
          </select>

          <label>Postal Code:</label>
          <input
            type='text'
            id='cPostalCode'
            className='input-client-form'
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <br />
          <button type='submit'>Submit</button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
      <Footer
        userEmail={userEmail}
        handleSignOut={handleSignOut}
        isSignedIn={isSignedIn}
      />
    </div>
  );
};

export default SignUpClient;
