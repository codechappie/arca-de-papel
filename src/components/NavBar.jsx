import React, { useState, Fragment, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { sesionActivaAccion } from '../redux/usuarioDuck'

import UserDropdownTools from './UserDropdownTools'
import SideBarDocente from './SideBarDocente'
import SideBarAlumno from './SideBarAlumno'


import imgUser from '../images/user.png'
import img from '../images/logo.png'
import imgMenu from '../images/menu.svg'



const NavBar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(sesionActivaAccion())
    }, [])
    const { nombres, tipo ,imagenPerfil} = useSelector(store => store.usuario)
    const [dropdown, setDropdown] = useState('dont-show-dropdown')
    const [showDropdown, setShowDropdown] = useState(false)

    const [menu, setMenu] = useState(false)

    const changeStateDropdown = (dropdownData) => {
        setShowDropdown(dropdownData)
        if(dropdownData){
            setDropdown("")
            console.log(showDropdown)
        }else{
            setDropdown("dont-show-dropdown")
        }
    }
    const dontShowDropdown = () => {
        setDropdown("dont-show-dropdown")
        setShowDropdown(!showDropdown)
    }
    return (

        <Fragment>
            <nav className="nav-home">
                <div className="right-content">
                    <button id="btnMenu" onClick={() => setMenu(!menu)}>
                        <img src={imgMenu} alt="" />
                    </button>
                    <div className="companyName">
                    <Link to="/home"> <img src={img} alt=""></img></Link> 
                    </div>
                </div>
                <button className="left-content" onClick={() => changeStateDropdown(!showDropdown)}>
                    {/* onClick={ () => setDropdown(!dropdown) } */}
                    <div className="profile-image">
                        <img src={!imagenPerfil.trim() ? imgUser : imagenPerfil} alt=""></img>
                    </div>
                    <h6>{nombres}</h6>
                    <div className="btn-dropdown">
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className={dropdown} onMouseLeave={() => dontShowDropdown()}>
                        <UserDropdownTools />
                    </div>
                    {/* {
                dropdown ? <UserDropdownTools /> : null
            }
         */}
                </button>

            </nav>
            {/* {
                menu ? (
                    <Fragment>
                        
                        <div className="sidebar-responsive-ang">
                            <div className="menu-overlay" onClick={()=>setMenu(false)} />
                            {
                                tipo === 'Alumno' ? <SideBarAlumno /> : <SideBarDocente />
                            }

                        </div>
                    </Fragment>
                ) : null
            } */}
            <div className={`sidebar-responsive-ang ${menu ? 'show' : 'dont-show'}`}>
                <div className="menu-overlay" onClick={()=>setMenu(false)} />
                {
                    tipo === 'Alumno' ? <SideBarAlumno /> : <SideBarDocente />
                }
            </div>
        </Fragment>
    )

}

export default NavBar
