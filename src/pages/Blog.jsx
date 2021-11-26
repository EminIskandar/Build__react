import React from 'react'

//component 
import { BlogArticle, BlogHeader } from 'components'

export default function Blog() {

    document.title = 'BuildBench | Blog'

    return (
        <section className="Blog">
            <BlogHeader/>
            <BlogArticle/>
        </section>
    )
}
