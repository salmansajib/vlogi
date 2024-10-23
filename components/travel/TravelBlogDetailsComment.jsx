import Link from "next/link";

function TravelBlogDetailsComment() {
  return (
    <div className="vol-travel-comment">
      <div className="container">
        <div className="comment-title">
          <h2>03 Comments</h2>
        </div>
        <div className="author-comment">
          <div className="author">
            <div className="author-img">
              <img src="/images/icon/author.png" alt="author" />
            </div>
            <div className="author-details">
              <Link href="/" className="author-name">
                Admin Jenifar
              </Link>
              <p className="comment-date">12 Jan 2026</p>
              <p>
                offers luxury accommodation on traveller seeking a relaxing and
                neat escape in an exclusive location Chaweng Noi! A short drive
                from both Chaweng and Lamai, the property is a 9km drive from
                Samui Airport.
              </p>
              <a className="reply" href="#">
                Reply
              </a>
            </div>
          </div>
          <div className="author other">
            <div className="author-img">
              <img src="/images/icon/author.png" alt="author" />
            </div>
            <div className="author-details">
              <Link href="/" className="author-name">
                Anderson
              </Link>
              <p className="comment-date">12 Jan 2026</p>
              <p>
                Friday night walking Street at Fisherman's Village is a 10km
                drive away. Beaches and Golf course are just within 20 minutes
                reach. 3km drive from Samui Airport.
              </p>
              <a className="reply" href="#">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogDetailsComment;
