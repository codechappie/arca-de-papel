import React, { Fragment } from 'react'
import AdBanner from '../components/AdBanner';
import CourseTeacher from '../almacen/CourseTeacher';
import CommentBox from './CommentBox';
import CardRemote from './CardRemote';
import AddStudent from './AddStudent';
import PostData from '../almacen/PostData';


const PruebasComponentes = () => {
    return (
        <Fragment>
            <CourseTeacher />
            <div className="lead-container">
                <div className="feedlead-container">
                    <CardRemote />
                    <CommentBox />
                    <PostData />
                </div>
                <div className="lateralData">
                    <AddStudent />
                    <AdBanner />
                </div>
            </div>

        </Fragment>
    )
}

export default PruebasComponentes
