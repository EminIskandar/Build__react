import React from 'react'

//component
import Slider from '../components/Slider'
import OurProud from '../components/Our-proud'
import Services from '../components/Services'
import Sustaiability from '../components/Sustaiability'
import Team from '../components/Team'
import LearnMore from '../components/Learn-more'
import Project from '../components/Project'
import ContactUs from '../components/Contact-us'
import Process from '../components/Process'
import ClientSlider from '../components/Client-slider'
import Media from '../components/Media'
import Logos from '../components/Logos'

export default function Home() {

    document.title = 'BuildBench'

    return (
        <main className="Home">
            <Slider/>
            <OurProud/> 
            <Services/>
            <Sustaiability/>
            <Team/>
            <LearnMore/>
            <Project/>
            <ContactUs/>
            <Process/>
            <ClientSlider/>
            <Media/>
            <Logos/>
        </main>
    )
}
