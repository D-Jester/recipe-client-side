//importing dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing components
import Loading from './Loading'
//importing styles
import '../styles/CategoryDishes.css'

function CategoryDishes({ category }) {
  //state variable
  const [categoryDishes, setCategoryDishes] = useState(null)
  //function
  const getRegionDishes = async () => {
    const response = await axios.get('/categoryDishes', {
      params: {
        c: category
      }
    }
    )
      .then(data => { return data.data.data.meals })
      .catch(err => { console.log(err); return; })
    setCategoryDishes(response)
    return
  }
  //effect
  useEffect(() => {
    getRegionDishes()
  })
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
                      <button id='categoryCardButton'>Check Recipe</button>
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
