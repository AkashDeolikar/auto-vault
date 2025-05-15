import React, { useState } from "react";
import './contact.css'

//imports


const Contact = () => {
  //constants
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="home-container">
      <section className="hero">
        <h1>HelpDesk and mails</h1>
        <p>Your ultimate destination to explore cars, compare features, and find your dream ride.</p>
        {/* <a href="/contactclick" className="explore-btn">Contact Us</a> */}
      </section>

      <div className="contact-container">
        <h2>Contact Us</h2>

        <div className="contact-info">
          <p><strong>Email:</strong> support@motomart.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;