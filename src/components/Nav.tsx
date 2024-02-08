import { useState } from "react";
import "../components/nav.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const HomeButton = {
      padding: "8px 20px",
      borderRadius: "50px",
      fontSize: "14px",
      border: "2px solid #47b2e4",
      fontWeight: "600"
    };

  return (
      <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
              <a href="/" className="logo me-auto">
                  <img src="img/byte_gen_logo_white.png" alt="" className="img-fluid" />
              </a>

              <button
                      className="hamburger"
                      onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                      }}
                  >
                      <i className="bi bi-list mobile-nav-toggle"></i>
                  </button>
              
              <div
                  className={
                      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }
              >
                  <ul>
                      <li>
                          <a className="" href="/#about">About</a>
                      </li>
                      <li>
                          <a style={HomeButton} href="/CodeBlackHacks">Register</a>
                      </li>
                  </ul>
              </div>
          </div>
      </header>
  );
}
