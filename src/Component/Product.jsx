import React from 'react'
import {product} from "../Component/Data"

function Product() {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
            our <span>Product</span>
        </h1>
        <div className="box-container">
            {
                product.map((val,id)=>{
                    return(
                        <>
                            <div className="box" key={id}>
                                <div className="icons">
                                <a href='#' className="fa fa-shopping-cart"></a>
                                <a href='#' className="fa fa-heart"></a>
                                <a href='#' className="fa fa-eye"></a>
                                </div>
                                <div className="image">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="content">
                                    <h3>Fresh coffee</h3>
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i class="fa fa-star-half"></i>
                                    </div>
                                    <div className="price">
                                        $15.99 <span>$20.99</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
      </section>
    </>
  )
}

export default Product
