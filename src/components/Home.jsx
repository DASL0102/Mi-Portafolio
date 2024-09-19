// src/components/Home.jsx

import React from 'react';
import '../styles/Home.css'; // Asegúrate de que este archivo CSS existe

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hola, soy Daniel Sanchez</h1>
        <p>
        Soy un desarrollador de software con amplia experiencia en el desarrollo de aplicaciones móviles, APIs, backend, microservicios, análisis de datos e inteligencia artificial. Mi pasión por la programación y la IA me impulsa a crear soluciones innovadoras para la optimización de procesos mediante el uso de tecnología avanzada. Además, me gusta el deporte y actualmente soy estudiante de Ingeniería en Sistemas en la ULA.

He desarrollado numerosas herramientas utilizando modelos de reconocimiento, como YOLOv y OCR, para abordar desafíos complejos y ofrecer soluciones efectivas.
        </p>
        <a href="#contact" className="cta-button">Contáctame</a>
      </div>
    </section>
  );
};

export default Home;
