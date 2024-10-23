"use client";

import { useState } from "react";

function TravelDetailForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");

  const handleCheckboxChanged = () => {
    setIsChecked(!isChecked);
  };
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", {
      name,
      email,
      website,
      comment,
      isChecked,
    });
  };

  return (
    <div className="vlo-form">
      <div className="container">
        <div className="vlo-form-heading">
          <h2>Post a Comment</h2>
          <p>Drop us an email and we'll get back to you within 48hrs</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      id="name"
                      type="text"
                      name="name_3"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email_3"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="Website">Website Name:</label>
                <br />
                <input
                  id="Website"
                  type="url"
                  name="homepage"
                  placeholder="Your Website url"
                  value={website}
                  onChange={handleWebsiteChange}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-field">
                <label htmlFor="comment">Type a Comment?</label>
                <textarea
                  id="comment"
                  name="message_3"
                  placeholder="Your Comment"
                  rows="7"
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
              </div>
            </div>
            <div className="form button">
              <input type="submit" value="Submit" />
              <label className="container">
                I agree that my submitted date is being collected and stored.
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChanged}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TravelDetailForm;
