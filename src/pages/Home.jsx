import React from 'react'

//component
import{ 
    HomeContactUs, HomeLearnMore, HomeMedia, HomeOurProud, HomeProcess, HomeProject,
    HomeServices, HomeSlider, Team, ClientSlider, Logos,Sustainability
} from 'components'
 

export default function Home() {

    document.title = 'BuildBench'

    return (
        <main className="Home">
            <HomeSlider/>
            <HomeOurProud/> 
            <HomeServices/>
            <Sustainability/>
            <Team/>
            <HomeLearnMore/>
            <HomeProject/>
            <HomeContactUs/>
            <HomeProcess/>
            <ClientSlider/>
            <HomeMedia/>
            <Logos/>
        </main>
    )
}
