import React from 'react'
import imgResource from '../images/Recursos.png'

const CardRemote = () => {
    return (
        <div className="card-remote">
            <div className="card-remote-container">
                <div className="detail">
                    <h4>¿Enseñas de manera remota?</h4>
                    <p>¡Arca de papel te ayuda brindandote herramientas!</p>
                </div>
                <div className="image">
                    <img src={imgResource} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardRemote
