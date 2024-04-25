import React, { useState } from 'react'

//importing styls
import '../styles/SearchBox.css'

import { CiSearch } from "react-icons/ci";

function SearchBox() {

    //vars
    const [food, setFood] = useState("")
    const placeholder = "Search your recipe..."

    //functions
    const valueSetter = (e) => {
        return setFood(e.target.value)
    }

    const searchHandeler=async ()=>{
        const resultElement=document.getElementsByClassName('resultBody')[0]
        const resultContainerElement = document.getElementsByClassName('resultContainer')[0]
        resultElement.style.visibility="visible"
        resultContainerElement.style.transform="scale(1)"
    }

    return (
        <div className='searcher'>
            <div className='sercherBox'>
                <input id='foodSearcher' placeholder={placeholder} type="text" value={food} onChange={e => { return valueSetter(e) }} />
                <button onClick={searchHandeler}><CiSearch /></button>
            </div>
        </div>
    )
}

export default SearchBox
