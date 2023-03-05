import React, { useState } from 'react'
import './employee.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Test from '../caro/test';

const employ = [
    {   id:1,
        name:"Lewis Graham",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'assets/kit.jpeg'},
    {   id:2,
        name:"Ishola Duro",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'assets/lvr.jpeg'},
    {   id:3,
        name:"Anthony Stone",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'assets/bed.jpeg'},
    {   id:4,
        name:"Daniela West",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'/assets/u.jpg'}, 
    {   id:4,
        name:"Flexer Rice",
        fb:"assets/fb.png", gh:"assets/gh.png",
        tw:"assets/tw.png", lk:"assets/lkn.png",
        url:'assets/din.jpeg'}
    
]

function Employee() {
  const [next, setNext] = useState(2)

    const right = ()=>{
       setNext(next === employ.length-1 ? 1 : next + 1)
    }
    const left = ()=>{
        setNext(next === 0 ? employ.length - 1 : next - 1)
    }

   
    
  return (
    <div>

      <div className="employ-bg">
            <div className="some-content">
                <p className='thought'>Some Thought From us</p>
                <p className='ouremploy'>Our Employees</p>
                <p className='wefeel'>We feel proud for our expert team members beatae ipsum dolor sit amet, consectetur adipisicing elit mauris vitae consequat nibh, vitae interdum mi. </p>
        </div>
        <div className="some-team"></div>
           <div className="team-member">
           
           </div>
        </div>
    </div>
  )
}

export default Employee
