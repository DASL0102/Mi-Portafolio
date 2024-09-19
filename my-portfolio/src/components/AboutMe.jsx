// src/components/AboutMe.jsx

import React from 'react';
import '../styles/AboutMe.css'; // Asegúrate de que este archivo CSS existe

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me-content">
        <h2>Sobre Mí</h2>
        <p>
          Hola, soy [Tu Nombre]. Soy un [Tu Profesión] con experiencia en [Tus Áreas de Especialización]. 
          Me apasiona [Tu Pasión o Interés Principal] y me dedico a [Tu Propósito o Mercado Objetivo].
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          En mi tiempo libre, me gusta [Hobby o Actividad]. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
