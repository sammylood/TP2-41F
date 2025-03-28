import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./Homepage.css";
import InfoSection from "../InfoSection/InfoSection";
import NextEvents from "../NextEvents/NextEvents";



function Homepage() {
   
    return (
        <>

         <InfoSection />

         <NextEvents />
        </>
    );
}

export default Homepage;
