import React from 'react'
import { products } from './products.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './menu.css'

function Menu() {
  return (
    <>
    <div className='menu'>
    <div className='menu-title'>
    <h2>MENU</h2>
    </div >
      <div className='cards'>
        {products.map((product, index) => {
          return (
              <Card style={{ width: '18rem' }} key={index} className='card text'>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="dark" >Prince {product.price} USD</Button>
                </Card.Body>
              </Card>
          )
        }
        )}
      </div>
    </div>
    
    </>
  );
}

export default Menu