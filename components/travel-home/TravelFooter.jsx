import React from "react";

function TravelFooter() {
  return (
    <footer className="vlo-footer-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-logo">
              <a href="index-2.html">
                <img src="/images/logo/vlo-footer-logo-1.svg" alt="logo" />
              </a>
              <p>
                Explicabo cursus veniam Ipsa rem excepturi netus distinctio et
                Hac expedita pharetra scelerisque imperdiet porttitor fugiat
                commodo conubia dolorem integer at thrive digital we're about
                delivering top-notch service to our clients.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6 col-sm-6 col-6">
            <div className="footer-categories-widget">
              <h5 className="footer-menu-name">Categories</h5>
              <ul className="menu-list">
                <li>
                  <a href="travel-about.html"> Style</a>
                </li>
                <li>
                  <a href="travel-about.html"> Travel</a>
                </li>
                <li>
                  <a href="travel-about.html"> Lifestyle</a>
                </li>
                <li>
                  <a href="travel-about.html"> Fashion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="footer-pages-widget">
              <h5 className="footer-menu-name">Pages</h5>
              <ul className="menu-list">
                <li>
                  <a href="photograpy-about.html">About Me</a>
                </li>
                <li>
                  <a href="photograpy-blog.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="contact.html">Faq</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <div className="footer-support-widget">
              <h5 className="footer-menu-name">Support</h5>
              <ul className="menu-list">
                <li>
                  <a href="travel-about.html">Support Center</a>
                </li>
                <li>
                  <a href="travel-about.html">Feedback</a>
                </li>
                <li>
                  <a href="travel-about.html">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vlo-footer-inner">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-social">
                <a href="index-4.html">
                  <i className="flaticon-twitter"></i>
                </a>
                <a href="index-4.html">
                  <i className="flaticon-instagram"></i>
                </a>
                <a href="index-4.html">
                  <i className="flaticon-linkedin"></i>
                </a>
                <a href="index-4.html">
                  <i className="flaticon-facebook-app-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-news-letter">
                <div className="news-letter-heading">
                  <h2>Sign up to newsletter</h2>
                </div>
                <div className="news-letter-form">
                  <div className="vlo-footer-form">
                    <form>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                      <button type="submit">
                        <span>Submit</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          Copyright © 2009 - 2023 <a href="thecodude.com">Thecodude</a> Inc.
        </div>
      </div>
    </footer>
  );
}

export default TravelFooter;
