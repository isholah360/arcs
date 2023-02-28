import React, { useState, useRef } from 'react'
import './caro.css'
import gsap from 'gsap'

const employ = [
    {   id:1,
        name:"Lewis Graham",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/kit.jpeg'},
    {   id:2,
        name:"Ishola Duro",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/lvr.jpeg'},
    {   id:3,
        name:"Anthony Stone",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/bed.jpeg'},
    {   id:4,
        name:"Daniela West",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/u.jpg'}, 
    {   id:4,
        name:"Flexer Rice",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/din.jpeg'}
    
]

function Caro() {
    const ref1 =useRef(null)
    const [next, setNext] = useState(1)

    const right = ()=>{

        setNext(next === employ.length-1 ? 0: next + 1)
        gsap.fromTo([ ref1.current], 
            { opacity:1, y:"-5rem"}, { opacity:0, y:"0rem",
          duration:2.5, delay:2.5,
          stagger:{amount:1}})
    }

  return (
    <div>
      <div className="thecarousel" >
        <div className="thepixs" >
            {employ.map((image)=>(
                <div className={next === image.id ? "exemploy-active" :"exemploy"} key={image.id} ref={ref1}>
                    <img className='exemp' src={image.url} alt={image.id} />
                </div>
            ))}
        </div>
        <button onClick={right}>move</button>
      </div>
    </div>
  )
}

export default Caro
