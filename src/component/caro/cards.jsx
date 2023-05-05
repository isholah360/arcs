import React, { Component } from "react";
import Slider from "react-slick";
import { data } from "./card";
import './caro.css'
import "./rousel.css"; 
import "./theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <button className="right" onClick={onClick}>
    right
 </button>
  );
}

function SamplePrevArrow({ onClick } ) {
 
  return (
   <button className="left" onClick={onClick}>
      left
   </button>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
     <>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          {/* <div className="mycard">
            <h3>1</h3>
          </div>
          <div  className="mycard">
            <h3>2</h3>
          </div>
          <div  className="mycard">
            <h3>3</h3>
          </div>
          <div  className="mycard">
            <h3>4</h3>
          </div> */}
         
        </Slider>
        </>
    
    );
  }
}