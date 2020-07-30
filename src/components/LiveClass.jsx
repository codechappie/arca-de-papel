import React from 'react'
import imgLiveClass from '../images/live-class.png'

const LiveClass = () => {
    return (
        <div className="add-book">
            <div className="add-book-container">
                <img src={imgLiveClass} alt="" />
                <h3>Clase en vivo</h3>
                <small>Participa en las clases virtuales</small>
            </div>
        </div>
    )
}

export default LiveClass
