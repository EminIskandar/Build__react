import React from 'react' 

export default function Stat() {
    return (
       <section className="Stat">
           <div className="Stat__content container-lg d-flex align-items-center justify-content-center h-100">
               <div className="Stat__items w-100">
                   <div className="Stat__item w-25">
                        <div className="Stat__icon-and-count d-flex align-items-center">
                            <div className="Stat__icon">
                                <i className="fas fa-coins"></i>
                            </div>
                            <div className="Stat__count">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold text-light">325</h2>
                            </div>
                        </div>
                        <div className="Stat__text">
                            <p className="ff-open-sans font-size-16 text-weigh-light text-light">Revenue in 2017 (Million)</p>
                        </div>
                   </div>
                   <div className="Stat__item w-25">
                        <div className="Stat__icon-and-count d-flex align-items-center">
                            <div className="Stat__icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <div className="Stat__count">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold text-light">525</h2>
                            </div>
                        </div>
                        <div className="Stat__text">
                            <p className="ff-open-sans font-size-16 text-weigh-light text-light">Collaegues &amp; Counting</p>
                        </div>
                   </div>
                   <div className="Stat__item w-25">
                        <div className="Stat__icon-and-count d-flex align-items-center">
                            <div className="Stat__icon">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <div className="Stat__count">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold text-light">302</h2>
                            </div>
                        </div> 
                        <div className="Stat__text">
                            <p className="ff-open-sans font-size-16 text-weigh-light text-light">Successfully Project</p>
                        </div>
                   </div>
                   <div className="Stat__item w-25">
                        <div className="Stat__icon-and-count d-flex align-items-center">
                            <div className="Stat__icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="Stat__count">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold text-light">25</h2>
                            </div>
                        </div> 
                        <div className="Stat__text">
                            <p className="ff-open-sans font-size-16 text-weigh-light text-light">Year of experience</p>
                        </div>
                   </div>
               </div>
           </div>
       </section>
    )
}
