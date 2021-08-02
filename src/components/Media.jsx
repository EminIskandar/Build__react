import React from 'react'

//img
import img1 from '../assests/img/news/news1.jpg'
import img2 from '../assests/img/news/news2.jpg'
import img3 from '../assests/img/news/news3.png'
export default function Media() {
    return (
        <section className="Media">
            <div className="Media__content container-xl">
                <div className="Media__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Latest News</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Latest Media​​</h2>
                </div>
                <div className="Media__description">
                    <div className="Media__posts d-flex justify-content-between position-relative ">
                        <div className="Media__post-item overflow-hidden position-relative">
                            <div className="Post__img overflow-hidden w-100 d-flex justify-content-center align-items-center">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="Post__short-info">
                                <div className="Post__date-and-category d-flex align-items-center">
                                    <div className="Post__categoty d-flex align-items-center">
                                        <i className="far fa-newspaper"></i>
                                        <p className="ff-open-sans font-size-16">Building</p>
                                    </div>
                                    <div className="Post__date d-flex align-items-center">
                                        <i className="far fa-clock"></i>
                                        <p>21/03/2019</p>
                                    </div>
                                </div>
                                <div className="Post__title">
                                    <h3 className="ff-montserrat font-size-20 font-weight-bold">Riding with friend is the best feeling</h3>
                                </div>
                            </div>
                        </div>
                        <div className="Media__post-item overflow-hidden position-relative">
                            <div className="Post__img overflow-hidden w-100 d-flex justify-content-center align-items-center">
                                <img src={img2} alt="" />
                            </div>
                            <div className="Post__short-info">
                                <div className="Post__date-and-category d-flex align-items-center">
                                    <div className="Post__categoty d-flex align-items-center">
                                        <i className="far fa-newspaper"></i>
                                        <p className="ff-open-sans font-size-16">Building</p>
                                    </div>
                                    <div className="Post__date d-flex align-items-center">
                                        <i className="far fa-clock"></i>
                                        <p>21/03/2019</p>
                                    </div>
                                </div>
                                <div className="Post__title">
                                    <h3 className="ff-montserrat font-size-20 font-weight-bold">BMW vs Austin Martin going higher</h3>
                                </div>
                            </div>
                        </div>
                        <div className="Media__post-item overflow-hidden position-relative">
                            <div className="Post__img overflow-hidden w-100 d-flex justify-content-center align-items-center">
                                <img src={img3} alt="" />
                            </div>
                            <div className="Post__short-info">
                                <div className="Post__date-and-category d-flex align-items-center">
                                    <div className="Post__categoty d-flex align-items-center">
                                        <i className="far fa-newspaper"></i>
                                        <p className="ff-open-sans font-size-16">Building</p>
                                    </div>
                                    <div className="Post__date d-flex align-items-center">
                                        <i className="far fa-clock"></i>
                                        <p>24/03/2019</p>
                                    </div>
                                </div>
                                <div className="Post__title">
                                    <h3 className="ff-montserrat font-size-20 font-weight-bold">Caring for construction more experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
