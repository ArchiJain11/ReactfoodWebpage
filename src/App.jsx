import React from 'react'
import "./App.css";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Menu from './Component/Menu';
import Product from './Component/Product';
import Review from './Component/Review';
import Contact from './Component/Contact';
import Blogs from './Component/Blogs';
import Footer from './Component/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blogs/>
      <Footer/> 
      {/* this is all the COmponent */}
      
    </>
  )
}

export default App
