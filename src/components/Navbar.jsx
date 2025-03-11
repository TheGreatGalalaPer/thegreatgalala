import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import perilogo from "../assets/perilogo.svg";
import greatgalalalogo from "../assets/gglogotemp.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 50); // Show if scrolling up or near top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-4 py-2 flex justify-between items-center w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Link to="/" onClick={() => handleNavClick("hero")}>
          <img
            className="w-28 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            src={perilogo}
            alt="clglogo"
          />
        </Link>
      </div>
      <div
        className={`nav-links md:static absolute rounded-2xl p-4 md:min-h-fit min-h-[40vh] ${
          menuOpen ? "top-[100%]" : "top-[-1000%]"
        } md:w-auto w-full flex flex-col justify-center items-center px-8 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg transition-all duration-300 ease-in-out z-[101] -left-0`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <Link to="/" onClick={() => handleNavClick("about")}>
              <button>
                <span className="text-xs cursor-pointer text-white">About</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavClick("events")}>
              <button>
                <span className="text-xs cursor-pointer text-white">Event</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={() => handleNavClick("team")}>
              <button>
                <span className="text-xs cursor-pointer text-white">Team</span>
              </button>
            </Link>
          </li>
          <li>
            <button onClick={() => handleNavClick("footer")}>
              <span className="text-xs cursor-pointer text-white">Contact</span>
            </button>
          </li>
          <li>
            <Link to="/broucher" onClick={() => handleNavClick("broucher")}>
              <button>
                <span className="text-xs cursor-pointer text-white">Brochure</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <img
          className="w-28 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
          src={greatgalalalogo}
          alt="culturallogo"
        />
        <button
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer md:hidden"
        >
          {menuOpen ? (
            <IoClose className="text-white" />
          ) : (
            <IoMenu className="text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
