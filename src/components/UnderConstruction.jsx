import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const UnderConstruction = () => {
    return (
        <div>
            <NavBar />
            <div className="under-construction-container">
                <div className="under-construction-box">
                    <h1>WEBSITE EN CONSTRUCCIÓN</h1>
                    <h3>POR FAVOR TENGA PACIENCIA</h3>
                    <Link to="/" className="btn-atras-under-const">ATRAS</Link>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction
