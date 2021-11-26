import React from 'react'
import './css/style.css'

//img
import member1 from 'img/avatar/member1.jpg'
import member2 from 'img/avatar/member2.jpg'
import member3 from 'img/avatar/member3.jpg'
import member4 from 'img/avatar/member4.jpg'

const Team = () => (
         <section className="Team">
             <div className="Team__content">
                <div className="Team__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">We are professionals</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Meet The Team</h2>
                </div>
                <div className="Team__members d-flex container justify-content-sm-between justify-content-center flex-wrap align-items-sm-start align-items-center">
                    <div className="Team__member position-relative">
                        <div className="Team__image overflow-hidden  w-100">
                            <img src={member1} alt="" />
                        </div>
                        <div className="Team__info d-flex align-items-center justify-content-center flex-column">
                            <h3 className="ff-montserrat font-size-20 font-weight-bold ">Snoop Dogg</h3>
                            <p className="ff-montserrat font-size-16 ">Co-Founder</p>
                        </div>
                        <div className="Team__social position-absolute w-100">
                            <div className="Team__social-icons d-flex align-items-center justify-content-center flex-column position-absolute">
                                <div className="Team__social-item"><i className="fa fa-facebook text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-google-plus text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-twitter text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-linkedin text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="Team__member position-relative">
                        <div className="Team__image overflow-hidden w-100">
                            <img src={member2} alt="" />
                        </div>
                        <div className="Team__info d-flex align-items-center justify-content-center flex-column">
                            <h3 className="ff-montserrat font-size-20 font-weight-bold ">Rory Burns</h3>
                            <p className="ff-montserrat font-size-16 ">Instructor</p>
                        </div>
                        <div className="Team__social position-absolute w-100">
                            <div className="Team__social-icons d-flex align-items-center justify-content-center flex-column position-absolute">
                                <div className="Team__social-item"><i className="fa fa-facebook text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-google-plus text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-twitter text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-linkedin text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="Team__member position-relative">
                        <div className="Team__image overflow-hidden w-100">
                            <img src={member3} alt="" />
                        </div>
                        <div className="Team__info d-flex align-items-center justify-content-center flex-column">
                            <h3 className="ff-montserrat font-size-20 font-weight-bold ">Wiz Khalifa</h3>
                            <p className="ff-montserrat font-size-16 ">Chairman</p>
                        </div>
                        <div className="Team__social position-absolute w-100">
                            <div className="Team__social-icons d-flex align-items-center justify-content-center flex-column position-absolute">
                                <div className="Team__social-item"><i className="fa fa-facebook text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-google-plus text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-twitter text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-linkedin text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="Team__member position-relative">
                        <div className="Team__image overflow-hidden w-100">
                            <img src={member4} alt="" />
                        </div>
                        <div className="Team__info d-flex align-items-center justify-content-center flex-column">
                            <h3 className="ff-montserrat font-size-20 font-weight-bold ">Isabela Moner</h3>
                            <p className="ff-montserrat font-size-16 ">Isabela Moner</p>
                        </div>
                        <div className="Team__social position-absolute w-100">
                            <div className="Team__social-icons d-flex align-items-center justify-content-center flex-column position-absolute">
                                <div className="Team__social-item"><i className="fa fa-facebook text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-google-plus text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-twitter text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                                <div className="Team__social-item"><i className="fa fa-linkedin text-light rounded-circle d-flex align-items-center justify-content-center font-size-12 my-1"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </section>
    )
export default Team
