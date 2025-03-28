import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx';
import Homepage from '../Accueil/Homepage.jsx';
import Concerts from '../Concerts/Concerts.jsx';
import Concert from '../Concert/Concert.jsx';

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/liste-concerts" element={<Concerts />} /> 
         <Route path="/concert/:id" element={<Concert />} /> 
        </Routes>
        <Footer />

    </div>
  )
}

export default App
