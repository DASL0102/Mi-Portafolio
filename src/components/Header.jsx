
import React, { useState, useEffect } from "react";



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
            <a href="/Mi-Portafolio/about">
              <i className="fas fa-user"></i> Sobre mí
            </a>
          </li>
          <li>
            <a href="/Mi-Portafolio/projects">
              <i className="fas fa-folder"></i> Proyectos
            </a>
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
