import React from 'react'
import imgUser from '../images/user.png'

const CommentBox = () => {
    return (
        <div className="field-post">
            <div className="user-profile">
                <div className="image">
                    <img src={imgUser} alt="" />
                </div>
            </div>
            <div className="input-field">
                <textarea placeholder="Comience una discuasión, comparta materiales de clase, etc."></textarea>
                <button className="btn-upload-file"><i className="fa fa-paper-plane"></i></button>
            </div>
        </div>

    )
}

export default CommentBox
