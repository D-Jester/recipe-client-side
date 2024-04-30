import React, { useState } from 'react'

//importing styls
import '../styles/SearchBox.css'
//importing variants
import resultOpener from '../animation/resultOpener';
import { CiSearch } from "react-icons/ci";

function SearchBox() {

    //vars
    const [food, setFood] = useState("")
    const placeholder = "Search your recipe..."

    //functions
    const valueSetter = (e) => {
        return setFood(e.target.value)
    }

    return (
        <div className='searcher'>
            <div className='sercherBox'>
                <input id='foodSearcher' placeholder={placeholder} type="text" value={food} onChange={e => { return valueSetter(e) }} />
                <button onClick={resultOpener}><CiSearch /></button>
            </div>
        </div>
    )
}

export default SearchBox
