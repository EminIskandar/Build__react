import React from 'react'

//component
import {SolutionHeader, SolutionBuilding} from 'components'

export default function Solution() {

    document.title = 'BuildBench | Solution'
    
    return (
       <main className="Solution">
           <SolutionHeader/>
           <SolutionBuilding/>
       </main>
    )
}
