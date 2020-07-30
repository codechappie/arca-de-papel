import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef((props, ref) => {


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

    if(modalIsOpen){
       return createPortal(
                <div className="modal-container"  >
                    <div className="modverlay" onClick={closeModal}/>
                        <div className="card-modal-register">
                                <button className="close-modal" 
                                onClick={() => closeModal()}>✖</button>
                                {props.children}
                        </div>
                </div>, document.getElementById("modal-root")
        )
    } 
    return null

    
})

export default Modal
