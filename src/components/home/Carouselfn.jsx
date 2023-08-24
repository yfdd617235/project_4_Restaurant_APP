import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import './carouselfn.css'

function Carouselfn() {
  return (
    <>
      <div className='carouseldiv'>
      <Carousel fade>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

    </>

  )
}

export default Carouselfn