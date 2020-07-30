import {auth,db,storage} from '../firebase'
//data inicial
const dataInicial = {
    loading:false,
    activo:false,
    uid:"",
    nombres:"",
    apellidos:"",
    email:"",
    salon:{},
    tema:{},
    temas:[],
    ////DOCENTE
    nombreColegio:"",
    distritoColegio:"",
    telefono:"",
    dni:"",
    salones:[],
    niveles:[],
    codRegistro:"",
    ///////ALUMNO
    cursos:[],
    codLibro:"",
    correoPadre:"",
    grado:"",
    seccion:"",    
    ////diferencia
    tipo:"",
    //errores
    errorCode:null,
    //flag
    flag:false,
    imagenColegio:"",
    imagenPerfil:""
}
const key='8QbF4HgTXC'
//db

//types
const LOADING = 'LOADING'
const LOADING_FINISH = 'LOADING_FINISH'
const LOGIN_USER_OK = "LOGIN_USER_OK"
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
const REGISTRO_DOCENTE_OK = 'REGISTRO_DOCENTE_OK'
const REGISTRO_DOCENTE_ERROR = 'REGISTRO_DOCENTE_ERROR'
const REGISTRO_ALUMNO_OK = 'REGISTRO_ALUMNO_OK'
const REGISTRO_ALUMNO_ERROR = 'REGISTRO_ALUMNO_ERROR'
const LOGOUT = 'LOGOUT'
const AGREGAR_SALON_OK = 'AGREGAR_SALON_OK'
const AGREGAR_SALON_ERROR = 'AGREGAR_SALON_ERROR'
const AGREGAR_CURSO_OK = 'AGREGAR_CURSO_OK'
const AGREGAR_CURSO_ERROR = 'AGREGAR_CURSO_ERROR'
const AGREGAR_COMENTARIO_DOCENTE_OK = 'AGREGAR_COMENTARIO_DOCENTE_OK'
const AGREGAR_COMENTARIO_DOCENTE_ERROR = 'AGREGAR_COMENTARIO_DOCENTE_ERROR'
const AGREGAR_COMENTARIO_ALUMNO_OK = 'AGREGAR_COMENTARIO_ALUMNO_OK'
const AGREGAR_COMENTARIO_ALUMNO_ERROR = 'AGREGAR_COMENTARIO_ALUMNO_ERROR'
const AGREGAR_TEMA_OK = 'AGREGAR_TEMA_OK'
const AGREGAR_TEMA_ERROR = 'AGREGAR_TEMA_ERROR'
const AGREGAR_COMENTARIO_TEMA_DOCENTE_OK = 'AGREGAR_COMENTARIO_TEMA_OK'
const AGREGAR_COMENTARIO_TEMA_DOCENTE_ERROR = 'AGREGAR_COMENTARIO_TEMA_ERROR'
const AGREGAR_COMENTARIO_TEMA_ALUMNO_OK = 'AGREGAR_COMENTARIO_TEMA_OK'
const AGREGAR_COMENTARIO_TEMA_ALUMNO_ERROR = 'AGREGAR_COMENTARIO_TEMA_ERROR'
const CAMBIO_PASSWORD_OK = 'CAMBIO_PASSWORD_OK'
const CAMBIO_PASSWORD_ERROR = 'CAMBIO_PASSWORD_ERROR'
const ACTUALIZAR_DATOS_EXTRAS_OK = 'ACTUALIZAR_DATOS_EXTRAS_OK'
const ACTUALIZAR_DATOS_EXTRAS_ERROR = 'ACTUALIZAR_DATOS_EXTRAS_ERROR'
const ACTUALIZAR_IMAGEN_COLEGIO_OK = 'ACTUALIZAR_IMAGEN_COLEGIO_OK'
const ACTUALIZAR_IMAGEN_COLEGIO_ERROR = 'ACTUALIZAR_IMAGEN_COLEGIO_ERROR'
const ACTUALIZAR_IMAGEN_PERFIL_OK = 'ACTUALIZAR_IMAGEN_PERFIL_OK'
const ACTUALIZAR_IMAGEN_PERFIL_ERROR = 'ACTUALIZAR_IMAGEN_PERFIL_ERROR'
const NUEVA_DATA_SALON_OK = 'NUEVA_DATA_SALON_OK'
const NUEVA_DATA_SALON_ERROR = 'NUEVA_DATA_SALON_ERROR'
const NUEVA_DATA_TEMA_OK = 'NUEVA_DATA_TEMA_OK'
const NUEVA_DATA_TEMA_ERROR = 'NUEVA_DATA_TEMA_ERROR'
const RECUPERAR_PASSWORD_OK = 'RECUPERAR_PASSWORD_OK'
const RECUPERAR_PASSWORD_ERROR = 'RECUPERAR_PASSWORD_ERROR'
const CARGAR_TEMAS_SALON_OK = 'CARGAR_TEMAS_SALON_OK'
const CARGAR_TEMAS_SALON_ERROR = 'CARGAR_TEMAS_SALON_ERROR'
const BORRAR_COMENTARIO_SALON_OK = 'BORRAR_COMENTARIO_SALON_OK'
const BORRAR_COMENTARIO_SALON_ERROR = 'BORRAR_COMENTARIO_SALON_ERROR'
const BORRAR_COMENTARIO_TEMA_OK = 'BORRAR_COMENTARIO_TEMA_OK'
const BORRAR_COMENTARIO_TEMA_ERROR = 'BORRAR_COMENTARIO_TEMA_ERROR'
const EDITAR_PERFIL_OK = 'EDITAR_PERFIL_OK'
const PRUEBA = 'PRUEBA'


