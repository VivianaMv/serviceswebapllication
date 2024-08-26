import React from 'react'
import './Style.css';



const Contact = () => {
    return (
        <div className='home-container'>

            <h1>Welcome to EasyHome</h1>

            <p className='descrip-home'>Do you have a question? We are here to help you. <br></br><br></br>
                Send us an email to xxxxxx or  send us a message by filling out this form and we will contact you as soon as possible.<br></br>
                Thank you!</p>

           <form className='form'>
            <div>
                <h2>Personal information </h2>
            </div>
            <div>
                    <label>Name :</label>
                    <input type="text" id="name"/>
            </div>  
                <div>
                    <label> Last Name :</label>
                    <input type="text" id="Lastname" />
                </div>  
                <div>
                    <label> Email :</label>
                    <input type="text" id="Email" />
                </div>  
                <div>
                    <label> Address :</label>
                    <input type="text" id="Address" />
                </div>  
                <div>
                    <label> Phone Number :</label>
                    <input type="number" id="phone" />
                </div>  
                <div>
                    <label>Province :</label>
                    <input type="text" id="Province" />
                </div>  
                <div>
                    <label>Menssage :</label>
                    <textarea id='message' name='usermessage' placeholder='Write your menssage here...' />
                </div>  
               <button type='submit'> Submit </button>                  
                 
            </form>
           
          

            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default Contact;