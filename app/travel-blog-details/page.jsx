import TravelBlogDetailsComment from "@/components/travel/TravelBlogDetailsComment";
import TravelBlogDetailsForm from "@/components/travel/TravelBlogDetailsForm";
import TravelBlogDetailsMain from "@/components/travel/TravelBlogDetailsMain";
import TravelBlogDetailsPost from "@/components/travel/TravelBlogDetailsPost";

export const metadata = {
  title: "Travel Blog Details",
  description:
    "blog,personal,photography,food,travel,agency,portfolio,developer,photographer",
};

function TravelBlogDetails() {
  return (
    <main className="vlo-main">
      <TravelBlogDetailsMain />
      <TravelBlogDetailsPost />
      <TravelBlogDetailsComment />
      <TravelBlogDetailsForm />
    </main>
  );
}

export default TravelBlogDetails;
