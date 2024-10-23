"use client";

import { useState } from "react";

const TravelFooterNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic
  };

  return (
    <div className="col-lg-8">
      <div className="footer-news-letter">
        <div className="news-letter-heading">
          <h2>Sign up to newsletter</h2>
        </div>
        <div className="news-letter-form">
          <div className="vlo-footer-form">
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={handleEmailInputChange}
              />
              <button type="submit">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelFooterNewsletter;
