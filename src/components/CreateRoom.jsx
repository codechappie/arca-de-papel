import React,{useState} from 'react'
import imgCreateSala from '../images/image-create-room.png'
import ModalCreateRoom from './ModalCreateRoom'

const CreateRoom = () => {
    const [crearSalon,setCrearSalon] = useState(false);
    
    return (
        
        <div className="card-create-room">
            {
            crearSalon ? <ModalCreateRoom/> : null
            }
            <div className="image">
                <img src={imgCreateSala} alt="" />
            </div>
            <div className="info-create-room-card">
                <h2>Crea una sala de estudios para el tema que estés
                        enseñando</h2>
                <button onClick={()=>setCrearSalon(!crearSalon)}>Crear sala</button>
            </div>
        </div>
    )
}

export default CreateRoom
