
import React, { Fragment,useEffect, useState} from 'react'
import { withRouter,} from 'react-router-dom';

//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {cambiarPasswordAccion,actualizarImagenColegioAccion,actualizarImagenPerfilAccion} from '../redux/usuarioDuck'

import imgProfileImage from '../images/profile_image_settings.png'
import imgPassword from '../images/password_settings.png'
import imgTrash from '../images/trash_settings.png'
import imgChild1 from '../images/child1.png'
import imgChild2 from '../images/child2.png'
import imgChild3 from '../images/child3.png'
import imgChild4 from '../images/child4.png'
import imgChild5 from '../images/child5.png'
import imgChild6 from '../images/child6.png'
import imgChild7 from '../images/child7.png'
import imgChild8 from '../images/child8.png'
import imgChild9 from '../images/child9.png'
import imgChild10 from '../images/child10.png'
import imgChild11 from '../images/child11.png'
import imgChild12 from '../images/child12.png'
import imgSchoolLogo from '../images/img-school-logo.png'

import NavBar from '../components/NavBar';
import SideBarDocente from '../components/SideBarDocente';
import SideBarAlumno from '../components/SideBarAlumno';
const Ajustes = (props) => {
    // const [oldPassword,setOldPassword] = useState('')
    // const [newPassword,setNewPassword] = useState('')
    // const [newPasswordConfirm,setNewPasswordConfirm] = useState('')
    const [emailPassword,setEmailPassword] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] =useState(false)
    const [imagen,setImagen] = useState(null)
    const dispatch = useDispatch()
    const {tipo,nombres,email} = useSelector(store=>store.usuario)
    useEffect(()=>{
        if(!sessionStorage.getItem('usuario')){          
            props.history.push('/')
            
        }

    },[])

    const seleccionarArchivo = (e) => {
       
        
        setImagen(e.target.files[0])
    
        if(imagen === undefined || imagen === null){
            
            return
        }
    
        
    }
    const subirImagenColegio = e=>{
        e.preventDefault()
        if(imagen.type === 'image/jpeg' || imagen.type === 'image/png'){
            dispatch(actualizarImagenColegioAccion(imagen))       
            setError(false) 
            }else{
           
            setError('Formato de archivo incorrecto')
            return
            }
    }
    const subirImagenPerfil = e=>{
        e.preventDefault()
        if(imagen.type === 'image/jpeg' || imagen.type === 'image/png'){
            dispatch(actualizarImagenPerfilAccion(imagen))       
            setError(false) 
            }else{
           
            setError('Formato de archivo incorrecto')
            return
            }
    }
    const changePassword =async e=>{
        
        e.preventDefault()
        if(email===emailPassword){
            setError(null)
            dispatch(cambiarPasswordAccion(emailPassword))
            alert("Verifique su correo electrónico para cambiar la contraseña")
        }else{
            setError('Email ingresado incorrecto')
        }
        
    }
    const changeEmail = e=>{
        e.preventDefault()
    }
    const deleteUser = e=>{
        e.preventDefault()
    }
    return (
        
        <Fragment>
            <NavBar />
           <div className="menu-container">
               {
                   tipo==='Docente' ? <SideBarDocente/> : <SideBarAlumno/>
               } 

                <div className="dashboard">
                    <div className="settings-container">
                        <div className="settings-title">
                           <div className="settings-title-box">
                                <img src={imgProfileImage} alt=""/>
                                <h4 className="title-left">Imagen de perfil</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                            <h4 className="mb-5">Elige tu imagen</h4>
                            <div className="profile-image">
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild1} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild2} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild3} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                    <button>
                                        <img src={imgChild4} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild5} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild6} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild7} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild8} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild9} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild10} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild11} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgChild12} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={e=>subirImagenPerfil(e)}>
                                    
                                <input
                                    type="file"
                                    className="inputUploadFile"
                                    onChange={e => seleccionarArchivo(e)}
                                required />
                                <button type="submit" className="btn-upload-photo">Subir foto</button>
                            </form>
                        </div>
                        
    {/* Logo escolar inicio */}                      
                        <div className="settings-title">
                            <div className="settings-title-box">
                                <img src={imgSchoolLogo} alt=""/>
                                <h4 className="title-left">Logo escolar</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                                <h4>Personalice el logo de su plataforma</h4>
                                <p>Tamaño máximo de 200x200 pixeles</p>
                                {
                                    error ? (<p>{error}</p>) : null
                                }
                                <form onSubmit={e=>subirImagenColegio(e)}>
                                    
                                     <input
                                      type="file"
                                      className="inputUploadFile"
                                      onChange={e => seleccionarArchivo(e)}
                                     required />
                                    <button type="submit" className="btn-change-info">Guardar</button>
                                </form>
                        </div>
                        
{/* Logo escolar fin */}

                        <div className="settings-title">
                            <div className="settings-title-box">
                                <img src={imgPassword} alt=""/>
                                <h4 className="title-left">Cambiar contraseña</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                                <h4>Cambie su contraseña</h4>
                                <p>Cambie su contraseña periodicamente para mayor seguridad</p>
                                {
                                    error ? (<p>{error}</p>) : null
                                }
                                <form onSubmit={e=>changePassword(e)}>
                                    {/* <input 
                                    placeholder="Contraseña antigua"
                                    type="password" 
                                    value={oldPassword}
                                    onChange={e=>setOldPassword(e.target.value)}/>
                                    <input 
                                    placeholder="Contraseña nueva"
                                    type="password" 
                                    value={newPassword}
                                    onChange={e=>setNewPassword(e.target.value)}/>
                                    <input 
                                    placeholder="Confirmar nueva contraseña"
                                    type="password" 
                                    value={newPasswordConfirm}
                                    onChange={e=>setNewPasswordConfirm(e.target.value)}
                                    /> */}
                                     <input
                                      type="text"
                                      placeholder="Correo electrónico registrado"
                                      value={emailPassword}
                                      onChange={e=>setEmailPassword(e.target.value)}
                                     />
                                    <button type="submit" className="btn-change-info">Cambiar</button>
                                </form>
                        </div>
                      
                        {/* <div className="settings-title">
                            <div className="settings-title-box">
                                <img src={imgProfile} alt=""/>
                                <h4 className="title-left">Cambiar email</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                            <h4>Cambiar su direccion de email</h4>
                            <p>Actualmente su email es {email}</p>
                            <form onSubmit={e=>changeEmail(e.target.value)}>
                                <input
                                 type="text" 
                                 placeholder="Nuevo email"
                                 value={newEmail}
                                 onChange={e=>setNewEmail(e.target.value)}
                                 />
                                <input
                                 type="password" 
                                 placeholder="Contraseña Arca Virtual"
                                 value={password}
                                 onChange={e=>setPassword(e.target.value)}
                                 />
                                <button type="submit" className="btn-change-info">Cambiar</button>
                            </form>
                        </div> */}

                        {/* <div className="settings-title">
                            <div className="settings-title-box">
                                <img src={imgProfile} alt=""/>
                                <h4 className="title-left">Borrar cuenta</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                            <h4>Borrar {nombres} permanentemente</h4>
                            <p>Ten cuidado esto borrará todos tus datos y no puede revertirse</p>
                            <button className="btn-change-info" onClick={e=>deleteUser(e)}>Borrar cuenta</button>
                        </div> */}
                    </div>
                </div>
            </div>
       </Fragment>
    )
}

export default withRouter(Ajustes)
