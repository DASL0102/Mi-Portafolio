// src/components/AboutMe.jsx

import React from 'react';
import '../styles/AboutMe.css'; // Asegúrate de que este archivo CSS existe
import { Container } from 'react-bootstrap'; // Asegúrate de que estás importando Container

const AboutMe = () => {
  return (
    <Container fluid className="about-me">
      <div className="about-me-content">
        <h2>Know Who I'M</h2>
        <p>
        Hi Everyone, I am Daniel Sanchez from Merida, Venezuela.
        </p>
        <p>
        I am currently employed as a software developer at Vultur.
        </p>
        <p>
         
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
