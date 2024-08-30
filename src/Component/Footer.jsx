import React from 'react'

function Footer() {
    return (
        <>
            <section className="footer" id="footer">
                <div className="box-container">
                    <div className="icons">
                        <a href='#' className="fa fa-facebook"></a>
                        <a href='#' className="fa fa-twitter"></a>
                        <a href='#' className="fa fa-instagram"></a>
                        <a href='#' className="fa fa-linkedin"></a>
                        <a href='#' className="fa fa-pinterest"></a>
                    </div>
                    <div className="links">
                        <a href="#home">home</a>
                        <a href="#about">About</a>
                        <a href="#menu">Menu</a>
                        <a href="#products">Products</a>
                        <a href="#review">Review</a>
                        <a href="#contact">Contact</a>
                        <a href="#blogs">Blogs</a>
                    </div>
                    <div className="footEnd">
                        created by <span>ARCHI'es</span> | all rights reserved
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer
