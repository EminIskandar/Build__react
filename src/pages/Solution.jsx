import React from 'react'

//component
import SolutionHeader from '../components/Solution-header'
import Building from '../components/Building'
export default function Solution() {

    document.title = 'BuildBench | Solution'
    
    return (
       <main className="Solution">
           <SolutionHeader/>
           <Building/>
       </main>
    )
}
