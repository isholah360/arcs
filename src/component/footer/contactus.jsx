import React from 'react'
import './contactus.css'
function Contactus() {
  return (
    <div>

            <div className="contact-us"> 
                <p className='contact-title'>Contact Us</p>
                <div className="location">
                    <div className="holder-img">
                     <img className='holder' src="assets/older.png" alt="" />
                    </div>
                    <div className="location-content">
                        <p className='address'>Officeal Address</p>
                        <p>504 White St . Dawsonville, GA 30534 , New York</p>
                    </div>
                </div>
            </div>

            <div className="contact-emial"> 
                <div className="location">
                    <div className="holder-img">
                     <img className='holder' src="assets/email.png" alt="" />
                    </div>
                    <div className="location-content">
                        <p className='address'>Email Support</p>
                        <p>Isholah360@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="contact-phone"> 
                <div className="location">
                    <div className="holder-img">
                     <img className='holder' src="assets/tell.png" alt="" />
                    </div>
                    <div className="location-content">
                        <p className='address'>Call Us</p>
                        <p>+2348068235454</p>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Contactus
