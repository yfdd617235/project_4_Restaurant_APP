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
            <Route path='/Bookings' element={<Bookings></Bookings>} ></Route> 
        </Routes>
    -> Import each route
            import {Route, Routes} from 'react-router-dom'
            import Home from './components/home/Home'
            import AboutUs from './components/aboutUs/AboutUs'
            import Menu from './components/menu/Menu'
            import Bookings from './components/bookings/Bookings'

Then in index.js put BrowserRouter envolvin App:
    ->  <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
Then in app.js creat links to differentss routes using the Component Navigator:
-> Component:      <div>
                        <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/Menu">Menu</NavLink></li>
                        <li><NavLink to="/Bookings">Bookings</NavLink></li>
                        </ul>
                    </div>

-> in app.js -> <Navigator></Navigator>

3. Install react bootstrap -> npm i react-bootstrap
put import 'bootstrap/dist/css/bootstrap.min.css'; in Index.js


4. Creat database in firebase.com
5. Create handler of firebase 
    -> Create folder with name "services" in src folder
    -> Create document "firebase.js"
    -> Install firebase "npm install firebase"
    -> import firebase and firestore in file "firebase.js": //This should be in a private file, lets see Julio Class video
        import { initializeApp } from "firebase/app";
            import { getFirestore } from "firebase/firestore";

            // Your web app's Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyDmld0IFazRqsbE8vYDzCKeGZCzjasjllA",
                authDomain: "project4restaurantapi.firebaseapp.com",
                projectId: "project4restaurantapi",
                storageBucket: "project4restaurantapi.appspot.com",
                messagingSenderId: "978667294396",
                appId: "1:978667294396:web:a8892ae11b5df14034cab9"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            export default db;
    -> import db in bookings.jsx
        import {collection, addDoc, onStapshot} from 'firebase/firestore'
        import db from '../../services/firebase.js'



Atribuciones_imagenes
1<a href="https://www.freepik.es/foto-gratis/costilla-restaurante-costillas-proceso-preparar-costillas-cerdo-fuego-abierto_29150983.htm#query=smoked_brisket&position=0&from_view=search&track=ais">Imagen de Kireyonok_Yuliya</a> en Freepik



