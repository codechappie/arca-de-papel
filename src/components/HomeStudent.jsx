import React, { useState, Fragment, useRef, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'

import imgCreateSala from '../images/image-create-room.png'
import imglibro from '../images/libros.png'

import ModalStudentJoin from '../components/ModalStudentJoin';
import CourseStudent from '../almacen/CourseStudent';
import SideBarAlumno from './SideBarAlumno';
import Stream from './StreamDocente'
import Exercises from './Exercises';
import AdBanner from './AdBanner';

const HomeStudent = () => {
    const classromLink = '/home/classroom/'
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(sesionActivaAccion())
    }, [])

   


    const modalJoinRef = useRef();
    const abrirModalJoin = () => {
        modalJoinRef.current.openModalJoin();
    }
    return (

        <Fragment>
            <ModalStudentJoin ref={modalJoinRef} />
            <div className="menu-container">

                <SideBarAlumno/>

                <div className="dashboard">
                    <Switch>
                    <Route path="/home/ejercicios" exact component={Exercises} />
                    <Route path="/home/classroom/:id" exact component={CourseStudent} />
                    <Route path="/home" exact>               
                   
                    <div className="card-create-room">
                        <div className="image">
                            <img src={imgCreateSala} alt="" />
                        </div>
                        <div className="info-create-room-card">
                            <h2>Unete a una sala de estudios con el código proporcionado por tu profesor</h2>
                            <button onClick={abrirModalJoin}>Unete a una sala</button>
                        </div>
                    </div>
                    <div className="lead-container">
                        <div className="feedlead-container">
                            <div className="two-components">
                                <a href="https://sites.google.com/view/digitalesarca" target="_blank" className="add-book">
                                    <div className="add-book-container">
                                        <img src={imglibro} alt="" />
                                        <h3>Añadir libro</h3>
                                        <small>Ingrese los códigos proporcionados</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="lateralData">
                            <AdBanner/>
                        </div>
                    </div>
                    </Route>
                    </Switch>
                </div>
            </div>

        </Fragment>
    )
}

export default HomeStudent
