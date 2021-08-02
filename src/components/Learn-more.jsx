import React from 'react'

export default function LearnMore() {


    const [index, setIndex] = React.useState(0)
    const root = React.useRef(null)

    React.useEffect(() => {

        const item = root.current.querySelectorAll('.Questions__title'); 

        item.forEach(Element => {
            Element.classList.remove('open--question') 
        });

        item[index].classList.add('open--question')
        
    },[index])

    const handleQuestion = (numb)=>{
        const item = document.querySelectorAll('.Home .Questions__title');
        if(item[numb].classList[5] === 'open--question'){
            item[numb].classList.remove('open--question')
        }else{
            item[numb].classList.add('open--question')
        }

        if(index !== numb){
            setIndex(numb)
        }
    }
    return (
        <section className="Learn-more " ref={root}>
            <div className="Learn-more__content row  container-lg mx-lg-auto mx-0">
                <div className="Learn-more__form col-md-5 col-lg-6 col-12 position-relative d-flex justify-content-center align-items-center">
                    <form>
                        <div className="Form__header">
                            <h2 className="ff-montserrat font-size-30 text-light font-weight-bold">Request a Quote</h2>
                             <p className="ff-open-sans font-size-16 text-light">Fill all information details to consult with us to get sevices from us</p>
                        </div>
                        <div> 
                            <input type="email" className="form-control text-light"  aria-describedby="emailHelp" placeholder="Full Name"/> 
                        </div>
                        <div> 
                            <input type="password" className="form-control text-light" placeholder="Email Address"/>
                        </div> 
                        <div> 
                            <input type="email" className="form-control text-light"  aria-describedby="emailHelp" placeholder="Subject"/> 
                        </div>
                        <div> 
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> 
                        <button type="button" className="btn btn-warning rounded-0 text-uppercase font-size-12 font-weight-bold"> Send Messages</button>
                    </form>
                </div>
                <div className="Learn-more__Faq col-md-7 col-lg-6 col-12 d-flex justify-content-center flex-column">
                    <div className="Faq__header">
                        <h4 className="font-size-16 ff-open-sans text-warning">Learn More From</h4>
                        <h2 className="font-size-30 ff-montserrat font-weight-bold">Our FAQ</h2>
                    </div>
                    <div className="Faq__content">
                        <div className="Faq__questions">
                            <div className="Faq__questions-item">
                                <div className="Questions__title d-flex justify-content-between align-items-center h-100 " onClick={handleQuestion.bind(this,0)}>
                                    <h3 className="ff-montserrat font-size-16 font-weight-bold ">1. How to create cities and communities that solve?</h3>
                                    <p className="Faq__plus d-flex justify-content-center align-items-center font-size-30 font-weight-bold ff-montserrat">+</p>
                                </div>
                                <div className="Questions__description  d-flex justify-content-center align-items-center">
                                    <p className="ff-open-sans font-size-16 ">How you transform your business as technology, consumer,habits industry dynamic s change? Find out from those leading the charge.</p>
                                </div>
                            </div> 
                            <div className="Faq__questions-item">
                                <div className="Questions__title d-flex justify-content-between align-items-center h-100 " onClick={handleQuestion.bind(this,1)}>
                                    <h3 className="ff-montserrat font-size-16 font-weight-bold ">2. Construction of the winning $45 million?</h3>
                                    <p className="Faq__plus d-flex justify-content-center align-items-center font-size-30 font-weight-bold ff-montserrat">+</p>
                                </div>
                                <div className="Questions__description  d-flex justify-content-center align-items-center">
                                    <p className="ff-open-sans font-size-16 ">How you transform your business as technology, consumer,habits industry dynamic s change? Find out from those leading the charge.</p>
                                </div>
                            </div>
                            <div className="Faq__questions-item">
                                <div className="Questions__title d-flex justify-content-between align-items-center h-100 " onClick={handleQuestion.bind(this,2)}>
                                    <h3 className="ff-montserrat font-size-16 font-weight-bold ">3. How can I get news on 2020 in buildbench?</h3>
                                    <p className="Faq__plus d-flex justify-content-center align-items-center font-size-30 font-weight-bold ff-montserrat">+</p>
                                </div>
                                <div className="Questions__description  d-flex justify-content-center align-items-center">
                                    <p className="ff-open-sans font-size-16 ">How you transform your business as technology, consumer,habits industry dynamic s change? Find out from those leading the charge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 