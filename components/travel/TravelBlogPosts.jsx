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

function TravelBlogPost() {
  return (
    <div className="vlo-travel-blog">
      <div className="container">
        <div className="vlo-posts-grid-1">
          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="vlo-post-single">
                  <div className="vlo-post-img">
                    <img src={post.imgSrc} alt={post.imgAlt} />
                    <div className="post-social">
                      <a className="comment" href="travel-blog.html">
                        <i className="flaticon-speech-bubble"></i>
                        {post.comments} Comment
                      </a>
                      <a className="like" href="travel-blog.html">
                        <i className="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="post-info">
                    <div className="post-day">{post.category}</div>
                    <h3 className="post-title">
                      <a href={post.postUrl}>{post.title}</a>
                    </h3>
                    <div className="post-meta">
                      <div className="post-author">
                        <span>by</span>
                        <a href="#">{post.author}</a>
                      </div>
                      <div className="vlo-date-2">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogPost;
