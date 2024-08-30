import React from 'react'

function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <h1 className="heading">
                    <span>Contact</span> us
                </h1>
                <div className="row">
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d423284.5905135281!2d-118.41173249999996!3d34.020498900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants!5e0!3m2!1sen!2sus!4v1423533559165" width="600" height="450" frameborder="0" style={{ border: "0" }}></iframe>
                    <form action="">
                        <h3>get in touch</h3>
                        <div className="inputBox">
                            <span className="fa fa-user"></span>
                            <input type="text" placeholder='name' name="userName" id="" />
                        </div>
                        <div className="inputBox">
                            <span className="fa fa-envelope"></span>
                            <input type="email" placeholder='email' name="email" id="" />
                        </div>
                        <div className="inputBox">
                            <span className="fa fa-phone"></span>
                            <input type="number" placeholder='Mobile Number' name="mobile number" id="" />
                        </div>
                        <input type="submit" value="Contact Now" id="" className='btn' />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
