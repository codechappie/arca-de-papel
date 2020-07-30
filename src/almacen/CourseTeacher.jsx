import React, { Fragment, useRef, useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { agregarComentarioSalonDocenteAccion, agregarComentarioTema, escucharSalon, escucharTema, escucharTemasSalon } from '../redux/usuarioDuck'

import imgParticipants from '../images/participants.jpg'
import imgLiveClass from '../images/live-class.png'
import imgResource from '../images/Recursos.png'
import imgUser from '../images/user.png'
import ModalCreateLesson from '../components/ModalCreateLesson';
import AdBanner from '../components/AdBanner';
import ModalAddStudent from '../components/ModalAddStudent';
import ModalDeletePost from '../components/ModalDeletePost';
import ModalDeletePostTema from '../components/ModalDeletePostTema';
import UserList from '../components/UserList';

const CourseTeacher = (props) => {
    const location = useLocation();
    const dispatch = useDispatch()
    const { uid, tipo, nombres, apellidos, salon, temas, imagenPerfil } = useSelector(store => store.usuario)
    const temaNew = useSelector(store => store.usuario.tema)
    const [salonNew, setSalonNew] = useState(false)
    const [comentario, setComentario] = useState('')
    const [tema, setTema] = useState(false)
    const [comentariosTema, setComentariosTema] = useState([])
    const [temaNombre, setTemaNombre] = useState('')
    const [indexArray, setIndexArray] = useState(false)
    const [alumnosArray, setAlumnosArray] = useState([])
    const [participantsIsOpen, setParticipantsIsOpen] = useState(false)
    const { id } = useParams();
    const modalDeletePost = useRef()
    const modalDeletePostTema = useRef()


    useEffect(() => {
        
        dispatch(escucharSalon(id))
        dispatch(escucharTemasSalon(id))
        setSalonNew(salon)
        setTema(false)
    }, [location]);

    useEffect(() => {
        setComentariosTema(temaNew.comentarios)
        setTemaNombre(temaNew.tema)
    }, [temaNew])

    const modalRef = useRef();
    const modalAddStudent = useRef();

    const abriModal = () => {
        modalRef.current.openModal();

    }

    const addStudent = () => {
        modalAddStudent.current.openModalSt();

    }

    const agregarComentario = e => {
        e.preventDefault()
        if (!comentario.trim()) {
            return
        }
        const comentarioCurso = {
            comentario,
            fecha: Date.now(),
            nombres,
            apellidos,
            tipo,
            curso: salon.curso
        }
        if (tema !== false) {
            dispatch(agregarComentarioTema(salon.id, tema, comentarioCurso))
        } else {
            dispatch(agregarComentarioSalonDocenteAccion(comentarioCurso, salon.id))
        }

        setComentario('')

    }

    const vistaTema = (e, item) => {
        e.preventDefault()
        dispatch(escucharTema(id, item.tema))
        setTema(item.tema)
        setComentariosTema(item.comentarios)

    }

    const deletePost = (e, index) => {
        e.preventDefault()
        setIndexArray(index)

        modalDeletePost.current.openModal()

    }
    /**NEW */
    const deletePostTema = (e, index) => {
        e.preventDefault()
        setIndexArray(index)
        modalDeletePostTema.current.openModalTema()

    }


    const showParticipants = () => {
        setParticipantsIsOpen(!participantsIsOpen)
        console.log(salon.alumnos)
        setAlumnosArray(salon.alumnos)
    }

    return !salonNew ? <Loading /> : (
        <Fragment>

            <ModalCreateLesson ref={modalRef} salonID={id} idDocente={uid} />

            <ModalAddStudent ref={modalAddStudent} salonID={id} />

            <ModalDeletePost ref={modalDeletePost} salonID={id} index={indexArray} />

            <ModalDeletePostTema ref={modalDeletePostTema} salonID={id} index={indexArray} temaNombre={temaNombre} />

            <div className="dashboard">

                <div className="card-classroom">
                    <div className="info-classroom-card">
                        <span className={`color ${salon.color}`}></span>
                        <h2 className="courseName">{salon.curso} {!tema ? null : `- ${tema}`}</h2>
                        <h3>{salon.grado}° - {salon.seccion}</h3>
                        <h4><i className="fa fa-lock"></i> Código de la clase: {salon.id}</h4>
                        <ul>
                            {
                                temas.map((item, index) => (
                                    <li key={index}>
                                        <button onClick={e => vistaTema(e, item)}>{item.tema}</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <button className="floatButton" onClick={() => abriModal()}>+</button>
                </div>
                <div className="lead-container">
                    <div className="feedlead-container">
                        <div className="two-components-ls">
                            <Link to="/streamming" target="_blank" className="card-remote">
                                <div className="card-remote-container">
                                    <div className="detail">
                                        <h4>¿Enseñas de manera remota?</h4>
                                        <p>¡Arca de papel te ayuda brindandote herramientas!</p>
                                    </div>
                                    <div className="image">
                                        <img src={imgResource} alt="" />
                                    </div>
                                </div>
                            </Link>
                            <div className="card-participants" onClick={() => showParticipants()}>
                                <div className="card-participants-container">
                                    <div className="image">
                                        <img src={imgParticipants} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h4>Integrantes del aula</h4>
                                        <p>Ve los alumnos conectados a tu clase</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {
                        participantsIsOpen ? (<div className="user-list-section">
                            <h2>Integrantes del grupo</h2>
                            <div className="two-components">
                                {
                                    alumnosArray.map((user, index) => (
                                        <div className="user-list-card" key={index}>
                                            <div className="image">
                                                <img src={imgUser} alt=""></img>
                                            </div>
                                            <div className="userlist-info">
                                                <h4>{user.nombres} {user.apellidos}</h4>
                                                <h6>{user.tipo}</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>) : (
                            <div className="field-post">
                            <div className="user-profile">
                                <div className="image">
                                    <img src={imgUser} alt="" />
                                </div>
                            </div>
                            <form className="input-field" onSubmit={e => agregarComentario(e)}>
                                <textarea
                                    placeholder="Comience una discusión, comparta materiales de clase, etc."
                                    value={comentario}
                                    onChange={e => setComentario(e.target.value)}
                                ></textarea>
                                <button type="submit" className="btn-upload-file"><i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                        )
                        }
                        
                        {
                            !participantsIsOpen && (
                                !tema  ? (
                                    salon.comentarios === undefined ? <Loading /> : (salon.comentarios.map((comentario, index) => (
                                        <div className="post-card" key={index}>
                                            <div className="post-card-header">
                                                <div className="user-profile">
                                                    <div className="image">
                                                        <img src={imgUser} alt="" />
                                                    </div>
                                                </div>
                                                <div className="user-information">
                                                    <div className="main-headding-post">
                                                        <div className="post-header-container">
                                                            <h3 className="nameUser strong">{comentario.nombres} {comentario.apellidos}
                                                                <span className="published"> publicado en {comentario.curso}</span>
                                                            </h3>
                                                            <h6 className="published strong">
                                                                {comentario.tipo}
                                                                <small className="date-post"> el {`${new Date(comentario.fecha).toLocaleDateString()} - ${new Date(comentario.fecha).toLocaleTimeString()}`}</small>
                                                            </h6>
                                                        </div>
                                                        <div className="extra-post">
                                                            <button onClick={e => deletePost(e, index)} className="delete-post"><i className="fa fa-remove"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-card-body">
                                                <div className="post-data">
                                                    <p>{comentario.comentario}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    )) : (
                                        comentariosTema === undefined ? <Loading /> : (comentariosTema.map((comentario, index) => (
                                            <div className="post-card" key={index}>
                                                <div className="post-card-header">
                                                    <div className="user-profile">
                                                        <div className="image">
                                                            <img src={imgUser} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="user-information">
                                                        <div className="main-headding-post">
                                                            <div className="post-header-container">
                                                                <h3 className="nameUser strong">{comentario.nombres} {comentario.apellidos}
                                                                    <span className="published"> publicado en {comentario.curso}</span>
                                                                </h3>
                                                                <h6 className="published strong">
                                                                    {comentario.tipo}
                                                                    <small className="date-post"> el {new Date(comentario.fecha).toLocaleDateString()} - {new Date(comentario.fecha).toLocaleTimeString()}</small>
                                                                </h6>
                                                            </div>
                                                            <div className="extra-post">
                                                                <button onClick={e => deletePostTema(e, index)} className="delete-post"><i className="fa fa-remove"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-card-body">
                                                    <div className="post-data">
                                                        <p>{comentario.comentario}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )))
                                    )
                            )
                        }

                    </div>
                    <div className="lateralData">
                        <a className="add-student" onClick={() => addStudent()}>
                            <div className="add-student-container">
                                <img src={imgLiveClass} alt="" />
                                <h3>Añadir alumno</h3>
                                <small>Participa en las clases virtuales</small>
                            </div>
                        </a>
                        <AdBanner />
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default CourseTeacher