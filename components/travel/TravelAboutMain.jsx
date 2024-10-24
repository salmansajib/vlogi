"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ endValue }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.7, // 50% of the component must be visible
  });

  return (
    <h2 ref={ref}>
      {inView ? (
        <CountUp start={0} end={endValue} duration={3} className="count" />
      ) : (
        0 // Default to 0 when not in view
      )}
      +
    </h2>
  );
};

function TravelAboutMain() {
  return (
    <div className="vlo-about-1">
      <div className="vlo-banner-shapes">
        <img src="/images/shape/ellipse-13.svg" alt="ellipse-13" />
        <img src="/images/shape/ellipse-16.svg" alt="ellipse-16" />
        <img src="/images/shape/vector-3.svg" alt="ellipse-17" />
        <img src="/images/shape/rectangle-141.svg" alt="rectangle-141" />
        <img src="/images/shape/vector-2.svg" alt="vector-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <div className="about-heading">
                <p>About Me</p>
                <h2>How I Started Traveling</h2>
              </div>
              <div className="banner-desc">
                <p>
                  The Mondok City Hotel's immediate area provides guests with
                  the utmost convenience to travel and see old Bandung many
                  attractions and most of it within walking distance. Whether
                  you want to visit the must-see Gedung Sate, the great
                </p>
                <p>
                  in paris van Java, sample some authentic Indonesia with europe
                  go an adventure with the unique local transportation options
                  Mondok City Hotel provides guests with memorable experiences
                  paired with comfortable services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/banner/banner-1.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
      <div className="vlo-about-counter">
        <div className="container">
          <div className="vlo-counter-inner">
            <Counter endValue={64} />
            <p>Countries Visited</p>
          </div>
          <div className="vlo-counter-inner">
            <Counter endValue={12} />
            <p>Years Travelled</p>
          </div>
          <div className="vlo-counter-inner">
            <Counter endValue={460} />
            <p>Posts Written</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAboutMain;
