import React from 'react'

//importing style
import '../styles/Loading.css'

function Loading() {
    return (
        <div className='loader'>
            <div className='ring'></div>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading
