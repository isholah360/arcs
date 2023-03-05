import React from 'react'
import { useState } from 'react'
import Six from './six'
import './testimony.css'

const testData = [
   {id: 1,
    url:"assets/bed.jpeg"},
   {id: 2},
   {id: 3},
   {id: 4},
   {id: 5},
   {id: 6},
   {id: 7},
  
]

const Testimony = () => {

    const [next, setNext] = useState(1)

  return (
    <div>
      <div className="test-body">
        <p className="test-title">TESTIMONIALS</p>
        <p className="test-what">What People Says?</p>
      </div>
      <div className="main-testimony">
            <div className="the-testimg">
                {testData.map((el)=>(
                    <div className="test-data"  key={el.id}>
                        <div className="test-box">
                        </div>
                    </div>
                ))}
            </div>
            <div className="sixty">
                <Six/>
            </div>
      </div>
    </div>
  )
}

export default Testimony
