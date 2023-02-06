import React, { useEffect, useRef } from 'react'
import Header from '../../component/header/header'
import './home.css'
import gsap from 'gsap'


const Home = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  useEffect (()=>{
    gsap.fromTo([ ref.current, ref2.current, 
    ref3.current, ref4.current], 
    { opacity:0, y:"-5rem"}, { opacity:1, y:"0rem",
  duration:2.5, delay:2.5,
  stagger:{amount:1}})
  })



  return (
    <div>
      <div className="homes">
        <Header/>
      </div>
        <div className="mytest">
           <div className="root" ref={ref}>1</div>
           <div className="root" ref={ref2}>2</div>
           <div className="root" ref={ref3}>3</div>
           <div className="root" ref={ref4}>4</div>
        </div>
    </div>
  )
}

export default Home
