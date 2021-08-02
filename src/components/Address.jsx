import React from 'react'

export default function Address() {
    return (
        <section className="Address">
            <div className="Address__content container-xl">
                <div className="Addres__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Our Branches</h4>
                    <h2 className="font-size-30 ff-montserrat text-center font-weight-bold  mt-3">Contact Details</h2>
                </div>
                <div className="Address__items d-flex justify-content-between">
                    <div className="Address__office-address">
                        <h2 className="ff-montserrat font-size-24 font-weight-bold">New York head office</h2>
                        <div className="Adress__info d-flex justify-content-between">
                            <div className="Info__address">
                                <h2 className="ff-montserrat font-size-20 font-weight-bold">Address</h2>
                                <p className="ff-open-sans font-size-16 font-weight-light">75 Tower Court Kernersville, NC 27284 PO Box 6658 Rockhild SDT 2505</p>
                            </div>
                            <div className="Info__phone-email">
                                <div className="Info__Phone">
                                    <h2 className="ff-montserrat font-size-20 font-weight-bold">Phone</h2>
                                    <p className="ff-open-sans font-size-16 font-weight-light">09 0012 1150</p>
                                </div>
                                <div className="Info__Email">
                                    <h2 className="ff-montserrat font-size-20 font-weight-bold">Email</h2>
                                    <p className="ff-open-sans font-size-16 font-weight-light">contact@abcd.com</p>
                                    <p className="ff-open-sans font-size-16 font-weight-light">support@abcd.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="Address__btn">
                            <div className="Address__btn-item">
                                <button>Get Appointment</button>
                            </div>
                            <div className="Address__btn-item">
                                <button>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="Address__map w-50">
                    <div className="mapouter"><div className="gmap_canvas"><iframe title="Map" className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Brooklyn Heights&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
