
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Menu from './components/menu/Menu'
import Booking from './components/bookings/Bookings'

function App() {
 
  return (
    <div className="App">
      <h1>This is App</h1>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route> 
        <Route path='/AboutUs' element={<AboutUs></AboutUs>} ></Route> 
        <Route path='/Menu' element={<Menu></Menu>} ></Route> 
        <Route path='/Bookings' element={<Booking></Booking>} ></Route> 
      </Routes>
    </div>
  );
}

export default App;
