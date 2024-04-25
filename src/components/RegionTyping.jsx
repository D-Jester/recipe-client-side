//importing dependencies
import React from 'react'
import { useNavigate } from 'react-router-dom'
//motion
import { motion } from 'framer-motion'
//variants
import fadeIn from '../animation/variant.js'
//importing flags
import US from 'country-flag-icons/react/3x2/US' //American(UK)
import GB from 'country-flag-icons/react/3x2/GB' //Great Britain
import CA from 'country-flag-icons/react/3x2/CA' //Canada
import CN from 'country-flag-icons/react/3x2/CN' //China
import HR from 'country-flag-icons/react/3x2/HR' //Croatia
import NL from 'country-flag-icons/react/3x2/NL' //Dutch
import EG from 'country-flag-icons/react/3x2/EG' //Egyptian
import PH from 'country-flag-icons/react/3x2/PH' //Fillipino
import FR from 'country-flag-icons/react/3x2/FR' //French
import GR from 'country-flag-icons/react/3x2/GR' //Greek
import IN from 'country-flag-icons/react/3x2/IN' //Indian
import IR from 'country-flag-icons/react/3x2/IR' //Irish
import IT from 'country-flag-icons/react/3x2/IT' //Italian
import JM from 'country-flag-icons/react/3x2/JM' //Jamaican
import JP from 'country-flag-icons/react/3x2/JP' //Japanese
import KE from 'country-flag-icons/react/3x2/KE' //Kenyan
import MY from 'country-flag-icons/react/3x2/MY' //Malaysian
import MX from 'country-flag-icons/react/3x2/MX' //Mexican
import MO from 'country-flag-icons/react/3x2/MO' //Morocco
import PL from 'country-flag-icons/react/3x2/PL' //Polish
import PT from 'country-flag-icons/react/3x2/PT' //Portugese
import RU from 'country-flag-icons/react/3x2/RU' //Russian
import ES from 'country-flag-icons/react/3x2/ES' //Spanish
import TH from 'country-flag-icons/react/3x2/TH' //Thai
import TN from 'country-flag-icons/react/3x2/TN' //Tunisian
import TR from 'country-flag-icons/react/3x2/TR' //Turkish
import VN from 'country-flag-icons/react/3x2/VN' //Vietnam


//importing style
import '../styles/RegionTyping.css'

function RegionTyping() {
    //navigating function
    const navigate = useNavigate()
    //array
    const flagDetails = [
        {
            area: "American",
            code: US,
            scode:"US"
        },
        {
            area: "British",
            code: GB,
            scode:"GB"
        },
        {
            area: "Canadian",
            code: CA,
            scode:"CA"
        },
        {
            area: "Chinese",
            code: CN,
            scode:"CN"
        },
        {
            area: "Croatian",
            code: HR,
            scode:"HR"
        },
        {
            area: "Dutch",
            code: NL,
            scode:"NL"
        },
        {
            area: "Egyptian",
            code: EG,
            scode:"EG"
        },
        {
            area: "Filipino",
            code: PH,
            scode:"PH"
        },
        {
            area: "French",
            code: FR,
            scode:"FR"
        },
        {
            area: "Greek",
            code: GR,
            scode:"GR"
        },
        {
            area: "Indian",
            code: IN,
            scode:"IN"
        },
        {
            area: "Irish",
            code: IR,
            scode:"IR"
        },
        {
            area: "Italian",
            code: IT,
            scode:"IT"
        },
        {
            area: "Jamaican",
            code: JM,
            scode:"JM"
        },
        {
            area: "Japanese",
            code: JP,
            scode:"JP"
        },
        {
            area: "Kenyan",
            code: KE,
            scode:"KE"
        },
        {
            area: "Malaysian",
            code: MY,
            scode:"MY"
        },
        {
            area: "Mexican",
            code: MX,
            scode:"MX"
        },
        {
            area: "Moroccan",
            code: MO,
            scode:"MO"
        },
        {
            area: "Polish",
            code: PL,
            scode:"PL"
        },
        {
            area: "Portugese",
            code: PT,
            scode:"PT"
        },
        {
            area: "Russian",
            code: RU,
            scode:"RU"
        },
        {
            area: "Spanish",
            code: ES,
            scode:"ES"
        },
        {
            area: "Thai",
            code: TH,
            scode:"TH"
        },
        {
            area: "Tunisian",
            code: TN,
            scode:"TN"
        },
        {
            area: "Turkish",
            code: TR,
            scode:"TR"
        },
        {
            area: "Vietnamese",
            code: VN,
            scode:"VN"
        }
    ]
    //buttonHandler
    const buttonHandler=(area,scode)=>{
        navigate(`/regions/${area}/${scode}`)
        return
    }
    return (
        <>
            <motion.div
                variants={fadeIn("down", 0.15)}
                initial="hidden2"
                whileInView={"show2"}
                id='regionTypingBorderTop'></motion.div>
            <div className='regionTypingBody'>
                <motion.div
                    variants={fadeIn("up", 0.15)}
                    initial="hidden1"
                    whileInView={"show1"}
                    className='CategoryR'><h1>Find by Region:</h1></motion.div>
                <div className='RegionContainer'>
                    {
                        flagDetails.map(value => {
                            return (
                                <>
                                    <motion.div
                                        variants={fadeIn("up", 0.15)}
                                        initial="hidden1"
                                        whileInView={"show1"}
                                        className='region'
                                        onClick={()=> buttonHandler(value.area,value.scode)}>
                                        <div className='flagSymbol'>
                                            <value.code title={value.area} className='flag' />
                                        </div>
                                        <div className="regionDetails">
                                            <p>{value.area}</p>
                                        </div>
                                    </motion.div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RegionTyping
