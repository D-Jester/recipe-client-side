import React from 'react';
import { Link } from 'react-router-dom'

//importing files
import logo from '../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
//importing styles
import '../styles/Navigation.css'

function Navigation() {
  //button event activater
  const hamHandeler = () => {
    const menuElement = document.getElementsByClassName("opts")[0]
    menuElement.style.left = "0"
  }
  //button event deactivater
  const hamDeactivate = () => {
    const menuElement = document.getElementsByClassName("opts")[0]
    menuElement.style.left = "-100%"
  }
  //button no event deactivater for some specific regions
  const hamNoDeactivate = (e) => {
    e.stopPropagation()
  }
  return (
    <>
      <div className='nc'>
        <div className='nc1'>
          <img src={logo} alt="" />
          <p>ChefBook</p>
        </div>
        <div className='nc2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <button onClick={hamHandeler}><GiHamburgerMenu id='ncs' /></button>
        </div>
      </div>
      <div className='opts' onClick={hamDeactivate}>
        <div className="optsp" onClick={e => { return hamNoDeactivate(e) }} ><Link to='/'>Home</Link></div>
        <div className="optsp" onClick={e => { return hamNoDeactivate(e) }}><Link to='/About'>About</Link></div>
        <div className="optsp" onClick={e => { return hamNoDeactivate(e) }}><Link to='/Contact'>Contact</Link></div>
      </div>
    </>
  )
}

export default Navigation
