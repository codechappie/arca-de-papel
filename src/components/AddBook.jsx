import React from 'react'
import imglibro from '../images/libros.png'

const AddBook = () => {
    return (
        <div className="add-book">
            <div className="add-book-container">
                <img src={imglibro} alt="" />
                <h3>Añadir libro</h3>
                <small>Ingrese los códigos proporcionados</small>
            </div>
        </div>
    )
}

export default AddBook
