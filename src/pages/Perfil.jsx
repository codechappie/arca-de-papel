
import React, { Fragment,useEffect, useState} from 'react'
import NavBar from '../components/NavBar';
import { withRouter,} from 'react-router-dom';
import {auth} from '../firebase'
//REDUX
import {useDispatch,useSelector} from 'react-redux'
import {cambiarPasswordAccion} from '../redux/usuarioDuck'
import imgProfile from '../images/img-profile.png'
import SideBarDocente from '../components/SideBarDocente';
import SideBarAlumno from '../components/SideBarAlumno';
const Perfil = (props) => {
    // const [oldPassword,setOldPassword] = useState('')
    // const [newPassword,setNewPassword] = useState('')
    // const [newPasswordConfirm,setNewPasswordConfirm] = useState('')
    const [emailPassword,setEmailPassword] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] =useState(false)
    const dispatch = useDispatch()
    const {tipo,nombres,email} = useSelector(store=>store.usuario)
    useEffect(()=>{
        if(!sessionStorage.getItem('usuario')){          
            props.history.push('/')
            
        }

    },[])

  
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
                                <img src={imgProfile} alt=""/>
                                <h4 className="title-left">Imagen de perfil</h4>
                           </div>
                        </div>
                        <div className="settings-card">
                            <h4>Elige tu imagen</h4>
                            <div className="profile-image">
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                    <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                                <div className="settings-image-profile">
                                   <button>
                                        <img src={imgProfile} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <button className="btn-upload-photo">Subir foto</button>
                        </div>
                        
                        <div className="settings-title">
                            <div className="settings-title-box">
                                <img src={imgProfile} alt=""/>
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

export default withRouter(Perfil)
