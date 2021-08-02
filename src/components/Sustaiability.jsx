import React from 'react'

//img
import icon1 from '../assests/img/icon/best_icon1.png'
import icon2 from '../assests/img/icon/best_icon2.png'
import icon3 from '../assests/img/icon/best_icon3.png'
import icon4 from '../assests/img/icon/best_icon4.png'

export default function Sustaiability() {
    return (
        <section className="Sustaiability position-relative overflow-hidden ">
            <div className="Sustaiability__content d-flex h-100 position-relative container-fluid m-0 p-0 flex-md-row flex-column">
                <div className="Sustaiability__left-items row m-0 p-0"> 
                    <div className="Sustaiability__empty"></div>
                    <div className="Sustaiability__left-description d-flex flex-column justify-content-center ">
                        <h4 className="ff-montserrat font-size-14 text-warning text-uppercase">SUSTAINABILITY</h4>
                        <h1 className="ff-montserrat font-size-30 text-light font-weight-bold">Committed to keep people healthy &amp; safe</h1>
                        <p className="ff-open-sans font-size-16 text-light">Benefit of the socie where we operate. A success website obusly needs great design to be one</p>
                        <button type="button" className="btn btn-warning rounded-0 font-size-16 font-weight-bold ff-roboto">work with us</button>
                    </div>
                </div>
                <div className="Sustaiability__right-items row m-0 p-0">
                    <div className="Sustaiability__right-description d-flex flex-column justify-content-center ">
                        <div className="Sustaiability__right-text"> 
                            <h1 className="ff-montserrat font-size-30 font-weight-bold">We are best in the field</h1>
                            <p className="ff-open-sans font-size-16">Benefit of the socie where we operate. A success website obusly needs great design to be one of the top 10 IT</p>
                        </div>
                        <div className="Sustaiability__right-section row">
                            <div className="Sustaiability__right-section-item col-sm-6 col-12 d-flex align-items-sm-center flex-sm-row flex-column">
                                <img src={icon1} alt="" />
                                <h1 className="ff-montserrat font-size-18 font-weight-bold">Sustainability</h1>
                            </div>
                            <div className="Sustaiability__right-section-item col-sm-6 col-12 d-flex align-items-sm-center flex-sm-row flex-column">
                                <img src={icon2} alt="" />
                                <h1 className="ff-montserrat font-size-18 font-weight-bold">Project on time </h1>
                            </div>
                            <div className="Sustaiability__right-section-item col-sm-6 col-12 d-flex align-items-sm-center flex-sm-row flex-column">
                                <img src={icon3} alt="" />
                                <h1 className="ff-montserrat font-size-18 font-weight-bold">Modern Tech </h1>
                            </div>
                            <div className="Sustaiability__right-section-item col-sm-6 col-12 d-flex align-items-sm-center flex-sm-row flex-column">
                                <img src={icon4} alt="" />
                                <h1 className="ff-montserrat font-size-18 font-weight-bold">Latest Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className="Sustaiability__empty"></div>
                </div>
            </div>
        </section>
    )
}
