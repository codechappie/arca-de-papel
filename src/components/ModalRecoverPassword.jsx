import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {recuperarPasswordAccion} from '../redux/usuarioDuck'

const ModalRecoverPassword = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const {errorCode} = useSelector(store=>store.usuario)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [emailRecuperar,setEmailRecuperar] = useState('')
    const [error,setErrorRecuperar] = useState(null)
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
    const recuperarPassword = e=>{
        e.preventDefault()
        if(!emailRecuperar.trim()){
            setErrorRecuperar('Email invalido')
            return
        }
        setErrorRecuperar(null)
        dispatch(recuperarPasswordAccion(emailRecuperar))
        closeModal()

    }
    if (modalIsOpen) {
        return createPortal(
            <div className="modal-container"  >
                <div className="modverlay" onClick={closeModal} />
                <div className="card-modal-register">
                    <button className="close-modal"
                        onClick={() => closeModal()}>✖</button>
                    <h3 className="welcometo">Recuperar contraseña</h3>
                    <p>Coloca el correo electrónico con el que te registraste</p>
                    {error&&(<p>{error}</p>)}
                    <form onSubmit={e=>recuperarPassword(e)}>
                        <input 
                        type="email" 
                        placeholder="nombre@ejemplo.com"
                        value={emailRecuperar}
                        onChange={e=>setEmailRecuperar(e.target.value)}
                         />

                        <button className="btn-modal" type="submit">Recuparar</button>
                    </form>
                </div>
            </div>, document.getElementById("modal-root")
        )
    }
    return null


})

export default ModalRecoverPassword
