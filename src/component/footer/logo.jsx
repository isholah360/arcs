import React, {useRef, useEffect} from 'react'
import Cursor from '../cursor/cursor'
import './logo.css'

function Logo() {
  const ref = useRef(null)

    useEffect(()=>{
  
      document.addEventListener("mousemove", (event)=>{
        const {clientX, clientY} = event;
        const mouseY = clientY - ref.current.clientHeight /2;
        const mouseX = clientX - ref.current.clientWidth /2;
        ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      })
  
    },[])
  return (
    <div>
        <div className="Foot-logo"> 
                <p className='logo-title'>LOGO</p>
                <div className="logo-display">
                    <div className="logo-holder-img">
                     <img className='fb-logo' src="assets/fb.png" alt="" />
                    </div>
                    <div className="logo-holder-img">
                     <img className='fb-logo' src="assets/in.png" alt="" />
                    </div>
                    <div className="logo-holder-img">
                     <img className='fb-logo' src="assets/tw.png" alt="" />
                    </div>
                    <div className="logo-holder-img">
                     <img className='fb-logo' src="assets/you.png" alt="" />
                    </div>
                    <Cursor/>
                </div>
            </div>
    </div>
  )
}

export default Logo
