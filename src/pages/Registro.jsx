import React, { useState } from 'react'
import RegistroDocente from '../components/RegistroDocente';
import RegistroAlumno from '../components/RegistroAlumno';
import userImage from '../images/user.png'
import logo from '../images/logo.png'

const Registro = () => {
    const [tipo, setTipo] = useState('Alumno');

    return (
        <section className="register-section">
            <nav>
                <div className="companyName">
                    <div className="companyName">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </nav>

            <div className="register-container">
                <div className="form-container">
                    <h3 className="title-type-user">
                    {tipo === 'Docente' ? "Registro Docente" : "Registro Alumno"}
                    </h3>
                    <div className="image-user">
                        <img src={userImage} alt="" />
                    </div>
                    <div className="change-user">
                        <button onClick={() => setTipo('Docente')} className={tipo === 'Docente' ? "active" : null  }>
                            Profesor
                        <i className="fi-cnsuxl-user-tie-circle"></i>
                        </button>
                        <button onClick={() => setTipo('Alumno')} className={tipo === 'Alumno' ? "active" : null  }>
                            Alumno
                        <i className="fi-xnsuxl-user-circle-solid"></i>
                        </button>
                    </div>

                    {tipo === 'Docente' ? <RegistroDocente /> : <RegistroAlumno />}

                </div>
            </div>

        </section>
    )
}

export default Registro
