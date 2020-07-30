import React, { Fragment } from 'react'

import CourseTopic from './CourseTopic'

import CardRemote from './CardRemote'
import CommentBox from './CommentBox'
import AdBanner from './AdBanner'

const Topic = () => {
   
    return (
        <Fragment>
            <CourseTopic />

            <div className="lead-container">
                <div className="feedlead-container">
                    <CardRemote />
                    <CommentBox />
                </div>
                <div className="lateralData">
                   
                    <AdBanner />
                </div>
            </div>

        </Fragment>
    )
}

export default Topic
