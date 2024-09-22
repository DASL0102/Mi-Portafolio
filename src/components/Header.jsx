
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';




const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // El usuario está haciendo scroll hacia abajo
        setIsScrollingDown(true);
      } else {
        // El usuario está haciendo scroll hacia arriba
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isScrollingDown ? "hidden" : ""}`}>
      <ul className="menu">
      <li>
            <a href="/Mi-Portafolio/">
            <i className="fas fa-home"></i> Home
            </a>
          </li>
      </ul>
        
      <nav>
        <ul className="menu">
          <li>
          <Link to="about">
            <i className="fas fa-user"></i> About me
          </Link>
          </li>
          <li>
          <Link to="projects">
            <i className="fas fa-project-diagram"></i> Projects
          </Link>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
