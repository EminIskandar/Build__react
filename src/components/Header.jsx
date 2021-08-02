import React from 'react'
import { Link } from "react-router-dom";

//img
import Logo from '../assests/img/logo.png'
 
export default function Header() {
 
    const nav = React.useRef(null)
    const navLinks = React.useRef(null)
    const [status, setStatus] = React.useState('close--nav')

    React.useEffect(() => { 
        if(status === 'open--nav' ){
            nav.current.classList.remove('close--nav')
            nav.current.classList.add('open--nav') 
        }else{
            nav.current.classList.remove('open--nav')
            nav.current.classList.add('close--nav') 
        }
    }, [status])

    const handleNav = ()=>{
        const nav = document.querySelectorAll('nav')[0] 
        if(nav.classList[0] === 'open--nav'){
            setStatus('close--nav')
            console.log('close');
        }else{
            setStatus('open--nav')
            console.log('open');
        }
    }

    return (
        <header className="Header position-relative">
            <div className="Header__content container mt-5">
                <div className="Header__top-items row">
                    <div className="Header__logo col-xl-5 col-lg-4 col-12 d-lg-block d-flex justify-content-md-center  justify-content-center mb-lg-0 mb-md-4">
                        <img  src={Logo} alt="" />
                    </div>
                    <div className="Header__contant col-xl-7 col-lg-8 col-12 d-md-flex d-none justify-content-between">
                        <div className="Header__contact-item d-flex position-relative">
                            <div className="Header__icon">
                                <i className="fas fa-phone-alt font-size-20 mr-2 mt-1"></i>
                            </div>
                            <div className="Header__contact-txt">
                                <h4 className="font-size-15 ff-open-sans font-weight-bold text-white">+1 (212) 255-5511</h4>
                                <p className="font-size-14 ff-open-sans fw-light ">Make a call</p>
                            </div>
                        </div>
                        <div className="Header__contact-item d-flex position-relative">
                            <div className="Header__icon">
                                <i className="far fa-envelope font-size-20  mr-2 mt-1"></i>
                            </div>
                            <div className="Header__contact-txt">
                                <h4 className="font-size-15 ff-open-sans font-weight-bold text-white">Contact@Domain.Com</h4>
                                <p className="font-size-14 ff-open-sans fw-light " >Drop us a line</p>
                            </div>
                        </div>
                        <div className="Header__contact-item d-flex position-relative">
                            <div className="Header__icon">
                                <i className="far fa-compass font-size-20 mr-2 mt-1"></i>
                            </div>
                            <div className="Header__contact-txt">
                                <h4 className="font-size-15 ff-open-sans font-weight-bold text-white">1105 Roosevelt Street CA</h4>
                                <p className="font-size-14 ff-open-sans fw-light ">Get Dirction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Header__bottom-items row mt-5 position-relative mx-0 "> 
                    <div className="Toogle-menu-btn d-flex justify-content-center align-items-center" onClick={handleNav}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> 
                    <div className="Header__nav col-lg-10 col-12 p-0 d-flex justify-content-between align-items-center position-relative">
                        <nav className="close--nav" ref={nav}>
                            <div className="Nav__links d-flex flex-lg-row flex-column position-relative " ref={navLinks}>
                                <div className="Nav__link">
                                    <Link to="/"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase" > Home</Link> 
                                </div>
                                <div className="Nav__link">
                                    <Link to="/company"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase" >Company</Link>  
                                </div>
                                <div className="Nav__link"> 
                                    <Link to="/solution"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase" >Solution</Link> 
                                </div>
                                <div className="Nav__link"> 
                                    <Link to="/project"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase" >Project</Link>  
                                </div> 
                                <div className="Nav__link">
                                    <Link to="/blog"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase" >Blog</Link> 
                                </div>
                                <div className="Nav__link"> 
                                    <Link to="/contact"  className="text-white font-size-14 font-weight-bold text-decoration-none text-uppercase">Contact</Link> 
                                </div>
                            </div>
                        </nav> 
                        <div className="Header__search d-lg-block d-none">
                            <i className="fas fa-search font-size-20 mr-4"></i>
                        </div>
                    </div>
                    <div className="Header__button col-2 d-lg-block d-none">
                        <button type="button" className="w-100 h-100">
                            <p className="text-uppercase font-size-13 font-weight-bold">Get a Quote</p>
                        </button>
                    </div>
                </div>
            </div> 
        </header>
    ) 
}
