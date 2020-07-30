import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

import imgLogo from '../images/logo.png'


const ModalAddStudent = forwardRef((props, ref) => {

    //poner el codigo automaticamente segun el salon donde estes
    // en redux el salon actual tmbn debe ser un estado
    const {salonID} = props;
    const [modalStudentIsOpen, setModalStudentIsOpen] = useState(false)
  
    useImperativeHandle(ref, () => {
        return {
            closeModalSt: () => closeModalStudent(),
            openModalSt: () => openModalStudent(),
        }
    }
    )


    const closeModalStudent = () => {
       
        setModalStudentIsOpen(false)
    }
    const openModalStudent = () => {
        
        setModalStudentIsOpen(true)
    }

    if (modalStudentIsOpen) {
        return createPortal(
            <div className="modal-container"  >
                <div className="modverlay" onClick={closeModalStudent} />
                <div className="card-modal-register">
                    <button className="close-modal"
                        onClick={() => closeModalStudent()}>✖</button>
                    <img width="200px" src={imgLogo} alt="" />
                    <h3 className="welcometo">Invite a sus alumnos a la clase</h3>
                    <p>Comparta el código para agregar alumnos a su clase</p>
                    <form>
                        <input className="show-code" type="text" value={salonID} contentEditable="false" onChange={e=>console.log(e)}/>
                        <p>Invite alumnos o maestros a unirse a su uls enviandoles
                            un correo electrónico.
                            Recibirán instrucciones sobre cómo unirse a matemática.
                        </p>
                        <textarea placeholder="Ingrese email"></textarea>
                        <button className="btn-modal">Enviar</button>
                    </form>
                </div>
            </div>, document.getElementById("modal-root")
        )
    }
    return null


})

export default ModalAddStudent