import React from 'react'
import imgAlumno from '../images/alumno.png'

const AddStudent = () => {
    return (
        <div className="add-student">
            <div className="add-student-container">
                <img src={imgAlumno} alt="" />
                <h3>Añadir alumno</h3>
                <small>Agrega alumnos a tu clase virtual</small>
            </div>
        </div>
    )
}

export default AddStudent
