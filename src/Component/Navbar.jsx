import React, { useRef } from 'react'
import Logo from "../../image/logo.bbdaaa34654aff804cc3.png";
import {cart} from '../Component/Data'
const Navbar = () => {
    const searchRef = useRef();
    const cardRef = useRef();
    const navbarRef = useRef();

    const searchHandler = () =>{
        searchRef.current.classList.toggle("active");
        cardRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    }
    const cartHandler = () =>{
        cardRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    }
    const navbarHandler = () =>{
        navbarRef.current.classList.toggle("active");
        cardRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    }
  return (
    <>
      <header className="header">
        <a href="#" className='logo'>
            <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
            <a href="#home">home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#products">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
        <i className="fa fa-search" onClick={searchHandler}></i>
        <i className="fa fa-shopping-cart" onClick={cartHandler}></i>
        <i className="fa fa-bars" id='menu-btn' onClick={navbarHandler}></i>
        </div>

        <div className='search-form' ref={searchRef}>
            <input type="search" placeholder='Search here...'  name="" id="search-box" />
            <label htmlFor="search-box" className="fa fa-search"></label>
        </div>
        <div className='cart-items-container' ref={cardRef}>
        {cart.map((val,id)=>{
                return (
                    <div className='cart-item' key={id}>
                        <span className='fa fa-times'></span>
                        <img src={val.img} alt="" />
                        <div className="content">
                            <h3>cart item 01</h3>
                            <div className='price'>$15.99/-</div>
                        </div>
                    </div>
                )})}
        <a className='btn' href="#"><span>Checkout Now</span></a>
        </div>

      </header>
    </>
  )
}

export default Navbar
