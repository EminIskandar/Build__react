import React from 'react'

//img
import project1 from '../assests/img/project/project_1.jpeg'
import project2 from '../assests/img/project/project_2.jpeg'
import project3 from '../assests/img/project/project_3.jpeg'
import project4 from '../assests/img/project/project_4.jpeg'
import project5 from '../assests/img/project/project_5.jpeg'
import project6 from '../assests/img/project/project_6.jpeg'
import project7 from '../assests/img/project/project_7.jpeg'
import project8 from '../assests/img/project/project_8.jpeg'

export default function Work() {
    return (
        <section className="Works">
            <div className="Works__content">
            <div className="Works__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Our projects</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Latest Projects</h2>
                </div>
                <div className="Works__items">
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project1} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project2} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Demra Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project3} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Kelly Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project4} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Orna Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project5} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Dimla Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project6} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project7} alt="" />
                        </div>
                    </div>
                    <div className="Works__item overflow-hidden" >
                        <div className="Works__description">
                            <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Kelly Science Lab Building </h2>
                            <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                        </div>
                        <div className="Works__img">
                            <img src={project8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
