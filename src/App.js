// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import TermCon from './Components/TermCond';
import Header from './Components/Header';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import SignUpClient from './Components/SignUpClient';
import SignUpOptions from './Components/SignUpOptions';
import SignIn from './Components/SignIn';


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


      </Routes>
    </Router>


  );
}

export default App;
