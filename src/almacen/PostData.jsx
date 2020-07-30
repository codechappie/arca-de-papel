import React, { Fragment } from 'react'
import imgUser from '../images/user.png'
const PostData = (props) => {
    const { comentario, fecha, nombres, tipo, curso} = props
    return (
        <Fragment>
            <div className="post-card">
                            <div className="post-card-header">
                                <div className="user-profile">
                                    <div className="image">
                                        <img src={imgUser} alt="" />
                                    </div>
                                </div>
                                <div className="user-information">
                                    <h3 className="nameUser strong">{nombres}
                                        <span className="published"> publicado en {curso}</span>
                                    </h3>
                                    <h6 className="published strong">{tipo}</h6>
                                </div>
                            </div>
                            <div className="post-card-body">
                                <div className="post-data">
                                    <p>{comentario}</p>
                                </div>
                            </div>
                        </div>
        </Fragment>
    )
}

export default PostData
