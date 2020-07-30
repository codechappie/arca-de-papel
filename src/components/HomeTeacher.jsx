import React, { useState, Fragment, useRef, } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

//REDUX
import { useSelector } from 'react-redux'



import imgCreateSala from '../images/image-create-room.png'
import imgResources from '../images/Recursos.png'
import imgLibros from '../images/libros.png'
import ModalCreateRoom from './ModalCreateRoom';
import CourseTeacher from '../almacen/CourseTeacher'
import SideBarDocente from './SideBarDocente';
import Exercises from './Exercises';
import ModalTeacher from './ModalTeacher';
import AdBanner from './AdBanner';

const HomeTeacher =     () => {
    
    const {nombreColegio,dni,telefono,distritoColegio} = useSelector(store=>store.usuario)
   

    const [crearSalon, setCrearSalon] = useState();
    const modalRef = useRef();
    const crearSala = () => {
        modalRef.current.openModalCRoom();

    }
    const reload = e=>{}

    return (
        <Fragment>

            <ModalCreateRoom ref={modalRef} />

        {
           (!nombreColegio.trim()&&!dni.trim()&&!telefono.trim()&&!distritoColegio.trim()) && <ModalTeacher />
        }
        <div className="menu-container">
                
           <div className="menu-overlay" />
                <SideBarDocente/>

                <div className="dashboard">
                    <Switch>
                        <Route path="/home/ejercicios" exact component={Exercises} />                        
                        <Route path="/home" exact>
                            <div className="card-create-room">
                                {
                                    crearSalon ? <ModalCreateRoom /> : null
                                }
                                <div className="image">
                                    <img src={imgCreateSala} alt="" />
                                </div>
                                <div className="info-create-room-card">
                                    <h2>Crea una sala de estudios para el tema que estés
                        enseñando</h2>
                                    <button onClick={() => crearSala()}>Crear sala</button>
                                </div>
                            </div>
                            <div className="lead-container">
                                <div className="two-components">
                                    <div className="add-book">
                                        <a href="https://sites.google.com/view/digitalesarca" target="_blank" className="add-book-container">
                                            <img className="img-book"  src={imgLibros} alt="" />
                                            <h3>Añadir libro</h3>
                                            <small>Ingrese los códigos proporcionados</small>
                                        </a>
                                    </div>
                                    <Link to="/home/ejercicios" className="resources">
                                        <div className="resources-container">
                                            <img className="img-resources" src={imgResources} alt="" />
                                            <h3>Recursos</h3>
                                            <small>Encuentra recursos para tu clase</small>
                                        </div>
                                    </Link>
                                </div>
                                <div className="lateralData">
                                   <AdBanner/>
                                </div>
                            </div>
                        </Route>
                        <Route path="/home/classroom/:id" exact >
                            
                            <CourseTeacher salon="salon"/>
                        </Route>
                    </Switch>



                </div>
            </div>
        </Fragment>
    )
}

export default HomeTeacher
