import React, { useState, Fragment, forwardRef, useImperativeHandle } from 'react'
import img from '../images/Recursos.png'
//REDUX 
import { useDispatch, useSelector } from 'react-redux'
import { agregarSalonAccion } from '../redux/usuarioDuck'
import { createPortal } from 'react-dom'
import { NavLink} from 'react-router-dom'


const ModalCreateRoom = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const { uid } = useSelector(store => store.usuario)
    const [color, setColor] = useState('');
    const [grado, setGrado] = useState('');
    const [seccion, setSeccion] = useState('');
    const [curso, setCurso] = useState('');
    const [nivel, setNivel] = useState('');
    const [modalCreateRoomIsOpen, setModalCreateRoomIsOpen] = useState(false);
    const [colorActive, setColorActive] = useState('')

    useImperativeHandle(ref, () => {
        return {
            closeModalCRoom: () => closeModalCreateRoom(),
            openModalCRoom: () => openModalCreateRoom(),
        }
    }
    )

    const closeModalCreateRoom = () => {
        setModalCreateRoomIsOpen(false)
    }
    const openModalCreateRoom = () => {
        setModalCreateRoomIsOpen(true)
    }


    const colorSeleccionado = e => {
        e.preventDefault();
        setColorActive(e.target.value)
        setColor(e.target.value);
    }
    const nivelSeleccionado = e => {
        e.preventDefault();
    }
    const cursoSeleccionado = e => {
        e.preventDefault();
        setCurso(e.target.value);
    }
    const subirSalon = async (e) => {
        e.preventDefault()
        if (color !== "" && !grado.trim() && !seccion.trim() && !curso.trim() && !nivel.trim()) {
            return
        }
        
        dispatch(agregarSalonAccion({
            alumnos: [],
            nivel,
            docente: uid,
            grado,
            seccion:seccion.toUpperCase(),
            curso,
            color,
            comentarios:[],
            temas:[]
        }))
        
        closeModalCreateRoom();
    }

    if (modalCreateRoomIsOpen) {
        return createPortal(

            <div className="modal-container"  >
                <div className="modverlay" onClick={closeModalCreateRoom}/>
                <div className="card-modal-register">
                <h3 className="welcometo">Crea tu clase</h3>
                <form>

                    <input type="text" placeholder="Grado" value={grado} onChange={e => setGrado(e.target.value)} />
                    <input type="text" placeholder="Seccion" value={seccion} onChange={e => setSeccion(e.target.value)} />
                    <div className="content-select">
                        <select onChange={(e) => nivelSeleccionado(e)}>
                            <option>Seleccione un nivel</option>
                            {

                            }
                            <option value="Inicial">Inicial</option>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                        </select>
                        <i></i>
                    </div>
                    <div className="content-select">
                        <select onChange={(e) => cursoSeleccionado(e)}>
                            <option>Seleccione un curso</option>
                            <option value="Computacion">Computación</option>
                            <option value="Arte">Arte</option>
                            <option value="Personal Social">Personal Social</option>
                            <option value="Matematica">Matemática</option>
                            <option value="Comunicacion">Comunicación</option>
                            <option value="Ciencia y Tecnologia">Ciencia y Tecnología</option>
                            <option value="Ingles">Inglés</option>
                            <option value="Computacion">Computación</option>
                            <option value="Innovacion y Emprendimiento">Innovación y Emprendimiento</option>
                        </select>
                        <i></i>
                    </div>
                    <div className="color-chooser">
                        <h3>Selecciona un color</h3>
                        <div className={`colors active${colorActive}`}>
                            <button className="btn-color violet" value="violet" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color red" value="red" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color blue" value="blue" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color yellow" value="yellow" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color green" value="green" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color skyblue" value="skyblue" onClick={(e) => colorSeleccionado(e)}></button>
                            <button className="btn-color pink" value="pink" onClick={(e) => colorSeleccionado(e)}></button>
                        </div>
                    </div>
                    <img src={img} alt="" />
                    <button className="btn-modal" onClick={e => subirSalon(e)}>Continuar</button>
               </form>
               </div>
            </div>, document.getElementById("modal-root"))
    }
    return null
})

export default ModalCreateRoom
