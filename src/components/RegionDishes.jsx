//importing dependencies
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing component
import Loading from './Loading'
//importing style
import '../styles/RegionDish.css'

function RegionDishes({ region,backendurl,setPre }) {
  const navigate=useNavigate()
  //state variable
  const [regionDishes, setRegionDishes] = useState(null)
  //function
  const getRegionDishes = async () => {
    const response = await axios.get(`${backendurl}/regionDishes`, {
      params: {
        r: region
      }
    }
    )
      .then(data => { return data.data.data.meals })
      .catch(err => { console.log(err); return; })
    setRegionDishes(response)
    return
  }
  const handleCheckRecipe = (name,id) =>{
    setPre(null)
    navigate(`/result/${name}/${id}`)
    return
  }
  //effect
  useEffect(() => {
    if(regionDishes===null){
      getRegionDishes()
      return
    }
    return
  })
  //conditions
  if (regionDishes === null) {
    return (
      <div className='regionDishLoading'>
        <Loading />
      </div>
    )
  }
  else {
    return (
      <div className='regionDishes'>
        <div className='cardRegionDishesContainer'>

          {
            regionDishes.map(value => {
              return (
                <>
                  <motion.article
                    variants={fadeIn("up", 0.15)}
                    initial="hidden1"
                    whileInView={"show1"}
                    className='cardRegionArticle'>
                    <img src={value.strMealThumb} alt="not found" />
                    <div className='regionCardData'>
                      <h2 id='regionCardTitle'>{value.strMeal}</h2><br />
                      <button id='regionCardButton' onClick={()=>handleCheckRecipe(value.strMeal,value.idMeal)}>Check Recipe</button>
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

export default RegionDishes
