import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import HeaderLogo from "../../assets/logo.png";

const Navbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const path = [
    { href: "home", label: "Home", offset: -60 },
    { href: "about", label: "About", offset: -60 },
    { href: "market", label: "Opportunity", offset: -60 },
    { href: "vocal", label: "Vocal", offset: -60 },
    { href: "future", label: "Future", offset: -60 },
    { href: "why-us", label: "Why Us", offset: -60 },
    { href: "contact", label: "Contact", offset: -60 },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/30 z-50 backdrop-blur-xl px-3 xl:px-6">
      <div className="w-full mx-auto py-3 md:py-1.5 md:px-5 flex items-center justify-between md:justify-evenly gap-3">
        {/* Brand */}
        <a href="/" className="shrink-0 font-bold" onClick={closeMenu}>
          <img src={HeaderLogo} alt={title || "Noah Planet"} className="w-12 md:w-24" />
        </a>

        {/* Navigation Links - Desktop only */}
        <ul className="hidden md:flex items-center justify-end w-full text-sm md:text-base gap-2 md:gap-3 lg:gap-7">
          {path.map(({ href, label, offset }) => (
            <li key={href}>
              <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
                activeClass="active-link"
                className="cursor-pointer text-gray-900 text-sm lg:text-lg hover:text-green-800 transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Button Container */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Toggle main menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FaXmark size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          id="mobile-navigation"
          className={`md:hidden absolute top-full left-0 w-full overflow-hidden border-t border-slate-700 bg-slate-900/95 text-white shadow-xl transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-4 py-3 space-y-2">
            {path.map(({ href, label, offset }) => (
              <li key={href}>
                <Link
                  to={href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                  activeClass="active-link"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-green-200"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;