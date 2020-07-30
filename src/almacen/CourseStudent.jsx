import React, { Fragment, useRef, useEffect, useState } from 'react'

import { Link, Route, useParams, Switch, useLocation } from 'react-router-dom';
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { agregarComentarioSalonAlumnoAccion, agregarComentarioTema,escucharSalon, escucharTemasSalon ,escucharTema} from '../redux/usuarioDuck'

import imgLiveClass from '../images/live-class.png'
import imgRecursos from '../images/Recursos.png'
import imgUser from '../images/user.png'
import ModalStudentJoin from '../components/ModalStudentJoin';
import ModalDeletePost from '../components/ModalDeletePost';
import ModalDeletePostTema from '../components/ModalDeletePostTema';
import AdBanner from '../components/AdBanner';


const CourseStudent = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const {tipo, nombres, apellidos, salon, temas } = useSelector(store => store.usuario)
    const temaNew = useSelector(store => store.usuario.tema)
    const [curso, setCurso] = useState(false)
    const [comentario, setComentario] = useState('')
    const [tema, setTema] = useState(false)
    const [comentariosTema, setComentariosTema] = useState([])
    const [indexArray, setIndexArray] = useState(false)
    const [temaNombre,setTemaNombre] = useState('')
    const { id } = useParams();
    const modalDeletePost = useRef()
    const modalDeletePostTema = useRef()
    useEffect(() => {
        dispatch(escucharSalon(id))
        dispatch(escucharTemasSalon(id))
        setCurso(salon)
        setTema(false)

    }, [location])
    useEffect(()=>{
        setComentariosTema(temaNew.comentarios)
        setTemaNombre(temaNew.tema)
    },[temaNew])
    const modalRef = useRef();


    const abriModal = () => {
        modalRef.current.openModal();
        console.log()
    }
    const agregarComentario = e => {
        e.preventDefault()
        if (!comentario.trim()) {
            return
        }
        console.log(curso);
        const comentarioCurso = {
            comentario,
            fecha: Date.now(),
            nombres,
            apellidos,
            tipo,
            curso: salon.curso
        }
        if (tema !== false) {
            dispatch(agregarComentarioTema(id, tema, comentarioCurso))
        }else{
            dispatch(agregarComentarioSalonAlumnoAccion(comentarioCurso, id))
        }
        
        setComentario('')
    }

    const deletePost = (e) => {
        e.preventDefault()
        setIndexArray()

        modalDeletePost.current.openModal()

    }
    const vistaTema = (e, item) => {
        e.preventDefault()
        dispatch(escucharTema(id, item.tema))
        setTema(item.tema)
        setComentariosTema(item.comentarios)
        
    }

    const deletePostTema = (e, index) => {
        e.preventDefault()
        setIndexArray(index)

        modalDeletePostTema.current.openModal()

    }
    return !curso ? <Loading /> : (
        <Fragment>


            <ModalStudentJoin ref={modalRef} />

            <ModalDeletePost ref={modalDeletePost} salonID={id} index={indexArray} />

            <ModalDeletePostTema ref={modalDeletePostTema} salonID={id} />

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
                   
                </div>
                <div className="lead-container">
                    <div className="feedlead-container">
                        <div className="two-components">
                        <a href="https://sites.google.com/view/digitalesarca" 
                        target="_blank" className="add-book add-book-student">
                            <div className="add-book-container">
                                <img src={imgRecursos} alt="" />
                                <h3>Temas</h3>
                                <small>Revisa las clases anteriores</small>
                            </div>
                        </a>
                        <div className="add-book add-book-student">
                            <Link className="add-book-container" to="/streamming" target="_blank">
                                <img src={imgLiveClass} alt="" />
                                <h3>Clase en vivo</h3>
                                <small>Participa en las clases virtuales</small>
                            </Link>
                        </div>
                        </div>
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
                        {
                            !tema ? (
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
                                                            <small className="date-post"> el {new Date(comentario.fecha).toLocaleDateString()}</small>
                                                        </h6>
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
                                                            <small className="date-post"> el {new Date(comentario.fecha).toLocaleDateString()}</small>
                                                        </h6>
                                                    </div>
                                                        <div className="extra-post">
                                                            <button onClick={e => deletePostTema(e,index)} className="delete-post"><i className="fa fa-remove"></i></button>
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
                        }
                        </div>
                    <div className="lateralData">
                    <AdBanner/>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default CourseStudent
