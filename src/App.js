import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import TermCond from './Components/TermCond';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import SignUpClient from './Components/SignUpClient';
import SignUpOptions from './Components/SignUpOptions';
import SignIn from './Components/SignIn';
import SignUpProvider from './Components/SignUpProvider';
import HomeUser from './Components/HomeUser';
import UserManagement from './Components/UserManagement';
import BookService from './Components/BookService';

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in by looking for email
    if (userEmail) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [userEmail]);

  const handleSignOut = () => {
    setUserEmail("");
    setIsSignedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupclient" element={<SignUpClient setUserEmail={setUserEmail} />} />
        <Route path="/signupprovider" element={<SignUpProvider />} />
        <Route path="/signupoptions" element={<SignUpOptions />} />
        <Route path="/aboutus" element={<AboutUs isSignedIn={isSignedIn} />} />
        <Route path="/privacy" element={<Privacy isSignedIn={isSignedIn} />} />
        <Route path="/termcond" element={<TermCond isSignedIn={isSignedIn} />} />
        <Route path="/services" element={<Services isSignedIn={isSignedIn} />} />
        <Route path="/contact" element={<Contact isSignedIn={isSignedIn} />} />
        <Route path="/signin" element={<SignIn setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route 
          path="/homeuser" 
          element={isSignedIn ? <HomeUser userEmail={userEmail} isSignedIn={isSignedIn} /> : <Navigate to="/signin" />} 
        />
        <Route 
          path="/usermanagement" 
          element={isSignedIn ? <UserManagement isSignedIn={isSignedIn} /> : <Navigate to="/signin" />} 
        />
        <Route 
          path="/bookservice" 
          element={isSignedIn ? <BookService userEmail={userEmail} isSignedIn={isSignedIn} /> : <Navigate to="/signin" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
