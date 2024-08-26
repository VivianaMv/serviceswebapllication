import React from 'react'
import './Style.css';



const Home = () => {
    return (
        <div className='home-container'>


            {/* <img
                className='logo-home'
                src={require('../images/logo-home.jpg')}
                alt='home logo' /> */}


            <p className='descrip-home'>Welcome to EasyHome, your trusted partner for comprehensive cleaning and repair solutions. We specialize in transforming spaces with meticulous cleaning services and reliable repairs. Whether it's maintaining a spotless home or fixing that stubborn issue, we're dedicated to delivering quality service with attention to detail. At EasyHome, your satisfaction is our priority, and we're here to make your space shine and function flawlessly.</p>

            <img
                className='logo-cleaning'
                src={require('../images/house-cleaning.jpg')}
                alt='cleaning logo' />

            <img
                className='logo-gardening'
                src={require('../images/gardening.jpg')}
                alt='gardening logo' />

            <img
                className='logo-painting'
                src={require('../images/painting.jpg')}
                alt='painting logo' /><br></br><br></br><br></br><br></br>


            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default Home;