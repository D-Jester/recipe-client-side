//importing dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
//importing motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing styles
import '../styles/CategoryTyping1.css'
import '../styles/CategoryCard.css'
//importing component
import Loading from './Loading.jsx'
//importing file
import CategoryTypingImage from '../images/recipebackground.png'
function CategoryTyping({backendurl}) {
    //setting navigation
    const navigate = useNavigate()
    //setting category
    const [category, setCategory] = useState(null)
    //functions
    const setCategories = async () => {
        let response = await axios.get(`${backendurl}/categoryList`)
            .then(data => {
                return data.data.data
            })
            .catch(err => {
                return console.log(err)
            })
        setCategory(response)
        return
    }
    //effect hook
    useEffect(() => {
        if(category===null){
            setCategories()
        }
        return
    })
    //handle button
    const handleButton=(category)=>{
        navigate(`/categories/${category}`)
    }
    if (category === null) {
        return(
            <Loading />
        )
    } else {
        return (
            <>
                {/* Heading */}
                <motion.div
                    variants={fadeIn("down", 0.15)}
                    initial="hidden2"
                    whileInView={"show2"}
                    id='foodCategoryBorderTop' ></motion.div>

                {/* Category */}
                <div className='foodCategoryBody'>
                    <motion.div
                        variants={fadeIn("left", 0.15)}
                        initial="hidden1"
                        whileInView={"show1"}
                        className='CategoryH'><h1>Find by Category:</h1></motion.div>
                    <div className='CategoryContainer'>
                        <img src={CategoryTypingImage} alt="" />
                        {
                            category.map(value => {
                                return (
                                    <motion.div
                                        variants={fadeIn("up", 0.15)}
                                        initial="hidden1"
                                        whileInView={"show1"}
                                        className="card"
                                        onClick = {()=>{
                                            return handleButton(value.type)
                                        }}
                                        key={value.name}
                                    >
                                        <div className="cardFlip">
                                            <div className="categorycard">
                                                <div className="front">
                                                    <img src={value.image} alt="" />
                                                </div>
                                                <div className="back">{value.name}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}


export default CategoryTyping
