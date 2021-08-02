import React from 'react'

//img
import img1 from '../assests/img/icon/service10.png'
import img2 from '../assests/img/icon/service11.png'
import img3 from '../assests/img/icon/service12.png'
export default function AboutUs() {
    return (
       <section className="About-us">
           <div className="About-us__content container-xl position-relative d-flex h-100">
              <div className="About-us__left w-50">
                  <div className="About-us__text">
                    <h6 className="text-warning ff-montserrat font-size-16 font-weight-semiBold">About Us</h6>
                    <h2 className="ff-montserrat font-size-30 font-weight-bold">We are leading International company in the world</h2>
                    <h4 className="ff-montserrat font-size-18 font-weight-bold">Benefit of the socie where we operate. A success website obusly needs great design to be one of the top 10.</h4>
                    <p className="ff-open-sans font-size-16 font-weight-normal">We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond too the complex global forces shaping our future</p>
                  </div>
                  <div className="About-us__btn">
                      <button type="button" className="btn btn-warning rounded-0 text-uppercase ff-roboto font-size-12 font-weight-semiBold">Our Services</button>
                      <button type="button" className="btn btn-dark rounded-0 text-uppercase ff-roboto font-size-12 font-weight-semiBold">Contact us</button>
                  </div>
              </div>
              <div className="About-us__right w-50">
                    <div className="About-us__section d-flex flex-column justify-content-between h-100">
                        <div className="About-us__section-item d-flex"> 
                            <div className="About-us__section-icon">
                                <img src={img1} alt="" />
                            </div>
                            <div className="About-us__section-description">
                                <h2>Building Staffs</h2>
                                <p>We have a long and proud histiry givin emphasis to envi ronment social and economic outcomes.</p>
                            </div>
                        </div>
                        <div className="About-us__section-item d-flex">
                            <div className="About-us__section-icon">
                                <img src={img2} alt="" />
                            </div>
                            <div className="About-us__section-description">
                                <h2>Histiry Emphasis</h2>
                                <p>We have a long and proud histiry givin emphasis to envi ronment social and economic outcomes.</p>
                            </div>
                        </div>
                        <div className="About-us__section-item d-flex">
                            <div className="About-us__section-icon">
                                <img src={img3} alt="" />
                            </div>
                            <div className="About-us__section-description">
                                <h2>Economic Outcomes</h2>
                                <p>We have a long and proud histiry givin emphasis to envi ronment social and economic outcomes.</p>
                            </div>
                        </div>
                    </div>
              </div>
           </div>
       </section>
    )
}
