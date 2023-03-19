import React, {useRef, useEffect} from 'react'
import Contactus from './contactus'
import Recent from './recent'
import './footer.css'
import Logo from './logo'

function Footer() {
  const ref = useRef(null)
  const ref2 = useRef(null)

const enter= ()=>{
  ref.current.style.scale='1.5rem'
}

  useEffect(()=>{

    document.addEventListener("mousemove", (event)=>{
      const {clientX, clientY} = event;
      const mouseY = clientY - ref.current.clientHeight /2;
      const mouseX = clientX - ref.current.clientWidth /2;
      ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    })

  },[])
  return (
    <>
        <div className='home-footer-bg' ref={ref2} onMouseEnter={enter}>

         <Contactus/>
         <Recent/>
         <Logo/>
        
        </div>
    
    </>
  )
}

export default Footer
