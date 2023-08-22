
import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Bookings() {

  function onSave(){
    let a = 1;
  }

  return (
    <>
      <div className='wrap'>
        <div className='formContent'>
          <div className='colum'>
            <Form className='form-reserva' onSubmit={onSave}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Type your full name" />
                <Form.Label>Cellphone</Form.Label>
                <Form.Control type="text" placeholder="Type your Cellphone" />
                <Form.Label>Booking Date</Form.Label>
                <Form.Control type="date" placeholder="Type the booking date" />
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Type your full name" />
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Type your full name" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings;