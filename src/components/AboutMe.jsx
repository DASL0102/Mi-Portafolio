// src/components/AboutMe.jsx

import React from 'react';
import '../styles/AboutMe.css'; // Asegúrate de que este archivo CSS existe
import { Container } from 'react-bootstrap'; // Asegúrate de que estás importando Container

const AboutMe = () => {
  return (
    <Container fluid className="about-me">
      <div className="card about-me">
        <h2>Know Who I Am</h2>
        <p>
          Hi Everyone, I am Daniel Sanchez from Merida, Venezuela.
        </p>
        <p>
          I am currently employed as a software developer at Vultur.
        </p>
        <p>Apart from coding, some other activities that I love to do include:</p>
        <ul>
          <li>Playing video games</li>
          <li>Listening to music</li>
          <li>Exercising</li>
        </ul>
      </div>
    </Container>
  );
};

export default AboutMe;
