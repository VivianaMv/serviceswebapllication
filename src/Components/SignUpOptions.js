import React from 'react'
import './Style.css';



const SignUpOptions = () => {
    return (
        <div >

            <h1 className='About'>Joins as a client or as service provider</h1>
            <div className='SignUpOpt' >
                <h2>Cliente</h2> 
                <td><button>Sign Up here</button> </td>
            </div>   
            
            <div className='SignUpOpt'> 
                <h2>Service provider</h2>
                <td><button>Sign Up here</button></td> 
                </div>
          

            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default SignUpOptions;