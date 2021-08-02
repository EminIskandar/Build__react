import React from 'react'

//
import ProjectHeader from '../components/Project-header'
import Works from '../components/Works' 
export default function Project() {

    document.title = 'BuildBench | Project'

    return (
        <main className="Project">
             <ProjectHeader/>
             <Works/>
        </main>
    )
}
