import React, { useState, Fragment ,useEffect} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';

//REDUX 
import {registroDocenteAccion} from '../redux/usuarioDuck'

const RegistroDocente = (props) => {
    const dispatch = useDispatch();
    const {activo,errorCode} = useSelector(store=>store.usuario)
    const [email, setEmail] = useState('');
    const [nombres, setNombres] = useState('');
    const [codRegistro,setCodRegistro] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(null);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [seleccionados, setSeleccionados] = useState([]);
    const validacionCorreo = () => (emailRegex.test(email) ? true : setError('Ingrese un correo válido'));
    const validarPassword = () => (password === passwordConfirm) ? true : setError('Las constraseñas no coinciden');
    const validarLongitud = () => (password.length > 6) ? true : setError('Contraseña menor o igual a 6 dígitos');
    const validarNombreyApellido = () => (nombres.length < 40 && apellidos.length < 50) ? true : setError('Nombres o apellidos no permitidos');
    const validarSeleccionados = () => (seleccionados.length !== 0 ? true : setError('Seleccione un nivel de enseñanza'));
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
        const result = (validacionCorreo() && validarPassword() && validarLongitud() && validarNombreyApellido() && validarSeleccionados()) ? setError(null) : false;
        if (result !== false && error === null) {
            registrar(e);
        }

    }

    const limpiar = () => {
        setEmail('')
        setNombres('')
        setApellidos('')
        setPassword('')
        setPasswordConfirm('')
        setSeleccionados([])
        setCodRegistro('')
        setError(null)
    }
    const registrar = async (e) => {
        let salones = []
        e.preventDefault()
        let docente = {
            email,
            password,
            nombres,
            apellidos,
            codRegistro,
            salones,
            niveles: seleccionados,
            tipo:'Docente'
        }
        dispatch(registroDocenteAccion(docente))     
             

    }
    const seleccionItem = e => {

        if (e.target.checked) {

            setSeleccionados([...seleccionados, e.target.value]);

        } else {
            const arrayFiltrado = seleccionados.filter(item => item !== e.target.value);
            setSeleccionados(arrayFiltrado);

        }
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
                <input type="text" className=""
                    placeholder="Código de registro" 
                    onChange={e => setCodRegistro(e.target.value)}
                    value={codRegistro}/>
                <i className="fa fa-code"></i>
            </div>
            <div className="form-group">
                <input type="email" className=""
                    placeholder="Email (usuario)"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <i className="fa fa-at"></i>
            </div>
            <div className="form-group">
                <input type="text" className=""
                    placeholder="Nombres"
                    onChange={e => setNombres(e.target.value)}
                    value={nombres} />
                <i className="fa fa-user"></i>
            </div>
            <div className="form-group">
                <input type="text" className=""
                    placeholder="Apellidos"
                    onChange={e => setApellidos(e.target.value)}
                    value={apellidos} />
                <i className="fa fa-user"></i>
            </div>
            <div className="form-group">
                <input type="password" className=""
                    placeholder="Contraseña"
                    onChange={e => setPassword(e.target.value)}
                    value={password} />
                <i className="fa fa-lock"></i>
            </div>
            <div className="form-group">
                <input type="password" className=""
                    placeholder="Repita la contraseña"
                    onChange={e => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm} />
                <i className="fa fa-lock"></i>
            </div>
           
            <div className="checkboxes">
                <div className="custom-sq">
                    <input type="checkbox" value="Inicial" name="seleccion" id="box1" onChange={seleccionItem} />
                    <label htmlFor="box1">Inicial</label>
                </div>
                <div className="custom-sq">
                    <input type="checkbox" value="Primaria" name="seleccion" id="box2" onChange={seleccionItem} />
                    <label htmlFor="box2">Primaria</label>
                </div>
                <div className="custom-sq">
                    <input type="checkbox" value="Secundaria" name="seleccion" id="box3" onChange={seleccionItem} />
                    <label htmlFor="box3">Secundaria</label>
                </div>
            </div>
            <button className="btn-register" type="submit">
                Registrar
                        </button>
        </form>
        <small className="no-account">¿Tienes una cuenta?</small>
        <Link to="/" className="create-account">Iniciar sesión</Link>
        </Fragment>
    )
}

export default withRouter(RegistroDocente)
