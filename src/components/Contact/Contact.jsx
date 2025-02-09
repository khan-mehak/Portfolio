import React, { useState } from 'react';
import './Contact.css';
import mail from '../../assets/mail.png';
import location from '../../assets/location.jpg';

const Contact = () => {
  const [result, setResult] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    
    formData.append("access_key", "60fdc7f3-6c29-4a5f-a408-ec0e115d9801");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully! ✅");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Connect Today</h1>
        <img src={mail} alt="Connect Icon" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>We’d love to hear from you! Reach out to us through any of the channels below:</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail Icon" />
              <p>khaxxxx@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location Icon" />
              <p>India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" placeholder="Enter Your Name" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter Your Email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="8" placeholder="Write your thoughts here..." required></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>

      {result && <p className="result-message">{result}</p>}
    </div>
  );
};

export default Contact;
