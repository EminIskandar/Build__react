import React from 'react'
import './css/style.css'

const ContactUs = () => (
       <section className="Contact-us">
           <div className="Contact-us__content container-xl d-flex justify-content-between align-items-center h-100" >
               <div className="Contact-us__text">
                   <h3 className="text-light ff-montserrat font-size-30 font-weight-bold" >Your Trusted Construction Partner</h3>
                   <p className="text-light ff-open-sans font-size-16" >Everything should be as simple as it is, but not simpler as you</p>
               </div>
               <div className="Contact-us__btn">
                   <button type="button" className="btn btn-dark ff-roboto font-size-16">
                       Contact Us <i className="fas fa-long-arrow-alt-right"></i>
                   </button>
               </div>
           </div>
       </section>
    )
export default ContactUs
