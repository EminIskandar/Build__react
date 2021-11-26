import React from 'react'
import './css/style.css'

import logo1 from 'img/logos/logo01.png'
import logo2 from 'img/logos/logo02.png'
import logo3 from 'img/logos/logo03.png'
import logo4 from 'img/logos/logo04.png'
import logo5 from 'img/logos/logo05.png'

export default function Logos() {

    const [count, setCount] = React.useState(0);
    const root = React.useRef(null)

    React.useEffect(() => {

        let interval = setInterval(() => {
            setCount(c=> c+1)
        }, 5000);

        return () => {
           clearInterval(interval)
        }

    }, [])


    React.useEffect(() => {
        const logoItem = root.current.querySelectorAll('.Logo__item');
        let height = `(-${count * 220}px)`;
        let width = window.innerWidth;

        if(width < 480){ 
            height = `(-${count * 100}vw)`;
        }else if(width < 768){ 
            height = `(-${count * 50}vw)`;
        }else if(width < 1200 ){
            height = `(-${count * 32.33}vw)`;
        }else if(width < 2000 ){
            height = `(-${count * 220}px)`;
        } 

        if(count >=6){
            setCount(0)
        }else if(count === 0){
            logoItem.forEach(element => {
                element.style = ``
            });
        }else{  
            logoItem.forEach(element => {
                element.style = `transform: translateX${height};transition: all 1s ease-in;`
            });
        }


    }, [count])

    return (
        <section className="Logos" ref={root}>
            <div className="Logos__content container-xl overflow-hidden position-relative">
                <div className="Logos__items d-flex position-absolute h-100 overflow-hidden">
                    <div className="Logo__item">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo5} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="Logo__item">
                        <img src={logo5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
