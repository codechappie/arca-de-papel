import React, {  Fragment,useEffect } from 'react'
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {sesionActivaAccion} from '../redux/usuarioDuck'
import NavBar from '../components/NavBar';
import HomeTeacher from '../components/HomeTeacher';
import HomeStudent from '../components/HomeStudent';

const Home = (props) => {
    const dispatch = useDispatch()
    const {tipo} = useSelector(store=>store.usuario)
    useEffect(()=>{
        if(!sessionStorage.getItem('usuario')){          
            props.history.push('/')
            
        }

    },[])
    useEffect(()=>{
        dispatch(sesionActivaAccion())
       
    },[tipo])
    return (

        <Fragment>
            <NavBar />
            {
               tipo === 'Alumno' ? <HomeStudent/> :<HomeTeacher/>
            }
            

        </Fragment>
    )
}

export default withRouter(Home)
