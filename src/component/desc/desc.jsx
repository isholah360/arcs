import React from 'react'
import './desc.css'

const Desc = (
   { number, title, main}
) => {
  return (
    <div>
     <div className="serv-desc">

        <div className="num-title">
            <p className='number'>{number}</p>
            <hr className='btw' />
            <p className='tittle'>{title}</p>
           
        </div>
        <div className="main-descript">
            {main}
        </div>
     </div>
      
    </div>
  )
}

export default Desc