//reducer
export default function usuarioReducer(state=dataInicial,action){
    switch (action.type) {
        case LOGOUT:
            return {...dataInicial}
        case LOADING:
            return {...state,loading:true}
        case LOADING_FINISH:
                return {...state,loading:false}
        case REGISTRO_DOCENTE_OK:
          return {...state,activo:action.payload.activo,errorCode:action.payload.errorCode}
        case REGISTRO_DOCENTE_ERROR:
              return {...dataInicial,errorCode:action.payload}
        case REGISTRO_ALUMNO_OK:
                return {...state,activo:action.payload.activo,errorCode:action.payload.errorCode}
        case REGISTRO_ALUMNO_ERROR:
                    return {...dataInicial,errorCode:action.payload}
        case LOGIN_USER_OK:
            return {...state,...action.payload}
        case LOGIN_USER_ERROR:
            return {...state,errorCode:action.payload}
        case AGREGAR_SALON_OK:
            return {...state,salones:action.payload}
        case AGREGAR_CURSO_OK:
                return {...state,cursos:action.payload}
        case AGREGAR_CURSO_ERROR:
                    return {...state,errorCode:action.payload}
        case AGREGAR_COMENTARIO_DOCENTE_OK:
            return {...state,salones:action.payload}
        case AGREGAR_COMENTARIO_DOCENTE_ERROR:
            return {...state,errorCode:action.payload}
        case AGREGAR_COMENTARIO_ALUMNO_OK:
                return {...state,cursos:action.payload}
        case AGREGAR_COMENTARIO_ALUMNO_ERROR:
                return {...state,errorCode:action.payload}
        case AGREGAR_TEMA_OK:
                    return {...state,salones:action.payload}
        case AGREGAR_TEMA_ERROR:
                    return {...state,errorCode:action.payload}
        case AGREGAR_COMENTARIO_TEMA_DOCENTE_OK:
                    return {...state,salones:action.payload}
        case AGREGAR_COMENTARIO_TEMA_DOCENTE_ERROR:
                    return {...state,errorCode:action.payload}
        case AGREGAR_COMENTARIO_TEMA_ALUMNO_OK:
                        return {...state,cursos:action.payload}
        case AGREGAR_COMENTARIO_TEMA_ALUMNO_ERROR:
                    return {...state,errorCode:action.payload}  
        case CAMBIO_PASSWORD_OK:
                    return {...state}     
        case CAMBIO_PASSWORD_ERROR:
                        return {...state}
        case ACTUALIZAR_DATOS_EXTRAS_OK:
                    return {...state,...action.payload}     
        case ACTUALIZAR_DATOS_EXTRAS_ERROR:
                        return {...state,errorCode:action.payload}  
        case ACTUALIZAR_IMAGEN_COLEGIO_OK: 
                        return {...state,imagenColegio:action.payload}            
        case ACTUALIZAR_IMAGEN_COLEGIO_ERROR: 
                        return {...state,errorCode:action.payload} 
        case ACTUALIZAR_IMAGEN_PERFIL_OK:
            return {...state,imagenPerfil:action.payload}
        case NUEVA_DATA_SALON_OK:
                            return {...state,salon:action.payload}  
        case NUEVA_DATA_TEMA_OK:
                            return {...state,tema:action.payload}
        case RECUPERAR_PASSWORD_OK:
                            return {...state}
        case CARGAR_TEMAS_SALON_OK:
                return {...state,temas:action.payload}
        case CARGAR_TEMAS_SALON_ERROR:
                return {...state,errorCode:action.payload}
        case BORRAR_COMENTARIO_SALON_OK:
             return {...state}
        case BORRAR_COMENTARIO_SALON_ERROR:
                return {...state}
        case RECUPERAR_PASSWORD_ERROR:
                return {...state,errorCode:action.payload}
                         
       case PRUEBA:
            return {...state,temas:action.payload}
        
        default:
                return {...state}
    }

}
//actions
export const registroDocenteAccion = (docente)=> async (dispatch)=>{
  
    try {
       
        const {email,password,nombres,apellidos,codRegistro,salones,niveles,tipo}=docente

        const validacionCodigo = await db.collection('codigos').where('codigo',"==",codRegistro).where('usado',"==",false).get()

        if(validacionCodigo.empty){
            throw Error;
        }
        await db.collection('codigos').doc(validacionCodigo.docs[0].id).update({
            usado:true
        })
        const res = await auth.createUserWithEmailAndPassword(email,password);
       
        await db.collection('usuarios').doc(res.user.uid).set({
                uid:res.user.uid,
                email,
                nombres,
                apellidos,
                codRegistro,
                salones,
                niveles,
                tipo
                
        })
        dispatch({
            type:REGISTRO_DOCENTE_OK,
            payload:{
                activo:true,
                errorCode:null
            }
        })

        //poner un dispatch que setee activo a false
    } catch (error) {
        let errorCode =''
        if(error.code==="auth/email-already-in-use"){
            errorCode='Correo en uso'
        }else{
            errorCode="El código ya fue usado o no existe"
        }
        dispatch({
            type:REGISTRO_DOCENTE_ERROR,
            payload:errorCode
        })
    }
}
export const registroAlumnoAccion = (alumno)=> async (dispatch)=>{
  
    try {
       
        const {email,password,nombres,apellidos,codLibro,cursos,emailPadre,tipo}=alumno
        
        const res = await auth.createUserWithEmailAndPassword(email,password);
      
        await db.collection('usuarios').doc(res.user.uid).set({
                uid:res.user.uid,
                email,
                nombres,
                apellidos,
                codLibro,
                cursos,
                emailPadre,
                tipo
                
        })
        dispatch({
            type:REGISTRO_ALUMNO_OK,
            payload:{
                activo:true,
                errorCode:null
            }
        })
    } catch (error) {
        console.log(error)
        let errorCode =''
        if(error.code==="auth/email-already-in-use"){
            errorCode='Correo en uso'
        }
        dispatch({
            type:REGISTRO_ALUMNO_ERROR,
            payload:errorCode
        })
    }
}

