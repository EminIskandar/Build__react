import React from 'react'
import './css/style.css'

//img
import pdf_icon1 from 'img/icon/service13.png'
import pdf_icon2 from 'img/icon/service14.png'
import img from 'img/news/news4.jpg'
import icon1 from 'img/icon/service15.png'
import icon2 from 'img/icon/service16.png'
import icon3 from 'img/icon/service17.png'
import icon4 from 'img/icon/service1.png'

const Building = () => (
        <section className="Building">
            <div className="Building__content container-xl d-flex justify-content-between">
                <div className="Building__left-side">
                    <div className="Building__sections">
                        <div className="Building__sections-items">
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Consultant</h4>
                            </div>
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Architecture</h4>
                            </div>
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Crane Service</h4>
                            </div>
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Land Minning</h4>
                            </div>
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Material Supply</h4>
                            </div>
                            <div className="Building__sections-item">
                                <h4 className="ff-open-sans font-size-16 ">Building Staffs</h4>
                            </div>
                        </div>
                    </div>
                    <div className="Building__btn">
                        <div className="Building__btn-item">
                            <div className="Building__btn-icon">
                                <img src={pdf_icon1} alt="" />
                            </div>
                            <a href="/">Download our company Broucher</a>
                        </div>
                        <div className="Building__btn-item">
                            <div className="Building__btn-icon">
                                <img src={pdf_icon2} alt="" />
                            </div>
                            <a href="/">Download project costing details</a>
                        </div>
                    </div>
                    <div className="Building__adress">
                        <div className="Building__adress-text">
                            <h2 className="font-size-24 ff-montserrat font-weight-bold">Visit our office</h2>
                            <h4 className="font-size-16 ff-open-sans  font-weight-bold">Address</h4>
                            <p className="font-size-16 ff-open-sans ">75 Tower Court</p>
                            <p className="font-size-16 ff-open-sans ">Kernersville, NC 27284</p>
                            <p className="font-size-16 ff-open-sans ">PO Box 6658</p>
                            <p className="font-size-16 ff-open-sans ">Rockhild SDT 2505</p>
                        </div>
                        <div className="Building__adress-btn">
                            <button type="button"> Get Appointment</button>
                        </div> 
                    </div>
                </div>
                <div className="Building__right-side">
                     <h2>Building Staffs</h2>
                     <p>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver the places that respond too the complex global forces shaping our future including the rapid urbanisation, climate and change, inequality and resource stress.</p>
                     <img src={img} alt="" /> 
                     <p>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver the places that respond too the complex global forces shaping our future including the rapid urbanisation, climate and change, inequality and resource stress.</p>
                    <ul className="Building__list">
                        <li>
                            <h3>Project Management:</h3>
                            <p>We have a long and proud history givin emphs to environment social and economic outcomes to deliver the place that respond</p>
                        </li>
                        <li>
                            <h3>Solutions</h3>
                            <p>We have a long and proud history givin emphs to environment social and economic outcomes to deliver the place that respond</p>
                        </li>
                    </ul>
                    <h3>The Benefits</h3>
                    <p>We have a long and proud history givin emphasis to environment social and economic outcomes rapid urbanisation, climate and change, inequality and resource stress.</p>
                    <ul className="Building__benefist">
                        <li>
                            <div className="Building__icon">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="Building__benefits-text">
                                <h3>Sustainability</h3>
                                <p>Benefit of the socials where we oper ate success for the websit them to reduce cost</p>
                            </div>
                        </li>
                        <li>
                            <div className="Building__icon">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="Building__benefits-text">
                                <h3>Modern Tech</h3>
                                <p>Benefit of the socials where we oper ate success for the websit them to reduce cost</p>
                            </div>
                        </li>
                        <li>
                            <div className="Building__icon">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="Building__benefits-text">
                                <h3>Project on time</h3>
                                <p>Benefit of the socials where we oper ate success for the websit them to reduce cost</p>
                            </div>
                        </li>
                        <li>
                            <div className="Building__icon">
                                <img src={icon4} alt="" />
                            </div>
                            <div className="Building__benefits-text">
                                <h3>Latest Design</h3>
                                <p>Benefit of the socials where we oper ate success for the websit them to reduce cost</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    ) 
export default Building
