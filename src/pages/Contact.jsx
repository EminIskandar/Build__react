import React from 'react'

//
import ContactHeader from '../components/Contact-header'
import Address from '../components/Address'
import SendMessage from '../components/Send-message'

export default function Contact() {

    document.title = 'BuildBench | Contact'

    return (
         <main className="Contact">
             <ContactHeader/>
             <Address/> 
             <SendMessage/> 
         </main>
    )
}
