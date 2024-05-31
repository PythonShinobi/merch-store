// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import TShirts from "./Merch/T-shirts";
import Hoodies from "./Merch/Hoodies";
import AboutUs from "./About/About";
import ContactUs from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return (
        <Router>            
            <Navbar />        
            <Hero />   
            <TShirts />
            <Hoodies />
            <AboutUs />
            <ContactUs />
            <Footer />
        </Router>
    );
};

export default App;