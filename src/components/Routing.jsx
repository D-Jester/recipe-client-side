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
            <Route path='/' element={<Home/>}  />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/regions/:region/:code' element={<Region/>} /> 
            <Route path='/categories/:category' element={<Category />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  )
}

export default Routing
