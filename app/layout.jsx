import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import "swiper/css/bundle";

import "@/assets/css/fonts/flaticon_vlogi.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/fonts/typography-1.css";
import "@/assets/css/swiper-bundle.min.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/animate.css";
import "@/assets/css/elements/posts-categories.css";
import "@/assets/css/elements/videos.css";
import "@/assets/css/elements/posts.css";
import "@/assets/css/elements/tags.css";
import "@/assets/css/elements/populer-posts.css";
import "@/assets/css/elements/instagram.css";
import "@/assets/css/dark-light.css";
import "@/assets/css/styles.css";
import "@/assets/css/elements/blog.css";
import "@/assets/css/elements/details.css";
import "@/assets/css/elements/about-us.css";
import "@/assets/css/elements/contact.css";
import "@/assets/css/responsive.css";

import { DarkModeProvider } from "@/context/DarkModeContext";
import TravelHeader from "@/components/travel/TravelHeader";
import TravelFooter from "@/components/travel/TravelFooter";
import BackToTop from "@/components/BackToTop";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Vlogi",
  description:
    "blog,personal,photography,food,travel,agency,portfolio,developer,photographer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <DarkModeProvider>
          <div className="vlo-travel">
            <TravelHeader />
            {children}
            <TravelFooter />
            <BackToTop />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
