import React, { Fragment } from 'react'
//REDUX
import {useSelector} from 'react-redux'
import imgBanner from '../images/ad.jpg'

const AdBanner = () => {
    const {imagenColegio} = useSelector(store=>store.usuario)
    const imagenDefault = "https://via.placeholder.com/200x200/16a085/FFFFFF?text=Logo+colegio"
    return (
        <div className="contenedorBanner">
            <div className="school-logo">
                <img src={!imagenColegio.trim() ? imagenDefault : imagenColegio} width="200" height="200" alt=""/>
            </div>
            <div className="arca-ad">
                <img src={imgBanner} alt=""/>
            </div>
        </div>
    )
}

export default AdBanner
