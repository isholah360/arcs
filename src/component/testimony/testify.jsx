import React from "react";
import './testify.css'
import Slider from "react-slick";
import './slick/slick.css'
import './slick/slick-theme.css'
import { data } from "./data";

function SampleNextArrow({onClick}) {
  
  return (
    <>
  <div className="rev-buttons" onClick={onClick}>
   <button className="pluz">&#8810;</button>
  </div>
   
  </>
  );
}

function SamplePrevArrow({onClick}) {
 
  return (
  <>
  <div className="rev-buttons" onClick={onClick}>
   <button className="minuz">&#8811;</button>
  </div>
   
  </>
  );
}


function Testify() {

    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerPadding: "1rem",
        slidesToShow: 2,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
      };

  return (
    <div className="the-outer">

      <div className="group">
        <Slider {...settings}>
        {data.map((el)=>(
            <div className="testify">
               
             <div className="review">

                  <div className="quote">
                    <img className="real-quote"  src="assets/left.png" alt="" />
                  </div>
                 
                {el.url}  
              </div> 
             <div className="name-pixel">
                <div className="review-pix">
                  <img className="rev-pix" src={el.per} alt="" />
                </div>
                <div className="review-name">
                  <p>{el.name}</p>
                  <p className="rank">{el.name}</p>
                </div>
             </div>
            </div>
            
        ))}
        </Slider>

      </div>

      <div className="companies">

        <img className="comp-width" src="assets/com.png" alt="" />
        <img className="comp-width" src="assets/comp.png" alt="" />
        <img className="comp-width" src="assets/comp1.png" alt="" />
        <img className="comp-width" src="assets/comp.png" alt="" />
        <img className="comp-width" src="assets/comp2.png" alt="" />

      </div>
      
    </div>
  )
}

export default Testify
