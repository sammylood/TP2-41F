import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx';
import Homepage from '../Accueil/Homepage.jsx';
import Concerts from '../Concerts/Concerts.jsx';
import FormAjoutConcert from "../FormAjoutConcert/FormAjoutConcert";
import DetailConcert from '../Concert/Concert.jsx';
import AuthContextProvider from '../AuthContext/AuthContextProvider'
function App() {
  return (
    <div>
      <AuthContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/liste-concerts" element={<Concerts />} /> 
            <Route path="/concert/:id" element={<DetailConcert />} />
            <Route path="/concert/ajout-concert" element={<FormAjoutConcert />} /> 
          </Routes>
          <Footer />
      </AuthContextProvider>
    </div>
  )
}

export default App
