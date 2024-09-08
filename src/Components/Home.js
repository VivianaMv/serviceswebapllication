import React from 'react';
import './Style.css';
import logo from '../images/logo-home.jpg';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Home = ({ userEmail, isSignedIn }) => {

    const navigate = useNavigate();
    return (
        <div className='home-container'>
            <Header 
                email={userEmail} 
                isSignedIn={isSignedIn} 
            />
            <table className='home-table'>

                <tbody>
                    <tr>
                        <td><img src={logo} alt="Logo" className="logo-home" /></td>
                        <td className='descrip-home'>
                            Welcome to EasyHome, your trusted partner for comprehensive cleaning and repair solutions. 
                            We specialize in transforming spaces with meticulous cleaning services and reliable repairs. 
                            Whether it's maintaining a spotless home or fixing that stubborn issue, we're dedicated to 
                            delivering quality service with attention to detail. At EasyHome, your satisfaction is our priority, 
                            and we're here to make your space shine and function flawlessly.
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div className='home-logos'>
                <div >
                    <img
                        src={require('../images/house-cleaning.jpg')} alt='cleaning logo' onClick={() => navigate("/services")}/>
                        <p className='logo-home-title'>Cleaning</p>
                </div>
                <div>
                    <img
                        src={require('../images/gardening.jpg')} alt='gardening logo' onClick={() => navigate("/services")} />
                        <p className='logo-home-title'>Gardening</p>
                </div>
                <div>
                    <img
                        src={require('../images/painting.jpg')} alt='painting logo' onClick={() => navigate("/services")} />
                        <p className='logo-home-title'>Painting</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};


export default Home;