import React from 'react'
import AdBanner from './AdBanner'

const Exercises = () => {
    return (
        <div className="dashboard">
            <div className="lead-container">
                <div className="two-components three-components">
                    <a href="/ejercicios/matematica/mate1/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 1</h3>
                        </div>
                    </a>

                    <a href="/ejercicios/matematica/mate2/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 2</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/matematica/mate3/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 3</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/matematica/mate4/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 4</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/matematica/mate5/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 5</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/matematica/mate6/" target="_blank" className="exercise-buttons mate-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Matemática 6</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/comunicacion/cm1/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 1</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/comunicacion/cm2/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 2</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/comunicacion/cm3/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 3</h3>
                        </div>
                    </a>

                    <a href="/ejercicios/comunicacion/cm4/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 4</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/comunicacion/cm5/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 5</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/comunicacion/cm6/" target="_blank" className="exercise-buttons comu-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Comunicación 6</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/inicial/inicial3/" target="_blank" className="exercise-buttons inicial-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Inicial 3</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/inicial/inicial4/" target="_blank" className="exercise-buttons inicial-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Inicial 4</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/inicial/inicial5/" target="_blank" className="exercise-buttons inicial-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3>Inicial 5</h3>
                        </div>
                    </a>

                    <a href="/ejercicios/inicial/asanma/inicial3" target="_blank" className="exercise-buttons inicial-asanma-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3> Incial 3 años Asanma</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/inicial/asanma/inicial4" target="_blank" className="exercise-buttons inicial-asanma-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3> Incial 4 años Asanma</h3>
                        </div>
                    </a>
                    <a href="/ejercicios/inicial/asanma/inicial5" target="_blank" className="exercise-buttons inicial-asanma-color small-buttons">
                        <div className="exercise-buttons-container">
                            <h3> Incial 5 años Asanma</h3>
                        </div>
                    </a>
                </div>
                <div className="lateralData">
                    <AdBanner />
                </div>
            </div>
        </div>
    )
}

export default Exercises
