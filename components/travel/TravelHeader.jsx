"use client";

import Link from "next/link";
import { useDarkModeContext } from "@/context/DarkModeContext";
import { useState, useEffect } from "react";
import Logo from "../Logo";

import { motion } from "framer-motion";

// Menu items data
const menuItems = [
  {
    id: 1,
    label: "Home",
    link: "/travel-blog-details.html",
    subMenu: [
      { id: 11, label: "Travel", link: "/" },
      { id: 12, label: "Food", link: "/index-3.html" },
      { id: 13, label: "Marketing", link: "/index-4.html" },
      { id: 14, label: "Designer", link: "/index-5.html" },
      { id: 15, label: "Photography", link: "/index-2.html" },
    ],
  },
  {
    id: 2,
    label: "Blog",
    link: "/travel-blog-details.html",
    subMenu: [
      {
        id: 21,
        label: "Travel",
        link: "/travel-blog-details.html",
        subMenu: [
          { id: 211, label: "Travel Blog", link: "/travel-blog" },
          {
            id: 212,
            label: "Travel Blog Details",
            link: "/travel-blog-details",
          },
        ],
      },
      {
        id: 22,
        label: "Food",
        link: "/travel-blog-details.html",
        subMenu: [
          { id: 221, label: "Food Blog", link: "/food-blog.html" },
          {
            id: 222,
            label: "Food Blog Details",
            link: "/food-blog-details.html",
          },
        ],
      },
      {
        id: 23,
        label: "Marketing",
        link: "/travel-blog-details.html",
        subMenu: [
          { id: 231, label: "Marketing Blog", link: "/marketing-blog.html" },
          {
            id: 232,
            label: "Marketing Blog Details",
            link: "/marketing-blog-details.html",
          },
        ],
      },
      {
        id: 24,
        label: "Designer",
        link: "/travel-blog-details.html",
        subMenu: [
          { id: 241, label: "Designer Blog", link: "/designer-blog.html" },
          {
            id: 242,
            label: "Designer Blog Details",
            link: "/designer-blog-details.html",
          },
        ],
      },
      {
        id: 25,
        label: "Photography",
        link: "/travel-blog-details.html",
        subMenu: [
          {
            id: 251,
            label: "Photography Blog",
            link: "/photography-blog.html",
          },
          {
            id: 252,
            label: "Photography Blog Details",
            link: "/photography-blog-details.html",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "About Me",
    link: "/travel-blog-details.html",
    subMenu: [
      { id: 31, label: "Travel", link: "/travel-about.html" },
      { id: 32, label: "Food", link: "/food-about.html" },
      { id: 33, label: "Marketing", link: "/marketing-about.html" },
      { id: 34, label: "Designer", link: "/designer-about.html" },
      { id: 35, label: "Photography", link: "/photography-about.html" },
    ],
  },
  {
    id: 4,
    label: "Contact Me",
    link: "/contact.html",
    className: "vlo-global-btn header-btn",
  },
];

function TravelHeader() {
  const { isDark, toggleTheme } = useDarkModeContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    if (isMobileView) {
      setMenuOpen((prevState) => !prevState);
    }
  };

  const toggleSubMenu = (id) => {
    // Only allow toggling on mobile view
    if (isMobileView) {
      setExpandedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    }
  };

  useEffect(() => {
    // Function to check if screen size is <= 991px
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        // Ensure all submenus are expanded on larger screens
        const allExpanded = {};
        menuItems.forEach((item) => {
          allExpanded[item.id] = true;
        });
        setExpandedItems(allExpanded);
        setMenuOpen(true); // Ensure menu is always open on larger screens
      }
    };

    // Run on initial load to set the correct menu state
    handleResize();

    // Add event listener for screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="vlo-header-1">
      <div className="container">
        <div className="vlo-header-inner">
          <Logo />

          <nav className="vlo-main-menu">
            <div className="vlo-offcanvas-wrap">
              <div className="form-check form-switch vlo-color-mode">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="darkSwitch"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <label
                  className="custom-control-label"
                  htmlFor="darkSwitch"
                ></label>
              </div>
              {/* Show the mobile icon only on mobile screens */}
              {isMobileView && (
                <button
                  className="mobile-menu-icon"
                  aria-label="Main Menu Icon"
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              )}
            </div>
            <ul
              className="nav-menu"
              style={{
                display: isMobileView ? (menuOpen ? "block" : "none") : "block",
              }}
            >
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`${item.subMenu ? "menu-item-has-children" : ""} ${
                    expandedItems[item.id] ? "menu-expanded" : ""
                  }`}
                  onClick={() => toggleSubMenu(item.id)}
                >
                  <Link href={item.link} className={item.className || ""}>
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <ul
                      className="sub-menu"
                      style={{
                        display: expandedItems[item.id] ? "block" : "none",
                      }}
                    >
                      {item.subMenu.map((subItem) => (
                        <li
                          key={subItem.id}
                          className={
                            subItem.subMenu ? "menu-item-has-children" : ""
                          }
                          style={{
                            display: expandedItems[item.id]
                              ? "list-item"
                              : "none",
                          }}
                        >
                          <Link href={subItem.link}>{subItem.label}</Link>
                          {subItem.subMenu && (
                            <ul className="sub-menu">
                              {subItem.subMenu.map((subSubItem) => (
                                <li key={subSubItem.id}>
                                  <Link href={subSubItem.link}>
                                    {subSubItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default TravelHeader;
