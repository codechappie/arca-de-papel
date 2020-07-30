import React, { useState } from 'react'
import img from '../images/Recursos.png'
import Modal from 'react-modal'



const ModalStudent = () => {
    const validar = ()=>{
        
    }
    return (
       
        <div className="overlay-modal">
       
            <div className="card-modal-register">
            <button className="close-modal">✖</button>
                <h3 className="welcometo">Bienvenido a Arca de Papel </h3>
                <h6 className="modal-description">Para continuar porfavor complete su perfil</h6>
                <form>
                    <input type="text" placeholder="Nombre del colegio" />
                    <input type="text" placeholder="Distrito del colegio" />
                    <img src={img} alt="" />
                    <button className="btn-modal" onClick={ validar }>Continuar</button>
                </form>
            </div>
        </div>
       
    )
}

export default ModalStudent
