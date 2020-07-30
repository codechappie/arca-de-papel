
import {auth} from '../firebase'
import React, { useState,useEffect, useRef} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Loading from '../components/Loading'
//REDUX
import {loginUserAccion,sesionActivaAccion} from '../redux/usuarioDuck'
import userImage from '../images/user.png'
import logo from '../images/logo.png'
import ModalTeacher from '../components/ModalTeacher'
import ModalRecoverPassword from '../components/ModalRecoverPassword'


   
const Login = (props) => {
    const emailState = useSelector(store=>store.usuario.email)
    const loading = useSelector(store=>store.usuario.loading)
    const errorCode = useSelector(store=>store.usuario.errorCode)
    const dispatch = useDispatch()  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const modalRecoverPass = useRef()

    useEffect(()=>{
        if(sessionStorage.getItem('usuario')){          
            props.history.push('/home')
            
        }

    },[])
    
    useEffect(()=>{
        
        if(emailState.trim()){
            props.history.push('/home');
        }
        if(errorCode){
            setError(errorCode)
        }
        
    },[emailState,errorCode])


    const openModalRecover = e => {
        e.preventDefault()
        modalRecoverPass.current.openModal();
    }

    const procesarDatos = e => {
        e.preventDefault();
        
        if (!email.trim() || !password.trim() || password.length < 6) {
            setError('Email o contraseña inválido')
            return
        }

        setEmail('');
        setPassword('');
        setError(null);
        login();
       

    }
    
    const login = async () => {      
        
        setIsOpen(true)
        dispatch(loginUserAccion(email,password))

    }

    return loading ? <Loading/>:(
        <section className="login-section">
            <nav>
                <div className="companyName">
                    <div className="companyName">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </nav>
            <div className="login-container">
                <div className="login-form-container">
                    <div className="image-user">
                        <img src={userImage} alt="" />
                    </div>
                    <form onSubmit={procesarDatos}>
                        <div className="alert alert-danger">
                            {
                                error && (
                                    <div className="alert-error">
                                        {error}
                                        <button style={{marginLeft:"5px"}} onClick={() => setError(null)}><i className="fa fa-times"></i></button>
                                    </div>
                                    )
                            }
                        </div>
                        <div className="form-group">
                            <input type="email"
                                className="form-control mb-2"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email} />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group">
                            <input type="password"
                                className="form-control mb-2"
                                placeholder="Contraseña"
                                onChange={e => setPassword(e.target.value)}
                                value={password} />
                            <i className="fa fa-lock"></i>
                        </div>
                        {/* <a href="#" className="remenber-me">Recordar contraseña</a> */}
                        
                        <div className="form-login">
                        <button className="btn-login" type="submit" >
                            Iniciar sesión
                        </button>
                        <button className="btn-recover-password" onClick={(e) => openModalRecover(e)}>¿Contraseña olvidada?</button>
                        </div>
                        <ModalRecoverPassword ref={modalRecoverPass} />
                        <small className="no-account">¿Aún no tienes cuenta?</small>
                        <Link to="/registro" className="create-account">Crear cuenta</Link>                        
                    </form>
                </div>
            </div>

        </section>

    )
}

export default withRouter(Login) 
