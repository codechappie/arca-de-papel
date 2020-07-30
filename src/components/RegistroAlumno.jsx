import React, { useState, Fragment ,useEffect} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';

//REDUX 
import {registroAlumnoAccion} from '../redux/usuarioDuck'

const RegistroAlumno = (props) => {
    const dispatch = useDispatch();
    const {activo,errorCode} = useSelector(store=>store.usuario)
    const [email, setEmail] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [password, setPassword] = useState('');
    const [codLibro,setCodLibro] = useState('');
    const [emailPadre, setEmailPadre] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(null);
    const [registro,setRegistro] = useState(false);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const validacionCorreo = () => (emailRegex.test(email) ? true : setError('Ingrese un correo válido'));
    const validarPassword = () => (password === passwordConfirm) ? true : setError('Las constraseñas no coinciden');
    const validarNombreyApellido = () => (nombres.length < 40 && apellidos.length < 50) ? true : setError('Nombres o apellidos no permitidos');
    const validarLongitud = () => (password.length > 6) ? true : setError('Contraseña menor o igual a 6 dígitos');
    const validacionCorreoPadre = () => (emailRegex.test(emailPadre) ? true : setError('Correo del padre o tutor inválido'));
    useEffect(()=>{
        if(activo){
            setError('')
            props.history.push('/');
            alert('Registro realizado con exito, confirme su correo para ingresar');
        }
        if(errorCode!==null){
            setError(errorCode)
        }
       
    },[activo,errorCode])

    const validarFormulario = e => {
        e.preventDefault();
        const result = (validacionCorreo() && validarPassword() && validarLongitud() && validarNombreyApellido() && validacionCorreoPadre()) ? setError(null) : false;
        if (result !== false && error === null) {
            registrar();
            setRegistro(true);
        }

    }
    const limpiar = () => {
        setEmail('');
        setNombres('');
        setApellidos('');
        setPassword('');
        setPasswordConfirm('');
        setEmailPadre('');
        setCodLibro('');
        setError(null);
       // setRegistro(false);
    }

    const registrar = async () => {
        let cursos = []
        let alumno = {
            email,
            password,
            nombres,
            apellidos,
            emailPadre,
            codLibro,
            cursos,
            tipo:'Alumno'

        }
        dispatch(registroAlumnoAccion(alumno))  

    }
    return (
       
        <Fragment>
            <form onSubmit={e => validarFormulario(e)} className="registro-form">
                {
                    error && (
                        <div className="alert-error">
                            {error}
                            <button onClick={() => setError(null)}><i className="fa fa-times"></i></button>
                        </div>
                    )
                }
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Código de libro" 
                        onChange={e => setCodLibro(e.target.value)}
                        value={codLibro}/>
                    <i className="fa fa-lock"></i>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email (usuario)"
                        onChange={e => setEmail(e.target.value)} />
                        <i className="fa fa-at"></i>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nombres"
                        onChange={e => setNombres(e.target.value)} />
                        <i className="fa fa-user"></i>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Apellidos"
                        onChange={e => setApellidos(e.target.value)} />
                        <i className="fa fa-user"></i>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Contraseña"
                        onChange={e => setPassword(e.target.value)} />
                        <i className="fa fa-lock"></i>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Repita la contraseña"
                        onChange={e => setPasswordConfirm(e.target.value)} />
                        <i className="fa fa-lock"></i>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Email del padre o tutor"
                        onChange={e => setEmailPadre(e.target.value)} />
                        <i className="fa fa-at"></i>
                </div>









                <button className="btn-register" type="submit">Registrarse</button>
            </form>
            <small className="no-account">¿Tienes una cuenta?</small>
            <Link to="/" className="create-account">Iniciar sesión</Link>
        </Fragment>
    )
}

export default withRouter(RegistroAlumno)
