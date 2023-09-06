import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { collection, onSnapshot } from 'firebase/firestore'
import db from '../../services/firebase.js'
import './bookingtable.css'

function BookingTable() {
  const [bookings, setBookings] = useState([]);

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
      <div className='table-title'>
      <h4>Bookings Table</h4>
      </div>
      <div className='table-container'>
        <Table className='table-scroll'> 
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
    </>
  )
}

export default BookingTable