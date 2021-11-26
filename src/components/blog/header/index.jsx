import React from 'react' 
import './css/style.css'

const BlogHeader = ()  => (
        <section className="Blog-header">
            <div className="Blog-header__content position-relative w-100 h-100">
            <div className="Blog-header__text w-100 d-flex flex-column justify-content-end align-items-center h-100">
                <h2 className="text-light font-size-36 ff-montserrat font-weight-bold">Blog</h2>
                <h4 className="text-light font-size-16 ff-open-sans"> <a href="/" className="text-decoration-none text-light"> Home</a> / Blog</h4>
            </div>
            </div>
        </section>
) 

export default BlogHeader