export const loginUserAccion = (email,password)=>async (dispatch)=>{  
     

    dispatch({
        type:LOADING
    })
    try {
        const res = await auth.signInWithEmailAndPassword(email,password)
        const user = await db.collection('usuarios').doc(res.user.uid).get()
      
        dispatch({
            type:LOGIN_USER_OK,
            payload:user.data()
        })
        sessionStorage.setItem('usuario',JSON.stringify(user.data()))
        localStorage.setItem(key,JSON.stringify(true))
        // localStorage.setItem('ja', '123');
        dispatch({
            type:LOADING_FINISH
        })
    } catch (error) {
        dispatch({
            type:LOADING_FINISH
        })
        dispatch({
            type:LOGIN_USER_ERROR,
            payload:'Correo o contraseña incorrecto'
        })
    }
}
export const logOutUserAccion = ()=> (dispatch)=>{
    dispatch({
        type:LOGOUT
    })
    localStorage.clear()
}

export const sesionActivaAccion = ()=>async(dispatch)=>{
    if(sessionStorage.getItem('usuario') || auth.currentUser){
        dispatch({
            type:LOGIN_USER_OK,
            payload:JSON.parse(sessionStorage.getItem('usuario'))
        })
        
    }else{
        dispatch({
            type:LOADING_FINISH
        })
       
    }
}

