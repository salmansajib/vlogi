"use client";

import Link from "next/link";
import { useDarkModeContext } from "@/context/DarkModeContext";
import { useState } from "react";

const menuItems = [
  {
    label: "Home",
    link: "/travel-blog-details.html",
    subMenu: [
      { label: "Travel", link: "/index.html" },
      { label: "Food", link: "/index-3.html" },
      { label: "Marketing", link: "/index-4.html" },
      { label: "Designer", link: "/index-5.html" },
      { label: "Photography", link: "/index-2.html" },
    ],
  },
  {
    label: "Blog",
    link: "/travel-blog-details.html",
    subMenu: [
      {
        label: "Travel",
        link: "/travel-blog-details.html",
        subMenu: [
          { label: "Travel Blog", link: "/travel-blog.html" },
          { label: "Travel Blog Details", link: "/travel-blog-details.html" },
        ],
      },
      {
        label: "Food",
        link: "/travel-blog-details.html",
        subMenu: [
          { label: "Food Blog", link: "/food-blog.html" },
          { label: "Food Blog Details", link: "/food-blog-details.html" },
        ],
      },
      {
        label: "Marketing",
        link: "/travel-blog-details.html",
        subMenu: [
          { label: "Marketing Blog", link: "/marketing-blog.html" },
          {
            label: "Marketing Blog Details",
            link: "/marketing-blog-details.html",
          },
        ],
      },
      {
        label: "Designer",
        link: "/travel-blog-details.html",
        subMenu: [
          { label: "Designer Blog", link: "/designer-blog.html" },
          {
            label: "Designer Blog Details",
            link: "/designer-blog-details.html",
          },
        ],
      },
      {
        label: "Photography",
        link: "/travel-blog-details.html",
        subMenu: [
          { label: "Photography Blog", link: "/photography-blog.html" },
          {
            label: "Photography Blog Details",
            link: "/photography-blog-details.html",
          },
        ],
      },
    ],
  },
  {
    label: "About Me",
    link: "/travel-blog-details.html",
    subMenu: [
      { label: "Travel", link: "/travel-about.html" },
      { label: "Food", link: "/food-about.html" },
      { label: "Marketing", link: "/marketing-about.html" },
      { label: "Designer", link: "/designer-about.html" },
      { label: "Photography", link: "/photography-about.html" },
    ],
  },
  {
    label: "Contact Me",
    link: "/contact.html",
    className: "vlo-global-btn header-btn",
  },
];

function TravelHeader() {
  const { isDark, toggleTheme } = useDarkModeContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleSubMenu = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <header className="vlo-header-1">
      <div className="container">
        <div className="vlo-header-inner">
          <div className="vlo-logo-wrap">
            <Link href="/index.html" className="vlo-logo">
              <img src="/images/logo/vlo-logo.svg" alt="logo" />
              <img src="/images/logo/vlo-footer-logo-1.svg" alt="" />
            </Link>
          </div>

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
              <button
                className="mobile-menu-icon"
                aria-label="Main Menu Icon"
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <ul
              className="nav-menu"
              style={{ display: menuOpen ? "block" : "none" }}
            >
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`${item.subMenu ? "menu-item-has-children" : ""} ${
                    expandedItems[index] ? "menu-expanded" : ""
                  }`}
                  onClick={() => toggleSubMenu(index)}
                >
                  <Link href={item.link} className={item.className || ""}>
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <ul
                      className="sub-menu"
                      style={{
                        display: expandedItems[index] ? "block" : "none",
                      }}
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={
                            subItem.subMenu ? "menu-item-has-children" : ""
                          }
                          style={{
                            display: expandedItems[index]
                              ? "list-item"
                              : "none",
                          }}
                        >
                          <Link href={subItem.link}>{subItem.label}</Link>
                          {subItem.subMenu && (
                            <ul className="sub-menu">
                              {subItem.subMenu.map(
                                (subSubItem, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <Link href={subSubItem.link}>
                                      {subSubItem.label}
                                    </Link>
                                  </li>
                                )
                              )}
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
