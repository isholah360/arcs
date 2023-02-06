import React, {useEffect, useRef, useState} from 'react'
import './header.css'
import {Images} from './images'
import gsap from 'gsap'



const Header = () => {
 const ref =useRef(null)

useEffect(()=>{
    gsap.fromTo([ ref.current], 
        { y:"5rem"}, { y:"0rem",
      duration:2.5, delay:2.5,
      stagger:{amount:1}})
})
 
  const [current, setCurrent ] = useState(1)
  const plus = ()=>{ 
    setCurrent(current === Images.length -1 ? 1 : current + 1  )
  }
  const minus = ()=>{
        setCurrent(current === 1 ? Images.length -1 : current - 1  )
  }
  return (
    <div>
        <div className="outer">
          <div className="inner">
            {Images.map( (image, index) =>(
              <div className={image.id == current ?'theimg-active': 'theimg'} key={image.id} ref={ref}>
                <img className='mainimg' src= {image.url} alt= {image.title} />
                <div className="cover">
                        <div className="control">
                            <div className="writing">
                                {image.title}
                            </div>
                        </div>
                </div>
              </div>
            ))}
          </div>
         <div className="thebuttons">
            <button className="arrow top" onClick={plus}>&#8896;</button><br />
            <button className="arrow" onClick={minus}>&#8897;</button>
         </div>
          
       
         </div>
    </div>
  )
}

export default Header