export const agregarSalonAccion = (salon)=> async (dispatch,getState)=>{
    const {salones,uid} = getState().usuario
    try {
        const data = await db.collection('salones').add(salon)  
        const salonConId = {...salon,id:data.id}      
        salones.push(salonConId)
        await db.collection('salones').doc(data.id).update({
            id:data.id
        })
        await db.collection('usuarios').doc(uid).update({
            salones
          })     
        dispatch({
            type:AGREGAR_SALON_OK,
            payload:salones
        })
       
       sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        dispatch({
            type:AGREGAR_SALON_ERROR
        })
    }
}

export const agregarCursoAccion = (codigo)=>async (dispatch,getState)=>{
   
    const {cursos,uid,nombres,apellidos,tipo,email,emailPadre,codLibro} = getState().usuario
    try {
        const alumno = {
            uid,
            nombres,
            apellidos,
            tipo,
            email,
            codLibro,
            emailPadre,
            cursos:JSON.stringify(cursos)
        }
        const salonRef = await db.collection('salones').doc(codigo).get()
       
        const {alumnos} = salonRef.data()
        //verificar si ya está matriculado
        if(alumnoExisteEnCurso(alumno,alumnos)){
            dispatch({
                type:AGREGAR_CURSO_ERROR,
                payload:'Ya perteneces al curso'
            })
            return
        }
        //agregar a alumnos del salon
        alumnos.push(alumno)
        //agregar a cursos del alumno
        cursos.push({...salonRef.data(),alumnos,id:codigo})
      
        //actualizar cursos del alumno
        await db.collection('usuarios').doc(uid).update({
           cursos
          })  
        //actualizar alumnos de salon
        await db.collection('salones').doc(codigo).update({
            alumnos
           })  
        dispatch({
            type:AGREGAR_CURSO_OK,
            payload:cursos
        })
       
      sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        console.log(error)
        dispatch({
            type:AGREGAR_CURSO_ERROR,
            payload:'Código incorrecto'
        })
    }
}

export const agregarComentarioSalonDocenteAccion = (comentarioCurso,salonID)=>async(dispatch,getState)=>{
    const {salones,uid} = getState().usuario
    try {
        const salonRef = await db.collection('salones').doc(salonID).get()
        const {comentarios} = salonRef.data()
        //agregar comentario al salon
        comentarios.unshift(comentarioCurso)
                
        const salonesFiltrado = salones.map(item=>(item.id===salonID?{...item,comentarios}:item))
        //actualizando en db
        await db.collection('salones').doc(salonID).update({
           comentarios
           }) 
        await db.collection('usuarios').doc(uid).update({
            salones:salonesFiltrado
           })  
        dispatch({
            type:AGREGAR_COMENTARIO_DOCENTE_OK,
            payload:salonesFiltrado
        })
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        console.log(error)
        dispatch({
            type:AGREGAR_COMENTARIO_DOCENTE_ERROR,
            payload:'Error al agregar comentario'
        })
    }
}

export const agregarComentarioSalonAlumnoAccion = (comentarioCurso,salonID)=>async(dispatch,getState)=>{
    
    const {cursos,uid} = getState().usuario
    
    try {
        const salonRef = await db.collection('salones').doc(salonID).get()
        const {comentarios} = salonRef.data()
        console.log(comentarios)
        //agregar comentario al salon
        comentarios.unshift(comentarioCurso)
        const cursosFiltrado = cursos.map(item=>(item.id===salonID?{...item,comentarios}:item))
        console.log(cursosFiltrado)
        //actualizando en db
        await db.collection('salones').doc(salonID).update({
           comentarios
           }) 
        await db.collection('usuarios').doc(uid).update({
            cursos:cursosFiltrado
           })  
        dispatch({
            type:AGREGAR_COMENTARIO_ALUMNO_OK,
            payload:cursosFiltrado
        })
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        console.log(error)
        dispatch({
            type:AGREGAR_COMENTARIO_ALUMNO_ERROR,
            payload:'Error al agregar comentario'
        })
    }
}

