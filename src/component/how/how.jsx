import React from 'react'
import './how.css'
export const theme = [
    {id:"01",
    url: "assets/ex.jpg",
    concept:"Architecture",
    main:"Nulla metus metus ullamcorper vel tincidunt sed euismod."},
    {id:"02",
    url: "assets/bed2.jpeg", 
    concept:"3D Animation",
    main:"Nulla metus metus ullamcorper vel tincidunt sed euismod."},
    {id:"03",
    url: "assets/lvr.jpeg",
    concept:"Construction",
    main:"Nulla metus metus ullamcorper vel tincidunt sed euismod."},
    {id:"04",
    url: "assets/din.jpeg",
    concept:"Planning",
    main:"Nulla metus metus ullamcorper vel tincidunt sed euismod."},
]


function How() {
  return (
    <div>
      <div className="howitwork-complete">
        <div className="howcover"></div>
        <div className="howit">
            <p className='thehow'>HOW WE DO IT</p>
            <p className='thework'>Work Process</p>
        </div>
        <div className="concepts">
            {theme.map((image)=>(
                <div className="myconcept" key={image.id}>
                     <div className="covering"  key={image.id}></div>
                      <img className='main-concept' src={image.url} alt={image.id} />
                       <div className="contents-concept">
                          <p className='con-title'>{image.concept}</p>
                          <p className='con-body'>{image.main}</p>
                       </div>
                       <div className="numberz" key={image.id}>
                       {image.id}
                       </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default How
