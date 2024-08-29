// import logo from './logo.svg';
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <Home/>
          } />
        <Route path="/signupclient"
          element={
            <SignUpClient/>
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
            <SignIn/>
          } />
          


      </Routes>
    </Router>


  );
}

export default App;
