import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <main className="vlo-main">
      <div className="vlo-title-bar-1 tarvel-titlebar-bg">
        <h1>Contact Me</h1>
      </div>
      <div className="vlo-contact">
        <div className="container">
          <p className="contact-desc">
            Need to contact us? Use one of the options below. Our team are
            always happy to help...
          </p>
          <div className="row gx-5">
            <div className="col-lg-6">
              {/* contact form */}
              <ContactForm />
            </div>
            <div className="col-lg-6">
              <div className="contact-img">
                <img src="/images/contact/contact.jpg" alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vlo-contact-map">
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76659.7160335086!2d89.31229466381153!3d24.84436806123847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1687165936929!5m2!1sen!2sbd"
            height="700"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
