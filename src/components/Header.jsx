import React from 'react'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'

//importing styles
import '../styles/Header.css'

//importing components
import SearchBox from './SearchBox'
import Navigation from './Navigation'

function Header() {
  return (
    <div className='header'>

      {/* overlay */}
      <div className='overlay'></div>

      {/* Navigation */}
      <motion.div
        variants={fadeIn("down", 0.15)}
        initial="hidden2"
        whileInView={"show2"}
        className='navigation'><Navigation /></motion.div>

      {/* SearchBox */}
      <motion.div
        variants={fadeIn("down", 0.15)}
        initial="hidden1"
        whileInView={"show1"}
        className='search'><SearchBox /></motion.div>
    </div>
  )
}

export default Header
