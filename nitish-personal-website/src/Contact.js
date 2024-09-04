import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message, please try again.');
      }
    } catch (error) {
      alert('Error occurred. Please try again.');
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
              {/* Icons and contact details */}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
