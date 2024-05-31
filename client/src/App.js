// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

function App() {
    return (
        <Router>            
            <Navbar />        
            <Hero />   
        </Router>
    );
};

export default App;