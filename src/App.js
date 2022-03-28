// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './Header/header';
import Slider from './Slider/slider';
import Service from './Service/service';
import Footer from './Footer/fooeter';
import Login from './Login/login';
import Register from './Register/register';
import About from './About/about';
import Price from './Price/price';
import Booking from './Booking/booking';
import Contact from './Contact/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      
      <Routes>
      <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/service' element={< Service />}></Route>
          <Route exact path="/register" element={< Register />}></Route>
          <Route exact path="/login" element={< Login />}></Route>
          <Route exact path="/price" element={< Price />}></Route>
          <Route exact path="/booking" element={< Booking />}></Route>
          <Route exact path="/contact" element={< Contact />}></Route>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
