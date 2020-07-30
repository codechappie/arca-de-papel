import React, { useState, Fragment, useRef, useEffect } from 'react'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'

import SideBarDocente from './SideBarDocente';
import StreamJitsi from './StreamJitsi';

const StreamDocente = () => {

    const dispatch = useDispatch()
    const { salones } = useSelector(store=>store.usuario)
    useEffect(()=>{
        dispatch(sesionActivaAccion())
    }, [])

    console.log(salones)
    return (
        <Fragment>
        <div className="menu-container">
                
           <div className="menu-overlay" />
                <SideBarDocente/>

                <div className="dashboard">
                  <StreamJitsi dataCourse={salones} />
                </div>
            </div>
        </Fragment>
    )
}

export default StreamDocente
