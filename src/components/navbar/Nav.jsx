import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navbar/Nav.css'
import logo from "../../assets/react.svg"

const Nav = () => {
  return (
<div>
  
    <div className='nav'>
    <img  src={logo} alt="Logo" className='nav-logo'/>
        <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink className='nav-link' to="/login">Login</NavLink>
                <NavLink className='nav-link' to="/home">Home</NavLink>
            </li>
        </ul>
    </div>
</div>


  )
}

export default Nav