import React from 'react'
import './Style.css';
import Header from './Header';



const Contact = () => {
    return (
        <div className='home-container'>

            <Header />

            <h1 className='Welcome'>Welcome to EasyHome</h1>

            <p className='descrip-home'>Do you have a question? We are here to help you. <br></br><br></br>
                Send us a message by filling out this form and we will contact you as soon as possible.<br></br>
                Thank you!</p>

           <form className='form'>
            <div>
                    <h2 className='Welcome' >Personal information </h2>
            </div>
            <div>
                    <label for>Name :</label>
                    <input type="text" id="name" /><br></br><br></br>
                    <label> Last Name :</label>
                    <input type="text" id="Lastname" /><br></br><br></br>
            </div>  
               
                <div>
                    <label> Email :</label>
                    <input type="text" id="Email" /><br></br><br></br>
                    <label> Address :</label>
                    <input type="text" id="Address" /><br></br><br></br>
                </div>  
                <div>
                  
                </div>  
               
                <div>
                    <label>Province :</label>
                    <input type="text" id="Province" /><br></br><br></br>
                </div>  <br></br><br></br>
                <div>
                    <label>Menssage :</label>
                    <textarea id='message' name='usermessage' placeholder='Write your menssage here...' />
                </div> <br></br><br></br>
               <button type='submit'> Submit </button>                  
                 
            </form>
           
          

            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default Contact;