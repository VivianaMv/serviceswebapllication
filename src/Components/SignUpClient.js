import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';

const SignUpClient = () => {
    return (
        <div className='sign-up-pages'>
            <Header />

            <h2 className='client-title'>Sign Up to Hire Services</h2>

            <div className='form-container'>
                <form className='client-form'>
                    <label >First Name:</label>
                    <input type="text" id="cFirstName" className='input-client-form'/>

                    <label >Last Name:</label>
                    <input type="text" id="cLastName" className='input-client-form'/>

                    <label >Email:</label>
                    <input type="email" id="cEmail" className='input-client-form'/>

                    <label >Password:</label>
                    <input type="password" id="cPassword" className='input-client-form'/>

                    <label>Address:</label>
                    <textarea id='cAddress' className='input-client-form'/>
                </form>
            </div>



            <Footer />
        </div>
    )
};

export default SignUpClient;