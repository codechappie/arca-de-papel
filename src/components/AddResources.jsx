import React from 'react'
import imgResources from '../images/Recursos.png'

const AddResources = () => {
    return (
        <div className="resources">
            <div className="resources-container">
                <img src={imgResources} alt="" />
                <h3>Recursos</h3>
                <small>Encuentra recursos para tu clase</small>
            </div>
        </div>
    )
}

export default AddResources
