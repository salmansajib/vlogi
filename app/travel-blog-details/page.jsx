import TravelBlogDetailsForm from "@/components/travel/TravelBlogDetailsForm";
import Link from "next/link";

export const metadata = {
  title: "Vlogi - Travel Blog Details",
  description:
    "blog,personal,photography,food,travel,agency,portfolio,developer,photographer",
};

function TravelBlogDetails() {
  return (
    <main className="vlo-main">
      <div className="vlo-tarvel-details pt-50">
        <div className="container">
          <div className="travel-details-img">
            <img
              src="/images/details/travel-1.jpg"
              alt="Finding The Perfect Trails to Hike Is Easy With Newsletter"
            />
          </div>
          <div className="details-info">
            <div className="vlo-date-1">
              <span>Jan 12, 2026 </span>
            </div>
            <div className="details-meta">
              <div className="details-comment flex items-center gap-[5px]">
                <a href="#">
                  <i className="flaticon-speech-bubble"></i>
                </a>
                <span>10 comment</span>
              </div>
              <div className="details-like flex items-center gap-[5px]">
                <a href="#">
                  <i className="flaticon-heart"></i>
                </a>
                <span>10</span>
              </div>
            </div>
          </div>
          <h2 className="details-title">
            <Link href="/travel-blog-details">
              Finding The Perfect Trails to Hike Is Easy With Newsletter
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.
            Eiusmod tempor. incididu nt ut labore et dolore magna aliqua. Ut
            enim. ad minim veniam, uis nostrud exerc itation ullamco. Laboris
            nisi. ut aliquip ex ea commodo consequat. Duis aute irure dolr.
            inreprehen derit in voluptate velit esse cillum dolore. Eu fugiat
            nulla pariatur. Excep teur sint occaecat non proident, sunt in culpa
            qui officia deserunt mollit anim idlaborum. Sed ut persp iciatis
            unde omnis iste natus error sit.
          </p>
          <blockquote>
            <span>
              <img src="/images/icon/vector-4.svg" alt="" />
            </span>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit quia upper consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt Neque porro fully quisquam est qui dolorem
            ipsum quia dolor sit amet consectetur, adipisci velit sed quia non
            numquam eius modi tempora incidunt aliquam quaerat voluptatem.
          </blockquote>
          <div className="row">
            <div className="col-lg-5">
              <img
                src="/images/details/travel-2.jpg"
                alt="Finding The Perfect Trails to Hike Is Easy With Newsletter"
              />
            </div>
            <div className="col-lg-7 flex">
              <p>
                Adipisci nobis ab recusandae commodo dolorem hac porro ex
                varius, earum integer mollit elit! Per, ea accusantium quibusdam
                metus doloribus felis cumque, mus eleifend diam incididunt
                maiores provident, modi euismod. Totam in quod, deleniti posuere
                minima vero, sed cum.
              </p>
            </div>
          </div>
          <div className="details-social">
            <a href="#">
              <i className="flaticon-facebook-app-symbol"></i>
            </a>
            <a href="#">
              <i className="flaticon-twitter"></i>
            </a>
            <a href="#">
              <i className="flaticon-linkedin"></i>
            </a>
            <a href="#">
              <i className="flaticon-instagram"></i>
            </a>
            <a href="#">Share</a>
          </div>
          <div className="details-posts">
            <div className="posts-img flex items-center">
              <img src="/images/details/travel-post-1.jpg" alt="Next post" />
              <Link href="/travel-blog-details" className="flex items-center">
                <img src="/images/icon/arrow-left.svg" alt="arrow-left" />
                Previous Post
              </Link>
            </div>
            <div className="posts-img flex items-center">
              <Link href="/travel-blog-details" className="flex items-center">
                Next Post
                <img src="/images/icon/arrow-right.svg" alt="arrow-right" />
              </Link>
              <img src="/images/details/travel-post-2.jpg" alt="Next post" />
            </div>
          </div>
        </div>
      </div>

      {/* vlo-post-1 */}
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

      {/* comment */}
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
                  offers luxury accommodation on traveller seeking a relaxing
                  and neat escape in an exclusive location Chaweng Noi! A short
                  drive from both Chaweng and Lamai, the property is a 9km drive
                  from Samui Airport.
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

      {/* Form */}
      <TravelBlogDetailsForm />
    </main>
  );
}

export default TravelBlogDetails;
