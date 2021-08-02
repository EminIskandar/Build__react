import React from 'react'

//img
import img1 from '../assests/img/services/service1.jpg'
import img2 from '../assests/img/services/service2.jpg'
import img3 from '../assests/img/services/service3.jpg'
import img4 from '../assests/img/services/service4.jpg'
import img5 from '../assests/img/services/service5.jpg'
import img6 from '../assests/img/services/service6.jpg'
import icon1 from '../assests/img/icon/service2.png'
import icon2 from '../assests/img/icon/service1.png'
import icon3 from '../assests/img/icon/service3.png'
import icon4 from '../assests/img/icon/service4.png'
import icon5 from '../assests/img/icon/service5.png'
import icon6 from '../assests/img/icon/service6.png'
export default function Services() {
    return (
        <section className="Services">
            <div className="Services__content container-lg m-auto p-0">
                <div className="Services__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Our Services</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Quality Services</h2>
                </div>
                <div className="Services__items d-flex justify-content-between flex-wrap">
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img1} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Land Minning</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div> 
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img2} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Building Staffs</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div> 
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img3} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon4} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Material Supply</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div> 
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img4} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon6} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Consultancy</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div>
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img5} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon5} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Crane Service</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div>
                    <div className="Services__item position-relative overflow-hidden">
                        <div className="Services__image overflow-hidden">
                            <img src={img6} alt="" />
                        </div>
                        <div className="Services__description d-flex align-items-center justify-content-between">
                            <div className="Servies__icon mr-3">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="Services__text">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold mb-4">Architecture</h2>
                                <p className="ff-open-sans font-size-16 ">Benefit of the socie where we oper ate success for the website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 