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
            <div className="text">Get in touch</div>
            <p>Below are the details for contacting me. Do use the web form if you have any queries.</p>
            <div className="icons">
              <div className="row">
                <FontAwesomeIcon icon={faUser} />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Nitish Madabusi</div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="info">
                  <div className="head">Location</div>
                  <div className="sub-title">Toronto, Ontario</div>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="info">
                  <div className="head">Email Address</div>
                  <div className="sub-title">nit.madabusi@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea cols="30" rows="10" placeholder="Write Message .."></textarea>
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
