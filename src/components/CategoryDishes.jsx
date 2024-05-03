//importing dependencies
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing components
import Loading from './Loading'
//importing styles
import '../styles/CategoryDishes.css'

function CategoryDishes({ category, backendurl, setPre }) {
  const navigate = useNavigate()
  //state variable
  const [categoryDishes, setCategoryDishes] = useState(null)
  //function
  const getRegionDishes = async () => {
    const response = await axios.get(`${backendurl}/categoryDishes`, {
      params: {
        c: category
      }
    })
      .then(data => { return data.data.data.meals })
      .catch(err => { console.log(err); return; })
    setCategoryDishes(response)
    return  
  }
  const handleCheckRecipe = (name,id) =>{
    setPre(null)
    navigate(`/result/${name}/${id}`)
    return
  }
  //effect
  useEffect(() => {
    if(categoryDishes===null){
      getRegionDishes()
    }
    return
  },[category])
  //conditions
  if (categoryDishes === null) {
    return (
      <div className='categoryDishLoading'>
        <Loading />
      </div>
    )
  } else {
    return (
      <div className='categoryDishes'>
        <div className='cardCategoryDishesContainer'>
          {
            categoryDishes.map(value => {
              return (
                <>
                  <motion.article
                    key={value.strMealThumb}
                    variants={fadeIn("up", 0.15)}
                    initial="hidden1"
                    whileInView={"show1"}
                    className='cardCategoryArticle'>
                    <img src={value.strMealThumb} alt="not found" />
                    <div className='categoryCardData'>
                      <h2 id='categoryCardTitle'>{value.strMeal}</h2><br />
                      <button id='categoryCardButton' onClick={()=>handleCheckRecipe(value.strMeal,value.idMeal)}>Check Recipe</button>
                    </div>
                  </motion.article>
                </>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CategoryDishes
