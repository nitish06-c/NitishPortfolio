import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqazjqao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

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
            <form onSubmit={sendEmail}>
              <div className="fields">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
              {status === 'SUCCESS' && <p className="success-message">Message sent successfully!</p>}
              {status === 'ERROR' && <p className="error-message">Failed to send message. Please try again later.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
