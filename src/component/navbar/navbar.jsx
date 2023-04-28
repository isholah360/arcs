import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import './navbar.css'
import gsap from 'gsap'
import { Fragment } from 'react'

const Navbar = () => {
  const ref = useRef(null)
  const list = useRef(null)
  const [navbar, setNavbar] = useState(false)
  const [show, setShow] = useState(false)

  const far = ()=>{
        setShow(!show)   
  }
  useEffect(()=>{
    if(show === true){
      list.current.style.display='block'
      gsap.fromTo([list.current], { y:"-5rem", position:'none'}, {
        y:'0rem', duration: 1, 
      })

    }
    else{ 
    gsap.fromTo([list.current], { y:"0rem", position:'none'}, {
      y:'-20rem', duration: 2, 
    })}
  }, [show])


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
   <>
    <div className='complete-nav'>
      <div className={navbar? "navbar active" : "navbar"} ref={ref}>
        <div className="logo">
            LOGO
        </div>
          <div className={show ? "lists": "lists"} ref={list}>
              <ul>
                  <li classname='first'>Home</li>
                  <li>About</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
              </ul>
          </div>
       <div className="farbars" onClick={far}>
         <p></p>
         <p></p>
         <p></p>
       </div>
      </div>
    </div>
   </>
  )
}

export default Navbar
