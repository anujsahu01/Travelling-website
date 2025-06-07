import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <a href="#">
            <h1 className="logo">Tourest</h1>
          </a>

          <button
            className="nav-toggle-btn"
            onClick={toggleNav}
            aria-label="Toggle Menu"
          >
            <IonIcon icon={menuOutline} className="open" />
            <IonIcon icon={closeOutline} className="close" />
          </button>

          <nav className={`navbar ${navOpen ? "active" : ""}`}>
            <ul className="navbar-list">
              <li>
                <a href="#" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Contact Us
                </a>
              </li>
            </ul>

            <a href="#" className="btn btn-secondary">
              Booking Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <article></article>
      </main>
    </>
  );
};

export default Header;
