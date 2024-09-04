import React, { useState } from 'react';

import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Services = ({userEmail, isSignedIn, setUserEmail, setIsSignedIn}) => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };
    return (
        <div className='home-container'>

            <Header
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />

            <h1 className='Our-Services'>Our Services</h1>

            <div >
                <table  >
                    <tr className='Cleaning'>

                    </tr>
                    <tr>
                        <td> <img
                            className='logo-cleaning2'
                            src={require('../images/house-cleaning.jpg')}
                            alt='cleaning logo' /></td>
                        <td className='services-Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>

                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br><br></br>
                            <button onClick={() => navigate("/signupclient")}>Book services</button>

                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>

                    </tr>
                    <tr>
                        <td> <img
                            className='logo-gardening2'
                            src={require('../images/gardening.jpg')}
                            alt='gardening logo' /></td>

                        <td className='services-Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>

                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br><br></br>
                            <button onClick={() => navigate("/signupclient")}>Book services</button>
                        </td>
                    </tr>

                </table>

            </div>
            <div>
                <table>
                    <tr>
                        <td> <img
                            className='logo-gardening2'
                            src={require('../images/painting.jpg')}
                            alt='gardening logo' /></td>

                        <td className='services-Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>

                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br><br></br>
                            <button onClick={() => navigate("/signupclient")}>Book services</button>
                        </td>
                    </tr>
                </table>
            </div>

            <Footer />
        </div>


    );

}
export default Services;