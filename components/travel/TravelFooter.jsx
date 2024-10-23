import TravelFooterLogo from "./TravelFooterLogo";
import TravelFooterCategories from "./TravelFooterCategories";
import TravelFooterPages from "./TravelFooterPages";
import TravelFooterSupport from "./TravelFooterSupport";
import TravelFooterSocial from "./TravelFooterSocial";
import TravelFooterNewsletter from "./TravelFooterNewsletter";
import TravelFooterCopyright from "./TravelFooterCopyright";

function TravelFooter() {
  return (
    <footer className="vlo-footer-6">
      <div className="container">
        <div className="row">
          <TravelFooterLogo />
          {/* Footer Links */}
          <TravelFooterCategories />
          <TravelFooterPages />
          <TravelFooterSupport />
        </div>
        <div className="vlo-footer-inner">
          <div className="row">
            <TravelFooterSocial />
            <TravelFooterNewsletter />
          </div>
        </div>
        <TravelFooterCopyright />
      </div>
    </footer>
  );
}

export default TravelFooter;
