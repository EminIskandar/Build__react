import React from 'react'

//components
import { ProjectHeader, ProjectWork} from 'components'

export default function Project() {

    document.title = 'BuildBench | Project'

    return (
        <main className="Project">
             <ProjectHeader/>
             <ProjectWork/>
        </main>
    )
}
