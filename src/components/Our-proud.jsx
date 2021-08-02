import React from 'react'

export default function OurProud() {
    return (
        <section className="Our-proud position-relative shadow-sm">
            <div className="Our-proud__content container-lg h-100 position-relative bg-light shadow">
                <div className="Our-proud__items row h-100 position-relative ">
                    <div className="Our-proud__description col-lg-5 col-12 m-0 bg-warning h-100">
                        <div className="Description__content">
                            <h4 className="font-size-16 ff-open-sans font-weight-bolder mb-2">Our proud</h4>
                            <h2 className="font-size-29 ff-montserrat font-weight-bold">25 years of undefeated success</h2>
                            <p className="font-size-16 ff-open-sans font-weight-normal my-5"> We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.</p>
                            <button type="button" className="btn btn-dark rounded-0 ff-roboto font-size-16">work with us</button>
                        </div>
                    </div>   
                    <div className="Our-proud__achievement col-lg-7 col-12 m-0 h-100 position-relative">
                        <div className="Achievement__content row h-100 m-0 p-0">
                            <div className="Achievement__item col-md-6 col-12  d-flex justify-content-center align-items-md-center flex-md-row flex-column">
                                <div className="Achievement__icon">
                                    <i className="fas fa-list-ul text-warning font-size-36 mr-4"></i>
                                </div>
                                <div className="Achievement__count">
                                    <h4 className="font-size-36 ff-montserrat font-weight-bold">512 <span className="font-size-26">+</span></h4>
                                    <p className="font-size-16 ff-open-sans">Successfully Project Finished.</p>
                                </div>
                            </div>
                            <div className="Achievement__item col-md-6 col-12 d-flex justify-content-center align-items-md-center flex-md-row flex-column">
                                <div className="Achievement__icon">
                                    <i className="far fa-star text-warning font-size-36 mr-4"></i>
                                </div>
                                <div className="Achievement__count">
                                    <h4 className="font-size-36 ff-montserrat font-weight-bold">25 <span className="font-size-26">+</span></h4>
                                    <p className="font-size-16 ff-open-sans">Years of experience with proud</p>
                                </div>
                            </div>
                            <div className="Achievement__item col-md-6 col-12 d-flex justify-content-center align-items-md-center flex-md-row flex-column">
                                <div className="Achievement__icon">
                                    <i className="fas fa-coins text-warning font-size-36 mr-4"></i>
                                </div>
                                <div className="Achievement__count">
                                    <h4 className="font-size-36 ff-montserrat font-weight-bold">1120<span className="font-size-26">+</span></h4>
                                    <p className="font-size-16 ff-open-sans">revenue in 2017 investment</p>
                                </div>
                            </div>
                            <div className="Achievement__item col-md-6 col-12 d-flex justify-content-center align-items-md-center flex-md-row flex-column">
                                <div className="Achievement__icon">
                                    <i className="fas fa-users text-warning font-size-36 mr-4"></i>
                                </div>
                                <div className="Achievement__count">
                                    <h4 className="font-size-36 ff-montserrat font-weight-bold">1520<span className="font-size-26">+</span></h4>
                                    <p className="font-size-16 ff-open-sans">Colleagues &amp; counting more daily</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    )
}