export const agregarTemaAccion = (tema,salonID) => async (dispatch,getState)=>{
    const {salones,uid} = getState().usuario
    try {
        const salonRef = await db.collection('salones').doc(salonID).get()
        const {temas} = salonRef.data()
        //agregar comentario al salon
        temas.push(tema)
        const salonesFiltrado = salones.map(item=>(item.id===salonID?{...item,temas}:item))
        //actualizando en db
        await db.collection('salones').doc(salonID).update({
           temas
           }) 
        await db.collection('temas').add({
            comentarios:[],
            salonID,
            tema:tema.tema
        })
        await db.collection('usuarios').doc(uid).update({
            salones:salonesFiltrado
           })  
        dispatch({
            type:AGREGAR_TEMA_OK,
            payload:salonesFiltrado
        })
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        console.log(error)
        dispatch({
            type:AGREGAR_TEMA_ERROR,
            payload:'Error al agregar tema'
        })
    }
}
export const agregarComentarioTemaDocenteAccion = (comentario,salonID,tema) => async (dispatch,getState)=>{
    try {
            const {salones,uid} = getState().usuario
        
            const salonRef = await db.collection('salones').doc(salonID).get()
            const {temas} = salonRef.data()
            //agregar comentario al salon   
            const comentarios = temas.comentarios.filter(item=>item.tema===tema)[0]
            comentarios.push(comentario)
            const temasFiltrado = temas.map(item=>(item.tema===tema ? {...item,comentarios} : item))         
            const salonesFiltrado = salones.map(item=>(item.id===salonID?{...item,temas:temasFiltrado}:item))
            //actualizando en db
            await db.collection('salones').doc(salonID).update({
               temas:temasFiltrado
               })
            
            await db.collection('usuarios').doc(uid).update({
                salones:salonesFiltrado
               })  
            dispatch({
                type:AGREGAR_COMENTARIO_TEMA_DOCENTE_OK,
                payload:salonesFiltrado
            })
            sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        console.log(error)
        dispatch({
            type:AGREGAR_COMENTARIO_TEMA_DOCENTE_ERROR,
            payload:'Error al comentario en tema'
        })
    }
}

export const cambiarPasswordAccion = (emailUsuario) => async (dispatch,getState)=>{
    const {email} = getState().usuario
    try {
        if(email!==emailUsuario){
            dispatch({
                type:CAMBIO_PASSWORD_ERROR,
                payload:'Correo ingresado no es el registrado'
            })
            return
        }
        await auth.sendPasswordResetEmail(emailUsuario)
        dispatch({
            type:CAMBIO_PASSWORD_OK,            
        })
    } catch (error) {
        dispatch({
            type:CAMBIO_PASSWORD_ERROR,            
        })
    }
}
export const recuperarPasswordAccion = (emailUsuario) => async (dispatch)=>{
    
    try {
        
        await auth.sendPasswordResetEmail(emailUsuario)
        dispatch({
            type:RECUPERAR_PASSWORD_OK,            
        })
        alert('Revise su correo para recuperar su contraseña')
    } catch (error) {
        dispatch({
            type:RECUPERAR_PASSWORD_ERROR,  
            payload:'Error al recuperar la contraseña'          
        })
    }
}

