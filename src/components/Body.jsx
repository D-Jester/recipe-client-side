//importing dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing styles
import '../styles/Body.css'
//importing component
import Loading from '../components/Loading'


function Body() {
    //variables
    let [randomDishes, setRandomDishes] = useState(null)
    //functions 
    const callRandomDishes = async () => {
        try {
            const response = await axios.get('/randomItems')
                .then(data => { return data.data.data })
                .catch(err => { return err })
            setRandomDishes(response)
        } catch (err) {
        }
        return
    }
    //random food effects
    useEffect(() => {
        if(randomDishes===null){
            callRandomDishes()
        }
        return
    })

    if (randomDishes === null) {
        return (
            <div className="randomLoading">
                <Loading />
            </div>
        )
    } else {
        return (
            <div className='body'>

                {/* Heading */}
                <motion.div
                    variants={fadeIn("down", 0.15)}
                    initial="hidden2"
                    whileInView={"show2"}
                    className="b1">
                    <h2 id='1'>Check out more new dishes!</h2>
                </motion.div>

                {/* Slider */}
                <motion.div
                    variants={fadeIn("down", 0.15)}
                    initial="hidden2"
                    whileInView={"show2"}
                    className='b2 slider'>
                    <div className='slide-track'>
                        {
                            randomDishes.map(value => {
                                return (
                                    <div className="slide">
                                        <img src={value.meals[0].strMealThumb} alt="Not found" />
                                        <div className="Details">
                                            <p><span>Name:</span> <b>{value.meals[0].strMeal}</b></p><br/>
                                            <p><span>Type:</span> <b>{(value.meals[0].strArea === 'Unknown') ? '-' : value.meals[0].strArea}</b></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </div>
        )
    }
}


export default Body
