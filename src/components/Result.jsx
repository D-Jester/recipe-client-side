import React, { useState, useEffect } from 'react'
import axios from 'axios'
//importing components
import Loading from './Loading'
//importing styles
import '../styles/Result.css'

function Result({ name, id, backendurl }) {
    const [result, setResult] = useState(null)
    //function
    const getResult = async () => {
        const response = await axios.get(`${backendurl}/getRecipe`, {
            params: {
                name: name,
                id: id
            }
        })
            .then(data => {
                return data.data.data
            })
            .catch(err => {
                return console.log(err)
            })
        setResult(response)
        return
    }
    //effect
    useEffect(() => {
        if (result === null) {
            getResult()
            return
        }
        return
    })

    //condition
    if (result === null) {
        return (
            <div className="resultLoading">
                <Loading />
            </div>
        )
    } else {
        return (
            <div>
                {
                    <div className="resultContainer">
                        <div className="resultDetails">
                            <div className="resultImage">
                                <img src={result.image} id='recipeImage' alt="" />
                            </div>
                            <div className="details">
                                <h1><span>Name</span>: {result.name}</h1>
                                <h1><span>Meal ID</span>: {result.id}</h1>
                                <h2><span>Category:</span> {result.category}</h2>
                                <h2><span>Area:</span> {result.area}</h2>
                                <h3><span>Youtube Referel: </span><a href={result.youtubeLink} target='_blank'>Click here</a></h3>
                            </div>
                        </div>
                        <div className="resultMargin"></div>
                        <div className='moreDetails'>
                            <div className="ingredients">
                                <h1>Ingredient list:</h1>
                                <ul>
                                    {
                                        result.ingredientList.map(value => {
                                            return (
                                                <li>{value}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="procedure">
                                <h1>Procedure:</h1>
                                <ul>
                                    {
                                        result.instructions.map(value=>{
                                            return(
                                                <li>{value}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }


}

export default Result
