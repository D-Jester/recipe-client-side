import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
//importing styls
import '../styles/SearchBox.css'
//importing variants
import { CiSearch } from "react-icons/ci";

function SearchBox({backendurl, setPre}) {
    const navigate = useNavigate()
    //vars
    const [food, setFood] = useState("")
    const placeholder = "Search your recipe..."

    //functions
    const valueSetter = (e) => {
        return setFood(e.target.value)
    }
    const resultHandeler = async(food) =>{
        //getting result from the body itself
        const response = await  axios.get(`${backendurl}/getRecipe`,{
            params:{
                name:food,
                id:null
            }
        })
        .then(data=>{
            return data.data.data
        })
        .catch(err=>{
            return console.log(err)
        })
        setPre(response)
        navigate(`/result/${response.name}/${response.id}`)
        return
    }

    return (
        <div className='searcher'>
            <div className='sercherBox'>
                <input id='foodSearcher' placeholder={placeholder} type="text" value={food} onChange={e => { return valueSetter(e) }} />
                <button onClick={e=>{return resultHandeler(food)}}><CiSearch /></button>
            </div>
        </div>
    )
}

export default SearchBox
