
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';
import Bookings from './components/Bookings/Bookings';
import Navigator from './components/Navigator/Navigator';

function App() {
 
  return (
    <div className="App">
      <Navigator></Navigator>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route> 
        <Route path='/AboutUs' element={<AboutUs></AboutUs>} ></Route> 
        <Route path='/Menu' element={<Menu></Menu>} ></Route> 
        <Route path='/Bookings' element={<Bookings></Bookings>} ></Route> 
      </Routes>
      
    </div>
  );
}

export default App;
