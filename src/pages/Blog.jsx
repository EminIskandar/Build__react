import React from 'react'

//
import BlogHeader from '../components/Blog-header'
import Articles  from '../components/Articles'

export default function Blog() {

    document.title = 'BuildBench | Blog'

    return (
        <section className="Blog">
            <BlogHeader/>
            <Articles/>
        </section>
    )
}
