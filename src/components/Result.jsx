import React from 'react'

// importing styles
import '../styles/Result.css'
import { ImCancelCircle } from "react-icons/im";

function Result() {
    const hideSection=()=>{
        const resultElement=document.getElementsByClassName('resultBody')[0]
        const resultContainerElement = document.getElementsByClassName('resultContainer')[0]
        resultElement.style.visibility="hidden"
        resultContainerElement.style.transform="scale(0)"
    }
    return (
        <div className='resultBody'>
            <div className='resultContainer'>
                <div className='cancel'><ImCancelCircle id='cross' onClick={hideSection}/></div>
            </div>
        </div>
    )
}

export default Result
