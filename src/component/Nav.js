import React from 'react';
import './Nav.css';
import {Link , NavLink} from 'react-router-dom'

const  Nav = () =>{
        return(
            <div className="navbar-content">
           <a className="logo" href="#"> Logo</a>
           <ul className="menu-link">
            <li> <NavLink exact to="/"> Home</NavLink></li>
            <li> <NavLink to="/About"> About</NavLink></li>
            <li> <NavLink to="/Service"> Service</NavLink></li>
           </ul>
            </div>
        )
    
  
}

export default Nav;