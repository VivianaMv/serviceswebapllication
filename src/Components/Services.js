import React from 'react'
import './Style.css';



const Services = () => {
    return (
        <div className='home-container'>


            <h2 className='descrip-home'>Our Services</h2>

            <div >
                <table  >
                    <tr className='Cleaning'>
                       
                    </tr>
                    <tr>
                        <td> <img
                            className='logo-cleaning2'
                            src={require('../images/house-cleaning.jpg')}
                            alt='cleaning logo' /></td>
                        <td className='Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>
                        
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br>
                            <button className='btnBook'>Book services</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                      
                    </tr> 
                    <tr>   
                        <td> <img
                            className='logo-gardening2'
                            src={require('../images/gardening.jpg')}
                            alt='gardening logo' /></td>

                        <td className='Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>

                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br>
                            <button className='btnBook'>Book services</button>
                        </td>
                    </tr>    

                </table>

            </div>
            <div>
                <table>
                    <tr>
                        <td> <img
                            className='logo-gardening2'
                            src={require('../images/painting.jpg')}
                            alt='gardening logo' /></td>

                        <td className='Description'>Home cleaning service: We help you keep every space in your house looking new. We have qualified equipment and we use quality, environmentally friendly products. We respect your spaces and privacy, so we carefully follow your comments and/or instructions regarding care and details that you consider we should focus on in each task. <br></br><br></br>

                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            * Cost of service per hour $21 dollars including taxes. <br></br>
                            *Cash payment method once the service is finished. <br></br>
                            <button className='btnBook'>Book services</button>
                        </td>
                    </tr> 
                </table>
            </div>

            <a className='Privacy' href='Privacy.js'>Privacy</a>

            <a className='Privacy' href='TermCon.js' target='_blanck'>Terms and conditions</a>

        </div>


    );

}
export default Services;