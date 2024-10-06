import React from 'react';
import lalakeImage from './lalake.jpg'; // Adjust the path as necessary

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        
        {/* Image Section */}
        <div className="about-col-1">
          <img src={lalakeImage} alt="Contact Image" width="700" />
        </div>
        
        {/* Contact Form */}
        <form action="" className="contact__form">
          <input
            type="text"
            placeholder="Name"
            required
            className="contact__input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="contact__input"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="contact__input"
          />
          <textarea
            cols="0"
            rows="6"
            placeholder="Message"
            className="contact__input"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="contact__button button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
