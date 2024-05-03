//importinfg dependencies
import React from 'react'
import { useParams } from 'react-router-dom'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing components
import Header from '../components/Header'
import RegionDishes from '../components/RegionDishes'

//importing styles
import '../styles/Region.css'

function Region({backendurl , setPre}) {
    const { region, code } = useParams()
    const link = "http://purecatamphetamine.github.io/country-flag-icons/3x2/" + code + ".svg"
    return (
        <>
            <Header setPre={setPre} />
            <motion.div
                variants={fadeIn("down", 0.15)}
                initial="hidden2"
                whileInView={"show2"}
                className='RegionHeading'>
                <img src={link} alt="not found" />
                <p>{region}</p>
            </motion.div>
            <RegionDishes region={region} backendurl={backendurl} setPre={setPre} />
        </>
    )
}

export default Region
