import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="column left">
            <p className="intro">Feel free to reach out to me using the details below or through the contact form.</p>
            <div className="icons">
              <div className="info-row">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <div className="info">
                  <div className="info-title">Name</div>
                  <div className="info-detail">Nitish Madabusi</div>
                </div>
              </div>
              <div className="info-row">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                <div className="info">
                  <div className="info-title">Location</div>
                  <div className="info-detail">Toronto, Ontario</div>
                </div>
              </div>
              <div className="info-row">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <div className="info">
                  <div className="info-title">Email Address</div>
                  <div className="info-detail">nit.madabusi@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form action="#">
              <div className="fields">
                <div className="field">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field">
                <textarea cols="30" rows="10" placeholder="Write your message..."></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
