import React from 'react'
import { useParams } from 'react-router-dom'
//importing components
import Header from './Header'
import Result from './Result'

function ResultPage({ backendurl,preSearched,setPre }) {
    const { name, id } = useParams()
    return(
        <div>
            <Header backendurl={backendurl} setPre={setPre}/>
            <Result name={name} id={id} backendurl={backendurl} preSearched={preSearched} />
        </div>
    )
}

export default ResultPage
