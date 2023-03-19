import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import './navbar.css'
import gsap from 'gsap'

const Navbar = () => {
  const ref = useRef(null)
  const [navbar, setNavbar] = useState(false)

 useEffect(()=>{
  window.addEventListener("scroll", ()=>{
    if(window.scrollY >= "200" ){
      setNavbar(true)
      gsap.fromTo([ref.current], { y:"-5rem", position:'none'}, {
        y:'0rem', duration: 1, 
      })
    }
    else if(window.scrollY >= "210"){
      gsap.fromTo([ref.current], { y:"0rem", position:'none'}, {
        y:'-1rem',
      })
    }
    else{ setNavbar(false)
    }
  })
 }, [scrollY])
  return (
    <div>
      <div className={navbar? "navbar active" : "navbar"} ref={ref}>
        <div className="logo">
            LOGO
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
