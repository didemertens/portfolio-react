import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-circle">
      <div className="contact-list-section">
        <h2>Contact</h2>
        <div className="contact-text-icon">
          <FaEnvelope className="contact-icon" />
          <a href="mailto: d.g.j.mertens@gmail.com" target="_blank" rel="noopener noreferrer">d.g.j.mertens@gmail.com</a>
        </div>
        <div className="contact-text-icon">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/didemertens" target="_blank" rel="noopener noreferrer">github.com/didemertens</a>
        </div>
        <div className="contact-text-icon">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/didemertens/" target="_blank" rel="noopener noreferrer">linkedin.com/in/didemertens</a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact