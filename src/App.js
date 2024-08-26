// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import TermCon from './Components/TermCond';
import Header from './Components/Header';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';


function App() {
  return (
    <div >
      <Header />
      <Home/>
      <Privacy />
      <TermCon /> 
     <Services/>
      <AboutUs />
      <Contact />
      

      
    </div>
  );
}

export default App;
