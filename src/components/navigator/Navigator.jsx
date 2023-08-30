import React from 'react'
import { NavLink } from 'react-router-dom'
import logob from '../logos/grillsvgw.svg'
import './navigator.css'

function Navigator() {
    return (
        <>
            <div className='nav-container'>
                <div className='name-container'>
                    <h2>Texas Grill</h2>
                    <img className='img-logo' src={logob} alt="grill-img"/>
                </div>
                <nav className='navigator' >
                    <ul className='navMenu' >
                        <li><NavLink className="link-menu" to="/">Home</NavLink></li>
                        <li><NavLink className="link-menu" to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink className="link-menu" to="/Menu">Menu</NavLink></li>
                        <li><NavLink className="link-menu" to="/Bookings">Bookings</NavLink></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navigator