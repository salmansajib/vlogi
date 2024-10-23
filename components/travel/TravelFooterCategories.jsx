const categoryLinks = [
  { name: "Style", url: "travel-about.html" },
  { name: "Travel", url: "travel-about.html" },
  { name: "Lifestyle", url: "travel-about.html" },
  { name: "Fashion", url: "travel-about.html" },
];

function TravelFooterCategories() {
  return (
    <div className="col-lg-3 col-6 col-sm-6 col-6">
      <div className="footer-categories-widget">
        <h5 className="footer-menu-name">Categories</h5>
        <ul className="menu-list">
          {categoryLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelFooterCategories;
