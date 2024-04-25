//importing dependencies
import React from 'react'
import {Routes,Route} from 'react-router-dom'

//importing pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Region from '../pages/Region'
import Category from '../pages/Category'
import Error from '../pages/Error'

function Routing() {
  return (
    <div>
        {/* This segment deals with the routingpart of the main web app */}
        <Routes>
            <Route path='https://recipe-app-api-tv4c.onrender.com/' element={<Home/>}  />
            <Route path='https://recipe-app-api-tv4c.onrender.com/contact' element={<Contact/>} />
            <Route path='https://recipe-app-api-tv4c.onrender.com/about' element={<About/>} />
            <Route path='https://recipe-app-api-tv4c.onrender.com/regions/:region/:code' element={<Region/>} /> 
            <Route path='https://recipe-app-api-tv4c.onrender.com/categories/:category' element={<Category />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  )
}

export default Routing
