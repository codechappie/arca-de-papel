import React, { useState } from 'react'

import Jitsi from 'react-jitsi'
import LoadingJitsi from './LoadingJitsi'
//REDUX
import { useSelector } from 'react-redux'

const Stream = (props) => {

  const { tipo, nombres, apellidos, cursos, salones } = useSelector(store => store.usuario)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [room, setRoom] = useState('')
  const [subject, setSubject] = useState('')

  const name = `${nombres} ${apellidos}`
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    if (!room.trim()) {
      alert("Debes ingresar un Codigo o sala");
    }
    if (room && name) setOnCall(true)
  }

  const setRoomName = e => {
    e.preventDefault();
    setbtnDisabled(false)
    setRoom(e.target.value)

    // setCurso(e.target.value);
  }
  return onCall ? (
    <div className="streamming-container">

      <div className="streamming-box">

        <Jitsi
          roomName={room}
          displayName={name}
          password={password}
          subject="curso"
          config={{
            defaultLanguage: 'es',
            disableSimulcast: false,
          }}
          interfaceConfig={{
            filmStripOnly: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_JITSI_WATERMARK: false,
            DEFAULT_REMOTE_DISPLAY_NAME: {nombres},
            DEFAULT_LOCAL_DISPLAY_NAME: 'yo',
          }}
          className="red-colors"
          containerStyle={{ width: '100%', height: '100%', display: 'grid', justifyItems: 'center', alignItems: 'center' }}
          loadingComponent={LoadingJitsi} />
      </div>

    </div>

  ) : (
      <div className="streamming-container">
        <div className="streamming-box">
          <form className="form-style">
            <div className="content-select">
              <select onChange={(e) => setRoomName(e)}>
                <option value="">Selecciona un curso</option>
                {
                      salones.map((curso) => {
                        return (
                          <option key={curso.id} value={curso.id} className={curso.curso} >
                            {`${curso.curso} - ${curso.grado} ${curso.seccion}`}
                          </option>
                        )
                      })
                }
              </select>
              <i></i>
            </div>
            <input id='password' type='password' placeholder='Contraseña'
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={room === '' ? 'disabled' : ''}
              onClick={handleClick} type='submit'>
              Unirse
                    </button>
          </form> 
        </div>
      </div>
    )
}

export default Stream
