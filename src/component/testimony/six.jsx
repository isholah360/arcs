import React from 'react'
import { useRef, useEffect, useState  } from 'react'
import './testimony.css'
import { data } from './data'
import gsap from 'gsap'



function Six() {
const ref = useRef(null)
const ref2 = useRef(null)



    const [next, setNext] = useState(1)

    const righti = ()=>{
        setNext( next === data.length - 1 ? 1 : next + 1 )
        gsap.fromTo([ref2.current ], 
            { opacity:0, x:"2rem", }, { opacity:1, x:"0rem", 
          duration:2, delay:.2,
          stagger:{amount:.7}})
    }
    const lefti = ()=>{
        setNext( next === 1 ? data.length - 1 : next - 1 )
        gsap.fromTo([ref2.current ], 
            { opacity:0, x:"2rem", }, { opacity:1, x:"0rem", 
          duration:2, delay:.2,
          stagger:{amount:.7}})
    }

    useEffect(()=>{
        setTimeout(() => {
            righti();
        }, 7000);
    })
  return (
    <>
    {/* <div>
      <div className={next === "one" ? "active": "twokeys"} ref={ref}>
        <div className="okeys one">a</div>
        <div className="okeys two">b</div>
        <div className="okeys three">c</div>
        <div className="okeys four">d</div>
        <div className="okeys five">e</div>
      </div>
    </div> */}
    <div className="live-test" ref={ref2}>
      <div className="inner-libes">
      {data.map((el, index)=>(
        <div className={next === el.id ? "active": "twokey"}>
          <div className="lefty">
                <div className="test-content">
                    {el.url}
                </div>
                <div className="person">
                    <img className='per' src={el.per} alt="" />
                    <div className="per-name">{el.name}</div>
                </div>
          </div>
          <div className="righty">
                <div className="test-content">
                    {el.urls}
                </div>
                <div className="person">
                    <img className='per' src={el.pers} alt="" />
                    <div className="per-name">{el.names}</div>
                </div>
          </div> 
        </div>
       ))}
      </div>
    </div>
       <div className="change-button">
        <button onClick={lefti}> &#8810; </button>
            <button className='de-right' onClick={righti} >&#8811;</button>
       </div>
    </>
  )
}

export default Six
