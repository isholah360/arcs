import React from 'react'
import './recent.css'

function Recent() {
  return (
    <div>
        <div className="contact-us"> 
                <p className='contact-title'>Recent News</p>
                <div className="location">
                    <div className="recent-holder-img">
                     <img className='holder' src="assets/blogs.jpg" alt="" />
                    </div>
                    <div className="recent-location-content">
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                        <p className='date'> 14 Jan 2022</p>
                    </div>
                </div>
            </div>

            <div className="contact-emial"> 
                  
                <div className="location">
                    <div className="recent-holder-img">
                     <img className='holder' src="assets/blog.jpg" alt="" />
                    </div>
                    <div className="recent-location-content">
                        <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
                        <p className='date'> 14 Jan 2022</p>
                    </div>
                </div>
            </div>

            <div className="contact-phone"> 
                <div className="location">
                    <div className="recent-location-content">
                       <input className='input' type="text" placeholder='Type Your Name' />
                   
                    <div className="holder-gram">
                     <img className='gram' src="assets/gram.png" alt="" />
                    </div>
                   
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Recent
