import React from 'react'
import img from './img-aboutus.jpg'
import './aboutUs.css'


function AboutUs() {


  return (
    <>
      <div className="column-container container text-justify">
        <div className="row align-items-center">
        <div className="col-md-8 column">
          <h2>About Us</h2><br />
          <p className='text'>Welcome to Texas Grill, where Southern flavors shine. We celebrate Texas cuisine and hospitality, sharing the culinary heritage of the Lone Star State. Our diverse menu showcases authentic Texan tastes, from smoked brisket to jalapeño poppers. Our expert chefs infuse bold flavors into every dish.

Our cozy atmosphere and friendly staff make us your home away from home. Whether you're savoring chicken fried steak or indulging in pecan pie, every visit is a journey through Texas. We're here to make it unforgettable, whether it's a family gathering or a special occasion.

We support local farmers and producers, strengthening our community. Join us at Texas Grill in Medellin, Antioquia, and experience legendary Texas cuisine. More than a restaurant, we're a taste of Texas you'll never forget. Come hungry, leave with a full heart.<br /><br />

            Feel free to use this adapted version for your "About Us" section, reflecting the name change and location update of Texas Grill in Envigado, Antioquia.</p>
          </div>
          <div className="col-md-4 column">
            <img src={img} alt="Texas Grill" className="img-fluid image-with-shadow"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs