import React from 'react'
import imgCreateSala from '../images/image-create-room.png'

const JoinRoom = () => {
    const unirSala = ()=>{
        
    }
    return (
        <div className="card-create-room">
            <div className="image">
                <img src={imgCreateSala} alt="" />
            </div>
            <div className="info-create-room-card">
                <h2>Unete a una sala de estudios con el código proporcionado por tu profesor</h2>
                <button onClick={unirSala}>Unete a una sala</button>
            </div>
        </div>
    )
}

export default JoinRoom
