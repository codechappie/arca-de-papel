import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import img from '../images/Recursos.png'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {sesionActivaAccion,actualizarDatosExtraAccion} from '../redux/usuarioDuck'

const ModalTeacher = forwardRef((props, ref) => {
    const [nombreColegio,setNombreColegio] = useState('')
    const [dni,setDni] = useState('')
    const [telefono,setTelefono] = useState('')
    const [distritoColegio,setDistritoColegio] = useState('')
    const dispatch = useDispatch()
    const [modalIsOpen, setModalIsOpen] = useState(true)  
    

    useEffect(()=>{
        dispatch(sesionActivaAccion())
    },[])

    useImperativeHandle(ref, () => {
        return {
            closeModal: () => closeModal(),
            openModal: () => openModal(),
        }
    }
    )

   
    
    const procesarRegistroFinal = e => {
        e.preventDefault();
        const datos = {
            nombreColegio,
            dni,
            telefono,
            distritoColegio
        }
        dispatch(actualizarDatosExtraAccion(datos))
        if (!nombreColegio.trim()&&!dni.trim()&&!telefono.trim()&&!distritoColegio.trim()){
            openModal()
            return
        }else{
            closeModal()
          }
        
    }
      

    const closeModal = () => {
        setModalIsOpen(false)
    }
    const openModal = () => {
        setModalIsOpen(true)
    }

    if (modalIsOpen) {
        return createPortal(
            <div className="modal-container" >
                <div className="modverlay"/>
                <div className="card-modal-register">
                    <h3 className="welcometo">Bienvenido a Arca de Papel </h3>
                    <h6 className="modal-description">Para continuar porfavor complete su perfil</h6>
                    <form onSubmit={e => procesarRegistroFinal(e)}>
                        <input 
                        type="text" 
                        placeholder="Nombre del colegio" 
                        value={nombreColegio} 
                        onChange={e=>setNombreColegio(e.target.value)}/>
                        <input 
                        type="text" 
                        placeholder="Distrito del colegio"
                        value={distritoColegio} 
                        onChange={e=>setDistritoColegio(e.target.value)} />
                        <input 
                        type="text" 
                        placeholder="DNI" 
                        value={dni} 
                        onChange={e=>setDni(e.target.value)}/>
                        <input 
                        type="text" 
                        placeholder="Telefono" 
                        value={telefono} 
                        onChange={e=>setTelefono(e.target.value)}/>
                        <img src={img} alt="" />
                        <button className="btn-modal" type="submit">Continuar</button>
                    </form>
                </div>
            </div>, document.getElementById("modal-root")
        )
    }
    return null


})

export default ModalTeacher
