import React from 'react'
import './css/style.css'

const SendMessage = () => (
    <section className="Send-message">
        <div className="Send-message__content">
            <div className="Send-message__header">
                <h4 className="font-size-16 ff-open-sans text-warning text-center">Contact Us</h4>
                <h2 className="font-size-30 ff-montserrat text-center font-weight-bold  mt-3">Send us a Massage</h2>
            </div>
            <div className="Send-message__form">
                <form action="">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="+9458"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Company Name"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>
) 

export default SendMessage
