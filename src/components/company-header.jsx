import React from 'react'

export default function companyHeader() {
    return (
       <section className="Company-header">
           <div className="Company-header__content position-relative w-100 h-100">
            <div className="Company-header__text w-100 d-flex flex-column justify-content-end align-items-center h-100">
                <h2 className="text-light font-size-36 ff-montserrat font-weight-bold">Company</h2>
                <h4 className="text-light font-size-16 ff-open-sans"> <a href="/" className="text-decoration-none text-light"> Home</a> / Company</h4>
            </div>
           </div>
       </section>
    )
}
