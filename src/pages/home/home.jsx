import React, {useRef, useEffect} from 'react'
import Header from '../../component/header/header'
import './home.css'
import { About, Testimony, Gallery, How, Employee, 
  Testify, Blog, Footer, Navbar, Desc, Test} from '../../component'
import { useState } from 'react'


const Home = () => {

  const ref = useRef(null)

 





  return (
    <>
    <div>
      <div className="homes" >
        <div className="homecover"></div>
        <div className="navi">
         <div className="into">
         <Navbar/>
         </div>
        </div>
        <Header/>
        <div className="services-desc">
           <div className="main-bg">
           <Desc 
           number="01" 
           title=" Architecture"
           main="We use Architecture to bring your idea 
           into life, our Modern Architecture is a style 
           of building that emphasizes  function
           and a streamlined form over ornamentation do check us out today"/>
            <Desc 
           number="02" 
           title="Interior Design"
           main="With a unique and development 
           team and a vast experience we offer best
           quality and price in town, so don't hesitate 
           to get in touch with our company today. "/>
            <Desc 
           number="03" 
           title="3D Modeling"
           main="We choose excellent material to provide you 
           with best architectural model, we have supplies
           more a thousand architectural model for 
           global market"/>
           </div> 
        </div>
      </div>
      <div className="theabout">
          <About/>
        </div>
      <div className="thegallery">
        <Gallery/>
      </div>
      <div className="thehow">
        <How/>
      </div>
      <div className="team-employee">
        <div className="team-bg">
          
        </div>
        <div className="myemployee">
          <div className="team-bg">
              <div className="f-leg">
                <div className="corner">
                  <div className="corner seco">
                    <div className="cutter"></div>
                  </div>
                </div>
                <div className="based"></div>
              </div>
              <div className="s-leg"></div>
          </div>
         <div className="ex-employess">
           <div className="main-employess">
              <Employee/>
            </div>
         </div>
        </div>
      </div>
      <div className="main-caro">
          <div className="thecaro">
              <div className="caro-employess">
              <Test/>
              </div>
          </div>
      </div>
      <div className="cancel">
        <Testimony/>

      <div className="incor">
        <Testify/>
        </div>
     
      </div>
      <div className="home-blog">
        <Blog/>
      </div>
     <div className="home-footer">
       <Footer/>
     </div>
    </div>

      </>
  )
}

export default Home
