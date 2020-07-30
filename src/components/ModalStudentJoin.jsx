import React, { useState, forwardRef, useImperativeHandle,useEffect} from 'react'
import { createPortal } from 'react-dom'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {agregarCursoAccion} from '../redux/usuarioDuck'
import imgLogo from '../images/logo.png'


const ModalStudentJoin = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const errorCode = useSelector(store=>store.usuario.errorCode)
    const [codigo,setCodigo]=useState('')
    const [modalJoinIsOpen, setModalJoinIsOpen] = useState(false);
    const [error,setError] = useState(null)

    useImperativeHandle(ref, () => {
        return {
            closeModalJoin: () => closeModalJoin(),
            openModalJoin: () => openModalJoin(),
        }
    }
    )
    useEffect(()=>{
        setError(errorCode)
    },[errorCode])

    const closeModalJoin = () => {
        console.log("from modal")
        setModalJoinIsOpen(false)
    }
    const openModalJoin = () => {
        console.log("from modal")
        setModalJoinIsOpen(true)
    }
    const joinClassroom = async e=>{
        e.preventDefault()
        if(!codigo.trim()){
            setError('Ingrese código')
            return
        }
       dispatch(agregarCursoAccion(codigo))
       closeModalJoin()
    }
    if (modalJoinIsOpen) {
        return createPortal(
            <div className="modal-container"  >
                <div className="modverlay" onClick={closeModalJoin} />
                <div className="card-modal-register">
                    <button className="close-modal"
                        onClick={() => closeModalJoin()}>✖</button>
                    <img width="200px" src={imgLogo} alt="" />
                    <h3 className="welcometo">Unete a una clase</h3>
                    <p>Pega el código que tu profesor te ha proporcionado</p>
                    <form onSubmit={e=>joinClassroom(e)}>
                        <input className="show-code" type="text" value={codigo} onChange={e=>setCodigo(e.target.value)}/>

                        <button className="btn-modal" type="submit">Unirme</button>
                    </form>
                </div>
            </div>, document.getElementById("modal-root")
        )
    }
    return null


})

export default ModalStudentJoin