export const actualizarDatosExtraAccion = (datos) => async (dispatch,getState)=>{
    const {uid} = getState().usuario
    try {
        await db.collection('usuarios').doc(uid).update({
           ...datos 
        })
        dispatch({
            type:ACTUALIZAR_DATOS_EXTRAS_OK,
            payload:datos
        })
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
        dispatch({
            type:ACTUALIZAR_DATOS_EXTRAS_ERROR,
            payload:error
        })
        console.log(error)
    }
}
export const actualizarImagenColegioAccion = (imagenEditada) => async (dispatch,getState)=>{
    const {uid} = getState().usuario
    try {
        const refImagen = storage.ref().child(uid).child('foto_colegio')
        await refImagen.put(imagenEditada)
        const urlDescarga = await refImagen.getDownloadURL()

        await db.collection('usuarios').doc(uid).update({
            imagenColegio: urlDescarga
        })

        dispatch({
            type:ACTUALIZAR_IMAGEN_COLEGIO_OK,
            payload:urlDescarga
        })
        alert("Imagen de colegio actualizada")
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
            console.log(error)
    }
}
export const actualizarImagenPerfilAccion = (imagenEditada) => async (dispatch,getState)=>{
    const {uid} = getState().usuario
    try {
        const refImagen = storage.ref().child(uid).child('foto_perfil')
        await refImagen.put(imagenEditada)
        const urlDescarga = await refImagen.getDownloadURL()

        await db.collection('usuarios').doc(uid).update({
            imagenPerfil: urlDescarga
        })

        dispatch({
            type:ACTUALIZAR_IMAGEN_PERFIL_OK,
            payload:urlDescarga
        })
        alert("Imagen de perfil actualizada")
        sessionStorage.setItem('usuario',JSON.stringify(getState().usuario))
    } catch (error) {
            console.log(error)
    }
}
export const escucharSalon = (salonID)=>async(dispatch)=>{
    try {
        db.collection('salones').doc(salonID)
            .onSnapshot(doc=>{
                dispatch({
                    type:NUEVA_DATA_SALON_OK,
                    payload:doc.data()
                })
                dispatch({
                    type:PRUEBA,
                    payload:[]
                })
                
            })
    } catch (error) {
        
    }
}
export const escucharTemasSalon = (salonID) => async (dispatch)=>{
    try {
       
        db.collection('temas')
        .where("salonID","==",salonID)    
        .onSnapshot(querySnapshot=>{
            let temas = []
            querySnapshot.docs.forEach(doc=>{
                
                temas.push(doc.data())
                dispatch({
                    type:CARGAR_TEMAS_SALON_OK,
                    payload:temas
                })
             
            })
        }) 
    } catch (error) {
        
    }
}
export const escucharTema = (salonID,tema)=>async(dispatch)=>{
    try {
      
        db.collection('temas')
        .where("salonID","==",salonID)      
        .where("tema","==",tema)
        .onSnapshot(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                
                dispatch({
                    type:NUEVA_DATA_TEMA_OK,
                    payload:{...doc.data(),comentarios:doc.data().comentarios.reverse()}
                })
                console.log("data actual: "+doc.data())
            })
        }) 
    } catch (error) {
        
    }
}
export const agregarComentarioTema = (salonID,tema,comentario) => async (dispatch)=>{
    try {
      
        db.collection('temas')
        .where("salonID","==",salonID)      
        .where("tema","==",tema)
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                let comentarios = doc.data().comentarios
                comentarios.push(comentario)
              
                db.collection('temas').doc(doc.id).update({
                    comentarios,
                    temaID:doc.id
                })
                
                
            })
        }) 
    } catch (error) {
        
    }
}

export const borrarComentarioTemaAccion = (salonID,indexComentario,temaNombre)=>async (dispatch)=>{
    try {
        db.collection('temas')
        .where("salonID","==",salonID)      
        .where("tema","==",temaNombre)
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                let comentarios = doc.data().comentarios
                const comentariosInvertido = comentarios.reverse()
                const newComentarios = comentariosInvertido.filter((item,index)=>(index!==indexComentario))
              
                db.collection('temas').doc(doc.id).update({
                    comentarios:newComentarios.reverse()
                })
                
                
            })
        }) 
              
       dispatch({
           type:BORRAR_COMENTARIO_TEMA_OK
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type:BORRAR_COMENTARIO_TEMA_ERROR
        })
    }
}
export const borrarComentarioSalonAccion = (salonID,indexComentario)=>async (dispatch)=>{
    try {
        
       const res = await db.collection('salones').doc(salonID).get()
       const {comentarios} = res.data()
       
        
       const newComentarios = comentarios.filter((item,index)=>(index!==indexComentario))
     
       await db.collection('salones').doc(salonID).update({
           comentarios:newComentarios
       })
       dispatch({
           type:BORRAR_COMENTARIO_SALON_OK
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type:BORRAR_COMENTARIO_SALON_ERROR
        })
    }
}

const alumnoExisteEnCurso = (alumno,alumnos)=>{
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === alumno) {
            return true;
        }
    }

    return false;
}