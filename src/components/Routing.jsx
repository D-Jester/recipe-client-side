//importing dependencies
import React from 'react'
import {Routes,Route} from 'react-router-dom'

//importing pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Region from '../pages/Region'
import Category from '../pages/Category'
import ResultPage from './ResultPage'
import Error from '../pages/Error'

function Routing() {
  const BACKEND_SERVER_URL = (process.env.NODE_ENV === "development")? process.env.REACT_APP_BACKEND_DEV_URL : process.env.REACT_APP_BACKEND_PROD_URL
  return (
    <div>
        {/* This segment deals with the routingpart of the main web app */}
        <Routes>
            <Route path='/' element={<Home backendurl={BACKEND_SERVER_URL} />}  />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/regions/:region/:code' element={<Region backendurl={BACKEND_SERVER_URL} />} /> 
            <Route path='/categories/:category' element={<Category backendurl={BACKEND_SERVER_URL} />} />
            <Route path='/result/:name/:id' element={<ResultPage backendurl={BACKEND_SERVER_URL} />} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  )
}

export default Routing
