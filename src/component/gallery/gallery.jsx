import React, { useState,  useRef } from 'react'
import './gallery.css'

const galleries = [
    {   id:1,
        url:'assets/15599.jpg'},
    {   id:2,
        url:'assets/int2.jpeg'},
    {   id:3,
        url:'assets/int6.jpeg'},
    {   id:4,
        url:'assets/int5.jpeg'}
]

const Gallery = () => {
 const [display, setDisplay] = useState(1)
 const show = useRef(null)

 const ones = ()=>{
    setDisplay(1)
    
 }
 const twos = ()=>{
    setDisplay(2)
 }
 const threes = ()=>{
    setDisplay(3)
 }
 const fours = ()=>{
    setDisplay(4)
 }

  return (
    <div className='comp-gallery'>
      <div className="mygallery">
         {galleries.map((image)=>(
            <div className={image.id == display ? "eachimg-active" : "eachimg"} key={image.id}>
                <img className='displayimg' src={image.url} alt={image.id}/>
            </div>
         ))}
        <div className="divider">
            <div className="ind one" onMouseEnter={ones}>
                <div className="ind-content" >
                    <div className='title'>Exterior</div>
                    <div className='main'>Exterior Designs</div>
                    <div className="view">VIEW PROJECT <span className='makeit'>&#x3e;</span></div>
                </div>
                <p></p>
            </div>
            <div className="ind two" onMouseEnter={twos}>
                <div className="ind-content">
                    <div className='title'>Exterior</div>
                    <div className='main'>Modern Minimalistc House</div>
                    <div className="view">VIEW PROJECT <span className='makeit'>&#x3e;</span></div>
                </div>
                <p></p>
            </div>
            <div className="ind three" onMouseEnter={threes}>
                <div className="ind-content" onMouseEnter={threes}>
                    <div className='title'>Interior</div>
                    <div className='main'>Apartment Renovation</div>
                    <div className="view">VIEW PROJECT <span className='makeit'>&#x3e;</span></div>
                </div>
                 <p></p>
            </div>
            <div className="ind four" onMouseEnter={fours}>
                <div className="ind-content" >
                    <div className='title'>Interior</div>
                    <div className='main'>Contemporary Designs</div>
                    <div className="view">VIEW PROJECT <span className='makeit'>&#x3e;</span></div>
                </div>
                <p></p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Gallery
