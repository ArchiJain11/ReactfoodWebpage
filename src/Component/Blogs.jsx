import React from 'react'
import {blog} from "../Component/Data"

function Blogs() {
  return (
    <>
     <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>Blogs</span>
        </h1>
        <div className="box-container">
          {
            blog.map((val, id)=>{
              return(
              
                  <div className="box" key={id}>
                      <div className="image">
                        <img src={val.img} alt="" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                              tasty and refreshing spices
                        </a>
                        <span>By Admin / 21st May, 2022</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href="#" className='btn'>read more</a>
                      </div>
                  </div>
                
              )

            })
          }
        </div>
      </section> 
    </>
  )
}

export default Blogs
