// client/src/Contact/Contact.jsx
import React from "react";

import "./Contact.css";

const ContactUs = () => {
  return (
    <section id="contact">
      <h1 className="heading"><span>Contact</span> us</h1>
      <div className="contact-container">
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2318786211672!2d36.79463679999999!3d-1.2107672999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d454886e4ab%3A0xc48e63a813496999!2sTwo%20Rivers!5e0!3m2!1sen!2ske!4v1717074885498!5m2!1sen!2ske" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="form-container">
          <form>
            <input type="text" placeholder="name" className="box" />
            <input type="number" placeholder="number" className="box" />
            <textarea name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
