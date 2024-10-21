import Instagram from "@/components/travel/Instagram";
import TravelBlogPosts from "@/components/travel/TravelBlogPosts";

export const metadata = {
  title: "Vlogi - Travel Blog",
  description:
    "blog,personal,photography,food,travel,agency,portfolio,developer,photographer",
};

const posts = [
  {
    id: 1,
    imgSrc: "/images/posts/post-1.jpg",
    imgAlt: "Stop Wasting Your Time And Start Beach Traveling Tour",
    category: "HOLIDAY",
    title: "Stop Wasting Your Time And Start Beach Traveling Tour",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 2,
    imgSrc: "/images/posts/post-2.jpg",
    imgAlt: "Chasing the Perfect Scent of Summer Perfumes Today",
    category: "HOLIDAY",
    title: "Chasing the Perfect Scent of Summer Perfumes Today",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 3,
    imgSrc: "/images/posts/post-3.jpg",
    imgAlt: "The Positive Impact of Basic Healthy Yoga Routine",
    category: "HOLIDAY",
    title: "The Positive Impact of Basic Healthy Yoga Routine",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 4,
    imgSrc: "/images/posts/post-4.jpg",
    imgAlt: "The Positive Impact of Basic Healthy Yoga Routine",
    category: "HOLIDAY",
    title: "The Positive Impact of Basic Healthy Yoga Routine",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 5,
    imgSrc: "/images/posts/post-5.jpg",
    imgAlt: "The Positive Impact of Basic Healthy Yoga Routine",
    category: "HOLIDAY",
    title: "The Positive Impact of Basic Healthy Yoga Routine",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 6,
    imgSrc: "/images/posts/post-6.jpg",
    imgAlt: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    category: "HOLIDAY",
    title: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 7,
    imgSrc: "/images/posts/post-7.jpg",
    imgAlt: "The Positive Impact of Basic Healthy Yoga Routine",
    category: "HOLIDAY",
    title: "The Positive Impact of Basic Healthy Yoga Routine",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 8,
    imgSrc: "/images/posts/post-8.jpg",
    imgAlt: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    category: "HOLIDAY",
    title: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
  {
    id: 9,
    imgSrc: "/images/posts/post-9.jpg",
    imgAlt: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    category: "HOLIDAY",
    title: "Traveller Visiting Ice Cave Amazing Eye-catching Scenes",
    author: "Anderson",
    date: "Jan 12, 2026",
    comments: 10,
    postUrl: "post-details.html",
  },
];

function TravelBlog() {
  return (
    <main className="vlo-main">
      <div className="vlo-title-bar-1 tarvel-titlebar-bg">
        <h1>Blog Posts</h1>
      </div>
      <TravelBlogPosts />
      <Instagram />
    </main>
  );
}

export default TravelBlog;
