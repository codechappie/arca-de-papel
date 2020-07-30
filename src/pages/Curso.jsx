

//validacion de rutas
//token de sesion

import React, { useContext,  Fragment } from 'react'

import NavBar from '../components/NavBar';
import HomeTeacher from '../components/HomeTeacher';
import HomeStudent from '../components/HomeStudent';
import CourseTeacher from '../almacen/CourseTeacher';
import CourseStudent from '../almacen/CourseStudent';

const Curso = () => {
   
    
   
    return (

        <Fragment>
        <NavBar />
            {/* {
                appContext.tipo === 'Alumno' ? <CourseStudent/> :<CourseTeacher/>
            } */}

        <CourseTeacher/>
        </Fragment>
    )
}

export default Curso
