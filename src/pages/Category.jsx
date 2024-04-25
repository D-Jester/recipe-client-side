//importing dependencies
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing components
import Header from '../components/Header'
import CategoryDishes from '../components/CategoryDishes'
import Loading from '../components/Loading'
//importing styles
import '../styles/Category.css'

function Category() {
    const { category } = useParams()
    //state variale
    const [categories, setCategories] = useState(null)
    //functions
    const getCategories = async () => {
        let response = await axios.get('/categoryList')
            .then(data => {
                return data.data.data
            })
            .catch(err => {
                console.log(err)
                return err
            })
        setCategories(response)
        return
    }
    //effect 
    useEffect(() => {
        getCategories()
        return
    })
    if (categories === null) {
        return (
            <div className='categoryLoading'>
                <Loading />
            </div>
        )
    } else {
        return (
            <div>
                <Header />
                <div className='categoryHeading'>
                    {
                        categories.map(value => {
                            if (category === value.type) {
                                return (
                                    <>
                                        <div className='chp1'>
                                            <motion.img
                                                variants={fadeIn("left", 0.15)}
                                                initial="hidden1"
                                                whileInView={"show1"}
                                                src={value.image} id='categoryRedultImage' alt="" />
                                            <motion.h1
                                                variants={fadeIn("right", 0.15)}
                                                initial="hidden1"
                                                whileInView={"show1"}
                                                id='categoryRedultTitle'>{value.name}</motion.h1>
                                        </div>
                                        <motion.div
                                            variants={fadeIn("up", 0.15)}
                                            initial="hidden1"
                                            whileInView={"show1"}
                                            className='chp2'>
                                            <p id='categoryResultDes'>{value.description}</p>
                                        </motion.div>
                                    </>
                                )
                            } else {
                                return ("")
                            }
                        })
                    }
                </div>
                <CategoryDishes category={category} />
            </div>
        )
    }
}

export default Category
