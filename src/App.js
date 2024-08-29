import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Home/>
          } />
          <Route path="/signupclient" 
          element={
          <SignUpClient setUserEmail={setUserEmail} />
          } />

          <Route path="/signupprovider"
          element={
            <SignUpProvider/>
          } />
          <Route path="/signupoptions"
          element={
            <SignUpOptions/>
          } />
          <Route path="/aboutus"
          element={
            <AboutUs/>
          } />
          <Route path="/privacy"
          element={
            <Privacy/>
          } />
          <Route path="/termcond"
          element={
            <TermCond/>
          } />
          <Route path="/services"
          element={
            <Services/>
          } />
          <Route path="/contact"
          element={
            <Contact/>
          } />
          <Route path="/signin"
          element={
            <SignIn setUserEmail={setUserEmail}/>
          } />
          <Route path="/homeuser"
          element={
            <HomeUser/>
          } />
          <Route path="/usermanagement"
          element={
            <UserManagement/>
          } />

          


      </Routes>
    </Router>


  );
}

export default App;
