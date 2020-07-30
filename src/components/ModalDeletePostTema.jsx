import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {borrarComentarioTemaAccion} from '../redux/usuarioDuck'

const ModalDeletePostTema = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const {salonID,index,temaNombre} = props
   
    const {errorCode} = useSelector(store=>store.usuario)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const [error,setErrorRecuperar] = useState(null)
    useImperativeHandle(ref, () => {
        return {
            closeModalTema: () => closeModal(),
            openModalTema: () => openModal(),
        }
    }
    )


    const closeModal = () => {
        setModalIsOpen(false)
    }
    const openModal = () => {
        setModalIsOpen(true)
    }
    const borrarComentarioSalon = e=>{
        e.preventDefault()        
        setErrorRecuperar(null)
        dispatch(borrarComentarioTemaAccion(salonID,index,temaNombre))
        closeModal()

    }
    if (modalIsOpen) {
        return createPortal(
            <div className="modal-container"  >
                <div className="modverlay" onClick={closeModal} />
                <div className="card-modal-register">
                    <button className="close-modal"
                        onClick={() => closeModal()}>✖</button>
                    <h3 className="welcometo">Eliminar Comentario</h3>
                    <p>¿Estás seguro que deseas eliminar el comentario?</p>
                    <form onSubmit={e=>borrarComentarioSalon(e)}>
                        <div className="deleteModalOptions">
                        <button className="btn-modal" type="submit">Borrar</button>
                        <button className="btn-modal btn-cancel" onClick={() => closeModal()}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>, document.getElementById("modal-root")
        )
    }
    return null


})

export default ModalDeletePostTema
