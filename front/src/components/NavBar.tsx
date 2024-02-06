import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ():JSX.Element => {
  return (
    <nav className='navBar'>
        <NavLink
            to='/tasks'
            className=  {({isActive}) => isActive ? " active-link" : ""}>
            Tareas
        </NavLink>
        <NavLink 
            to='/challenge'
            className={({isActive}) => isActive ? "active-link" : ""}>
            Retos personales
        </NavLink>  
        <NavLink 
            to='/motivation'
            className={({isActive}) => isActive ? "active-link" : ""}>
            Pensamientos motivacionales
        </NavLink>  
    </nav>
  )
}

export default NavBar