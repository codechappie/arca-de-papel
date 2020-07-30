
import React, {useEffect}from 'react'
import {Link,withRouter} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {auth} from '../firebase'
import {logOutUserAccion,sesionActivaAccion} from '../redux/usuarioDuck'

import imgUser from '../images/user.png'

const UserDropdownTools = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(sesionActivaAccion())
    },[])
    
    const {nombres,tipo,imagenPerfil} = useSelector(store=>store.usuario)
    const cerrarSesion = (e)=>{
        e.preventDefault();
        dispatch(logOutUserAccion())        
        props.history.push("/");
        sessionStorage.clear()
        auth.signOut()
    }
    const verAjustes = e=>{
        e.preventDefault()
        props.history.push("/ajustes")
    }

    return (

        <div className="drop-down-user">
        <div className="dw-user-profile">
            <div className="image">
                <img src={!imagenPerfil.trim() ? imgUser : imagenPerfil} alt="" />
            </div>
            <div className="dw-user-info">
                <a className="name-user strong">{nombres}</a>
                <a className="type-user">{tipo}</a>
            </div>
        </div>
       
        {/* <a href="#" className="dw-item border-top color-light-grey" onClick={e=>verPerfil(e)} >
            <h3 className="title">Ver perfil</h3>
            <i className="fa fa-user"></i>
        </a>
        
         */}
        <a href="#" className="dw-item border-top color-light-grey" onClick={e => verAjustes(e)}>
            <h3 className="title">Ajustes</h3>
            <i className="fa fa-cog"></i>
        </a>
        <a href="mailto:soporteplataforma@arcadepapel.net"
            className="dw-item border-top color-light-grey">
            <h3 className="title">Soporte</h3>
            <i className="fa fa-question-circle"></i>
        </a>
        <a href="#" className="dw-item border-top color-light-grey" onClick={(e)=>cerrarSesion(e)}>
            <h3 className="title">Cerrar sesión</h3>
            <i className="fa fa-sign-out"></i>
        </a>
    </div>

    )
}

export default withRouter(UserDropdownTools)
