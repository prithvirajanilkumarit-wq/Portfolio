import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    /* Build mailto link as fallback (no backend required) */
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0AFrom: ${email}%0A%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:prithviraj.anilkumar.it@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">// get in touch</span>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="section-divider" />

        <div className="contact__grid">
          {/* Left: info */}
          <div className="contact__info">
            <p className="contact__intro">
              I'm currently open to new opportunities — whether it's a full-time role in data
              analytics, business intelligence, or full-stack development. Feel free to reach out!
            </p>

            <div className="contact__details">
              <a href="mailto:prithviraj.anilkumar.it@gmail.com" className="contact__detail-item" aria-label="Send email">
                <div className="contact__detail-icon" aria-hidden="true">✉</div>
                <div>
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">prithviraj.anilkumar.it@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917096512260" className="contact__detail-item" aria-label="Call phone number">
                <div className="contact__detail-icon" aria-hidden="true">📱</div>
                <div>
                  <p className="contact__detail-label">Phone</p>
                  <p className="contact__detail-value">+91-7096512260</p>
                </div>
              </a>

              <div className="contact__detail-item">
                <div className="contact__detail-icon" aria-hidden="true">📍</div>
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">Surat, Gujarat 395017, India</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail-item"
                aria-label="Visit LinkedIn profile"
              >
                <div className="contact__detail-icon" aria-hidden="true">💼</div>
                <div>
                  <p className="contact__detail-label">LinkedIn</p>
                  <p className="contact__detail-value">linkedin.com/in/prithviraj-anilkumar-974046329</p>
                </div>
              </a>

              <a
                href="https://github.com/prithvirajanilkumarit-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail-item"
                aria-label="Visit GitHub profile"
              >
                <div className="contact__detail-icon" aria-hidden="true">🐙</div>
                <div>
                  <p className="contact__detail-label">GitHub</p>
                  <p className="contact__detail-value">github.com/prithvirajanilkumarit-wq</p>
                </div>
              </a>
            </div>

            {/* Resume download button */}
            <div className="contact__resume">
              <p className="contact__resume-label">Download Resume</p>
              <a
                href="{`${process.env.PUBLIC_URL}/resume.pdf`}"
                download="Prithviraj_Anilkumar_Resume.pdf"
                className="btn-primary contact__resume-btn"
              >
                📄 Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            className="contact__form card"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="contact__input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">Subject *</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                className="contact__input"
                placeholder="Opportunity / Collaboration / General"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={status === 'sending'}
              aria-live="polite"
            >
              {status === 'sending' ? 'Opening mail...' : status === 'sent' ? '✓ Mail opened!' : 'Send Message →'}
            </button>

            <p className="contact__note">
              * Clicking Send will open your default mail client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
