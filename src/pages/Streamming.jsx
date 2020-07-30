import React, {  Fragment,useEffect } from 'react'

//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {sesionActivaAccion} from '../redux/usuarioDuck'
import NavBar from '../components/NavBar';
import StreamAlumno from '../components/StreamAlumno'
import StreamDocente from '../components/StreamDocente'

const Streamming = () => {
    const dispatch = useDispatch()
    const {tipo} = useSelector(store=>store.usuario)

    useEffect(()=>{
        dispatch(sesionActivaAccion())
       
    },[tipo])
    return (

        <Fragment>
            <NavBar />
            {
               tipo === 'Alumno' ? <StreamAlumno/> :<StreamDocente/>
            }
            

        </Fragment>
    )
}

export default Streamming
