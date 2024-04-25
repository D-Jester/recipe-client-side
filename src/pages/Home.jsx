import React from 'react'

//importing components
import Header from '../components/Header'
import Body from '../components/Body'
import Category1 from "../components/CategoryTyping1"
import RegionTyping from '../components/RegionTyping'
import Result from '../components/Result'

function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Category1 />
      <RegionTyping/>
      <Result />
    </div>
  )
}

export default Home
