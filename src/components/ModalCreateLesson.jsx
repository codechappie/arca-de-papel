
import React, { useState, Fragment, forwardRef, useImperativeHandle } from 'react'
import img from '../images/Recursos.png'
import { createPortal } from 'react-dom';

//redux
import {useDispatch} from 'react-redux'
import {agregarTemaAccion} from '../redux/usuarioDuck'
const ModalCreateLesson = forwardRef((props, ref) => {
    const dispatch=useDispatch()
    const {salonID} = props
    const [error, setError] = useState('');
    const [tema, setTema] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            closeModal: () => closeModal(),
            openModal: () => openModal(),
        }
    }
    )


    const closeModal = () => {
        setModalIsOpen(false)
    }
    const openModal = () => {
        setModalIsOpen(true)
    }

    const agregarTema = async (e) => {
        e.preventDefault()
        if (!tema.trim() && !descripcion.trim()) {
            setError('Error en los campos')
        }
        const nuevoTema={
            tema,
            descripcion,
            comentarios:[]
        }
        dispatch(agregarTemaAccion(nuevoTema,salonID))
        setTema('')
        setDescripcion('')
        closeModal()
    }
    if (modalIsOpen) {
        return createPortal((<div className="modal-container" >
            <div className="modverlay" onClick={closeModal} />
            <div className="card-modal-register">
                <h3 className="welcometo">Crea un tema para su clase</h3>
                <form onSubmit={e => agregarTema(e)}>
                    {
                        error && (<div className="alert-error">
                            ¡Campos con errores!
                        </div>)
                    }
                    <input
                        type="text"
                        placeholder="Nombre del tema"
                        value={tema}
                        onChange={e => setTema(e.target.value)}
                    />
                    <textarea
                        placeholder="Descripcion de la clase"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    ></textarea>
                    <img src={img} alt="" />
                    <button className="btn-modal" type="submit">Continuar</button>
                </form>
            </div>
        </div>), document.getElementById("modal-root"))

    }
    return null
})
export default ModalCreateLesson
