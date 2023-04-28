import React from 'react'
import './about.css'
function About() {
  return (
    <div className='abouts'>
      <div className="complete-about">
         <div className="about-details">
            <div className="line-about">
                <hr />
                <p className='the-about'>About Us</p>
            </div>
            <p className='about-title'>Best Designers Architectures for You. </p>
            <p className='real-details'>Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi. </p>
            <div className="about-menu">
                <ul>
                    <li>ARCHITECTURE <span>|</span></li>
                    <li>INTERIOR DESIGN <span>|</span></li>
                    <li>FURNITURE</li>
                </ul>
            </div>
            <button>READ MORE</button>
         </div>
         <div className="about-pixs">
            <div className="top-pix">
                <img className='pix1' src="assets/li.jpeg" alt="" />
                <img  className='pix2' src="assets/bed.jpeg" alt="" />
            </div>
            <div className="botom-pix">
            <img className='pix1 pick' src="assets/din.jpeg" alt="" />
            <div className="year-deco">
              <div className="thecut"></div>
              <div className="circular"></div>
              <div className="theyear">
                <p className='year-number'>27</p>
                <p className='the-exp'>Years of Experience</p>
              </div>
            </div>
                

            </div>
         </div>
      </div>
    </div>
  )
}

export default About
