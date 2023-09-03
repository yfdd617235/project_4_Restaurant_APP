import React from 'react'
import Col from 'react-bootstrap/Col';
import logob from '../logos/grillsvgw.svg';
import img from './wapp.svg';
import img1 from './location.svg'
import './footer.css';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (

    <div className='footer-container'>
      <div className='info-container'>
        <Col className='col-container1 col-md-5' >
          <h3>Texas Grill <img className='img-logo' src={logob} alt="grill-img" /></h3><br />
          <p>Savor the bold taste of Texas at our grill restaurant. From mouthwatering smoked meats to classic Texan dishes, we bring the heart of BBQ country to your table.</p>
        </Col>

        <Col className='col-container links' >
          <h5> Web Navigator</h5><br />
          <NavLink to="/" className="footer-nav-link">Home</NavLink>
          <NavLink to="/AboutUs" className="footer-nav-link">About Us</NavLink>
          <NavLink to="/Menu" className="footer-nav-link">Menu</NavLink>
          <NavLink to="/Bookings" className="footer-nav-link">Bookings</NavLink>
        </Col>

        <Col className='col-container'>
          <h5>Contact Us</h5><br />
          <a className="footer-nav-link" href="https://api.whatsapp.com/send?phone=573104221653" target="_blank" rel="noreferrer"><img src={img} alt=""></img>+57 3104221653</a>
          <a className="footer-nav-link" href="https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia/@6.2555965,-75.5824856,15z/data=!4m6!3m5!1s0x8e4428dfb80fad05:0x42137cfcc7b53b56!8m2!3d6.2476376!4d-75.5658153!16zL20vMDF4XzZz?hl=es-VE&entry=ttu" target="_blank" rel="noreferrer"><img src={img1} alt=""></img> Medellín-Antioquia, Colombia</a>
        </Col>

      </div>
      <hr />
      <div className='copy-container'>
        <p>&copy; 2023 Yosef David Giraldo Salazar. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Footer