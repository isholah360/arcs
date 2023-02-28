import React, {useEffect, useRef, useState} from 'react'
// import './header.css'
import './contact.css'
import {Images} from './images'
import gsap from 'gsap'




const Header = () => {

  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
 
  
  const [currentz, setCurrentz] = useState(1)
  const [autoPlay, setAutoPlay] = useState(null)

  useEffect(()=>{
    setTimeout(()=>{
      plus();
    }, 8000)

    gsap.fromTo([ref4.current, ref3.current ], 
      { opacity:0, y:"-15rem", }, { opacity:1, y:"-7rem", 
    duration:1, delay:.4,
    stagger:{amount:.7}})

  })

  const plus = ()=>{
    gsap.fromTo([ref.current ], 
      { opacity:0, height:"0%", }, { opacity:1, height:"100%", 
    duration:1,
    stagger:{amount:10}})
   
    setCurrentz( currentz === Images.length -1 ? 1 : currentz + 1  )
  
  }
  const minus = ()=>{
    gsap.fromTo([ref.current], 
      { opacity:0, height:"0%", }, { opacity:1, height:"100%", 
    duration:1, 
    stagger:{amount:10}})
    
    setCurrentz( currentz === 0 ? Images.length -1 : currentz - 1  )
  
  }

  return (
    <div> 
      <div className="outer">
            <div className="cont-display">
              <div className="contents dif" ref={ref3} >
              <div className="linez">
              <hr className='hori' />
              <hr className='vert'/>
              </div>
              {Images.map((image)=>(
                <div className={image.id == currentz ? "the-active":"round"}  key={image.id}>
                   <div className="title-animate" >
                    <p className='classic' >{image.design}</p>
                  </div>
                 </div> 
              ))}
            </div>
            <div className="contents" ref={ref4} >
              {Images.map((image)=>(
                <div className={image.id == currentz ? "the-active":"round"}  key={image.id}>
                   <div className="titleanimate" >
                    <p className='title'>{image.title} </p>
                    <p className='designdetail'>{image.agency}</p>
                  </div>
                 </div> 
              ))}
            </div>
            </div>
        <div className="theouter">
            <div className="theinner" ref={ref}>
           
           
            <div className="imginer">
                  {Images.map((image, index)=>(
                    <div className={image.id == currentz ? "the-active":"round"}  key={image.id}>
                     <img className='theimge' src={image.url} alt={image.index} />
                     <div className="covert" >

                            <div className="control" ref={ref2}>
                                <div className="outline">
                                        <div className="writing">
                                            <button >DISCOVER WORK</button>
                                            <div className="theid">
                                          {image.id}
                                          </div>
                                        </div>
                                     <div className="lines">
                                        <hr className='hori' />
                                        <hr className='vert'/>
                                     </div>
                                </div>
                            </div>

                     </div>
                    </div>
                    
                  ))}
                  
            </div>
           
              
            </div>
           
        </div>
          <div className="thebuttons">
            <div className="count">,4</div>
            <button className="arrow top" onClick={plus}>&#8896;</button><br />
            <button className="arrow" onClick={minus}>&#8897;</button>

           </div>
           
     </div>
       
    </div>
  )
}

export default Header
