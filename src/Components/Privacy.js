import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';



const Privacy = () => {
    return (
        <div className='home-container'>
           
            <Header />
            
          
            <h1 className='Privacy'>Privacy</h1>
                <p className='descrip-home'>
                    All personal information collected by EasyHome  is authorized under legislation of Canada and is done in compliance with the *Privacy Act. This means that you will be informed when your personal information may be required, the purpose for which it is collected, and how to exercise your right of access to that information.</p>
                <p className='descrip-home'>*Privacy Act S.C., 1985, c. P-21</p>
                <p className='descrip-home'>An Act to extend the present laws of Canada that protect the privacy of individuals and that provide individuals with a right of access to personal information about themselves.</p>

            <Footer />
        </div>


    );

}
export default Privacy;