import React from "react";

import "./Hoodies.css";
import hoodie1 from "../collection/hoodie1.jpg";
import hoodie2 from "../collection/hoodie2.jpg";
import hoodie3 from "../collection/hoodie3.jpg";
import hoodie4 from "../collection/hoodie4.jpg";
import hoodie5 from "../collection/hoodie5.jpg";
import hoodie6 from "../collection/hoodie6.jpg";
import hoodie7 from "../collection/hoodie7.jpeg";
import hoodie8 from "../collection/hoodie8.jpeg";
import hoodie9 from "../collection/hoodie9.jpeg";
import hoodie10 from "../collection/hoodie10.jpeg";
// Import other hoodie images here

const Hoodies = () => {
  const hoodies = [
    { src: hoodie1, alt: "Hoodie 1", price: "Ksh 1500" },
    { src: hoodie2, alt: "Hoodie 2", price: "Ksh 1500" },
    { src: hoodie3, alt: "Hoodie 3", price: "Ksh 1500" },
    { src: hoodie4, alt: "Hoodie 4", price: "Ksh 1500" },
    { src: hoodie5, alt: "Hoodie 5", price: "Ksh 1500" },
    { src: hoodie6, alt: "Hoodie 6", price: "Ksh 1500" },
    { src: hoodie7, alt: "Hoodie 7", price: "Ksh 1500" },
    { src: hoodie8, alt: "Hoodie 8", price: "Ksh 1500" },
    { src: hoodie9, alt: "Hoodie 9", price: "Ksh 1500" },    
    { src: hoodie10, alt: "Hoodie 10", price: "Ksh 1500" },    
  ];

  return (
    <section id="hoodie-collection">
      <h1 className="heading"><span>Hoodie</span> collection</h1>
      <div className="carousel">
        {hoodies.map((hoodie, index) => (
          <div className="item" key={index}>
            <img src={hoodie.src} alt={hoodie.alt} />
            <p className="price">{hoodie.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hoodies;
