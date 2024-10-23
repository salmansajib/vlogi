const supportLinks = [
  { name: "Support Center", url: "travel-about.html" },
  { name: "Feedback", url: "travel-about.html" },
  { name: "Terms & Condition", url: "travel-about.html" },
];

function TravelFooterSupport() {
  return (
    <div className="col-lg-2 col-md-6 col-sm-6 col-6">
      <div className="footer-support-widget">
        <h5 className="footer-menu-name">Support</h5>
        <ul className="menu-list">
          {supportLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelFooterSupport;
