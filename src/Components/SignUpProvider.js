import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';

const SignUpProvider = () => {

    return (
        <div className='sign-up-pages'>
            <Header />

            <h2 className='client-title'>Sign Up to get hired to work</h2>

            <div className='form-container'>
                <form className='client-form'>
                    <label >Storefront Name:</label>
                    <input type="text" id="pStoreName" className='input-client-form' required />

                    <label >Email:</label>
                    <input type="email" id="pEmail" className='input-client-form' required />

                    <label >Password:</label>
                    <input type="password" id="cPassword" className='input-client-form' required />


                    <label>Services:</label>
                    <div>
                        <div>
                            <input type="checkbox" id="services" name="painting" value="Painting" />
                            <label for="paniting">Painting</label>
                        </div>
                        <div>
                            <input type="checkbox" id="services" name="cleaning" value="Cleaning" />
                            <label for="cleaning">Cleaning</label>
                        </div>
                        <div>
                            <input type="checkbox" id="services" name="gardening" value="Gardening" />
                            <label for="gardening">Gardening</label>
                        </div>
                    </div>


                    <button type='submit'>Submit</button>
                </form>
            </div>

            <Footer />
        </div>
    )
};

export default SignUpProvider;