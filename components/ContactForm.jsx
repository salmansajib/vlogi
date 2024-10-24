"use client";

import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      subject,
      message,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get In Touch</h2>
      <p>Drop us an email and we'll get back to you within 48hrs...</p>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-field">
            <label htmlFor="name_12">Name:</label>
            <input
              type="text"
              name="name"
              id="name_12"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-field">
            <label htmlFor="email_12">Email:</label>
            <input
              type="email"
              name="email"
              id="email_12"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="subject_12">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject_12"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message_12">Message</label>
        <textarea
          name="message"
          id="message_12"
          placeholder="Your Message Here"
          rows="7"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="form-button">
        <button type="submit">Confirm & Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
