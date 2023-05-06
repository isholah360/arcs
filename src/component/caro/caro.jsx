import React, { useState, useRef, } from 'react'
import './caro.css'
// import {data} from './card'
// import gsap from 'gsap'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomArrows from './cards';
import { data } from './card';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


function Caro() {

    const settings = {
      autoplay: true,
      infinite: true,
      centerPadding: "1rem",
      slidesToShow: 1,
      speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  return (
    <div>
    
      <div className='mobile-testy'>
        
       <Slider {...settings}>

        <div className="my-testy">
        The wrong URLs are being used being used 
        because it is incorrect in your HTML. 
        The two script tags look like this:
        </div>
        <div className="my-testy">Capitalize on 
        low hanging fruit to identify a ballpark 
        value added activity to beta test. 
        Override the digital divide with
         additional clickthroughs from DevOps. 
        </div>
        <div className="my-testy">
        Capitalize on low hanging fruit to identify 
        a ballpark value added activity to beta test.
         Override the digital divide with additional 
         clickthroughs from DevOps. Nano data tech 
         immersion along the information highway. 
         Love the support of Architek peoples 
         override.
        </div>
         
        </Slider>
      </div>

     <CustomArrows/>
    </div>
  )
}

export default Caro
