// src/components/CBH_Nav.tsx
import { useState } from "react";
import "../components/nav.css"

const CBH_Nav = () => {
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
                <a href="/CodeBlackHacks" className="logo me-auto">
                    <img src="img/CBH_byte_gen_logo.png" alt="" className="img-fluid" />
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

                            <a className="" href="#services">Tracks</a>
                        </li>
                        <li>
                            <a className="" href="#faq">FAQ</a>
                        </li>
                        <li>                      
                            <a className="" href="/sponsor">Partner</a>
                        </li>
                        <li>
                            <a style={HomeButton} href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default CBH_Nav;
