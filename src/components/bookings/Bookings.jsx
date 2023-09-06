
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
// import BookingTable from './BookingTable';
import './bookings.css'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import db from '../../services/firebase.js'

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    name: "",
    cell: "",
    date: "",
    hour: "",
    diners: "",
    email: ""
  })

  function onSave(event) {

    event.preventDefault(); //It is necessary to avoid charge all webpage clicking Submit
    console.log("This is the form", form)

    const resp = addDoc(collection(db, 'booking'), form)
      .then(resp => alert("Booking saved"))

    console.log("Saved info", resp)
  }

  function onChange(event) {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value }) //preguntar si esto debería ir en onSave
  }

  async function showBookings() {
    onSnapshot(collection(db, 'booking'), (snapshot) => {
      const list = [];
      snapshot.forEach(element => {
        list.push({ ...element.data(), id: element.id })
        setBookings(list)
      });
    })
    console.log("Bookings saved", bookings)
  }

  useEffect(() => {
    showBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='wrap'>
        <div className='formContent'>
          <div className='Column'>
            <Form className='form-Booking' onSubmit={onSave}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name='name' value={form.name} onChange={onChange} placeholder="Type your full name" /><br />
              <Form.Label>Cellphone</Form.Label>
              <Form.Control type="text" name='cell' value={form.cell} onChange={onChange} placeholder="Type your Cellphone" /><br />
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name='date' value={form.date} onChange={onChange} /><br />
              <Form.Label>Hour</Form.Label>
              <Form.Control type="time" name='hour' value={form.hour} onChange={onChange} /><br />
              <Form.Label>Diners</Form.Label>
              <Form.Control type="text" name='diners' value={form.diners} onChange={onChange} /><br />
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

        <div className='table-container'>
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Cellphone</th>
                <th>Date</th>
                <th>Hour</th>
                <th>Diners</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                bookings.map((booking, index) => {
                  return (
                    <tr key={index}> {/*this key is to solve warning of react identification ID*/}
                      <td>{booking.name}</td>
                      <td>{booking.cell}</td>
                      <td>{booking.date}</td>
                      <td>{booking.hour}</td>
                      <td>{booking.diners}</td>
                      <td>{booking.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>

      </div>
    </>
  )
}

export default Bookings;