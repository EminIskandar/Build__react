import React from 'react'

//
import { ContactAddress, ContactHeader, ContactSendMessage } from 'components'

export default function Contact() {

    document.title = 'BuildBench | Contact'

    return (
         <main className="Contact">
             <ContactHeader/>
             <ContactAddress/> 
             <ContactSendMessage/> 
         </main>
    )
}
