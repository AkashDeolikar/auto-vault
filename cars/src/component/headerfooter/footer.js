import React, { useState } from "react";
import "./footer.css";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [setFormData] = useState({
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MotoMart TrueValue 🚘</h3>
          <p>Your trusted car companion for buying and selling cars.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/cardetails">Car Detail</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@MotoMart.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Pune, India</p>
          <FaGoogle /> <FaFacebook /> <FaInstagram />
          <form className="contact-from" onSubmit={handleSubmit}>
            <input
              name="message"
              placeholder="Your Message"
              value={FormData.message}
              rows={4}
              required
            />
            <button className="footerbtn" type="submitfooter">Send</button>
          </form>
          {/* <p></p>
          <input className="text" type="text" placeholder="type here" ></input>
          <button className="nav-btn right" onClick={SubmitEvent}>➡️</button> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MotoMart TrueValue. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
