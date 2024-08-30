import React from 'react'
import { menu } from "../Component/Data"


function Menu() {
    return (
        <>
            <section className='menu' id='menu'>
                <h1 className="heading" >
                    our <span>menu</span>
                </h1>
                <div className="box-container">
                    {
                        menu.map((val, id) => {
                            return (
                                <div className="box" key={id}>
                                    <img src={val.img} alt="" />
                                    <h3>tasty and healty</h3>
                                    <div className='price'>
                                        $15.99 <span>20.99</span>
                                    </div>
                                    <a href="#" className="btn">add to cart</a>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Menu
