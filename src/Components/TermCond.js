import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';



const TermCond = () => {
    return (
        <div className='home-container'>
            <Header />


            <p >
                <h1 className='Term'>Terms and conditions</h1>
                <h3 className='descrip-home'>1. Services Provided</h3>
                <p className='descrip-home'>   EasyHome  offers cleaning services for residential and commercial properties as detailed in the service agreement or booking confirmation.</p>

               <h3 className='descrip-home'>2. Booking and Scheduling</h3>
                <p className='descrip-home'>All service bookings must be confirmed at least 24 hours in advance.    
                Any changes or cancellations must be made at least  8 hours prior to the scheduled service time. Failure to do so may result in a cancellation fee.</p>

                <h3 className='descrip-home' >3. Payment Terms</h3>
                <p className='descrip-home'>  Payment is due immediately upon completion of the cleaning service.
              All payments must be made in cash directly to the cleaning staff on-site at the end of the service.
                The Company does not accept checks, credit cards, or any other form of payment other than cash.</p>

                <h3 className='descrip-home'>4. Pricing</h3>
                <p className='descrip-home'>Prices for the cleaning services are based on the scope of work agreed upon and are subject to change based on the condition of the property at the time of service.
                    Additional charges may apply for services that exceed the original scope, including but not limited to, deep cleaning, removal of excessive dirt or grime, or the handling of hazardous materials.</p>
                
                <h3 className='descrip-home'>5. Service Quality and Satisfaction</h3>
                <p className='descrip-home'> The Company strives to provide high-quality cleaning services. If you are not satisfied with the service provided, please notify the Company within 45 minutes so that we can address your concerns.
                 Any claims regarding the quality of the service must be made within  45 minutes of the service completion. The Company reserves the right to inspect and address any issues.</p>

                <h3 className='descrip-home'>6. Liability</h3>
                <p className='descrip-home'> The Company is fully insured and will take all reasonable precautions to protect your property. However, the Company is not liable for any pre-existing damage or for any damage caused by the use of customer-provided cleaning products.
                 The Company is not responsible for any damage caused by the failure of any equipment or supplies provided by the customer.</p>


                </p>

            <Footer />
        </div>


    );

}
export default TermCond;