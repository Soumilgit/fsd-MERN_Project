import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import TopBar from './components/TopBar';
import Success from './Pages/Success/Success';

import Login from './Pages/Login';
import Register from './Pages/Register';
import AboutReadMore from './Pages/AboutReadMore';
import Getnewsandoffers from './components/Getnewsandoffers';
import Contactus from './Pages/Contactus';

import './App.css';


const App = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-read-more" element={<AboutReadMore />} />
          <Route path="/about-read-more" element={<AboutReadMore />} />
          <Route path="/subscribe-section" element={<Getnewsandoffers />} />
          <Route path="/contact-us" element={<Contactus />} />
          
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
