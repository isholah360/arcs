import React, {useState} from 'react'
import { data } from './card'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './caro.css'
import { useEffect } from 'react';

function SampleNextArrow({ onClick }) {
    return (
    <div className="combine">
          <button className="right" onClick={onClick}>
             <span className='arow-one'>&#8810;</span>
        </button>
    </div>
    );
  }
 
  function SamplePrevArrow({ onClick } ) {
   
    return (
      <div className="combine">
         <button className="left" onClick={onClick}>
        <span className='arow-two'>&#8811;</span>
     </button>
    </div>
    );
  }
  let num = 1
   
  let change =()=>{
    num ++
  }

  setTimeout(() => {
    change();
  }, 500);


function Test() {

    const [next, setNext] = useState(
        change
    )
 
    
    const plus = () =>{
        setNext(data.lenght -1 ? 1 : next + 1)
    }
    // useEffect(()=>{
    //     setTimeout(() => {
    //        plus();
    //     }, 3500);
    //   })
    
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 3,
          autoplaySpeed: 3000,
          autoplay: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,

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
       };
      
    
    
  return (
    <div>
    
   <div className="themark">

   <Slider {...settings}>
        {data.map((el)=>(
            <div className="testy" key={el.id}>
                <div className="delvier">
                     <img className='dimg' src={el.url} alt={el.id} />
                     <div className={next === el.id ? "scrcover-active":"scrcover"}>
                            <div className="social-media">
                                <p className='media-xs'><img className='media-pix' src={el.fb} alt={el.id} /></p>
                                <p className='media-xs'><img className='media-pix' src={el.tw} alt={el.id} /></p>
                                <p className='media-xs'><img className='media-pix' src={el.lk} alt={el.id} /></p>
                                <p className='media-xs'><img className='media-pix' src={el.gh} alt={el.id} /></p>
                            </div>
                            <p className='team-name'> {el.name} </p>
                  
                     </div>
                </div>
              
             </div>
        ))}
    </Slider>
   </div>

    </div>
  )
}

export default Test
