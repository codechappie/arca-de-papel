import React, { useEffect } from 'react'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'

import imgUser from '../images/user.png'

const UserList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(sesionActivaAccion())
    }, [])
    const { nombres, tipo ,imagenPerfil} = useSelector(store => store.usuario)

    return (
        <div className="user-list-section">
            <h2>Integrantes del grupo</h2>
            <div className="two-components">
                <div className="user-list-card">
                    <div className="image">
                        <img src={!imagenPerfil.trim() ? imgUser : imagenPerfil} alt=""></img>
                    </div>
                    <div className="userlist-info">
                        <h4>Anthony Ramos</h4>
                        <h6>Profesor</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList
