const pagesLinks = [
  { name: "About Me", url: "photograpy-about.html" },
  { name: "News", url: "photograpy-blog.html" },
  { name: "Contact", url: "contact.html" },
  { name: "Faq", url: "contact.html" },
];

function TravelFooterPages() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
      <div className="footer-pages-widget">
        <h5 className="footer-menu-name">Pages</h5>
        <ul className="menu-list">
          {pagesLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelFooterPages;
