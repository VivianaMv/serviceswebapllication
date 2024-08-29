import React from 'react'
import './Style.css';
import Header from './Header';
import Footer from './Footer';



const SignUpOptions = () => {
    return (
        <div >
            <Header />

            <h1 className='About'>Joins as a client or as service provider</h1>
            <div className='SignUpOpt' >
                <h2>Cliente</h2> 
                <td><button>Sign Up here</button> </td>
            </div>   
            
            <div className='SignUpOpt'> 
                <h2>Service provider</h2>
                <td><button>Sign Up here</button></td> 
                </div>
          
            

            <Footer />
        </div>


    );

}
export default SignUpOptions;