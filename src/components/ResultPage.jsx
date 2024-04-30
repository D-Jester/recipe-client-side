import React from 'react'
import { useParams } from 'react-router-dom'
//importing components
import Header from './Header'
import Result from './Result'

function ResultPage({ backendurl }) {
    const { name, id } = useParams()
    return(
        <div>
            <Header/>
            <Result name={name} id={id} backendurl={backendurl} />
        </div>
    )
}

export default ResultPage
