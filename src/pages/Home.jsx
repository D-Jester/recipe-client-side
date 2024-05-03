import React from 'react'

//importing components
import Header from '../components/Header'
import Body from '../components/Body'
import Category from "../components/CategoryTyping"
import RegionTyping from '../components/RegionTyping'

function Home({backendurl, setPre}) {
  return (
    <div>
      <Header backendurl={backendurl} setPre={setPre} />
      <Body backendurl={backendurl} />
      <Category backendurl={backendurl} />
      <RegionTyping />
    </div>
  )
}

export default Home
