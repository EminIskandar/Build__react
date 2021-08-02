import React from 'react'

//img
import icon1 from '../assests/img/icon/service8.png'
import icon2 from '../assests/img/icon/service2.png'
import icon3 from '../assests/img/icon/service7.png'
import icon4 from '../assests/img/icon/service6.png' 
import leftArrow from '../assests/img/icon/left-arrow.png' 

export default function Process() {
    return (
         <section className="Process">
            <div className="Process__content container-xl">
                <div className="Process__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Easy Steps</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Working Process​</h2>
                </div>
                <div className="Process__items d-flex justify-content-between">
                    <div className="Process__item position-relative d-flex justify-content-center align-items-center flex-column">
                        <div className="Process__icon d-flex justify-content-center align-items-center">
                            <div className="Process__icon-numb d-flex justify-content-center align-items-center ff-open-sans font-size-20 font-weight-bold">
                                <p>1</p>
                            </div>
                            <div className="Processs__icon-img">
                                <img src={ icon1} alt="" />
                            </div>
                        </div>
                        <div className="Process__text">
                            <h4 className="ff-montserrat font-size-18 font-weight-bold">Design Build</h4>
                        </div>
                        <div className="Process__arrow">
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                    <div className="Process__item position-relative d-flex justify-content-center align-items-center flex-column">
                        <div className="Process__icon d-flex justify-content-center align-items-center">
                            <div className="Process__icon-numb d-flex justify-content-center align-items-center ff-open-sans font-size-20 font-weight-bold">
                                <p>2</p>
                            </div>
                            <div className="Processs__icon-img">
                                <img src={ icon2} alt="" />
                            </div>
                        </div>
                        <div className="Process__text">
                            <h4 className="ff-montserrat font-size-18 font-weight-bold">Preliminary Drawings</h4>
                        </div>
                        <div className="Process__arrow">
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                    <div className="Process__item position-relative d-flex justify-content-center align-items-center flex-column">
                        <div className="Process__icon d-flex justify-content-center align-items-center">
                            <div className="Process__icon-numb d-flex justify-content-center align-items-center ff-open-sans font-size-20 font-weight-bold">
                                <p>3</p>
                            </div>
                            <div className="Processs__icon-img">
                                <img src={ icon3} alt="" />
                            </div>
                        </div>
                        <div className="Process__text">
                            <h4 className="ff-montserrat font-size-18 font-weight-bold">Detail Drawings</h4>
                        </div>
                        <div className="Process__arrow">
                            <img src={leftArrow} alt="" />
                        </div>
                    </div>
                    <div className="Process__item position-relative d-flex justify-content-center align-items-center flex-column">
                        <div className="Process__icon d-flex justify-content-center align-items-center">
                            <div className="Process__icon-numb d-flex justify-content-center align-items-center ff-open-sans font-size-20 font-weight-bold">
                                <p>4</p>
                            </div>
                            <div className="Processs__icon-img">
                                <img src={ icon4} alt="" />
                            </div>
                        </div>
                        <div className="Process__text">
                            <h4 className="ff-montserrat font-size-18 font-weight-bold">Construction</h4>
                        </div>
                    </div>
                </div>
            </div>
         </section> 
    )
}
