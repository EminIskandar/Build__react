import React from 'react'

//component
import CompanyHeader from '../components/company-header'
import AboutUs from '../components/About-us'
import Stat from '../components/Stat'
import Team from '../components/Team'
import Sustaiability from '../components/Sustaiability'
import ClientSlider from '../components/Client-slider'
import Logos from '../components/Logos'

export default function Company() {

  
  document.title = 'BuildBench | Company'

    return (
      <main className="Company">
          <CompanyHeader/>
          <AboutUs />
          <Stat/> 
          <Team/> 
          <Sustaiability/> 
          <ClientSlider/> 
          <Logos/>
      </main>
    )
}
