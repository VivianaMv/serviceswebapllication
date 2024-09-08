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
import HomeProvider from './Components/HomeProvider';
import UserManagement from './Components/UserManagement';
import BookService from './Components/BookService';


function App() {
  const [userEmail, setUserEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(!!userEmail);
  }, [userEmail]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupclient" element={<SignUpClient setUserEmail={setUserEmail} />} />
        <Route path="/signupprovider" element={<SignUpProvider />} />
        <Route path="/signupoptions" element={<SignUpOptions />} />
        <Route path="/aboutus" element={<AboutUs userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route path="/privacy" element={<Privacy userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route path="/termcond" element={<TermCond userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route path="/services" element={<Services userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route path="/contact" element={<Contact userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
        <Route path="/signin" element={<SignIn setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} />
       
        <Route 
          path="/homeuser" 
          element={isSignedIn ? <HomeUser userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} /> : <Navigate to="/signin" />} 
        />

        {/* <Route 
          path="/usermanagement" 
          element={isSignedIn && userEmail=== "admin@gmail.com" ? <UserManagement userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} /> : <Navigate to="/signin" />} 
        /> */}
        <Route 
          path="/usermanagement" 
          element={<UserManagement userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} />} 
        />
        <Route
          path="/homeprovider"
          element={isSignedIn ? <HomeProvider userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} /> : <Navigate to="/signin" />}
        />         
        <Route 
          path="/bookservice" 
          element={isSignedIn ? <BookService userEmail={userEmail} isSignedIn={isSignedIn} setUserEmail={setUserEmail} setIsSignedIn={setIsSignedIn} /> : <Navigate to="/signin" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
