import React from 'react'
import './Style.css';
import Header from './Header';



const AboutUs = () => {
    return (
        <div className='home-container'>
            <Header/>
            
            <h1 className='About'>About Us</h1>

            <p className='descrip-home'>This service company was born from the need to find reliable basic services for the home without the worry of spending large amounts of money, but above all without wasting time with the family during vacations or days off.
                At easyathome we offer our clients and service providers the ease of choosing services that fit their time, budget and basic household needs.</p>

                
            

            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default AboutUs;