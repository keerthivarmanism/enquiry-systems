import React from 'react';
import '../assets/contact.css'; // Import CSS file with gradient styles

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>
        <p>Contact us for any inquiries or support.</p>
      </footer>
    </div>
  );
};

export default Contact;
