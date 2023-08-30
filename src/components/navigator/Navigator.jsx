import React from 'react'
import { NavLink } from 'react-router-dom'
import logob from '../logos/grillsvgw.svg'
import './navigator.css'

function Navigator() {
    return (
        <>
        <nav className='navigator' >
        {/* <div className='container' > */}
            <ul className='navMenu' >
                <li><NavLink className="link-menu" to="/"><img className='img-logo' src={logob} alt="grill-img" /></NavLink></li>
                <li><NavLink className="link-menu" to="/">Home</NavLink></li>
                <li><NavLink className="link-menu" to="/AboutUs">About Us</NavLink></li>
                <li><NavLink className="link-menu" to="/Menu">Menu</NavLink></li>
                <li><NavLink className="link-menu" to="/Bookings">Bookings</NavLink></li>
            </ul>
        {/* </div> */}
        </nav>
        </>
    )
}

export default Navigator