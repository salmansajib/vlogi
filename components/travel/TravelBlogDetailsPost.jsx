import Link from "next/link";

function TravelBlogDetailsPost() {
  return (
    <div className="vlo-post-details">
      <div className="container">
        <div className="vlo-heading-1 text-center">
          <h2>Related Posts</h2>
        </div>
        <div className="row vlo-posts-grid-1">
          <div className="col-lg-4 col-md-6">
            <div className="vlo-post-single">
              <div className="vlo-post-img">
                <img
                  src="/images/posts/post-1.jpg"
                  alt="Stop Wasting Your Time And Start Beach Traveling Tour"
                />
              </div>
              <div className="post-info">
                <div className="post-day">HOLIDAY</div>
                <h3 className="post-title">
                  <Link href="/post-details">
                    Stop Wasting Your Time And Start Beach Traveling Tour
                  </Link>
                </h3>
                <div className="post-meta">
                  <div className="post-author">
                    <span>by</span>
                    <a href="#">Anderson</a>
                  </div>
                  <div className="vlo-date-2">
                    <span>Jan 12, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="vlo-post-single">
              <div className="vlo-post-img">
                <img
                  src="/images/posts/post-2.jpg"
                  alt="Chasing the Perfect Scent of Summer Perfumes Today"
                />
              </div>
              <div className="post-info">
                <div className="post-day">HOLIDAY</div>
                <h3 className="post-title">
                  <Link href="/post-details">
                    Chasing the Perfect Scent of Summer Perfumes Today
                  </Link>
                </h3>
                <div className="post-meta">
                  <div className="post-author">
                    <span>by</span>
                    <a href="#">Anderson</a>
                  </div>
                  <div className="vlo-date-2">
                    <span>Jan 12, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="vlo-post-single">
              <div className="vlo-post-img">
                <img
                  src="/images/posts/post-3.jpg"
                  alt="The Positive Impact of Basic Healthy Yoga Routine"
                />
              </div>
              <div className="post-info">
                <div className="post-day">HOLIDAY</div>
                <h3 className="post-title">
                  <Link href="/post-details">
                    The Positive Impact of Basic Healthy Yoga Routine
                  </Link>
                </h3>
                <div className="post-meta">
                  <div className="post-author">
                    <span>by</span>
                    <a href="#">Anderson</a>
                  </div>
                  <div className="vlo-date-2">
                    <span>Jan 12, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogDetailsPost;
