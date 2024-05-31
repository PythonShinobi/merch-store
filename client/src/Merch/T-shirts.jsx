// client/src/Merch/T-shirts.jsx
import React from "react";

import "./T-shirts.css";
import shirt1 from "../collection/shirt1.jpg";
import shirt2 from "../collection/shirt2.jpg";
import shirt3 from "../collection/shirt3.jpg";
import shirt4 from "../collection/shirt4.jpg";
import shirt5 from "../collection/shirt5.jpg";
import shirt6 from "../collection/shirt6.jpg";
import shirt7 from "../collection/shirt7.jpeg";
import shirt8 from "../collection/shirt8.jpeg";
import shirt9 from "../collection/shirt9.jpeg";
import shirt10 from "../collection/shirt10.jpeg";

const TShirts = () => {
  const shirts = [
    { src: shirt1, alt: "Shirt 1", price: "Ksh 1000" },
    { src: shirt2, alt: "Shirt 2", price: "Ksh 1000" },
    { src: shirt3, alt: "Shirt 3", price: "Ksh 1000" },
    { src: shirt4, alt: "Shirt 4", price: "Ksh 1000" },
    { src: shirt5, alt: "Shirt 5", price: "Ksh 1000" },
    { src: shirt6, alt: "Shirt 6", price: "Ksh 1000" },
    { src: shirt7, alt: "Shirt 7", price: "Ksh 1000" },
    { src: shirt8, alt: "Shirt 8", price: "Ksh 1000" },
    { src: shirt9, alt: "Shirt 9", price: "Ksh 1000" },
    { src: shirt10, alt: "Shirt 10", price: "Ksh 1000" },    
  ];

  return (
    <section id="t-shirts">
      <h1 className="heading"><span>Featured</span> T-shirts </h1>
      <div className="grid">
        {shirts.map((shirt, index) => (
          <div className="item" key={index}>
            <img src={shirt.src} alt={shirt.alt} />
            <p className="price">{shirt.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TShirts;