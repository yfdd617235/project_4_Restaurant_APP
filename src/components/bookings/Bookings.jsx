
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BookingTable from './BookingTable';
import './bookings.css'

function Bookings() {
  const[form, setForm] = useState({
    name : "",
    cell : "",
    date : "",
    hour : "",
    diners: "",
    email : ""
  })
  
  function onSave(event){
    // sabe booking
    event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit
    console.log("This is the form", form)
  }

  function onChange(event){
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);

    setForm({...form, [event.target.name] : event.target.value}) //preguntar si esto debería ir en onSave
  }

  return (
    <>
      <div className='wrap'>
        <div className='formContent'>
          <div className='Column'>
            <Form className='form-Booking' onSubmit={onSave}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='name' value={form.name} onChange={onChange} placeholder="Type your full name" /><br/>
                <Form.Label>Cellphone</Form.Label>
                <Form.Control type="text" name='cell' value={form.cell} onChange={onChange} placeholder="Type your Cellphone" /><br/>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name='date' value={form.date} onChange={onChange}/><br/>
                <Form.Label>Hour</Form.Label>
                <Form.Control type="time" name='hour' value={form.hour} onChange={onChange}/><br/>
                <Form.Label>Diners</Form.Label>
                <Form.Control type="text" name='diners' value={form.diners} onChange={onChange}/><br/>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Type your email" />
              <br />
              <Form.Text className='text-muted'>
                Your information won´t be shared or re-used
              </Form.Text>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        {/* <BookingTable/> */}
      </div>
    </>
  )
}

export default Bookings;