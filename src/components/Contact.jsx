import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="contact-container">
        <div className="contact-hero">
          <h1 className="contact-title">Connect with ZOVAi.in</h1>
          <p className="contact-subtitle">Experience AI-powered customer support. We're here to help!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>📞 Contact Information</h2>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>support@zovai.in</p>
                <p>ai-help@zovai.in</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Visit Us</h3>
                <p>AI Innovation Hub</p>
                <p>Tech Park, Bangalore 560001</p>
                <p>India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h3>Business Hours</h3>
                <p>24/7 AI Support Available</p>
                <p>Human Support: 9:00 AM - 9:00 PM IST</p>
                <p>All Days of the Week</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>💬 Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <h2>🗺️ Find Us</h2>
          <div className="map-placeholder">
            <p>📍 Interactive Map Coming Soon</p>
            <p>AI Innovation Hub, Tech Park, Bangalore 560001, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}