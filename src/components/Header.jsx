
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
              <i className="fas fa-user"></i> Mi Portafolio
            </a>
          </li>
      </ul>
        
      <nav>
        <ul className="menu">
          <li>
          <Link to="/about">Sobre mí</Link>
          </li>
          <li>
          <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
