"use client";

import "./Header.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import hamburger from "/Images/menu-open-button.png";
import hamburgerClosed from "/Images/menu-close-button.png";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="site-header">
      <div className="flex-wrapper">
        <h1 className="site-title">🔥 Fireplace Palace</h1>

        <nav className="navbar">
          <button className="mobile-menu-toggle" onClick={toggle}>
            <Image className="hamburgerImg" src={hamburger} alt="navopen"></Image>
          </button>
          {navbarOpen ? (
            <div className="menu-open">
              <button onClick={toggle}>
                <Image className="hamburgerImg" src={hamburgerClosed} alt="navclosed"></Image>
              </button>

              <ul className="menuList">
                <li>
                  <Link className="menuLink" href="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="menuLink" href="/founders" onClick={handleLinkClick}>
                    Meet the founders
                  </Link>
                  </li>
                  <li>
                  <Link className="menuLink" href="/booking" onClick={handleLinkClick}>
                    Book Consultation
                  </Link> 
                </li>
              </ul>
            </div>
          ) : null}
          <div className="desktop-links">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/founders">Meet the founders</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

