import React from 'react'
import img from './img-aboutus.jpg'
import './aboutUs.css'


function AboutUs() {


  return (
    <>
      <div class="column-container container text-justify">
        <div class="row align-items-center">
        <div className="col-md-8 column">
          <h2>About As</h2><br />
          <p className='text'>Welcome to Texas Grill, where Southern flavors come alive in every bite. We're not just a restaurant; we're a celebration of Texas cuisine and hospitality. Our journey began with a passion for sharing the rich culinary heritage of the Lone Star State.
            At Texas Grill, we take pride in offering a diverse menu that showcases the authentic tastes of Texas. From mouthwatering smoked brisket to spicy jalapeño poppers, our dishes are a tribute to the Texan way of life. Our expert chefs carefully craft each recipe, infusing them with the bold flavors and genuine warmth that defines Texas culture.
            We're not just here to serve you food; we're here to provide an experience. Our cozy ambiance and friendly staff create an atmosphere that feels like a home away from home. Whether you're savoring our classic chicken fried steak or indulging in a slice of rich pecan pie, we want every visit to be a memorable journey through the heart of Texas.
            Family gatherings, casual hangouts, or special occasions – whatever brings you to our table, we're dedicated to making it unforgettable. We source our ingredients locally whenever possible, supporting Texan farmers and producers, because community is at the heart of what we do.
            So join us at Texas Grill in Envigado, Antioquia, and savor the flavors that make Texas cuisine legendary. Experience the warmth, hospitality, and passion that are deeply ingrained in our culinary traditions. We're more than a restaurant; we're a taste of Texas you won't forget.
            Come hungry, leave with a full heart. <br /><br />

            Feel free to use this adapted version for your "About Us" section, reflecting the name change and location update of Texas Grill in Envigado, Antioquia.</p>
          </div>
          <div class="col-md-4 column">
            <img src={img} alt="Texas Grill" className="img-fluid image-with-shadow"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs