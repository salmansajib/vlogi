import Link from "next/link";

function TravelBlogDetailsMain() {
  return (
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed. Eiusmod
          tempor. incididu nt ut labore et dolore magna aliqua. Ut enim. ad
          minim veniam, uis nostrud exerc itation ullamco. Laboris nisi. ut
          aliquip ex ea commodo consequat. Duis aute irure dolr. inreprehen
          derit in voluptate velit esse cillum dolore. Eu fugiat nulla pariatur.
          Excep teur sint occaecat non proident, sunt in culpa qui officia
          deserunt mollit anim idlaborum. Sed ut persp iciatis unde omnis iste
          natus error sit.
        </p>
        <blockquote>
          <span>
            <img src="/images/icon/vector-4.svg" alt="" />
          </span>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit quia upper consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt Neque porro fully quisquam est qui dolorem ipsum quia
          dolor sit amet consectetur, adipisci velit sed quia non numquam eius
          modi tempora incidunt aliquam quaerat voluptatem.
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
              Adipisci nobis ab recusandae commodo dolorem hac porro ex varius,
              earum integer mollit elit! Per, ea accusantium quibusdam metus
              doloribus felis cumque, mus eleifend diam incididunt maiores
              provident, modi euismod. Totam in quod, deleniti posuere minima
              vero, sed cum.
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
  );
}

export default TravelBlogDetailsMain;
