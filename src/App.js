
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Menu from './components/menu/Menu';
import Bookings from './components/bookings/Bookings';
import Navigator from './components/navigator/Navigator';

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
