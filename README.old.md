# project4_react_esmeralda
This is an example of project 4, By teacher Esmeralda

Procedure:

1. npx create-react-app ./
2. Stop app and create/install react router dom -> npm i react-router-dom. 

Then in app.js import and reacte Routes/Route:
    -> import {Route, Routes} from 'react-router-dom'
    ->  <Routes>
            <Route path='/' element={<Home></Home>} ></Route> 
            <Route path='/AboutUs' element={<AboutUs></AboutUs>} ></Route> 
            <Route path='/Menu' element={<Menu></Menu>} ></Route> 
            <Route path='/Bookings' element={<Booking></Booking>} ></Route> 
        </Routes>
    -> Import each route
            import {Route, Routes} from 'react-router-dom'
            import Home from './components/home/Home'
            import AboutUs from './components/aboutUs/AboutUs'
            import Menu from './components/menu/Menu'
            import Booking from './components/bookings/Bookings'

Then in index.js put BrowserRouter envolvin App:
    ->  <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>

3. Install react bootstrap -> npm i react-bootstrap