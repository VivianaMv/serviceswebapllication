import React from 'react'
import './Style.css';



const Services = () => {
    return (
        <div className='home-container'>


            <h2 className='descrip-home'>Our Services</h2>

            <div className='Cleaning'>
                <img
                    className='logo-cleaning2'
                    src={require('../images/house-cleaning.jpg')}
                    alt='cleaning logo' />
                <div className='CleaningDescrip'>
                    <p > Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task.</p>

                    <p >* Cost of service per hour $21 dollars including taxes.</p>
                    <p >* Cost of service per hour + cleaning products $26 dollars including taxes.</p>
                    <p > *Cash payment method once the service is finished.</p>
                </div>
            </div>
            <div>
                <img
                    className='logo-gardening'
                    src={require('../images/gardening.jpg')}
                    alt='gardening logo' />
            </div>
            <div>
                <img
                    className='logo-painting'
                    src={require('../images/painting.jpg')}
                    alt='painting logo' /><br></br><br></br><br></br><br></br>

            </div>
            <p> Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task.</p>

            <p>* Cost of service per hour $21 dollars including taxes.</p>
            <p>* Cost of service per hour + cleaning products $26 dollars including taxes.</p>
            <p>*Cash payment method once the service is finished.</p>
            <div>


            </div>
            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default Services;