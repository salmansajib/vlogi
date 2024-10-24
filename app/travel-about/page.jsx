import Instagram from "@/components/travel/Instagram";
import TravelAboutMain from "@/components/travel/TravelAboutMain";
import TravelAboutPartner from "@/components/travel/TravelAboutPartner";
import TravelAboutTestimonial from "@/components/travel/TravelAboutTestimonial";

function TravelAbout() {
  return (
    <main className="vlo-main">
      <div className="vlo-title-bar-1 tarvel-titlebar-bg">
        <h1>About Me</h1>
      </div>
      {/* <!-- about --> */}
      <TravelAboutMain />

      {/* <!-- vlo-partner-1 --> */}
      <TravelAboutPartner />

      {/* <!-- Testimonial --> */}
      <TravelAboutTestimonial />

      {/* <!-- Intatram --> */}
      <Instagram />
    </main>
  );
}

export default TravelAbout;
