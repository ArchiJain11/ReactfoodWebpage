import React from 'react'
import {review} from "../Component/Data"
import quotes from "../../image/review.png";
function Review() {
  return (
    <>
    <section className="review" id="review">
        <h1 className="heading">
            customer's <span>review</span>    
        </h1>  
        <div className="box-container">
            {
                review.map((val,id)=>{
                    return(
                            <div className="box" key={id}>
                                    <img src={quotes} alt="" />                                
                                    <div className="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                                    <img src={val.img} alt="" className='user'/>
                                    <h3>John deo</h3>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i class="fa fa-star-half"></i>
                                    </div>
                                </div>
                                <div>
                                    
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

export default Review
