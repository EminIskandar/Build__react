import React from 'react'

//img
import avatar from '../assests/img/avatar/client.png'
export default function ClientSlider() {

    const [count, setCount] = React.useState(0)
    const root = React.useRef(null)

    React.useEffect(() => {
        
        let interval = setInterval(() => {
            setCount(c => c+1)
        }, 6000);

        return () => {
             clearInterval(interval)
        }
        
    }, [])

    React.useEffect(() => {

        const sliderItem = root.current.querySelectorAll('.Client-slider__item');

        if(count >= 3 ){

            sliderItem.forEach(element => {
                element.style = ``
            });

            setCount(0)

        }else{

            sliderItem.forEach(element => {
                element.style = `transform: translateX(-${count * 100}%);transition: all 1s ease-in;`
            });
        }
    }, [count])

    const leftBtn = ()=>{
       if(count <= 0){
            //
       }else{
           setCount( c => c - 1)
       }
    }

    const rightBtn = ()=>{
        if(count >= 3 ){
            //
        }else{
            setCount( c => c + 1)
        }
    }

    return (
        <section className="Client-slider" ref={root}>
            <div className="Client-slider__content container-xl d-flex justify-content-center align-items-center flex-column overflow-hidden position-relative">
                <div className="Client-slider__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Client's Love</h4>
                    <h2 className="font-size-30 ff-montserrat text-center font-weight-bold text-light mt-3">Testimonials</h2>
                </div>
                <div className="Client-slider__description w-100 position-relative overflow-hidden">
                    <div className="Client-slider__items d-flex position-absolute justify-content-center h-100">
                        <div className="Client-slider__item position-relative d-flex justify-content-center">
                            <div className="Client-slider__item-content d-flex justify-content-center align-items-center flex-column ">
                                <div className="Client-slider__text position-relative">
                                    <p className="text-center ff-open-sans font-size-16"> Without taking proper consideration, you could go ahead with a mismatched policy, meaning you could end up paying too much for premiums or you could find yourself.or you could find yourself.                  </p>
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <div className="Client-slider__author d-flex align-items-center">
                                    <div className="Author__img overflow-hidden rounded-circle">
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className="Author__info">
                                        <h4 className="text-light ff-montserrat font-size-20">Robert Tutul</h4>
                                        <p className=" ff-open-sans font-size-16 ">Ceo Media </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Client-slider__item position-relative d-flex justify-content-center">
                            <div className="Client-slider__item-content d-flex justify-content-center align-items-center flex-column ">
                                <div className="Client-slider__text position-relative">
                                    <p className="text-center ff-open-sans font-size-16"> Without taking proper consideration, you could go ahead with a mismatched policy, meaning you could end up paying too much for premiums or you could find yourself.or you could find yourself.                  </p>
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <div className="Client-slider__author d-flex align-items-center">
                                    <div className="Author__img overflow-hidden rounded-circle">
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className="Author__info">
                                        <h4 className="text-light ff-montserrat font-size-20">Robert Tutul</h4>
                                        <p className=" ff-open-sans font-size-16 ">Ceo Media </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Client-slider__item position-relative d-flex justify-content-center">
                            <div className="Client-slider__item-content d-flex justify-content-center align-items-center flex-column ">
                                <div className="Client-slider__text position-relative">
                                    <p className="text-center ff-open-sans font-size-16"> Without taking proper consideration, you could go ahead with a mismatched policy, meaning you could end up paying too much for premiums or you could find yourself.or you could find yourself.                  </p>
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <div className="Client-slider__author d-flex align-items-center">
                                    <div className="Author__img overflow-hidden rounded-circle">
                                        <img src={avatar} alt="" />
                                    </div>
                                    <div className="Author__info">
                                        <h4 className="text-light ff-montserrat font-size-20">Robert Tutul</h4>
                                        <p className=" ff-open-sans font-size-16 ">Ceo Media </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="Client-slider__nav position-absolute d-flex justify-content-between w-100">
                        <div className="Client-slider__left-arrow" onClick={leftBtn}><i className="fas fa-chevron-left text-light"></i></div>
                        <div className="Client-slider__right-arrow" onClick={rightBtn}><i className="fas fa-chevron-right text-light"></i></div>
                </div>
            </div>
        </section>
    )
}
