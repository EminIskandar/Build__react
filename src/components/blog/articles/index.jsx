import React from 'react'
import './css/style.css'

//img
import img1 from 'img/news/news1.jpg'
import img2 from 'img/news/news2.jpg'
import img3 from 'img/news/news3.png'

const Articles = () => (
        <section className="Articles">
            <div className="Articles__content container d-flex justify-content-between">
                <div className="Article__left-side">
                    <div className="Article__post">
                        <div className="Post__img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="Post__description d-flex flex-column justify-content-between">
                            <div className="Post__short-info d-flex flex-wrap">
                                <div className="Post__author d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-user text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> WPTWUSER</h2>
                                </div>
                                <div className="Post__date d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-clock text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> MARCH 24, 2016</h2>
                                </div>
                                <div className="Post__topic d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-folder-open text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light">BUILDING</h2>
                                </div>
                            </div>
                            <div className="Post__text">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold">Riding with friend is the best feeling</h2>
                                <p className="ff-open-sans font-size-16 ">What a crazy time. I have five children in colleghigh school graduates.jpge or pursing post graduate studies (ages 18 through 26 for those who were wondering). Each of my children attends college far from home, the closest of which is…</p>
                            </div>
                            <div className="Post__link">
                                <a href="/">Continue</a>
                            </div>
                        </div>
                    </div> 
                    <div className="Article__post">
                        <div className="Post__img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="Post__description d-flex flex-column justify-content-between">
                            <div className="Post__short-info d-flex flex-wrap">
                                <div className="Post__author d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-user text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> WPTWUSER</h2>
                                </div>
                                <div className="Post__date d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-clock text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> MARCH 24, 2016</h2>
                                </div>
                                <div className="Post__topic d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-folder-open text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light">BUILDING</h2>
                                </div>
                            </div>
                            <div className="Post__text">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold">Methodology of road traffic crash investigation</h2>
                                <p className="ff-open-sans font-size-16 ">What a crazy time. I have five children in colleghigh school graduates.jpge or pursing post graduate studies (ages 18 through 26 for those who were wondering). Each of my children attends college far from home, the closest of which is…</p>
                            </div>
                            <div className="Post__link">
                                <a href="/">Continue</a>
                            </div>
                        </div>
                    </div>
                    <div className="Article__post">
                        <div className="Post__img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="Post__description d-flex flex-column justify-content-between">
                            <div className="Post__short-info d-flex flex-wrap">
                                <div className="Post__author d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-user text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> WPTWUSER</h2>
                                </div>
                                <div className="Post__date d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-clock text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light"> MARCH 24, 2016</h2>
                                </div>
                                <div className="Post__topic d-flex mr-4 mt-1">
                                    <i className="mr-2 far fa-folder-open text-warning"></i>
                                    <h2 className="ff-opan-sans font-size-13 font-light">BUILDING</h2>
                                </div>
                            </div>
                            <div className="Post__text">
                                <h2 className="ff-montserrat font-size-30 font-weight-bold">Consonantia, supplies it with the necessary regelialia</h2>
                                <p className="ff-open-sans font-size-16 ">What a crazy time. I have five children in colleghigh school graduates.jpge or pursing post graduate studies (ages 18 through 26 for those who were wondering). Each of my children attends college far from home, the closest of which is…</p>
                            </div>
                            <div className="Post__link">
                                <a href="/">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Article__right-side">
                    <div className="Article__search w-100">
                       <form action="">
                           <input type="text" name="" id="" />
                           <button type="button"><i className="fas fa-search"></i></button>
                       </form>
                    </div>
                    <div className="Article__section">
                        <div className="Article__section-title">
                            <h4 className="ff-montserrat font-size-24 font-weight-bold">Popular Posts</h4>
                        </div>
                        <div className="Article__popular-post">
                            <div className="Popular-post__item d-flex position-relative justify-content-between ">
                                <div className="Popular-post__img">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="Popular-post__text">
                                    <span className="ff-open-sans font-size-14 font-weight-light">24 Mar, 2016</span>
                                    <p className="font-size-15 ff-montserrat  font-weight-bold">Methodology of road traffic crash investigation</p>
                                </div>
                            </div>
                            <div className="Popular-post__item d-flex position-relative justify-content-between ">
                                <div className="Popular-post__img">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="Popular-post__text">
                                    <span className="ff-open-sans font-size-14 font-weight-light">20 Mar, 2016</span>
                                    <p className="font-size-15 ff-montserrat  font-weight-bold">Consonantia, supplies it with the necessary regelialia</p>
                                </div>
                            </div>
                            <div className="Popular-post__item d-flex position-relative justify-content-between ">
                                <div className="Popular-post__img">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="Popular-post__text">
                                    <span className="ff-open-sans font-size-14 font-weight-light">14 Mar, 2016</span>
                                    <p className="font-size-15 ff-montserrat  font-weight-bold">Support Each of my children attends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Article__section">
                        <div className="Article__section-title">
                            <h4 className="ff-montserrat font-size-24 font-weight-bold">Categories</h4>
                        </div>
                        <div className="Article__categories">
                            <div className="Article__categories-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">Building</a>
                                <span className="font-size-16 ff-open-sans">(3)</span>
                            </div>
                            <div className="Article__categories-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">House</a>
                                <span className="font-size-16 ff-open-sans">(3)</span>
                            </div>
                            <div className="Article__categories-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">Repearing</a>
                                <span className="font-size-16 ff-open-sans">(3)</span>
                            </div>
                        </div>
                    </div>
                    <div className="Article__section">
                        <div className="Article__section-title">
                            <h4 className="ff-montserrat font-size-24 font-weight-bold">Archives</h4>
                        </div> 
                        <div className="Article__archives">
                            <div className="Artile__archives-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">March 2019</a>
                            </div>
                            <div className="Artile__archives-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">March 2018</a>
                            </div>
                            <div className="Artile__archives-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">March 2017</a>
                            </div>
                            <div className="Artile__archives-item">
                                <a href="/" className="text-decaoration-none font-size-16 ff-open-sans ">March 2016</a>
                            </div>
                        </div>
                    </div>
                    <div className="Article__section">
                        <div className="Article__section-title">
                            <h4 className="ff-montserrat font-size-24 font-weight-bold">Tags</h4>
                        </div>  
                        <div className="Article__tag">
                            <div className="Article__tag-item">
                                <a href="/">Building</a>
                            </div>
                            <div className="Article__tag-item">
                                <a href="/">Construction</a>
                            </div>
                            <div className="Article__tag-item">
                                <a href="/">Contracting</a>
                            </div> 
                            <div className="Article__tag-item">
                                <a href="/">Desing</a>
                            </div> 
                            <div className="Article__tag-item">
                                <a href="/">Planning</a>
                            </div> 
                            <div className="Article__tag-item">
                                <a href="/">Project</a>
                            </div>  
                            <div className="Article__tag-item">
                                <a href="/">Safety</a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

export default Articles
