import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaPaperPlane,
  FaCopy
} from 'react-icons/fa';
import './Contact.css';

function Contact({ onToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleCopy = (text, label) => {
    navigator.clipboard?.writeText(text);
    if (onToast) onToast(`Copied ${label} to clipboard!`);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:prithviraj.anilkumar.it@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{`// Get In Touch`}</span>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <p className="section-subtitle">
            Interested in collaboration or open SQL Developer / ERP Reporting / Data Analyst roles? Reach out directly.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            className="contact__info-col"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="contact__info-card glass-card">
              <h3 className="contact__heading">Contact Information</h3>
              <p className="contact__desc">
                Feel free to reach out for job opportunities, project inquiries, or networking.
              </p>

              <div className="contact__details">
                <motion.button
                  className="contact__item contact__item-btn"
                  onClick={() => handleCopy('prithviraj.anilkumar.it@gmail.com', 'email')}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="contact__icon-box"><FaEnvelope /></div>
                  <div className="contact__text-wrap">
                    <span className="contact__label">Email (Click to copy)</span>
                    <span className="contact__value">prithviraj.anilkumar.it@gmail.com</span>
                  </div>
                  <FaCopy className="contact__copy-icon" />
                </motion.button>

                <motion.button
                  className="contact__item contact__item-btn"
                  onClick={() => handleCopy('+91-7096512260', 'phone')}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="contact__icon-box"><FaPhoneAlt /></div>
                  <div className="contact__text-wrap">
                    <span className="contact__label">Phone (Click to copy)</span>
                    <span className="contact__value">+91-7096512260</span>
                  </div>
                  <FaCopy className="contact__copy-icon" />
                </motion.button>

                <motion.div
                  className="contact__item"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="contact__icon-box"><FaMapMarkerAlt /></div>
                  <div className="contact__text-wrap">
                    <span className="contact__label">Location</span>
                    <span className="contact__value">Surat, Gujarat, India</span>
                  </div>
                </motion.div>

                <motion.a
                  href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__item"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="contact__icon-box"><FaLinkedin /></div>
                  <div className="contact__text-wrap">
                    <span className="contact__label">LinkedIn</span>
                    <span className="contact__value">prithviraj-anilkumar-974046329</span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/prithvirajanilkumarit-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__item"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="contact__icon-box"><FaGithub /></div>
                  <div className="contact__text-wrap">
                    <span className="contact__label">GitHub</span>
                    <span className="contact__value">github.com/prithvirajanilkumarit-wq</span>
                  </div>
                </motion.a>
              </div>

              {/* Download Resume Box */}
              <div className="contact__resume-box">
                <a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  download="Prithviraj_Anilkumar_Resume.pdf"
                  className="btn-primary contact__resume-btn"
                >
                  <FaFileDownload /> Download Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="contact__form-col"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <h3 className="contact__heading">Send a Message</h3>

              <div className="contact__input-group">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__field-label">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__field-label">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject" className="contact__field-label">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="contact__input"
                  placeholder="Job Opportunity / SQL Inquiry / Project"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__field-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Type your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary contact__submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Preparing Mail...'
                ) : status === 'sent' ? (
                  '✓ Mail Client Opened!'
                ) : (
                  <>
                    <span>Send Message</span> <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
