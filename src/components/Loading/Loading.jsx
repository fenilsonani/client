import React from 'react'
import './Loading.scss'

const Loading = () => {
    return (
        <>
            <div className="fenil-loading">
                <div className="size-f">
                    <span className="loader"></span>
                </div>
                {/* <h1>Loading...</h1> */}
            </div>
        </>
    )
}

export default Loading