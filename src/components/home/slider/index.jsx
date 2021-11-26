import React from 'react'
import './css/style.css'

export default function Slider() {

    const root = React.useRef(null)
    const [count, setCount] = React.useState(0) 

    React.useEffect(() => { 

        let interval = setInterval(() => {  
                setCount( c=> c+1 ) 
            },5000) 

        return () => {
            clearInterval(interval)
        }

    })

    React.useEffect(() => { 
        const sliderItem = root.current.querySelectorAll('.Slider__item'),
              navItem = root.current.querySelectorAll('.Slider__nav-item'),
              sliderTitle = root.current.querySelectorAll('.Slider__description h1'),
              sliderText = root.current.querySelectorAll('.Slider__description p'),
              sliderBtn = root.current.querySelectorAll('.Slider__button');

        if(count >= 4 ){ 

            setCount(0)  

        }else{ 
            
            sliderItem.forEach(item => {
                if(count === 0){
                    item.style= ``;
                }else{
                    item.style= `transform: translateX(-${count*100}vw);transition: all 1s ease-in-out`;
                }
            });

            for(var g=0;g<3;g++){ 
                navItem[g].classList.remove('active--nav')
            };

            if(count === 3 || count === 0){
                navItem[0].classList.add('active--nav') 
            }else{
                navItem[count].classList.add('active--nav')
            } 
             
            switch (count) {
                case 0:
                    sliderTitle[3].classList.remove('fade-in-title')  
                    sliderText[3].classList.remove('fade-in-text') 
                    sliderBtn[3].classList.remove('fade-in-btn') 

                    sliderTitle[3].classList.add('fade-out-title')  
                    sliderText[3].classList.add('fade-out-text') 
                    sliderBtn[3].classList.add('fade-out-btn') 
                    break;
                case 1:
                    sliderTitle[0].classList.remove('fade-in-title')  
                    sliderText[0].classList.remove('fade-in-text') 
                    sliderBtn[0].classList.remove('fade-in-btn')
                    
                    sliderTitle[0].classList.add('fade-out-title')  
                    sliderText[0].classList.add('fade-out-text') 
                    sliderBtn[0].classList.add('fade-out-btn') 

                    sliderTitle[1].classList.remove('fade-out-title')  
                    sliderText[1].classList.remove('fade-out-text') 
                    sliderBtn[1].classList.remove('fade-out-btn') 

                    sliderTitle[1].classList.add('fade-in-title')  
                    sliderText[1].classList.add('fade-in-text') 
                    sliderBtn[1].classList.add('fade-in-btn') 
                    break;
                case 2:
                    sliderTitle[1].classList.remove('fade-in-title')  
                    sliderText[1].classList.remove('fade-in-text') 
                    sliderBtn[1].classList.remove('fade-in-btn')
                    
                    sliderTitle[1].classList.add('fade-out-title')  
                    sliderText[1].classList.add('fade-out-text') 
                    sliderBtn[1].classList.add('fade-out-btn') 

                    sliderTitle[2].classList.remove('fade-out-title')  
                    sliderText[2].classList.remove('fade-out-text') 
                    sliderBtn[2].classList.remove('fade-out-btn') 

                    sliderTitle[2].classList.add('fade-in-title')  
                    sliderText[2].classList.add('fade-in-text') 
                    sliderBtn[2].classList.add('fade-in-btn') 
                    break;
                case 3:
                    sliderTitle[0].classList.remove('fade-out-title')  
                    sliderText[0].classList.remove('fade-out-text') 
                    sliderBtn[0].classList.remove('fade-out-btn')

                    sliderTitle[0].classList.add('fade-in-title')  
                    sliderText[0].classList.add('fade-in-text') 
                    sliderBtn[0].classList.add('fade-in-btn') 


                    sliderTitle[2].classList.remove('fade-in-title')  
                    sliderText[2].classList.remove('fade-in-text') 
                    sliderBtn[2].classList.remove('fade-in-btn')
                    
                    sliderTitle[2].classList.add('fade-out-title')  
                    sliderText[2].classList.add('fade-out-text') 
                    sliderBtn[2].classList.add('fade-out-btn') 

                    sliderTitle[3].classList.remove('fade-out-title')  
                    sliderText[3].classList.remove('fade-out-text') 
                    sliderBtn[3].classList.remove('fade-out-btn') 

                    sliderTitle[3].classList.add('fade-in-title')  
                    sliderText[3].classList.add('fade-in-text') 
                    sliderBtn[3].classList.add('fade-in-btn') 
                    break;
            
                default:
                    break;
            }  
              
        }
    },[count])
    
    const navBtn = (numb)=>{
        setCount(numb)
    }

    return (
         <section className="Slider position-absolute overflow-hidden container-fluid m-0 p-0" ref={root}>
            <div className="Slider__content position-relative container-fluid m-0 p-0 h-100" >
                <div className="Slider__items h-100 postion-absolute d-flex overflow-hidden">
                    <div className="Slider__item position-relative h-100 container-fluid">
                        <div className="Slider__item-content container d-flex justify-content-center flex-column h-100">
                            <div className="Slider__header">
                                <h4 className="font-size-24 text-warning font-weight-normal position-relative ff-open-sans d-inline-block">Circle got smaller</h4>
                            </div>
                            <div className="Slider__description mt-3 mb-5">
                                <h1 className="fade-in-title font-size-64 text-white text-uppercase font-weight-bold mb-2 font-m ff-montserrat mb-4">Vision got Latger</h1>
                                <p className="fade-in-text font-size-16 text-white font-weight-normal ff-open-sans">Benefit of the socie where we operate. A success website obusly needs great <br /> design to be one top10 IT companies in The world</p>
                            </div>
                            <div className="Slider__button d-flex flex-sm-row flex-column fade-in-btn">
                                <button type="button" className="btn btn-warning ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0 mb-sm-0 mb-3">Our Servies</button>
                                <button type="button" className="btn btn-outline-light ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0">Contact Us</button>
                            </div>
                            <div className="Slider__image position-absolute container-fluid"></div>
                        </div>
                    </div>
                    <div className="Slider__item position-relative h-100 container-fluid">
                        <div className="Slider__item-content container d-flex justify-content-center flex-column h-100 align-items-center text-center">
                            <div className="Slider__header">
                                <h4 className="font-size-24 text-warning font-weight-normal position-relative ff-open-sans d-inline-block">Help you to</h4>
                            </div>
                            <div className="Slider__description mt-3 mb-5">
                                <h1 className="font-size-64 text-white text-uppercase font-weight-bold mb-2 font-m ff-montserrat mb-4">Build your Dream</h1>
                                <p className="font-size-16 text-white font-weight-normal ff-open-sans">Benefit of the socie where we operate. A success website obusly needs great<br/> design to be one top10 IT companies in The world</p>
                            </div>
                            <div className="Slider__button d-flex flex-sm-row flex-column">
                                <button type="button" className="btn btn-warning ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0 mb-sm-0 mb-3">Our Servies</button>
                                <button type="button" className="btn btn-outline-light ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0">Contact Us</button>
                            </div>
                            <div className="Slider__image position-absolute container-fluid"></div>
                        </div>
                    </div>
                    <div className="Slider__item position-relative h-100 container-fluid">
                        <div className="Slider__item-content container d-flex justify-content-center align-items-end flex-column h-100 text-center">
                        <div className="Slider__header">
                            <h4 className="font-size-24 text-warning font-weight-normal position-relative ff-open-sans d-inline-block">Help you to</h4>
                        </div>
                        <div className="Slider__description mt-3 mb-5">
                            <h1 className="font-size-64 text-white text-uppercase font-weight-bold mb-2 font-m ff-montserrat mb-4">Build your Dream</h1>
                            <p className="font-size-16 text-white text-right     font-weight-normal ff-open-sans">Benefit of the socie where we operate. A success website obusly needs great<br/> design to be one top10 IT companies in The world</p>
                        </div>
                        <div className="Slider__button d-flex flex-sm-row flex-column">
                            <button type="button" className="btn btn-warning ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0 mb-sm-0 mb-3">Our Servies</button>
                            <button type="button" className="btn btn-outline-light ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0">Contact Us</button>
                        </div>
                        <div className="Slider__image position-absolute container-fluid"></div>
                        </div>
                    </div>
                    <div className="Slider__item position-relative h-100 container-fluid">
                        <div className="Slider__item-content container d-flex justify-content-center flex-column h-100">
                            <div className="Slider__header">
                                <h4 className="font-size-24 text-warning font-weight-normal position-relative ff-open-sans d-inline-block">Circle got smaller</h4>
                            </div>
                            <div className="Slider__description mt-3 mb-5">
                                <h1 className="font-size-64 text-white text-uppercase font-weight-bold mb-2 font-m ff-montserrat mb-4">Vision got Latger</h1>
                                <p className="font-size-16 text-white font-weight-normal ff-open-sans">Benefit of the socie where we operate. A success website obusly needs great <br /> design to be one top10 IT companies in The world</p>
                            </div>
                            <div className="Slider__button d-flex flex-sm-row flex-column">
                                <button type="button" className="btn btn-warning ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0 mb-sm-0 mb-3">Our Servies</button>
                                <button type="button" className="btn btn-outline-light ff-open-sans font-size-12 font-weight-bold text-uppercase rounded-0">Contact Us</button>
                            </div>
                            <div className="Slider__image position-absolute container-fluid"></div>
                        </div>
                    </div>
                </div>
                <div className="Slider__nav position-absolute h-100 m-0 p-0">
                    <div className="Slider__nav-items w-100 h-100 d-flex flex-column  justify-content-center align-items-end">
                        <div className="Slider__nav-item rounded-circle position-relative my-1 mr-4 active--nav" onClick={navBtn.bind(this,0)}></div>
                        <div className="Slider__nav-item rounded-circle position-relative my-1 mr-4" onClick={navBtn.bind(this,1)}></div>
                        <div className="Slider__nav-item rounded-circle position-relative my-1 mr-4" onClick={navBtn.bind(this,2)}></div>
                    </div>
                </div>
            </div>
         </section>
    )
}
