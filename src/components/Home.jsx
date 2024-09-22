// src/components/Home.jsx

import React from 'react';
import '../styles/Home.css'; // Asegúrate de que este archivo CSS existe

import myImage from '../assets/home-main.svg'; // Asegúrate de usar la ruta correcta


const Home = () => {
  return (
    <section id="home" className="home">

      <div className="intro">
        <h1>Hi There! 👋🏻</h1>
        <h2>I'M DANIEL SANCHEZ</h2>
        <h3 className="animated-text">Software Developer|</h3>
      </div>
      <div className="image-container">
        <img src={myImage} alt="Descripción de la imagen" />
      </div>
    </section>
  );
};

export default Home;
