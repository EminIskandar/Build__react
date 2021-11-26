import React from 'react'
import './css/style.css'

//img
import project1 from 'img/project/project_1.jpeg'
import project2 from 'img/project/project_2.jpeg'
import project3 from 'img/project/project_3.jpeg'
import project4 from 'img/project/project_4.jpeg'
import project5 from 'img/project/project_5.jpeg'
import project6 from 'img/project/project_6.jpeg'
import project7 from 'img/project/project_7.jpeg'
import project8 from 'img/project/project_8.jpeg'

export default function Project() {

    const [index, setIndex] = React.useState(0)
    const [short, setShort] = React.useState('typeall')
    const root = React.useRef(null)
 
    const typeBridge = {typebridge : ''}
    const typeBuilding = {typebuilding : ''}
    const typeHome = {typehome : ''}
    const typeMinning = {typeminning : ''}

    React.useEffect(() => {
        const name = root.current.querySelectorAll('.Project__section-name');

        name.forEach(element => {
            element.classList.remove('active--section')
        });

        name[index].classList.add('active--section')

    }, [index])

    React.useEffect(() => {

        let attributeName = '';
        let height = ''
        let width = window.innerWidth;

        if(short === 'typeall'){
            attributeName = '.Project__sections-item'
        }else{
            attributeName = `[${short}="" ]`
        }  

        const item = root.current.querySelectorAll( attributeName),
              allItem = root.current.querySelectorAll( '.Project__sections-item'),
              section = root.current.querySelector( '.Project__section-items');

        if(width < 480){ 
            if(item.length === 8){
                height = `${786}vw` ;
            }else if(item.length === 6){
                height = `${285}vw`;
            }else if(item.length === 4){
                height = `${394}vw`;
            }else if(item.length === 3){
                height = `${590}vw`;
            } 
        }else if(width < 576){ 
            if(item.length === 8){
                height = 3710 + 'px';
            }else if(item.length === 6){
                height = 2745 + 'px';
            }else if(item.length === 4){
                height = 1845 + 'px';
            }else if(item.length === 3){
                height = 1380 + 'px';
            } 
        }else if(width < 768){ 
            if(item.length > 6){
                height = 1090 + 'px';
            }else if(item.length >4){
                height = 830 + 'px';
            }else if(item.length >2){
                height = 540 + 'px';
            } 
        }else if(width < 996){
            if(item.length > 6){
                height = 1570 + 'px';
            }else if(item.length >4){
                height = 1180 + 'px';
            }else if(item.length >2){
                height = 780 + 'px';
            } 
        }else if(width < 1200 ){
            if(item.length > 4){ 
                height = 520 + 'px';
            }else{
                height = 250 + 'px';
            }
        }else if(width < 2000 ){
            if(item.length > 4){
                height = `${605}px`;
            }else{
                height = `${300}px`;
            }
        }  
         
        section.style.height = `${height}`
 
        allItem.forEach((element) => {
            element.style= "opacity:0;visibility:hidden;tran" 
        });

        item.forEach((element,index) => {
            element.style= ""
            element.dataset.order= index;
        }); 
    

    }, [short])

    React.useEffect(() => {
        window.addEventListener("resize", resize )
        return () => {
            window.removeEventListener("resize", resize );
        }
    })

    const resize = ()=>{ 
        const item = document.querySelectorAll('.Project__sections-item') ;
        const section = document.querySelector( '.Project__section-items');

        item.forEach((element,index) => {
            element.style= ""
            element.dataset.order= index;
        }); 

        section.style = ''
    }

    const handleProject = (numb,section) =>{
        setIndex(numb)
        setShort(section)
    }


    return (
        <section className="Project" ref={root}>
            <div className="Project__content container-md">
                <div className="Project__header">
                    <h4 className="font-size-16 ff-open-sans text-warning text-center">Our Works</h4>
                    <h2 className="font-size-30 ff-montserrat  text-center font-weight-bold mt-3">Latest Projects</h2>
                </div>
                <div className="Project__sections">
                    <div className="Project__sections-names d-flex justify-content-around">
                        <div className="Project__section-name active--section" onClick={handleProject.bind(this,0,'typeall')}>
                            <h3 className="ff-open-sans font-size-16 font-weight-bold text-center">All Projects</h3>
                        </div>
                        <div className="Project__section-name" onClick={handleProject.bind(this,1,'typebridge')}>
                            <h3 className="ff-open-sans font-size-16 font-weight-bold text-center">Bridge</h3>
                        </div>
                        <div className="Project__section-name" onClick={handleProject.bind(this,2,'typebuilding')}>
                            <h3 className="ff-open-sans font-size-16 font-weight-bold text-center">Building</h3>
                        </div>
                        <div className="Project__section-name" onClick={handleProject.bind(this,3, 'typehome')}>
                            <h3 className="ff-open-sans font-size-16 font-weight-bold text-center">Home</h3>
                        </div>
                        <div className="Project__section-name" onClick={handleProject.bind(this,4,'typeminning')}>
                            <h3 className="ff-open-sans font-size-16 font-weight-bold text-center">Minning</h3>
                        </div>
                    </div>
                    <div className="Project__section-items container-md d-flex flex-wrap position-relative">
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="0" {...typeMinning}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project1} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="1" {...typeBuilding}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project2} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="2" {...typeBridge} {...typeHome}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Demra Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project3} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="3" {...typeHome}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Kelly Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project4} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="4" {...typeBridge} {...typeBuilding} {...typeHome} {...typeMinning}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Orna Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project5} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="5" {...typeBridge} {...typeHome} {...typeMinning} >
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Dimla Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project6} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="6" {...typeBuilding} {...typeHome}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project7} alt="" />
                            </div>
                        </div>
                        <div className="Project__sections-item position-absolute overflow-hidden" data-order="7" {...typeBuilding} {...typeHome} {...typeMinning}>
                            <div className="Section__description">
                                <h2 className="ff-montserrat font-size-20 text-light font-weight-bold"> Oxford Science Lab Building </h2>
                                <p className="ff-montserrat font-size-14 text-light">New Jursey,NY</p>
                            </div>
                            <div className="Section__img position-absolute">
                                <img src={project8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
