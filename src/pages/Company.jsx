import React from 'react'

//component
import { CompanyHeader, CompanyAbout, CompanyStat, Team, Sustainability, ClientSlider, Logos} from 'components'

export default function Company() {

  
  document.title = 'BuildBench | Company'

    return (
      <main className="Company">
          <CompanyHeader/>
          <CompanyAbout/>
          <CompanyStat/> 
          <Team/> 
          <Sustainability/> 
          <ClientSlider/> 
          <Logos/>
      </main>
    )
}
