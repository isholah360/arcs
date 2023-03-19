import React from 'react'
import './blog.css'
import { data } from './blogdata'

function Blog() {
  return (
    <>
        <div className='blog-blob'>
            <div className="the-blog-content">
                <p className='gen-news'>LATEST NEWS</p>
                <p className='our-blog'>Our Blogs</p>
            </div>

            <div className="the-blogmap">
                {data.map((el)=>(
                    <div className="each-blog">
                        <div className="blog-pix-size">
                            <img className='blog-pix' src={el.blog} alt="" />
                        </div>
                        <div className="content-bg">
                            <div className="auth-date">
                                <p>{el.author}</p>
                                <p>{el.date}</p>
                            </div>
                            <p className='blog-titles'>{el.title}</p>
                            <p className='blog-more'>{el.more}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    </>
  )
}

export default Blog
