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
                    <input type="text" id="cFirstName" className='input-client-form' required/>

                    <label >Last Name:</label>
                    <input type="text" id="cLastName" className='input-client-form' required/>

                    <label >Email:</label>
                    <input type="email" id="cEmail" className='input-client-form' required/>

                    <label >Password:</label>
                    <input type="password" id="cPassword" className='input-client-form' required/>

                    <label>Street address:</label>
                    <input type='text' id='cStreetAddress' className='input-client-form' required/>
                    <label>City:</label>
                    <input type='text' id='cCityAddress' className='input-client-form' required/>
                    <label>Province:</label>
                    <select id='cProvince' className='input-client-form' required>
                        <option ></option>
                        <option value='NL'>NL</option>
                        <option value='PE'>PE</option>
                        <option value='NS'>NS</option>
                        <option value='NB'>NB</option>
                        <option value='QC'>QC</option>
                        <option value='ON'>ON</option>
                        <option value='MB'>MB</option>
                        <option value='SK'>SK</option>
                        <option value='AB'>AB</option>
                        <option value='BC'>BC</option>
                        <option value='YT'>YT</option>
                        <option value='NT'>NT</option>
                        <option value='NU'>NU</option>
                    </select>
                    <label>Postal Code:</label>
                    <input type='text' id='cPostalCode' className='input-client-form' required/>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>



            <Footer />
        </div>
    )
};

export default SignUpClient;