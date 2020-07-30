import React, { Fragment, useEffect, useState } from 'react'
import { Link, Route, Switch, NavLink } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'
import imgUser from '../images/user.png'

const SideBarDocente = () => {
    const classromLink = '/home/classroom/'
 
    
    const { nombres, apellidos, salones ,imagenPerfil} = useSelector(store => store.usuario)
    const [mostrarHome, setMostrarHome] = useState(true)
    const [mostrarSalones, setMostrarSalones] = useState(false)
    const [mostrarLibros, setMostrarLibros] = useState(false)
    const [mostrarMensajes, setMostrarMensajes] = useState(false)
    const [mostrarArchivados, setMostrarArchivados] = useState(false)
    const [mostrarStreamming, setMostrarStreamming] = useState(false)
    const [mostrarEjercicios, setMostrarEjercicios] = useState(false)
    const [showItems, setShowItems] = useState(false)

    const clasesHomeActivo = () => {
        setMostrarHome(true)
        setMostrarSalones(false)
        setMostrarLibros(false)
        setMostrarMensajes(false)
        setMostrarArchivados(false)
        setMostrarStreamming(false)
        setMostrarEjercicios(false)
    }
    const clasesSalonesActivo = () => {
        
        setMostrarSalones(true)
        setMostrarHome(false)
        setMostrarLibros(false)
        setMostrarMensajes(false)
        setMostrarArchivados(false)
        setMostrarEjercicios(false)
        setMostrarStreamming(false)
    }
    const clasesSalonesMostrar = () => {
        setMostrarSalones(true)
        setMostrarHome(false)
        setMostrarLibros(false)
        setMostrarMensajes(false)
        setMostrarArchivados(false)
        setMostrarEjercicios(false)
        setMostrarStreamming(false)
        setShowItems(!showItems)
    }
    const clasesLibrosActivo = () => {
        setMostrarLibros(true)
        setMostrarHome(false)
        setMostrarSalones(false)
        setMostrarArchivados(false)
        setMostrarMensajes(false)
        setMostrarStreamming(false)
        setMostrarEjercicios(false)
    }
    const clasesMensajesActivo = () => {
        setMostrarMensajes(true)
        setMostrarHome(false)
        setMostrarSalones(false)
        setMostrarLibros(false)
        setMostrarArchivados(false)
        setMostrarStreamming(false)
        setMostrarEjercicios(false)
    }
    const clasesArchivadosActivo = () => {
        setMostrarArchivados(true)
        setMostrarHome(false)
        setMostrarSalones(false)
        setMostrarLibros(false)
        setMostrarMensajes(false)
        setMostrarStreamming(false)
        setMostrarEjercicios(false)
    }
    const clasesStreammingActivo = () => {
        setMostrarStreamming(true)
        setMostrarMensajes(false)
        setMostrarHome(false)
        setMostrarSalones(false)
        setMostrarLibros(false)
        setMostrarArchivados(false)
        setMostrarEjercicios(false)
    }
    const clasesEjerciciosActivo = () => {
        setMostrarEjercicios(true)
        setMostrarStreamming(false)
        setMostrarMensajes(false)
        setMostrarHome(false)
        setMostrarSalones(false)
        setMostrarLibros(false)
        setMostrarArchivados(false)
    }


    const abrirSalon = () => {
        console.log('abrir salon, notificando al provider');
    }
    return (
        <Fragment>
            <div className="side-menu" >
                <div className="card-menu">
                    <div className="profile-image">
                        <img src={!imagenPerfil.trim() ? imgUser : imagenPerfil} alt="" />
                    </div>
                    <div className="user-info">
                        <h3>{nombres}</h3>
                        <small>{apellidos}</small>
                    </div>
                </div>
                <div className="card-menu-items">
                    <div className="items-container">
                        <div className="item-container">
                            <Link to="/home" className={`item ${mostrarHome && 'active'}`} onClick={clasesHomeActivo}>
                                <i className="fa fa-home"></i>
                                <h5>Inicio</h5>
                            </Link>
                        </div>
                        <div className="item-container">
                            <div className={`item ${mostrarSalones && 'active'}`} 
                                            onClick={clasesSalonesMostrar}>
                                <i className="fa fa-folder-open"></i>
                                <h5>Mis salones ({salones.length})</h5>
                            </div>
                            <div 
                            className={`item-details ${showItems ? '' : 'dont-show-items'}`}>

                                {
                                    salones.map(salon => (

                                        <Link to={classromLink.concat(salon.id) }
                                            className="sub-item" key={salon.id} onClick={clasesSalonesActivo}>
                                            <span className={salon.color}> </span>
                                            <h5>{salon.curso} {salon.grado}°- {salon.seccion.toUpperCase()}</h5>
                                        </Link>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="item-container">
                            <a href="https://sites.google.com/view/digitalesarca" target="_blank" className={`item ${mostrarLibros && 'active'}`} >
                                <i className="fa fa-book"></i>
                                <h5>Libros</h5>
                            </a>
                            {/* <div className="item-details">
                                    
                                    <div className="sub-item" onClick={clasesLibrosActivo}>
                                        <h5>- Personal Social 3°</h5>
                                    </div>
                                    <div className="sub-item">
                                        <h5>- Matemática 2° primaria</h5>
                                    </div>
                                </div> */}
                        </div>
                        <div className="item-container">
                            <Link to="/streamming" target="_blank" className={`item ${mostrarStreamming && 'active'}`}>
                                <i className="fa fa-play-circle"></i>
                                <h5>Transmisión </h5>
                            </Link>
                        </div>
                        <div className="item-container">
                            <Link to="/home/ejercicios" className={`item ${mostrarEjercicios && 'active'}`} onClick={clasesEjerciciosActivo} >
                                <i className="fa fa-puzzle-piece"></i>
                                <h5>Ejercicios</h5>
                            </Link>
                        </div>
                        {/* <div className="item-container">
                            <Link to="" className={`item ${mostrarMensajes && 'active'}`} onClick={clasesMensajesActivo} >
                                <i className="fa fa-envelope"></i>
                                <h5>Mensajes</h5>
                            </Link>
                        </div>
                        <div className="item-container">
                            <Link to="" className={`item ${mostrarArchivados && 'active'}`} onClick={clasesArchivadosActivo}>
                                <i className="fa fa-archive"></i>
                                <h5>Archivos</h5>
                            </Link>
                        </div> */}
                    </div>
                    <div className="menu-footer">
                        <div className="support-cener">
                            <a href="mailto:soporteplataforma@arcadepapel.net"><h6>Centro de ayuda</h6></a>
                        </div>  
                        <div className="social-networking-sites">
                            <a href="https://twitter.com/arcadepapeleir" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.facebook.com/editorialarcadepapel/" target="_blank"><i className="fa fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/arca.de.papel" target="_blank"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SideBarDocente