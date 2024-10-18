import Banner from "./Banner";
import Instagram from "./Instagram";
import PopularPost from "./PopularPost";
import PopularTopics from "./PopularTopics";
import RelevantTags from "./RelevantTags";
import TrendingVideos from "./TrendingVideos";
import VlogPost1 from "./VlogPost1";

function TravelMain() {
  return (
    <main className="vlo-main">
      <Banner />
      <PopularTopics />
      <TrendingVideos />
      <VlogPost1 />
      <RelevantTags />
      <PopularPost />
      <Instagram />
    </main>
  );
}

export default TravelMain;
