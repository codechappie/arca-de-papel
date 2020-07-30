import React, { useState, Fragment, useRef, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'


import SideBarAlumno from './SideBarAlumno';
import StreamJutsu from './StreamJutsu';

const StreamAlumno = () => {
    
    const dispatch = useDispatch()
    const { cursos } = useSelector(store=>store.usuario)
    useEffect(()=>{
        dispatch(sesionActivaAccion())
    }, [])

    console.log(cursos)
    return (
        <Fragment>
        <div className="menu-container">
                
           <div className="menu-overlay" />
                <SideBarAlumno/>

                <div className="dashboard">
                  <StreamJutsu dataCourse={cursos} />
                </div>
            </div>
        </Fragment>
    )
}

export default StreamAlumno
