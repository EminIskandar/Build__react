import React from 'react'
import './css/style.css'

const SolutionHeader = () => (
        <section className="Solution-header">
            <div className="Solution-header__content position-relative w-100 h-100">
                <div className="Solution-header__text w-100 d-flex flex-column justify-content-end align-items-center h-100">
                    <h2 className="text-light font-size-36 ff-montserrat font-weight-bold">Solution</h2>
                    <h4 className="text-light font-size-16 ff-open-sans"> <a href="/" className="text-decoration-none text-light"> Home</a> / Solution</h4>
                </div>
            </div>
        </section>
    )
export default SolutionHeader
