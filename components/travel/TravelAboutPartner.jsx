"use client";

import Marquee from "react-fast-marquee";

const partnersData = [
  {
    id: 1,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 2,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 3,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 4,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 5,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
  {
    id: 6,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 7,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 8,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 9,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 10,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
  {
    id: 11,
    href: "/",
    src: "/images/about/travel-tag-1.png",
    alt: "Paradise Travel",
  },
  {
    id: 12,
    href: "/",
    src: "/images/about/travel-tag-2.png",
    alt: "Sky Travel",
  },
  {
    id: 13,
    href: "/",
    src: "/images/about/travel-tag-3.png",
    alt: "Avata Travel",
  },
  {
    id: 14,
    href: "/",
    src: "/images/about/travel-tag-4.png",
    alt: "Avata Travel",
  },
  {
    id: 15,
    href: "/",
    src: "/images/about/travel-tag-5.png",
    alt: "Avata Travel",
  },
];

function TravelAboutPartner() {
  return (
    <div className="vlo-partner-1">
      <div className="container">
        <div className="partner-slider">
          <Marquee speed={40} pauseOnHover={true} direction="left">
            {partnersData.map((partner) => (
              <div
                className="partner-item mx-auto"
                key={partner.id}
                style={{ paddingInline: "45px" }}
              >
                <a href={partner.href}>
                  <img src={partner.src} alt={partner.alt} />
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default TravelAboutPartner;
