import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import './carouselfn.css'

function Carouselfn() {
  return (
    <>
      <div className='carouseldiv'>
      <Carousel fade>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Discover Our Flavorful Beginnings</h3>
            <p>Embark on a journey of taste as we take you through the roots of Texas-inspired cuisine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h3>Savor the Spice and Soul</h3>
            <p>Indulge in a symphony of flavors that pay homage to Texan spices and culinary traditions.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />
          <Carousel.Caption>
            <h3>A Dining Experience Like No Other</h3>
            <p>Immerse yourself in the warmth of Texan hospitality as we invite you to join us at Texas Grill.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="First slide" />
          <Carousel.Caption>
            <h3>Celebrate Life's Flavors with Us</h3>
            <p>Let every bite at Texas Grill be a memory worth savoring, where food becomes a story to share.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

    </>

  )
}

export default Carouselfn