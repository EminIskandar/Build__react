import React from 'react'
import './css/style.css'

//img
import Logo from 'img/logo.png'

const Footer = () => (
        <footer className="Footer">
            <div className="Footer__content container position-relative">
                <div className="Footer__top-items d-flex ">
                    <div className="Footer__top-left">
                        <div className="Footer__top-left-items d-flex justify-content-between">
                            <div className="Footer__top-left-item">
                                <div className="Footer__logo">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="Footer__address">
                                    <h3>Head Office</h3>
                                    <p>1010 Avenue, NY, USA</p>
                                    <p>Tel : <span>009-215-5596</span></p>
                                    <p>Email : <span>info@example.com</span></p>
                                </div>
                                <div className="Footer__hours">
                                    <h3>Business Hour</h3>
                                    <p>Monday To Friday 07.00 – 16.00</p>
                                </div>
                            </div>
                            <div className="Footer__top-left-item">
                                <div className="Footer__nav-title">
                                    <h3>About Company</h3>
                                </div>
                                <nav className="Footer__links d-flex">
                                    <div className="Footer__links-group">
                                        <div className="Footer__link">
                                            <a href="/">Our Investor</a>
                                        </div>
                                        <div className="Footer__link">
                                            <a href="/">Recent Projects</a> 
                                        </div>
                                        <div className="Footer__link"> 
                                            <a href="/">Code Of Conduct</a> 
                                        </div>
                                        <div className="Footer__link">  
                                            <a href="/">Latest News</a> 
                                        </div>
                                        <div className="Footer__link">  
                                            <a href="/">Job/Career</a> 
                                        </div>
                                    </div>
                                    <div className="Footer__links-group">
                                        <div className="Footer__link">
                                            <a href="/">Service Provider</a>
                                        </div>
                                        <div className="Footer__link">
                                            <a href="/">Our Responsibility</a> 
                                        </div>
                                        <div className="Footer__link"> 
                                            <a href="/">Our Company</a> 
                                        </div>
                                        <div className="Footer__link">  
                                            <a href="/">Testimonials</a> 
                                        </div>
                                        <div className="Footer__link">  
                                            <a href="/">Contact Info</a> 
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="Footer__top-right d-flex flex-column justify-content-center align-items-center">
                        <div className="Footer__form-title">
                            <h3 className="ff-montserrat font-size-24 text-center font-weight-bold">Subscribe for latest newsletter</h3>
                        </div>
                        <form action="" className="d-flex flex-column w-100">
                            <input type="text" name="FirstName"/>
                            <input type="text" name="LastName"/>
                            <button type="button"> <span className="text-uppercase text-light font-size-12 font-weight-bold">Subscribe Now</span></button>
                        </form>
                        <div className="Footer__form-text w-100">
                            <p className="text-center ff-montserrat font-size-20 font-weight-bold">or</p>
                            <p className="text-center ff-montserrat font-size-20 font-weight-bold"> Call Us : (210) 224-8484 </p>
                        </div>
                    </div>
                </div>
                <div className="Footer__bottom-items d-flex justify-content-between">
                    <div className="Footer__bottom-item">
                        <p className="ff-open-sans font-size-16 text-light">Copyright © 2021 <span>Build Bench</span>. All Right Reserved.</p>
                    </div>
                    <div className="Footer__bottom-social d-flex">
                        <div className="Footer__social-item d-flex align-items-center justify-content-center ">
                            <i className="fa fa-facebook text-light rounded-circle d-flex align-items-center font-size-16 my-1"></i>
                        </div>
                        <div className="Footer__social-item d-flex align-items-center justify-content-center ">
                            <i className="fa fa-google-plus text-light rounded-circle d-flex align-items-center font-size-16 my-1"></i>
                        </div>
                        <div className="Footer__social-item d-flex align-items-center justify-content-center ">
                            <i className="fa fa-twitter text-light rounded-circle d-flex align-items-center font-size-16 my-1"></i>
                        </div>
                        <div className="Footer__social-item d-flex align-items-center justify-content-center ">
                            <i className="fa fa-linkedin text-light rounded-circle d-flex align-items-center font-size-16 my-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
export default Footer
